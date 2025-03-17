n.d(t, {
    FN: () => a,
    ld: () => o,
    rr: () => d,
    sQ: () => s,
    sX: () => u
});
var r,
    i = n(818083),
    l = n(987338),
    a = (((r = {}).CONTEXT_MENU = 'context_menu'), (r.TOOLBAR = 'toolbar'), r);
let o = (0, i.B)({
    id: '2025-03_dm_chat_wallpapers_setter',
    kind: 'user',
    label: 'DM Chat Wallpapers',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
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
});
function u(e) {
    let { location: t } = e;
    return o.useExperiment({ location: t });
}
let d = (0, i.B)({
    id: '2025-03_dm_chat_wallpapers_viewer',
    kind: 'user',
    label: 'DM Chat Wallpapers Viewer',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables viewing dm chat wallpapers',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: t } = e;
    return d.useExperiment({ location: t }).enabled;
}
