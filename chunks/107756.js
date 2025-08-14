n.d(t, {
    IH: () => l,
    Ys: () => s,
    ZP: () => c,
});
var r = n(427164),
    i = n(987170),
    o = n(987338);
let a = (0, r.le)({
        name: "2025-08-halloween-gifting-2025",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            animated: !1,
        },
        variations: {
            0: {
                enabled: !1,
                animated: !1,
            },
            1: {
                enabled: !0,
                animated: !0,
            },
            2: {
                enabled: !0,
                animated: !1,
            },
        },
    }),
    s = (0, i.Z)({
        id: "2024-11_seasonal_gifting_reminder",
        label: "Seasonal Gifting Reminder 2024",
        kind: "user",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    });
function l() {
    let { animated: e } = a.useConfig({ location: "useIsGiftingPromotionAnimated" });
    return e;
}
let c = a;
