n.d(t, {
    Qv: () => u,
    p0: () => l,
    yD: () => o
});
var i = n(544891),
    r = n(570140),
    a = n(73346),
    s = n(981631);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        r.Z.wait(() => {
            r.Z.dispatch({
                type: 'ENTITLEMENT_FETCH_APPLICATION_START',
                applicationId: e
            });
        }),
        i.tn
            .get({
                url: s.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
                oldFormErrors: !0,
                query: { exclude_consumed: t },
                rejectWithError: !0
            })
            .then(
                (t) => (
                    r.Z.dispatch({
                        type: 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS',
                        applicationId: e,
                        entitlements: t.body
                    }),
                    t.body
                )
            )
            .catch(() => {
                r.Z.dispatch({
                    type: 'ENTITLEMENT_FETCH_APPLICATION_FAIL',
                    applicationId: e
                });
            })
    );
}
async function l(e) {
    let { withSku: t = !1, withApplication: n = !1, excludeEnded: a = !0, entitlementType: o } = e;
    r.Z.dispatch({ type: 'ENTITLEMENTS_FETCH_FOR_USER_START' });
    try {
        let e = await i.tn.get({
            url: s.ANM.ENTITLEMENTS_FOR_USER,
            query: {
                with_sku: t,
                with_application: n,
                entitlement_type: o,
                exclude_ended: a
            },
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS',
            entitlements: e.body,
            excludeEnded: a
        });
    } catch (e) {
        r.Z.dispatch({ type: 'ENTITLEMENTS_FETCH_FOR_USER_FAIL' });
    }
}
async function u() {
    r.Z.dispatch({ type: 'ENTITLEMENTS_GIFTABLE_FETCH' });
    try {
        let e = await (0, a.Kb)({
            url: s.ANM.ENTITLEMENTS_GIFTABLE,
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS',
            entitlements: e.body
        });
    } catch (e) {
        r.Z.dispatch({ type: 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL' });
    }
}
