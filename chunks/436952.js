n.d(t, {
    qM: () => s,
    rr: () => a,
    sQ: () => o,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    id: "2025-03_dm_chat_wallpapers_viewer",
    kind: "user",
    label: "DM Chat Wallpapers Viewer",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enables viewing dm chat wallpapers",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }).enabled;
}
let s = (0, r.B)({
    id: "2025-04_dm_chat_wallpapers_theming",
    kind: "user",
    label: "DM Chat Wallpapers Theming",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enables new theming customizations on DM chat wallpapers",
            config: { enabled: !0 },
        },
        {
            id: 2,
            label: "Enables new theming customizations and light mode on DM chat wallpapers",
            config: {
                enabled: !0,
                lightMode: !0,
            },
        },
    ],
});
