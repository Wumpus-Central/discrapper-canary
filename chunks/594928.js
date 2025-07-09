n.d(t, {
    J: () => a,
    f: () => s
});
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
        id: '2025-07_display_name_styles_viewer',
        kind: 'user',
        label: 'Display Name Styles Viewer',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables viewing display name styles set by other users.',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (0, i.B)({
        id: '2025-07_display_name_styles_setter',
        kind: 'user',
        label: 'Display Name Styles Setter',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables the UI for setting display name styles.',
                config: { enabled: !0 }
            }
        ]
    });
