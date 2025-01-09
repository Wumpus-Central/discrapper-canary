n.d(t, {
    M: function () {
        return s;
    }
}),
    n(724458);
var i = n(544891),
    r = n(981631);
let l = (e) =>
    e.reduce(
        (e, t) => (
            (e[t.game_application_id] = {
                level: t.activity_level,
                score: t.activity_score
            }),
            e
        ),
        {}
    );
async function s(e) {
    return l(
        (
            await i.tn.get({
                url: r.ANM.GUILD_TOP_GAMES(e),
                rejectWithError: !1
            })
        ).body.top_games
    );
}
