a.d(t, { J: () => r });
let n = (0, a(818083).B)({
    kind: 'user',
    id: '2025-07_user_profile_holdout_h2',
    label: 'User Profile Holdout H2 Experiment',
    defaultConfig: { isInHoldout: !1 },
    treatments: [
        {
            id: 1,
            label: 'Is in holdout',
            config: { isInHoldout: !0 }
        }
    ]
});
function r(e) {
    let { location: t, autoTrackExposure: a = !0 } = e,
        { isInHoldout: r } = n.useExperiment({ location: t }, { autoTrackExposure: a });
    return r;
}
