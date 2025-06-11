n.d(t, { V: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_tierless_boosting_system_message',
    label: 'Tierless System Message',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
