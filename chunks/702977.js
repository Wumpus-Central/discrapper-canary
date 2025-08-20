n.d(t, { av: () => i });
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-05_flamingo_intro_nux",
    label: "Flamingo Intro NUX",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enabled - Show Intro NUX",
            config: { enabled: !0 },
        },
    ],
});
function i(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = r.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__,
            },
        );
    return i;
}
