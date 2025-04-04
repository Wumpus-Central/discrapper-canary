n.d(t, { h: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-12_new_guild_profile',
    label: 'Enables new guild profile',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function i() {
    let { enabled: e } = r.useExperiment({ location: 'GuildProfileExperiment' }, { autoTrackExposure: !1 });
    return e;
}
