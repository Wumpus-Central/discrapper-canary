r.d(n, {
    CC: function () {
        return a;
    },
    ov: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
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
    a = () => {
        let { enabled: e } = i.useExperiment({ location: 'force_migration' }, { autoTrackExposure: !1 });
        return e;
    },
    o = () => {
        let { enabled: e } = i.getCurrentConfig({ location: 'force_migration' }, { autoTrackExposure: !1 });
        return e;
    };
