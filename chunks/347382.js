n.d(t, { z: () => l });
let r = (0, n(818083).B)({
        id: '2025-02_quests_hls_video',
        kind: 'user',
        label: 'Quests Hls Video',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'disabled',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    l = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
