n.d(t, {
    WJ: () => a,
    dk: () => i,
});
let r = (0, n(945810).mj)({
        name: "2025-12-user-settings-redesign-3",
        kind: "user",
        defaultConfig: {
            enabled: !1,
        },
        variations: {
            0: {
                enabled: !1,
            },
            1: {
                enabled: !0,
            },
        },
    }),
    i = (e) =>
        r.useConfig({
            location: e,
        }).enabled,
    a = (e) =>
        r.getConfig({
            location: e,
        }).enabled;
