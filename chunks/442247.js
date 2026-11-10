var s = t(855986),
    i = t(52133),
    l = t(49491),
    a = t(311043),
    r = t(243264),
    o = t(287809);
function c(e) {
    let { gameId: n, user: t, game: s, autocompleteGame: i } = e;
    if (null != s) {
        if ((0, l.b)(s, t?.nsfwAllowed)) return;
        return { gameId: n, gameName: s.name, gameIcon: s.media?.icon };
    }
    if (null != i) return { gameId: n, gameName: i.name, gameIcon: i.icon };
}
t.d(
    n,
    {},
    {
        K: function (e) {
            return (0, s.bG)(
                [a.A, r.A, o.default],
                () =>
                    c({
                        gameId: e,
                        user: o.default.getCurrentUser(),
                        game: a.A.getGame(e),
                        autocompleteGame: r.A.getGameById(e),
                    }),
                [e],
                i.A,
            );
        },
        v: function (e) {
            return c({
                gameId: e,
                user: o.default.getCurrentUser(),
                game: a.A.getGame(e),
                autocompleteGame: r.A.getGameById(e),
            });
        },
    },
);
