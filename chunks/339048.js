"use strict";
n.d(t, { LM: () => o, XJ: () => u, qw: () => l });
var r = n(562465),
    i = n(73153),
    s = n(371794),
    a = n(652215);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        i.h.wait(() => {
            i.h.dispatch({ type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId: e });
        }),
        r.Bo.get({
            url: a.Rsh.ENTITLEMENTS_FOR_APPLICATION(e),
            oldFormErrors: !0,
            query: { exclude_consumed: t },
            rejectWithError: !0,
        })
            .then(
                (t) => (
                    i.h.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                        applicationId: e,
                        entitlements: t.body,
                    }),
                    t.body
                ),
            )
            .catch(() => {
                i.h.dispatch({ type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId: e });
            })
    );
}
async function l(e) {
    let { withSku: t = !1, withApplication: n = !1, excludeEnded: s = !0, entitlementType: o } = e;
    i.h.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
    try {
        let e = await r.Bo.get({
            url: a.Rsh.ENTITLEMENTS_FOR_USER,
            query: { with_sku: t, with_application: n, entitlement_type: o, exclude_ended: s },
            rejectWithError: !0,
        });
        i.h.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: e.body, excludeEnded: s });
    } catch (e) {
        i.h.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
    }
}
async function u() {
    i.h.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
    try {
        let e = await (0, s.aP)({ url: a.Rsh.ENTITLEMENTS_GIFTABLE, rejectWithError: !0 });
        i.h.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: e.body });
    } catch (e) {
        i.h.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
    }
}
