r.d(t, { A: () => C });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(989349),
    o = r.n(i),
    c = r(311907),
    u = r(397927),
    d = r(734057),
    h = r(309010),
    _ = r(692986),
    f = r(822382),
    S = r(753806),
    E = r(424913),
    g = r(65600),
    p = r(145331),
    A = r(272444),
    m = r(806595),
    R = r(768570),
    y = r(652215),
    x = r(996316);
let T = o()("2015-05-15").local();
function I(e) {
    let { items: t, navId: r, selectedIndex: s } = e,
        l = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case m.$.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = l;
                    return (
                        (l += 1),
                        (0, n.jsx)(
                            A.Jx,
                            { icon: t, label: a, onSelect: i, navId: r, index: o, selected: s === o },
                            `${e.type}-${o}`,
                        )
                    );
                case m.$.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = l;
                    return (
                        (l += c.length),
                        (0, n.jsx)(
                            A.YD,
                            { navId: r, item: e, startingIndex: d, selectedIndex: s },
                            `${e.type}--${u}-${d}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let b = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, resultsState: a, onSelectedIndexChanged: i, selectedChannel: o } = e,
            [c, d] = s.useState(-1),
            h = s.useCallback(
                (e) => {
                    d(e), i(e);
                    let t = document.getElementById(`${l}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [l, i],
            ),
            _ = s.useCallback(
                (e) => {
                    let { query: t, performSearch: r, replace: n } = e;
                    S.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: n,
                        resultsState: a,
                        searchQuerySource: R.Q_.SEARCH_POPOUT,
                    }),
                        h(-1);
                },
                [a, h],
            ),
            { items: f, itemsData: g } = (0, E.A)({
                resultsState: a,
                searchContext: r,
                selectedChannel: o,
                setSearchQuery: _,
            }),
            p = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    n = t;
                return (
                    null == n && (n = c),
                    !(n < 0) &&
                        !(n > g.length - 1) &&
                        (g[n].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: n }), !0)
                );
            },
            A = (e) => {
                let t;
                (t = c + e) > g.length - 1 ? (t = 0) : t < 0 && (t = g.length - 1), h(t);
            },
            m = s.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        return (
            s.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: r, query: n } = m.current,
                    s = a.mode.type,
                    l = a.query;
                if (s !== r) s === y.o$q.FILTER ? h(0) : h(-1);
                else if (s === y.o$q.FILTER && a.query !== n && g.length > 0) h(0);
                else if (s === y.o$q.FILTER && 0 === e.length && g.length > 0) h(0);
                else if (t >= 0 && (t === c || e.length !== g.length)) {
                    let r = e[t],
                        n = r?.data.resultText;
                    if (null != n) {
                        let e = g.findIndex((e) => e.data.resultText === n);
                        -1 !== e ? h(e) : t >= g.length && h(Math.max(0, g.length - 1));
                    } else t >= g.length && h(Math.max(0, g.length - 1));
                }
                m.current = { itemsData: g, selectedIndex: c, modeType: s, query: l };
            }, [g, c, a.mode.type, a.query, h]),
            s.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {
                    A(1);
                },
                focusPreviousOption: () => {
                    A(-1);
                },
                selectOption: p,
            })),
            (0, n.jsx)(u.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${c}`,
                className: f.length > 0 ? x.kL : void 0,
                children: (0, n.jsx)(I, { items: f, navId: l, selectedIndex: c }),
            })
        );
    }),
    L = s.forwardRef(function (e, t) {
        let { navId: r, resultsState: l, searchContext: i } = e;
        return (
            s.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, n.jsx)(u.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}--1`,
                className: a()(x.kL, x.Wl),
                children: (0, n.jsx)(u.xuO, {
                    onSelect: (e) => {
                        let t = (0, f.bS)(i);
                        (0, p.kc)({
                            searchContext: i,
                            searchQuery: g.A.getSearchResultsQuery(t),
                            searchQueryString: S.A.getSearchInputText(i),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: y.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: R.oi.CLICK,
                        }),
                            S.A.setSearchQuery({
                                query: e.format(y.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: R.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: T,
                    calendarClassName: x.BJ,
                }),
            })
        );
    }),
    C = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: s, onSelectedIndexChanged: l } = e,
            [a, i] = (0, c.yK)([_.A, h.A, d.A], () => {
                let e = _.A.getState(r),
                    t = h.A.getChannelId();
                return [e, d.A.getChannel(t)];
            });
        return (0, f.av)(a.mode.filter)
            ? (0, n.jsx)(L, { navId: s, resultsState: a, searchContext: r })
            : (0, n.jsx)(b, {
                  ref: t,
                  searchContext: r,
                  navId: s,
                  onSelectedIndexChanged: l,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
