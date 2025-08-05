(n.d(t, { ZP: () => et }), n(781311), n(35282), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(608787),
    f = n(442837),
    _ = n(481060),
    p = n(542051),
    h = n(349033),
    m = n(592125),
    g = n(271383),
    E = n(699516),
    b = n(944486),
    y = n(246946),
    O = n(594174),
    v = n(585483),
    I = n(63063),
    T = n(51144),
    S = n(748610),
    A = n(738018),
    N = n(518944),
    C = n(607802),
    w = n(532428),
    R = n(14091),
    P = n(579612),
    D = n(315322),
    L = n(723642),
    x = n(981631),
    k = n(388032),
    j = n(290082);
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
                M(e, t, n[t]);
            }));
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let V = u()('2015-05-15').local(),
    H = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    });
function Y(e) {
    let t = !0,
        n = e.trim();
    return (
        l()(w.ZP).forOwn((e) => {
            '' !== e.key && null != e.key && n === e.key && (t = !1);
        }),
        t
    );
}
let W = (e, t, n) => {
        var i, a, o;
        let { user: s, text: l } = n;
        if (null == s) return (0, r.jsx)('strong', { children: l });
        let c = O.default.getUser(s.id),
            u = (0, C.AH)(e),
            d = (0, C.s5)(e),
            f = m.Z.getChannel(u),
            _ = (null == f ? void 0 : f.isPrivate()) ? E.Z.getNickname(s.id) : null,
            p = null != (a = null != (i = g.ZP.getNick(d, s.id)) ? i : _) ? a : T.ZP.getName(s),
            h = null != (o = null == c ? void 0 : c.getAvatarURL(d, 20)) ? o : s.getAvatarURL(null == f ? void 0 : f.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: j.displayAvatar,
                    src: h
                },
                'avatar-'.concat(t, '-').concat(s.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: j.displayedNick,
                    children: p
                },
                'display-nick-'.concat(t, '-').concat(s.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: j.displayUsername,
                    children: T.ZP.getUserTag(s, { identifiable: y.Z.enabled && y.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(s.id)
            )
        ];
    },
    K = (e, t, n) => {
        let { channel: i, text: a } = n;
        return null == i
            ? (0, r.jsx)('strong', { children: a })
            : (0, r.jsxs)('div', {
                  className: j.resultChannel,
                  children: [(0, r.jsx)(P.MC, { channel: i }), (0, r.jsx)(P.GQ, { channel: i }), (0, r.jsx)(P.P, { channel: i })]
              });
    },
    z = (e) => {
        let t,
            n,
            { id: i, searchContext: a, result: s, group: l, className: c, role: u, tabIndex: d, 'aria-selected': f, onSelect: p, onFocus: h, showFilter: m, renderResult: g } = e;
        if (m) {
            var E, b;
            t = (0, r.jsx)('span', {
                className: j.filter,
                children: null != (b = null == (E = w.ZP[l]) ? void 0 : E.key) ? b : 'addme:'
            });
        }
        return (
            (n = null != g ? g(a, l, s) : (0, r.jsx)('strong', { children: s.text })),
            (0, r.jsxs)(_.P3F, {
                tag: 'li',
                className: o()(j.option, c),
                onClick: p,
                onFocus: h,
                id: i,
                role: u,
                tabIndex: d,
                'aria-selected': f,
                children: [
                    (0, r.jsxs)('div', {
                        className: j.content,
                        children: [t, n]
                    }),
                    (0, r.jsx)(_.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: j.plusIcon
                    })
                ]
            })
        );
    },
    q = (e) =>
        (0, r.jsx)(
            z,
            B(U({}, e), {
                className: j.user,
                renderResult: W
            })
        ),
    $ = (e) => (0, r.jsx)(z, B(U({}, e), { renderResult: K }));
