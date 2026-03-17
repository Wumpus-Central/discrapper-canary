n.d(t, { A: () => o });
var a = n(311907),
    l = n(73153);
let i = {},
    r = {};
class s extends a.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return i[e];
    }
    getSimilarGamesError(e) {
        return r[e];
    }
}
let o = new s(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        i[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        r[t] = n;
    },
});
