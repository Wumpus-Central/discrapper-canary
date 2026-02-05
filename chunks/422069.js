i.d(t, { A: () => c });
var l = i(311907),
    a = i(73153);
let n = {},
    s = {};
class r extends l.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return n[e];
    }
    getSimilarGamesError(e) {
        return s[e];
    }
}
let c = new r(a.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: i } = e;
        n[t] = i;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: i } = e;
        s[t] = i;
    },
});
