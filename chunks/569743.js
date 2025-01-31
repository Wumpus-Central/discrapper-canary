n.d(t, { Z: () => r });
let i = (0, n(818083).B)({
        id: '2024-08_quests_separate_decision_endpoint',
        kind: 'user',
        label: 'Quests separate decision endpoint',
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
    r = (e) => {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
    };