function X(e) {
    return (0, C.kG)(e).map((e, t, n) => ((0, C.Fr)(e, n[t + 1]) ? e : new h.WU(e.getFullMatch(), h.Xe)));
}
function Q(e) {
    var { onSelect: t, onFocus: n, result: a, showFilter: s, searchContext: l, renderResult: c, group: u } = e,
        d = Z(e, ['onSelect', 'onFocus', 'result', 'showFilter', 'searchContext', 'renderResult', 'group']);
    let f = '',
        p = i
            .useMemo(() => X(a.text), [a.text])
            .map((e) => {
                let t = e.getFullMatch();
                if ('' === t.trim()) return null;
                let n = x.TNx.test(e.type),
                    i = x.KA4.test(e.type),
                    a = !n && !i;
                return (
                    (f += t),
                    (0, r.jsx)(
                        'span',
                        {
                            className: o()(j.searchHistoryRow, {
                                [j.filter]: n,
                                [j.answer]: i,
                                [j.nonText]: a
                            }),
                            children: t
                        },
                        e.type + t
                    )
                );
            });
    return (0, r.jsxs)(
        _.P3F,
        B(
            U(
                {
                    className: j.option,
                    onClick: t,
                    onFocus: n
                },
                d
            ),
            {
                'aria-label': k.intl.formatToPlainString(k.t.WoiGra, { suggestion: f }),
                children: [
                    p,
                    (0, r.jsx)(_.qJs, {
                        size: 'sm',
                        color: 'currentColor',
                        className: j.plusIcon
                    })
                ]
            }
        )
    );
}
let J = {
    [x.dCx.FILTER_FROM]: {
        titleText: () => k.intl.string(k.t.catERE),
        component: q
    },
    [x.dCx.FILTER_MENTIONS]: {
        titleText: () => k.intl.string(k.t.l3K4Bw),
        component: q
    },
    [x.dCx.FILTER_HAS]: { titleText: () => k.intl.string(k.t.IC7gHB) },
    [x.dCx.FILTER_FILE_TYPE]: { titleText: () => k.intl.string(k.t.SXIfV1) },
    [x.dCx.FILTER_IN]: {
        titleText: () => k.intl.string(k.t.vHyCgo),
        component: $
    },
    [x.rtL.DATES]: { titleText: () => k.intl.string(k.t.UiL5e3) },
    [x.rtL.HISTORY]: {
        titleText: () => k.intl.string(k.t.tSZd5e),
        groupTip(e) {
            let { searchContext: t } = e,
                n = (0, C.WJ)(t);
            return (0, r.jsx)(_.ua7, {
                text: k.intl.string(k.t.dwAvX1),
                position: 'left',
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: i } = e;
                    return (0, r.jsx)(_.P3F, {
                        onClick: () => S.Z.clearWebSearchHistory(n),
                        onMouseEnter: t,
                        onMouseLeave: i,
                        className: j.searchClearHistory,
                        title: k.intl.string(k.t.dwAvX1),
                        'aria-label': k.intl.string(k.t.dwAvX1),
                        children: (0, r.jsx)(_.XHJ, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        },
        component: Q
    },
    [x.rtL.SEARCH_OPTIONS]: {
        titleText: () => k.intl.string(k.t['8Zkyw8']),
        groupTip: () =>
            (0, r.jsx)(_.ua7, {
                text: k.intl.string(k.t.hvVgAQ),
                position: 'left',
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        B(U({ className: j.searchLearnMore }, e), {
                            children: (0, r.jsx)(_.eee, {
                                href: I.Z.getArticleURL(x.BhN.USING_SEARCH),
                                title: k.intl.string(k.t.hvVgAQ),
                                children: (0, r.jsx)(_.idN, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                        })
                    )
            }),
        component: function (e) {
            var t,
                { result: n, onSelect: i, onFocus: a, showFilter: s, searchContext: l } = e,
                c = Z(e, ['result', 'onSelect', 'onFocus', 'showFilter', 'searchContext']);
            let u = (0, C.Ko)(null != (t = n.token) ? t : '');
            return (0, r.jsxs)(
                _.P3F,
                B(
                    U(
                        {
                            className: o()(j.option, j.searchOption),
                            onClick: i,
                            onFocus: a
                        },
                        c
                    ),
                    {
                        children: [
                            (0, r.jsx)('span', {
                                className: j.filter,
                                children: n.text
                            }),
                            (0, r.jsx)('span', {
                                className: o()({ [j.answer]: u }),
                                children: u
                            }),
                            (0, r.jsx)(_.qJs, {
                                size: 'sm',
                                color: 'currentColor',
                                className: j.plusIcon
                            })
                        ]
                    }
                )
            );
        }
    }
};
class ee extends i.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: a } = e;
        null != i.filter && null == a.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === x.Sap.FILTER_ALL && a.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: i, searchContext: a, channel: o } = this.props;
        return (0, r.jsx)(p.Z, {
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
            searchFavorites: a.type === x.aib.FAVORITES && (0, C.X$)(),
            showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
            channel: o,
            onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({ searchAutocompleteSelectAction: L.ZW.CLICK }),
            showDMQueryText: a.type === x.aib.DMS && (0, C.R6)(a)
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            M(this, 'state', {
                dateHint: (0, w.Pr)(),
                selectedIndex: -1
            }),
            M(this, 'handleDateChange', (e) => {
                let t = (0, C.WJ)(this.props.searchContext);
                ((0, D.bh)({
                    searchContext: this.props.searchContext,
                    searchQuery: N.Z.getSearchResultsQuery(t),
                    searchQueryString: (0, R.$)(this.props.searchContext),
                    searchTokenType: this.props.resultsState.mode.filter,
                    searchAutocompleteGroup: x.rtL.DATES,
                    searchAutocompleteMode: this.props.resultsState.mode,
                    isSearchFilterPrefix: !1,
                    isSearchFilterAnswer: !0,
                    isSearchFilterComplete: !1,
                    searchAutocompleteSelectAction: L.ZW.CLICK
                }),
                    this.setSearchQuery(e.format(x.b2L) + ' ', !0));
            }),
            M(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: i } = this.props,
                    { mode: a, autocompletes: o } = r,
                    { resultsState: s } = e;
                if (a.type !== s.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || s.autocompletes.length !== o.length)) {
                    let e = (0, C.i3)(s.autocompletes, s.mode)[t.selectedIndex],
                        n = (0, C.i3)(o, a).findIndex((t) => {
                            let { resultText: n } = t;
                            return n === (null == e ? void 0 : e.resultText);
                        });
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
                (0, C.Fz)(n.mode.filter) || this.focusOption(t + e);
            }),
            M(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery(),
                    i = this.shouldShowSearchInSelectedChannel();
                (t < -1 || (!r && !i && t < 0) ? (t = (0, C.BU)(n) - 1) : (r || i) && t >= (0, C.BU)(n) ? (t = -1) : !r && t >= (0, C.BU)(n) && (t = 0), this.setSelectedIndex(t));
            }),
            M(this, 'selectOption', (e) => {
                let { selectedIndex: t, searchAutocompleteSelectAction: n } = e,
                    r = t;
                if ((null == r && (r = this.state.selectedIndex), r < 0)) return !1;
                let { autocompletes: i, mode: a } = this.props.resultsState;
                if ((0, C.Fz)(a.filter)) return;
                let o = (0, C.i3)(i, a);
                if (r >= o.length) return !1;
                let s = o[r],
                    l = o.length;
                if (s.group === x.rtL.HISTORY) {
                    let e = i.find((e) => (null == e ? void 0 : e.group) === x.rtL.HISTORY);
                    if (null != e) {
                        let t = r - (l - e.results.length);
                        (0, D.$z)({
                            searchContext: this.props.searchContext,
                            searchHistoryIndex: t,
                            searchHistoryTotalResults: e.results.length
                        });
                    }
                } else {
                    var c, u;
                    let e = this.props.resultsState.mode.type,
                        t = this.props.resultsState.mode.filter,
                        { token: i, group: a } = s.result,
                        o = (0, w._m)(s.group) ? s.group : null != a && (0, w._m)(a) ? a : null,
                        d = null != (c = null != i ? i : t) ? c : o,
                        f = s.result.channel,
                        _ = d === x.dCx.FILTER_IN && null != f && f.id === b.Z.getChannelId(),
                        p = (0, C.WJ)(this.props.searchContext);
                    (0, D.bh)({
                        searchContext: this.props.searchContext,
                        searchQuery: N.Z.getSearchResultsQuery(p),
                        searchQueryString: (0, R.$)(this.props.searchContext),
                        searchTokenType: d,
                        searchAutocompleteGroup: null != (u = s.group) ? u : a,
                        searchAutocompleteMode: this.props.resultsState.mode,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: l,
                        isSearchFilterPrefix: e === x.Sap.EMPTY,
                        isSearchFilterAnswer: e === x.Sap.FILTER,
                        isSearchFilterComplete: e === x.Sap.FILTER_ALL,
                        isInFilterForSelectedChannel: _,
                        searchAutocompleteSelectAction: n
                    });
                }
                let d = Y(s.resultText);
                return (this.setSearchQuery(s.resultText, d), !0);
            }),
            M(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: i } = t.props.resultsState,
                    a = 0;
                null != r.token ? (a = r.token.start) : (null == i ? void 0 : i.currentToken) != null && (a = i.currentToken.end);
                let o = null != r.token ? r.token.end : a;
                (v.S.dispatch(x.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: a,
                    focus: o,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1));
            }),
            M(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== x.Sap.FILTER && e.type !== x.Sap.EMPTY && !(0, C.Fz)(e.filter);
            }),
            M(this, 'shouldShowSearchInSelectedChannel', () => {
                let {
                    searchContext: e,
                    resultsState: { mode: t }
                } = this.props;
                return e.type === x.aib.DMS && (0, C.R6)(e) && t.type === x.Sap.EMPTY && !(0, C.Fz)(t.filter);
            }),
            M(this, 'handleSearchInChannel', (e) => {
                var t;
                let { searchAutocompleteSelectAction: n } = e,
                    { channel: r, searchContext: i } = this.props;
                if (!this.shouldShowSearchInSelectedChannel() || null == r) return !1;
                (0, D.tA)({
                    searchContext: i,
                    searchAutocompleteSelectAction: n
                });
                let a = x.dCx.FILTER_IN,
                    o = w.ZP[a],
                    s = (0, C.X3)(r),
                    l = ''.concat(null != (t = null == o ? void 0 : o.key) ? t : a.toString(), ' ').concat(s);
                return (this.setSearchQuery(l, !0), !0);
            }),
            M(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: j.datePicker,
                    children: [
                        (0, r.jsx)(H, {
                            onSelect: this.handleDateChange,
                            maxDate: u()().local(),
                            minDate: V
                        }),
                        (0, r.jsxs)('div', {
                            className: j.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: j.hint,
                                    children: [k.intl.string(k.t.fmtCi4), '\xA0']
                                }),
                                (0, r.jsx)(_.P3F, {
                                    tag: 'span',
                                    className: j.hintValue,
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
                v.S.dispatch(x.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            M(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchContext: n } = this.props,
                    { autocompletes: i, mode: a } = this.props.resultsState;
                if ((0, C.Fz)(a.filter)) return this.renderDatePicker();
                let o = -1;
                return i.map((i) => {
                    var s, l, c;
                    let u, d;
                    if (null == i || 0 === i.results.length) return null;
                    let f = null != (s = J[i.group]) ? s : {};
                    null != f.titleText &&
                        ((d = ''.concat(i.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: j.header,
                            children: f.titleText()
                        })));
                    let _ = null != (l = f.groupTip) ? l : null,
                        h = null != _ ? (0, r.jsx)(_, { searchContext: n }) : null,
                        m = null != (c = f.component) ? c : z,
                        g = a.type === x.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: j.resultsGroup,
                            children: [
                                u,
                                h,
                                i.results.map((a) => {
                                    var s, l;
                                    if (null == a || null == i) return null;
                                    let c = e === (o += 1);
                                    return (0, r.jsx)(
                                        m,
                                        U(
                                            {
                                                searchContext: n,
                                                group: null != (s = a.group) ? s : i.group,
                                                result: a,
                                                showFilter: g,
                                                onSelect: this.selectOption.bind(null, {
                                                    selectedIndex: o,
                                                    searchAutocompleteSelectAction: L.ZW.CLICK
                                                }),
                                                onFocus: this.focusOption.bind(null, o)
                                            },
                                            (0, p.M)(t, o, c)
                                        ),
                                        ''
                                            .concat(i.group, '-')
                                            .concat(a.text, '-')
                                            .concat(null != (l = a.key) ? l : '')
                                    );
                                })
                            ]
                        },
                        i.group
                    );
                });
            }));
    }
}
let et = i.forwardRef((e, t) => {
    let { searchContext: n, navId: i, onSelectedIndexChanged: a } = e,
        o = (0, f.e7)([b.Z, m.Z], () => {
            let e = b.Z.getChannelId();
            return m.Z.getChannel(e);
        }),
        [s, l] = (0, f.Wu)([A.Z], () => {
            let e = A.Z.getState(n),
                t = (0, C.BU)(e.autocompletes);
            return [e, t];
        });
    return (0, r.jsx)(ee, {
        ref: t,
        navId: i,
        onSelectedIndexChanged: a,
        searchContext: n,
        resultsState: s,
        totalResults: l,
        channel: o
    });
});
