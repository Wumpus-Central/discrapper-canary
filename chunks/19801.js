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
    S = r(822382),
    E = r(753806),
    g = r(424913),
    p = r(65600),
    f = r(145331),
    A = r(272444),
    m = r(806595),
    R = r(768570),
    y = r(652215),
    T = r(996316);
let x = o()("2015-05-15").local();
function I(e) {
    let { items: t, navId: r, selectedIndex: n } = e,
        l = 0;
    return (0, s.jsx)(s.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case m.$.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = l;
                    return (
                        (l += 1),
                        (0, s.jsx)(
                            A.Jx,
                            { icon: t, label: a, onSelect: i, navId: r, index: o, selected: n === o },
                            `${e.type}-${o}`,
                        )
                    );
                case m.$.GROUP:
                    let { rows: u, title: c } = e.data,
                        d = l;
                    return (
                        (l += u.length),
                        (0, s.jsx)(
                            A.YD,
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
                    E.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: s,
                        resultsState: a,
                        searchQuerySource: R.Q_.SEARCH_POPOUT,
                    }),
                        h(-1);
                },
                [a, h],
            ),
            { items: S, itemsData: p } = (0, g.A)({
                resultsState: a,
                searchContext: r,
                selectedChannel: o,
                setSearchQuery: _,
            }),
            f = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    s = t;
                return (
                    null == s && (s = u),
                    !(s < 0) &&
                        !(s > p.length - 1) &&
                        (p[s].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: s }), !0)
                );
            },
            A = (e) => {
                let t;
                (t = u + e) > p.length - 1 ? (t = 0) : t < 0 && (t = p.length - 1), h(t);
            },
            m = n.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type });
        return (
            n.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: r } = m.current,
                    s = a.mode.type;
                if (s !== r) s === y.o$q.FILTER ? h(0) : h(-1);
                else if (t >= 0 && (t === u || e.length !== p.length)) {
                    let r = e[t],
                        s = r?.data.resultText;
                    if (null != s) {
                        let e = p.findIndex((e) => e.data.resultText === s);
                        -1 !== e ? h(e) : t >= p.length && h(Math.max(0, p.length - 1));
                    } else t >= p.length && h(Math.max(0, p.length - 1));
                }
                m.current = { itemsData: p, selectedIndex: u, modeType: s };
            }, [p, u, a.mode.type, h]),
            n.useImperativeHandle(t, () => ({
                selectedIndex: u,
                focusNextOption: () => {
                    A(1);
                },
                focusPreviousOption: () => {
                    A(-1);
                },
                selectOption: f,
            })),
            (0, s.jsx)(c.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${u}`,
                className: S.length > 0 ? T.kL : void 0,
                children: (0, s.jsx)(I, { items: S, navId: l, selectedIndex: u }),
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
                        let t = (0, S.bS)(i);
                        (0, f.kc)({
                            searchContext: i,
                            searchQuery: p.A.getSearchResultsQuery(t),
                            searchQueryString: E.A.getSearchInputText(i),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: y.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: R.oi.CLICK,
                        }),
                            E.A.setSearchQuery({
                                query: e.format(y.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: R.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: x,
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
        return (0, S.av)(a.mode.filter)
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
