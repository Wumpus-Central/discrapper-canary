(r.d(t, { ZP: () => J }), r(781311), r(35282), r(388685));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(392711),
    o = r.n(i),
    c = r(913527),
    u = r.n(c),
    h = r(608787),
    d = r(442837),
    p = r(481060),
    f = r(542051),
    g = r(349033),
    m = r(592125),
    _ = r(271383),
    y = r(699516),
    S = r(944486),
    x = r(246946),
    b = r(594174),
    v = r(585483),
    C = r(63063),
    j = r(51144),
    E = r(748610),
    O = r(738018),
    R = r(518944),
    I = r(607802),
    P = r(532428),
    T = r(14091),
    N = r(579612),
    A = r(315322),
    k = r(723642),
    M = r(981631),
    Z = r(388032),
    w = r(290082);
function D(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                D(e, t, r[t]);
            }));
    }
    return e;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
    }
    return s;
}
let H = u()('2015-05-15').local(),
    B = (0, h.Un)({
        createPromise: () => Promise.resolve().then(r.bind(r, 547800)),
        webpackId: 547800
    }),
    U = (e, t, r) => {
        var s, l, a;
        let { user: i, text: o } = r;
        if (null == i) return (0, n.jsx)('strong', { children: o });
        let c = b.default.getUser(i.id),
            u = (0, I.AH)(e),
            h = (0, I.s5)(e),
            d = m.Z.getChannel(u),
            p = (null == d ? void 0 : d.isPrivate()) ? y.Z.getNickname(i.id) : null,
            f = null != (l = null != (s = _.ZP.getNick(h, i.id)) ? s : p) ? l : j.ZP.getName(i),
            g = null != (a = null == c ? void 0 : c.getAvatarURL(h, 20)) ? a : i.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
        return [
            (0, n.jsx)(
                'img',
                {
                    alt: '',
                    className: w.displayAvatar,
                    src: g
                },
                'avatar-'.concat(t, '-').concat(i.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: w.displayedNick,
                    children: f
                },
                'display-nick-'.concat(t, '-').concat(i.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: w.displayUsername,
                    children: j.ZP.getUserTag(i, { identifiable: x.Z.enabled && x.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(i.id)
            )
        ];
    },
    Q = (e, t, r) => {
        let { channel: s, text: l } = r;
        return null == s
            ? (0, n.jsx)('strong', { children: l })
            : (0, n.jsxs)('div', {
                  className: w.resultChannel,
                  children: [(0, n.jsx)(N.MC, { channel: s }), (0, n.jsx)(N.GQ, { channel: s }), (0, n.jsx)(N.P, { channel: s })]
              });
    },
    q = (e) => {
        let t,
            r,
            { id: s, searchContext: l, result: i, group: o, className: c, role: u, tabIndex: h, 'aria-selected': d, onSelect: f, onFocus: g, showFilter: m, renderResult: _ } = e;
        if (m) {
            var y, S;
            t = (0, n.jsx)('span', {
                className: w.filter,
                children: null != (S = null == (y = P.ZP[o]) ? void 0 : y.key) ? S : 'addme:'
            });
        }
        return (
            (r = null != _ ? _(l, o, i) : (0, n.jsx)('strong', { children: i.text })),
            (0, n.jsxs)(p.P3F, {
                tag: 'li',
                className: a()(w.option, c),
                onClick: f,
                onFocus: g,
                id: s,
                role: u,
                tabIndex: h,
                'aria-selected': d,
                children: [
                    (0, n.jsxs)('div', {
                        className: w.content,
                        children: [t, r]
                    }),
                    (0, n.jsx)(p.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: w.plusIcon
                    })
                ]
            })
        );
    },
    G = (e) =>
        (0, n.jsx)(
            q,
            F(L({}, e), {
                className: w.user,
                renderResult: U
            })
        ),
    z = {
        [M.dCx.FILTER_FROM]: {
            titleText: () => Z.intl.string(Z.t.catERE),
            component: G
        },
        [M.dCx.FILTER_MENTIONS]: {
            titleText: () => Z.intl.string(Z.t.l3K4Bw),
            component: G
        },
        [M.dCx.FILTER_HAS]: { titleText: () => Z.intl.string(Z.t.IC7gHB) },
        [M.dCx.FILTER_FILE_TYPE]: { titleText: () => Z.intl.string(Z.t.SXIfV1) },
        [M.dCx.FILTER_IN]: {
            titleText: () => Z.intl.string(Z.t.vHyCgo),
            component: (e) => (0, n.jsx)(q, F(L({}, e), { renderResult: Q }))
        },
        [M.rtL.DATES]: { titleText: () => Z.intl.string(Z.t.UiL5e3) },
        [M.rtL.HISTORY]: {
            titleText: () => Z.intl.string(Z.t.tSZd5e),
            groupTip(e) {
                let { searchContext: t } = e,
                    r = (0, I.WJ)(t);
                return (0, n.jsx)(p.ua7, {
                    text: Z.intl.string(Z.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: t, onMouseLeave: s } = e;
                        return (0, n.jsx)(p.P3F, {
                            onClick: () => E.Z.clearWebSearchHistory(r),
                            onMouseEnter: t,
                            onMouseLeave: s,
                            className: w.searchClearHistory,
                            title: Z.intl.string(Z.t.dwAvX1),
                            'aria-label': Z.intl.string(Z.t.dwAvX1),
                            children: (0, n.jsx)(p.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: r, result: l, showFilter: i, searchContext: o, renderResult: c, group: u } = e,
                    h = W(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchContext', 'renderResult', 'group']);
                let d = '',
                    f = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), (0, I.kG)(e).map((e, t, r) => ((0, I.Fr)(e, r[t + 1]) ? e : new g.WU(e.getFullMatch(), g.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let r = M.TNx.test(e.type),
                                s = M.KA4.test(e.type);
                            return (
                                (d += t),
                                (0, n.jsx)(
                                    'span',
                                    {
                                        className: a()(w.searchHistoryRow, {
                                            [w.filter]: r,
                                            [w.answer]: s,
                                            [w.nonText]: !r && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, n.jsxs)(
                    p.P3F,
                    F(
                        L(
                            {
                                className: w.option,
                                onClick: t,
                                onFocus: r
                            },
                            h
                        ),
                        {
                            'aria-label': Z.intl.formatToPlainString(Z.t.WoiGra, { suggestion: d }),
                            children: [
                                f,
                                (0, n.jsx)(p.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: w.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [M.rtL.SEARCH_OPTIONS]: {
            titleText: () => Z.intl.string(Z.t['8Zkyw8']),
            groupTip: () =>
                (0, n.jsx)(p.ua7, {
                    text: Z.intl.string(Z.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            F(L({ className: w.searchLearnMore }, e), {
                                children: (0, n.jsx)(p.eee, {
                                    href: C.Z.getArticleURL(M.BhN.USING_SEARCH),
                                    title: Z.intl.string(Z.t.hvVgAQ),
                                    children: (0, n.jsx)(p.idN, {
                                        size: 'md',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        )
                }),
            component: function (e) {
                var t,
                    { result: r, onSelect: s, onFocus: l, showFilter: i, searchContext: o } = e,
                    c = W(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchContext']);
                let u = (0, I.Ko)(null != (t = r.token) ? t : '');
                return (0, n.jsxs)(
                    p.P3F,
                    F(
                        L(
                            {
                                className: a()(w.option, w.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, n.jsx)('span', {
                                    className: w.filter,
                                    children: r.text
                                }),
                                (0, n.jsx)('span', {
                                    className: a()({ [w.answer]: u }),
                                    children: u
                                }),
                                (0, n.jsx)(p.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: w.plusIcon
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
        let { resultsState: r, totalResults: n } = this.props,
            { mode: s } = r,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && n > 0 ? this.setSelectedIndex(0) : s.type === M.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: r, totalResults: s, searchContext: l, channel: a } = this.props;
        return (0, n.jsx)(f.Z, {
            numResults: s,
            query: r.query,
            navId: t,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () => this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites: l.type === M.aib.FAVORITES && (0, I.X$)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({ searchAutocompleteSelectAction: k.ZW.CLICK }),
            showDMQueryText: l.type === M.aib.DMS && (0, I.R6)(l.type)
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            D(this, 'state', {
                dateHint: (0, P.Pr)(),
                selectedIndex: -1
            }),
            D(this, 'handleDateChange', (e) => {
                let t = (0, I.WJ)(this.props.searchContext);
                ((0, A.bh)({
                    searchId: t,
                    searchQuery: R.Z.getSearchResultsQuery(t),
                    searchQueryString: (0, T.$)(t),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: M.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: k.ZW.CLICK
                }),
                    this.setSearchQuery(e.format(M.b2L) + ' ', !0));
            }),
            D(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: r } = this.state,
                    { resultsState: n, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = n,
                    { resultsState: i } = e;
                if (l.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === r || i.autocompletes.length !== a.length)) {
                    let e = (0, I.i3)(i.autocompletes, i.mode)[t.selectedIndex],
                        r = (0, I.i3)(a, l).findIndex((t) => {
                            let { resultText: r } = t;
                            return r === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== r ? this.setSelectedIndex(r) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
                }
            }),
            D(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            D(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            D(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: r } = this.props;
                (0, I.Fz)(r.mode.filter) || this.focusOption(t + e);
            }),
            D(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: r } = this.props.resultsState,
                    n = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!n && !s && t < 0) ? (t = (0, I.BU)(r) - 1) : (n || s) && t >= (0, I.BU)(r) ? (t = -1) : !n && t >= (0, I.BU)(r) && (t = 0), this.setSelectedIndex(t));
            }),
            D(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    n = t;
                if ((null == n && (n = this.state.selectedIndex), n < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, I.Fz)(l.filter)) return;
                let a = (0, I.i3)(s, l);
                if (n >= a.length) return !1;
                let i = a[n],
                    c = a.length;
                if (i.group === M.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === M.rtL.HISTORY);
                    if (null != e) {
                        let t = n - (c - e.results.length);
                        (0, A.$z)({
                            searchId: (0, I.WJ)(this.props.searchContext),
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var u, h;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: s, group: l } = i.result,
                        a = (0, P._m)(i.group) ? i.group : null != l && (0, P._m)(l) ? l : null,
                        o = null != (u = null != s ? s : t) ? u : a,
                        d = i.result.channel,
                        p = o === M.dCx.FILTER_IN && null != d && d.id === S.Z.getChannelId(),
                        f = (0, I.WJ)(this.props.searchContext);
                    (0, A.bh)({
                        searchId: f,
                        searchQuery: R.Z.getSearchResultsQuery(f),
                        searchQueryString: (0, T.$)(f),
                        searchTokenType: o,
                        searchAutocompleteGroup: null != (h = i.group) ? h : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: n,
                        searchAutocompleteTotalResults: c,
                        isSearchFilterPrefix: e === M.Sap.EMPTY,
                        isSearchFilterAnswer: e === M.Sap.FILTER,
                        isSearchFilterComplete: e === M.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: r
                    });
                }
                let d = (function (e) {
                    let t = !0,
                        r = e.trim();
                    return (
                        o()(P.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && r === e.key && (t = !1);
                        }),
                        t
                    );
                })(i.resultText);
                return (this.setSearchQuery(i.resultText, d), !0);
            }),
            D(this, 'setSearchQuery', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: n, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != n.token ? (l = n.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != n.token ? n.token.end : l;
                (v.S.dispatch(M.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: r
                }),
                    t.setSelectedIndex(-1));
            }),
            D(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== M.Sap.FILTER && e.type !== M.Sap.EMPTY && !(0, I.Fz)(e.filter);
            }),
            D(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchContext: e,
                    resultsState: { mode: t }
                } = this.props;
                return e.type === M.aib.DMS && (0, I.R6)(e.type) && t.type === M.Sap.EMPTY && !(0, I.Fz)(t.filter);
            }),
            D(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: r } = e,
                    { channel: n, searchContext: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == n) return !1;
                let l = (0, I.WJ)(s);
                (0, A.tA)({
                    searchId: l,
                    searchAutocompleteSelectAction: r
                });
                let a = M.dCx.FILTER_IN,
                    i = P.ZP[a],
                    o = (0, I.X3)(n),
                    c = ''.concat(null != (t = null == i ? void 0 : i.key) ? t : a.toString(), ' ').concat(o);
                return (this.setSearchQuery(c, !0), !0);
            }),
            D(this, 'renderDatePicker', () =>
                (0, n.jsxs)('div', {
                    className: w.datePicker,
                    children: [
                        (0, n.jsx)(B, {
                            onSelect: this.handleDateChange,
                            maxDate: u()().local(),
                            minDate: H
                        }),
                        (0, n.jsxs)('div', {
                            className: w.datePickerHint,
                            children: [
                                (0, n.jsxs)('span', {
                                    className: w.hint,
                                    children: [Z.intl.string(Z.t.fmtCi4), '\xA0']
                                }),
                                (0, n.jsx)(p.P3F, {
                                    tag: 'span',
                                    className: w.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint
                                })
                            ]
                        })
                    ]
                })
            ),
            D(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            D(this, 'performSearch', (e) => {
                v.S.dispatch(M.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            D(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchContext: r } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, I.Fz)(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var i, o, c;
                    let u, h;
                    if (null == s || 0 === s.results.length) return null;
                    let d = null != (i = z[s.group]) ? i : {};
                    null != d.titleText &&
                        ((h = ''.concat(s.group, '-header')),
                        (u = (0, n.jsx)('div', {
                            id: h,
                            className: w.header,
                            children: d.titleText()
                        })));
                    let p = null != (o = d.groupTip) ? o : null,
                        g = null != p ? (0, n.jsx)(p, { searchContext: r }) : null,
                        m = null != (c = d.component) ? c : q,
                        _ = l.type === M.Sap.FILTER_ALL;
                    return (0, n.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': h,
                            className: w.resultsGroup,
                            children: [
                                u,
                                g,
                                s.results.map((l) => {
                                    var i, o;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, n.jsx)(
                                        m,
                                        L(
                                            {
                                                searchContext: r,
                                                group: null != (i = l.group) ? i : s.group,
                                                result: l,
                                                showFilter: _,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: k.ZW.CLICK
                                                }),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, f.M)(t, a, c)
                                        ),
                                        ''
                                            .concat(s.group, '-')
                                            .concat(l.text, '-')
                                            .concat(null != (o = l.key) ? o : '')
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
    let { searchContext: r, navId: s, onSelectedIndexChanged: l } = e,
        a = (0, d.e7)([S.Z, m.Z], () => {
            let e = S.Z.getChannelId();
            return m.Z.getChannel(e);
        }),
        [i, o] = (0, d.Wu)([O.Z], () => {
            let e = O.Z.getState(r),
                t = (0, I.BU)(e.autocompletes);
            return [e, t];
        });
    return (0, n.jsx)(K, {
        ref: t,
        navId: s,
        onSelectedIndexChanged: l,
        searchContext: r,
        resultsState: i,
        totalResults: o,
        channel: a
    });
});
