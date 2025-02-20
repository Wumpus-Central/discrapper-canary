n.d(t, { o: () => i });
let r = (0, n(818083).B)({
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
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };
