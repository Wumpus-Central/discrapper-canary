n.d(t, { JH: () => o });
var r = n(818083),
    i = n(427164),
    a = n(987338);
let o = (0, r.B)({
    id: "2025-07_display_name_styles_setter",
    kind: "user",
    label: "Display Name Styles Setter",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enables the UI for setting display name styles.",
            config: { enabled: !0 },
        },
    ],
});
(0, i.le)({
    name: "2025-10-display-name-styles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        1: {
            enabled: !0,
            surfaces: 2,
        },
        2: {
            enabled: !0,
            surfaces: 1,
        },
    },
});
