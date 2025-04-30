n.d(t, { U: () => a });
var r = n(818083),
    i = n(772209);
let o = (0, r.B)({
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
    a = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e,
            r = (0, i.q)({
                location: t,
                autoTrackExposure: n
            });
        return o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    };
