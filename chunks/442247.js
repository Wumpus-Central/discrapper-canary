n.d(t, { K: () => d });
var i = n(17928),
    l = n(52133),
    s = n(49491),
    a = n(311043),
    r = n(243264),
    o = n(287809);
function d(e) {
    return (0, i.bG)(
        [a.A, r.A, o.default],
        () =>
            (function (e) {
                let { gameId: t, user: n, game: i, autocompleteGame: l } = e;
                if (null != i) {
                    if ((0, s.b)(i, n?.nsfwAllowed)) return;
                    return { gameId: t, gameName: i.name, gameIcon: i.media?.icon };
                }
                if (null != l) return { gameId: t, gameName: l.name, gameIcon: l.icon };
            })({
                gameId: e,
                user: o.default.getCurrentUser(),
                game: a.A.getGame(e),
                autocompleteGame: r.A.getGameById(e),
            }),
        [e],
        l.A,
    );
}
