n.d(t, {
    R: () => o,
    c: () => s
});
var r = n(818083),
    i = n(984134),
    l = n(345655);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-05_input_profiles_experiment_web',
    label: 'Audio input profiles (studio mode)',
    defaultConfig: { enabledInputProfiles: [] },
    treatments: [
        {
            id: 1,
            label: 'Show Voice Isolation, Studio, and Custom',
            config: {
                enabledInputProfiles: [l._.VOICE_ISOLATION, l._.STUDIO, l._.CUSTOM]
            }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return a.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
