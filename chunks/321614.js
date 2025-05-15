n.d(t, {
    R: () => a,
    c: () => s
});
var r = n(818083),
    l = n(984134),
    i = n(345655);
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
                enabledInputProfiles: [i._.VOICE_ISOLATION, i._.STUDIO, i._.CUSTOM]
            }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = l.h.getCurrentConfig({ location: t }, { autoTrackExposure: n });
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
        { isInHoldout: r } = l.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return o.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
