n.d(t, {
    E2: () => l,
    Xb: () => a,
    ZP: () => o,
    p3: () => s
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-08_reaction_frecency_algorithms',
        label: 'Reaction Frecency Algorithms',
        defaultConfig: {
            frecencyAlgorithm: 'original',
            canShowReactionsOnMessageHover: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Stable algorithm with no hover bar',
                config: {
                    frecencyAlgorithm: 'safe',
                    canShowReactionsOnMessageHover: !1
                }
            },
            {
                id: 2,
                label: 'Volatile algorithm with no hover bar',
                config: {
                    frecencyAlgorithm: 'day_recency',
                    canShowReactionsOnMessageHover: !1
                }
            },
            {
                id: 3,
                label: 'Stable algorithm with hover bar',
                config: {
                    frecencyAlgorithm: 'safe',
                    canShowReactionsOnMessageHover: !0
                }
            },
            {
                id: 4,
                label: 'Volatile algorithm with hover bar',
                config: {
                    frecencyAlgorithm: 'day_recency',
                    canShowReactionsOnMessageHover: !0
                }
            }
        ]
    }),
    o = i,
    a = (0, r.B)({
        kind: 'user',
        id: '2024-10_retrigger_reaction_frecency_algorithms',
        label: '(Retrigger) Reaction Frecency Algorithms',
        defaultConfig: null,
        treatments: []
    });
function s(e) {
    let { location: t, autoTrackExposure: n } = e,
        { frecencyAlgorithm: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return 'original' !== r;
}
function l(e) {
    let { location: t, autoTrackExposure: n } = e,
        { frecencyAlgorithm: r } = i.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return 'original' !== r;
}
