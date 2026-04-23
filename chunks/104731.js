s.r(t), s.d(t, { default: () => eE });
var n = s(627968),
    a = s(64700),
    l = s(503698),
    r = s.n(l),
    i = s(17928),
    o = s(554146),
    c = s(990078),
    u = s(689175),
    d = s(512950),
    h = s(964486),
    g = s(932001),
    p = s(651649),
    m = s(253932),
    x = s(734057),
    f = s(625494),
    C = s(517381),
    S = s(822382),
    A = s(868974),
    _ = s(304578),
    b = s(616252),
    R = s(753806),
    I = s(775427);
s(321073);
var y = s(738768),
    E = s(457699),
    j = s(465364),
    k = s(383233),
    T = s(994500),
    N = s(65600);
let v = [];
s(309613);
var M = s(652215);
let P = 9975 + M.T_y,
    w = 9975 / M.T_y;
var O = s(145331),
    B = s(43105),
    H = s(821609),
    L = s(783977),
    D = s(289873),
    U = s(834730),
    q = s(349288),
    F = s(922016),
    Q = s(550079),
    G = s(477782),
    V = s(408278),
    Y = s(625903),
    Z = s(112173),
    z = s(313281),
    J = s(975571),
    W = s(121806),
    K = s(49999),
    X = s(985018),
    $ = s(853279);
