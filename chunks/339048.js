"use strict";
n.d(t, { LM: () => o, XJ: () => d, qw: () => l });
var i = n(636537),
    r = n(228366),
    s = n(371794),
    a = n(652215);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        r.h.wait(() => {
            r.h.dispatch({ type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId: e });
        }),
        i.Bo.get({
            url: a.Rsh.ENTITLEMENTS_FOR_APPLICATION(e),
            oldFormErrors: !0,
            query: { exclude_consumed: t },
            rejectWithError: !0,
        })
            .then(
                (t) => (
                    r.h.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                        applicationId: e,
                        entitlements: t.body,
                    }),
                    t.body
                ),
            )
            .catch(() => {
                r.h.dispatch({ type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId: e });
            })
    );
}
async function l(e) {
    let { withSku: t = !1, withApplication: n = !1, excludeEnded: s = !0, entitlementType: o } = e;
    r.h.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
    try {
        let e = await i.Bo.get({
            url: a.Rsh.ENTITLEMENTS_FOR_USER,
            query: { with_sku: t, with_application: n, entitlement_type: o, exclude_ended: s },
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: e.body, excludeEnded: s });
    } catch (e) {
        r.h.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
    }
}
async function d() {
    r.h.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
    try {
        let e = await (0, s.aP)({ url: a.Rsh.ENTITLEMENTS_GIFTABLE, rejectWithError: !0 });
        r.h.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: e.body });
    } catch (e) {
        r.h.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
    }
}
