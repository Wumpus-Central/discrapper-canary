r.d(n, {
    RO: function () {
        return u;
    },
    TX: function () {
        return f;
    },
    Ys: function () {
        return c;
    },
    rK: function () {
        return d;
    }
});
var i = r(987170),
    a = r(535201),
    o = r(987338);
let s = new Date('2025-01-06T07:59:59.000Z'),
    l = (0, i.Z)({
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
    u = (0, i.Z)({
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
    c = (0, i.Z)({
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
function d() {
    return (0, a.p)(s);
}
function f() {
    let e = d(),
        { enabled: n } = l.useExperiment({ location: 'useIsInSeasonalGiftingXPAndSeasonalGiftingActive' }, { autoTrackExposure: !1 });
    return e && n;
}
n.ZP = l;
