n.d(t, {
    YW: () => o,
    Ys: () => s,
    ZP: () => l,
});
var r = n(818083),
    i = n(427164),
    a = n(987338);
let o = (0, i.le)({
        name: "2025-10-seasonal-gifting-2025",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    }),
    s = (0, r.B)({
        id: "2024-11_seasonal_gifting_reminder",
        label: "Seasonal Gifting Reminder 2024",
        kind: "user",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    }),
    l = o;
