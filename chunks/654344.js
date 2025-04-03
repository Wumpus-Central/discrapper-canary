r.d(t, { c: () => i });
let n = (0, r(818083).B)({
        kind: 'user',
        label: 'Pomelo Debounce Delay',
        id: '2023-03_pomelo_debounce_delay',
        defaultConfig: { delay: 600 },
        treatments: [
            {
                id: 1,
                label: '600ms',
                config: { delay: 600 }
            },
            {
                id: 2,
                label: '700ms',
                config: { delay: 700 }
            },
            {
                id: 3,
                label: '800ms',
                config: { delay: 800 }
            },
            {
                id: 4,
                label: '900ms',
                config: { delay: 900 }
            },
            {
                id: 5,
                label: '1000ms',
                config: { delay: 1000 }
            }
        ]
    }),
    i = () => n.useExperiment({ location: '52560d_1' }, { autoTrackExposure: !1 }).delay;
