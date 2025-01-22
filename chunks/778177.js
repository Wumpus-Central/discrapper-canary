n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(913527),
    m = n.n(d),
    h = n(608787),
    f = n(442837),
    p = n(481060),
    _ = n(603263),
    g = n(542051),
    E = n(349033),
    C = n(999650),
    I = n(933557),
    x = n(471445),
    N = n(592125),
    v = n(271383),
    T = n(699516),
    S = n(250758),
    A = n(944486),
    b = n(914010),
    j = n(246946),
    R = n(594174),
    Z = n(585483),
    P = n(63063),
    L = n(405656),
    y = n(51144),
    O = n(854709),
    M = n(981631),
    D = n(388032),
    k = n(58188);
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
let B = m()('2015-05-15').local(),
    w = (0, h.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    F = (e, t, n) => {
        var r, l, a;
        let { user: o, text: s } = n;
        if (null == o) return (0, i.jsx)('strong', { children: s });
        let c = R.default.getUser(o.id),
            u = N.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? T.Z.getNickname(o.id) : null,
            m = null !== (l = null !== (r = v.ZP.getNick(e, o.id)) && void 0 !== r ? r : d) && void 0 !== l ? l : y.ZP.getName(o),
            h = null !== (a = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== a ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, i.jsx)(
                'img',
                {
                    alt: '',
                    className: k.displayAvatar,
                    src: h
                },
                'avatar-'.concat(t, '-').concat(o.id)
            ),
            (0, i.jsx)(
                'span',
                {
                    className: k.displayedNick,
                    children: m
                },
                'display-nick-'.concat(t, '-').concat(o.id)
            ),
            (0, i.jsx)(
                'span',
                {
                    className: k.displayUsername,
                    children: y.ZP.getUserTag(o, { identifiable: j.Z.enabled && j.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(o.id)
            )
        ];
    },
    G = (e, t, n) => {
        let { channel: r, text: l } = n;
        if (null == r) return (0, i.jsx)('strong', { children: l });
        let a = N.Z.getChannel(r.parent_id),
            o = (0, x.KS)(r);
        return (0, i.jsxs)('div', {
            className: k.resultChannel,
            children: [
                null != o ? (0, i.jsx)(o, { className: k.searchResultChannelIcon }) : null,
                (0, i.jsx)('strong', { children: (0, I.F6)(r, R.default, T.Z) }),
                null != a
                    ? (0, i.jsx)('span', {
                          className: k.searchResultChannelCategory,
                          children: (0, I.F6)(a, R.default, T.Z)
                      })
                    : null
            ]
        });
    },
    V = (e) => {
        let t,
            n,
            { id: r, searchId: l, result: o, group: s, className: c, role: u, tabIndex: d, 'aria-selected': m, onSelect: h, onFocus: f, showFilter: _, renderResult: g } = e;
        if (_) {
            var E, I;
            t = (0, i.jsx)('span', {
                className: k.filter,
                children: null !== (I = null === (E = C.ZP[s]) || void 0 === E ? void 0 : E.key) && void 0 !== I ? I : 'addme:'
            });
        }
        return (
            (n = null != g ? g(l, s, o) : (0, i.jsx)('strong', { children: o.text })),
            (0, i.jsxs)(p.Clickable, {
                tag: 'li',
                className: a()(k.option, c),
                onClick: h,
                onFocus: f,
                id: r,
                role: u,
                tabIndex: d,
                'aria-selected': m,
                children: [
                    (0, i.jsxs)('div', {
                        className: k.content,
                        children: [t, n]
                    }),
                    (0, i.jsx)(p.PlusSmallIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: k.plusIcon
                    })
                ]
            })
        );
    },
    H = (e) =>
        (0, i.jsx)(V, {
            ...e,
            className: k.user,
            renderResult: F
        }),
    z = {
        [M.dCx.FILTER_FROM]: {
            titleText: () => D.intl.string(D.t.catERE),
            component: H
        },
        [M.dCx.FILTER_MENTIONS]: {
            titleText: () => D.intl.string(D.t.l3K4Bw),
            component: H
        },
        [M.dCx.FILTER_HAS]: { titleText: () => D.intl.string(D.t.IC7gHB) },
        [M.dCx.FILTER_FILE_TYPE]: { titleText: () => D.intl.string(D.t.SXIfV1) },
        [M.dCx.FILTER_IN]: {
            titleText: () => D.intl.string(D.t.vHyCgo),
            component: (e) =>
                (0, i.jsx)(V, {
                    ...e,
                    renderResult: G
                })
        },
        [M.rtL.DATES]: { titleText: () => D.intl.string(D.t.UiL5e3) },
        [M.rtL.HISTORY]: {
            titleText: () => D.intl.string(D.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, i.jsx)(p.Tooltip, {
                    text: D.intl.string(D.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: r } = e;
                        return (0, i.jsx)(p.Clickable, {
                            onClick: () => (0, _.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: r,
                            className: k.searchClearHistory,
                            title: D.intl.string(D.t.dwAvX1),
                            'aria-label': D.intl.string(D.t.dwAvX1),
                            children: (0, i.jsx)(p.TrashIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                let { onSelect: t, onFocus: n, result: l, showFilter: o, searchId: s, renderResult: c, group: u, ...d } = e,
                    m = '',
                    h = r
                        .useMemo(() => {
                            var e;
                            return (e = l.text), L.kG(e).map((e, t, n) => (L.Fr(e, n[t + 1]) ? e : new E.WU(e.getFullMatch(), E.Xe)));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = M.TNx.test(e.type),
                                r = M.KA4.test(e.type);
                            return (
                                (m += t),
                                (0, i.jsx)(
                                    'span',
                                    {
                                        className: a()(k.searchHistoryRow, {
                                            [k.filter]: n,
                                            [k.answer]: r,
                                            [k.nonText]: !n && !r
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, i.jsxs)(p.Clickable, {
                    className: a()(k.option),
                    onClick: t,
                    onFocus: n,
                    ...d,
                    'aria-label': D.intl.formatToPlainString(D.t.WoiGra, { suggestion: m }),
                    children: [
                        h,
                        (0, i.jsx)(p.PlusSmallIcon, {
                            size: 'sm',
                            color: 'currentColor',
                            className: k.plusIcon
                        })
                    ]
                });
            }
        },
        [M.rtL.SEARCH_OPTIONS]: {
            titleText: () => D.intl.string(D.t['8Zkyw8']),
            groupTip: () =>
                (0, i.jsx)(p.Tooltip, {
                    text: D.intl.string(D.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: k.searchLearnMore,
                            ...e,
                            children: (0, i.jsx)(p.Anchor, {
                                href: P.Z.getArticleURL(M.BhN.USING_SEARCH),
                                title: D.intl.string(D.t.hvVgAQ),
                                children: (0, i.jsx)(p.CircleQuestionIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                        })
                }),
            component: function (e) {
                var t;
                let { result: n, onSelect: r, onFocus: l, showFilter: o, searchId: s, ...c } = e,
                    u = L.Ko(null !== (t = n.token) && void 0 !== t ? t : '');
                return (0, i.jsxs)(p.Clickable, {
                    className: a()(k.option, k.searchOption),
                    onClick: r,
                    onFocus: l,
                    ...c,
                    children: [
                        (0, i.jsx)('span', {
                            className: k.filter,
                            children: n.text
                        }),
                        (0, i.jsx)('span', {
                            className: a()({ [k.answer]: u }),
                            children: u
                        }),
                        (0, i.jsx)(p.PlusSmallIcon, {
                            size: 'sm',
                            color: 'currentColor',
                            className: k.plusIcon
                        })
                    ]
                });
            }
        }
    };
class W extends r.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: i } = this.props,
            { mode: r } = n,
            { resultsState: l } = e;
        null != r.filter && null == l.mode.filter && i > 0 ? this.setSelectedIndex(0) : r.type === M.Sap.FILTER_ALL && l.mode.type !== r.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: r, searchId: l } = this.props;
        return (0, i.jsx)(g.Z, {
            numResults: r,
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
            searchFavorites: l === M.I_8 && (0, O.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            U(this, 'state', {
                dateHint: (0, C.Pr)(),
                selectedIndex: -1
            }),
            U(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(M.b2L) + ' ', !0);
            }),
            U(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: i, totalResults: r } = this.props,
                    { mode: l, autocompletes: a } = i,
                    { resultsState: o } = e;
                if (l.type !== o.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
                    let e = L.zV(o.autocompletes, o.mode.type)[t.selectedIndex - 1],
                        n = L.zV(a, l.type).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= r && this.setSelectedIndex(r - 1);
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
                if (!L.Fz(n.mode.filter)) this.focusOption(t + e);
            }),
            U(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    i = this.shouldShowSearchQuery();
                t < -1 || (!i && t < 0) ? (t = L.BU(n) - 1) : i && t >= L.BU(n) ? (t = -1) : !i && t >= L.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            U(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: i } = this.props.resultsState;
                if (L.Fz(i.filter)) return;
                let r = L.zV(n, i.type);
                if (t >= r.length) return !1;
                let l = r[t],
                    a = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            u()(C.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(l);
                return this.setSearchQuery(l, a), !0;
            }),
            U(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: i, cursorScope: r } = t.props.resultsState,
                    l = 0;
                null != i.token ? (l = i.token.start) : (null == r ? void 0 : r.currentToken) != null && (l = r.currentToken.end);
                let a = null != i.token ? i.token.end : l;
                Z.S.dispatch(M.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            U(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== M.Sap.FILTER && e.type !== M.Sap.EMPTY && !L.Fz(e.filter);
            }),
            U(this, 'renderDatePicker', () =>
                (0, i.jsxs)('div', {
                    className: k.datePicker,
                    children: [
                        (0, i.jsx)(w, {
                            onSelect: this.handleDateChange,
                            maxDate: m()().local(),
                            minDate: B
                        }),
                        (0, i.jsxs)('div', {
                            className: k.datePickerHint,
                            children: [
                                (0, i.jsxs)('span', {
                                    className: k.hint,
                                    children: [D.intl.string(D.t.fmtCi4), '\xA0']
                                }),
                                (0, i.jsx)(p.Clickable, {
                                    tag: 'span',
                                    className: k.hintValue,
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
                Z.S.dispatch(M.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            U(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: r, mode: l } = this.props.resultsState;
                if (L.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return r.map((r) => {
                    var o, s, c;
                    let u, d;
                    if (null == r || 0 === r.results.length) return null;
                    let m = null !== (o = z[r.group]) && void 0 !== o ? o : {};
                    null != m.titleText &&
                        ((d = ''.concat(r.group, '-header')),
                        (u = (0, i.jsx)('div', {
                            id: d,
                            className: k.header,
                            children: m.titleText()
                        })));
                    let h = null !== (s = m.groupTip) && void 0 !== s ? s : null,
                        f = null != h ? (0, i.jsx)(h, { searchId: n }) : null,
                        p = null !== (c = m.component) && void 0 !== c ? c : V,
                        _ = l.type === M.Sap.FILTER_ALL;
                    return (0, i.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: k.resultsGroup,
                            children: [
                                u,
                                f,
                                r.results.map((l) => {
                                    var o, s;
                                    if (null == l || null == r) return null;
                                    let c = e === (a += 1);
                                    return (0, i.jsx)(
                                        p,
                                        {
                                            searchId: n,
                                            group: null !== (o = l.group) && void 0 !== o ? o : r.group,
                                            result: l,
                                            showFilter: _,
                                            onSelect: this.selectOption.bind(null, a),
                                            onFocus: this.focusOption.bind(null, a),
                                            ...(0, g.M)(t, a, c)
                                        },
                                        ''
                                            .concat(r.group, '-')
                                            .concat(l.text, '-')
                                            .concat(null !== (s = l.key) && void 0 !== s ? s : '')
                                    );
                                })
                            ]
                        },
                        r.group
                    );
                });
            });
    }
}
t.ZP = r.forwardRef((e, t) => {
    let [n, r, l] = (0, f.Wu)([b.Z, A.Z, S.Z], () => {
        let e = b.Z.getGuildId(),
            t = A.Z.getChannelId(),
            n = null != e ? e : t;
        s()(null != n, 'SearchPopout.getStateFromStores - invalid searchId');
        let i = S.Z.getState(n),
            r = L.BU(i.autocompletes);
        return [n, i, r];
    });
    return (0, i.jsx)(W, {
        ...e,
        searchId: n,
        resultsState: r,
        totalResults: l,
        ref: t
    });
});
