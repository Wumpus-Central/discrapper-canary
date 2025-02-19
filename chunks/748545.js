n.d(t, { kc: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-02_clearer_notes_label',
    label: 'Clearer Notes Label Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable clearer notes label',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
