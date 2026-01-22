n.d(t, { A: () => N }), n(896048), n(747238), n(812715);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(311907),
    u = n(397927),
    d = n(734057),
    f = n(309010),
    p = n(692986),
    _ = n(822382),
    h = n(753806),
    m = n(424913),
    g = n(65600),
    E = n(145331),
    b = n(272444),
    y = n(806595),
    O = n(768570),
    A = n(652215),
    v = n(996316);
let S = l()("2015-05-15").local();
function I(e) {
    let { items: t, navId: n, selectedIndex: i } = e,
        a = 0;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case y.$.ROW:
                    let { icon: t, label: s, onSelect: o } = e.data,
                        l = a;
                    return (
                        (a += 1),
                        (0, r.jsx)(
                            b.Jx,
                            {
                                icon: t,
                                label: s,
                                onSelect: o,
                                navId: n,
                                index: l,
                                selected: i === l,
                            },
                            "".concat(e.type, "-").concat(l),
                        )
                    );
                case y.$.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = a;
                    return (
                        (a += c.length),
                        (0, r.jsx)(
                            b.YD,
                            {
                                navId: n,
                                item: e,
                                startingIndex: d,
                                selectedIndex: i,
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
let T = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: a, resultsState: s, onSelectedIndexChanged: o, selectedChannel: l } = e,
            [c, d] = i.useState(-1),
            f = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            p = i.useCallback(
                (e) => {
                    d(e), o(e);
                    let t = document.getElementById("".concat(a, "-").concat(e));
                    null != t &&
                        t.scrollIntoView({
                            block: "nearest",
                            inline: "nearest",
                        });
                },
                [a, o],
            ),
            _ = i.useCallback(
                (e) => {
                    let { query: t, performSearch: n, replace: r } = e;
                    h.A.setSearchQuery({
                        query: t,
                        performSearch: n,
                        replace: r,
                        resultsState: s,
                        searchQuerySource: O.Q_.SEARCH_POPOUT,
                    }),
                        p(-1);
                },
                [s, p],
            ),
            { items: g, itemsData: E } = (0, m.A)({
                resultsState: s,
                searchContext: n,
                selectedChannel: l,
                setSearchQuery: _,
            }),
            b = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                return (
                    null == r && (r = c),
                    !(r < 0) &&
                        !(r > E.length - 1) &&
                        (E[r].data.onSelect({
                            searchAutocompleteSelectAction: n,
                            selectedIndex: r,
                        }),
                        !0)
                );
            },
            y = (e) => {
                let t = e;
                t > E.length - 1 ? (t = 0) : t < 0 && (t = E.length - 1), p(t);
            },
            S = (e) => {
                y(c + e);
            },
            T = i.useRef({
                itemsData: [],
                selectedIndex: -1,
                modeType: s.mode.type,
            });
        return (
            i.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: n } = T.current,
                    r = s.mode.type;
                if (r !== n) r === A.o$q.FILTER ? p(0) : p(-1);
                else if (t >= 0 && (t === c || e.length !== E.length)) {
                    let n = e[t],
                        r = null == n ? void 0 : n.data.resultText;
                    if (null != r) {
                        let e = E.findIndex((e) => e.data.resultText === r);
                        -1 !== e ? p(e) : t >= E.length && p(Math.max(0, E.length - 1));
                    } else t >= E.length && p(Math.max(0, E.length - 1));
                }
                T.current = {
                    itemsData: E,
                    selectedIndex: c,
                    modeType: r,
                };
            }, [E, c, s.mode.type, p]),
            i.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {
                    S(1);
                },
                focusPreviousOption: () => {
                    S(-1);
                },
                selectOption: b,
            })),
            (0, r.jsx)(u.d_W, {
                onMouseDown: f,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(c),
                className: g.length > 0 ? v.kL : void 0,
                children: (0, r.jsx)(I, {
                    items: g,
                    navId: a,
                    selectedIndex: c,
                }),
            })
        );
    }),
    C = i.forwardRef(function (e, t) {
        let { navId: n, resultsState: a, searchContext: o } = e,
            c = -1,
            d = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            f = (e) => {
                let t = (0, _.bS)(o);
                (0, E.kc)({
                    searchContext: o,
                    searchQuery: g.A.getSearchResultsQuery(t),
                    searchQueryString: h.A.getSearchInputText(o),
                    searchTokenType: a.mode.filter,
                    searchAutocompleteGroup: A.x2k.DATES,
                    searchAutocompleteMode: a.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: O.oi.CLICK,
                }),
                    h.A.setSearchQuery({
                        query: e.format(A.ump) + " ",
                        performSearch: !0,
                        replace: !1,
                        resultsState: a,
                        searchQuerySource: O.Q_.SEARCH_POPOUT,
                    });
            };
        return (
            i.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, r.jsx)(u.d_W, {
                onMouseDown: d,
                role: "listbox",
                id: n,
                tabIndex: -1,
                "aria-activedescendant": "".concat(n, "-").concat(c),
                className: s()(v.kL, v.Wl),
                children: (0, r.jsx)(u.xuO, {
                    onSelect: f,
                    maxDate: l()().local(),
                    minDate: S,
                    calendarClassName: v.BJ,
                }),
            })
        );
    }),
    N = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: a } = e,
            [s, o] = (0, c.yK)([p.A, f.A, d.A], () => {
                let e = p.A.getState(n),
                    t = f.A.getChannelId();
                return [e, d.A.getChannel(t)];
            });
        return (0, _.av)(s.mode.filter)
            ? (0, r.jsx)(C, {
                  navId: i,
                  resultsState: s,
                  searchContext: n,
              })
            : (0, r.jsx)(T, {
                  ref: t,
                  searchContext: n,
                  navId: i,
                  onSelectedIndexChanged: a,
                  resultsState: s,
                  selectedChannel: o,
              });
    });
