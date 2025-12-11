n.d(t, {
    BK: () => d,
    Gl: () => _,
    KV: () => u,
    Ml: () => f,
    NT: () => m,
    gN: () => p,
    gj: () => c,
    wy: () => l,
    yP: () => s,
});
var r = n(427164);
let i = (0, r.le)({
        name: "2025-09-user-settings-redesign-1",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            showLegacyOpen: !1,
        },
        variations: {
            0: {
                enabled: !1,
                showLegacyOpen: !1,
            },
            1: {
                enabled: !0,
                showLegacyOpen: !1,
            },
            2: {
                enabled: !0,
                showLegacyOpen: !0,
            },
        },
    }),
    a = (0, r.le)({
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
    o = (0, r.le)({
        name: "2025-12-user-settings-redesign-3",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    }),
    s = (e) => i.getConfig({ location: e }).enabled,
    l = (e) => i.useConfig({ location: e }).enabled,
    c = (e) => {
        let t = l(e),
            n = a.useConfig({ location: e }).showRedesignedNotifications;
        return t && n;
    },
    u = (e) => !!s(e) && a.getConfig({ location: e }).showRedesignedNotifications,
    d = (e) => {
        let t = l(e),
            n = a.useConfig({ location: e }).showRedesignedVoiceAndVideo;
        return t && n;
    },
    f = (e) => !!s(e) && a.getConfig({ location: e }).showRedesignedVoiceAndVideo,
    p = (e) => o.useConfig({ location: e }).enabled,
    _ = (e) => o.getConfig({ location: e }).enabled,
    m = (e) => i.useConfig({ location: e }).showLegacyOpen;
