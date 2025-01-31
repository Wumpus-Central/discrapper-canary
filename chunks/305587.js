n.d(e, { Xs: () => a });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_dm_mute_feedback',
    label: 'DM Mute Feedback Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable DM Mute Feedback Survey',
            config: { enabled: !0 }
        }
    ]
});
function a(t) {
    let { enabled: e } = i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return e;
}
