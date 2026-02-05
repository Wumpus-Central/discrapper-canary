"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(580424),
    s = n(760751),
    o = n(248465),
    l = n(634788),
    u = n(374803);
n(827669);
var c = n(985018);
function d(e) {
    return `@${e.name}`;
}
function _(e) {
    return `<@$${e.id}>`;
}
let f = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [s.A],
    matches: (e, t, n, r, i) => !0,
    queryResults: (e, t, n) => ({ results: { games: o.Ay.queryGames(n).slice(0, 10) } }),
    renderResults(e) {
        let {
                results: { games: t },
                selectedIndex: n,
                query: s,
                onHover: o,
                onClick: u,
            } = e,
            d = t.map((e, t) =>
                (0, r.jsx)(a.Ay.Game, { onClick: u, onHover: o, selected: n === t, index: t, game: e }, e.id),
            ),
            _ = c.t["/U2VW+"],
            f = c.intl.string(c.t.URyqtP);
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.wZ)({ titleWithQuery: _, titleWithoutQuery: f, query: s, getQuery: (e) => `@${e}` }),
                    d,
                ],
            },
            "mentions",
        );
    },
    onSelect(e) {
        let {
                results: { games: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return (
            r.replaceInlineInput("gameMentionInput", d(i), _(i)),
            { type: u.kc.GAME_MENTION, metadata: { applicationId: i.id } }
        );
    },
};
