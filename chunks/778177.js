n.d(t, { ZP: () => ei }), n(781311), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(608787),
    f = n(442837),
    _ = n(704215),
    p = n(481060),
    h = n(542051),
    m = n(349033),
    g = n(44315),
    E = n(243778),
    b = n(592125),
    y = n(271383),
    O = n(699516),
    v = n(944486),
    I = n(246946),
    T = n(594174),
    S = n(585483),
    A = n(63063),
    C = n(51144),
    N = n(748610),
    R = n(738018),
    P = n(607802),
    w = n(532428),
    D = n(611004),
    x = n(579612),
    L = n(817190),
    j = n(315322),
    M = n(723642),
    k = n(981631),
    U = n(388032),
    G = n(495824);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let W = u()("2015-05-15").local(),
    K = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800,
    });
function z(e) {
    let t = !0,
        n = e.trim();
    return (
        l()(w.ZP).forOwn((e) => {
            "" !== e.key && null != e.key && n === e.key && (t = !1);
        }),
        t
    );
}
let q = (e, t, n) => {
        var i, a, o;
        let { user: s, text: l } = n;
        if (null == s) return (0, r.jsx)("strong", { children: l });
        let c = T.default.getUser(s.id),
            u = (0, P.AH)(e),
            d = (0, P.s5)(e),
            f = b.Z.getChannel(u),
            _ = (null == f ? void 0 : f.isPrivate()) ? O.Z.getNickname(s.id) : null,
            p = null != (a = null != (i = y.ZP.getNick(d, s.id)) ? i : _) ? a : C.ZP.getName(s),
            h =
                null != (o = null == c ? void 0 : c.getAvatarURL(d, 20))
                    ? o
                    : s.getAvatarURL(null == f ? void 0 : f.guild_id, 20);
        return [
            (0, r.jsx)(
                "img",
                {
                    alt: "",
                    className: G.displayAvatar,
                    src: h,
                },
                "avatar-".concat(t, "-").concat(s.id),
            ),
            (0, r.jsx)(
                "span",
                {
                    className: G.displayedNick,
                    children: p,
                },
                "display-nick-".concat(t, "-").concat(s.id),
            ),
            (0, r.jsx)(
                "span",
                {
                    className: G.displayUsername,
                    children: C.ZP.getUserTag(s, {
                        identifiable: I.Z.enabled && I.Z.hidePersonalInformation ? "never" : "always",
                    }),
                },
                "display-username-".concat(t, "-").concat(s.id),
            ),
        ];
    },
    X = (e, t, n) => {
        let { channel: i, text: a } = n;
        return null == i
            ? (0, r.jsx)("strong", { children: a })
            : (0, r.jsxs)("div", {
                  className: G.resultChannel,
                  children: [
                      (0, r.jsx)(x.MC, { channel: i }),
                      (0, r.jsx)(x.GQ, { channel: i }),
                      (0, r.jsx)(x.P, { channel: i }),
                  ],
              });
    },
    Q = (e) => {
        let t,
            n,
            {
                id: i,
                searchContext: a,
                result: s,
                group: l,
                className: c,
                role: u,
                tabIndex: d,
                "aria-selected": f,
                onSelect: _,
                onFocus: h,
                showFilter: m,
                renderResult: g,
            } = e;
        if (m) {
            var E, b;
            t = (0, r.jsx)("span", {
                className: G.filter,
                children: null != (b = null == (E = w.ZP[l]) ? void 0 : E.key) ? b : "addme:",
            });
        }
        return (
            (n = null != g ? g(a, l, s) : (0, r.jsx)("strong", { children: s.text })),
            (0, r.jsxs)(p.P3F, {
                tag: "li",
                className: o()(G.option, c),
                onClick: _,
                onFocus: h,
                id: i,
                role: u,
                tabIndex: d,
                "aria-selected": f,
                children: [
                    (0, r.jsxs)("div", {
                        className: G.content,
                        children: [t, n],
                    }),
                    (0, r.jsx)(p.qJs, {
                        size: "sm",
                        color: "currentColor",
                        className: G.plusIcon,
                    }),
                ],
            })
        );
    },
    J = (e) =>
        (0, r.jsx)(
            Q,
            F(Z({}, e), {
                className: G.user,
                renderResult: q,
            }),
        ),
    $ = (e) => (0, r.jsx)(Q, F(Z({}, e), { renderResult: X }));
