r.d(t, { A: () => N });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(989349),
    o = r.n(i),
    u = r(311907),
    c = r(397927),
    d = r(734057),
    h = r(309010),
    _ = r(692986),
    E = r(822382),
    S = r(753806),
    f = r(424913),
    g = r(65600),
    A = r(145331),
    p = r(272444),
    R = r(806595),
    m = r(768570),
    y = r(652215),
    T = r(905174);
let I = o()("2015-05-15").local();
function x(e) {
    let { items: t, navId: r, selectedIndex: n } = e,
        l = 0;
    return (0, s.jsx)(s.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case R.$.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = l;
                    return (
                        (l += 1),
                        (0, s.jsx)(
                            p.Jx,
                            { icon: t, label: a, onSelect: i, navId: r, index: o, selected: n === o },
                            `${e.type}-${o}`,
                        )
                    );
                case R.$.GROUP:
                    let { rows: u, title: c } = e.data,
                        d = l;
                    return (
                        (l += u.length),
                        (0, s.jsx)(
                            p.YD,
                            { navId: r, item: e, startingIndex: d, selectedIndex: n },
                            `${e.type}--${c}-${d}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let L = n.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, resultsState: a, onSelectedIndexChanged: i, selectedChannel: o } = e,
            [u, d] = n.useState(-1),
            h = n.useCallback(
                (e) => {
                    d(e), i(e);
                    let t = document.getElementById(`${l}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [l, i],
            ),
            _ = n.useCallback(
                (e) => {
                    let { query: t, performSearch: r, replace: s } = e;
                    S.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: s,
                        resultsState: a,
                        searchQuerySource: m.Q_.SEARCH_POPOUT,
                    }),
                        h(-1);
                },
                [a, h],
            ),
            { items: E, itemsData: g } = (0, f.A)({
                resultsState: a,
                searchContext: r,
                selectedChannel: o,
                setSearchQuery: _,
            }),
            A = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    s = t;
                return (
                    null == s && (s = u),
                    !(s < 0) &&
                        !(s > g.length - 1) &&
                        (g[s].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: s }), !0)
                );
            },
            p = (e) => {
                let t;
                (t = u + e) > g.length - 1 ? (t = 0) : t < 0 && (t = g.length - 1), h(t);
            },
            R = n.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        return (
            n.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: r, query: s } = R.current,
                    n = a.mode.type,
                    l = a.query;
                if (n !== r) n === y.o$q.FILTER ? h(0) : h(-1);
                else if (n === y.o$q.FILTER && a.query !== s && g.length > 0) h(0);
                else if (n === y.o$q.FILTER && 0 === e.length && g.length > 0) h(0);
                else if (t >= 0 && (t === u || e.length !== g.length)) {
                    let r = e[t],
                        s = r?.data.resultText;
                    if (null != s) {
                        let e = g.findIndex((e) => e.data.resultText === s);
                        -1 !== e ? h(e) : t >= g.length && h(Math.max(0, g.length - 1));
                    } else t >= g.length && h(Math.max(0, g.length - 1));
                }
                R.current = { itemsData: g, selectedIndex: u, modeType: n, query: l };
            }, [g, u, a.mode.type, a.query, h]),
            n.useImperativeHandle(t, () => ({
                selectedIndex: u,
                focusNextOption: () => {
                    p(1);
                },
                focusPreviousOption: () => {
                    p(-1);
                },
                selectOption: A,
            })),
            (0, s.jsx)(c.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${u}`,
                className: E.length > 0 ? T.kL : void 0,
                children: (0, s.jsx)(x, { items: E, navId: l, selectedIndex: u }),
            })
        );
    }),
    b = n.forwardRef(function (e, t) {
        let { navId: r, resultsState: l, searchContext: i } = e;
        return (
            n.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, s.jsx)(c.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}--1`,
                className: a()(T.kL, T.Wl),
                children: (0, s.jsx)(c.xuO, {
                    onSelect: (e) => {
                        let t = (0, E.bS)(i);
                        (0, A.kc)({
                            searchContext: i,
                            searchQuery: g.A.getSearchResultsQuery(t),
                            searchQueryString: S.A.getSearchInputText(i),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: y.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: m.oi.CLICK,
                        }),
                            S.A.setSearchQuery({
                                query: e.format(y.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: m.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: I,
                    calendarClassName: T.BJ,
                }),
            })
        );
    }),
    N = n.forwardRef(function (e, t) {
        let { searchContext: r, navId: n, onSelectedIndexChanged: l } = e,
            [a, i] = (0, u.yK)([_.A, h.A, d.A], () => {
                let e = _.A.getState(r),
                    t = h.A.getChannelId();
                return [e, d.A.getChannel(t)];
            });
        return (0, E.av)(a.mode.filter)
            ? (0, s.jsx)(b, { navId: n, resultsState: a, searchContext: r })
            : (0, s.jsx)(L, {
                  ref: t,
                  searchContext: r,
                  navId: n,
                  onSelectedIndexChanged: l,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
