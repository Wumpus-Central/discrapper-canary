n.d(t, {
    A: () => o,
    P: () => i
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_user_profile_editing_holdout_h1',
    label: 'User Profile Editing Holdout Experiment',
    defaultConfig: { isInHoldout: !1 },
    treatments: [
        {
            id: 1,
            label: 'Is in Holdout',
            config: { isInHoldout: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
