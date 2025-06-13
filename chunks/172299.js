n.d(t, {
    U: () => a,
    V: () => o
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-06_tierless_boosting_system_message',
    label: 'Tierless System Message',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
