n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(580424),
    s = n(760751),
    o = n(248465),
    l = n(634788),
    c = n(374803);
n(827669);
var u = n(985018);
function d(e) {
    return "".concat("@").concat(e.name);
}
function f(e) {
    return "<@$".concat(e.id, ">");
}
let p = {
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
                onClick: c,
            } = e,
            d = t.map((e, t) =>
                (0, r.jsx)(
                    a.Ay.Game,
                    {
                        onClick: c,
                        onHover: o,
                        selected: n === t,
                        index: t,
                        game: e,
                    },
                    e.id,
                ),
            ),
            f = u.t["/U2VW+"],
            p = u.intl.string(u.t.URyqtP);
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.wZ)({
                        titleWithQuery: f,
                        titleWithoutQuery: p,
                        query: s,
                        getQuery: (e) => "".concat("@").concat(e),
                    }),
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
            r.replaceInlineInput("gameMentionInput", d(i), f(i)),
            {
                type: c.kc.GAME_MENTION,
                metadata: { applicationId: i.id },
            }
        );
    },
};
