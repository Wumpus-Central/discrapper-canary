n.d(t, { K: () => u });
var l = n(17928),
    i = n(52133),
    s = n(49491),
    r = n(311043),
    a = n(243264),
    o = n(287809);
function u(e) {
    return (0, l.bG)(
        [r.A, a.A, o.default],
        () =>
            (function (e) {
                let { gameId: t, user: n, game: l, autocompleteGame: i } = e;
                if (null != l) {
                    if ((0, s.b)(l, n?.nsfwAllowed)) return;
                    return { gameId: t, gameName: l.name, gameIcon: l.media?.icon };
                }
                if (null != i) return { gameId: t, gameName: i.name, gameIcon: i.icon };
            })({
                gameId: e,
                user: o.default.getCurrentUser(),
                game: r.A.getGame(e),
                autocompleteGame: a.A.getGameById(e),
            }),
        [e],
        i.A,
    );
}
