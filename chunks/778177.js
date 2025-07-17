(n.d(t, { ZP: () => en }), n(781311), n(35282), n(388685));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    i = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(913527),
    h = n.n(d),
    p = n(608787),
    f = n(442837),
    g = n(481060),
    m = n(603263),
    b = n(542051),
    y = n(349033),
    S = n(999650),
    x = n(933557),
    j = n(471445),
    O = n(266076),
    v = n(778877),
    _ = n(592125),
    E = n(271383),
    C = n(699516),
    I = n(250758),
    R = n(768119),
    P = n(944486),
    T = n(914010),
    N = n(246946),
    k = n(594174),
    A = n(585483),
    Z = n(63063),
    w = n(405656),
    F = n(51144),
    L = n(854709),
    M = n(652399),
    D = n(14091),
    H = n(723642),
    B = n(981631),
    U = n(388032),
    G = n(290082);
function W(e, t, n) {
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
function z(e) {
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
                W(e, t, n[t]);
            }));
    }
    return e;
}
function q(e, t) {
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
function Q(e, t) {
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
let K = h()('2015-05-15').local(),
    V = (0, p.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    X = (e, t, n) => {
        var s, l, a;
        let { user: o, text: i } = n;
        if (null == o) return (0, r.jsx)('strong', { children: i });
        let c = k.default.getUser(o.id),
            u = _.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(o.id) : null,
            h = null != (l = null != (s = E.ZP.getNick(e, o.id)) ? s : d) ? l : F.ZP.getName(o),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: G.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: G.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: G.displayUsername,
                    children: F.ZP.getUserTag(o, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    J = (e, t, n, s, l) => {
        let { channel: o, text: i } = n;
        if (null == o) return (0, r.jsx)('strong', { children: i });
        let c = _.Z.getChannel(o.parent_id);
        return (0, r.jsxs)('div', {
            className: a()(G.resultChannel, s),
            children: [
                (() => {
                    if (o.isDM()) {
                        let e = o.getRecipientId(),
                            t = k.default.getUser(e);
                        if (null == t) return null;
                        let n = t.getAvatarURL(null, 20);
                        return (0, r.jsx)(g.qEK, {
                            'aria-hidden': !0,
                            className: G.searchResultDMChannelIcon,
                            size: g.EFr.SIZE_20,
                            src: n
                        });
                    }
                    {
                        if (o.isGroupDM())
                            return (0, r.jsx)(O.Z, {
                                'aria-hidden': !0,
                                className: G.searchResultGDMChannelIcon,
                                channel: o,
                                size: g.EFr.SIZE_20,
                                experimentLocation: 'search_popout'
                            });
                        let e = (0, j.KS)(o);
                        return null == e ? null : (0, r.jsx)(e, { className: G.searchResultChannelIcon });
                    }
                })(),
                (0, r.jsxs)('div', {
                    className: l,
                    children: [
                        o.isDM() || o.isGroupDM()
                            ? (0, r.jsx)('span', {
                                  className: G.searchResultDMChannelName,
                                  children: (0, x.F6)(o, k.default, C.Z)
                              })
                            : (0, r.jsx)('strong', { children: (0, x.F6)(o, k.default, C.Z) }),
                        (() => {
                            if (o.isDM()) {
                                let e = o.getRecipientId(),
                                    t = k.default.getUser(e);
                                return null == t
                                    ? null
                                    : (0, r.jsx)('span', {
                                          className: G.searchResultDMUserName,
                                          children: F.ZP.getUserTag(t, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                                      });
                            }
                            if (null != c)
                                return (0, r.jsx)('span', {
                                    className: G.searchResultChannelCategory,
                                    children: (0, x.F6)(c, k.default, C.Z)
                                });
                        })()
                    ]
                })
            ]
        });
    },
    Y = (e) => {
        let t,
            n,
            { id: s, searchId: l, result: o, group: i, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: b } = e;
        if (m) {
            var y, x;
            t = (0, r.jsx)('span', {
                className: G.filter,
                children: null != (x = null == (y = S.ZP[i]) ? void 0 : y.key) ? x : 'addme:'
            });
        }
        return (
            (n = null != b ? b(l, i, o) : (0, r.jsx)('strong', { children: o.text })),
            (0, r.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(G.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, r.jsxs)('div', {
                        className: G.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: G.plusIcon
                    })
                ]
            })
        );
    },
    $ = (e) =>
        (0, r.jsx)(
            Y,
            q(z({}, e), {
                className: G.user,
                renderResult: X
            })
        ),
    ee = {
        [B.dCx.FILTER_FROM]: {
            titleText: () => U.intl.string(U.t.catERE),
            component: $
        },
        [B.dCx.FILTER_MENTIONS]: {
            titleText: () => U.intl.string(U.t.l3K4Bw),
            component: $
        },
        [B.dCx.FILTER_HAS]: { titleText: () => U.intl.string(U.t.IC7gHB) },
        [B.dCx.FILTER_FILE_TYPE]: { titleText: () => U.intl.string(U.t.SXIfV1) },
        [B.dCx.FILTER_IN]: {
            titleText: () => U.intl.string(U.t.vHyCgo),
            component: (e) => (0, r.jsx)(Y, q(z({}, e), { renderResult: J }))
        },
        [B.rtL.DATES]: { titleText: () => U.intl.string(U.t.UiL5e3) },
        [B.rtL.HISTORY]: {
            titleText: () => U.intl.string(U.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(g.ua7, {
                    text: U.intl.string(U.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: s } = e;
                        return (0, r.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: s,
                            className: G.searchClearHistory,
                            title: U.intl.string(U.t.dwAvX1),
                            'aria-label': U.intl.string(U.t.dwAvX1),
                            children: (0, r.jsx)(g.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: n, result: l, showFilter: o, searchId: i, renderResult: c, group: u } = e,
                    d = Q(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), w.kG(e).map((e, t, n) => (w.Fr(e, n[t + 1]) ? e : new y.WU(e.getFullMatch(), y.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = B.TNx.test(e.type),
                                s = B.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(G.searchHistoryRow, {
                                            [G.filter]: n,
                                            [G.answer]: s,
                                            [G.nonText]: !n && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    g.P3F,
                    q(
                        z(
                            {
                                className: G.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': U.intl.formatToPlainString(U.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: G.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [B.rtL.SEARCH_OPTIONS]: {
            titleText: () => U.intl.string(U.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(g.ua7, {
                    text: U.intl.string(U.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            q(z({ className: G.searchLearnMore }, e), {
                                children: (0, r.jsx)(g.eee, {
                                    href: Z.Z.getArticleURL(B.BhN.USING_SEARCH),
                                    title: U.intl.string(U.t.hvVgAQ),
                                    children: (0, r.jsx)(g.idN, {
                                        size: 'md',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        )
                }),
            component: function (e) {
                var t,
                    { result: n, onSelect: s, onFocus: l, showFilter: o, searchId: i } = e,
                    c = Q(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = w.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    g.P3F,
                    q(
                        z(
                            {
                                className: a()(G.option, G.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)('span', {
                                    className: G.filter,
                                    children: n.text
                                }),
                                (0, r.jsx)('span', {
                                    className: a()({ [G.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: G.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        }
    };
class et extends s.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: s } = n,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : s.type === B.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: s, searchId: l, channel: a } = this.props;
        return (0, r.jsx)(b.Z, {
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
            searchFavorites: l === B.I_8 && (0, L.X)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({ searchAutocompleteSelectAction: H.Z.CLICK }),
            renderChannel: J
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            W(this, 'state', {
                dateHint: (0, S.Pr)(),
                selectedIndex: -1
            }),
            W(this, 'handleDateChange', (e) => {
                ((0, M.bh)({
                    searchId: this.props.searchId,
                    searchQuery: R.Z.getQuery(this.props.searchId),
                    searchQueryString: (0, D.$)(this.props.searchId),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: B.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: H.Z.CLICK
                }),
                    this.setSearchQuery(e.format(B.b2L) + ' ', !0));
            }),
            W(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
                    let e = w.i3(o.autocompletes, o.mode)[t.selectedIndex],
                        n = w.i3(a, l).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
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
                    { resultsState: n } = this.props;
                w.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            W(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!r && !s && t < 0) ? (t = w.BU(n) - 1) : (r || s) && t >= w.BU(n) ? (t = -1) : !r && t >= w.BU(n) && (t = 0), this.setSelectedIndex(t));
            }),
            W(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                if ((null == r && (r = this.state.selectedIndex), r < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if (w.Fz(l.filter)) return;
                let a = w.i3(s, l);
                if (r >= a.length) return !1;
                let o = a[r],
                    i = a.length;
                if (o.group === B.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === B.rtL.HISTORY);
                    if (null != e) {
                        let t = r - (i - e.results.length);
                        (0, M.$z)({
                            searchId: this.props.searchId,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var c, d;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: s, group: l } = o.result,
                        a = (0, S._m)(o.group) ? o.group : null != l && (0, S._m)(l) ? l : null,
                        u = null != (c = null != s ? s : t) ? c : a,
                        h = o.result.channel,
                        p = u === B.dCx.FILTER_IN && null != h && h.id === P.Z.getChannelId();
                    (0, M.bh)({
                        searchId: this.props.searchId,
                        searchQuery: R.Z.getQuery(this.props.searchId),
                        searchQueryString: (0, D.$)(this.props.searchId),
                        searchTokenType: u,
                        searchAutocompleteGroup: null != (d = o.group) ? d : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: i,
                        isSearchFilterPrefix: e === B.Sap.EMPTY,
                        isSearchFilterAnswer: e === B.Sap.FILTER,
                        isSearchFilterComplete: e === B.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: n
                    });
                }
                let h = (function (e) {
                    let t = !0,
                        n = e.trim();
                    return (
                        u()(S.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && n === e.key && (t = !1);
                        }),
                        t
                    );
                })(o.resultText);
                return (this.setSearchQuery(o.resultText, h), !0);
            }),
            W(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                (A.S.dispatch(B.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            W(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== B.Sap.FILTER && e.type !== B.Sap.EMPTY && !w.Fz(e.filter);
            }),
            W(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchId: e,
                    resultsState: { mode: t }
                } = this.props;
                return e === B.aib.DMS && (0, w.R6)(e) && t.type === B.Sap.EMPTY && !w.Fz(t.filter);
            }),
            W(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: n } = e,
                    { channel: r, searchId: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == r) return !1;
                (0, M.tA)({
                    searchId: s,
                    searchAutocompleteSelectAction: n
                });
                let l = B.dCx.FILTER_IN,
                    a = S.ZP[l],
                    o = (0, w.X3)(r),
                    i = ''.concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), ' ').concat(o);
                return (this.setSearchQuery(i, !0), !0);
            }),
            W(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: G.datePicker,
                    children: [
                        (0, r.jsx)(V, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: K
                        }),
                        (0, r.jsxs)('div', {
                            className: G.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: G.hint,
                                    children: [U.intl.string(U.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(g.P3F, {
                                    tag: 'span',
                                    className: G.hintValue,
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
                A.S.dispatch(B.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            W(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if (w.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var o, i, c;
                    let u, d;
                    if (null == s || 0 === s.results.length) return null;
                    let h = null != (o = ee[s.group]) ? o : {};
                    null != h.titleText &&
                        ((d = ''.concat(s.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: G.header,
                            children: h.titleText()
                        })));
                    let p = null != (i = h.groupTip) ? i : null,
                        f = null != p ? (0, r.jsx)(p, { searchId: n }) : null,
                        g = null != (c = h.component) ? c : Y,
                        m = l.type === B.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: G.resultsGroup,
                            children: [
                                u,
                                f,
                                s.results.map((l) => {
                                    var o, i;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        g,
                                        z(
                                            {
                                                searchId: n,
                                                group: null != (o = l.group) ? o : s.group,
                                                result: l,
                                                showFilter: m,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: H.Z.CLICK
                                                }),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, b.M)(t, a, c)
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
let en = s.forwardRef((e, t) => {
    let n = (0, v.U)({ location: 'SearchPopout' }),
        [s, l, a, o] = (0, f.Wu)([T.Z, P.Z, I.Z, _.Z], () => {
            let e = T.Z.getGuildId(),
                t = P.Z.getChannelId(),
                r = _.Z.getChannel(t),
                s = null != e ? e : n ? B.aib.DMS : t;
            i()(null != s, 'SearchPopout.getStateFromStores - invalid searchId');
            let l = I.Z.getState(s),
                a = w.BU(l.autocompletes);
            return [s, l, a, r];
        });
    return (0, r.jsx)(
        et,
        q(z({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t,
            channel: o
        })
    );
});
