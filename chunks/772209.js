n.d(t, { q: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_user_profile_awareness_and_engagement_holdout_h1',
    label: 'User Profile Awareness and Engagement Holdout Experiment',
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
        { isInHoldout: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
