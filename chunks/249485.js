n.d(t, { _: () => l });
let r = (0, n(818083).B)({
        id: '2025-07_video_quest_debug_gate',
        kind: 'user',
        label: 'Video Quest Debug Gate',
        defaultConfig: {
            enabled: !1,
            forceNoCrossOrigin: !1
        },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    forceNoCrossOrigin: !1
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    forceNoCrossOrigin: !1
                }
            },
            {
                id: 2,
                label: 'Force No Cross Origin',
                config: {
                    enabled: !0,
                    forceNoCrossOrigin: !0
                }
            }
        ]
    }),
    l = (e) => {
        let { location: t } = e,
            { enabled: n, forceNoCrossOrigin: l } = r.useExperiment({ location: t }, { autoTrackExposure: !0 });
        return {
            enabled: n,
            forceNoCrossOrigin: l
        };
    };
