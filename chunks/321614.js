n.d(t, {
    R: () => a,
    c: () => s
});
var r = n(818083),
    i = n(984134),
    l = n(345655);
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
                enabledInputProfiles: [l._.VOICE_ISOLATION, l._.STUDIO, l._.CUSTOM]
            }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return o.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
