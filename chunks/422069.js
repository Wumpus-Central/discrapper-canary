n.d(t, {
    A: () => d,
});
var l,
    r,
    i = n(311907),
    a = n(73153);
let s = {},
    o = {};
class c extends (r = i.Ay.Store) {
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return o[e];
    }
}
(l = "displayName") in c
    ? Object.defineProperty(c, l, {
          value: "GameProfileStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[l] = "GameProfileStore");
let d = new c(a.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        s[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        o[t] = n;
    },
});
