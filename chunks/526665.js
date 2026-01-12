n.d(t, {
    BK: () => l,
    Gl: () => d,
    KV: () => s,
    Ml: () => c,
    gN: () => u,
    gj: () => o,
});
var r = n(427164);
let i = (0, r.le)({
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
    a = (0, r.le)({
        name: "2025-12-user-settings-redesign-3",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    }),
    o = (e) => i.useConfig({ location: e }).showRedesignedNotifications,
    s = (e) => i.getConfig({ location: e }).showRedesignedNotifications,
    l = (e) => i.useConfig({ location: e }).showRedesignedVoiceAndVideo,
    c = (e) => i.getConfig({ location: e }).showRedesignedVoiceAndVideo,
    u = (e) => a.useConfig({ location: e }).enabled,
    d = (e) => a.getConfig({ location: e }).enabled;
