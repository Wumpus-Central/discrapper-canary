n.d(t, {
    RO: () => l,
    TX: () => d,
    Ys: () => c,
    ZP: () => f,
    rK: () => u
});
var r = n(987170),
    i = n(535201),
    o = n(987338);
let a = new Date('2025-01-06T07:59:59.000Z'),
    s = (0, r.Z)({
        id: '2024-11_seasonal_gifting',
        label: 'Seasonal Gifting 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    l = (0, r.Z)({
        id: '2023-11_seasonal_gifting_marketing_2023',
        label: 'Seasonal Gifting Marketing 2023',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    c = (0, r.Z)({
        id: '2024-11_seasonal_gifting_reminder',
        label: 'Seasonal Gifting Reminder 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function u() {
    return (0, i.p)(a);
}
function d() {
    let e = u(),
        { enabled: t } = s.useExperiment({ location: 'useIsInSeasonalGiftingXPAndSeasonalGiftingActive' }, { autoTrackExposure: !1 });
    return e && t;
}
let f = s;
