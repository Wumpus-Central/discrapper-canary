n.d(t, { ZP: () => Q }), n(781311), n(35282), n(388685);
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
    v = n(778877),
    C = n(592125),
    O = n(271383),
    j = n(699516),
    S = n(250758),
    I = n(944486),
    T = n(914010),
    N = n(246946),
    P = n(594174),
    A = n(585483),
    w = n(63063),
    Z = n(405656),
    R = n(51144),
    k = n(854709),
    L = n(981631),
    D = n(388032),
    M = n(290082);
function U(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
let H = p()('2015-05-15').local(),
    V = (0, m.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    z = (e, t, n) => {
        var i, l, a;
        let { user: o, text: s } = n;
        if (null == o) return (0, r.jsx)('strong', { children: s });
        let c = P.default.getUser(o.id),
            u = C.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? j.Z.getNickname(o.id) : null,
            p = null != (l = null != (i = O.ZP.getNick(e, o.id)) ? i : d) ? l : R.ZP.getName(o),
            m = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: M.displayAvatar,
                    src: m
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: M.displayedNick,
                    children: p
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: M.displayUsername,
                    children: R.ZP.getUserTag(o, { identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    W = (e, t, n) => {
        let { channel: i, text: l } = n;
        if (null == i) return (0, r.jsx)('strong', { children: l });
        let a = C.Z.getChannel(i.parent_id),
            o = (0, E.KS)(i);
        return (0, r.jsxs)('div', {
            className: M.resultChannel,
            children: [
                null != o ? (0, r.jsx)(o, { className: M.searchResultChannelIcon }) : null,
                (0, r.jsx)('strong', { children: (0, y.F6)(i, P.default, j.Z) }),
                null != a
                    ? (0, r.jsx)('span', {
                          className: M.searchResultChannelCategory,
                          children: (0, y.F6)(a, P.default, j.Z)
                      })
                    : null
            ]
        });
    },
    K = (e) => {
        let t,
            n,
            { id: i, searchId: l, result: o, group: s, className: c, role: u, tabIndex: d, 'aria-selected': p, onSelect: m, onFocus: f, showFilter: g, renderResult: _ } = e;
        if (g) {
            var b, y;
            t = (0, r.jsx)('span', {
                className: M.filter,
                children: null != (y = null == (b = x.ZP[s]) ? void 0 : b.key) ? y : 'addme:'
            });
        }
        return (
            (n = null != _ ? _(l, s, o) : (0, r.jsx)('strong', { children: o.text })),
            (0, r.jsxs)(h.P3F, {
                tag: 'li',
                className: a()(M.option, c),
                onClick: m,
                onFocus: f,
                id: i,
                role: u,
                tabIndex: d,
                'aria-selected': p,
                children: [
                    (0, r.jsxs)('div', {
                        className: M.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(h.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: M.plusIcon
                    })
                ]
            })
        );
    },
    Y = (e) =>
        (0, r.jsx)(
            K,
            B(F({}, e), {
                className: M.user,
                renderResult: z
            })
        ),
    q = {
        [L.dCx.FILTER_FROM]: {
            titleText: () => D.intl.string(D.t.catERE),
            component: Y
        },
        [L.dCx.FILTER_MENTIONS]: {
            titleText: () => D.intl.string(D.t.l3K4Bw),
            component: Y
        },
        [L.dCx.FILTER_HAS]: { titleText: () => D.intl.string(D.t.IC7gHB) },
        [L.dCx.FILTER_FILE_TYPE]: { titleText: () => D.intl.string(D.t.SXIfV1) },
        [L.dCx.FILTER_IN]: {
            titleText: () => D.intl.string(D.t.vHyCgo),
            component: (e) => (0, r.jsx)(K, B(F({}, e), { renderResult: W }))
        },
        [L.rtL.DATES]: { titleText: () => D.intl.string(D.t.UiL5e3) },
        [L.rtL.HISTORY]: {
            titleText: () => D.intl.string(D.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(h.ua7, {
                    text: D.intl.string(D.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: i } = e;
                        return (0, r.jsx)(h.P3F, {
                            onClick: () => (0, g.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: i,
                            className: M.searchClearHistory,
                            title: D.intl.string(D.t.dwAvX1),
                            'aria-label': D.intl.string(D.t.dwAvX1),
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
                    d = G(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let p = '',
                    m = i
                        .useMemo(() => {
                            var e;
                            return (e = l.text), Z.kG(e).map((e, t, n) => (Z.Fr(e, n[t + 1]) ? e : new b.WU(e.getFullMatch(), b.Xe)));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = L.TNx.test(e.type),
                                i = L.KA4.test(e.type);
                            return (
                                (p += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(M.searchHistoryRow, {
                                            [M.filter]: n,
                                            [M.answer]: i,
                                            [M.nonText]: !n && !i
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    h.P3F,
                    B(
                        F(
                            {
                                className: M.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': D.intl.formatToPlainString(D.t.WoiGra, { suggestion: p }),
                            children: [
                                m,
                                (0, r.jsx)(h.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: M.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [L.rtL.SEARCH_OPTIONS]: {
            titleText: () => D.intl.string(D.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(h.ua7, {
                    text: D.intl.string(D.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            B(F({ className: M.searchLearnMore }, e), {
                                children: (0, r.jsx)(h.eee, {
                                    href: w.Z.getArticleURL(L.BhN.USING_SEARCH),
                                    title: D.intl.string(D.t.hvVgAQ),
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
                    c = G(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = Z.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    h.P3F,
                    B(
                        F(
                            {
                                className: a()(M.option, M.searchOption),
                                onClick: i,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)('span', {
                                    className: M.filter,
                                    children: n.text
                                }),
                                (0, r.jsx)('span', {
                                    className: a()({ [M.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(h.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: M.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        }
    };
class X extends i.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: l } = e;
        null != i.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === L.Sap.FILTER_ALL && l.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
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
            searchFavorites: l === L.I_8 && (0, k.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            U(this, 'state', {
                dateHint: (0, x.Pr)(),
                selectedIndex: -1
            }),
            U(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(L.b2L) + ' ', !0);
            }),
            U(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: i } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
                    let e = Z.zV(o.autocompletes, o.mode.type)[t.selectedIndex],
                        n = Z.zV(a, l.type).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1);
                }
            }),
            U(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            U(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            U(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                Z.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            U(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery();
                t < -1 || (!r && t < 0) ? (t = Z.BU(n) - 1) : r && t >= Z.BU(n) ? (t = -1) : !r && t >= Z.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            U(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (Z.Fz(r.filter)) return;
                let i = Z.zV(n, r.type);
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
            U(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: i } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == i ? void 0 : i.currentToken) != null && (l = i.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                A.S.dispatch(L.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            U(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== L.Sap.FILTER && e.type !== L.Sap.EMPTY && !Z.Fz(e.filter);
            }),
            U(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: M.datePicker,
                    children: [
                        (0, r.jsx)(V, {
                            onSelect: this.handleDateChange,
                            maxDate: p()().local(),
                            minDate: H
                        }),
                        (0, r.jsxs)('div', {
                            className: M.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: M.hint,
                                    children: [D.intl.string(D.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(h.P3F, {
                                    tag: 'span',
                                    className: M.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint
                                })
                            ]
                        })
                    ]
                })
            ),
            U(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            U(this, 'performSearch', (e) => {
                A.S.dispatch(L.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            U(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: i, mode: l } = this.props.resultsState;
                if (Z.Fz(l.filter)) return this.renderDatePicker();
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
                            className: M.header,
                            children: p.titleText()
                        })));
                    let m = null != (s = p.groupTip) ? s : null,
                        f = null != m ? (0, r.jsx)(m, { searchId: n }) : null,
                        h = null != (c = p.component) ? c : K,
                        g = l.type === L.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: M.resultsGroup,
                            children: [
                                u,
                                f,
                                i.results.map((l) => {
                                    var o, s;
                                    if (null == l || null == i) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        h,
                                        F(
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
let Q = i.forwardRef((e, t) => {
    let n = (0, v.U)({ location: 'SearchPopout' }),
        [i, l, a] = (0, f.Wu)([T.Z, I.Z, S.Z], () => {
            let e = T.Z.getGuildId(),
                t = I.Z.getChannelId(),
                r = null != e ? e : n ? L.aib.DMS : t;
            s()(null != r, 'SearchPopout.getStateFromStores - invalid searchId');
            let i = S.Z.getState(r),
                l = Z.BU(i.autocompletes);
            return [r, i, l];
        });
    return (0, r.jsx)(
        X,
        B(F({}, e), {
            searchId: i,
            resultsState: l,
            totalResults: a,
            ref: t
        })
    );
});
