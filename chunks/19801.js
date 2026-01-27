r.d(t, {
    A: () => I,
}),
    r(896048),
    r(747238),
    r(812715);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(989349),
    o = r.n(i),
    c = r(311907),
    u = r(397927),
    d = r(734057),
    h = r(309010),
    p = r(692986),
    f = r(822382),
    g = r(753806),
    S = r(424913),
    E = r(65600),
    y = r(145331),
    _ = r(272444),
    m = r(806595),
    A = r(768570),
    b = r(652215),
    O = r(996316);
let R = o()("2015-05-15").local();

function v(e) {
    let { items: t, navId: r, selectedIndex: l } = e,
        s = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case m.$.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            _.Jx,
                            {
                                icon: t,
                                label: a,
                                onSelect: i,
                                navId: r,
                                index: o,
                                selected: l === o,
                            },
                            "".concat(e.type, "-").concat(o),
                        )
                    );
                case m.$.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = s;
                    return (
                        (s += c.length),
                        (0, n.jsx)(
                            _.YD,
                            {
                                navId: r,
                                item: e,
                                startingIndex: d,
                                selectedIndex: l,
                            },
                            "".concat(e.type, "--").concat(u, "-").concat(d),
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let x = l.forwardRef(function (e, t) {
        let { searchContext: r, navId: s, resultsState: a, onSelectedIndexChanged: i, selectedChannel: o } = e,
            [c, d] = l.useState(-1),
            h = l.useCallback(
                (e) => {
                    d(e), i(e);
                    let t = document.getElementById("".concat(s, "-").concat(e));
                    null != t &&
                        t.scrollIntoView({
                            block: "nearest",
                            inline: "nearest",
                        });
                },
                [s, i],
            ),
            p = l.useCallback(
                (e) => {
                    let { query: t, performSearch: r, replace: n } = e;
                    g.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: n,
                        resultsState: a,
                        searchQuerySource: A.Q_.SEARCH_POPOUT,
                    }),
                        h(-1);
                },
                [a, h],
            ),
            { items: f, itemsData: E } = (0, S.A)({
                resultsState: a,
                searchContext: r,
                selectedChannel: o,
                setSearchQuery: p,
            }),
            y = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    n = t;
                return (
                    null == n && (n = c),
                    !(n < 0) &&
                        !(n > E.length - 1) &&
                        (E[n].data.onSelect({
                            searchAutocompleteSelectAction: r,
                            selectedIndex: n,
                        }),
                        !0)
                );
            },
            _ = (e) => {
                let t;
                (t = c + e) > E.length - 1 ? (t = 0) : t < 0 && (t = E.length - 1), h(t);
            },
            m = l.useRef({
                itemsData: [],
                selectedIndex: -1,
                modeType: a.mode.type,
            });
        return (
            l.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: r } = m.current,
                    n = a.mode.type;
                if (n !== r) n === b.o$q.FILTER ? h(0) : h(-1);
                else if (t >= 0 && (t === c || e.length !== E.length)) {
                    let r = e[t],
                        n = null == r ? void 0 : r.data.resultText;
                    if (null != n) {
                        let e = E.findIndex((e) => e.data.resultText === n);
                        -1 !== e ? h(e) : t >= E.length && h(Math.max(0, E.length - 1));
                    } else t >= E.length && h(Math.max(0, E.length - 1));
                }
                m.current = {
                    itemsData: E,
                    selectedIndex: c,
                    modeType: n,
                };
            }, [E, c, a.mode.type, h]),
            l.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {
                    _(1);
                },
                focusPreviousOption: () => {
                    _(-1);
                },
                selectOption: y,
            })),
            (0, n.jsx)(u.d_W, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: s,
                tabIndex: -1,
                "aria-activedescendant": "".concat(s, "-").concat(c),
                className: f.length > 0 ? O.kL : void 0,
                children: (0, n.jsx)(v, {
                    items: f,
                    navId: s,
                    selectedIndex: c,
                }),
            })
        );
    }),
    T = l.forwardRef(function (e, t) {
        let { navId: r, resultsState: s, searchContext: i } = e;
        return (
            l.useImperativeHandle(t, () => ({
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
                "aria-activedescendant": "".concat(r, "-").concat(-1),
                className: a()(O.kL, O.Wl),
                children: (0, n.jsx)(u.xuO, {
                    onSelect: (e) => {
                        let t = (0, f.bS)(i);
                        (0, y.kc)({
                            searchContext: i,
                            searchQuery: E.A.getSearchResultsQuery(t),
                            searchQueryString: g.A.getSearchInputText(i),
                            searchTokenType: s.mode.filter,
                            searchAutocompleteGroup: b.x2k.DATES,
                            searchAutocompleteMode: s.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: A.oi.CLICK,
                        }),
                            g.A.setSearchQuery({
                                query: e.format(b.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: s,
                                searchQuerySource: A.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: R,
                    calendarClassName: O.BJ,
                }),
            })
        );
    }),
    I = l.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, onSelectedIndexChanged: s } = e,
            [a, i] = (0, c.yK)([p.A, h.A, d.A], () => {
                let e = p.A.getState(r),
                    t = h.A.getChannelId();
                return [e, d.A.getChannel(t)];
            });
        return (0, f.av)(a.mode.filter)
            ? (0, n.jsx)(T, {
                  navId: l,
                  resultsState: a,
                  searchContext: r,
              })
            : (0, n.jsx)(x, {
                  ref: t,
                  searchContext: r,
                  navId: l,
                  onSelectedIndexChanged: s,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
