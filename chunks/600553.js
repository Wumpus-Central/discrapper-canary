n.d(t, {
    Dj: () => o,
    i1: () => i
});
let r = (0, n(987170).Z)({
    kind: 'guild',
    id: '2025-01_guild_settings_foundation',
    label: 'Guild Settings Foundation Revamp',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Guild Settings Foundation Revamp',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { guildId: t, location: n, autoTrackExposure: i = !0 } = e,
        { enabled: o } = r.getCurrentConfig(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: i }
        );
    return o;
}
function o(e) {
    let { guildId: t, location: n, autoTrackExposure: i = !0 } = e,
        { enabled: o } = r.useExperiment(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: i }
        );
    return o;
}
