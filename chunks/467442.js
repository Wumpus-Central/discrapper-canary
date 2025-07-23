n.d(t, { pZ: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-07_age_verification_feedback',
    label: 'Age Verification Feedback Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Age Verification Feedback Survey',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
