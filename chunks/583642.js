n.d(t, { Z: () => R }), n(388685), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(592125),
    f = n(944486),
    _ = n(585483),
    p = n(738018),
    h = n(607802),
    m = n(637879),
    g = n(794137),
    E = n(611004),
    b = n(448842),
    y = n(817190),
    O = n(315322),
    v = n(723642),
    I = n(981631),
    T = n(356702);
let S = l()("2015-05-15").local();
function A(e) {
    let { items: t, navId: n, selectedIndex: i } = e,
        a = 0;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case g.i.ROW:
                    let { icon: t, label: o, onSelect: s } = e.data,
                        l = a;
                    return (
                        (a += 1),
                        (0, r.jsx)(
                            m._B,
                            {
                                icon: t,
                                label: o,
                                onSelect: s,
                                navId: n,
                                index: l,
                                selected: i === l,
                            },
                            "".concat(e.type, "-").concat(l),
                        )
                    );
                case g.i.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = a;
                    return (
                        (a += c.length),
                        (0, r.jsx)(
                            m.dI,
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
let C = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: a, resultsState: o, onSelectedIndexChanged: s, selectedChannel: l } = e,
            [c, u] = i.useState(-1),
            d = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            f = i.useCallback(
                (e) => {
                    let { query: t, performSearch: n, replace: r } = e;
                    E.Z.setSearchQuery({
                        query: t,
                        performSearch: n,
                        replace: r,
                        resultsState: o,
                    }),
                        u(-1);
                },
                [o],
            ),
            { items: _, itemsData: p } = (0, b.Z)({
                resultsState: o,
                searchContext: n,
                selectedChannel: l,
                setSearchQuery: f,
            }),
            h = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                return (
                    null == r && (r = c),
                    !(r < 0) &&
                        !(r > p.length - 1) &&
                        (p[r].data.onSelect({
                            searchAutocompleteSelectAction: n,
                            selectedIndex: r,
                        }),
                        !0)
                );
            },
            m = (e) => {
                let t = e;
                t > p.length - 1 ? (t = 0) : t < 0 && (t = p.length - 1), u(t), s(t);
            },
            g = (e) => {
                m(c + e);
            };
        return (
            i.useEffect(() => {
                u(-1);
            }, [o.mode.type]),
            i.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {
                    g(1);
                },
                focusPreviousOption: () => {
                    g(-1);
                },
                selectOption: h,
            })),
            (0, r.jsx)("div", {
                onMouseDown: d,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(c),
                className: T.container,
                children: (0, r.jsx)(A, {
                    items: _,
                    navId: a,
                    selectedIndex: c,
                }),
            })
        );
    }),
    N = i.forwardRef(function (e, t) {
        let { navId: n, resultsState: a, searchContext: s } = e,
            c = -1,
            d = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            f = (e) => {
                let t = (0, h.Tm)(s);
                (0, O.bh)({
                    searchContext: s,
                    searchQuery: y.Z.getSearchResultsQuery(t),
                    searchQueryString: E.Z.getSearchInputText(s),
                    searchTokenType: a.mode.filter,
                    searchAutocompleteGroup: I.rtL.DATES,
                    searchAutocompleteMode: a.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: v.ZW.CLICK,
                });
                let { mode: n, cursorScope: r } = a,
                    i = 0;
                null != n.token
                    ? (i = n.token.start)
                    : (null == r ? void 0 : r.currentToken) != null && (i = r.currentToken.end);
                let o = null != n.token ? n.token.end : i;
                _.S.dispatch(I.CkL.SET_SEARCH_QUERY, {
                    query: e.format(I.b2L) + " ",
                    anchor: i,
                    focus: o,
                    performSearch: !0,
                    replace: !1,
                });
            };
        return (
            i.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, r.jsx)("div", {
                onMouseDown: d,
                role: "listbox",
                id: n,
                tabIndex: -1,
                "aria-activedescendant": "".concat(n, "-").concat(c),
                className: o()(T.container, T.datePickerContainer),
                children: (0, r.jsx)(u.hGg, {
                    onSelect: f,
                    maxDate: l()().local(),
                    minDate: S,
                }),
            })
        );
    }),
    R = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: a } = e,
            [o, s] = (0, c.Wu)([p.Z, f.Z, d.Z], () => {
                let e = p.Z.getState(n),
                    t = f.Z.getChannelId();
                return [e, d.Z.getChannel(t)];
            });
        return (0, h.Fz)(o.mode.filter)
            ? (0, r.jsx)(N, {
                  navId: i,
                  resultsState: o,
                  searchContext: n,
              })
            : (0, r.jsx)(C, {
                  ref: t,
                  searchContext: n,
                  navId: i,
                  onSelectedIndexChanged: a,
                  resultsState: o,
                  selectedChannel: s,
              });
    });
