(r.d(t, { ZP: () => et }), r(781311), r(35282), r(388685));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(512722),
    i = r.n(o),
    c = r(392711),
    u = r.n(c),
    d = r(913527),
    h = r.n(d),
    p = r(608787),
    f = r(442837),
    g = r(481060),
    m = r(603263),
    b = r(542051),
    y = r(349033),
    S = r(999650),
    x = r(933557),
    O = r(471445),
    j = r(266076),
    v = r(778877),
    _ = r(592125),
    E = r(271383),
    C = r(699516),
    I = r(250758),
    R = r(768119),
    P = r(944486),
    T = r(914010),
    N = r(246946),
    k = r(594174),
    w = r(585483),
    Z = r(63063),
    A = r(405656),
    L = r(51144),
    M = r(854709),
    F = r(652399),
    D = r(14091),
    H = r(981631),
    B = r(388032),
    U = r(290082);
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
function z(e) {
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
function q(e, t) {
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
let Q = h()('2015-05-15').local(),
    K = (0, p.Un)({
        createPromise: () => Promise.resolve().then(r.bind(r, 547800)),
        webpackId: 547800
    }),
    V = (e, t, r) => {
        var s, l, a;
        let { user: o, text: i } = r;
        if (null == o) return (0, n.jsx)('strong', { children: i });
        let c = k.default.getUser(o.id),
            u = _.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(o.id) : null,
            h = null != (l = null != (s = E.ZP.getNick(e, o.id)) ? s : d) ? l : L.ZP.getName(o),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, n.jsx)(
                'img',
                {
                    alt: '',
                    className: U.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: U.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, n.jsx)(
                'span',
                {
                    className: U.displayUsername,
                    children: L.ZP.getUserTag(o, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    X = (e, t, r, s) => {
        let { channel: l, text: o } = r;
        if (null == l) return (0, n.jsx)('strong', { children: o });
        let i = _.Z.getChannel(l.parent_id);
        return (0, n.jsxs)('div', {
            className: a()(U.resultChannel, s),
            children: [
                (() => {
                    if (l.isDM()) {
                        let e = l.getRecipientId(),
                            t = k.default.getUser(e);
                        if (null == t) return null;
                        let r = t.getAvatarURL(null, 20);
                        return (0, n.jsx)(g.qEK, {
                            'aria-hidden': !0,
                            className: U.searchResultDMChannelIcon,
                            size: g.EFr.SIZE_20,
                            src: r
                        });
                    }
                    {
                        if (l.isGroupDM())
                            return (0, n.jsx)(j.Z, {
                                'aria-hidden': !0,
                                className: U.searchResultGDMChannelIcon,
                                channel: l,
                                size: g.EFr.SIZE_20,
                                experimentLocation: 'search_popout'
                            });
                        let e = (0, O.KS)(l);
                        return null == e ? null : (0, n.jsx)(e, { className: U.searchResultChannelIcon });
                    }
                })(),
                l.isDM() || l.isGroupDM()
                    ? (0, n.jsx)('span', {
                          className: U.searchResultDMChannelName,
                          children: (0, x.F6)(l, k.default, C.Z)
                      })
                    : (0, n.jsx)('strong', { children: (0, x.F6)(l, k.default, C.Z) }),
                (() => {
                    if (l.isDM()) {
                        let e = l.getRecipientId(),
                            t = k.default.getUser(e);
                        return null == t
                            ? null
                            : (0, n.jsx)('span', {
                                  className: U.searchResultDMUserName,
                                  children: L.ZP.getUserTag(t, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                              });
                    }
                    if (null != i)
                        return (0, n.jsx)('span', {
                            className: U.searchResultChannelCategory,
                            children: (0, x.F6)(i, k.default, C.Z)
                        });
                })()
            ]
        });
    },
    J = (e) => {
        let t,
            r,
            { id: s, searchId: l, result: o, group: i, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: b } = e;
        if (m) {
            var y, x;
            t = (0, n.jsx)('span', {
                className: U.filter,
                children: null != (x = null == (y = S.ZP[i]) ? void 0 : y.key) ? x : 'addme:'
            });
        }
        return (
            (r = null != b ? b(l, i, o) : (0, n.jsx)('strong', { children: o.text })),
            (0, n.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(U.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, n.jsxs)('div', {
                        className: U.content,
                        children: [t, r]
                    }),
                    (0, n.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: U.plusIcon
                    })
                ]
            })
        );
    },
    Y = (e) =>
        (0, n.jsx)(
            J,
            q(z({}, e), {
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
            component: (e) => (0, n.jsx)(J, q(z({}, e), { renderResult: X }))
        },
        [H.rtL.DATES]: { titleText: () => B.intl.string(B.t.UiL5e3) },
        [H.rtL.HISTORY]: {
            titleText: () => B.intl.string(B.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, n.jsx)(g.ua7, {
                    text: B.intl.string(B.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: r, onMouseLeave: s } = e;
                        return (0, n.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: r,
                            onMouseLeave: s,
                            className: U.searchClearHistory,
                            title: B.intl.string(B.t.dwAvX1),
                            'aria-label': B.intl.string(B.t.dwAvX1),
                            children: (0, n.jsx)(g.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: r, result: l, showFilter: o, searchId: i, renderResult: c, group: u } = e,
                    d = W(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), A.kG(e).map((e, t, r) => (A.Fr(e, r[t + 1]) ? e : new y.WU(e.getFullMatch(), y.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let r = H.TNx.test(e.type),
                                s = H.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, n.jsx)(
                                    'span',
                                    {
                                        className: a()(U.searchHistoryRow, {
                                            [U.filter]: r,
                                            [U.answer]: s,
                                            [U.nonText]: !r && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, n.jsxs)(
                    g.P3F,
                    q(
                        z(
                            {
                                className: U.option,
                                onClick: t,
                                onFocus: r
                            },
                            d
                        ),
                        {
                            'aria-label': B.intl.formatToPlainString(B.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, n.jsx)(g.qJs, {
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
                (0, n.jsx)(g.ua7, {
                    text: B.intl.string(B.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, n.jsx)(
                            'div',
                            q(z({ className: U.searchLearnMore }, e), {
                                children: (0, n.jsx)(g.eee, {
                                    href: Z.Z.getArticleURL(H.BhN.USING_SEARCH),
                                    title: B.intl.string(B.t.hvVgAQ),
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
                    { result: r, onSelect: s, onFocus: l, showFilter: o, searchId: i } = e,
                    c = W(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = A.Ko(null != (t = r.token) ? t : '');
                return (0, n.jsxs)(
                    g.P3F,
                    q(
                        z(
                            {
                                className: a()(U.option, U.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, n.jsx)('span', {
                                    className: U.filter,
                                    children: r.text
                                }),
                                (0, n.jsx)('span', {
                                    className: a()({ [U.answer]: u }),
                                    children: u
                                }),
                                (0, n.jsx)(g.qJs, {
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
        let { resultsState: r, totalResults: n } = this.props,
            { mode: s } = r,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && n > 0 ? this.setSelectedIndex(0) : s.type === H.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: r, totalResults: s, searchId: l, channel: a } = this.props;
        return (0, n.jsx)(b.Z, {
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
            searchFavorites: l === H.I_8 && (0, M.X)(),
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
                ((0, F.bh)({
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
                let { selectedIndex: r } = this.state,
                    { resultsState: n, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = n,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === r || o.autocompletes.length !== a.length)) {
                    let e = A.i3(o.autocompletes, o.mode)[t.selectedIndex],
                        r = A.i3(a, l).findIndex((t) => {
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
                A.Fz(r.mode.filter) || this.focusOption(t + e);
            }),
            G(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: r } = this.props.resultsState,
                    n = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!n && !s && t < 0) ? (t = A.BU(r) - 1) : (n || s) && t >= A.BU(r) ? (t = -1) : !n && t >= A.BU(r) && (t = 0), this.setSelectedIndex(t));
            }),
            G(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: r, mode: n } = this.props.resultsState;
                if (A.Fz(n.filter)) return;
                let s = A.i3(r, n);
                if (t >= s.length) return !1;
                let l = s[t],
                    a = s.length;
                if (l.group === H.rtL.HISTORY) {
                    let e = r.find((e) => (null == e ? void 0 : e.group) === H.rtL.HISTORY);
                    if (null != e) {
                        let r = t - (a - e.results.length);
                        (0, F.$z)({
                            searchId: this.props.searchId,
                            searchHistoryIndex: r,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var o;
                    let e = this.props.resultsState.mode.type,
                        r = this.props.resultsState.mode.filter,
                        { token: n, group: s } = l.result,
                        i = null != n ? n : r,
                        c = (0, S._m)(l.group) ? l.group : null != s && (0, S._m)(s) ? s : null;
                    (0, F.bh)({
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
                        r = e.trim();
                    return (
                        u()(S.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && r === e.key && (t = !1);
                        }),
                        t
                    );
                })(l.resultText);
                return (this.setSearchQuery(l.resultText, i), !0);
            }),
            G(this, 'setSearchQuery', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: n, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != n.token ? (l = n.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != n.token ? n.token.end : l;
                (w.S.dispatch(H.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: r
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
                let r = H.dCx.FILTER_IN,
                    n = S.ZP[r],
                    s = (0, A.X3)(t),
                    l = ''.concat(null != (e = null == n ? void 0 : n.key) ? e : r.toString(), ' ').concat(s);
                return (this.setSearchQuery(l, !0), !0);
            }),
            G(this, 'renderDatePicker', () =>
                (0, n.jsxs)('div', {
                    className: U.datePicker,
                    children: [
                        (0, n.jsx)(K, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: Q
                        }),
                        (0, n.jsxs)('div', {
                            className: U.datePickerHint,
                            children: [
                                (0, n.jsxs)('span', {
                                    className: U.hint,
                                    children: [B.intl.string(B.t.fmtCi4), '\xA0']
                                }),
                                (0, n.jsx)(g.P3F, {
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
                    { navId: t, searchId: r } = this.props,
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
                        (u = (0, n.jsx)('div', {
                            id: d,
                            className: U.header,
                            children: h.titleText()
                        })));
                    let p = null != (i = h.groupTip) ? i : null,
                        f = null != p ? (0, n.jsx)(p, { searchId: r }) : null,
                        g = null != (c = h.component) ? c : J,
                        m = l.type === H.Sap.FILTER_ALL;
                    return (0, n.jsxs)(
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
                                    return (0, n.jsx)(
                                        g,
                                        z(
                                            {
                                                searchId: r,
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
    let r = (0, v.U)({ location: 'SearchPopout' }),
        [s, l, a, o] = (0, f.Wu)([T.Z, P.Z, I.Z, _.Z], () => {
            let e = T.Z.getGuildId(),
                t = P.Z.getChannelId(),
                n = _.Z.getChannel(t),
                s = null != e ? e : r ? H.aib.DMS : t;
            i()(null != s, 'SearchPopout.getStateFromStores - invalid searchId');
            let l = I.Z.getState(s),
                a = A.BU(l.autocompletes);
            return [s, l, a, n];
        });
    return (0, n.jsx)(
        ee,
        q(z({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t,
            channel: o
        })
    );
});
