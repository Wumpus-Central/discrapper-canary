n.d(t, {
    KV: () => c,
    NT: () => u,
    gj: () => l,
    wy: () => s,
    yP: () => o,
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
    o = (e) => i.getConfig({ location: e }).enabled,
    s = (e) => i.useConfig({ location: e }).enabled,
    l = (e) => {
        let t = s(e),
            n = a.useConfig({ location: e }).showRedesignedNotifications;
        return t && n;
    },
    c = (e) => !!o(e) && a.getConfig({ location: e }).showRedesignedNotifications,
    u = (e) => i.useConfig({ location: e }).showLegacyOpen;