function ee(e) {
    let t,
        {
            searchContext: s,
            searchMode: l,
            onSearchModeChange: c,
            totalResults: u,
            isIndexing: d,
            isSearching: h,
            documentsIndexed: p,
            selectedChannelId: m,
        } = e,
        x =
            ((t = (0, i.bG)([N.A], () => {
                let e = (0, S.bS)(s);
                return N.A.getSearchResultsQueryString(e);
            })),
            a.useMemo(() => (0, S._o)(t ?? ""), [t])),
        { totalFilters: f } = (0, W.vj)(x, s),
        C = a.useMemo(() => {
            if (s.type === M.I4_.DMS) {
                let e = (0, S.Zf)(x),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? X.intl.format(X.t.A2dqWG, { filterCount: t }) : X.intl.string(X.t.tc619d);
            }
            return null;
        }, [s.type, x]),
        [A, _] = a.useState(null),
        b = a.useMemo(() => (h ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [I, y] = (0, g.kn)(b),
        E = I === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        j = a.useCallback(
            (e) => {
                null != e && E && y(K.i.USER_DISMISS), _(e);
            },
            [E, y, _],
        ),
        k = a.useCallback(
            (e) => {
                y("user:explicit" === e ? K.i.USER_DISMISS : K.i.AUTO_DISMISS);
            },
            [y],
        ),
        T = a.useCallback(() => {
            j(null), R.A.openSearchFiltersModal(s);
        }, [j, s]),
        v = a.useMemo(() => (f > 0 ? X.intl.format(X.t.uaR4sI, { filterCount: f }) : X.intl.string(X.t.UdhTtk)), [f]),
        P = !(0, z.DZ)() && (s.type === M.I4_.DMS || s.type === M.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: r()($.wL, { [$.g$]: null != C }),
        children: [
            (0, n.jsx)("div", {
                className: $.TN,
                role: "status",
                children: (0, n.jsx)(et, {
                    totalResults: u,
                    subtitle: C,
                    isIndexing: d,
                    isSearching: h,
                    documentsIndexed: p,
                }),
            }),
            (0, n.jsxs)("div", {
                className: $.vd,
                children: [
                    (0, n.jsx)(H.$, { variant: "secondary", onClick: T, text: v, icon: L.R, size: "sm" }),
                    (0, n.jsx)(ei, {
                        searchMode: l,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === A,
                        setOpenPopout: j,
                    }),
                    P &&
                        (0, n.jsx)(er, {
                            searchContext: s,
                            selectedChannelId: m,
                            isPopoutOpen: "settings" === A,
                            setOpenPopout: j,
                            isPopoverVisible: E,
                            onPopoverRequestClose: k,
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { totalResults: t, subtitle: s, isSearching: a, isIndexing: l, documentsIndexed: r } = e;
    return l
        ? (0, n.jsx)(en, { documentsIndexed: r })
        : a
          ? (0, n.jsx)(ea, {})
          : (0, n.jsx)(el, { totalResults: t, subtitle: s });
}
function es() {
    return (0, n.jsx)("div", {
        className: $.zp,
        children: (0, n.jsx)(D.y, { type: D.y.Type.SPINNING_CIRCLE, className: $.u1, itemClassName: $.pu }),
    });
}
function en(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(c.m, {
        asContainer: !0,
        text: X.intl.formatToPlainString(X.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: $.q_,
            children: [
                (0, n.jsx)(U.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(q.Anchor, {
                        className: $.Zd,
                        href: J.A.getArticleURL(M.MVz.SEARCH_INDEXING),
                        children: X.intl.string(X.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(es, {}),
            ],
        }),
    });
}
function ea() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U.E, { variant: "text-md/medium", color: "text-default", children: X.intl.string(X.t.uixzLf) }),
            (0, n.jsx)(es, {}),
        ],
    });
}
function el(e) {
    let { totalResults: t, subtitle: s } = e,
        a = (0, n.jsx)(U.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: X.intl.format(X.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: $.hy,
              children: [a, (0, n.jsx)(U.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : a;
}
function er(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: l,
            setOpenPopout: r,
            onPopoverRequestClose: i,
            isPopoverVisible: o,
        } = e,
        c = a.useRef(null),
        u = m.Hu.useSetting(),
        d = a.useCallback(
            (e) => {
                if (u !== e) {
                    if (
                        ((0, O._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: m.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: O.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: M.I4_.DMS };
                        R.A.transitionStateToSearchContext(t, e, R.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: M.I4_.CHANNEL, channelId: s };
                        R.A.transitionStateToSearchContext(t, e);
                    }
                    r(null), m.Hu.updateSetting(e);
                }
            },
            [u, r, t, s],
        ),
        [h, g] = a.useMemo(
            () => [
                u ? X.intl.string(X.t["8lklch"]) : X.intl.string(X.t.ji3jTF),
                u ? X.intl.string(X.t.RMQZCa) : X.intl.string(X.t["v/PagC"]),
            ],
            [u],
        ),
        p = a.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(F.Y, {
                targetElementRef: c,
                shouldShow: l,
                animation: F.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => r(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(Q.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": X.intl.string(X.t.fb59v0),
                        onSelect: () => r(null),
                        children: (0, n.jsxs)(
                            G.rX,
                            {
                                label: X.intl.string(X.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(G.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t.jRkYAh),
                                        checked: !u,
                                        action: () => d(!1),
                                    }),
                                    (0, n.jsx)(G.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t["lWpJ/t"]),
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
                            r(l ? null : "settings");
                        },
                        "aria-label": X.intl.string(X.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(B.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: i,
                title: h,
                body: g,
                caretConfig: p,
                badge: "new",
            }),
        ],
    });
}
function ei(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: l, setOpenPopout: r } = e,
        i = a.useRef(null),
        o = a.useMemo(
            () => [
                { label: X.intl.string(X.t.CbaapP), value: M.BBH.NEWEST },
                { label: X.intl.string(X.t.OukXZj), value: M.BBH.OLDEST },
                { label: X.intl.string(X.t.q8gB52), value: M.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = a.useCallback(
            (e) => {
                r(null), s(e);
            },
            [r, s],
        );
    return (0, n.jsx)(F.Y, {
        targetElementRef: i,
        shouldShow: l,
        animation: F.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => r(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(Q.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": X.intl.string(X.t.utp2hS),
                onSelect: () => r(null),
                children: (0, n.jsx)(
                    G.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: a } = e;
                            return (0, n.jsx)(
                                G.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${a}`,
                                    label: s,
                                    action: () => c(a),
                                    checked: t === a,
                                },
                                a,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(H.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: Z.J,
                onClick: () => {
                    r(l ? null : "sort");
                },
                text: X.intl.string(X.t.XvNMNk),
                "aria-label": X.intl.string(X.t.XvNMNk),
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
    ep = s(670455),
    em = s(491709);
function ex(e) {
    let { rating: t, onClick: s } = e,
        l = t === ep.P0.BAD ? eu.d : ed.G,
        r = a.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, n.jsx)(eh.D, {
        onClick: r,
        className: em.zc,
        children: (0, n.jsx)(l, { size: "md", color: "currentColor", className: em.Kk }),
    });
}
let ef = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: l } = e;
    a.useEffect(() => {
        (0, O.J$)({ searchContext: t });
    }, [t]);
    let r = a.useCallback(
        (e) => {
            l(),
                (0, eg.openModalLazy)(async () => {
                    let { default: a } = await s.e("44908").then(s.bind(s, 774567));
                    return (s) => (0, n.jsx)(a, { ...s, searchContext: t, rating: e });
                });
        },
        [l, t],
    );
    return (0, n.jsxs)("div", {
        className: em.kL,
        children: [
            (0, n.jsx)(U.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: X.intl.string(X.t["I+4OJC"]),
            }),
            (0, n.jsxs)("div", {
                className: em.Pt,
                children: [
                    (0, n.jsx)(ex, { rating: ep.P0.GOOD, onClick: r }),
                    (0, n.jsx)(ex, { rating: ep.P0.BAD, onClick: r }),
                ],
            }),
        ],
    });
};
var eC = s(85942);
class eS extends a.Component {
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
                a = 0,
                l = 0;
            e.props.messages.forEach((e) => {
                null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                    null != e.embeds && e.embeds.length > 0 && a++,
                    null != e.attachments && e.attachments.length > 0 && n++;
            });
            let r = (0, S.bS)(e.props.searchContext);
            0 === s
                ? (0, O.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: R.A.getSearchInputText(e.props.searchContext),
                      searchQuery: N.A.getSearchResultsQuery(r),
                  })
                : (0, O.H9)({
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
                      pageNumLinks: l,
                      pageNumEmbeds: a,
                      pageNumAttachments: n,
                      searchQueryString: R.A.getSearchInputText(e.props.searchContext),
                      searchQuery: N.A.getSearchResultsQuery(r),
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
function e_(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: a } = e;
    return s ? (0, n.jsx)(ef, { searchContext: t, dismissFeedbackEntrypoint: a }) : null;
}
function eb(e) {
    let {
            messages: t,
            blockCount: s,
            ignoreCount: a,
            search: l,
            searchContext: i,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: u,
            onPageChange: d,
            paginationTotalCount: h,
            renderPageWrapper: g,
            onBlockedResultsClick: p,
            searchRequestAnalyticsId: m,
            searchResultsQuery: x,
        } = e,
        { totalResults: f, isSearching: C, isIndexing: A, hasError: _ } = l;
    if (_)
        return (0, n.jsxs)(eA, {
            children: [
                (0, n.jsx)("div", { className: eC.M6 }),
                (0, n.jsx)("div", { className: r()(eC.pZ, eC.gJ), children: X.intl.string(X.t.uvDZBZ) }),
            ],
        });
    if (A) {
        let e = (0, S.Y7)(i);
        return (0, n.jsxs)(eA, {
            children: [(0, n.jsx)(eo.A, {}), (0, n.jsx)("div", { className: (eC.pZ, eC.Jy), children: e })],
        });
    }
    if (C) return null;
    if (f > 0)
        return (0, n.jsx)(ec.A, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: s,
            ignoreCount: a,
            renderEmbeds: o,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: h,
            renderPageWrapper: g,
            onBlockedResultsClick: p,
            searchRequestAnalyticsId: m,
            searchResultsQuery: x,
        });
    let { showNoResultsAlt: b } = l,
        R = b ? X.intl.string(X.t["VrK/2R"]) : X.intl.string(X.t.V6nAfF);
    return (0, n.jsxs)(eA, {
        children: [
            (0, n.jsx)("div", { className: r()(eC.$l, { [eC.CC]: b }) }),
            (0, n.jsx)("div", { className: r()(eC.pZ, eC.wV, { [eC.CC]: b }), children: R }),
        ],
    });
}
let eR = [],
    eI = a.memo(function (e) {
        let {
                searchContext: t,
                search: s,
                renderEmbeds: l,
                searchRequestAnalyticsId: r,
                messages: h,
                blockCount: p,
                ignoreCount: m,
                isFeedbackVisible: C,
                dismissFeedbackEntrypoint: A,
                onSearchModeChange: b,
                onPageChange: I,
                searchMode: y,
                onBlockedResultsClick: E,
                searchResultsQuery: j,
                selectedChannelId: k,
            } = e,
            T = a.useRef(null),
            v = a.useCallback(() => {
                R.A.cleanUpSearchState(t);
            }, [t]);
        a.useEffect(
            () => (
                f._.subscribe(M.jej.SEARCH_RESULTS_CLOSE, v),
                () => {
                    f._.unsubscribe(M.jej.SEARCH_RESULTS_CLOSE, v);
                }
            ),
            [v],
        );
        let B = a.useRef(s.showBlockedResults);
        a.useEffect(() => {
            if (B.current !== s.showBlockedResults) {
                B.current = s.showBlockedResults;
                let e = T.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let H = a.useCallback((e, t, s) => {
                let n = T.current;
                if (null == n) return;
                let a = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: a, animate: t, callback: s });
            }, []),
            {
                paginationTotalCount: L,
                paginationMaxIndex: D,
                isPaginationTotalCountLimited: U,
            } = (function (e) {
                let { totalResults: t, isSearching: s } = e,
                    [n, l] = a.useState(t);
                return (
                    a.useEffect(() => {
                        s || l(t);
                    }, [t, s]),
                    {
                        isPaginationTotalCountLimited: n > 9975 + M.T_y,
                        paginationTotalCount: Math.min(n, P),
                        paginationMaxIndex: w,
                    }
                );
            })({ totalResults: s.totalResults, isSearching: s.isSearching }),
            q = a.useCallback(
                (e, t) => {
                    let s = D + 1;
                    if (!U || e.targetPage !== s) return t;
                    {
                        let e = X.intl.formatToPlainString(X.t["E+2azY"], { maxPages: s });
                        return (0, n.jsx)(c.m, { asContainer: !0, text: e, children: t });
                    }
                },
                [U, D],
            ),
            F = a.useCallback(
                (e) => {
                    e === y ||
                        s.isSearching ||
                        ((0, O.L6)({ searchContext: t, searchRequestAnalyticsId: r, mode: e }), b(e));
                },
                [b, s.isSearching, t, y, r],
            ),
            Q = a.useCallback(
                (e, n) => {
                    let a = x.A.getChannel(e.channel_id),
                        l = null != a ? a.getGuildId() : null,
                        i = (0, S.bS)(t),
                        { offset: o, totalResults: c } = s;
                    (0, O.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: r,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != h ? h.length : null,
                        totalResults: c,
                        limit: M.T_y,
                        page: Math.floor(o / M.T_y) + 1,
                        offset: o,
                        index: n,
                        searchQueryString: R.A.getSearchInputText(t),
                        searchQuery: N.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, r, h],
            ),
            G = a.useCallback(
                (e) => {
                    (0, O.kq)({ searchContext: t, searchRequestAnalyticsId: r, newPageIndex: e }), I(e);
                },
                [I, t, r],
            ),
            V = Math.floor(s.offset / M.T_y),
            Y = U && V >= D,
            Z = D + 1,
            z = (0, i.yK)([N.A], () => {
                if (0 !== s.offset) return eR;
                let e = h.length;
                if (e < 10) return eR;
                let n = 0;
                if (
                    (h.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && n++;
                    }),
                    n / e < 0.75)
                )
                    return eR;
                let a = (0, S.bS)(t),
                    l = N.A.getSearchResultsQueryString(a);
                return (0, S._o)(l ?? "").some((e) => e.type === M.LWr.FILTER_AUTHOR_TYPE)
                    ? eR
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [J, W] = (0, g.kn)(z),
            K = J === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            $ = a.useCallback(() => {
                if (s.isSearching) return;
                let e = `${_.Ay[M.LWr.FILTER_AUTHOR_TYPE].key} ${X.intl.string(X.t.tPZo4p)} `;
                R.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, n.jsxs)("section", {
            className: eC.zt,
            "aria-label": X.intl.string(X.t["zkoeq/"]),
            children: [
                (0, n.jsx)(ee, {
                    searchContext: t,
                    searchMode: y,
                    onSearchModeChange: F,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: k,
                }),
                (0, n.jsxs)(u.Ch, {
                    ref: T,
                    className: eC.XG,
                    children: [
                        Y &&
                            !s.isSearching &&
                            (0, n.jsx)(d.p, {
                                className: eC.VC,
                                messageType: d.Y.WARNING,
                                children: X.intl.formatToPlainString(X.t["E+2azY"], { maxPages: Z }),
                            }),
                        K &&
                            (0, n.jsx)(d.p, {
                                className: eC.QR,
                                messageType: d.Y.INFO,
                                children: X.intl.format(X.t["gQeg/R"], { handleClick: $ }),
                            }),
                        (0, n.jsx)(eb, {
                            messages: h,
                            blockCount: p,
                            ignoreCount: m,
                            search: s,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: Q,
                            onScrollTo: H,
                            onPageChange: G,
                            paginationTotalCount: U ? L : void 0,
                            renderPageWrapper: q,
                            onBlockedResultsClick: E,
                            searchRequestAnalyticsId: r,
                            searchResultsQuery: j,
                        }),
                    ],
                }),
                (0, n.jsx)(e_, { searchContext: t, isFeedbackVisible: C, dismissFeedbackEntrypoint: A }),
            ],
        });
    });
function ey(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: r } = (function () {
            let [e, t] = a.useState(!1),
                s = (0, A.H)({ location: "SearchResults" });
            return (
                (0, h.Ay)(() => {
                    s &&
                        p.A.possiblyShowFeedbackModal(
                            ep.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: a.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, S.bS)(t),
        c = (0, i.cf)([C.A, N.A], () => ({
            isSearching: C.A.getIsFetching(o) ?? !1,
            isIndexing: C.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: C.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: C.A.getDocumentsIndexed(o),
            offset: N.A.getSearchResultsOffset(o) ?? 0,
            totalResults: C.A.getTotalCount(o) ?? 0,
            hasError: null != C.A.getError(o),
            showBlockedResults: N.A.shouldShowBlockedResults(o),
            showNoResultsAlt: N.A.shouldShowNoResultsAlt(o),
        })),
        u = (0, i.bG)([C.A], () => C.A.getAnalyticsId(o)),
        {
            renderedMessages: d,
            ignoreCount: g,
            blockCount: x,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, i.bG)(
                    [N.A, C.A, E.A],
                    () => {
                        let e = (0, S.bS)(t),
                            s = N.A.getSearchResultsQuery(e),
                            n = C.A.getMessages(e);
                        if (null == s || null == n || 0 === n.length) return v;
                        let a = (0, y.wG)((0, S.dX)(s) ?? ""),
                            l = [];
                        return (
                            n.forEach((e) => {
                                let t = new k.Ay(e);
                                (t = (t = (function (e, t) {
                                    let [s] = t,
                                        n = s.getMessage(e.id, e.channel_id);
                                    return (
                                        null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e
                                    );
                                })(t, [E.A])).set(
                                    "customRenderedContent",
                                    (0, j.Ay)(t, { postProcessor: a, allowHeading: !0, allowList: !0 }),
                                )),
                                    l.push(t);
                            }),
                            l
                        );
                    },
                    [t],
                    i.My,
                ),
                { blockCount: n, ignoreCount: a } = (0, i.cf)([T.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        s.forEach((s) => {
                            let n = T.A.isBlockedForMessage(s),
                                a = T.A.isIgnoredForMessage(s);
                            n ? e++ : a && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: s, blockCount: n, ignoreCount: a };
        })({ searchContext: t }),
        f = (0, i.bG)([N.A], () => N.A.getSearchMode(o) ?? M.BBH.NEWEST),
        _ = a.useCallback(
            (e) => {
                if (c.isSearching) return;
                b.A.updateSearchMode(t, e);
                let s = R.A.getSearchInputText(t);
                null != s && R.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [c.isSearching, t],
        ),
        I = a.useCallback(
            (e) => {
                if (c.isSearching) return;
                let s = R.A.getSearchInputText(t);
                null != s && R.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * M.T_y });
            },
            [c.isSearching, t],
        ),
        P = (0, i.bG)([N.A], () => {
            let e = (0, S.bS)(t);
            return N.A.getSearchResultsQuery(e);
        }),
        w = a.useCallback((e) => b.A.setShowBlockedResults(t, e), [t]),
        O = a.useDeferredValue(d),
        B = a.useDeferredValue(c),
        H = a.useDeferredValue(u);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eI, {
                searchContext: t,
                search: B,
                searchRequestAnalyticsId: H,
                messages: O,
                ignoreCount: g,
                blockCount: x,
                renderEmbeds: m.rs.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: r,
                onPageChange: I,
                onSearchModeChange: _,
                searchMode: f,
                onBlockedResultsClick: w,
                searchResultsQuery: P,
                selectedChannelId: s,
            }),
            (0, n.jsx)(eS, {
                searchContext: t,
                searchRequestAnalyticsId: H,
                messages: O,
                searchOffset: B.offset,
                searchLimit: M.T_y,
                searchHasError: B.hasError,
                searchTotalResults: B.totalResults,
                searchIsIndexing: B.isHistoricalIndexing,
                isSearching: B.isSearching,
            }),
        ],
    });
}
function eE(e) {
    let { guildId: t, channelId: s } = e,
        a = (0, I.J)({ guildId: t, channelId: s });
    return null == a ? null : (0, n.jsx)(ey, { searchContext: a, selectedChannelId: s });
}
