n.d(t, {
    ld: () => l,
    rr: () => o
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        id: '2025-03_dm_chat_wallpapers_setter',
        kind: 'user',
        label: 'DM Chat Wallpapers',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables setting dm chat wallpapers in the context menu',
                config: {
                    enabled: !0,
                    entryPoint: 'context_menu'
                }
            },
            {
                id: 2,
                label: 'Enables setting dm chat wallpapers in the toolbar',
                config: {
                    enabled: !0,
                    entryPoint: 'toolbar'
                }
            }
        ]
    }),
    o = (0, r.B)({
        id: '2025-03_dm_chat_wallpapers_viewer',
        kind: 'user',
        label: 'DM Chat Wallpapers Viewer',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables viewing dm chat wallpapers',
                config: { enabled: !0 }
            }
        ]
    });
