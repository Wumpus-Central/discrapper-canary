r.d(t, { Y: () => l });
let n = (0, r(427164).le)({
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
    return n.useConfig({ location: t }).enabled;
}
