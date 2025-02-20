n.d(t, {
    C5: () => i,
    ZP: () => a
});
var r = n(818083),
    i = (function (e) {
        return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.WINTER_2023_DROP = 1)] = 'WINTER_2023_DROP'), (e[(e.MONSTER_DROP = 2)] = 'MONSTER_DROP'), (e[(e.SPRINGTOONS = 4)] = 'SPRINGTOONS'), (e[(e.SHY = 5)] = 'SHY'), (e[(e.GALAXY = 6)] = 'GALAXY'), (e[(e.TIDE = 7)] = 'TIDE'), (e[(e.ROBERT = 8)] = 'ROBERT'), (e[(e.STORM = 9)] = 'STORM'), (e[(e.EQUINOX_FALL = 10)] = 'EQUINOX_FALL'), e;
    })({});
let o = (0, r.B)({
        kind: 'user',
        id: '2023-12_collectibles_shop_marketing',
        label: 'Collectibles Shop Marketing Variations',
        defaultConfig: { variant: 0 },
        treatments: [
            {
                id: 7,
                label: 'Tide 2024',
                config: { variant: 7 }
            },
            {
                id: 8,
                label: 'Robert 2024',
                config: { variant: 8 }
            },
            {
                id: 9,
                label: 'Storm 2024',
                config: { variant: 9 }
            },
            {
                id: 10,
                label: 'Equinox/fall 2024',
                config: { variant: 10 }
            }
        ]
    }),
    a = (e) => o.useExperiment({ location: e }).variant;
