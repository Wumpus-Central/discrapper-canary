n.d(t, {
    R: () => s,
    c: () => l
});
var r = n(818083),
    i = n(984134),
    a = n(345655);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-05_input_profiles_experiment_web',
    label: 'Audio input profiles (studio mode)',
    defaultConfig: { enabledInputProfiles: [] },
    treatments: [
        {
            id: 1,
            label: 'Show Voice Isolation, Studio, and Custom',
            config: {
                enabledInputProfiles: [a._.VOICE_ISOLATION, a._.STUDIO, a._.CUSTOM]
            }
        }
    ]
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return o.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
