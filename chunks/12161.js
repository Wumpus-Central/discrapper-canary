n.d(t, { Z: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: "user",
    id: "2025-08_double_tap_to_react",
    label: "Double Tap To React",
    defaultConfig: {
        enabled: !1,
        showToast: !1,
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enabled - Show Half Sheet Upsell",
            config: {
                enabled: !0,
                showToast: !1,
            },
        },
        {
            id: 2,
            label: "Enabled - Show Toast Upsell",
            config: {
                enabled: !0,
                showToast: !0,
            },
        },
    ],
});
