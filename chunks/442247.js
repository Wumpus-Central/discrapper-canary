n.d(t, { K: () => c });
var i = n(17928),
    s = n(52133),
    l = n(49491),
    r = n(311043),
    a = n(243264),
    o = n(287809);
function c(e) {
    return (0, i.bG)(
        [r.A, a.A, o.default],
        () =>
            (function (e) {
                let { gameId: t, user: n, game: i, autocompleteGame: s } = e;
                if (null != i) {
                    if ((0, l.b)(i, n?.nsfwAllowed)) return;
                    return { gameId: t, gameName: i.name, gameIcon: i.media?.icon };
                }
                if (null != s) return { gameId: t, gameName: s.name, gameIcon: s.icon };
            })({
                gameId: e,
                user: o.default.getCurrentUser(),
                game: r.A.getGame(e),
                autocompleteGame: a.A.getGameById(e),
            }),
        [e],
        s.A,
    );
}
