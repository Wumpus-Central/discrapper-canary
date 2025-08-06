n.d(t, {
    R: () => s,
    c: () => l,
});
var r = n(818083),
    i = n(984134),
    o = n(345655);
let a = (0, r.B)({
    kind: "user",
    id: "2025-05_input_profiles_experiment_web",
    label: "Audio input profiles (studio mode)",
    defaultConfig: { enabledInputProfiles: [] },
    treatments: [
        {
            id: 1,
            label: "Show Voice Isolation, Studio, and Custom",
            config: {
                enabledInputProfiles: [o._.VOICE_ISOLATION, o._.STUDIO, o._.CUSTOM],
            },
        },
    ],
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return a.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
