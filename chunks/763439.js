n.d(t, { Z: () => N }), n(388685), n(704826), n(35282);
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
    p = n(738018),
    _ = n(607802),
    h = n(611004),
    m = n(603038),
    g = n(817190),
    E = n(315322),
    b = n(774322),
    y = n(398944),
    O = n(723642),
    v = n(981631),
    S = n(707306);
let I = l()("2015-05-15").local();
function T(e) {
    let { items: t, navId: n, selectedIndex: i } = e,
        a = 0;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case y.i.ROW:
                    let { icon: t, label: o, onSelect: s } = e.data,
                        l = a;
                    return (
                        (a += 1),
                        (0, r.jsx)(
                            b._B,
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
                case y.i.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = a;
                    return (
                        (a += c.length),
                        (0, r.jsx)(
                            b.dI,
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
                    h.Z.setSearchQuery({
                        query: t,
                        performSearch: n,
                        replace: r,
                        resultsState: o,
                        searchQuerySource: O.w7.SEARCH_POPOUT,
                    }),
                        p(-1);
                },
                [o, p],
            ),
            { items: g, itemsData: E } = (0, m.Z)({
                resultsState: o,
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
            I = (e) => {
                y(c + e);
            },
            C = i.useRef({
                itemsData: [],
                selectedIndex: -1,
                modeType: o.mode.type,
            });
        return (
            i.useEffect(() => {
                let { itemsData: e, selectedIndex: t, modeType: n } = C.current,
                    r = o.mode.type;
                if (r !== n) r === v.Sap.FILTER ? p(0) : p(-1);
                else if (t >= 0 && (t === c || e.length !== E.length)) {
                    let n = e[t],
                        r = null == n ? void 0 : n.data.resultText;
                    if (null != r) {
                        let e = E.findIndex((e) => e.data.resultText === r);
                        -1 !== e ? p(e) : t >= E.length && p(Math.max(0, E.length - 1));
                    } else t >= E.length && p(Math.max(0, E.length - 1));
                }
                C.current = {
                    itemsData: E,
                    selectedIndex: c,
                    modeType: r,
                };
            }, [E, c, o.mode.type, p]),
            i.useImperativeHandle(t, () => ({
                selectedIndex: c,
                focusNextOption: () => {
                    I(1);
                },
                focusPreviousOption: () => {
                    I(-1);
                },
                selectOption: b,
            })),
            (0, r.jsx)(u.u2D, {
                onMouseDown: f,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(c),
                className: g.length > 0 ? S.container : void 0,
                children: (0, r.jsx)(T, {
                    items: g,
                    navId: a,
                    selectedIndex: c,
                }),
            })
        );
    }),
    A = i.forwardRef(function (e, t) {
        let { navId: n, resultsState: a, searchContext: s } = e,
            c = -1,
            d = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            f = (e) => {
                let t = (0, _.Tm)(s);
                (0, E.bh)({
                    searchContext: s,
                    searchQuery: g.Z.getSearchResultsQuery(t),
                    searchQueryString: h.Z.getSearchInputText(s),
                    searchTokenType: a.mode.filter,
                    searchAutocompleteGroup: v.rtL.DATES,
                    searchAutocompleteMode: a.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: O.ZW.CLICK,
                }),
                    h.Z.setSearchQuery({
                        query: e.format(v.b2L) + " ",
                        performSearch: !0,
                        replace: !1,
                        resultsState: a,
                        searchQuerySource: O.w7.SEARCH_POPOUT,
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
                className: o()(S.container, S.datePickerContainer),
                children: (0, r.jsx)(u.hGg, {
                    onSelect: f,
                    maxDate: l()().local(),
                    minDate: I,
                    calendarClassName: S.calendar,
                }),
            })
        );
    }),
    N = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: a } = e,
            [o, s] = (0, c.Wu)([p.Z, f.Z, d.Z], () => {
                let e = p.Z.getState(n),
                    t = f.Z.getChannelId();
                return [e, d.Z.getChannel(t)];
            });
        return (0, _.Fz)(o.mode.filter)
            ? (0, r.jsx)(A, {
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
