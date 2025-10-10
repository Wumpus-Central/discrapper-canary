n.d(t, { S: () => i });
let r = (0, n(427164).le)({
    name: "2025-09-user-profile-wishlist-viewing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
