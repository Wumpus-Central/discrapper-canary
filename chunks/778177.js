(n.d(t, { ZP: () => ee }), n(781311), n(35282), n(388685));
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
    _ = n(542051),
    S = n(349033),
    y = n(999650),
    b = n(778877),
    x = n(592125),
    E = n(271383),
    C = n(699516),
    O = n(250758),
    v = n(768119),
    I = n(944486),
    j = n(914010),
    R = n(246946),
    T = n(594174),
    P = n(585483),
    N = n(63063),
    A = n(405656),
    Z = n(51144),
    k = n(854709),
    M = n(652399),
    L = n(14091),
    w = n(579612),
    F = n(723642),
    D = n(981631),
    H = n(388032),
    B = n(290082);
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
                U(e, t, n[t]);
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
    z = (0, p.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    K = (e, t, n) => {
        var s, l, a;
        let { user: i, text: o } = n;
        if (null == i) return (0, r.jsx)('strong', { children: o });
        let c = T.default.getUser(i.id),
            u = x.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(i.id) : null,
            h = null != (l = null != (s = E.ZP.getNick(e, i.id)) ? s : d) ? l : Z.ZP.getName(i),
            p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : i.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: B.displayAvatar,
                    src: p
                },
                'avatar-'.concat(t, '-').concat(i.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: B.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(i.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: B.displayUsername,
                    children: Z.ZP.getUserTag(i, { identifiable: R.Z.enabled && R.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(i.id)
            )
        ];
    },
    V = (e, t, n) => {
        let { channel: s, text: l } = n;
        return null == s
            ? (0, r.jsx)('strong', { children: l })
            : (0, r.jsxs)('div', {
                  className: B.resultChannel,
                  children: [(0, r.jsx)(w.MC, { channel: s }), (0, r.jsx)(w.GQ, { channel: s }), (0, r.jsx)(w.P, { channel: s })]
              });
    },
    Y = (e) => {
        let t,
            n,
            { id: s, searchId: l, result: i, group: o, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: p, onFocus: f, showFilter: m, renderResult: _ } = e;
        if (m) {
            var S, b;
            t = (0, r.jsx)('span', {
                className: B.filter,
                children: null != (b = null == (S = y.ZP[o]) ? void 0 : S.key) ? b : 'addme:'
            });
        }
        return (
            (n = null != _ ? _(l, o, i) : (0, r.jsx)('strong', { children: i.text })),
            (0, r.jsxs)(g.P3F, {
                tag: 'li',
                className: a()(B.option, c),
                onClick: p,
                onFocus: f,
                id: s,
                role: u,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    (0, r.jsxs)('div', {
                        className: B.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(g.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: B.plusIcon
                    })
                ]
            })
        );
    },
    J = (e) =>
        (0, r.jsx)(
            Y,
            G(W({}, e), {
                className: B.user,
                renderResult: K
            })
        ),
    X = {
        [D.dCx.FILTER_FROM]: {
            titleText: () => H.intl.string(H.t.catERE),
            component: J
        },
        [D.dCx.FILTER_MENTIONS]: {
            titleText: () => H.intl.string(H.t.l3K4Bw),
            component: J
        },
        [D.dCx.FILTER_HAS]: { titleText: () => H.intl.string(H.t.IC7gHB) },
        [D.dCx.FILTER_FILE_TYPE]: { titleText: () => H.intl.string(H.t.SXIfV1) },
        [D.dCx.FILTER_IN]: {
            titleText: () => H.intl.string(H.t.vHyCgo),
            component: (e) => (0, r.jsx)(Y, G(W({}, e), { renderResult: V }))
        },
        [D.rtL.DATES]: { titleText: () => H.intl.string(H.t.UiL5e3) },
        [D.rtL.HISTORY]: {
            titleText: () => H.intl.string(H.t.tSZd5e),
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(g.ua7, {
                    text: H.intl.string(H.t.dwAvX1),
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: s } = e;
                        return (0, r.jsx)(g.P3F, {
                            onClick: () => (0, m.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: s,
                            className: B.searchClearHistory,
                            title: H.intl.string(H.t.dwAvX1),
                            'aria-label': H.intl.string(H.t.dwAvX1),
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
                    d = q(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchId', 'renderResult', 'group']);
                let h = '',
                    p = s
                        .useMemo(() => {
                            var e;
                            return ((e = l.text), A.kG(e).map((e, t, n) => (A.Fr(e, n[t + 1]) ? e : new S.WU(e.getFullMatch(), S.Xe))));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = D.TNx.test(e.type),
                                s = D.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: a()(B.searchHistoryRow, {
                                            [B.filter]: n,
                                            [B.answer]: s,
                                            [B.nonText]: !n && !s
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
                        W(
                            {
                                className: B.option,
                                onClick: t,
                                onFocus: n
                            },
                            d
                        ),
                        {
                            'aria-label': H.intl.formatToPlainString(H.t.WoiGra, { suggestion: h }),
                            children: [
                                p,
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: B.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        },
        [D.rtL.SEARCH_OPTIONS]: {
            titleText: () => H.intl.string(H.t['8Zkyw8']),
            groupTip: () =>
                (0, r.jsx)(g.ua7, {
                    text: H.intl.string(H.t.hvVgAQ),
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)(
                            'div',
                            G(W({ className: B.searchLearnMore }, e), {
                                children: (0, r.jsx)(g.eee, {
                                    href: N.Z.getArticleURL(D.BhN.USING_SEARCH),
                                    title: H.intl.string(H.t.hvVgAQ),
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
                    c = q(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchId']);
                let u = A.Ko(null != (t = n.token) ? t : '');
                return (0, r.jsxs)(
                    g.P3F,
                    G(
                        W(
                            {
                                className: a()(B.option, B.searchOption),
                                onClick: s,
                                onFocus: l
                            },
                            c
                        ),
                        {
                            children: [
                                (0, r.jsx)('span', {
                                    className: B.filter,
                                    children: n.text
                                }),
                                (0, r.jsx)('span', {
                                    className: a()({ [B.answer]: u }),
                                    children: u
                                }),
                                (0, r.jsx)(g.qJs, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: B.plusIcon
                                })
                            ]
                        }
                    )
                );
            }
        }
    };
class $ extends s.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: s } = n,
            { resultsState: l } = e;
        null != s.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : s.type === D.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: s, searchId: l, channel: a } = this.props;
        return (0, r.jsx)(_.Z, {
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
            searchFavorites: l === D.I_8 && (0, k.X)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: a,
            onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({ searchAutocompleteSelectAction: F.Z.CLICK })
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            U(this, 'state', {
                dateHint: (0, y.Pr)(),
                selectedIndex: -1
            }),
            U(this, 'handleDateChange', (e) => {
                ((0, M.bh)({
                    searchId: this.props.searchId,
                    searchQuery: v.Z.getQuery(this.props.searchId),
                    searchQueryString: (0, L.$)(this.props.searchId),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: D.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: F.Z.CLICK
                }),
                    this.setSearchQuery(e.format(D.b2L) + ' ', !0));
            }),
            U(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: s } = this.props,
                    { mode: l, autocompletes: a } = r,
                    { resultsState: i } = e;
                if (l.type !== i.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || i.autocompletes.length !== a.length)) {
                    let e = A.i3(i.autocompletes, i.mode)[t.selectedIndex],
                        n = A.i3(a, l).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1);
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
                A.Fz(n.mode.filter) || this.focusOption(t + e);
            }),
            U(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    s = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!r && !s && t < 0) ? (t = A.BU(n) - 1) : (r || s) && t >= A.BU(n) ? (t = -1) : !r && t >= A.BU(n) && (t = 0), this.setSelectedIndex(t));
            }),
            U(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                if ((null == r && (r = this.state.selectedIndex), r < 0)) return !1;
                let { autocompletes: s, mode: l } = this.props.resultsState;
                if (A.Fz(l.filter)) return;
                let a = A.i3(s, l);
                if (r >= a.length) return !1;
                let i = a[r],
                    o = a.length;
                if (i.group === D.rtL.HISTORY) {
                    let e = s.find((e) => (null == e ? void 0 : e.group) === D.rtL.HISTORY);
                    if (null != e) {
                        let t = r - (o - e.results.length);
                        (0, M.$z)({
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
                        p = u === D.dCx.FILTER_IN && null != h && h.id === I.Z.getChannelId();
                    (0, M.bh)({
                        searchId: this.props.searchId,
                        searchQuery: v.Z.getQuery(this.props.searchId),
                        searchQueryString: (0, L.$)(this.props.searchId),
                        searchTokenType: u,
                        searchAutocompleteGroup: null != (d = i.group) ? d : l,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: o,
                        isSearchFilterPrefix: e === D.Sap.EMPTY,
                        isSearchFilterAnswer: e === D.Sap.FILTER,
                        isSearchFilterComplete: e === D.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: n
                    });
                }
                let h = (function (e) {
                    let t = !0,
                        n = e.trim();
                    return (
                        u()(y.ZP).forOwn((e) => {
                            '' !== e.key && null != e.key && n === e.key && (t = !1);
                        }),
                        t
                    );
                })(i.resultText);
                return (this.setSearchQuery(i.resultText, h), !0);
            }),
            U(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: s } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
                let a = null != r.token ? r.token.end : l;
                (P.S.dispatch(D.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: a,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            U(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== D.Sap.FILTER && e.type !== D.Sap.EMPTY && !A.Fz(e.filter);
            }),
            U(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchId: e,
                    resultsState: { mode: t }
                } = this.props;
                return e === D.aib.DMS && (0, A.R6)(e) && t.type === D.Sap.EMPTY && !A.Fz(t.filter);
            }),
            U(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: n } = e,
                    { channel: r, searchId: s } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == r) return !1;
                (0, M.tA)({
                    searchId: s,
                    searchAutocompleteSelectAction: n
                });
                let l = D.dCx.FILTER_IN,
                    a = y.ZP[l],
                    i = (0, A.X3)(r),
                    o = ''.concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), ' ').concat(i);
                return (this.setSearchQuery(o, !0), !0);
            }),
            U(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: B.datePicker,
                    children: [
                        (0, r.jsx)(z, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: Q
                        }),
                        (0, r.jsxs)('div', {
                            className: B.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: B.hint,
                                    children: [H.intl.string(H.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(g.P3F, {
                                    tag: 'span',
                                    className: B.hintValue,
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
                P.S.dispatch(D.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            U(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: s, mode: l } = this.props.resultsState;
                if (A.Fz(l.filter)) return this.renderDatePicker();
                let a = -1;
                return s.map((s) => {
                    var i, o, c;
                    let u, d;
                    if (null == s || 0 === s.results.length) return null;
                    let h = null != (i = X[s.group]) ? i : {};
                    null != h.titleText &&
                        ((d = ''.concat(s.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: B.header,
                            children: h.titleText()
                        })));
                    let p = null != (o = h.groupTip) ? o : null,
                        f = null != p ? (0, r.jsx)(p, { searchId: n }) : null,
                        g = null != (c = h.component) ? c : Y,
                        m = l.type === D.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: B.resultsGroup,
                            children: [
                                u,
                                f,
                                s.results.map((l) => {
                                    var i, o;
                                    if (null == l || null == s) return null;
                                    let c = e === (a += 1);
                                    return (0, r.jsx)(
                                        g,
                                        W(
                                            {
                                                searchId: n,
                                                group: null != (i = l.group) ? i : s.group,
                                                result: l,
                                                showFilter: m,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: a,
                                                    searchAutocompleteSelectAction: F.Z.CLICK
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
let ee = s.forwardRef((e, t) => {
    let n = (0, b.U)({ location: 'SearchPopout' }),
        [s, l, a, i] = (0, f.Wu)([j.Z, I.Z, O.Z, x.Z], () => {
            let e = j.Z.getGuildId(),
                t = I.Z.getChannelId(),
                r = x.Z.getChannel(t),
                s = null != e ? e : n ? D.aib.DMS : t;
            o()(null != s, 'SearchPopout.getStateFromStores - invalid searchId');
            let l = O.Z.getState(s),
                a = A.BU(l.autocompletes);
            return [s, l, a, r];
        });
    return (0, r.jsx)(
        $,
        G(W({}, e), {
            searchId: s,
            resultsState: l,
            totalResults: a,
            ref: t,
            channel: i
        })
    );
});
