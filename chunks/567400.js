n.d(t, { Y: () => l });
let a = (0, n(427164).le)({
    name: "2025-09-user-profile-wishlist-editing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function l(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).enabled;
}
