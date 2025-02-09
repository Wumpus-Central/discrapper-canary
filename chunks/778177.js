n.d(t, { ZP: () => K }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(913527),
    m = n.n(u),
    _ = n(608787),
    h = n(442837),
    p = n(481060),
    g = n(603263),
    f = n(542051),
    x = n(349033),
    C = n(999650),
    v = n(933557),
    E = n(471445),
    I = n(592125),
    N = n(271383),
    S = n(699516),
    T = n(250758),
    b = n(944486),
    A = n(914010),
    j = n(246946),
    y = n(594174),
    Z = n(585483),
    R = n(63063),
    L = n(405656),
    P = n(51144),
    k = n(854709),
    M = n(981631),
    O = n(388032),
    D = n(891002);
function w(e, t, n) {
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
let F = m()('2015-05-15').local(),
    U = (0, _.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    B = (e, t, n) => {
        var l, a, r;
        let { user: s, text: o } = n;
        if (null == s) return (0, i.jsx)('strong', { children: o });
        let c = y.default.getUser(s.id),
            d = I.Z.getChannel(e),
            u = (null == d ? void 0 : d.isPrivate()) ? S.Z.getNickname(s.id) : null,
            m = null !== (a = null !== (l = N.ZP.getNick(e, s.id)) && void 0 !== l ? l : u) && void 0 !== a ? a : P.ZP.getName(s),
            _ = null !== (r = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== r ? r : s.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
        return [
            (0, i.jsx)(
                'img',
                {
                    alt: '',
                    className: D.displayAvatar,
                    src: _
                },
                'avatar-'.concat(t, '-').concat(s.id)
            ),
            (0, i.jsx)(
                'span',
                {
                    className: D.displayedNick,
                    children: m
                },
                'display-nick-'.concat(t, '-').concat(s.id)
            ),
            (0, i.jsx)(
                'span',
                {
                    className: D.displayUsername,
                    children: P.ZP.getUserTag(s, { identifiable: j.Z.enabled && j.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(s.id)
            )
        ];
    },
    G = (e, t, n) => {
        let { channel: l, text: a } = n;
        if (null == l) return (0, i.jsx)('strong', { children: a });
        let r = I.Z.getChannel(l.parent_id),
            s = (0, E.KS)(l);
        return (0, i.jsxs)('div', {
            className: D.resultChannel,
            children: [
                null != s ? (0, i.jsx)(s, { className: D.searchResultChannelIcon }) : null,
                (0, i.jsx)('strong', { children: (0, v.F6)(l, y.default, S.Z) }),
                null != r
                    ? (0, i.jsx)('span', {
                          className: D.searchResultChannelCategory,
                          children: (0, v.F6)(r, y.default, S.Z)
                      })
                    : null
            ]
        });
    },
    H = (e) => {
        let t,
            n,
            { id: l, searchId: a, result: s, group: o, className: c, role: d, tabIndex: u, 'aria-selected': m, onSelect: _, onFocus: h, showFilter: g, renderResult: f } = e;
        if (g) {
            var x, v;
            t = (0, i.jsx)('span', {
                className: D.filter,
                children: null !== (v = null === (x = C.ZP[o]) || void 0 === x ? void 0 : x.key) && void 0 !== v ? v : 'addme:'
            });
        }
        return (
            (n = null != f ? f(a, o, s) : (0, i.jsx)('strong', { children: s.text })),
            (0, i.jsxs)(p.P3F, {
                tag: 'li',
                className: r()(D.option, c),
                onClick: _,
                onFocus: h,
                id: l,
                role: d,
                tabIndex: u,
                'aria-selected': m,
                children: [
                    (0, i.jsxs)('div', {
                        className: D.content,
                        children: [t, n]
                    }),
                    (0, i.jsx)(p.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: D.plusIcon
                    })
                ]
            })
        );
    },
    V = (e) =>
        (0, i.jsx)(H, {
            ...e,
            className: D.user,
            renderResult: B
        }),
    z = {
        [M.dCx.FILTER_FROM]: {
            titleText: () => O.intl.string(O.t.catERE),
            component: V
        },
        [M.dCx.FILTER_MENTIONS]: {
            titleText: () => O.intl.string(O.t.l3K4Bw),
            component: V
        },
        [M.dCx.FILTER_HAS]: { titleText: () => O.intl.string(O.t.IC7gHB) },
        [M.dCx.FILTER_FILE_TYPE]: { titleText: () => O.intl.string(O.t.SXIfV1) },
        [M.dCx.FILTER_IN]: {
            titleText: () => O.intl.string(O.t.vHyCgo),
            component: (e) =>
                (0, i.jsx)(H, {
                    ...e,
                    renderResult: G
                })
        },
        [M.rtL.DATES]: { titleText: () => O.intl.string(O.t.UiL5e3) },
        [M.rtL.HISTORY]: {
            titleText: () => O.intl.string(O.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, i.jsx)(p.ua7, {
                    text: O.intl.string(O.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: l } = e;
                        return (0, i.jsx)(p.P3F, {
                            onClick: () => (0, g.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: l,
                            className: D.searchClearHistory,
                            title: O.intl.string(O.t.dwAvX1),
                            'aria-label': O.intl.string(O.t.dwAvX1),
                            children: (0, i.jsx)(p.XHJ, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                let { onSelect: t, onFocus: n, result: a, showFilter: s, searchId: o, renderResult: c, group: d, ...u } = e,
                    m = '',
                    _ = l
                        .useMemo(() => {
                            var e;
                            return (e = a.text), L.kG(e).map((e, t, n) => (L.Fr(e, n[t + 1]) ? e : new x.WU(e.getFullMatch(), x.Xe)));
                        }, [a.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = M.TNx.test(e.type),
                                l = M.KA4.test(e.type);
                            return (
                                (m += t),
                                (0, i.jsx)(
                                    'span',
                                    {
                                        className: r()(D.searchHistoryRow, {
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
                return (0, i.jsxs)(p.P3F, {
                    className: r()(D.option),
                    onClick: t,
                    onFocus: n,
                    ...u,
                    'aria-label': O.intl.formatToPlainString(O.t.WoiGra, { suggestion: m }),
                    children: [
                        _,
                        (0, i.jsx)(p.qJs, {
                            size: 'sm',
                            color: 'currentColor',
                            className: D.plusIcon
                        })
                    ]
                });
            }
        },
        [M.rtL.SEARCH_OPTIONS]: {
            titleText: () => O.intl.string(O.t['8Zkyw8']),
            groupTip: () =>
                (0, i.jsx)(p.ua7, {
                    text: O.intl.string(O.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: D.searchLearnMore,
                            ...e,
                            children: (0, i.jsx)(p.eee, {
                                href: R.Z.getArticleURL(M.BhN.USING_SEARCH),
                                title: O.intl.string(O.t.hvVgAQ),
                                children: (0, i.jsx)(p.idN, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                        })
                }),
            component: function (e) {
                var t;
                let { result: n, onSelect: l, onFocus: a, showFilter: s, searchId: o, ...c } = e,
                    d = L.Ko(null !== (t = n.token) && void 0 !== t ? t : '');
                return (0, i.jsxs)(p.P3F, {
                    className: r()(D.option, D.searchOption),
                    onClick: l,
                    onFocus: a,
                    ...c,
                    children: [
                        (0, i.jsx)('span', {
                            className: D.filter,
                            children: n.text
                        }),
                        (0, i.jsx)('span', {
                            className: r()({ [D.answer]: d }),
                            children: d
                        }),
                        (0, i.jsx)(p.qJs, {
                            size: 'sm',
                            color: 'currentColor',
                            className: D.plusIcon
                        })
                    ]
                });
            }
        }
    };
class W extends l.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: i } = this.props,
            { mode: l } = n,
            { resultsState: a } = e;
        null != l.filter && null == a.mode.filter && i > 0 ? this.setSelectedIndex(0) : l.type === M.Sap.FILTER_ALL && a.mode.type !== l.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: l, searchId: a } = this.props;
        return (0, i.jsx)(f.Z, {
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
            searchFavorites: a === M.I_8 && (0, k.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            w(this, 'state', {
                dateHint: (0, C.Pr)(),
                selectedIndex: -1
            }),
            w(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(M.b2L) + ' ', !0);
            }),
            w(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: i, totalResults: l } = this.props,
                    { mode: a, autocompletes: r } = i,
                    { resultsState: s } = e;
                if (a.type !== s.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || s.autocompletes.length !== r.length)) {
                    let e = L.zV(s.autocompletes, s.mode.type)[t.selectedIndex],
                        n = L.zV(r, a.type).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= l && this.setSelectedIndex(l - 1);
                }
            }),
            w(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            w(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            w(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                !L.Fz(n.mode.filter) && this.focusOption(t + e);
            }),
            w(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    i = this.shouldShowSearchQuery();
                t < -1 || (!i && t < 0) ? (t = L.BU(n) - 1) : i && t >= L.BU(n) ? (t = -1) : !i && t >= L.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            w(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: i } = this.props.resultsState;
                if (L.Fz(i.filter)) return;
                let l = L.zV(n, i.type);
                if (t >= l.length) return !1;
                let a = l[t],
                    r = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            d()(C.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(a);
                return this.setSearchQuery(a, r), !0;
            }),
            w(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: i, cursorScope: l } = t.props.resultsState,
                    a = 0;
                null != i.token ? (a = i.token.start) : (null == l ? void 0 : l.currentToken) != null && (a = l.currentToken.end);
                let r = null != i.token ? i.token.end : a;
                Z.S.dispatch(M.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: a,
                    focus: r,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            w(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== M.Sap.FILTER && e.type !== M.Sap.EMPTY && !L.Fz(e.filter);
            }),
            w(this, 'renderDatePicker', () =>
                (0, i.jsxs)('div', {
                    className: D.datePicker,
                    children: [
                        (0, i.jsx)(U, {
                            onSelect: this.handleDateChange,
                            maxDate: m()().local(),
                            minDate: F
                        }),
                        (0, i.jsxs)('div', {
                            className: D.datePickerHint,
                            children: [
                                (0, i.jsxs)('span', {
                                    className: D.hint,
                                    children: [O.intl.string(O.t.fmtCi4), '\xA0']
                                }),
                                (0, i.jsx)(p.P3F, {
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
            w(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            w(this, 'performSearch', (e) => {
                Z.S.dispatch(M.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            w(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: l, mode: a } = this.props.resultsState;
                if (L.Fz(a.filter)) return this.renderDatePicker();
                let r = -1;
                return l.map((l) => {
                    var s, o, c;
                    let d, u;
                    if (null == l || 0 === l.results.length) return null;
                    let m = null !== (s = z[l.group]) && void 0 !== s ? s : {};
                    null != m.titleText &&
                        ((u = ''.concat(l.group, '-header')),
                        (d = (0, i.jsx)('div', {
                            id: u,
                            className: D.header,
                            children: m.titleText()
                        })));
                    let _ = null !== (o = m.groupTip) && void 0 !== o ? o : null,
                        h = null != _ ? (0, i.jsx)(_, { searchId: n }) : null,
                        p = null !== (c = m.component) && void 0 !== c ? c : H,
                        g = a.type === M.Sap.FILTER_ALL;
                    return (0, i.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': u,
                            className: D.resultsGroup,
                            children: [
                                d,
                                h,
                                l.results.map((a) => {
                                    var s, o;
                                    if (null == a || null == l) return null;
                                    let c = e === (r += 1);
                                    return (0, i.jsx)(
                                        p,
                                        {
                                            searchId: n,
                                            group: null !== (s = a.group) && void 0 !== s ? s : l.group,
                                            result: a,
                                            showFilter: g,
                                            onSelect: this.selectOption.bind(null, r),
                                            onFocus: this.focusOption.bind(null, r),
                                            ...(0, f.M)(t, r, c)
                                        },
                                        ''
                                            .concat(l.group, '-')
                                            .concat(a.text, '-')
                                            .concat(null !== (o = a.key) && void 0 !== o ? o : '')
                                    );
                                })
                            ]
                        },
                        l.group
                    );
                });
            });
    }
}
let K = l.forwardRef((e, t) => {
    let [n, l, a] = (0, h.Wu)([A.Z, b.Z, T.Z], () => {
        let e = A.Z.getGuildId(),
            t = b.Z.getChannelId(),
            n = null != e ? e : t;
        o()(null != n, 'SearchPopout.getStateFromStores - invalid searchId');
        let i = T.Z.getState(n),
            l = L.BU(i.autocompletes);
        return [n, i, l];
    });
    return (0, i.jsx)(W, {
        ...e,
        searchId: n,
        resultsState: l,
        totalResults: a,
        ref: t
    });
});
