"use strict";
n.d(t, { D7: () => E, W2: () => l, _$: () => d, q1: () => h, rS: () => o });
var r,
    i = n(945810),
    s = n(156312),
    a = n(120700),
    o = (((r = {}).LEGACY = "legacy"), (r.UNIFIED = "unified"), r);
let l = (0, i.mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    u = new Set([a.C.PREMIUM_CHECKOUT, a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]),
    d = (0, i.mj)({
        name: "2026-04-unified-checkout-ui-premium-flows",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: u } },
    }),
    c = new Set([
        a.C.ORB_CHECKOUT,
        a.C.COLLECTIBLES_CHECKOUT,
        a.C.SLAYER_STOREFRONT_CHECKOUT,
        a.C.GUILD_BOOST_CHECKOUT,
        a.C.GUILD_PRODUCT_CHECKOUT,
        a.C.GUILD_ROLE_CHECKOUT,
        a.C.PREMIUM_APPS_OTP_CHECKOUT,
        a.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    ]),
    _ = [l, d],
    f = (e, t) =>
        !!(null != e && c.has(e)) ||
        t.some(
            (t) =>
                (!!t.enabled &&
                    (null == t.enabledCheckoutFlows || (null != e && t.enabledCheckoutFlows?.has(e) === !0))) ||
                !1,
        ),
    E = (e) => {
        let { location: t } = e,
            { unifiedCheckoutFlow: n } = (0, s.P5)();
        return f(
            n,
            _.map((e) => e.useConfig({ location: t })),
        );
    },
    h = (e) => {
        let { location: t, unifiedCheckoutFlow: n } = e;
        return f(
            n,
            _.map((e) => e.getConfig({ location: t })),
        );
    };
