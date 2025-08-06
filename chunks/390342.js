n.d(t, {
    O: () => a,
    U: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    id: '2025-05_summer_2025_gifting',
    label: 'Summer 2025 Gifting',
    kind: 'user',
    defaultConfig: { enableGiftingFlow: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Show Summer 2025 Gifting Flow',
            config: { enableGiftingFlow: !0 }
        }
    ]
});
function a() {
    let { enableGiftingFlow: e } = o.useExperiment({ location: 'useIsSummer2025GiftingActive' }, { autoTrackExposure: !1 });
    return e;
}
