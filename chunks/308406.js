n.d(t, { o: () => a });
var r = n(818083),
    i = n(772209);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-01_user_profile_voice_activity_card',
        label: 'User Profile Voice Activity Card',
        defaultConfig: { voiceActivityCardEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'User Profile Voice Activity Card Enabled',
                config: { voiceActivityCardEnabled: !0 }
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
