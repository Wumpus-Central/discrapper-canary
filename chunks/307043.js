n.d(t, {
    u: function () {
        return a;
    }
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        kind: 'user',
        id: '2024-08_shop_browse',
        label: 'Collectibles Shop Browse Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable new shop layout',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN
    }),
    a = (e) => l.useExperiment({ location: e }).enabled;
