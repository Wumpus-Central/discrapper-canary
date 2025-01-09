n.d(t, {
    Dj: function () {
        return l;
    },
    i1: function () {
        return r;
    }
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
        { enabled: l } = i.getCurrentConfig(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: r }
        );
    return l;
}
function l(e) {
    let { guildId: t, location: n, autoTrackExposure: r = !0 } = e,
        { enabled: l } = i.useExperiment(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: r }
        );
    return l;
}
