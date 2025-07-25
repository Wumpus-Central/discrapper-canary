n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(588468),
    o = n(77498),
    s = n(483360),
    l = n(877565),
    c = n(590921),
    u = n(761652),
    d = n(388032);
function _(e) {
    return ''.concat(u.ME).concat(e.name);
}
function f(e) {
    return '<@$'.concat(e.id, '>');
}
let p = {
    autocompleteInputElementType: 'gameMentionInput',
    stores: [o.Z],
    matches: (e, t, n, r, i) => !0,
    queryResults: (e, t, n) => ({ results: { games: s.ZP.queryGames(n).slice(0, 10) } }),
    renderResults(e) {
        let {
                results: { games: t },
                selectedIndex: n,
                query: o,
                onHover: s,
                onClick: c
            } = e,
            _ = t.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Game,
                    {
                        onClick: c,
                        onHover: s,
                        selected: n === t,
                        index: t,
                        game: e
                    },
                    e.id
                )
            ),
            f = d.t.rPNimp,
            p = 'Games';
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.gm)({
                        titleWithQuery: f,
                        titleWithoutQuery: p,
                        query: o,
                        getQuery: (e) => ''.concat(u.ME).concat(e)
                    }),
                    _
                ]
            },
            'mentions'
        );
    },
    onSelect(e) {
        let {
                results: { games: t },
                index: n,
                options: r
            } = e,
            i = t[n];
        return (r.replaceInlineInput('gameMentionInput', _(i), f(i)), { type: c.z2.MENTION });
    }
};
