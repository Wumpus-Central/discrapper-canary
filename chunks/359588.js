n.d(t, { Z: () => o });
var r = n(818083),
    i = n(355820);
let a = (0, r.B)({
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
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: o } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return o;
}
