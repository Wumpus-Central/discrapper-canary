"use strict";
n.d(t, { D7: () => h, W2: () => l, _$: () => d, nG: () => u, q1: () => m, rS: () => a });
var r = n(945810),
    i = n(156312),
    s = n(120700),
    a = (function (e) {
        return (e.LEGACY = "legacy"), (e.UNIFIED = "unified"), e;
    })({});
let o = new Set([
        s.C.GUILD_BOOST_CHECKOUT,
        s.C.GUILD_PRODUCT_CHECKOUT,
        s.C.GUILD_ROLE_CHECKOUT,
        s.C.PREMIUM_APPS_OTP_CHECKOUT,
        s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    ]),
    l = (0, r.mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    u = (0, r.mj)({
        name: "2026-02-unified-checkout-ui-group-2",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: o } },
    }),
    c = new Set([s.C.PREMIUM_CHECKOUT, s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]),
    d = (0, r.mj)({
        name: "2026-04-unified-checkout-ui-premium-flows",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: c } },
    }),
    _ = new Set([s.C.ORB_CHECKOUT, s.C.COLLECTIBLES_CHECKOUT, s.C.SLAYER_STOREFRONT_CHECKOUT]),
    f = [l, u, d],
    p = (e, t) =>
        !!(null != e && _.has(e)) ||
        t.some(
            (t) =>
                (!!t.enabled &&
                    (null == t.enabledCheckoutFlows || (null != e && t.enabledCheckoutFlows?.has(e) === !0))) ||
                !1,
        ),
    h = (e) => {
        let { location: t } = e,
            { unifiedCheckoutFlow: n } = (0, i.P5)();
        return p(
            n,
            f.map((e) => e.useConfig({ location: t })),
        );
    },
    m = (e) => {
        let { location: t, unifiedCheckoutFlow: n } = e;
        return p(
            n,
            f.map((e) => e.getConfig({ location: t })),
        );
    };
