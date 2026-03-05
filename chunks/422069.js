"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    l = n(73153);
let a = {},
    r = {};
class s extends i.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return a[e];
    }
    getSimilarGamesError(e) {
        return r[e];
    }
}
let c = new s(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        a[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        r[t] = n;
    },
});
