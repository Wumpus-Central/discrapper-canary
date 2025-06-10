r.d(t, {
    K: () => o,
    v: () => l
});
var n = r(818083),
    i = r(987338);
let o = (0, n.B)({
        kind: 'user',
        id: '2025-04_nameplate_gifting',
        label: 'Nameplates Gifting',
        commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
        defaultConfig: { canGiftNameplates: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Edit',
                config: { canGiftNameplates: !0 }
            }
        ]
    }),
    l = (e) => o.useExperiment({ location: e }, { autoTrackExposure: !0 }).canGiftNameplates;
