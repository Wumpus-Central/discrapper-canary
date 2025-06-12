n.d(t, { b: () => i });
let r = (0, n(818083).B)({
        id: '2025-06_quest_bar_skip_wait_for_subscriptions',
        kind: 'user',
        label: 'Quests: Skip waiting for subscriptions',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Skip waiting for subscriptions',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t } = e;
        return r.useExperiment({ location: t }).enabled;
    };
