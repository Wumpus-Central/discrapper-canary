n.d(t, { k: () => a });
var r = n(818083),
    i = n(355820);
let o = (0, r.B)({
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
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.A)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return a;
}
