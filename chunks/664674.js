var i = r(47120);
var a = r(724458);
var o = r(381338),
    s = r(99815);
let l = new Set([s.E.LOL_MOST_PLAYED_CHAMPION_ID]);
function u(e) {
    return e.reduce(
        (e, n) => (
            (e[n] = {
                id: n,
                aggregation_type: 1,
                selectable_for_competition: !l.has(n)
            }),
            e
        ),
        {}
    );
}
function c(e, n) {
    return {
        user_id: e,
        statistics: n.reduce(
            (e, n) => (
                (e[n] = {
                    value: Math.floor(100 * Math.random()),
                    updated_at: new Date().toISOString()
                }),
                e
            ),
            {}
        )
    };
}
let d = Object.values(s.E),
    f = {
        guild_id: '1266851512559210577',
        leaderboard_id: '1280436307230720000',
        interval_start: '1295808410419200000',
        interval_end: '1298345125478400000',
        guild_settings: {
            sort_by_statistic_id: s.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            show_winner_crown: !0
        },
        settings: {
            sort_by_statistic_id: s.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            interval_type: o.q.WEEKLY,
            statistics: u(d),
            application_id: '356869127241072640'
        },
        users: [c('213097507503210496', d), c('1011326743526785086', d), c('107562988810027008', d), c('1088605061631983768', d), c('1073722616684232897', d)]
    };
n.Z = f;
