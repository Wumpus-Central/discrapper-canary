r.d(t, { a: () => s });
var n = r(818083),
    i = r(772209);
let l = (0, n.B)({
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
    s = (e) => {
        let { location: t, autoTrackExposure: r = !0 } = e,
            n = (0, i.q)({
                location: t,
                autoTrackExposure: r
            });
        return l.useExperiment(
            { location: t },
            {
                autoTrackExposure: r,
                disable: n
            }
        );
    };
