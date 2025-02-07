n.d(e, { A: () => l });
let a = (0, n(818083).B)({
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
function l(t) {
    let { location: e, autoTrackExposure: n = !0 } = t;
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: n }).enabled;
}
