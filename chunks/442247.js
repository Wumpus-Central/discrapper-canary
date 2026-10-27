n.d(t, { K: () => c });
var i = n(17928),
    s = n(52133),
    l = n(49491),
    a = n(311043),
    r = n(243264),
    o = n(287809);
function c(e) {
    return (0, i.bG)(
        [a.A, r.A, o.default],
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
                game: a.A.getGame(e),
                autocompleteGame: r.A.getGameById(e),
            }),
        [e],
        s.A,
    );
}
