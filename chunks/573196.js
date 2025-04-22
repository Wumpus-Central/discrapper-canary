n.d(t, { G: () => i });
let r = (0, n(818083).B)({
        id: '2025-04_fetch_quests_on_postconnectionopen',
        kind: 'user',
        label: 'Fetch Quests ON_POST_CONNECTION_OPEN',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Fetch quests during ON_POST_CONNECTION_OPEN',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: n }).enabled;
    };
