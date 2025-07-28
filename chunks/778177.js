(r.d(t, { ZP: () => $ }), r(781311), r(35282), r(388685));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(512722),
    o = r.n(i),
    c = r(392711),
    u = r.n(c),
    h = r(913527),
    d = r.n(h),
    p = r(608787),
    f = r(442837),
    g = r(481060),
    m = r(542051),
    S = r(349033),
    _ = r(592125),
    y = r(271383),
    x = r(699516),
    b = r(944486),
    E = r(914010),
    C = r(246946),
    v = r(594174),
    O = r(585483),
    R = r(63063),
    I = r(51144),
    j = r(748610),
    T = r(738018),
    P = r(518944),
    N = r(607802),
    A = r(945577),
    Z = r(532428),
    M = r(14091),
    k = r(579612),
    w = r(315322),
    L = r(723642),
    F = r(981631),
    D = r(388032),
    H = r(290082);
function W(e, t, r) {
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
function U(e) {
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
                W(e, t, r[t]);
            }));
    }
    return e;
}
function B(e, t) {
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
function Q(e, t) {
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
let q = d()('2015-05-15').local(),
    G = (0, p.Un)({
        createPromise: () => Promise.resolve().then(r.bind(r, 547800)),
        webpackId: 547800
    }),
    z = (e, t, r) => {
        var s, l, a;
        let { user: i, text: o } = r;
        if (null == i) return (0, n.jsx)('strong', { children: o });
        let c = v.default.getUser(i.id),
            u = _.Z.getChannel(e),
            h = (null == u ? void 0 : u.isPrivate()) ? x.Z.getNickname(i.id) : null,
            d = null != (l = null != (s = y.ZP.getNick(e, i.id)) ? s : h) ? l : I.ZP.getName(i),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : i.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, n.jsx)(
                'img',
                {
                    alt: '',
                    className: H.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(i.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: H.displayedNick,
                    children: d
                },
                'display-nick-'.concat(t, '-').concat(i.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: H.displayUsername,
                    children: I.ZP.getUserTag(i, { identifiable: C.Z.enabled && C.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(i.id)
            )
        ];
    },
    K = (e, t, r) => {
        let { channel: s, text: l } = r;
        return null == s
            ? (0, n.jsx)('strong', { children: l })
            : (0, n.jsxs)('div', {
                  className: H.resultChannel,
                  children: [(0, n.jsx)(k.MC, { channel: s }), (0, n.jsx)(k.GQ, { channel: s }), (0, n.jsx)(k.P, { channel: s })]
              });
    },
    V = (e) => {
        let t,
            r,
            { id: s, searchId: l, result: i, group: o, className: c, role: u, tabIndex: h, 'aria-selected': d, onSelect: p, onFocus: f, showFilter: m, renderResult: S } = e;
        if (m) {
            var _, y;
            t = (0, n.jsx)('span', {
                className: H.filter,
                children: null != (y = null == (_ = Z.ZP[o]) ? void 0 : _.key) ? y : 'addme:'
            });
        }
        return (
            (r = null != S ? S(l, o, i) : (0, n.jsx)('strong', { children: i.text })),
            (0, n.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(H.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: h,
                'aria-selected': d,
                children: [
                    (0, n.jsxs)('div', {
                        className: H.content,
                        children: [t, r]
                    }),
                    (0, n.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: H.plusIcon
                    })
                ]
            })
        );
    },
    Y = (e) =>
        (0, n.jsx)(
            V,
            B(U({}, e), {
                className: H.user,
                renderResult: z
            })
        ),
    J = {
        [F.dCx.FILTER_FROM]: {
            titleText: () => D.intl.string(D.t.catERE),
            component: Y
        },
        [F.dCx.FILTER_MENTIONS]: {
            titleText: () => D.intl.string(D.t.l3K4Bw),
            component: Y
        },
        [F.dCx.FILTER_HAS]: { titleText: () => D.intl.string(D.t.IC7gHB) },
        [F.dCx.FILTER_FILE_TYPE]: { titleText: () => D.intl.string(D.t.SXIfV1) },
        [F.dCx.FILTER_IN]: {
            titleText: () => D.intl.string(D.t.vHyCgo),
            component: (e) => (0, n.jsx)(V, B(U({}, e), { renderResult: K }))
        },
        [F.rtL.DATES]: { titleText: () => D.intl.string(D.t.UiL5e3) },
        [F.rtL.HISTORY]: {
            titleText: () => D.intl.string(D.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, n.jsx)(g.ua7, {
                    text: D.intl.string(D.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: r, onMouseLeave: s } = e;
                        return (0, n.jsx)(g.P3F, {
                            onClick: () => j.Z.clearWebSearchHistory(t),
                            onMouseEnter: r,
                            onMouseLeave: s,
                            className: H.searchClearHistory,
                            title: D.intl.string(D.t.dwAvX1),
                            'aria-label': D.intl.string(D.t.dwAvX1),
                            children: (0, n.jsx)(g.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: r, result: l, showFilter: i, searchId: o, renderResult: c, group: u } = e,
                    h = Q(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let d = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), (0, N.kG)(e).map((e, t, r) => ((0, N.Fr)(e, r[t + 1]) ? e : new S.WU(e.getFullMatch(), S.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let r = F.TNx.test(e.type),
                                s = F.KA4.test(e.type);
                            return (
                                (d += t),
                                (0, n.jsx)(
                                    'span',
                                    {
                                        className: a()(H.searchHistoryRow, {
                                            [H.filter]: r,
                                            [H.answer]: s,
                                            [H.nonText]: !r && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, n.jsxs)(
                    g.P3F,
                    B(
                        U(
                            {
                                className: H.option,
                                onClick: t,
                                onFocus: r
                            },
                            h
                        ),
                        {
                            'aria-label': D.intl.formatToPlainString(D.t.WoiGra, { suggestion: d }),
                            children: [
                                p,
                                (0, n.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: H.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [F.rtL.SEARCH_OPTIONS]: {
            titleText: () => D.intl.string(D.t['8Zkyw8']),
            groupTip: () =>
                (0, n.jsx)(g.ua7, {
                    text: D.intl.string(D.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            B(U({ className: H.searchLearnMore }, e), {
                                children: (0, n.jsx)(g.eee, {
                                    href: R.Z.getArticleURL(F.BhN.USING_SEARCH),
                                    title: D.intl.string(D.t.hvVgAQ),
                                    children: (0, n.jsx)(g.idN, {
                                        size: 'md',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        )
                }),
            component: function (e) {
                var t,
                    { result: r, onSelect: s, onFocus: l, showFilter: i, searchId: o } = e,
                    c = Q(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = (0, N.Ko)(null != (t = r.token) ? t : '');
                return (0, n.jsxs)(
                    g.P3F,
                    B(
                        U(
                            {
                                className: a()(H.option, H.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, n.jsx)('span', {
                                    className: H.filter,
                                    children: r.text
                                }),
                                (0, n.jsx)('span', {
                                    className: a()({ [H.answer]: u }),
                                    children: u
                                }),
                                (0, n.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: H.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        }
    };
class X extends s.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: r, totalResults: n } = this.props,
            { mode: s } = r,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && n > 0 ? this.setSelectedIndex(0) : s.type === F.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: r, totalResults: s, searchId: l, channel: a } = this.props;
        return (0, n.jsx)(m.Z, {
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
            searchFavorites: l === F.I_8 && (0, N.X$)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({ searchAutocompleteSelectAction: L.ZW.CLICK }),
            showDMQueryText: l === F.aib.DMS && (0, N.R6)(l)
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            W(this, 'state', {
                dateHint: (0, Z.Pr)(),
                selectedIndex: -1
            }),
            W(this, 'handleDateChange', (e) => {
                ((0, w.bh)({
                    searchId: this.props.searchId,
                    searchQuery: null != this.props.searchId ? P.Z.getSearchResultsQuery(this.props.searchId) : null,
                    searchQueryString: (0, M.$)(this.props.searchId),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: F.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: L.ZW.CLICK
                }),
                    this.setSearchQuery(e.format(F.b2L) + ' ', !0));
            }),
            W(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: r } = this.state,
                    { resultsState: n, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = n,
                    { resultsState: i } = e;
                if (l.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === r || i.autocompletes.length !== a.length)) {
                    let e = (0, N.i3)(i.autocompletes, i.mode)[t.selectedIndex],
                        r = (0, N.i3)(a, l).findIndex((t) => {
                            let { resultText: r } = t;
                            return r === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== r ? this.setSelectedIndex(r) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
                }
            }),
            W(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            W(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            W(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: r } = this.props;
                (0, N.Fz)(r.mode.filter) || this.focusOption(t + e);
            }),
            W(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: r } = this.props.resultsState,
                    n = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!n && !s && t < 0) ? (t = (0, N.BU)(r) - 1) : (n || s) && t >= (0, N.BU)(r) ? (t = -1) : !n && t >= (0, N.BU)(r) && (t = 0), this.setSelectedIndex(t));
            }),
            W(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    n = t;
                if ((null == n && (n = this.state.selectedIndex), n < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, N.Fz)(l.filter)) return;
                let a = (0, N.i3)(s, l);
                if (n >= a.length) return !1;
                let i = a[n],
                    o = a.length;
                if (i.group === F.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === F.rtL.HISTORY);
                    if (null != e) {
                        let t = n - (o - e.results.length);
                        (0, w.$z)({
                            searchId: this.props.searchId,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var c, h;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: s, group: l } = i.result,
                        a = (0, Z._m)(i.group) ? i.group : null != l && (0, Z._m)(l) ? l : null,
                        u = null != (c = null != s ? s : t) ? c : a,
                        d = i.result.channel,
                        p = u === F.dCx.FILTER_IN && null != d && d.id === b.Z.getChannelId();
                    (0, w.bh)({
                        searchId: this.props.searchId,
                        searchQuery: null != this.props.searchId ? P.Z.getSearchResultsQuery(this.props.searchId) : null,
                        searchQueryString: (0, M.$)(this.props.searchId),
                        searchTokenType: u,
                        searchAutocompleteGroup: null != (h = i.group) ? h : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: n,
                        searchAutocompleteTotalResults: o,
                        isSearchFilterPrefix: e === F.Sap.EMPTY,
                        isSearchFilterAnswer: e === F.Sap.FILTER,
                        isSearchFilterComplete: e === F.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: r
                    });
                }
                let d = (function (e) {
                    let t = !0,
                        r = e.trim();
                    return (
                        u()(Z.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && r === e.key && (t = !1);
                        }),
                        t
                    );
                })(i.resultText);
                return (this.setSearchQuery(i.resultText, d), !0);
            }),
            W(this, 'setSearchQuery', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: n, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != n.token ? (l = n.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != n.token ? n.token.end : l;
                (O.S.dispatch(F.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: r
                }),
                    t.setSelectedIndex(-1));
            }),
            W(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== F.Sap.FILTER && e.type !== F.Sap.EMPTY && !(0, N.Fz)(e.filter);
            }),
            W(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchId: e,
                    resultsState: { mode: t }
                } = this.props;
                return e === F.aib.DMS && (0, N.R6)(e) && t.type === F.Sap.EMPTY && !(0, N.Fz)(t.filter);
            }),
            W(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: r } = e,
                    { channel: n, searchId: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == n) return !1;
                (0, w.tA)({
                    searchId: s,
                    searchAutocompleteSelectAction: r
                });
                let l = F.dCx.FILTER_IN,
                    a = Z.ZP[l],
                    i = (0, N.X3)(n),
                    o = ''.concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), ' ').concat(i);
                return (this.setSearchQuery(o, !0), !0);
            }),
            W(this, 'renderDatePicker', () =>
                (0, n.jsxs)('div', {
                    className: H.datePicker,
                    children: [
                        (0, n.jsx)(G, {
                            onSelect: this.handleDateChange,
                            maxDate: d()().local(),
                            minDate: q
                        }),
                        (0, n.jsxs)('div', {
                            className: H.datePickerHint,
                            children: [
                                (0, n.jsxs)('span', {
                                    className: H.hint,
                                    children: [D.intl.string(D.t.fmtCi4), '\xA0']
                                }),
                                (0, n.jsx)(g.P3F, {
                                    tag: 'span',
                                    className: H.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint
                                })
                            ]
                        })
                    ]
                })
            ),
            W(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            W(this, 'performSearch', (e) => {
                O.S.dispatch(F.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            W(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: r } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if ((0, N.Fz)(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var i, o, c;
                    let u, h;
                    if (null == s || 0 === s.results.length) return null;
                    let d = null != (i = J[s.group]) ? i : {};
                    null != d.titleText &&
                        ((h = ''.concat(s.group, '-header')),
                        (u = (0, n.jsx)('div', {
                            id: h,
                            className: H.header,
                            children: d.titleText()
                        })));
                    let p = null != (o = d.groupTip) ? o : null,
                        f = null != p ? (0, n.jsx)(p, { searchId: r }) : null,
                        g = null != (c = d.component) ? c : V,
                        S = l.type === F.Sap.FILTER_ALL;
                    return (0, n.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': h,
                            className: H.resultsGroup,
                            children: [
                                u,
                                f,
                                s.results.map((l) => {
                                    var i, o;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, n.jsx)(
                                        g,
                                        U(
                                            {
                                                searchId: r,
                                                group: null != (i = l.group) ? i : s.group,
                                                result: l,
                                                showFilter: S,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: L.ZW.CLICK
                                                }),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, m.M)(t, a, c)
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
let $ = s.forwardRef((e, t) => {
    let r = (0, A.U)({ location: 'SearchPopout' }),
        [s, l, a, i] = (0, f.Wu)([E.Z, b.Z, T.Z, _.Z], () => {
            let e = E.Z.getGuildId(),
                t = b.Z.getChannelId(),
                n = _.Z.getChannel(t),
                s = null != e ? e : r ? F.aib.DMS : t;
            o()(null != s, 'SearchPopout.getStateFromStores - invalid searchId');
            let l = T.Z.getState(s),
                a = (0, N.BU)(l.autocompletes);
            return [s, l, a, n];
        });
    return (0, n.jsx)(
        X,
        B(U({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t,
            channel: i
        })
    );
});
