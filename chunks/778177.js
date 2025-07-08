(n.d(t, { ZP: () => Y }), n(781311), n(35282), n(388685));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
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
    E = n(785232),
    v = n(778877),
    O = n(592125),
    j = n(271383),
    C = n(699516),
    I = n(250758),
    R = n(944486),
    P = n(914010),
    T = n(246946),
    N = n(594174),
    A = n(585483),
    w = n(63063),
    k = n(405656),
    M = n(51144),
    F = n(854709),
    Z = n(981631),
    D = n(388032),
    L = n(290082);
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
function U(e) {
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
function G(e, t) {
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
let z = h()('2015-05-15').local(),
    q = (0, p.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    W = (e, t, n) => {
        var s, l, a;
        let { user: i, text: o } = n;
        if (null == i) return (0, r.jsx)('strong', { children: o });
        let c = N.default.getUser(i.id),
            u = O.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(i.id) : null,
            h = null != (l = null != (s = j.ZP.getNick(e, i.id)) ? s : d) ? l : M.ZP.getName(i),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : i.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: L.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(i.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: L.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(i.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: L.displayUsername,
                    children: M.ZP.getUserTag(i, { identifiable: T.Z.enabled && T.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(i.id)
            )
        ];
    },
    K = (e, t, n) => {
        let { channel: s, text: l } = n;
        if (null == s) return (0, r.jsx)('strong', { children: l });
        let a = O.Z.getChannel(s.parent_id);
        return (0, r.jsxs)('div', {
            className: L.resultChannel,
            children: [
                (() => {
                    if (s.isDM()) {
                        let e = s.getRecipientId(),
                            t = N.default.getUser(e);
                        if (null == t) return null;
                        let n = t.getAvatarURL(null, 20);
                        return (0, r.jsx)('img', {
                            alt: '',
                            className: L.searchResultDMChannelIcon,
                            src: n
                        });
                    }
                    {
                        if (s.isGroupDM())
                            return (0, r.jsx)(E.Z, {
                                recipients: s.recipients,
                                size: g.EFr.SIZE_20,
                                className: L.searchResultGDMChannelIcon
                            });
                        let e = (0, _.KS)(s);
                        return null == e ? null : (0, r.jsx)(e, { className: L.searchResultChannelIcon });
                    }
                })(),
                s.isDM() || s.isGroupDM()
                    ? (0, r.jsx)('span', {
                          className: L.searchResultDMChannelName,
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
                                  className: L.searchResultDMUserName,
                                  children: M.ZP.getUserTag(t, { identifiable: T.Z.enabled && T.Z.hidePersonalInformation ? 'never' : 'always' })
                              });
                    }
                    if (null != a)
                        return (0, r.jsx)('span', {
                            className: L.searchResultChannelCategory,
                            children: (0, x.F6)(a, N.default, C.Z)
                        });
                })()
            ]
        });
    },
    Q = (e) => {
        let t,
            n,
            { id: s, searchId: l, result: i, group: o, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: S } = e;
        if (m) {
            var y, x;
            t = (0, r.jsx)('span', {
                className: L.filter,
                children: null != (x = null == (y = b.ZP[o]) ? void 0 : y.key) ? x : 'addme:'
            });
        }
        return (
            (n = null != S ? S(l, o, i) : (0, r.jsx)('strong', { children: i.text })),
            (0, r.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(L.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, r.jsxs)('div', {
                        className: L.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: L.plusIcon
                    })
                ]
            })
        );
    },
    J = (e) =>
        (0, r.jsx)(
            Q,
            G(U({}, e), {
                className: L.user,
                renderResult: W
            })
        ),
    V = {
        [Z.dCx.FILTER_FROM]: {
            titleText: () => D.intl.string(D.t.catERE),
            component: J
        },
        [Z.dCx.FILTER_MENTIONS]: {
            titleText: () => D.intl.string(D.t.l3K4Bw),
            component: J
        },
        [Z.dCx.FILTER_HAS]: { titleText: () => D.intl.string(D.t.IC7gHB) },
        [Z.dCx.FILTER_FILE_TYPE]: { titleText: () => D.intl.string(D.t.SXIfV1) },
        [Z.dCx.FILTER_IN]: {
            titleText: () => D.intl.string(D.t.vHyCgo),
            component: (e) => (0, r.jsx)(Q, G(U({}, e), { renderResult: K }))
        },
        [Z.rtL.DATES]: { titleText: () => D.intl.string(D.t.UiL5e3) },
        [Z.rtL.HISTORY]: {
            titleText: () => D.intl.string(D.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(g.ua7, {
                    text: D.intl.string(D.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: s } = e;
                        return (0, r.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: s,
                            className: L.searchClearHistory,
                            title: D.intl.string(D.t.dwAvX1),
                            'aria-label': D.intl.string(D.t.dwAvX1),
                            children: (0, r.jsx)(g.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: n, result: l, showFilter: i, searchId: o, renderResult: c, group: u } = e,
                    d = B(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), k.kG(e).map((e, t, n) => (k.Fr(e, n[t + 1]) ? e : new y.WU(e.getFullMatch(), y.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = Z.TNx.test(e.type),
                                s = Z.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(L.searchHistoryRow, {
                                            [L.filter]: n,
                                            [L.answer]: s,
                                            [L.nonText]: !n && !s
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    g.P3F,
                    G(
                        U(
                            {
                                className: L.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': D.intl.formatToPlainString(D.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: L.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [Z.rtL.SEARCH_OPTIONS]: {
            titleText: () => D.intl.string(D.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(g.ua7, {
                    text: D.intl.string(D.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            G(U({ className: L.searchLearnMore }, e), {
                                children: (0, r.jsx)(g.eee, {
                                    href: w.Z.getArticleURL(Z.BhN.USING_SEARCH),
                                    title: D.intl.string(D.t.hvVgAQ),
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
                    { result: n, onSelect: s, onFocus: l, showFilter: i, searchId: o } = e,
                    c = B(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = k.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    g.P3F,
                    G(
                        U(
                            {
                                className: a()(L.option, L.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)('span', {
                                    className: L.filter,
                                    children: n.text
                                }),
                                (0, r.jsx)('span', {
                                    className: a()({ [L.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: L.plusIcon
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
            { navId: t, resultsState: n, totalResults: s, searchId: l } = this.props;
        return (0, r.jsx)(S.Z, {
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
            searchFavorites: l === Z.I_8 && (0, F.X)()
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
                this.setSearchQuery(e.format(Z.b2L) + ' ', !0);
            }),
            H(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: i } = e;
                if (l.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || i.autocompletes.length !== a.length)) {
                    let e = k.zV(i.autocompletes, i.mode)[t.selectedIndex],
                        n = k.zV(a, l).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
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
                k.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            H(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery();
                (t < -1 || (!r && t < 0) ? (t = k.BU(n) - 1) : r && t >= k.BU(n) ? (t = -1) : !r && t >= k.BU(n) && (t = 0), this.setSelectedIndex(t));
            }),
            H(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (k.Fz(r.filter)) return;
                let s = k.zV(n, r);
                if (t >= s.length) return !1;
                let l = s[t],
                    a = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            u()(b.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(l);
                return (this.setSearchQuery(l, a), !0);
            }),
            H(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                (A.S.dispatch(Z.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            H(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== Z.Sap.FILTER && e.type !== Z.Sap.EMPTY && !k.Fz(e.filter);
            }),
            H(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: L.datePicker,
                    children: [
                        (0, r.jsx)(q, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: z
                        }),
                        (0, r.jsxs)('div', {
                            className: L.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: L.hint,
                                    children: [D.intl.string(D.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(g.P3F, {
                                    tag: 'span',
                                    className: L.hintValue,
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
                A.S.dispatch(Z.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            H(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if (k.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var i, o, c;
                    let u, d;
                    if (null == s || 0 === s.results.length) return null;
                    let h = null != (i = V[s.group]) ? i : {};
                    null != h.titleText &&
                        ((d = ''.concat(s.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: L.header,
                            children: h.titleText()
                        })));
                    let p = null != (o = h.groupTip) ? o : null,
                        f = null != p ? (0, r.jsx)(p, { searchId: n }) : null,
                        g = null != (c = h.component) ? c : Q,
                        m = l.type === Z.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: L.resultsGroup,
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
                                                searchId: n,
                                                group: null != (i = l.group) ? i : s.group,
                                                result: l,
                                                showFilter: m,
                                                onSelect: this.selectOption.bind(null, a),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, S.M)(t, a, c)
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
let Y = s.forwardRef((e, t) => {
    let n = (0, v.U)({ location: 'SearchPopout' }),
        [s, l, a] = (0, f.Wu)([P.Z, R.Z, I.Z], () => {
            let e = P.Z.getGuildId(),
                t = R.Z.getChannelId(),
                r = null != e ? e : n ? Z.aib.DMS : t;
            o()(null != r, 'SearchPopout.getStateFromStores - invalid searchId');
            let s = I.Z.getState(r),
                l = k.BU(s.autocompletes);
            return [r, s, l];
        });
    return (0, r.jsx)(
        X,
        G(U({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t
        })
    );
});
