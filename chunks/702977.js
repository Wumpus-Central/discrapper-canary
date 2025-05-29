n.d(t, { av: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_flamingo_intro_nux',
    label: 'Flamingo Intro NUX',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled - Show Intro NUX',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: r } = i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__
            }
        );
    return r;
}
