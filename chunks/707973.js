n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(588468),
    a = n(77498),
    s = n(483360),
    l = n(877565),
    c = n(590921),
    u = n(761652),
    d = n(388032);
function f(e) {
    return "".concat(u.ME).concat(e.name);
}
function _(e) {
    return "<@$".concat(e.id, ">");
}
let p = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [a.Z],
    matches: (e, t, n, r, i) => !0,
    queryResults: (e, t, n) => ({ results: { games: s.ZP.queryGames(n).slice(0, 10) } }),
    renderResults(e) {
        let {
                results: { games: t },
                selectedIndex: n,
                query: a,
                onHover: s,
                onClick: c,
            } = e,
            f = t.map((e, t) =>
                (0, r.jsx)(
                    o.ZP.Game,
                    {
                        onClick: c,
                        onHover: s,
                        selected: n === t,
                        index: t,
                        game: e,
                    },
                    e.id,
                ),
            ),
            _ = d.t["/U2VW1"],
            p = d.intl.string(d.t.URyqtL);
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.gm)({
                        titleWithQuery: _,
                        titleWithoutQuery: p,
                        query: a,
                        getQuery: (e) => "".concat(u.ME).concat(e),
                    }),
                    f,
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
        return r.replaceInlineInput("gameMentionInput", f(i), _(i)), { type: c.z2.MENTION };
    },
};
