n.d(t, { P: () => i });
var a = n(818083),
    r = n(355820);
let l = (0, a.B)({
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
        a = (0, r.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: i } = l.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: a
            }
        );
    return i;
}
