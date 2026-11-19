let r = (0, n(945810).mj)({
    name: "2026-10-collectibles-storefront-pricing-integration",
    kind: "user",
    defaultConfig: { enabled: !1, fetchOnShopButtonPrefetch: !1 },
    variations: {
        0: { enabled: !1, fetchOnShopButtonPrefetch: !1 },
        1: { enabled: !0, fetchOnShopButtonPrefetch: !0 },
        2: { enabled: !0, fetchOnShopButtonPrefetch: !1 },
    },
});
n.d(
    e,
    {},
    {
        M: function (t) {
            return r.getConfig({ location: t }).fetchOnShopButtonPrefetch;
        },
        s: function (t) {
            return r.useConfig({ location: t }).enabled;
        },
    },
);
