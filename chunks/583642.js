n.d(t, { Z: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(585483),
    f = n(738018),
    _ = n(607802),
    p = n(28964),
    h = n(637879),
    m = n(611004),
    g = n(817190),
    E = n(315322),
    b = n(723642),
    y = n(981631),
    O = n(388032),
    v = n(356702);
let I = l()("2015-05-15").local(),
    T = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: a, resultsState: o } = e,
            s = -1,
            l = (0, p.KS)({
                isXDMSearch: n.type === y.aib.DMS,
                location: "SearchFiltersRedesignPopout",
            }),
            c = (e) => {
                e.stopPropagation(), e.preventDefault();
            };
        return (
            i.useImperativeHandle(t, () => ({
                selectedIndex: s,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => !1,
                handleSearchInChannel: () => !1,
                shouldShowSearchInSelectedChannel: () => !1,
            })),
            (0, r.jsxs)("div", {
                onMouseDown: c,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(s),
                className: v.container,
                children: [
                    (0, r.jsx)(h.c2, {
                        searchContext: n,
                        navId: a,
                        index: 0,
                        selected: !1,
                    }),
                    (0, r.jsx)(h.N_, {
                        searchContext: n,
                        navId: a,
                        index: 1,
                        selected: !1,
                        label:
                            o.mode.type === y.Sap.EMPTY && l ? O.intl.string(O.t.diOL4u) : O.intl.string(O.t["M1tf+/"]),
                    }),
                ],
            })
        );
    }),
    S = i.forwardRef(function (e, t) {
        let { navId: n, resultsState: a, searchContext: s } = e,
            c = -1,
            f = (e) => {
                e.stopPropagation(), e.preventDefault();
            },
            p = (e) => {
                let t = (0, _.Tm)(s);
                (0, E.bh)({
                    searchContext: s,
                    searchQuery: g.Z.getSearchResultsQuery(t),
                    searchQueryString: m.Z.getSearchInputText(s),
                    searchTokenType: a.mode.filter,
                    searchAutocompleteGroup: y.rtL.DATES,
                    searchAutocompleteMode: a.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: b.ZW.CLICK,
                });
                let { mode: n, cursorScope: r } = a,
                    i = 0;
                null != n.token
                    ? (i = n.token.start)
                    : (null == r ? void 0 : r.currentToken) != null && (i = r.currentToken.end);
                let o = null != n.token ? n.token.end : i;
                d.S.dispatch(y.CkL.SET_SEARCH_QUERY, {
                    query: e.format(y.b2L) + " ",
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
                handleSearchInChannel: () => !0,
                shouldShowSearchInSelectedChannel: () => !1,
            })),
            (0, r.jsx)("div", {
                onMouseDown: f,
                role: "listbox",
                id: n,
                tabIndex: -1,
                "aria-activedescendant": "".concat(n, "-").concat(c),
                className: o()(v.container, v.datePickerContainer),
                children: (0, r.jsx)(u.hGg, {
                    onSelect: p,
                    maxDate: l()().local(),
                    minDate: I,
                }),
            })
        );
    }),
    A = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: a } = e,
            [o, s] = (0, c.Wu)([f.Z], () => {
                let e = f.Z.getState(n),
                    t = (0, _.BU)(e.autocompletes);
                return [e, t];
            });
        return (0, _.Fz)(o.mode.filter)
            ? (0, r.jsx)(S, {
                  navId: i,
                  resultsState: o,
                  searchContext: n,
              })
            : (0, r.jsx)(T, {
                  ref: t,
                  searchContext: n,
                  navId: i,
                  onSelectedIndexChanged: a,
                  resultsState: o,
                  totalResults: s,
              });
    });
