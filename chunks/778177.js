(n.d(t, { ZP: () => Y }), n(781311), n(35282), n(388685));
var r = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(512722),
    o = n.n(i),
    c = n(392711),
    u = n.n(c),
    d = n(913527),
    h = n.n(d),
    p = n(608787),
    f = n(442837),
    g = n(481060),
    m = n(603263),
    S = n(542051),
    y = n(349033),
    b = n(999650),
    x = n(933557),
    _ = n(471445),
    v = n(785232),
    O = n(778877),
    E = n(592125),
    j = n(271383),
    C = n(699516),
    I = n(250758),
    P = n(944486),
    R = n(914010),
    T = n(246946),
    N = n(594174),
    w = n(585483),
    k = n(63063),
    A = n(405656),
    Z = n(51144),
    F = n(854709),
    M = n(981631),
    L = n(388032),
    D = n(290082);
function H(e, t, n) {
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
function B(e) {
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
                H(e, t, n[t]);
            }));
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
}
let z = h()('2015-05-15').local(),
    q = (0, p.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    W = (e, t, n) => {
        var l, s, a;
        let { user: i, text: o } = n;
        if (null == i) return (0, r.jsx)('strong', { children: o });
        let c = N.default.getUser(i.id),
            u = E.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(i.id) : null,
            h = null != (s = null != (l = j.ZP.getNick(e, i.id)) ? l : d) ? s : Z.ZP.getName(i),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : i.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: D.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(i.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: D.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(i.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: D.displayUsername,
                    children: Z.ZP.getUserTag(i, { identifiable: T.Z.enabled && T.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(i.id)
            )
        ];
    },
    K = (e, t, n, l) => {
        let { channel: s, text: i } = n;
        if (null == s) return (0, r.jsx)('strong', { children: i });
        let o = E.Z.getChannel(s.parent_id);
        return (0, r.jsxs)('div', {
            className: a()(D.resultChannel, l),
            children: [
                (() => {
                    if (s.isDM()) {
                        let e = s.getRecipientId(),
                            t = N.default.getUser(e);
                        if (null == t) return null;
                        let n = t.getAvatarURL(null, 20);
                        return (0, r.jsx)('img', {
                            alt: '',
                            className: D.searchResultDMChannelIcon,
                            src: n
                        });
                    }
                    {
                        if (s.isGroupDM())
                            return (0, r.jsx)(v.Z, {
                                recipients: s.recipients,
                                size: g.EFr.SIZE_20,
                                className: D.searchResultGDMChannelIcon
                            });
                        let e = (0, _.KS)(s);
                        return null == e ? null : (0, r.jsx)(e, { className: D.searchResultChannelIcon });
                    }
                })(),
                s.isDM() || s.isGroupDM()
                    ? (0, r.jsx)('span', {
                          className: D.searchResultDMChannelName,
                          children: (0, x.F6)(s, N.default, C.Z)
                      })
                    : (0, r.jsx)('strong', { children: (0, x.F6)(s, N.default, C.Z) }),
                (() => {
                    if (s.isDM()) {
                        let e = s.getRecipientId(),
                            t = N.default.getUser(e);
                        return null == t
                            ? null
                            : (0, r.jsx)('span', {
                                  className: D.searchResultDMUserName,
                                  children: Z.ZP.getUserTag(t, { identifiable: T.Z.enabled && T.Z.hidePersonalInformation ? 'never' : 'always' })
                              });
                    }
                    if (null != o)
                        return (0, r.jsx)('span', {
                            className: D.searchResultChannelCategory,
                            children: (0, x.F6)(o, N.default, C.Z)
                        });
                })()
            ]
        });
    },
    Q = (e) => {
        let t,
            n,
            { id: l, searchId: s, result: i, group: o, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: S } = e;
        if (m) {
            var y, x;
            t = (0, r.jsx)('span', {
                className: D.filter,
                children: null != (x = null == (y = b.ZP[o]) ? void 0 : y.key) ? x : 'addme:'
            });
        }
        return (
            (n = null != S ? S(s, o, i) : (0, r.jsx)('strong', { children: i.text })),
            (0, r.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(D.option, c),
                onClick: p,
                onFocus: f,
                id: l,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: D.plusIcon
                    })
                ]
            })
        );
    },
    J = (e) =>
        (0, r.jsx)(
            Q,
            U(B({}, e), {
                className: D.user,
                renderResult: W
            })
        ),
    X = {
        [M.dCx.FILTER_FROM]: {
            titleText: () => L.intl.string(L.t.catERE),
            component: J
        },
        [M.dCx.FILTER_MENTIONS]: {
            titleText: () => L.intl.string(L.t.l3K4Bw),
            component: J
        },
        [M.dCx.FILTER_HAS]: { titleText: () => L.intl.string(L.t.IC7gHB) },
        [M.dCx.FILTER_FILE_TYPE]: { titleText: () => L.intl.string(L.t.SXIfV1) },
        [M.dCx.FILTER_IN]: {
            titleText: () => L.intl.string(L.t.vHyCgo),
            component: (e) => (0, r.jsx)(Q, U(B({}, e), { renderResult: K }))
        },
        [M.rtL.DATES]: { titleText: () => L.intl.string(L.t.UiL5e3) },
        [M.rtL.HISTORY]: {
            titleText: () => L.intl.string(L.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(g.ua7, {
                    text: L.intl.string(L.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: l } = e;
                        return (0, r.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: l,
                            className: D.searchClearHistory,
                            title: L.intl.string(L.t.dwAvX1),
                            'aria-label': L.intl.string(L.t.dwAvX1),
                            children: (0, r.jsx)(g.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: n, result: s, showFilter: i, searchId: o, renderResult: c, group: u } = e,
                    d = G(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = l
                        .useMemo(() => {
                            var e;
                            return ((e = s.text), A.kG(e).map((e, t, n) => (A.Fr(e, n[t + 1]) ? e : new y.WU(e.getFullMatch(), y.Xe))));
                        }, [s.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = M.TNx.test(e.type),
                                l = M.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(D.searchHistoryRow, {
                                            [D.filter]: n,
                                            [D.answer]: l,
                                            [D.nonText]: !n && !l
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    g.P3F,
                    U(
                        B(
                            {
                                className: D.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': L.intl.formatToPlainString(L.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, r.jsx)(g.qJs, {
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
        [M.rtL.SEARCH_OPTIONS]: {
            titleText: () => L.intl.string(L.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(g.ua7, {
                    text: L.intl.string(L.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            U(B({ className: D.searchLearnMore }, e), {
                                children: (0, r.jsx)(g.eee, {
                                    href: k.Z.getArticleURL(M.BhN.USING_SEARCH),
                                    title: L.intl.string(L.t.hvVgAQ),
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
                    { result: n, onSelect: l, onFocus: s, showFilter: i, searchId: o } = e,
                    c = G(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = A.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    g.P3F,
                    U(
                        B(
                            {
                                className: a()(D.option, D.searchOption),
                                onClick: l,
                                onFocus: s
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
                                (0, r.jsx)(g.qJs, {
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
class V extends l.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: l } = n,
            { resultsState: s } = e;
        null != l.filter && null == s.mode.filter && r > 0 ? this.setSelectedIndex(0) : l.type === M.Sap.FILTER_ALL && s.mode.type !== l.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: l, searchId: s, channel: a } = this.props;
        return (0, r.jsx)(S.Z, {
            numResults: l,
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
            searchFavorites: s === M.I_8 && (0, F.X)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: this.handleSearchInChannel,
            renderChannel: K
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            H(this, 'state', {
                dateHint: (0, b.Pr)(),
                selectedIndex: -1
            }),
            H(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(M.b2L) + ' ', !0);
            }),
            H(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: l } = this.props,
                    { mode: s, autocompletes: a } = r,
                    { resultsState: i } = e;
                if (s.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || i.autocompletes.length !== a.length)) {
                    let e = A.zV(i.autocompletes, i.mode)[t.selectedIndex],
                        n = A.zV(a, s).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= l && this.setSelectedIndex(l - 1);
                }
            }),
            H(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            H(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            H(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                A.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            H(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    l = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!r && !l && t < 0) ? (t = A.BU(n) - 1) : (r || l) && t >= A.BU(n) ? (t = -1) : !r && t >= A.BU(n) && (t = 0), this.setSelectedIndex(t));
            }),
            H(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (A.Fz(r.filter)) return;
                let l = A.zV(n, r);
                if (t >= l.length) return !1;
                let s = l[t],
                    a = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            u()(b.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(s);
                return (this.setSearchQuery(s, a), !0);
            }),
            H(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: l } = t.props.resultsState,
                    s = 0;
                null != r.token ? (s = r.token.start) : (null == l ? void 0 : l.currentToken) != null && (s = l.currentToken.end);
                let a = null != r.token ? r.token.end : s;
                (w.S.dispatch(M.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: s,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            H(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== M.Sap.FILTER && e.type !== M.Sap.EMPTY && !A.Fz(e.filter);
            }),
            H(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchId: e,
                    resultsState: { mode: t }
                } = this.props;
                return e === M.aib.DMS && (0, A.R6)(e) && t.type === M.Sap.EMPTY && !A.Fz(t.filter);
            }),
            H(this, 'handleSearchInChannel', () => {
                var e;
                let { channel: t } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == t) return !1;
                let n = M.dCx.FILTER_IN,
                    r = b.ZP[n],
                    l = (0, A.X3)(t),
                    s = ''.concat(null != (e = null == r ? void 0 : r.key) ? e : n.toString(), ' ').concat(l);
                return (this.setSearchQuery(s, !0), !0);
            }),
            H(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: D.datePicker,
                    children: [
                        (0, r.jsx)(q, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: z
                        }),
                        (0, r.jsxs)('div', {
                            className: D.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: D.hint,
                                    children: [L.intl.string(L.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(g.P3F, {
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
            H(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            H(this, 'performSearch', (e) => {
                w.S.dispatch(M.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            H(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: l, mode: s } = this.props.resultsState;
                if (A.Fz(s.filter)) return this.renderDatePicker();
                let a = -1;
                return l.map((l) => {
                    var i, o, c;
                    let u, d;
                    if (null == l || 0 === l.results.length) return null;
                    let h = null != (i = X[l.group]) ? i : {};
                    null != h.titleText &&
                        ((d = ''.concat(l.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: D.header,
                            children: h.titleText()
                        })));
                    let p = null != (o = h.groupTip) ? o : null,
                        f = null != p ? (0, r.jsx)(p, { searchId: n }) : null,
                        g = null != (c = h.component) ? c : Q,
                        m = s.type === M.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: D.resultsGroup,
                            children: [
                                u,
                                f,
                                l.results.map((s) => {
                                    var i, o;
                                    if (null == s || null == l) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        g,
                                        B(
                                            {
                                                searchId: n,
                                                group: null != (i = s.group) ? i : l.group,
                                                result: s,
                                                showFilter: m,
                                                onSelect: this.selectOption.bind(null, a),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, S.M)(t, a, c)
                                        ),
                                        ''
                                            .concat(l.group, '-')
                                            .concat(s.text, '-')
                                            .concat(null != (o = s.key) ? o : '')
                                    );
                                })
                            ]
                        },
                        l.group
                    );
                });
            }));
    }
}
let Y = l.forwardRef((e, t) => {
    let n = (0, O.U)({ location: 'SearchPopout' }),
        [l, s, a, i] = (0, f.Wu)([R.Z, P.Z, I.Z, E.Z], () => {
            let e = R.Z.getGuildId(),
                t = P.Z.getChannelId(),
                r = E.Z.getChannel(t),
                l = null != e ? e : n ? M.aib.DMS : t;
            o()(null != l, 'SearchPopout.getStateFromStores - invalid searchId');
            let s = I.Z.getState(l),
                a = A.BU(s.autocompletes);
            return [l, s, a, r];
        });
    return (0, r.jsx)(
        V,
        U(B({}, e), {
            searchId: l,
            resultsState: s,
            totalResults: a,
            ref: t,
            channel: i
        })
    );
});
