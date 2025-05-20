n.d(t, {
    Dl: () => s,
    Mk: () => a,
    fD: () => o,
    mO: () => i
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-03_afk_timeout_default_experiment',
        label: 'Afk timeout defaults',
        defaultConfig: {
            enabled: !1,
            defaultTimeout: 600
        },
        treatments: [
            {
                id: 1,
                label: 'Set afk_timer default to 1 min',
                config: {
                    enabled: !0,
                    defaultTimeout: 60
                }
            },
            {
                id: 2,
                label: 'Set afk_timer default to 2 min',
                config: {
                    enabled: !0,
                    defaultTimeout: 120
                }
            }
        ]
    }),
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    o = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).defaultTimeout,
    a = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
    s = (e) => {
        r.trackExposure({ location: e });
    };
