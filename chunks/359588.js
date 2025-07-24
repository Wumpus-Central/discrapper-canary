n.d(t, { Z: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_custom_status_labels',
    label: 'Custom Status Labels Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable custom status labels',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
