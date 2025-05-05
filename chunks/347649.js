n.d(t, {
    CC: () => i,
    ov: () => o
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-01_uu_forced_migration',
        label: 'Unique Username Forced Migration UI',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Forced Migration UI',
                config: { enabled: !0 }
            }
        ]
    }),
    i = () => {
        let { enabled: e } = r.useExperiment({ location: 'force_migration' }, { autoTrackExposure: !1 });
        return e;
    },
    o = () => {
        let { enabled: e } = r.getCurrentConfig({ location: 'force_migration' }, { autoTrackExposure: !1 });
        return e;
    };
