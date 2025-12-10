t.d(n, { Y: () => i });
let l = (0, t(427164).le)({
    name: "2025-09-user-profile-wishlist-editing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    let { location: n } = e;
    return l.useConfig({ location: n }).enabled;
}
