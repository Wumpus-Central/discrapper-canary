n.d(t, { o: () => r });
let i = (0, n(818083).B)({
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
    r = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: n });
    };
