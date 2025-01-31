n.d(t, { Z: () => u }), n(47120), n(724458);
var i = n(381338),
    r = n(99815);
let a = new Set([r.E.LOL_MOST_PLAYED_CHAMPION_ID]);
function s(e) {
    return e.reduce(
        (e, t) => (
            (e[t] = {
                id: t,
                aggregation_type: 1,
                selectable_for_competition: !a.has(t)
            }),
            e
        ),
        {}
    );
}
function o(e, t) {
    return {
        user_id: e,
        statistics: t.reduce(
            (e, t) => (
                (e[t] = {
                    value: Math.floor(100 * Math.random()),
                    updated_at: new Date().toISOString()
                }),
                e
            ),
            {}
        )
    };
}
let l = Object.values(r.E),
    u = {
        guild_id: '1266851512559210577',
        leaderboard_id: '1280436307230720000',
        interval_start: '1295808410419200000',
        interval_end: '1298345125478400000',
        guild_settings: {
            sort_by_statistic_id: r.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            show_winner_crown: !0
        },
        settings: {
            sort_by_statistic_id: r.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            interval_type: i.q.WEEKLY,
            statistics: s(l),
            application_id: '356869127241072640'
        },
        users: [o('213097507503210496', l), o('1011326743526785086', l), o('107562988810027008', l), o('1088605061631983768', l), o('1073722616684232897', l)]
    };
