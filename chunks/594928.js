n.d(t, {
    J: () => o,
    f: () => a
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
        id: '2025-07_display_name_styles_viewer',
        kind: 'user',
        label: 'Display Name Styles Viewer',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables viewing display name styles set by other users.',
                config: { enabled: !0 }
            }
        ]
    }),
    o = (0, r.B)({
        id: '2025-07_display_name_styles_setter',
        kind: 'user',
        label: 'Display Name Styles Setter',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables the UI for setting display name styles.',
                config: { enabled: !0 }
            }
        ]
    });
