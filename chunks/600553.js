n.d(t, {
    Dj: () => a,
    i1: () => r
});
let i = (0, n(987170).Z)({
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
function r(e) {
    let { guildId: t, location: n, autoTrackExposure: r = !0 } = e,
        { enabled: a } = i.getCurrentConfig(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: r }
        );
    return a;
}
function a(e) {
    let { guildId: t, location: n, autoTrackExposure: r = !0 } = e,
        { enabled: a } = i.useExperiment(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: r }
        );
    return a;
}
