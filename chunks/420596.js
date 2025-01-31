n.d(t, { c: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-10_call_banner_bg',
    label: 'Call Banner Background Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e, t) {
    return i.useExperiment({ location: t }, { autoTrackExposure: e });
}
