n.d(t, {
    K: () => a,
    v: () => i
});
var r = n(818083),
    l = n(987338);
let a = (0, r.B)({
        kind: 'user',
        id: '2025-04_nameplate_gifting',
        label: 'Nameplates Gifting',
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
        defaultConfig: { canGiftNameplates: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Edit',
                config: { canGiftNameplates: !0 }
            }
        ]
    }),
    i = (e) => a.useExperiment({ location: e }, { autoTrackExposure: !1 }).canGiftNameplates;
