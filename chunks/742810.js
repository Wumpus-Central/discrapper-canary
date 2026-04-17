"use strict";
n.d(t, { D7: () => f, W2: () => o, _$: () => u, q1: () => p, rS: () => a });
var r = n(945810),
    i = n(156312),
    s = n(120700),
    a = (function (e) {
        return (e.LEGACY = "legacy"), (e.UNIFIED = "unified"), e;
    })({});
let o = (0, r.mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    l = new Set([s.C.PREMIUM_CHECKOUT, s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]),
    u = (0, r.mj)({
        name: "2026-04-unified-checkout-ui-premium-flows",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: l } },
    }),
    c = new Set([
        s.C.ORB_CHECKOUT,
        s.C.COLLECTIBLES_CHECKOUT,
        s.C.SLAYER_STOREFRONT_CHECKOUT,
        s.C.GUILD_BOOST_CHECKOUT,
        s.C.GUILD_PRODUCT_CHECKOUT,
        s.C.GUILD_ROLE_CHECKOUT,
        s.C.PREMIUM_APPS_OTP_CHECKOUT,
        s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    ]),
    d = [o, u],
    _ = (e, t) =>
        !!(null != e && c.has(e)) ||
        t.some(
            (t) =>
                (!!t.enabled &&
                    (null == t.enabledCheckoutFlows || (null != e && t.enabledCheckoutFlows?.has(e) === !0))) ||
                !1,
        ),
    f = (e) => {
        let { location: t } = e,
            { unifiedCheckoutFlow: n } = (0, i.P5)();
        return _(
            n,
            d.map((e) => e.useConfig({ location: t })),
        );
    },
    p = (e) => {
        let { location: t, unifiedCheckoutFlow: n } = e;
        return _(
            n,
            d.map((e) => e.getConfig({ location: t })),
        );
    };
