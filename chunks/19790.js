var r = n(818083),
    i = n(987338);
(0, r.B)({
    id: '2025-07_custom_theme_mobile_rendering',
    kind: 'user',
    label: 'Custom Theme Mobile Rendering',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables custom theme rendering on mobile',
            config: { enabled: !0 }
        }
    ]
});
