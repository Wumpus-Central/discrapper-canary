n.d(t, {
    E7: () => o,
    WJ: () => u,
    dk: () => c,
    qz: () => l,
    t0: () => s,
});
var r = n(945810);
let i = (0, r.mj)({
        name: "2025-09-user-settings-redesign-2a",
        kind: "user",
        defaultConfig: {
            showRedesignedNotifications: !1,
            showRedesignedVoiceAndVideo: !1,
        },
        variations: {
            0: {
                showRedesignedNotifications: !1,
                showRedesignedVoiceAndVideo: !1,
            },
            1: {
                showRedesignedNotifications: !0,
                showRedesignedVoiceAndVideo: !0,
            },
        },
    }),
    a = (0, r.mj)({
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
    s = (e) =>
        i.useConfig({
            location: e,
        }).showRedesignedNotifications,
    o = (e) =>
        i.getConfig({
            location: e,
        }).showRedesignedNotifications,
    l = (e) =>
        i.getConfig({
            location: e,
        }).showRedesignedVoiceAndVideo,
    c = (e) =>
        a.useConfig({
            location: e,
        }).enabled,
    u = (e) =>
        a.getConfig({
            location: e,
        }).enabled;
