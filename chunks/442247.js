"use strict";
n.d(t, { K: () => d });
var i = n(17928),
    r = n(52133),
    a = n(49491),
    s = n(311043),
    l = n(243264),
    o = n(287809);
function d(e) {
    return (0, i.bG)(
        [s.A, l.A, o.default],
        () =>
            (function (e) {
                let { gameId: t, user: n, game: i, autocompleteGame: r } = e;
                if (null != i) {
                    if ((0, a.b)(i, n?.nsfwAllowed)) return;
                    return { gameId: t, gameName: i.name, gameIcon: i.media?.icon };
                }
                if (null != r) return { gameId: t, gameName: r.name, gameIcon: r.icon };
            })({
                gameId: e,
                user: o.default.getCurrentUser(),
                game: s.A.getGame(e),
                autocompleteGame: l.A.getGameById(e),
            }),
        [e],
        r.A,
    );
}
