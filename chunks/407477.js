n.d(t, {
    E2: () => l,
    Xb: () => s,
    ZP: () => a,
    p3: () => o
});
var i = n(818083);
let r = (0, i.B)({
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
    a = r,
    s = (0, i.B)({
        kind: 'user',
        id: '2024-10_retrigger_reaction_frecency_algorithms',
        label: '(Retrigger) Reaction Frecency Algorithms',
        defaultConfig: null,
        treatments: []
    });
function o(e) {
    let { location: t, autoTrackExposure: n } = e,
        { frecencyAlgorithm: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return 'original' !== i;
}
function l(e) {
    let { location: t, autoTrackExposure: n } = e,
        { frecencyAlgorithm: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return 'original' !== i;
}
