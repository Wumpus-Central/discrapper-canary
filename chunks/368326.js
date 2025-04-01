n.d(t, { p: () => a });
var r = n(818083),
    i = n(355820);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-03_custom_status_prompts',
    label: 'Custom Status Prompts Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable custom status prompts',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.P)({
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
