n.d(t, { P: () => o });
var r = n(818083),
    a = n(355820);
let i = (0, r.B)({
    kind: 'user',
    id: '2025-04_custom_status_clear_after_times',
    label: 'Custom Status Clear After Times Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable custom status clear after times',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, a.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: o } = i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return o;
}
