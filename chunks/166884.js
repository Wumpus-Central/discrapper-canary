n.d(t, { Z: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_golive_simulcast',
        label: 'GoLive Simulcast',
        defaultConfig: {
            simulcastEnabled: !1,
            lqStreamBitrate: 0
        },
        treatments: [
            {
                id: 1,
                label: 'Simulcast',
                config: {
                    simulcastEnabled: !0,
                    lqStreamBitrate: 1500000
                }
            },
            {
                id: 2,
                label: 'Simulcast, no pacer for LQ',
                config: {
                    simulcastEnabled: !0,
                    lqStreamBitrate: 1500000,
                    workerExperimentString: 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-lq-no-pacer'
                }
            }
        ]
    }),
    i = {
        getConfig: () => r.getCurrentConfig({ location: 'getConfig' }, { autoTrackExposure: !1 }),
        simulcastEnabled: () => r.getCurrentConfig({ location: 'simulcastEnabled' }, { autoTrackExposure: !0 }).simulcastEnabled,
        workerExperimentString: () => r.getCurrentConfig({ location: 'workerExperimentString' }, { autoTrackExposure: !1 }).workerExperimentString
    };
