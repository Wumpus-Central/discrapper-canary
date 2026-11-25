var l = t(855986),
    s = t(52133),
    a = t(49491),
    i = t(311043),
    r = t(243264),
    o = t(287809);
function u(e) {
    let { gameId: n, user: t, game: l, autocompleteGame: s } = e;
    if (null != l) {
        if ((0, a.b)(l, t?.nsfwAllowed)) return;
        return { gameId: n, gameName: l.name, gameIcon: l.media?.icon };
    }
    if (null != s) return { gameId: n, gameName: s.name, gameIcon: s.icon };
}
t.d(
    n,
    {},
    {
        K: function (e) {
            return (0, l.bG)(
                [i.A, r.A, o.default],
                () =>
                    u({
                        gameId: e,
                        user: o.default.getCurrentUser(),
                        game: i.A.getGame(e),
                        autocompleteGame: r.A.getGameById(e),
                    }),
                [e],
                s.A,
            );
        },
        v: function (e) {
            return u({
                gameId: e,
                user: o.default.getCurrentUser(),
                game: i.A.getGame(e),
                autocompleteGame: r.A.getGameById(e),
            });
        },
    },
);
