n.d(t, {
    Tz: () => o,
    cE: () => l,
    j0: () => s
});
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'guild',
    id: '2025-06_server_content_level_setting',
    label: 'Guild content level setting',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Guild content level setting',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { guildId: t, location: n } = e;
    return l.getCurrentConfig(
        {
            guildId: t,
            location: n
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
function s(e) {
    let { guildId: t, location: n } = e;
    return l.getCurrentConfig(
        {
            guildId: t,
            location: n
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
