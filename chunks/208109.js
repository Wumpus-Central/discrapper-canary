n.d(t, { e: () => l });
let r = (0, n(818083).B)({
        id: '2025-01_video_quests_end_card_cta_v2',
        kind: 'user',
        label: 'Video Quests End Card CTA V2',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    l = (e) => {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
    };
