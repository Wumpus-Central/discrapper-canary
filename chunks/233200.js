n.d(t, { A: () => a });
let l = (0, n(818083).B)({
    kind: 'user',
    id: '2025-02_custom_status_editing_without_status_selector',
    label: 'Custom Status Editing Without Status Selector',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable custom status editing without status selector',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return l.getCurrentConfig({ location: t }, { autoTrackExposure: n }).enabled;
}
