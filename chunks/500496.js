n.d(t, {
    Tz: () => o,
    cE: () => l,
    j0: () => a
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'guild',
    id: '2025-06_server_content_level_setting',
    label: 'Guild content level setting',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
function a(e) {
    let { guildId: t, location: n } = e;
    return l.getCurrentConfig(
        {
            guildId: t,
            location: n
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
