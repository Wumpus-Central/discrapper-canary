n.d(t, { G: () => l });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_message_request_new_location',
    label: 'Moves message requests ingress point closer to Friends',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable the new location',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: n }).enabled;
}
