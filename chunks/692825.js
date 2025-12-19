n.d(t, { w: () => r });
let a = (0, n(427164).le)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function r(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).enabled;
}
