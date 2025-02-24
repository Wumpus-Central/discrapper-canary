n.d(t, { S: () => o });
let r = (0, n(818083).B)({
    id: '2025-02_quest_bar_reward_available_exclamation_mark',
    kind: 'user',
    label: 'Quest Bar Reward Available Exclamation Mark',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Reward Available Exclamation Mark',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: n }).enabled;
}
