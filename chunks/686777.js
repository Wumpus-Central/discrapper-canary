n.d(t, { q: () => s });
let r = (0, n(818083).B)({
        id: '2024-04_concurrent_quests',
        kind: 'user',
        label: 'Concurrent Quests',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Concurrent Quests Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n }).enabled;
    };
