n.d(t, { V: () => a });
var r = n(818083),
    i = n(355820);
let s = (0, r.B)({
    kind: 'user',
    id: '2025-01_custom_status_edit_preview_mobile',
    label: 'Custom Status Edit Preview (Mobile)',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable edit modal with preview',
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
        { enabled: a } = s.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return a;
}
