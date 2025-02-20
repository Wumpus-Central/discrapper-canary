n.d(t, { U: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-02_voice_activity_status',
        label: 'Voice Activity Status',
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
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };
