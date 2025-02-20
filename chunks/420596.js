n.d(t, { c: () => i });
let r = (0, n(818083).B)({
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
function i(e, t) {
    return r.useExperiment({ location: t }, { autoTrackExposure: e });
}
