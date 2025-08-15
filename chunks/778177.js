n.d(t, { ZP: () => J }), n(781311), n(35282), n(388685);
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(392711),
    o = n.n(i),
    c = n(913527),
    u = n.n(c),
    d = n(608787),
    h = n(442837),
    p = n(704215),
    f = n(481060),
    _ = n(542051),
    g = n(349033),
    S = n(44315),
    m = n(243778),
    y = n(592125),
    b = n(271383),
    E = n(699516),
    x = n(944486),
    C = n(246946),
    O = n(594174),
    v = n(585483),
    R = n(63063),
    j = n(51144),
    P = n(748610),
    T = n(738018),
    I = n(607802),
    A = n(532428),
    N = n(611004),
    Z = n(579612),
    w = n(817190),
    k = n(315322),
    M = n(723642),
    D = n(981631),
    L = n(388032),
    F = n(495824);
function H(e, t, n) {
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
function U(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}
let Q = u()("2015-05-15").local(),
    G = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800,
    }),
    q = (e, t, n) => {
        var s, l, a;
        let { user: i, text: o } = n;
        if (null == i) return (0, r.jsx)("strong", { children: o });
        let c = O.default.getUser(i.id),
            u = (0, I.AH)(e),
            d = (0, I.s5)(e),
            h = y.Z.getChannel(u),
            p = (null == h ? void 0 : h.isPrivate()) ? E.Z.getNickname(i.id) : null,
            f = null != (l = null != (s = b.ZP.getNick(d, i.id)) ? s : p) ? l : j.ZP.getName(i),
            _ =
                null != (a = null == c ? void 0 : c.getAvatarURL(d, 20))
                    ? a
                    : i.getAvatarURL(null == h ? void 0 : h.guild_id, 20);
        return [
            (0, r.jsx)(
                "img",
                {
                    alt: "",
                    className: F.displayAvatar,
                    src: _,
                },
                "avatar-".concat(t, "-").concat(i.id),
            ),
            (0, r.jsx)(
                "span",
                {
                    className: F.displayedNick,
                    children: f,
                },
                "display-nick-".concat(t, "-").concat(i.id),
            ),
            (0, r.jsx)(
                "span",
                {
                    className: F.displayUsername,
                    children: j.ZP.getUserTag(i, {
                        identifiable: C.Z.enabled && C.Z.hidePersonalInformation ? "never" : "always",
                    }),
                },
                "display-username-".concat(t, "-").concat(i.id),
            ),
        ];
    },
    z = (e, t, n) => {
        let { channel: s, text: l } = n;
        return null == s
            ? (0, r.jsx)("strong", { children: l })
            : (0, r.jsxs)("div", {
                  className: F.resultChannel,
                  children: [
                      (0, r.jsx)(Z.MC, { channel: s }),
                      (0, r.jsx)(Z.GQ, { channel: s }),
                      (0, r.jsx)(Z.P, { channel: s }),
                  ],
              });
    },
    K = (e) => {
        let t,
            n,
            {
                id: s,
                searchContext: l,
                result: i,
                group: o,
                className: c,
                role: u,
                tabIndex: d,
                "aria-selected": h,
                onSelect: p,
                onFocus: _,
                showFilter: g,
                renderResult: S,
            } = e;
        if (g) {
            var m, y;
            t = (0, r.jsx)("span", {
                className: F.filter,
                children: null != (y = null == (m = A.ZP[o]) ? void 0 : m.key) ? y : "addme:",
            });
        }
        return (
            (n = null != S ? S(l, o, i) : (0, r.jsx)("strong", { children: i.text })),
            (0, r.jsxs)(f.P3F, {
                tag: "li",
                className: a()(F.option, c),
                onClick: p,
                onFocus: _,
                id: s,
                role: u,
                tabIndex: d,
                "aria-selected": h,
                children: [
                    (0, r.jsxs)("div", {
                        className: F.content,
                        children: [t, n],
                    }),
                    (0, r.jsx)(f.qJs, {
                        size: "sm",
                        color: "currentColor",
                        className: F.plusIcon,
                    }),
                ],
            })
        );
    },
    Y = (e) =>
        (0, r.jsx)(
            K,
            B(U({}, e), {
                className: F.user,
                renderResult: q,
            }),
        ),
    X = {
        [D.dCx.FILTER_FROM]: {
            titleText: () => L.intl.string(L.t.catERE),
            component: Y,
        },
        [D.dCx.FILTER_MENTIONS]: {
            titleText: () => L.intl.string(L.t.l3K4Bw),
            component: Y,
        },
        [D.dCx.FILTER_HAS]: { titleText: () => L.intl.string(L.t.IC7gHB) },
        [D.dCx.FILTER_FILE_TYPE]: { titleText: () => L.intl.string(L.t.SXIfV1) },
        [D.dCx.FILTER_IN]: {
            titleText: () => L.intl.string(L.t.vHyCgo),
            component: (e) => (0, r.jsx)(K, B(U({}, e), { renderResult: z })),
        },
        [D.rtL.DATES]: { titleText: () => L.intl.string(L.t.UiL5e3) },
        [D.rtL.HISTORY]: {
            titleText: () => L.intl.string(L.t.tSZd5e),
            groupTip(e) {
                let { searchContext: t } = e;
                return (0, r.jsx)(f.ua7, {
                    text: L.intl.string(L.t.dwAvX1),
                    position: "left",
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: s } = e;
                        return (0, r.jsx)(f.P3F, {
                            onClick: () => P.Z.clearWebSearchHistory(t),
                            onMouseEnter: n,
                            onMouseLeave: s,
                            className: F.searchClearHistory,
                            title: L.intl.string(L.t.dwAvX1),
                            "aria-label": L.intl.string(L.t.dwAvX1),
                            children: (0, r.jsx)(f.XHJ, {
                                size: "md",
                                color: "currentColor",
                            }),
                        });
                    },
                });
            },
            component: function (e) {
                var {
                        onSelect: t,
                        onFocus: n,
                        result: l,
                        showFilter: i,
                        searchContext: o,
                        renderResult: c,
                        group: u,
                    } = e,
                    d = W(e, ["onSelect", "onFocus", "result", "showFilter", "searchContext", "renderResult", "group"]);
                let h = "",
                    p = s
                        .useMemo(() => {
                            var e;
                            return (
                                (e = l.text),
                                (0, I.kG)(e).map((e, t, n) =>
                                    (0, I.Fr)(e, n[t + 1]) ? e : new g.WU(e.getFullMatch(), g.Xe),
                                )
                            );
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ("" === t.trim()) return null;
                            let n = D.TNx.test(e.type),
                                s = D.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    "span",
                                    {
                                        className: a()(F.searchHistoryRow, {
                                            [F.filter]: n,
                                            [F.answer]: s,
                                            [F.nonText]: !n && !s,
                                        }),
                                        children: t,
                                    },
                                    e.type + t,
                                )
                            );
                        });
                return (0, r.jsxs)(
                    f.P3F,
                    B(
                        U(
                            {
                                className: F.option,
                                onClick: t,
                                onFocus: n,
                            },
                            d,
                        ),
                        {
                            "aria-label": L.intl.formatToPlainString(L.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, r.jsx)(f.qJs, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: F.plusIcon,
                                }),
                            ],
                        },
                    ),
                );
            },
        },
        [D.rtL.SEARCH_OPTIONS]: {
            titleText: () => L.intl.string(L.t["8Zkyw8"]),
            groupTip: () =>
                (0, r.jsx)(f.ua7, {
                    text: L.intl.string(L.t.hvVgAQ),
                    position: "left",
                    children: (e) =>
                        (0, r.jsx)(
                            "div",
                            B(U({ className: F.searchLearnMore }, e), {
                                children: (0, r.jsx)(f.eee, {
                                    href: R.Z.getArticleURL(D.BhN.USING_SEARCH),
                                    title: L.intl.string(L.t.hvVgAQ),
                                    children: (0, r.jsx)(f.idN, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                }),
                            }),
                        ),
                }),
            component: function (e) {
                var t,
                    { result: n, onSelect: s, onFocus: l, showFilter: i, searchContext: o } = e,
                    c = W(e, ["result", "onSelect", "onFocus", "showFilter", "searchContext"]);
                let u = n.token === D.dCx.FILTER_AUTHOR_TYPE ? [p.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE] : [],
                    [d, h] = (0, m.US)(u),
                    _ = d === p.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE,
                    g = (0, S.Sl)(D.Ilk.BRAND_500).hex,
                    y = (0, I.Ko)(null != (t = n.token) ? t : "");
                return (0, r.jsxs)(
                    f.P3F,
                    B(
                        U(
                            {
                                className: a()(F.option, F.searchOption),
                                onClick: s,
                                onFocus: l,
                            },
                            c,
                        ),
                        {
                            children: [
                                (0, r.jsx)("span", {
                                    className: F.filter,
                                    children: n.text,
                                }),
                                (0, r.jsx)("span", {
                                    className: a()({ [F.answer]: y }),
                                    children: y,
                                }),
                                _
                                    ? (0, r.jsx)(f.IGR, {
                                          text: L.intl.string(L.t.y2b7CA),
                                          color: g,
                                      })
                                    : (0, r.jsx)(f.qJs, {
                                          size: "sm",
                                          color: "currentColor",
                                          className: F.plusIcon,
                                      }),
                            ],
                        },
                    ),
                );
            },
        },
    };
