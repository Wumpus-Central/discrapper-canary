r.d(n, {
    E2: function () {
        return l;
    },
    Xb: function () {
        return o;
    },
    p3: function () {
        return s;
    }
});
var i = r(818083);
let a = (0, i.B)({
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
});
n.ZP = a;
let o = (0, i.B)({
    kind: 'user',
    id: '2024-10_retrigger_reaction_frecency_algorithms',
    label: '(Retrigger) Reaction Frecency Algorithms',
    defaultConfig: null,
    treatments: []
});
function s(e) {
    let { location: n, autoTrackExposure: r } = e,
        { frecencyAlgorithm: i } = a.useExperiment({ location: n }, { autoTrackExposure: r });
    return 'original' !== i;
}
function l(e) {
    let { location: n, autoTrackExposure: r } = e,
        { frecencyAlgorithm: i } = a.getCurrentConfig({ location: n }, { autoTrackExposure: r });
    return 'original' !== i;
}
