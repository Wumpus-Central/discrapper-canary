n.d(e, { iv: () => l });
let a = (0, n(818083).B)({
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
function l(t) {
    let { location: e, autoTrackExposure: n = !0 } = t;
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: n }).enabled;
}
