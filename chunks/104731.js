s.r(t), s.d(t, { default: () => ej });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(17928),
    o = s(554146),
    c = s(990078),
    u = s(689175),
    d = s(512950),
    h = s(964486),
    g = s(932001),
    m = s(651649),
    x = s(253932),
    p = s(734057),
    S = s(625494),
    C = s(517381),
    f = s(822382),
    A = s(868974),
    R = s(304578),
    b = s(616252),
    I = s(753806),
    y = s(775427);
s(321073);
var E = s(738768),
    j = s(457699),
    k = s(465364),
    T = s(383233),
    N = s(994500),
    _ = s(65600);
let M = [];
s(309613);
var v = s(652215);
let P = 9975 + v.T_y,
    O = 9975 / v.T_y;
var H = s(145331),
    D = s(43105),
    L = s(821609),
    w = s(783977),
    q = s(289873),
    B = s(834730),
    Q = s(349288),
    F = s(922016),
    U = s(550079),
    G = s(477782),
    V = s(408278),
    Y = s(625903),
    z = s(112173),
    Z = s(313281),
    W = s(975571),
    X = s(121806),
    $ = s(49999),
    J = s(985018),
    K = s(853279);
function ee(e) {
    let t,
        {
            searchContext: s,
            searchMode: r,
            onSearchModeChange: c,
            totalResults: u,
            isIndexing: d,
            isSearching: h,
            documentsIndexed: m,
            selectedChannelId: x,
        } = e,
        p =
            ((t = (0, i.bG)([_.A], () => {
                let e = (0, f.bS)(s);
                return _.A.getSearchResultsQueryString(e);
            })),
            l.useMemo(() => (0, f._o)(t ?? ""), [t])),
        { totalFilters: S } = (0, X.vj)(p, s),
        C = l.useMemo(() => {
            if (s.type === v.I4_.DMS) {
                let e = (0, f.Zf)(p),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? J.intl.format(J.t.A2dqWG, { filterCount: t }) : J.intl.string(J.t.tc619d);
            }
            return null;
        }, [s.type, p]),
        [A, R] = l.useState(null),
        b = l.useMemo(() => (h ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [y, E] = (0, g.kn)(b),
        j = y === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        k = l.useCallback(
            (e) => {
                null != e && j && E($.i.USER_DISMISS), R(e);
            },
            [j, E, R],
        ),
        T = l.useCallback(
            (e) => {
                E("user:explicit" === e ? $.i.USER_DISMISS : $.i.AUTO_DISMISS);
            },
            [E],
        ),
        N = l.useCallback(() => {
            k(null), I.A.openSearchFiltersModal(s);
        }, [k, s]),
        M = l.useMemo(() => (S > 0 ? J.intl.format(J.t.uaR4sI, { filterCount: S }) : J.intl.string(J.t.UdhTtk)), [S]),
        P = !(0, Z.DZ)() && (s.type === v.I4_.DMS || s.type === v.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: a()(K.wL, { [K.g$]: null != C }),
        children: [
            (0, n.jsx)("div", {
                className: K.TN,
                role: "status",
                children: (0, n.jsx)(et, {
                    totalResults: u,
                    subtitle: C,
                    isIndexing: d,
                    isSearching: h,
                    documentsIndexed: m,
                }),
            }),
            (0, n.jsxs)("div", {
                className: K.vd,
                children: [
                    (0, n.jsx)(L.$, { variant: "secondary", onClick: N, text: M, icon: w.R, size: "sm" }),
                    (0, n.jsx)(ei, {
                        searchMode: r,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === A,
                        setOpenPopout: k,
                    }),
                    P &&
                        (0, n.jsx)(ea, {
                            searchContext: s,
                            selectedChannelId: x,
                            isPopoutOpen: "settings" === A,
                            setOpenPopout: k,
                            isPopoverVisible: j,
                            onPopoverRequestClose: T,
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { totalResults: t, subtitle: s, isSearching: l, isIndexing: r, documentsIndexed: a } = e;
    return r
        ? (0, n.jsx)(en, { documentsIndexed: a })
        : l
          ? (0, n.jsx)(el, {})
          : (0, n.jsx)(er, { totalResults: t, subtitle: s });
}
function es() {
    return (0, n.jsx)("div", {
        className: K.zp,
        children: (0, n.jsx)(q.y, { type: q.y.Type.SPINNING_CIRCLE, className: K.u1, itemClassName: K.pu }),
    });
}
function en(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(c.m, {
        asContainer: !0,
        text: J.intl.formatToPlainString(J.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: K.q_,
            children: [
                (0, n.jsx)(B.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(Q.Anchor, {
                        className: K.Zd,
                        href: W.A.getArticleURL(v.MVz.SEARCH_INDEXING),
                        children: J.intl.string(J.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(es, {}),
            ],
        }),
    });
}
function el() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(B.E, { variant: "text-md/medium", color: "text-default", children: J.intl.string(J.t.uixzLf) }),
            (0, n.jsx)(es, {}),
        ],
    });
}
function er(e) {
    let { totalResults: t, subtitle: s } = e,
        l = (0, n.jsx)(B.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: J.intl.format(J.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: K.hy,
              children: [l, (0, n.jsx)(B.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : l;
}
function ea(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: r,
            setOpenPopout: a,
            onPopoverRequestClose: i,
            isPopoverVisible: o,
        } = e,
        c = l.useRef(null),
        u = x.Hu.useSetting(),
        d = l.useCallback(
            (e) => {
                if (u !== e) {
                    if (
                        ((0, H._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: x.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: H.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: v.I4_.DMS };
                        I.A.transitionStateToSearchContext(t, e, I.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: v.I4_.CHANNEL, channelId: s };
                        I.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), x.Hu.updateSetting(e);
                }
            },
            [u, a, t, s],
        ),
        [h, g] = l.useMemo(
            () => [
                u ? J.intl.string(J.t["8lklch"]) : J.intl.string(J.t.ji3jTF),
                u ? J.intl.string(J.t.RMQZCa) : J.intl.string(J.t["v/PagC"]),
            ],
            [u],
        ),
        m = l.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(F.Y, {
                targetElementRef: c,
                shouldShow: r,
                animation: F.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(U.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": J.intl.string(J.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, n.jsxs)(
                            G.rX,
                            {
                                label: J.intl.string(J.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(G.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: J.intl.string(J.t.jRkYAh),
                                        checked: !u,
                                        action: () => d(!1),
                                    }),
                                    (0, n.jsx)(G.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: J.intl.string(J.t["lWpJ/t"]),
                                        checked: u,
                                        action: () => d(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(V.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: Y.Z,
                        onClick: () => {
                            a(r ? null : "settings");
                        },
                        "aria-label": J.intl.string(J.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(D.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: i,
                title: h,
                body: g,
                caretConfig: m,
                badge: "new",
            }),
        ],
    });
}
function ei(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: r, setOpenPopout: a } = e,
        i = l.useRef(null),
        o = l.useMemo(
            () => [
                { label: J.intl.string(J.t.CbaapP), value: v.BBH.NEWEST },
                { label: J.intl.string(J.t.OukXZj), value: v.BBH.OLDEST },
                { label: J.intl.string(J.t.q8gB52), value: v.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                a(null), s(e);
            },
            [a, s],
        );
    return (0, n.jsx)(F.Y, {
        targetElementRef: i,
        shouldShow: r,
        animation: F.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(U.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": J.intl.string(J.t.utp2hS),
                onSelect: () => a(null),
                children: (0, n.jsx)(
                    G.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: l } = e;
                            return (0, n.jsx)(
                                G.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${l}`,
                                    label: s,
                                    action: () => c(l),
                                    checked: t === l,
                                },
                                l,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(L.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: z.J,
                onClick: () => {
                    a(r ? null : "sort");
                },
                text: J.intl.string(J.t.XvNMNk),
                "aria-label": J.intl.string(J.t.XvNMNk),
                size: "sm",
            }),
    });
}
var eo = s(159083),
    ec = s(142662),
    eu = s(148795),
    ed = s(53788),
    eh = s(939249),
    eg = s(192308),
    em = s(670455),
    ex = s(491709);
function ep(e) {
    let { rating: t, onClick: s } = e,
        r = t === em.P0.BAD ? eu.d : ed.G,
        a = l.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, n.jsx)(eh.D, {
        onClick: a,
        className: ex.zc,
        children: (0, n.jsx)(r, { size: "md", color: "currentColor", className: ex.Kk }),
    });
}
let eS = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: r } = e;
    l.useEffect(() => {
        (0, H.J$)({ searchContext: t });
    }, [t]);
    let a = l.useCallback(
        (e) => {
            r(),
                (0, eg.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([s.e("22255"), s.e("55925"), s.e("44908")]).then(
                        s.bind(s, 774567),
                    );
                    return (s) => (0, n.jsx)(l, { ...s, searchContext: t, rating: e });
                });
        },
        [r, t],
    );
    return (0, n.jsxs)("div", {
        className: ex.kL,
        children: [
            (0, n.jsx)(B.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: J.intl.string(J.t["I+4OJC"]),
            }),
            (0, n.jsxs)("div", {
                className: ex.Pt,
                children: [
                    (0, n.jsx)(ep, { rating: em.P0.GOOD, onClick: a }),
                    (0, n.jsx)(ep, { rating: em.P0.BAD, onClick: a }),
                ],
            }),
        ],
    });
};
var eC = s(85942);
class ef extends l.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    autoAnalytics = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (null == e.props.searchRequestAnalyticsId || e.props.isSearching) return;
            let s = 0,
                n = 0,
                l = 0,
                r = 0;
            e.props.messages.forEach((e) => {
                null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && r++),
                    null != e.embeds && e.embeds.length > 0 && l++,
                    null != e.attachments && e.attachments.length > 0 && n++;
            });
            let a = (0, f.bS)(e.props.searchContext);
            0 === s
                ? (0, H.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: I.A.getSearchInputText(e.props.searchContext),
                      searchQuery: _.A.getSearchResultsQuery(a),
                  })
                : (0, H.H9)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      prevSearchRequestAnalyticsId: t !== e.props.searchRequestAnalyticsId ? t : null,
                      isError: e.props.searchHasError,
                      limit: e.props.searchLimit,
                      offset: e.props.searchOffset,
                      page: Math.floor(e.props.searchOffset / e.props.searchLimit) + 1,
                      totalResults: e.props.searchTotalResults,
                      pageResults: null != e.props.messages ? e.props.messages.length : null,
                      isIndexing: e.props.searchIsIndexing,
                      pageNumMessages: s,
                      pageNumLinks: r,
                      pageNumEmbeds: l,
                      pageNumAttachments: n,
                      searchQueryString: I.A.getSearchInputText(e.props.searchContext),
                      searchQuery: _.A.getSearchResultsQuery(a),
                  });
        };
    })();
    render() {
        return null;
    }
}
function eA(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: eC.Oq, children: (0, n.jsx)("div", { className: eC.de, children: t }) });
}
function eR(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: l } = e;
    return s ? (0, n.jsx)(eS, { searchContext: t, dismissFeedbackEntrypoint: l }) : null;
}
function eb(e) {
    let {
            messages: t,
            blockCount: s,
            ignoreCount: l,
            search: r,
            searchContext: i,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: u,
            onPageChange: d,
            paginationTotalCount: h,
            renderPageWrapper: g,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: x,
            searchResultsQuery: p,
        } = e,
        { totalResults: S, isSearching: C, isIndexing: A, hasError: R } = r;
    if (R)
        return (0, n.jsxs)(eA, {
            children: [
                (0, n.jsx)("div", { className: eC.M6 }),
                (0, n.jsx)("div", { className: a()(eC.pZ, eC.gJ), children: J.intl.string(J.t.uvDZBZ) }),
            ],
        });
    if (A) {
        let e = (0, f.Y7)(i);
        return (0, n.jsxs)(eA, {
            children: [(0, n.jsx)(eo.A, {}), (0, n.jsx)("div", { className: (eC.pZ, eC.Jy), children: e })],
        });
    }
    if (C) return null;
    if (S > 0)
        return (0, n.jsx)(ec.A, {
            search: r,
            messages: t,
            onClick: c,
            blockCount: s,
            ignoreCount: l,
            renderEmbeds: o,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: h,
            renderPageWrapper: g,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: x,
            searchResultsQuery: p,
        });
    let { showNoResultsAlt: b } = r,
        I = b ? J.intl.string(J.t["VrK/2R"]) : J.intl.string(J.t.V6nAfF);
    return (0, n.jsxs)(eA, {
        children: [
            (0, n.jsx)("div", { className: a()(eC.$l, { [eC.CC]: b }) }),
            (0, n.jsx)("div", { className: a()(eC.pZ, eC.wV, { [eC.CC]: b }), children: I }),
        ],
    });
}
let eI = [],
    ey = l.memo(function (e) {
        let {
                searchContext: t,
                search: s,
                renderEmbeds: r,
                searchRequestAnalyticsId: a,
                messages: h,
                blockCount: m,
                ignoreCount: x,
                isFeedbackVisible: C,
                dismissFeedbackEntrypoint: A,
                onSearchModeChange: b,
                onPageChange: y,
                searchMode: E,
                onBlockedResultsClick: j,
                searchResultsQuery: k,
                selectedChannelId: T,
            } = e,
            N = l.useRef(null),
            M = l.useCallback(() => {
                I.A.cleanUpSearchState(t);
            }, [t]);
        l.useEffect(
            () => (
                S._.subscribe(v.jej.SEARCH_RESULTS_CLOSE, M),
                () => {
                    S._.unsubscribe(v.jej.SEARCH_RESULTS_CLOSE, M);
                }
            ),
            [M],
        );
        let D = l.useRef(s.showBlockedResults);
        l.useEffect(() => {
            if (D.current !== s.showBlockedResults) {
                D.current = s.showBlockedResults;
                let e = N.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let L = l.useCallback((e, t, s) => {
                let n = N.current;
                if (null == n) return;
                let l = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: l, animate: t, callback: s });
            }, []),
            {
                paginationTotalCount: w,
                paginationMaxIndex: q,
                isPaginationTotalCountLimited: B,
            } = (function (e) {
                let { totalResults: t, isSearching: s } = e,
                    [n, r] = l.useState(t);
                return (
                    l.useEffect(() => {
                        s || r(t);
                    }, [t, s]),
                    {
                        isPaginationTotalCountLimited: n > 9975 + v.T_y,
                        paginationTotalCount: Math.min(n, P),
                        paginationMaxIndex: O,
                    }
                );
            })({ totalResults: s.totalResults, isSearching: s.isSearching }),
            Q = l.useCallback(
                (e, t) => {
                    let s = q + 1;
                    if (!B || e.targetPage !== s) return t;
                    {
                        let e = J.intl.formatToPlainString(J.t["E+2azY"], { maxPages: s });
                        return (0, n.jsx)(c.m, { asContainer: !0, text: e, children: t });
                    }
                },
                [B, q],
            ),
            F = l.useCallback(
                (e) => {
                    e === E ||
                        s.isSearching ||
                        ((0, H.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), b(e));
                },
                [b, s.isSearching, t, E, a],
            ),
            U = l.useCallback(
                (e, n) => {
                    let l = p.A.getChannel(e.channel_id),
                        r = null != l ? l.getGuildId() : null,
                        i = (0, f.bS)(t),
                        { offset: o, totalResults: c } = s;
                    (0, H.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: r,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != h ? h.length : null,
                        totalResults: c,
                        limit: v.T_y,
                        page: Math.floor(o / v.T_y) + 1,
                        offset: o,
                        index: n,
                        searchQueryString: I.A.getSearchInputText(t),
                        searchQuery: _.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, a, h],
            ),
            G = l.useCallback(
                (e) => {
                    (0, H.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), y(e);
                },
                [y, t, a],
            ),
            V = Math.floor(s.offset / v.T_y),
            Y = B && V >= q,
            z = q + 1,
            Z = (0, i.yK)([_.A], () => {
                if (0 !== s.offset) return eI;
                let e = h.length;
                if (e < 10) return eI;
                let n = 0;
                if (
                    (h.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && n++;
                    }),
                    n / e < 0.75)
                )
                    return eI;
                let l = (0, f.bS)(t),
                    r = _.A.getSearchResultsQueryString(l);
                return (0, f._o)(r ?? "").some((e) => e.type === v.LWr.FILTER_AUTHOR_TYPE)
                    ? eI
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [W, X] = (0, g.kn)(Z),
            $ = W === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            K = l.useCallback(() => {
                if (s.isSearching) return;
                let e = `${R.Ay[v.LWr.FILTER_AUTHOR_TYPE].key} ${J.intl.string(J.t.tPZo4p)} `;
                I.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, n.jsxs)("section", {
            className: eC.zt,
            "aria-label": J.intl.string(J.t["zkoeq/"]),
            children: [
                (0, n.jsx)(ee, {
                    searchContext: t,
                    searchMode: E,
                    onSearchModeChange: F,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: T,
                }),
                (0, n.jsxs)(u.Ch, {
                    ref: N,
                    className: eC.XG,
                    children: [
                        Y &&
                            !s.isSearching &&
                            (0, n.jsx)(d.p, {
                                className: eC.VC,
                                messageType: d.Y.WARNING,
                                children: J.intl.formatToPlainString(J.t["E+2azY"], { maxPages: z }),
                            }),
                        $ &&
                            (0, n.jsx)(d.p, {
                                className: eC.QR,
                                messageType: d.Y.INFO,
                                children: J.intl.format(J.t["gQeg/R"], { handleClick: K }),
                            }),
                        (0, n.jsx)(eb, {
                            messages: h,
                            blockCount: m,
                            ignoreCount: x,
                            search: s,
                            searchContext: t,
                            renderEmbeds: r,
                            onClick: U,
                            onScrollTo: L,
                            onPageChange: G,
                            paginationTotalCount: B ? w : void 0,
                            renderPageWrapper: Q,
                            onBlockedResultsClick: j,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: k,
                        }),
                    ],
                }),
                (0, n.jsx)(eR, { searchContext: t, isFeedbackVisible: C, dismissFeedbackEntrypoint: A }),
            ],
        });
    });
function eE(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: r, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = l.useState(!1),
                s = (0, A.H)({ location: "SearchResults" });
            return (
                (0, h.Ay)(() => {
                    s &&
                        m.A.possiblyShowFeedbackModal(
                            em.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: l.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, f.bS)(t),
        c = (0, i.cf)([C.A, _.A], () => ({
            isSearching: C.A.getIsFetching(o) ?? !1,
            isIndexing: C.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: C.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: C.A.getDocumentsIndexed(o),
            offset: _.A.getSearchResultsOffset(o) ?? 0,
            totalResults: C.A.getTotalCount(o) ?? 0,
            hasError: null != C.A.getError(o),
            showBlockedResults: _.A.shouldShowBlockedResults(o),
            showNoResultsAlt: _.A.shouldShowNoResultsAlt(o),
        })),
        u = (0, i.bG)([C.A], () => C.A.getAnalyticsId(o)),
        {
            renderedMessages: d,
            ignoreCount: g,
            blockCount: p,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, i.bG)(
                    [_.A, C.A, j.A],
                    () => {
                        let e = (0, f.bS)(t),
                            s = _.A.getSearchResultsQuery(e),
                            n = C.A.getMessages(e);
                        if (null == s || null == n || 0 === n.length) return M;
                        let l = (0, E.wG)((0, f.dX)(s) ?? ""),
                            r = [];
                        return (
                            n.forEach((e) => {
                                let t = new T.Ay(e);
                                (t = (t = (function (e, t) {
                                    let [s] = t,
                                        n = s.getMessage(e.id, e.channel_id);
                                    return (
                                        null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e
                                    );
                                })(t, [j.A])).set(
                                    "customRenderedContent",
                                    (0, k.Ay)(t, { postProcessor: l, allowHeading: !0, allowList: !0 }),
                                )),
                                    r.push(t);
                            }),
                            r
                        );
                    },
                    [t],
                    i.My,
                ),
                { blockCount: n, ignoreCount: l } = (0, i.cf)([N.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        s.forEach((s) => {
                            let n = N.A.isBlockedForMessage(s),
                                l = N.A.isIgnoredForMessage(s);
                            n ? e++ : l && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: s, blockCount: n, ignoreCount: l };
        })({ searchContext: t }),
        S = (0, i.bG)([_.A], () => _.A.getSearchMode(o) ?? v.BBH.NEWEST),
        R = l.useCallback(
            (e) => {
                if (c.isSearching) return;
                b.A.updateSearchMode(t, e);
                let s = I.A.getSearchInputText(t);
                null != s && I.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [c.isSearching, t],
        ),
        y = l.useCallback(
            (e) => {
                if (c.isSearching) return;
                let s = I.A.getSearchInputText(t);
                null != s && I.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * v.T_y });
            },
            [c.isSearching, t],
        ),
        P = (0, i.bG)([_.A], () => {
            let e = (0, f.bS)(t);
            return _.A.getSearchResultsQuery(e);
        }),
        O = l.useCallback((e) => b.A.setShowBlockedResults(t, e), [t]),
        H = l.useDeferredValue(d),
        D = l.useDeferredValue(c),
        L = l.useDeferredValue(u);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ey, {
                searchContext: t,
                search: D,
                searchRequestAnalyticsId: L,
                messages: H,
                ignoreCount: g,
                blockCount: p,
                renderEmbeds: x.rs.useSetting(),
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: a,
                onPageChange: y,
                onSearchModeChange: R,
                searchMode: S,
                onBlockedResultsClick: O,
                searchResultsQuery: P,
                selectedChannelId: s,
            }),
            (0, n.jsx)(ef, {
                searchContext: t,
                searchRequestAnalyticsId: L,
                messages: H,
                searchOffset: D.offset,
                searchLimit: v.T_y,
                searchHasError: D.hasError,
                searchTotalResults: D.totalResults,
                searchIsIndexing: D.isHistoricalIndexing,
                isSearching: D.isSearching,
            }),
        ],
    });
}
function ej(e) {
    let { guildId: t, channelId: s } = e,
        l = (0, y.J)({ guildId: t, channelId: s });
    return null == l ? null : (0, n.jsx)(eE, { searchContext: l, selectedChannelId: s });
}
