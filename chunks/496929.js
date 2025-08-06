n.d(t, {
    Qv: () => c,
    p0: () => l,
    yD: () => s
});
var r = n(544891),
    i = n(570140),
    o = n(73346),
    a = n(981631);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'ENTITLEMENT_FETCH_APPLICATION_START',
                applicationId: e
            });
        }),
        r.tn
            .get({
                url: a.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
                oldFormErrors: !0,
                query: { exclude_consumed: t },
                rejectWithError: !0
            })
            .then(
                (t) => (
                    i.Z.dispatch({
                        type: 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS',
                        applicationId: e,
                        entitlements: t.body
                    }),
                    t.body
                )
            )
            .catch(() => {
                i.Z.dispatch({
                    type: 'ENTITLEMENT_FETCH_APPLICATION_FAIL',
                    applicationId: e
                });
            })
    );
}
async function l(e) {
    let { withSku: t = !1, withApplication: n = !1, excludeEnded: o = !0, entitlementType: s } = e;
    i.Z.dispatch({ type: 'ENTITLEMENTS_FETCH_FOR_USER_START' });
    try {
        let e = await r.tn.get({
            url: a.ANM.ENTITLEMENTS_FOR_USER,
            query: {
                with_sku: t,
                with_application: n,
                entitlement_type: s,
                exclude_ended: o
            },
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS',
            entitlements: e.body,
            excludeEnded: o
        });
    } catch (e) {
        i.Z.dispatch({ type: 'ENTITLEMENTS_FETCH_FOR_USER_FAIL' });
    }
}
async function c() {
    i.Z.dispatch({ type: 'ENTITLEMENTS_GIFTABLE_FETCH' });
    try {
        let e = await (0, o.Kb)({
            url: a.ANM.ENTITLEMENTS_GIFTABLE,
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS',
            entitlements: e.body
        });
    } catch (e) {
        i.Z.dispatch({ type: 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL' });
    }
}
