"use strict";
n.d(t, { D7: () => c });
var r = n(945810),
    i = n(156312),
    s = n(120700);
let a = new Set([s.C.ORB_CHECKOUT, s.C.COLLECTIBLES_CHECKOUT, s.C.SLAYER_STOREFRONT_CHECKOUT]),
    o = (0, r.mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    l = (0, r.mj)({
        name: "2026-02-unified-checkout-ui-otp-group-1",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: a } },
    }),
    u = (e) => {
        let { unifiedCheckoutFlow: t, mainUnifiedCheckoutConfig: n, otpUnifiedCheckoutConfig: r } = e;
        return !!n.enabled || (null != t && !!(r.enabled && r.enabledCheckoutFlows.has(t)));
    },
    c = (e) => {
        let { location: t } = e,
            { unifiedCheckoutFlow: n } = (0, i.P5)();
        return u({
            unifiedCheckoutFlow: n,
            mainUnifiedCheckoutConfig: o.useConfig({ location: t }),
            otpUnifiedCheckoutConfig: l.useConfig({ location: t }),
        });
    };
