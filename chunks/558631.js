n.d(t, { Z: () => l });
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2025-02_settings_search_in_quick_switcher',
    label: 'Settings in Quick Switcher',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
