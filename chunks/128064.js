n.d(t, {
    c_: () => i,
    pY: () => a
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-06_settings_defaults_aggregate',
        label: 'Settings Defaults Aggregate',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Aggregate Settings Default',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    a = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
