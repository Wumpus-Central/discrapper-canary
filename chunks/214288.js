n.d(t, { B: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_guild_profile_to_game_profile',
    label: 'Enables opening game profile from guild profile',
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
    let { enabled: e } = r.useExperiment({ location: 'GuildProfileToGameProfileExperiment' }, { autoTrackExposure: !0 });
    return e;
}