function ee(e) {
    return (0, P.kG)(e).map((e, t, n) => ((0, P.Fr)(e, n[t + 1]) ? e : new m.WU(e.getFullMatch(), m.Xe)));
}
function et(e) {
    var { onSelect: t, onFocus: n, result: a, showFilter: s, searchContext: l, renderResult: c, group: u } = e,
        d = H(e, ["onSelect", "onFocus", "result", "showFilter", "searchContext", "renderResult", "group"]);
    let f = "",
        _ = i
            .useMemo(() => ee(a.text), [a.text])
            .map((e) => {
                let t = e.getFullMatch();
                if ("" === t.trim()) return null;
                let n = k.TNx.test(e.type),
                    i = k.KA4.test(e.type),
                    a = !n && !i;
                return (
                    (f += t),
                    (0, r.jsx)(
                        "span",
                        {
                            className: o()(G.searchHistoryRow, {
                                [G.filter]: n,
                                [G.answer]: i,
                                [G.nonText]: a,
                            }),
                            children: t,
                        },
                        e.type + t,
                    )
                );
            });
    return (0, r.jsxs)(
        p.P3F,
        F(
            Z(
                {
                    className: G.option,
                    onClick: t,
                    onFocus: n,
                },
                d,
            ),
            {
                "aria-label": U.intl.formatToPlainString(U.t.WoiGra, { suggestion: f }),
                children: [
                    _,
                    (0, r.jsx)(p.qJs, {
                        size: "sm",
                        color: "currentColor",
                        className: G.plusIcon,
                    }),
                ],
            },
        ),
    );
}
let en = {
    [k.dCx.FILTER_FROM]: {
        titleText: () => U.intl.string(U.t.catERE),
        component: J,
    },
    [k.dCx.FILTER_MENTIONS]: {
        titleText: () => U.intl.string(U.t.l3K4Bw),
        component: J,
    },
    [k.dCx.FILTER_HAS]: { titleText: () => U.intl.string(U.t.IC7gHB) },
    [k.dCx.FILTER_FILE_TYPE]: { titleText: () => U.intl.string(U.t.SXIfV1) },
    [k.dCx.FILTER_IN]: {
        titleText: () => U.intl.string(U.t.vHyCgo),
        component: $,
    },
    [k.rtL.DATES]: { titleText: () => U.intl.string(U.t.UiL5e3) },
    [k.rtL.HISTORY]: {
        titleText: () => U.intl.string(U.t.tSZd5e),
        groupTip(e) {
            let { searchContext: t } = e;
            return (0, r.jsx)(p.ua7, {
                text: U.intl.string(U.t.dwAvX1),
                position: "left",
                children: (e) => {
                    let { onMouseEnter: n, onMouseLeave: i } = e;
                    return (0, r.jsx)(p.P3F, {
                        onClick: () => N.Z.clearWebSearchHistory(t),
                        onMouseEnter: n,
                        onMouseLeave: i,
                        className: G.searchClearHistory,
                        title: U.intl.string(U.t.dwAvX1),
                        "aria-label": U.intl.string(U.t.dwAvX1),
                        children: (0, r.jsx)(p.XHJ, {
                            size: "md",
                            color: "currentColor",
                        }),
                    });
                },
            });
        },
        component: et,
    },
    [k.rtL.SEARCH_OPTIONS]: {
        titleText: () => U.intl.string(U.t["8Zkyw8"]),
        groupTip: () =>
            (0, r.jsx)(p.ua7, {
                text: U.intl.string(U.t.hvVgAQ),
                position: "left",
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        F(Z({ className: G.searchLearnMore }, e), {
                            children: (0, r.jsx)(p.eee, {
                                href: A.Z.getArticleURL(k.BhN.USING_SEARCH),
                                title: U.intl.string(U.t.hvVgAQ),
                                children: (0, r.jsx)(p.idN, {
                                    size: "md",
                                    color: "currentColor",
                                }),
                            }),
                        }),
                    ),
            }),
        component: function (e) {
            var t,
                { result: n, onSelect: i, onFocus: a, showFilter: s, searchContext: l } = e,
                c = H(e, ["result", "onSelect", "onFocus", "showFilter", "searchContext"]);
            let u = n.token === k.dCx.FILTER_AUTHOR_TYPE ? [_.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE] : [],
                [d, f] = (0, E.US)(u),
                h = d === _.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE,
                m = (0, g.Sl)(k.Ilk.BRAND_500).hex,
                b = (0, P.Ko)(null != (t = n.token) ? t : "");
            return (0, r.jsxs)(
                p.P3F,
                F(
                    Z(
                        {
                            className: o()(G.option, G.searchOption),
                            onClick: i,
                            onFocus: a,
                        },
                        c,
                    ),
                    {
                        children: [
                            (0, r.jsx)("span", {
                                className: G.filter,
                                children: n.text,
                            }),
                            (0, r.jsx)("span", {
                                className: o()({ [G.answer]: b }),
                                children: b,
                            }),
                            h
                                ? (0, r.jsx)(p.IGR, {
                                      text: U.intl.string(U.t.y2b7CA),
                                      color: m,
                                  })
                                : (0, r.jsx)(p.qJs, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: G.plusIcon,
                                  }),
                        ],
                    },
                ),
            );
        },
    },
};
class er extends i.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: a } = e;
        null != i.filter && null == a.mode.filter && r > 0
            ? this.setSelectedIndex(0)
            : i.type === k.Sap.FILTER_ALL && a.mode.type !== i.type
              ? this.setSelectedIndex(-1)
              : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { className: t, navId: n, resultsState: i, totalResults: a, searchContext: o, channel: s } = this.props;
        return (0, r.jsx)(h.Z, {
            className: t,
            numResults: a,
            query: i.query,
            navId: n,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () => this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites: o.type === k.aib.FAVORITES && (0, P.X$)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: s,
            onSelectSearchInSelectedChannel: () =>
                this.handleSearchInChannel({ searchAutocompleteSelectAction: M.ZW.CLICK }),
            showDMQueryText: o.type === k.aib.DMS && (0, P.R6)(o),
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            B(this, "state", {
                dateHint: (0, w.Pr)(),
                selectedIndex: -1,
            }),
            B(this, "handleDateChange", (e) => {
                let t = (0, P.Tm)(this.props.searchContext);
                (0, j.bh)({
                    searchContext: this.props.searchContext,
                    searchQuery: L.Z.getSearchResultsQuery(t),
                    searchQueryString: D.Z.getSearchInputText(this.props.searchContext),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: k.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: M.ZW.CLICK,
                }),
                    this.setSearchQuery(e.format(k.b2L) + " ", !0);
            }),
            B(this, "keepCurrentOptionSelected", (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: i } = this.props,
                    { mode: a, autocompletes: o } = r,
                    { resultsState: s } = e;
                if (a.type !== s.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || s.autocompletes.length !== o.length)) {
                    let e = (0, P.i3)(s.autocompletes, s.mode)[t.selectedIndex],
                        n = (0, P.i3)(o, a).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1);
                }
            }),
            B(this, "focusNextOption", () => {
                this.focusOtherOption(1);
            }),
            B(this, "focusPreviousOption", () => {
                this.focusOtherOption(-1);
            }),
            B(this, "focusOtherOption", (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                (0, P.Fz)(n.mode.filter) || this.focusOption(t + e);
            }),
            B(this, "focusOption", (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    i = this.shouldShowSearchInSelectedChannel();
                t < -1 || (!r && !i && t < 0)
                    ? (t = (0, P.BU)(n) - 1)
                    : (r || i) && t >= (0, P.BU)(n)
                      ? (t = -1)
                      : !r && t >= (0, P.BU)(n) && (t = 0),
                    this.setSelectedIndex(t);
            }),
            B(this, "selectOption", (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                if ((null == r && (r = this.state.selectedIndex), r < 0)) return !1;
                let { autocompletes: i, mode: a } = this.props.resultsState;
                if ((0, P.Fz)(a.filter)) return;
                let o = (0, P.i3)(i, a);
                if (r >= o.length) return !1;
                let s = o[r],
                    l = o.length;
                if (s.group === k.rtL.HISTORY) {
                    let e = i.find((e) => (null == e ? void 0 : e.group) === k.rtL.HISTORY);
                    if (null != e) {
                        let t = r - (l - e.results.length);
                        (0, j.$z)({
                            searchContext: this.props.searchContext,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length,
                        });
                    }
                } else {
                    var c, u;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: i, group: a } = s.result,
                        o = (0, w._m)(s.group) ? s.group : null != a && (0, w._m)(a) ? a : null,
                        d = null != (c = null != i ? i : t) ? c : o,
                        f = s.result.channel,
                        _ = d === k.dCx.FILTER_IN && null != f && f.id === v.Z.getChannelId(),
                        p = (0, P.Tm)(this.props.searchContext);
                    (0, j.bh)({
                        searchContext: this.props.searchContext,
                        searchQuery: L.Z.getSearchResultsQuery(p),
                        searchQueryString: D.Z.getSearchInputText(this.props.searchContext),
                        searchTokenType: d,
                        searchAutocompleteGroup: null != (u = s.group) ? u : a,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: l,
                        isSearchFilterPrefix: e === k.Sap.EMPTY,
                        isSearchFilterAnswer: e === k.Sap.FILTER,
                        isSearchFilterComplete: e === k.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: _,
                        searchAutocompleteSelectAction: n,
                    });
                }
                let d = z(s.resultText);
                return this.setSearchQuery(s.resultText, d), !0;
            }),
            B(this, "setSearchQuery", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: i } = t.props.resultsState,
                    a = 0;
                null != r.token
                    ? (a = r.token.start)
                    : (null == i ? void 0 : i.currentToken) != null && (a = i.currentToken.end);
                let o = null != r.token ? r.token.end : a;
                S.S.dispatch(k.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: a,
                    focus: o,
                    performSearch: n,
                    replace: !1,
                }),
                    t.setSelectedIndex(-1);
            }),
            B(this, "shouldShowSearchQuery", () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== k.Sap.FILTER && e.type !== k.Sap.EMPTY && !(0, P.Fz)(e.filter);
            }),
            B(this, "shouldShowSearchInSelectedChannel", () => {
                let {
                    searchContext: e,
                    resultsState: { mode: t },
                } = this.props;
                return e.type === k.aib.DMS && (0, P.R6)(e) && t.type === k.Sap.EMPTY && !(0, P.Fz)(t.filter);
            }),
            B(this, "handleSearchInChannel", (e) => {
                var t;
                let { searchAutocompleteSelectAction: n } = e,
                    { channel: r, searchContext: i } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == r) return !1;
                (0, j.tA)({
                    searchContext: i,
                    searchAutocompleteSelectAction: n,
                });
                let a = k.dCx.FILTER_IN,
                    o = w.ZP[a],
                    s = (0, P.X3)(r),
                    l = "".concat(null != (t = null == o ? void 0 : o.key) ? t : a.toString(), " ").concat(s);
                return this.setSearchQuery(l, !0), !0;
            }),
            B(this, "renderDatePicker", () =>
                (0, r.jsxs)("div", {
                    className: G.datePicker,
                    children: [
                        (0, r.jsx)(K, {
                            onSelect: this.handleDateChange,
                            maxDate: u()().local(),
                            minDate: W,
                        }),
                        (0, r.jsxs)("div", {
                            className: G.datePickerHint,
                            children: [
                                (0, r.jsxs)("span", {
                                    className: G.hint,
                                    children: [U.intl.string(U.t.fmtCi4), "\xA0"],
                                }),
                                (0, r.jsx)(p.P3F, {
                                    tag: "span",
                                    className: G.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint,
                                }),
                            ],
                        }),
                    ],
                }),
            ),
            B(this, "handleHintClick", () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            B(this, "performSearch", (e) => {
                S.S.dispatch(k.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            B(this, "renderAutocompletes", () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchContext: n } = this.props,
                    { autocompletes: i, mode: a } = this.props.resultsState;
                if ((0, P.Fz)(a.filter)) return this.renderDatePicker();
                let o = -1;
                return i.map((i) => {
                    var s, l, c;
                    let u, d;
                    if (null == i || 0 === i.results.length) return null;
                    let f = null != (s = en[i.group]) ? s : {};
                    null != f.titleText &&
                        ((d = "".concat(i.group, "-header")),
                        (u = (0, r.jsx)("div", {
                            id: d,
                            className: G.header,
                            children: f.titleText(),
                        })));
                    let _ = null != (l = f.groupTip) ? l : null,
                        p = null != _ ? (0, r.jsx)(_, { searchContext: n }) : null,
                        m = null != (c = f.component) ? c : Q,
                        g = a.type === k.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-labelledby": d,
                            className: G.resultsGroup,
                            children: [
                                u,
                                p,
                                i.results.map((a) => {
                                    var s, l;
                                    if (null == a || null == i) return null;
                                    let c = e === (o += 1);
                                    return (0, r.jsx)(
                                        m,
                                        Z(
                                            {
                                                searchContext: n,
                                                group: null != (s = a.group) ? s : i.group,
                                                result: a,
                                                showFilter: g,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: o,
                                                    searchAutocompleteSelectAction: M.ZW.CLICK,
                                                }),
                                                onFocus: this.focusOption.bind(null, o),
                                            },
                                            (0, h.M)(t, o, c),
                                        ),
                                        ""
                                            .concat(i.group, "-")
                                            .concat(a.text, "-")
                                            .concat(null != (l = a.key) ? l : ""),
                                    );
                                }),
                            ],
                        },
                        i.group,
                    );
                });
            });
    }
}
let ei = i.forwardRef((e, t) => {
    let { className: n, searchContext: i, navId: a, onSelectedIndexChanged: o } = e,
        s = (0, f.e7)([v.Z, b.Z], () => {
            let e = v.Z.getChannelId();
            return b.Z.getChannel(e);
        }),
        [l, c] = (0, f.Wu)([R.Z], () => {
            let e = R.Z.getState(i),
                t = (0, P.BU)(e.autocompletes);
            return [e, t];
        });
    return (0, r.jsx)(er, {
        ref: t,
        className: n,
        navId: a,
        onSelectedIndexChanged: o,
        searchContext: i,
        resultsState: l,
        totalResults: c,
        channel: s,
    });
});
