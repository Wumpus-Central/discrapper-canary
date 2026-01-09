n.d(t, { eg: () => i });
let r = (0, n(427164).le)({
    name: "2025-11-guild-powerups-mobile",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        notificationsEnabled: !1,
    },
    variations: {
        1: {
            enabled: !0,
            notificationsEnabled: !1,
        },
        2: {
            enabled: !0,
            notificationsEnabled: !0,
        },
    },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
