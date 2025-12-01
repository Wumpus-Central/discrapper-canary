n.d(t, { Z: () => P }), n(388685), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(592125),
    f = n(944486),
    p = n(585483),
    _ = n(738018),
    m = n(607802),
    h = n(637879),
    g = n(794137),
    E = n(611004),
    b = n(448842),
    y = n(817190),
    O = n(315322),
    v = n(723642),
    S = n(981631),
    I = n(356702);
let T = l()("2015-05-15").local();
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
                            h._B,
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
                            h.dI,
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
            [c, d] = i.useState(-1),
            f = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            p = i.useCallback(
                (e) => {
                    d(e), s(e);
                    let t = document.getElementById("".concat(a, "-").concat(e));
                    null != t &&
                        t.scrollIntoView({
                            block: "nearest",
                            inline: "nearest",
                        });
                },
                [a, s],
            ),
            _ = i.useCallback(
                (e) => {
                    let { query: t, performSearch: n, replace: r } = e;
                    E.Z.setSearchQuery({
                        query: t,
                        performSearch: n,
                        replace: r,
                        resultsState: o,
                    }),
                        p(-1);
                },
                [o, p],
            ),
            { items: m, itemsData: h } = (0, b.Z)({
                resultsState: o,
                searchContext: n,
                selectedChannel: l,
                setSearchQuery: _,
            }),
            g = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                return (
                    null == r && (r = c),
                    !(r < 0) &&
                        !(r > h.length - 1) &&
                        (h[r].data.onSelect({
                            searchAutocompleteSelectAction: n,
                            selectedIndex: r,
                        }),
                        !0)
                );
            },
            y = (e) => {
                let t = e;
                t > h.length - 1 ? (t = 0) : t < 0 && (t = h.length - 1), p(t);
            },
            O = (e) => {
                y(c + e);
            },
            v = i.useRef({
                itemsData: [],
                selectedIndex: -1,
                modeType: o.mode.type,
            });
        return (
            i.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: n } = v.current,
                    r = o.mode.type;
                if (r !== n) r === S.Sap.FILTER ? p(0) : p(-1);
                else if (t >= 0 && (t === c || e.length !== h.length)) {
                    let n = e[t],
                        r = null == n ? void 0 : n.data.resultText;
                    if (null != r) {
                        let e = h.findIndex((e) => e.data.resultText === r);
                        -1 !== e ? p(e) : t >= h.length && p(Math.max(0, h.length - 1));
                    } else t >= h.length && p(Math.max(0, h.length - 1));
                }
                v.current = {
                    itemsData: h,
                    selectedIndex: c,
                    modeType: r,
                };
            }, [h, c, o.mode.type, p]),
            i.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {
                    O(1);
                },
                focusPreviousOption: () => {
                    O(-1);
                },
                selectOption: g,
            })),
            (0, r.jsx)(u.u2D, {
                onMouseDown: f,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(c),
                className: m.length > 0 ? I.container : void 0,
                children: (0, r.jsx)(A, {
                    items: m,
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
                let t = (0, m.Tm)(s);
                (0, O.bh)({
                    searchContext: s,
                    searchQuery: y.Z.getSearchResultsQuery(t),
                    searchQueryString: E.Z.getSearchInputText(s),
                    searchTokenType: a.mode.filter,
                    searchAutocompleteGroup: S.rtL.DATES,
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
                p.S.dispatch(S.CkL.SET_SEARCH_QUERY, {
                    query: e.format(S.b2L) + " ",
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
            (0, r.jsx)(u.u2D, {
                onMouseDown: d,
                role: "listbox",
                id: n,
                tabIndex: -1,
                "aria-activedescendant": "".concat(n, "-").concat(c),
                className: o()(I.container, I.datePickerContainer),
                children: (0, r.jsx)(u.hGg, {
                    onSelect: f,
                    maxDate: l()().local(),
                    minDate: T,
                    calendarClassName: I.calendar,
                }),
            })
        );
    }),
    P = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: a } = e,
            [o, s] = (0, c.Wu)([_.Z, f.Z, d.Z], () => {
                let e = _.Z.getState(n),
                    t = f.Z.getChannelId();
                return [e, d.Z.getChannel(t)];
            });
        return (0, m.Fz)(o.mode.filter)
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