class V extends s.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: s } = n,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && r > 0
            ? this.setSelectedIndex(0)
            : s.type === D.Sap.FILTER_ALL && l.mode.type !== s.type
              ? this.setSelectedIndex(-1)
              : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { className: t, navId: n, resultsState: s, totalResults: l, searchContext: a, channel: i } = this.props;
        return (0, r.jsx)(_.Z, {
            className: t,
            numResults: l,
            query: s.query,
            navId: n,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () => this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites: a.type === D.aib.FAVORITES && (0, I.X$)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: i,
            onSelectSearchInSelectedChannel: () =>
                this.handleSearchInChannel({ searchAutocompleteSelectAction: M.ZW.CLICK }),
            showDMQueryText: a.type === D.aib.DMS && (0, I.R6)(a),
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            H(this, "state", {
                dateHint: (0, A.Pr)(),
                selectedIndex: -1,
            }),
            H(this, "handleDateChange", (e) => {
                let t = (0, I.Tm)(this.props.searchContext);
                (0, k.bh)({
                    searchContext: this.props.searchContext,
                    searchQuery: w.Z.getSearchResultsQuery(t),
                    searchQueryString: N.Z.getSearchInputText(this.props.searchContext),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: D.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: M.ZW.CLICK,
                }),
                    this.setSearchQuery(e.format(D.b2L) + " ", !0);
            }),
            H(this, "keepCurrentOptionSelected", (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: i } = e;
                if (l.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || i.autocompletes.length !== a.length)) {
                    let e = (0, I.i3)(i.autocompletes, i.mode)[t.selectedIndex],
                        n = (0, I.i3)(a, l).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
                }
            }),
            H(this, "focusNextOption", () => {
                this.focusOtherOption(1);
            }),
            H(this, "focusPreviousOption", () => {
                this.focusOtherOption(-1);
            }),
            H(this, "focusOtherOption", (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                (0, I.Fz)(n.mode.filter) || this.focusOption(t + e);
            }),
            H(this, "focusOption", (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                t < -1 || (!r && !s && t < 0)
                    ? (t = (0, I.BU)(n) - 1)
                    : (r || s) && t >= (0, I.BU)(n)
                      ? (t = -1)
                      : !r && t >= (0, I.BU)(n) && (t = 0),
                    this.setSelectedIndex(t);
            }),
            H(this, "selectOption", (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                if ((null == r && (r = this.state.selectedIndex), r < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, I.Fz)(l.filter)) return;
                let a = (0, I.i3)(s, l);
                if (r >= a.length) return !1;
                let i = a[r],
                    c = a.length;
                if (i.group === D.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === D.rtL.HISTORY);
                    if (null != e) {
                        let t = r - (c - e.results.length);
                        (0, k.$z)({
                            searchContext: this.props.searchContext,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length,
                        });
                    }
                } else {
                    var u, d;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: s, group: l } = i.result,
                        a = (0, A._m)(i.group) ? i.group : null != l && (0, A._m)(l) ? l : null,
                        o = null != (u = null != s ? s : t) ? u : a,
                        h = i.result.channel,
                        p = o === D.dCx.FILTER_IN && null != h && h.id === x.Z.getChannelId(),
                        f = (0, I.Tm)(this.props.searchContext);
                    (0, k.bh)({
                        searchContext: this.props.searchContext,
                        searchQuery: w.Z.getSearchResultsQuery(f),
                        searchQueryString: N.Z.getSearchInputText(this.props.searchContext),
                        searchTokenType: o,
                        searchAutocompleteGroup: null != (d = i.group) ? d : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: c,
                        isSearchFilterPrefix: e === D.Sap.EMPTY,
                        isSearchFilterAnswer: e === D.Sap.FILTER,
                        isSearchFilterComplete: e === D.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: n,
                    });
                }
                let h = (function (e) {
                    let t = !0,
                        n = e.trim();
                    return (
                        o()(A.ZP).forOwn((e) => {
                            "" !== e.key && null != e.key && n === e.key && (t = !1);
                        }),
                        t
                    );
                })(i.resultText);
                return this.setSearchQuery(i.resultText, h), !0;
            }),
            H(this, "setSearchQuery", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != r.token
                    ? (l = r.token.start)
                    : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                v.S.dispatch(D.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n,
                    replace: !1,
                }),
                    t.setSelectedIndex(-1);
            }),
            H(this, "shouldShowSearchQuery", () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== D.Sap.FILTER && e.type !== D.Sap.EMPTY && !(0, I.Fz)(e.filter);
            }),
            H(this, "shouldShowSearchInSelectedChannel", () => {
                let {
                    searchContext: e,
                    resultsState: { mode: t },
                } = this.props;
                return e.type === D.aib.DMS && (0, I.R6)(e) && t.type === D.Sap.EMPTY && !(0, I.Fz)(t.filter);
            }),
            H(this, "handleSearchInChannel", (e) => {
                var t;
                let { searchAutocompleteSelectAction: n } = e,
                    { channel: r, searchContext: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == r) return !1;
                (0, k.tA)({
                    searchContext: s,
                    searchAutocompleteSelectAction: n,
                });
                let l = D.dCx.FILTER_IN,
                    a = A.ZP[l],
                    i = (0, I.X3)(r),
                    o = "".concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), " ").concat(i);
                return this.setSearchQuery(o, !0), !0;
            }),
            H(this, "renderDatePicker", () =>
                (0, r.jsxs)("div", {
                    className: F.datePicker,
                    children: [
                        (0, r.jsx)(G, {
                            onSelect: this.handleDateChange,
                            maxDate: u()().local(),
                            minDate: Q,
                        }),
                        (0, r.jsxs)("div", {
                            className: F.datePickerHint,
                            children: [
                                (0, r.jsxs)("span", {
                                    className: F.hint,
                                    children: [L.intl.string(L.t.fmtCi4), "\xA0"],
                                }),
                                (0, r.jsx)(f.P3F, {
                                    tag: "span",
                                    className: F.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint,
                                }),
                            ],
                        }),
                    ],
                }),
            ),
            H(this, "handleHintClick", () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            H(this, "performSearch", (e) => {
                v.S.dispatch(D.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            H(this, "renderAutocompletes", () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchContext: n } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, I.Fz)(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var i, o, c;
                    let u, d;
                    if (null == s || 0 === s.results.length) return null;
                    let h = null != (i = X[s.group]) ? i : {};
                    null != h.titleText &&
                        ((d = "".concat(s.group, "-header")),
                        (u = (0, r.jsx)("div", {
                            id: d,
                            className: F.header,
                            children: h.titleText(),
                        })));
                    let p = null != (o = h.groupTip) ? o : null,
                        f = null != p ? (0, r.jsx)(p, { searchContext: n }) : null,
                        g = null != (c = h.component) ? c : K,
                        S = l.type === D.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-labelledby": d,
                            className: F.resultsGroup,
                            children: [
                                u,
                                f,
                                s.results.map((l) => {
                                    var i, o;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        g,
                                        U(
                                            {
                                                searchContext: n,
                                                group: null != (i = l.group) ? i : s.group,
                                                result: l,
                                                showFilter: S,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: M.ZW.CLICK,
                                                }),
                                                onFocus: this.focusOption.bind(null, a),
                                            },
                                            (0, _.M)(t, a, c),
                                        ),
                                        ""
                                            .concat(s.group, "-")
                                            .concat(l.text, "-")
                                            .concat(null != (o = l.key) ? o : ""),
                                    );
                                }),
                            ],
                        },
                        s.group,
                    );
                });
            });
    }
}
let J = s.forwardRef((e, t) => {
    let { className: n, searchContext: s, navId: l, onSelectedIndexChanged: a } = e,
        i = (0, h.e7)([x.Z, y.Z], () => {
            let e = x.Z.getChannelId();
            return y.Z.getChannel(e);
        }),
        [o, c] = (0, h.Wu)([T.Z], () => {
            let e = T.Z.getState(s),
                t = (0, I.BU)(e.autocompletes);
            return [e, t];
        });
    return (0, r.jsx)(V, {
        ref: t,
        className: n,
        navId: l,
        onSelectedIndexChanged: a,
        searchContext: s,
        resultsState: o,
        totalResults: c,
        channel: i,
    });
});
