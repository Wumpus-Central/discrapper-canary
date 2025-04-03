r.d(t, { P: () => i });
let n = (0, r(818083).B)({
        kind: 'user',
        label: 'Pomelo Suggestions',
        id: '2023-04_pomelo_suggestions',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    i = () => n.getCurrentConfig({ location: '1907ae_1' }, { autoTrackExposure: !1 }).enabled;
