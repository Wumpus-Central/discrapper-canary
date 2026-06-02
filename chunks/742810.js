"use strict";
n.d(t, { D7: () => f, W2: () => l, _$: () => c, q1: () => p, rS: () => o });
var i,
    r = n(945810),
    s = n(120700),
    a = n(722847),
    o = (((i = {}).LEGACY = "legacy"), (i.UNIFIED = "unified"), i);
let l = (0, r.mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    u = new Set([s.C.PREMIUM_CHECKOUT, s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]),
    c = (0, r.mj)({
        name: "2026-04-unified-checkout-ui-premium-flows",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0, enabledCheckoutFlows: new Set([]) },
        variations: { 1: { enabled: !0, variation: 1, enabledCheckoutFlows: u } },
    }),
    d = new Set([
        s.C.ORB_CHECKOUT,
        s.C.COLLECTIBLES_CHECKOUT,
        s.C.SLAYER_STOREFRONT_CHECKOUT,
        s.C.GUILD_BOOST_CHECKOUT,
        s.C.GUILD_PRODUCT_CHECKOUT,
        s.C.GUILD_ROLE_CHECKOUT,
        s.C.PREMIUM_APPS_OTP_CHECKOUT,
        s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    ]),
    _ = [l, c],
    h = (e, t) =>
        !!(null != e && d.has(e)) ||
        t.some(
            (t) =>
                (!!t.enabled &&
                    (null == t.enabledCheckoutFlows || (null != e && t.enabledCheckoutFlows?.has(e) === !0))) ||
                !1,
        ),
    f = (e) => {
        let { location: t } = e;
        return h(
            (0, a.t4)((e) => e.unifiedCheckoutFlow),
            _.map((e) => e.useConfig({ location: t })),
        );
    },
    p = (e) => {
        let { location: t, unifiedCheckoutFlow: n } = e;
        return h(
            n,
            _.map((e) => e.getConfig({ location: t })),
        );
    };
