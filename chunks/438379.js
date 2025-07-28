n.d(t, { J: () => o });
let r = (0, n(818083).B)({
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
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: o } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return o;
}
