n.d(t, { P: () => i });
var l = n(818083),
    r = n(355820);
let a = (0, l.B)({
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
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        l = (0, r.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: i } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: l
            }
        );
    return i;
}
