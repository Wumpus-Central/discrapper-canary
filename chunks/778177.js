n.d(t, { ZP: () => q }), n(566702), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    v = n(592125),
    O = n(271383),
    N = n(699516),
    j = n(250758),
    C = n(944486),
    I = n(914010),
    S = n(246946),
    T = n(594174),
    P = n(585483),
    A = n(63063),
    w = n(405656),
    Z = n(51144),
    k = n(854709),
    R = n(981631),
    D = n(388032),
    L = n(290082);
function M(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
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
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let B = p()('2015-05-15').local(),
    G = (0, m.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    H = (e, t, n) => {
        var i, a, l;
        let { user: o, text: s } = n;
        if (null == o) return (0, r.jsx)('strong', { children: s });
        let c = T.default.getUser(o.id),
            u = v.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? N.Z.getNickname(o.id) : null,
            p = null != (a = null != (i = O.ZP.getNick(e, o.id)) ? i : d) ? a : Z.ZP.getName(o),
            m = null != (l = null == c ? void 0 : c.getAvatarURL(e, 20)) ? l : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: L.displayAvatar,
                    src: m
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: L.displayedNick,
                    children: p
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: L.displayUsername,
                    children: Z.ZP.getUserTag(o, { identifiable: S.Z.enabled && S.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    V = (e, t, n) => {
        let { channel: i, text: a } = n;
        if (null == i) return (0, r.jsx)('strong', { children: a });
        let l = v.Z.getChannel(i.parent_id),
            o = (0, E.KS)(i);
        return (0, r.jsxs)('div', {
            className: L.resultChannel,
            children: [
                null != o ? (0, r.jsx)(o, { className: L.searchResultChannelIcon }) : null,
                (0, r.jsx)('strong', { children: (0, y.F6)(i, T.default, N.Z) }),
                null != l
                    ? (0, r.jsx)('span', {
                          className: L.searchResultChannelCategory,
                          children: (0, y.F6)(l, T.default, N.Z)
                      })
                    : null
            ]
        });
    },
    z = (e) => {
        let t,
            n,
            { id: i, searchId: a, result: o, group: s, className: c, role: u, tabIndex: d, 'aria-selected': p, onSelect: m, onFocus: f, showFilter: g, renderResult: _ } = e;
        if (g) {
            var b, y;
            t = (0, r.jsx)('span', {
                className: L.filter,
                children: null != (y = null == (b = x.ZP[s]) ? void 0 : b.key) ? y : 'addme:'
            });
        }
        return (
            (n = null != _ ? _(a, s, o) : (0, r.jsx)('strong', { children: o.text })),
            (0, r.jsxs)(h.P3F, {
                tag: 'li',
                className: l()(L.option, c),
                onClick: m,
                onFocus: f,
                id: i,
                role: u,
                tabIndex: d,
                'aria-selected': p,
                children: [
                    (0, r.jsxs)('div', {
                        className: L.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(h.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: L.plusIcon
                    })
                ]
            })
        );
    },
    K = (e) =>
        (0, r.jsx)(
            z,
            U(W({}, e), {
                className: L.user,
                renderResult: H
            })
        ),
    Y = {
        [R.dCx.FILTER_FROM]: {
            titleText: () => D.NW.string(D.t.catERE),
            component: K
        },
        [R.dCx.FILTER_MENTIONS]: {
            titleText: () => D.NW.string(D.t.l3K4Bw),
            component: K
        },
        [R.dCx.FILTER_HAS]: { titleText: () => D.NW.string(D.t.IC7gHB) },
        [R.dCx.FILTER_FILE_TYPE]: { titleText: () => D.NW.string(D.t.SXIfV1) },
        [R.dCx.FILTER_IN]: {
            titleText: () => D.NW.string(D.t.vHyCgo),
            component: (e) => (0, r.jsx)(z, U(W({}, e), { renderResult: V }))
        },
        [R.rtL.DATES]: { titleText: () => D.NW.string(D.t.UiL5e3) },
        [R.rtL.HISTORY]: {
            titleText: () => D.NW.string(D.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(h.ua7, {
                    text: D.NW.string(D.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: i } = e;
                        return (0, r.jsx)(h.P3F, {
                            onClick: () => (0, g.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: i,
                            className: L.searchClearHistory,
                            title: D.NW.string(D.t.dwAvX1),
                            'aria-label': D.NW.string(D.t.dwAvX1),
                            children: (0, r.jsx)(h.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                var { onSelect: t, onFocus: n, result: a, showFilter: o, searchId: s, renderResult: c, group: u } = e,
                    d = F(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let p = '',
                    m = i
                        .useMemo(() => {
                            var e;
                            return (e = a.text), w.kG(e).map((e, t, n) => (w.Fr(e, n[t + 1]) ? e : new b.WU(e.getFullMatch(), b.Xe)));
                        }, [a.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = R.TNx.test(e.type),
                                i = R.KA4.test(e.type);
                            return (
                                (p += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: l()(L.searchHistoryRow, {
                                            [L.filter]: n,
                                            [L.answer]: i,
                                            [L.nonText]: !n && !i
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(
                    h.P3F,
                    U(
                        W(
                            {
                                className: L.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': D.NW.formatToPlainString(D.t.WoiGra, { suggestion: p }),
                            children: [
                                m,
                                (0, r.jsx)(h.qJs, {
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
        [R.rtL.SEARCH_OPTIONS]: {
            titleText: () => D.NW.string(D.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(h.ua7, {
                    text: D.NW.string(D.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            U(W({ className: L.searchLearnMore }, e), {
                                children: (0, r.jsx)(h.eee, {
                                    href: A.Z.getArticleURL(R.BhN.USING_SEARCH),
                                    title: D.NW.string(D.t.hvVgAQ),
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
                    { result: n, onSelect: i, onFocus: a, showFilter: o, searchId: s } = e,
                    c = F(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = w.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    h.P3F,
                    U(
                        W(
                            {
                                className: l()(L.option, L.searchOption),
                                onClick: i,
                                onFocus: a
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
                                    className: l()({ [L.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(h.qJs, {
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
class X extends i.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: a } = e;
        null != i.filter && null == a.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === R.Sap.FILTER_ALL && a.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: i, searchId: a } = this.props;
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
            searchFavorites: a === R.I_8 && (0, k.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            M(this, 'state', {
                dateHint: (0, x.Pr)(),
                selectedIndex: -1
            }),
            M(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(R.b2L) + ' ', !0);
            }),
            M(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: i } = this.props,
                    { mode: a, autocompletes: l } = r,
                    { resultsState: o } = e;
                if (a.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== l.length)) {
                    let e = w.zV(o.autocompletes, o.mode.type)[t.selectedIndex],
                        n = w.zV(l, a.type).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1);
                }
            }),
            M(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            M(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            M(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                w.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            M(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery();
                t < -1 || (!r && t < 0) ? (t = w.BU(n) - 1) : r && t >= w.BU(n) ? (t = -1) : !r && t >= w.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            M(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (w.Fz(r.filter)) return;
                let i = w.zV(n, r.type);
                if (t >= i.length) return !1;
                let a = i[t],
                    l = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            u()(x.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(a);
                return this.setSearchQuery(a, l), !0;
            }),
            M(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: i } = t.props.resultsState,
                    a = 0;
                null != r.token ? (a = r.token.start) : (null == i ? void 0 : i.currentToken) != null && (a = i.currentToken.end);
                let l = null != r.token ? r.token.end : a;
                P.S.dispatch(R.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: a,
                    focus: l,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            M(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== R.Sap.FILTER && e.type !== R.Sap.EMPTY && !w.Fz(e.filter);
            }),
            M(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: L.datePicker,
                    children: [
                        (0, r.jsx)(G, {
                            onSelect: this.handleDateChange,
                            maxDate: p()().local(),
                            minDate: B
                        }),
                        (0, r.jsxs)('div', {
                            className: L.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: L.hint,
                                    children: [D.NW.string(D.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(h.P3F, {
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
            M(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            M(this, 'performSearch', (e) => {
                P.S.dispatch(R.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            M(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: i, mode: a } = this.props.resultsState;
                if (w.Fz(a.filter)) return this.renderDatePicker();
                let l = -1;
                return i.map((i) => {
                    var o, s, c;
                    let u, d;
                    if (null == i || 0 === i.results.length) return null;
                    let p = null != (o = Y[i.group]) ? o : {};
                    null != p.titleText &&
                        ((d = ''.concat(i.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: L.header,
                            children: p.titleText()
                        })));
                    let m = null != (s = p.groupTip) ? s : null,
                        f = null != m ? (0, r.jsx)(m, { searchId: n }) : null,
                        h = null != (c = p.component) ? c : z,
                        g = a.type === R.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: L.resultsGroup,
                            children: [
                                u,
                                f,
                                i.results.map((a) => {
                                    var o, s;
                                    if (null == a || null == i) return null;
                                    let c = e === (l += 1);
                                    return (0, r.jsx)(
                                        h,
                                        W(
                                            {
                                                searchId: n,
                                                group: null != (o = a.group) ? o : i.group,
                                                result: a,
                                                showFilter: g,
                                                onSelect: this.selectOption.bind(null, l),
                                                onFocus: this.focusOption.bind(null, l)
                                            },
                                            (0, _.M)(t, l, c)
                                        ),
                                        ''
                                            .concat(i.group, '-')
                                            .concat(a.text, '-')
                                            .concat(null != (s = a.key) ? s : '')
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
let q = i.forwardRef((e, t) => {
    let [n, i, a] = (0, f.Wu)([I.Z, C.Z, j.Z], () => {
        let e = I.Z.getGuildId(),
            t = C.Z.getChannelId(),
            n = null != e ? e : t;
        s()(null != n, 'SearchPopout.getStateFromStores - invalid searchId');
        let r = j.Z.getState(n),
            i = w.BU(r.autocompletes);
        return [n, r, i];
    });
    return (0, r.jsx)(
        X,
        U(W({}, e), {
            searchId: n,
            resultsState: i,
            totalResults: a,
            ref: t
        })
    );
});
