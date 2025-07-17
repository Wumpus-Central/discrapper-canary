(r.d(t, { ZP: () => er }), r(781311), r(35282), r(388685));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(512722),
    o = r.n(i),
    c = r(392711),
    u = r.n(c),
    d = r(913527),
    h = r.n(d),
    p = r(608787),
    f = r(442837),
    g = r(481060),
    m = r(603263),
    _ = r(542051),
    S = r(349033),
    y = r(999650),
    b = r(933557),
    x = r(471445),
    E = r(266076),
    C = r(778877),
    O = r(592125),
    I = r(271383),
    v = r(699516),
    j = r(250758),
    R = r(768119),
    T = r(944486),
    P = r(914010),
    N = r(246946),
    A = r(594174),
    Z = r(585483),
    k = r(63063),
    M = r(405656),
    L = r(51144),
    w = r(854709),
    F = r(652399),
    D = r(14091),
    H = r(723642),
    B = r(981631),
    U = r(388032),
    W = r(290082);
function G(e, t, r) {
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
function q(e) {
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
                G(e, t, r[t]);
            }));
    }
    return e;
}
function Q(e, t) {
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
function z(e, t) {
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
let K = h()('2015-05-15').local(),
    V = (0, p.Un)({
        createPromise: () => Promise.resolve().then(r.bind(r, 547800)),
        webpackId: 547800
    }),
    Y = (e, t, r) => {
        var s, l, a;
        let { user: i, text: o } = r;
        if (null == i) return (0, n.jsx)('strong', { children: o });
        let c = A.default.getUser(i.id),
            u = O.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? v.Z.getNickname(i.id) : null,
            h = null != (l = null != (s = I.ZP.getNick(e, i.id)) ? s : d) ? l : L.ZP.getName(i),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : i.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, n.jsx)(
                'img',
                {
                    alt: '',
                    className: W.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(i.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: W.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(i.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: W.displayUsername,
                    children: L.ZP.getUserTag(i, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(i.id)
            )
        ];
    },
    J = (e, t, r, s, l) => {
        let { channel: i, text: o } = r;
        if (null == i) return (0, n.jsx)('strong', { children: o });
        let c = O.Z.getChannel(i.parent_id);
        return (0, n.jsxs)('div', {
            className: a()(W.resultChannel, s),
            children: [
                (() => {
                    if (i.isDM()) {
                        let e = i.getRecipientId(),
                            t = A.default.getUser(e);
                        if (null == t) return null;
                        let r = t.getAvatarURL(null, 20);
                        return (0, n.jsx)(g.qEK, {
                            'aria-hidden': !0,
                            className: W.searchResultDMChannelIcon,
                            size: g.EFr.SIZE_20,
                            src: r
                        });
                    }
                    {
                        if (i.isGroupDM())
                            return (0, n.jsx)(E.Z, {
                                'aria-hidden': !0,
                                className: W.searchResultGDMChannelIcon,
                                channel: i,
                                size: g.EFr.SIZE_20,
                                experimentLocation: 'search_popout'
                            });
                        let e = (0, x.KS)(i);
                        return null == e ? null : (0, n.jsx)(e, { className: W.searchResultChannelIcon });
                    }
                })(),
                (0, n.jsxs)('div', {
                    className: l,
                    children: [
                        i.isDM() || i.isGroupDM()
                            ? (0, n.jsx)('span', {
                                  className: W.searchResultDMChannelName,
                                  children: (0, b.F6)(i, A.default, v.Z)
                              })
                            : (0, n.jsx)('strong', { children: (0, b.F6)(i, A.default, v.Z) }),
                        (() => {
                            if (i.isDM()) {
                                let e = i.getRecipientId(),
                                    t = A.default.getUser(e);
                                return null == t
                                    ? null
                                    : (0, n.jsx)('span', {
                                          className: W.searchResultDMUserName,
                                          children: L.ZP.getUserTag(t, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                                      });
                            }
                            if (null != c)
                                return (0, n.jsx)('span', {
                                    className: W.searchResultChannelCategory,
                                    children: (0, b.F6)(c, A.default, v.Z)
                                });
                        })()
                    ]
                })
            ]
        });
    },
    X = (e) => {
        let t,
            r,
            { id: s, searchId: l, result: i, group: o, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: _ } = e;
        if (m) {
            var S, b;
            t = (0, n.jsx)('span', {
                className: W.filter,
                children: null != (b = null == (S = y.ZP[o]) ? void 0 : S.key) ? b : 'addme:'
            });
        }
        return (
            (r = null != _ ? _(l, o, i) : (0, n.jsx)('strong', { children: i.text })),
            (0, n.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(W.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, n.jsxs)('div', {
                        className: W.content,
                        children: [t, r]
                    }),
                    (0, n.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: W.plusIcon
                    })
                ]
            })
        );
    },
    $ = (e) =>
        (0, n.jsx)(
            X,
            Q(q({}, e), {
                className: W.user,
                renderResult: Y
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
            component: (e) => (0, n.jsx)(X, Q(q({}, e), { renderResult: J }))
        },
        [B.rtL.DATES]: { titleText: () => U.intl.string(U.t.UiL5e3) },
        [B.rtL.HISTORY]: {
            titleText: () => U.intl.string(U.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, n.jsx)(g.ua7, {
                    text: U.intl.string(U.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: r, onMouseLeave: s } = e;
                        return (0, n.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: r,
                            onMouseLeave: s,
                            className: W.searchClearHistory,
                            title: U.intl.string(U.t.dwAvX1),
                            'aria-label': U.intl.string(U.t.dwAvX1),
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
                    d = z(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), M.kG(e).map((e, t, r) => (M.Fr(e, r[t + 1]) ? e : new S.WU(e.getFullMatch(), S.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let r = B.TNx.test(e.type),
                                s = B.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, n.jsx)(
                                    'span',
                                    {
                                        className: a()(W.searchHistoryRow, {
                                            [W.filter]: r,
                                            [W.answer]: s,
                                            [W.nonText]: !r && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, n.jsxs)(
                    g.P3F,
                    Q(
                        q(
                            {
                                className: W.option,
                                onClick: t,
                                onFocus: r
                            },
                            d
                        ),
                        {
                            'aria-label': U.intl.formatToPlainString(U.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, n.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: W.plusIcon
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
                (0, n.jsx)(g.ua7, {
                    text: U.intl.string(U.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            Q(q({ className: W.searchLearnMore }, e), {
                                children: (0, n.jsx)(g.eee, {
                                    href: k.Z.getArticleURL(B.BhN.USING_SEARCH),
                                    title: U.intl.string(U.t.hvVgAQ),
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
                    c = z(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = M.Ko(null != (t = r.token) ? t : '');
                return (0, n.jsxs)(
                    g.P3F,
                    Q(
                        q(
                            {
                                className: a()(W.option, W.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, n.jsx)('span', {
                                    className: W.filter,
                                    children: r.text
                                }),
                                (0, n.jsx)('span', {
                                    className: a()({ [W.answer]: u }),
                                    children: u
                                }),
                                (0, n.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: W.plusIcon
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
        let { resultsState: r, totalResults: n } = this.props,
            { mode: s } = r,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && n > 0 ? this.setSelectedIndex(0) : s.type === B.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: r, totalResults: s, searchId: l, channel: a } = this.props;
        return (0, n.jsx)(_.Z, {
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
            searchFavorites: l === B.I_8 && (0, w.X)(),
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
            G(this, 'state', {
                dateHint: (0, y.Pr)(),
                selectedIndex: -1
            }),
            G(this, 'handleDateChange', (e) => {
                ((0, F.bh)({
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
            G(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: r } = this.state,
                    { resultsState: n, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = n,
                    { resultsState: i } = e;
                if (l.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === r || i.autocompletes.length !== a.length)) {
                    let e = M.i3(i.autocompletes, i.mode)[t.selectedIndex],
                        r = M.i3(a, l).findIndex((t) => {
                            let { resultText: r } = t;
                            return r === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== r ? this.setSelectedIndex(r) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
                }
            }),
            G(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            G(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            G(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: r } = this.props;
                M.Fz(r.mode.filter) || this.focusOption(t + e);
            }),
            G(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: r } = this.props.resultsState,
                    n = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!n && !s && t < 0) ? (t = M.BU(r) - 1) : (n || s) && t >= M.BU(r) ? (t = -1) : !n && t >= M.BU(r) && (t = 0), this.setSelectedIndex(t));
            }),
            G(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    n = t;
                if ((null == n && (n = this.state.selectedIndex), n < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if (M.Fz(l.filter)) return;
                let a = M.i3(s, l);
                if (n >= a.length) return !1;
                let i = a[n],
                    o = a.length;
                if (i.group === B.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === B.rtL.HISTORY);
                    if (null != e) {
                        let t = n - (o - e.results.length);
                        (0, F.$z)({
                            searchId: this.props.searchId,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var c, d;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: s, group: l } = i.result,
                        a = (0, y._m)(i.group) ? i.group : null != l && (0, y._m)(l) ? l : null,
                        u = null != (c = null != s ? s : t) ? c : a,
                        h = i.result.channel,
                        p = u === B.dCx.FILTER_IN && null != h && h.id === T.Z.getChannelId();
                    (0, F.bh)({
                        searchId: this.props.searchId,
                        searchQuery: R.Z.getQuery(this.props.searchId),
                        searchQueryString: (0, D.$)(this.props.searchId),
                        searchTokenType: u,
                        searchAutocompleteGroup: null != (d = i.group) ? d : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: n,
                        searchAutocompleteTotalResults: o,
                        isSearchFilterPrefix: e === B.Sap.EMPTY,
                        isSearchFilterAnswer: e === B.Sap.FILTER,
                        isSearchFilterComplete: e === B.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: r
                    });
                }
                let h = (function (e) {
                    let t = !0,
                        r = e.trim();
                    return (
                        u()(y.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && r === e.key && (t = !1);
                        }),
                        t
                    );
                })(i.resultText);
                return (this.setSearchQuery(i.resultText, h), !0);
            }),
            G(this, 'setSearchQuery', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: n, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != n.token ? (l = n.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != n.token ? n.token.end : l;
                (Z.S.dispatch(B.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: r
                }),
                    t.setSelectedIndex(-1));
            }),
            G(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== B.Sap.FILTER && e.type !== B.Sap.EMPTY && !M.Fz(e.filter);
            }),
            G(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchId: e,
                    resultsState: { mode: t }
                } = this.props;
                return e === B.aib.DMS && (0, M.R6)(e) && t.type === B.Sap.EMPTY && !M.Fz(t.filter);
            }),
            G(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: r } = e,
                    { channel: n, searchId: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == n) return !1;
                (0, F.tA)({
                    searchId: s,
                    searchAutocompleteSelectAction: r
                });
                let l = B.dCx.FILTER_IN,
                    a = y.ZP[l],
                    i = (0, M.X3)(n),
                    o = ''.concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), ' ').concat(i);
                return (this.setSearchQuery(o, !0), !0);
            }),
            G(this, 'renderDatePicker', () =>
                (0, n.jsxs)('div', {
                    className: W.datePicker,
                    children: [
                        (0, n.jsx)(V, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: K
                        }),
                        (0, n.jsxs)('div', {
                            className: W.datePickerHint,
                            children: [
                                (0, n.jsxs)('span', {
                                    className: W.hint,
                                    children: [U.intl.string(U.t.fmtCi4), '\xA0']
                                }),
                                (0, n.jsx)(g.P3F, {
                                    tag: 'span',
                                    className: W.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint
                                })
                            ]
                        })
                    ]
                })
            ),
            G(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            G(this, 'performSearch', (e) => {
                Z.S.dispatch(B.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            G(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: r } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if (M.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var i, o, c;
                    let u, d;
                    if (null == s || 0 === s.results.length) return null;
                    let h = null != (i = ee[s.group]) ? i : {};
                    null != h.titleText &&
                        ((d = ''.concat(s.group, '-header')),
                        (u = (0, n.jsx)('div', {
                            id: d,
                            className: W.header,
                            children: h.titleText()
                        })));
                    let p = null != (o = h.groupTip) ? o : null,
                        f = null != p ? (0, n.jsx)(p, { searchId: r }) : null,
                        g = null != (c = h.component) ? c : X,
                        m = l.type === B.Sap.FILTER_ALL;
                    return (0, n.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: W.resultsGroup,
                            children: [
                                u,
                                f,
                                s.results.map((l) => {
                                    var i, o;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, n.jsx)(
                                        g,
                                        q(
                                            {
                                                searchId: r,
                                                group: null != (i = l.group) ? i : s.group,
                                                result: l,
                                                showFilter: m,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: H.Z.CLICK
                                                }),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, _.M)(t, a, c)
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
let er = s.forwardRef((e, t) => {
    let r = (0, C.U)({ location: 'SearchPopout' }),
        [s, l, a, i] = (0, f.Wu)([P.Z, T.Z, j.Z, O.Z], () => {
            let e = P.Z.getGuildId(),
                t = T.Z.getChannelId(),
                n = O.Z.getChannel(t),
                s = null != e ? e : r ? B.aib.DMS : t;
            o()(null != s, 'SearchPopout.getStateFromStores - invalid searchId');
            let l = j.Z.getState(s),
                a = M.BU(l.autocompletes);
            return [s, l, a, n];
        });
    return (0, n.jsx)(
        et,
        Q(q({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t,
            channel: i
        })
    );
});
