t.d(n, { Y: () => c });
let o = (0, t(427164).le)({
    name: "2025-09-user-profile-wishlist-editing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function c(e) {
    let { location: n } = e;
    return o.useConfig({ location: n }).enabled;
}
