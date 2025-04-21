n.d(t, { V: () => l });
var i = n(818083),
    r = n(355820);
let s = (0, i.B)({
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
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        i = (0, r.A)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: l } = s.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: i
            }
        );
    return l;
}
