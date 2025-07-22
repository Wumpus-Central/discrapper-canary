r.d(t, { a: () => i });
let n = (0, r(818083).B)({
        kind: 'user',
        id: '2025-02_voice_activity_status_mobile',
        label: 'Voice Activity Status (Mobile)',
        defaultConfig: { voiceActivityStatusEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Voice Activity Status Enabled',
                config: { voiceActivityStatusEnabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: r = !0 } = e;
        return n.useExperiment({ location: t }, { autoTrackExposure: r });
    };
