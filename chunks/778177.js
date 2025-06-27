n.d(t, { ZP: () => J }), n(781311), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(913527),
    p = n.n(d),
    m = n(608787),
    f = n(442837),
    h = n(481060),
    g = n(603263),
    _ = n(542051),
    b = n(349033),
    x = n(999650),
    y = n(933557),
    E = n(471445),
    v = n(785232),
    C = n(778877),
    O = n(592125),
    j = n(271383),
    S = n(699516),
    I = n(250758),
    T = n(944486),
    N = n(914010),
    P = n(246946),
    A = n(594174),
    w = n(585483),
    Z = n(63063),
    R = n(405656),
    k = n(51144),
    L = n(854709),
    D = n(981631),
    M = n(388032),
    U = n(290082);
function F(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
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
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let V = p()('2015-05-15').local(),
    z = (0, m.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    W = (e, t, n) => {
        var i, l, a;
        let { user: o, text: s } = n;
        if (null == o) return (0, r.jsx)('strong', { children: s });
        let c = A.default.getUser(o.id),
            u = O.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? S.Z.getNickname(o.id) : null,
            p = null != (l = null != (i = j.ZP.getNick(e, o.id)) ? i : d) ? l : k.ZP.getName(o),
            m = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: U.displayAvatar,
                    src: m
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: U.displayedNick,
                    children: p
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: U.displayUsername,
                    children: k.ZP.getUserTag(o, { identifiable: P.Z.enabled && P.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    K = (e, t, n) => {
        let { channel: i, text: l } = n;
        if (null == i) return (0, r.jsx)('strong', { children: l });
        let a = O.Z.getChannel(i.parent_id);
        return (0, r.jsxs)('div', {
            className: U.resultChannel,
            children: [
                (() => {
                    if (i.isDM()) {
                        let e = i.getRecipientId(),
                            t = A.default.getUser(e);
                        if (null == t) return null;
                        let n = t.getAvatarURL(null, 20);
                        return (0, r.jsx)('img', {
                            alt: '',
                            className: U.searchResultDMChannelIcon,
                            src: n
                        });
                    }
                    {
                        if (i.isGroupDM())
                            return (0, r.jsx)(v.Z, {
                                recipients: i.recipients,
                                size: h.EFr.SIZE_20,
                                className: U.searchResultGDMChannelIcon
                            });
                        let e = (0, E.KS)(i);
                        return null == e ? null : (0, r.jsx)(e, { className: U.searchResultChannelIcon });
                    }
                })(),
                i.isDM() || i.isGroupDM()
                    ? (0, r.jsx)('span', {
                          className: U.searchResultDMChannelName,
                          children: (0, y.F6)(i, A.default, S.Z)
                      })
                    : (0, r.jsx)('strong', { children: (0, y.F6)(i, A.default, S.Z) }),
                (() => {
                    if (i.isDM()) {
                        let e = i.getRecipientId(),
                            t = A.default.getUser(e);
                        return null == t
                            ? null
                            : (0, r.jsx)('span', {
                                  className: U.searchResultDMUserName,
                                  children: k.ZP.getUserTag(t, { identifiable: P.Z.enabled && P.Z.hidePersonalInformation ? 'never' : 'always' })
                              });
                    }
                    if (null != a)
                        return (0, r.jsx)('span', {
                            className: U.searchResultChannelCategory,
                            children: (0, y.F6)(a, A.default, S.Z)
                        });
                })()
            ]
        });
    },
    Y = (e) => {
        let t,
            n,
            { id: i, searchId: l, result: o, group: s, className: c, role: u, tabIndex: d, 'aria-selected': p, onSelect: m, onFocus: f, showFilter: g, renderResult: _ } = e;
        if (g) {
            var b, y;
            t = (0, r.jsx)('span', {
                className: U.filter,
                children: null != (y = null == (b = x.ZP[s]) ? void 0 : b.key) ? y : 'addme:'
            });
        }
        return (
            (n = null != _ ? _(l, s, o) : (0, r.jsx)('strong', { children: o.text })),
            (0, r.jsxs)(h.P3F, {
                tag: 'li',
                className: a()(U.option, c),
                onClick: m,
                onFocus: f,
                id: i,
                role: u,
                tabIndex: d,
                'aria-selected': p,
                children: [
                    (0, r.jsxs)('div', {
                        className: U.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(h.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: U.plusIcon
                    })
                ]
            })
        );
    },
    X = (e) =>
        (0, r.jsx)(
            Y,
            G(B({}, e), {
                className: U.user,
                renderResult: W
            })
        ),
    q = {
        [D.dCx.FILTER_FROM]: {
            titleText: () => M.intl.string(M.t.catERE),
            component: X
        },
        [D.dCx.FILTER_MENTIONS]: {
            titleText: () => M.intl.string(M.t.l3K4Bw),
            component: X
        },
        [D.dCx.FILTER_HAS]: { titleText: () => M.intl.string(M.t.IC7gHB) },
        [D.dCx.FILTER_FILE_TYPE]: { titleText: () => M.intl.string(M.t.SXIfV1) },
        [D.dCx.FILTER_IN]: {
            titleText: () => M.intl.string(M.t.vHyCgo),
            component: (e) => (0, r.jsx)(Y, G(B({}, e), { renderResult: K }))
        },
        [D.rtL.DATES]: { titleText: () => M.intl.string(M.t.UiL5e3) },
        [D.rtL.HISTORY]: {
            titleText: () => M.intl.string(M.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(h.ua7, {
                    text: M.intl.string(M.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: i } = e;
                        return (0, r.jsx)(h.P3F, {
                            onClick: () => (0, g.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: i,
                            className: U.searchClearHistory,
                            title: M.intl.string(M.t.dwAvX1),
                            'aria-label': M.intl.string(M.t.dwAvX1),
                            children: (0, r.jsx)(h.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: n, result: l, showFilter: o, searchId: s, renderResult: c, group: u } = e,
                    d = H(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let p = '',
                    m = i
                        .useMemo(() => {
                            var e;
                            return (e = l.text), R.kG(e).map((e, t, n) => (R.Fr(e, n[t + 1]) ? e : new b.WU(e.getFullMatch(), b.Xe)));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = D.TNx.test(e.type),
                                i = D.KA4.test(e.type);
                            return (
                                (p += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(U.searchHistoryRow, {
                                            [U.filter]: n,
                                            [U.answer]: i,
                                            [U.nonText]: !n && !i
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    h.P3F,
                    G(
                        B(
                            {
                                className: U.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': M.intl.formatToPlainString(M.t.WoiGra, { suggestion: p }),
                            children: [
                                m,
                                (0, r.jsx)(h.qJs, {
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
        [D.rtL.SEARCH_OPTIONS]: {
            titleText: () => M.intl.string(M.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(h.ua7, {
                    text: M.intl.string(M.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            G(B({ className: U.searchLearnMore }, e), {
                                children: (0, r.jsx)(h.eee, {
                                    href: Z.Z.getArticleURL(D.BhN.USING_SEARCH),
                                    title: M.intl.string(M.t.hvVgAQ),
                                    children: (0, r.jsx)(h.idN, {
                                        size: 'md',
                                        color: 'currentColor'
                                    })
                                })
                            })
                        )
                }),
            component: function (e) {
                var t,
                    { result: n, onSelect: i, onFocus: l, showFilter: o, searchId: s } = e,
                    c = H(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = R.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    h.P3F,
                    G(
                        B(
                            {
                                className: a()(U.option, U.searchOption),
                                onClick: i,
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
                                (0, r.jsx)(h.qJs, {
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
class Q extends i.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: l } = e;
        null != i.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === D.Sap.FILTER_ALL && l.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: i, searchId: l } = this.props;
        return (0, r.jsx)(_.Z, {
            numResults: i,
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
            searchFavorites: l === D.I_8 && (0, L.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            F(this, 'state', {
                dateHint: (0, x.Pr)(),
                selectedIndex: -1
            }),
            F(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(D.b2L) + ' ', !0);
            }),
            F(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: i } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
                    let e = R.zV(o.autocompletes, o.mode)[t.selectedIndex],
                        n = R.zV(a, l).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1);
                }
            }),
            F(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            F(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            F(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                R.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            F(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery();
                t < -1 || (!r && t < 0) ? (t = R.BU(n) - 1) : r && t >= R.BU(n) ? (t = -1) : !r && t >= R.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            F(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (R.Fz(r.filter)) return;
                let i = R.zV(n, r);
                if (t >= i.length) return !1;
                let l = i[t],
                    a = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            u()(x.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(l);
                return this.setSearchQuery(l, a), !0;
            }),
            F(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: i } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == i ? void 0 : i.currentToken) != null && (l = i.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                w.S.dispatch(D.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            F(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== D.Sap.FILTER && e.type !== D.Sap.EMPTY && !R.Fz(e.filter);
            }),
            F(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: U.datePicker,
                    children: [
                        (0, r.jsx)(z, {
                            onSelect: this.handleDateChange,
                            maxDate: p()().local(),
                            minDate: V
                        }),
                        (0, r.jsxs)('div', {
                            className: U.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: U.hint,
                                    children: [M.intl.string(M.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(h.P3F, {
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
            F(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            F(this, 'performSearch', (e) => {
                w.S.dispatch(D.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            F(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: i, mode: l } = this.props.resultsState;
                if (R.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return i.map((i) => {
                    var o, s, c;
                    let u, d;
                    if (null == i || 0 === i.results.length) return null;
                    let p = null != (o = q[i.group]) ? o : {};
                    null != p.titleText &&
                        ((d = ''.concat(i.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: U.header,
                            children: p.titleText()
                        })));
                    let m = null != (s = p.groupTip) ? s : null,
                        f = null != m ? (0, r.jsx)(m, { searchId: n }) : null,
                        h = null != (c = p.component) ? c : Y,
                        g = l.type === D.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: U.resultsGroup,
                            children: [
                                u,
                                f,
                                i.results.map((l) => {
                                    var o, s;
                                    if (null == l || null == i) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        h,
                                        B(
                                            {
                                                searchId: n,
                                                group: null != (o = l.group) ? o : i.group,
                                                result: l,
                                                showFilter: g,
                                                onSelect: this.selectOption.bind(null, a),
                                                onFocus: this.focusOption.bind(null, a)
                                            },
                                            (0, _.M)(t, a, c)
                                        ),
                                        ''
                                            .concat(i.group, '-')
                                            .concat(l.text, '-')
                                            .concat(null != (s = l.key) ? s : '')
                                    );
                                })
                            ]
                        },
                        i.group
                    );
                });
            });
    }
}
let J = i.forwardRef((e, t) => {
    let n = (0, C.U)({ location: 'SearchPopout' }),
        [i, l, a] = (0, f.Wu)([N.Z, T.Z, I.Z], () => {
            let e = N.Z.getGuildId(),
                t = T.Z.getChannelId(),
                r = null != e ? e : n ? D.aib.DMS : t;
            s()(null != r, 'SearchPopout.getStateFromStores - invalid searchId');
            let i = I.Z.getState(r),
                l = R.BU(i.autocompletes);
            return [r, i, l];
        });
    return (0, r.jsx)(
        Q,
        G(B({}, e), {
            searchId: i,
            resultsState: l,
            totalResults: a,
            ref: t
        })
    );
});
