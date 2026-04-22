r.d(t, { A: () => C });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(989349),
    o = r.n(i),
    u = r(311907),
    c = r(573613),
    h = r(939538),
    d = r(734057),
    _ = r(309010),
    E = r(692986),
    S = r(822382),
    f = r(753806),
    p = r(424913),
    g = r(65600),
    A = r(145331),
    y = r(272444),
    R = r(806595),
    m = r(768570),
    I = r(652215),
    T = r(21799);
let L = o()("2015-05-15").local();
function x(e) {
    let { items: t, navId: r, selectedIndex: s } = e,
        l = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case R.$.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = l;
                    return (
                        (l += 1),
                        (0, n.jsx)(
                            y.Jx,
                            { icon: t, label: a, onSelect: i, navId: r, index: o, selected: s === o },
                            `${e.type}-${o}`,
                        )
                    );
                case R.$.GROUP:
                    let { rows: u, title: c } = e.data,
                        h = l;
                    return (
                        (l += u.length),
                        (0, n.jsx)(
                            y.YD,
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
let b = s.forwardRef(function (e, t) {
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
                    f.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: n,
                        resultsState: a,
                        searchQuerySource: m.Q_.SEARCH_POPOUT,
                    }),
                        d(-1);
                },
                [a, d],
            ),
            { items: E, itemsData: S } = (0, p.A)({
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
                        !(n > S.length - 1) &&
                        (S[n].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: n }), !0)
                );
            },
            A = (e) => {
                let t;
                (t = u + e) > S.length - 1 ? (t = 0) : t < 0 && (t = S.length - 1), d(t);
            },
            y = s.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        return (
            s.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: r, query: n } = y.current,
                    s = a.mode.type,
                    l = a.query;
                if (s !== r) s === I.o$q.FILTER ? d(0) : d(-1);
                else if (s === I.o$q.FILTER && a.query !== n && S.length > 0) d(0);
                else if (s === I.o$q.FILTER && 0 === e.length && S.length > 0) d(0);
                else if (t >= 0 && (t === u || e.length !== S.length)) {
                    let r = e[t],
                        n = r?.data.resultText;
                    if (null != n) {
                        let e = S.findIndex((e) => e.data.resultText === n);
                        -1 !== e ? d(e) : t >= S.length && d(Math.max(0, S.length - 1));
                    } else t >= S.length && d(Math.max(0, S.length - 1));
                }
                y.current = { itemsData: S, selectedIndex: u, modeType: s, query: l };
            }, [S, u, a.mode.type, a.query, d]),
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
            (0, n.jsx)(c.d_, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${u}`,
                className: E.length > 0 ? T.kL : void 0,
                children: (0, n.jsx)(x, { items: E, navId: l, selectedIndex: u }),
            })
        );
    }),
    N = s.forwardRef(function (e, t) {
        let { navId: r, resultsState: l, searchContext: i } = e;
        return (
            s.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, n.jsx)(c.d_, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}--1`,
                className: a()(T.kL, T.Wl),
                children: (0, n.jsx)(h.CalendarPicker, {
                    onSelect: (e) => {
                        let t = (0, S.bS)(i);
                        (0, A.kc)({
                            searchContext: i,
                            searchQuery: g.A.getSearchResultsQuery(t),
                            searchQueryString: f.A.getSearchInputText(i),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: I.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: m.oi.CLICK,
                        }),
                            f.A.setSearchQuery({
                                query: e.format(I.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: m.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: L,
                    calendarClassName: T.BJ,
                }),
            })
        );
    }),
    C = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: s, onSelectedIndexChanged: l } = e,
            [a, i] = (0, u.yK)([E.A, _.A, d.A], () => {
                let e = E.A.getState(r),
                    t = _.A.getChannelId();
                return [e, d.A.getChannel(t)];
            });
        return (0, S.av)(a.mode.filter)
            ? (0, n.jsx)(N, { navId: s, resultsState: a, searchContext: r })
            : (0, n.jsx)(b, {
                  ref: t,
                  searchContext: r,
                  navId: s,
                  onSelectedIndexChanged: l,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
