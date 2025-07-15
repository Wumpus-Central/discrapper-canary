(n.d(t, { ZP: () => et }), n(781311), n(35282), n(388685));
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
    O = n(471445),
    j = n(266076),
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
    w = n(585483),
    Z = n(63063),
    A = n(405656),
    M = n(51144),
    F = n(854709),
    L = n(652399),
    D = n(14091),
    H = n(981631),
    B = n(388032),
    U = n(290082);
function G(e, t, n) {
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
function W(e) {
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
                G(e, t, n[t]);
            }));
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
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
let Q = h()('2015-05-15').local(),
    K = (0, p.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    V = (e, t, n) => {
        var s, l, a;
        let { user: o, text: i } = n;
        if (null == o) return (0, r.jsx)('strong', { children: i });
        let c = k.default.getUser(o.id),
            u = _.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(o.id) : null,
            h = null != (l = null != (s = E.ZP.getNick(e, o.id)) ? s : d) ? l : M.ZP.getName(o),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: U.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: U.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: U.displayUsername,
                    children: M.ZP.getUserTag(o, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    X = (e, t, n, s) => {
        let { channel: l, text: o } = n;
        if (null == l) return (0, r.jsx)('strong', { children: o });
        let i = _.Z.getChannel(l.parent_id);
        return (0, r.jsxs)('div', {
            className: a()(U.resultChannel, s),
            children: [
                (() => {
                    if (l.isDM()) {
                        let e = l.getRecipientId(),
                            t = k.default.getUser(e);
                        if (null == t) return null;
                        let n = t.getAvatarURL(null, 20);
                        return (0, r.jsx)(g.qEK, {
                            'aria-hidden': !0,
                            className: U.searchResultDMChannelIcon,
                            size: g.EFr.SIZE_20,
                            src: n
                        });
                    }
                    {
                        if (l.isGroupDM())
                            return (0, r.jsx)(j.Z, {
                                'aria-hidden': !0,
                                className: U.searchResultGDMChannelIcon,
                                channel: l,
                                size: g.EFr.SIZE_20,
                                experimentLocation: 'search_popout'
                            });
                        let e = (0, O.KS)(l);
                        return null == e ? null : (0, r.jsx)(e, { className: U.searchResultChannelIcon });
                    }
                })(),
                l.isDM() || l.isGroupDM()
                    ? (0, r.jsx)('span', {
                          className: U.searchResultDMChannelName,
                          children: (0, x.F6)(l, k.default, C.Z)
                      })
                    : (0, r.jsx)('strong', { children: (0, x.F6)(l, k.default, C.Z) }),
                (() => {
                    if (l.isDM()) {
                        let e = l.getRecipientId(),
                            t = k.default.getUser(e);
                        return null == t
                            ? null
                            : (0, r.jsx)('span', {
                                  className: U.searchResultDMUserName,
                                  children: M.ZP.getUserTag(t, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                              });
                    }
                    if (null != i)
                        return (0, r.jsx)('span', {
                            className: U.searchResultChannelCategory,
                            children: (0, x.F6)(i, k.default, C.Z)
                        });
                })()
            ]
        });
    },
    J = (e) => {
        let t,
            n,
            { id: s, searchId: l, result: o, group: i, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: b } = e;
        if (m) {
            var y, x;
            t = (0, r.jsx)('span', {
                className: U.filter,
                children: null != (x = null == (y = S.ZP[i]) ? void 0 : y.key) ? x : 'addme:'
            });
        }
        return (
            (n = null != b ? b(l, i, o) : (0, r.jsx)('strong', { children: o.text })),
            (0, r.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(U.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, r.jsxs)('div', {
                        className: U.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: U.plusIcon
                    })
                ]
            })
        );
    },
    Y = (e) =>
        (0, r.jsx)(
            J,
            z(W({}, e), {
                className: U.user,
                renderResult: V
            })
        ),
    $ = {
        [H.dCx.FILTER_FROM]: {
            titleText: () => B.intl.string(B.t.catERE),
            component: Y
        },
        [H.dCx.FILTER_MENTIONS]: {
            titleText: () => B.intl.string(B.t.l3K4Bw),
            component: Y
        },
        [H.dCx.FILTER_HAS]: { titleText: () => B.intl.string(B.t.IC7gHB) },
        [H.dCx.FILTER_FILE_TYPE]: { titleText: () => B.intl.string(B.t.SXIfV1) },
        [H.dCx.FILTER_IN]: {
            titleText: () => B.intl.string(B.t.vHyCgo),
            component: (e) => (0, r.jsx)(J, z(W({}, e), { renderResult: X }))
        },
        [H.rtL.DATES]: { titleText: () => B.intl.string(B.t.UiL5e3) },
        [H.rtL.HISTORY]: {
            titleText: () => B.intl.string(B.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(g.ua7, {
                    text: B.intl.string(B.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: s } = e;
                        return (0, r.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: s,
                            className: U.searchClearHistory,
                            title: B.intl.string(B.t.dwAvX1),
                            'aria-label': B.intl.string(B.t.dwAvX1),
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
                    d = q(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), A.kG(e).map((e, t, n) => (A.Fr(e, n[t + 1]) ? e : new y.WU(e.getFullMatch(), y.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = H.TNx.test(e.type),
                                s = H.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(U.searchHistoryRow, {
                                            [U.filter]: n,
                                            [U.answer]: s,
                                            [U.nonText]: !n && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    g.P3F,
                    z(
                        W(
                            {
                                className: U.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': B.intl.formatToPlainString(B.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: U.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [H.rtL.SEARCH_OPTIONS]: {
            titleText: () => B.intl.string(B.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(g.ua7, {
                    text: B.intl.string(B.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            z(W({ className: U.searchLearnMore }, e), {
                                children: (0, r.jsx)(g.eee, {
                                    href: Z.Z.getArticleURL(H.BhN.USING_SEARCH),
                                    title: B.intl.string(B.t.hvVgAQ),
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
                    c = q(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = A.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    g.P3F,
                    z(
                        W(
                            {
                                className: a()(U.option, U.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)('span', {
                                    className: U.filter,
                                    children: n.text
                                }),
                                (0, r.jsx)('span', {
                                    className: a()({ [U.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: U.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        }
    };
class ee extends s.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: s } = n,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : s.type === H.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
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
            searchFavorites: l === H.I_8 && (0, F.X)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: this.handleSearchInChannel,
            renderChannel: X
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            G(this, 'state', {
                dateHint: (0, S.Pr)(),
                selectedIndex: -1
            }),
            G(this, 'handleDateChange', (e) => {
                ((0, L.bh)({
                    searchId: this.props.searchId,
                    searchQuery: R.Z.getQuery(this.props.searchId),
                    searchQueryString: (0, D.$)(this.props.searchId),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: H.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1
                }),
                    this.setSearchQuery(e.format(H.b2L) + ' ', !0));
            }),
            G(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
                    let e = A.i3(o.autocompletes, o.mode)[t.selectedIndex],
                        n = A.i3(a, l).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
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
                    { resultsState: n } = this.props;
                A.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            G(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!r && !s && t < 0) ? (t = A.BU(n) - 1) : (r || s) && t >= A.BU(n) ? (t = -1) : !r && t >= A.BU(n) && (t = 0), this.setSelectedIndex(t));
            }),
            G(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (A.Fz(r.filter)) return;
                let s = A.i3(n, r);
                if (t >= s.length) return !1;
                let l = s[t],
                    a = s.length;
                if (l.group === H.rtL.HISTORY) {
                    let e = n.find((e) => (null == e ? void 0 : e.group) === H.rtL.HISTORY);
                    if (null != e) {
                        let n = t - (a - e.results.length);
                        (0, L.$z)({
                            searchId: this.props.searchId,
                            searchHistoryIndex: n,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var o;
                    let e = this.props.resultsState.mode.type,
                        n = this.props.resultsState.mode.filter,
                        { token: r, group: s } = l.result,
                        i = null != r ? r : n,
                        c = (0, S._m)(l.group) ? l.group : null != s && (0, S._m)(s) ? s : null;
                    (0, L.bh)({
                        searchId: this.props.searchId,
                        searchQuery: R.Z.getQuery(this.props.searchId),
                        searchQueryString: (0, D.$)(this.props.searchId),
                        searchTokenType: null != i ? i : c,
                        searchAutocompleteGroup: null != (o = l.group) ? o : s,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: t,
                        searchAutocompleteTotalResults: a,
                        isSearchFilterPrefix: e === H.Sap.EMPTY,
                        isSearchFilterAnswer: e === H.Sap.FILTER,
                        isSearchFilterComplete: e === H.Sap.FILTER_ALL
                    });
                }
                let i = (function (e) {
                    let t = !0,
                        n = e.trim();
                    return (
                        u()(S.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && n === e.key && (t = !1);
                        }),
                        t
                    );
                })(l.resultText);
                return (this.setSearchQuery(l.resultText, i), !0);
            }),
            G(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                (w.S.dispatch(H.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            G(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== H.Sap.FILTER && e.type !== H.Sap.EMPTY && !A.Fz(e.filter);
            }),
            G(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchId: e,
                    resultsState: { mode: t }
                } = this.props;
                return e === H.aib.DMS && (0, A.R6)(e) && t.type === H.Sap.EMPTY && !A.Fz(t.filter);
            }),
            G(this, 'handleSearchInChannel', () => {
                var e;
                let { channel: t } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == t) return !1;
                let n = H.dCx.FILTER_IN,
                    r = S.ZP[n],
                    s = (0, A.X3)(t),
                    l = ''.concat(null != (e = null == r ? void 0 : r.key) ? e : n.toString(), ' ').concat(s);
                return (this.setSearchQuery(l, !0), !0);
            }),
            G(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: U.datePicker,
                    children: [
                        (0, r.jsx)(K, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: Q
                        }),
                        (0, r.jsxs)('div', {
                            className: U.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: U.hint,
                                    children: [B.intl.string(B.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(g.P3F, {
                                    tag: 'span',
                                    className: U.hintValue,
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
                w.S.dispatch(H.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            G(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if (A.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var o, i, c;
                    let u, d;
                    if (null == s || 0 === s.results.length) return null;
                    let h = null != (o = $[s.group]) ? o : {};
                    null != h.titleText &&
                        ((d = ''.concat(s.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: U.header,
                            children: h.titleText()
                        })));
                    let p = null != (i = h.groupTip) ? i : null,
                        f = null != p ? (0, r.jsx)(p, { searchId: n }) : null,
                        g = null != (c = h.component) ? c : J,
                        m = l.type === H.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: U.resultsGroup,
                            children: [
                                u,
                                f,
                                s.results.map((l) => {
                                    var o, i;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        g,
                                        W(
                                            {
                                                searchId: n,
                                                group: null != (o = l.group) ? o : s.group,
                                                result: l,
                                                showFilter: m,
                                                onSelect: this.selectOption.bind(null, a),
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
let et = s.forwardRef((e, t) => {
    let n = (0, v.U)({ location: 'SearchPopout' }),
        [s, l, a, o] = (0, f.Wu)([T.Z, P.Z, I.Z, _.Z], () => {
            let e = T.Z.getGuildId(),
                t = P.Z.getChannelId(),
                r = _.Z.getChannel(t),
                s = null != e ? e : n ? H.aib.DMS : t;
            i()(null != s, 'SearchPopout.getStateFromStores - invalid searchId');
            let l = I.Z.getState(s),
                a = A.BU(l.autocompletes);
            return [s, l, a, r];
        });
    return (0, r.jsx)(
        ee,
        z(W({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t,
            channel: o
        })
    );
});
