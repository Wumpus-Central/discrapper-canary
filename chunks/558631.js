n.d(t, { Z: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-02_settings_search_in_quick_switcher',
    label: 'Settings in Quick Switcher',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Enable Settings search in Quick Switcher',
            config: { enabled: !0 }
        }
    ]
});
