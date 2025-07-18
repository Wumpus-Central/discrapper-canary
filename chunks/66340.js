n.d(t, { D: () => i });
let r = (0, n(818083).B)({
        id: '2025-07_quest_video_retry_enroll',
        kind: 'user',
        label: 'Quest video retry enroll experiment',
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
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
