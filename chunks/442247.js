n.d(t, { K: () => u });
var l = n(17928),
    s = n(52133),
    i = n(49491),
    a = n(311043),
    r = n(243264),
    o = n(287809);
function u(e) {
    return (0, l.bG)(
        [a.A, r.A, o.default],
        () =>
            (function (e) {
                let { gameId: t, user: n, game: l, autocompleteGame: s } = e;
                if (null != l) {
                    if ((0, i.b)(l, n?.nsfwAllowed)) return;
                    return { gameId: t, gameName: l.name, gameIcon: l.media?.icon };
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
