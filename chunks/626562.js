n.d(t, { Vm: () => l });
let i = (0, n(818083).B)({
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
        { enabled: l } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return l;
}
