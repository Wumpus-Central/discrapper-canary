let i = (0, r(818083).B)({
        kind: 'user',
        id: '2024-08_tiered_tenure_badges',
        label: 'Tiered Tenure Badging',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Tiered Tenure Badges v1',
                config: {
                    enabled: !0,
                    version: 1
                }
            },
            {
                id: 2,
                label: 'Enable Tiered Tenure Badges v2',
                config: {
                    enabled: !0,
                    version: 2
                }
            }
        ]
    }),
    a = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.useExperiment({ location: 'experiment_hook' }, { autoTrackExposure: e });
    };
n.Z = a;
