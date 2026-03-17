"use strict";
n.d(t, { D7: () => d, W2: () => l, q1: () => _, rS: () => a });
var r = n(945810),
    i = n(156312),
    s = n(120700),
    a = (function (e) {
        return (e.LEGACY = "legacy"), (e.UNIFIED = "unified"), e;
    })({});
let o = new Set([s.C.ORB_CHECKOUT, s.C.COLLECTIBLES_CHECKOUT, s.C.SLAYER_STOREFRONT_CHECKOUT]),
    l = (0, r.mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    u = (0, r.mj)({
        name: "2026-02-unified-checkout-ui-otp-group-1",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: o } },
    }),
    c = (e) => {
        let { unifiedCheckoutFlow: t, mainUnifiedCheckoutConfig: n, otpUnifiedCheckoutConfig: r } = e;
        return !!n.enabled || (null != t && !!(r.enabled && r.enabledCheckoutFlows.has(t)));
    },
    d = (e) => {
        let { location: t } = e,
            { unifiedCheckoutFlow: n } = (0, i.P5)();
        return c({
            unifiedCheckoutFlow: n,
            mainUnifiedCheckoutConfig: l.useConfig({ location: t }),
            otpUnifiedCheckoutConfig: u.useConfig({ location: t }),
        });
    },
    _ = (e) => {
        let { location: t, unifiedCheckoutFlow: n } = e;
        return c({
            unifiedCheckoutFlow: n,
            mainUnifiedCheckoutConfig: l.getConfig({ location: t }),
            otpUnifiedCheckoutConfig: u.getConfig({ location: t }),
        });
    };
