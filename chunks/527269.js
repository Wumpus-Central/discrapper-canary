n.d(t, {
    Do: () => i,
    MM: () => a,
    c9: () => o,
    cv: () => s,
});
let r = (0, n(600975).C)({
        kind: "user",
        id: "2025-03_afk_timeout_default_experiment",
        label: "Afk timeout defaults",
        defaultConfig: {
            enabled: !1,
            defaultTimeout: 600,
        },
        treatments: [
            {
                id: 1,
                label: "Set afk_timer default to 1 min",
                config: {
                    enabled: !0,
                    defaultTimeout: 60,
                },
            },
            {
                id: 2,
                label: "Set afk_timer default to 2 min",
                config: {
                    enabled: !0,
                    defaultTimeout: 120,
                },
            },
            {
                id: 3,
                label: "Set afk_timer default to 1 min (to test with holdout)",
                config: {
                    enabled: !0,
                    defaultTimeout: 60,
                },
            },
        ],
    }),
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    a = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).defaultTimeout,
    s = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
    o = (e) => {
        r.trackExposure({ location: e });
    };
