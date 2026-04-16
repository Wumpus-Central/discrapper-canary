r.d(t, { A: () => N });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(989349),
    o = r.n(i),
    u = r(311907),
    c = r(397927),
    h = r(734057),
    d = r(309010),
    _ = r(692986),
    S = r(822382),
    E = r(753806),
    f = r(424913),
    p = r(65600),
    g = r(145331),
    A = r(272444),
    y = r(806595),
    R = r(768570),
    T = r(652215),
    I = r(21799);
let m = o()("2015-05-15").local();
function L(e) {
    let { items: t, navId: r, selectedIndex: s } = e,
        l = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case y.$.ROW:
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
                case y.$.GROUP:
                    let { rows: u, title: c } = e.data,
                        h = l;
                    return (
                        (l += u.length),
                        (0, n.jsx)(
                            A.YD,
                            { navId: r, item: e, startingIndex: h, selectedIndex: s },
                            `${e.type}--${c}-${h}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let x = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, resultsState: a, onSelectedIndexChanged: i, selectedChannel: o } = e,
            [u, h] = s.useState(-1),
            d = s.useCallback(
                (e) => {
                    h(e), i(e);
                    let t = document.getElementById(`${l}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [l, i],
            ),
            _ = s.useCallback(
                (e) => {
                    let { query: t, performSearch: r, replace: n } = e;
                    E.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: n,
                        resultsState: a,
                        searchQuerySource: R.Q_.SEARCH_POPOUT,
                    }),
                        d(-1);
                },
                [a, d],
            ),
            { items: S, itemsData: p } = (0, f.A)({
                resultsState: a,
                searchContext: r,
                selectedChannel: o,
                setSearchQuery: _,
            }),
            g = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    n = t;
                return (
                    null == n && (n = u),
                    !(n < 0) &&
                        !(n > p.length - 1) &&
                        (p[n].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: n }), !0)
                );
            },
            A = (e) => {
                let t;
                (t = u + e) > p.length - 1 ? (t = 0) : t < 0 && (t = p.length - 1), d(t);
            },
            y = s.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        return (
            s.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: r, query: n } = y.current,
                    s = a.mode.type,
                    l = a.query;
                if (s !== r) s === T.o$q.FILTER ? d(0) : d(-1);
                else if (s === T.o$q.FILTER && a.query !== n && p.length > 0) d(0);
                else if (s === T.o$q.FILTER && 0 === e.length && p.length > 0) d(0);
                else if (t >= 0 && (t === u || e.length !== p.length)) {
                    let r = e[t],
                        n = r?.data.resultText;
                    if (null != n) {
                        let e = p.findIndex((e) => e.data.resultText === n);
                        -1 !== e ? d(e) : t >= p.length && d(Math.max(0, p.length - 1));
                    } else t >= p.length && d(Math.max(0, p.length - 1));
                }
                y.current = { itemsData: p, selectedIndex: u, modeType: s, query: l };
            }, [p, u, a.mode.type, a.query, d]),
            s.useImperativeHandle(t, () => ({
                selectedIndex: u,
                focusNextOption: () => {
                    A(1);
                },
                focusPreviousOption: () => {
                    A(-1);
                },
                selectOption: g,
            })),
            (0, n.jsx)(c.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${u}`,
                className: S.length > 0 ? I.kL : void 0,
                children: (0, n.jsx)(L, { items: S, navId: l, selectedIndex: u }),
            })
        );
    }),
    C = s.forwardRef(function (e, t) {
        let { navId: r, resultsState: l, searchContext: i } = e;
        return (
            s.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, n.jsx)(c.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}--1`,
                className: a()(I.kL, I.Wl),
                children: (0, n.jsx)(c.xuO, {
                    onSelect: (e) => {
                        let t = (0, S.bS)(i);
                        (0, g.kc)({
                            searchContext: i,
                            searchQuery: p.A.getSearchResultsQuery(t),
                            searchQueryString: E.A.getSearchInputText(i),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: T.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: R.oi.CLICK,
                        }),
                            E.A.setSearchQuery({
                                query: e.format(T.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: R.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: m,
                    calendarClassName: I.BJ,
                }),
            })
        );
    }),
    N = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: s, onSelectedIndexChanged: l } = e,
            [a, i] = (0, u.yK)([_.A, d.A, h.A], () => {
                let e = _.A.getState(r),
                    t = d.A.getChannelId();
                return [e, h.A.getChannel(t)];
            });
        return (0, S.av)(a.mode.filter)
            ? (0, n.jsx)(C, { navId: s, resultsState: a, searchContext: r })
            : (0, n.jsx)(x, {
                  ref: t,
                  searchContext: r,
                  navId: s,
                  onSelectedIndexChanged: l,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
