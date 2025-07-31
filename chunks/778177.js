(n.d(t, { ZP: () => J }), n(781311), n(35282), n(388685));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    i = n.n(o),
    c = n(913527),
    u = n.n(c),
    h = n(608787),
    d = n(442837),
    p = n(481060),
    f = n(542051),
    g = n(349033),
    m = n(592125),
    y = n(271383),
    x = n(699516),
    b = n(944486),
    S = n(246946),
    v = n(594174),
    j = n(585483),
    C = n(63063),
    O = n(51144),
    _ = n(748610),
    P = n(738018),
    R = n(518944),
    E = n(607802),
    I = n(532428),
    T = n(14091),
    N = n(579612),
    k = n(315322),
    w = n(723642),
    Z = n(981631),
    A = n(388032),
    D = n(290082);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
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
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
    }
    return s;
}
let H = u()('2015-05-15').local(),
    Q = (0, h.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    U = (e, t, n) => {
        var s, l, a;
        let { user: o, text: i } = n;
        if (null == o) return (0, r.jsx)('strong', { children: i });
        let c = v.default.getUser(o.id),
            u = (0, E.AH)(e),
            h = (0, E.s5)(e),
            d = m.Z.getChannel(u),
            p = (null == d ? void 0 : d.isPrivate()) ? x.Z.getNickname(o.id) : null,
            f = null != (l = null != (s = y.ZP.getNick(h, o.id)) ? s : p) ? l : O.ZP.getName(o),
            g = null != (a = null == c ? void 0 : c.getAvatarURL(h, 20)) ? a : o.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: D.displayAvatar,
                    src: g
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: D.displayedNick,
                    children: f
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: D.displayUsername,
                    children: O.ZP.getUserTag(o, { identifiable: S.Z.enabled && S.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    W = (e, t, n) => {
        let { channel: s, text: l } = n;
        return null == s
            ? (0, r.jsx)('strong', { children: l })
            : (0, r.jsxs)('div', {
                  className: D.resultChannel,
                  children: [(0, r.jsx)(N.MC, { channel: s }), (0, r.jsx)(N.GQ, { channel: s }), (0, r.jsx)(N.P, { channel: s })]
              });
    },
    q = (e) => {
        let t,
            n,
            { id: s, searchContext: l, result: o, group: i, className: c, role: u, tabIndex: h, 'aria-selected': d, onSelect: f, onFocus: g, showFilter: m, renderResult: y } = e;
        if (m) {
            var x, b;
            t = (0, r.jsx)('span', {
                className: D.filter,
                children: null != (b = null == (x = I.ZP[i]) ? void 0 : x.key) ? b : 'addme:'
            });
        }
        return (
            (n = null != y ? y(l, i, o) : (0, r.jsx)('strong', { children: o.text })),
            (0, r.jsxs)(p.P3F, {
                tag: 'li',
                className: a()(D.option, c),
                onClick: f,
                onFocus: g,
                id: s,
                role: u,
                tabIndex: h,
                'aria-selected': d,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(p.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: D.plusIcon
                    })
                ]
            })
        );
    },
    G = (e) =>
        (0, r.jsx)(
            q,
            L(F({}, e), {
                className: D.user,
                renderResult: U
            })
        ),
    z = {
        [Z.dCx.FILTER_FROM]: {
            titleText: () => A.intl.string(A.t.catERE),
            component: G
        },
        [Z.dCx.FILTER_MENTIONS]: {
            titleText: () => A.intl.string(A.t.l3K4Bw),
            component: G
        },
        [Z.dCx.FILTER_HAS]: { titleText: () => A.intl.string(A.t.IC7gHB) },
        [Z.dCx.FILTER_FILE_TYPE]: { titleText: () => A.intl.string(A.t.SXIfV1) },
        [Z.dCx.FILTER_IN]: {
            titleText: () => A.intl.string(A.t.vHyCgo),
            component: (e) => (0, r.jsx)(q, L(F({}, e), { renderResult: W }))
        },
        [Z.rtL.DATES]: { titleText: () => A.intl.string(A.t.UiL5e3) },
        [Z.rtL.HISTORY]: {
            titleText: () => A.intl.string(A.t.tSZd5e),
            groupTip(e) {
                let { searchContext: t } = e,
                    n = (0, E.WJ)(t);
                return (0, r.jsx)(p.ua7, {
                    text: A.intl.string(A.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: t, onMouseLeave: s } = e;
                        return (0, r.jsx)(p.P3F, {
                            onClick: () => _.Z.clearWebSearchHistory(n),
                            onMouseEnter: t,
                            onMouseLeave: s,
                            className: D.searchClearHistory,
                            title: A.intl.string(A.t.dwAvX1),
                            'aria-label': A.intl.string(A.t.dwAvX1),
                            children: (0, r.jsx)(p.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: n, result: l, showFilter: o, searchContext: i, renderResult: c, group: u } = e,
                    h = B(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchContext', 'renderResult', 'group']);
                let d = '',
                    f = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), (0, E.kG)(e).map((e, t, n) => ((0, E.Fr)(e, n[t + 1]) ? e : new g.WU(e.getFullMatch(), g.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = Z.TNx.test(e.type),
                                s = Z.KA4.test(e.type);
                            return (
                                (d += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(D.searchHistoryRow, {
                                            [D.filter]: n,
                                            [D.answer]: s,
                                            [D.nonText]: !n && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    p.P3F,
                    L(
                        F(
                            {
                                className: D.option,
                                onClick: t,
                                onFocus: n
                            },
                            h
                        ),
                        {
                            'aria-label': A.intl.formatToPlainString(A.t.WoiGra, { suggestion: d }),
                            children: [
                                f,
                                (0, r.jsx)(p.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: D.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [Z.rtL.SEARCH_OPTIONS]: {
            titleText: () => A.intl.string(A.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(p.ua7, {
                    text: A.intl.string(A.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            L(F({ className: D.searchLearnMore }, e), {
                                children: (0, r.jsx)(p.eee, {
                                    href: C.Z.getArticleURL(Z.BhN.USING_SEARCH),
                                    title: A.intl.string(A.t.hvVgAQ),
                                    children: (0, r.jsx)(p.idN, {
                                        size: 'md',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        )
                }),
            component: function (e) {
                var t,
                    { result: n, onSelect: s, onFocus: l, showFilter: o, searchContext: i } = e,
                    c = B(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchContext']);
                let u = (0, E.Ko)(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    p.P3F,
                    L(
                        F(
                            {
                                className: a()(D.option, D.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)('span', {
                                    className: D.filter,
                                    children: n.text
                                }),
                                (0, r.jsx)('span', {
                                    className: a()({ [D.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(p.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: D.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        }
    };
class K extends s.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: s } = n,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : s.type === Z.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: s, searchContext: l, channel: a } = this.props;
        return (0, r.jsx)(f.Z, {
            numResults: s,
            query: n.query,
            navId: t,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () => this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites: l.type === Z.aib.FAVORITES && (0, E.X$)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({ searchAutocompleteSelectAction: w.ZW.CLICK }),
            showDMQueryText: l.type === Z.aib.DMS && (0, E.R6)(l)
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            M(this, 'state', {
                dateHint: (0, I.Pr)(),
                selectedIndex: -1
            }),
            M(this, 'handleDateChange', (e) => {
                let t = (0, E.WJ)(this.props.searchContext);
                ((0, k.bh)({
                    searchContext: this.props.searchContext,
                    searchQuery: R.Z.getSearchResultsQuery(t),
                    searchQueryString: (0, T.$)(this.props.searchContext),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: Z.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: w.ZW.CLICK
                }),
                    this.setSearchQuery(e.format(Z.b2L) + ' ', !0));
            }),
            M(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
                    let e = (0, E.i3)(o.autocompletes, o.mode)[t.selectedIndex],
                        n = (0, E.i3)(a, l).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
                }
            }),
            M(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            M(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            M(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                (0, E.Fz)(n.mode.filter) || this.focusOption(t + e);
            }),
            M(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!r && !s && t < 0) ? (t = (0, E.BU)(n) - 1) : (r || s) && t >= (0, E.BU)(n) ? (t = -1) : !r && t >= (0, E.BU)(n) && (t = 0), this.setSelectedIndex(t));
            }),
            M(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                if ((null == r && (r = this.state.selectedIndex), r < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, E.Fz)(l.filter)) return;
                let a = (0, E.i3)(s, l);
                if (r >= a.length) return !1;
                let o = a[r],
                    c = a.length;
                if (o.group === Z.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === Z.rtL.HISTORY);
                    if (null != e) {
                        let t = r - (c - e.results.length);
                        (0, k.$z)({
                            searchContext: this.props.searchContext,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var u, h;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: s, group: l } = o.result,
                        a = (0, I._m)(o.group) ? o.group : null != l && (0, I._m)(l) ? l : null,
                        i = null != (u = null != s ? s : t) ? u : a,
                        d = o.result.channel,
                        p = i === Z.dCx.FILTER_IN && null != d && d.id === b.Z.getChannelId(),
                        f = (0, E.WJ)(this.props.searchContext);
                    (0, k.bh)({
                        searchContext: this.props.searchContext,
                        searchQuery: R.Z.getSearchResultsQuery(f),
                        searchQueryString: (0, T.$)(this.props.searchContext),
                        searchTokenType: i,
                        searchAutocompleteGroup: null != (h = o.group) ? h : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: c,
                        isSearchFilterPrefix: e === Z.Sap.EMPTY,
                        isSearchFilterAnswer: e === Z.Sap.FILTER,
                        isSearchFilterComplete: e === Z.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: n
                    });
                }
                let d = (function (e) {
                    let t = !0,
                        n = e.trim();
                    return (
                        i()(I.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && n === e.key && (t = !1);
                        }),
                        t
                    );
                })(o.resultText);
                return (this.setSearchQuery(o.resultText, d), !0);
            }),
            M(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                (j.S.dispatch(Z.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            M(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== Z.Sap.FILTER && e.type !== Z.Sap.EMPTY && !(0, E.Fz)(e.filter);
            }),
            M(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchContext: e,
                    resultsState: { mode: t }
                } = this.props;
                return e.type === Z.aib.DMS && (0, E.R6)(e) && t.type === Z.Sap.EMPTY && !(0, E.Fz)(t.filter);
            }),
            M(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: n } = e,
                    { channel: r, searchContext: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == r) return !1;
                (0, k.tA)({
                    searchContext: s,
                    searchAutocompleteSelectAction: n
                });
                let l = Z.dCx.FILTER_IN,
                    a = I.ZP[l],
                    o = (0, E.X3)(r),
                    i = ''.concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), ' ').concat(o);
                return (this.setSearchQuery(i, !0), !0);
            }),
            M(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: D.datePicker,
                    children: [
                        (0, r.jsx)(Q, {
                            onSelect: this.handleDateChange,
                            maxDate: u()().local(),
                            minDate: H
                        }),
                        (0, r.jsxs)('div', {
                            className: D.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: D.hint,
                                    children: [A.intl.string(A.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(p.P3F, {
                                    tag: 'span',
                                    className: D.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint
                                })
                            ]
                        })
                    ]
                })
            ),
            M(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            M(this, 'performSearch', (e) => {
                j.S.dispatch(Z.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            M(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchContext: n } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, E.Fz)(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var o, i, c;
                    let u, h;
                    if (null == s || 0 === s.results.length) return null;
                    let d = null != (o = z[s.group]) ? o : {};
                    null != d.titleText &&
                        ((h = ''.concat(s.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: h,
                            className: D.header,
                            children: d.titleText()
                        })));
                    let p = null != (i = d.groupTip) ? i : null,
                        g = null != p ? (0, r.jsx)(p, { searchContext: n }) : null,
                        m = null != (c = d.component) ? c : q,
                        y = l.type === Z.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': h,
                            className: D.resultsGroup,
                            children: [
                                u,
                                g,
                                s.results.map((l) => {
                                    var o, i;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        m,
                                        F(
                                            {
                                                searchContext: n,
                                                group: null != (o = l.group) ? o : s.group,
                                                result: l,
                                                showFilter: y,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: w.ZW.CLICK
                                                }),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, f.M)(t, a, c)
                                        ),
                                        ''
                                            .concat(s.group, '-')
                                            .concat(l.text, '-')
                                            .concat(null != (i = l.key) ? i : '')
                                    );
                                })
                            ]
                        },
                        s.group
                    );
                });
            }));
    }
}
let J = s.forwardRef((e, t) => {
    let { searchContext: n, navId: s, onSelectedIndexChanged: l } = e,
        a = (0, d.e7)([b.Z, m.Z], () => {
            let e = b.Z.getChannelId();
            return m.Z.getChannel(e);
        }),
        [o, i] = (0, d.Wu)([P.Z], () => {
            let e = P.Z.getState(n),
                t = (0, E.BU)(e.autocompletes);
            return [e, t];
        });
    return (0, r.jsx)(K, {
        ref: t,
        navId: s,
        onSelectedIndexChanged: l,
        searchContext: n,
        resultsState: o,
        totalResults: i,
        channel: a
    });
});
