n.d(t, { Z: () => a });
var r = n(818083),
    i = n(355820);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-04_custom_status_labels',
    label: 'Custom Status Labels Experiment',
    defaultConfig: {
        enabledWithActivityStatus: !1,
        enabledWithoutActivityStatus: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable custom status labels',
            config: {
                enabledWithActivityStatus: !0,
                enabledWithoutActivityStatus: !1
            }
        },
        {
            id: 2,
            label: 'Enable custom status labels without activity status text update',
            config: {
                enabledWithActivityStatus: !1,
                enabledWithoutActivityStatus: !0
            }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabledWithActivityStatus: a, enabledWithoutActivityStatus: s } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return {
        isEligibleForCustomStatusLabels: a || s,
        enabledWithActivityStatus: a,
        enabledWithoutActivityStatus: s
    };
}
