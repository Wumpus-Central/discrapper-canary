n.d(t, { Z: () => c }), n(47120);
var r = n(381338),
    i = n(99815);
let o = new Set([i.E.LOL_MOST_PLAYED_CHAMPION_ID]);
function a(e) {
    return e.reduce(
        (e, t) => (
            (e[t] = {
                id: t,
                aggregation_type: 1,
                selectable_for_competition: !o.has(t)
            }),
            e
        ),
        {}
    );
}
function s(e, t) {
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
let l = Object.values(i.E),
    c = {
        guild_id: '1266851512559210577',
        leaderboard_id: '1280436307230720000',
        interval_start: '1295808410419200000',
        interval_end: '1298345125478400000',
        guild_settings: {
            sort_by_statistic_id: i.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            show_winner_crown: !0
        },
        settings: {
            sort_by_statistic_id: i.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            interval_type: r.q.WEEKLY,
            statistics: a(l),
            application_id: '356869127241072640'
        },
        users: [s('213097507503210496', l), s('1011326743526785086', l), s('107562988810027008', l), s('1088605061631983768', l), s('1073722616684232897', l)]
    };
