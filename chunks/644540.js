n.d(e, { P: () => i });
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
function i(t) {
    let { location: e, autoTrackExposure: n = !0 } = t,
        l = (0, r.P)({
            location: e,
            autoTrackExposure: n
        }),
        { enabled: i } = a.useExperiment(
            { location: e },
            {
                autoTrackExposure: n,
                disable: l
            }
        );
    return i;
}
