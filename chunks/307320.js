n.d(t, { Z: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-01_auto_disable_video_mobile_v2',
        label: 'Mobile performance: VideoHealthManager (v2)',
        defaultConfig: {
            featureEnabled: !1,
            windowLength: 5,
            allowedPoorFpsRatio: 1,
            fpsThreshold: 5,
            backoffTimeSec: 15
        },
        treatments: [
            {
                id: 1,
                label: '5 second window, 100% allowed poor fps ratio, 5 fps threshold, 15 second backoff',
                config: {
                    featureEnabled: !0,
                    windowLength: 5,
                    allowedPoorFpsRatio: 1,
                    fpsThreshold: 5,
                    backoffTimeSec: 15
                }
            },
            {
                id: 2,
                label: '5 second window, 100% allowed poor fps ratio, 5 fps threshold, 10 second backoff',
                config: {
                    featureEnabled: !0,
                    windowLength: 5,
                    allowedPoorFpsRatio: 1,
                    fpsThreshold: 5,
                    backoffTimeSec: 10
                }
            },
            {
                id: 3,
                label: '10 second window, 70% allowed poor fps ratio, 5 fps threshold, 15 second backoff',
                config: {
                    featureEnabled: !0,
                    windowLength: 10,
                    allowedPoorFpsRatio: 0.7,
                    fpsThreshold: 5,
                    backoffTimeSec: 15
                }
            },
            {
                id: 4,
                label: '10 second window, 90% allowed poor fps ratio, 5 fps threshold, 15 second backoff',
                config: {
                    featureEnabled: !0,
                    windowLength: 10,
                    allowedPoorFpsRatio: 0.9,
                    fpsThreshold: 5,
                    backoffTimeSec: 15
                }
            }
        ]
    }),
    i = {
        isFeatureSupportedOnPlatform: () => !1,
        getConfig(e) {
            let t = r.getCurrentConfig({ location: '508d6c_1' }, { autoTrackExposure: e });
            return this.isFeatureSupportedOnPlatform() || (t.featureEnabled = !1), t;
        }
    };
