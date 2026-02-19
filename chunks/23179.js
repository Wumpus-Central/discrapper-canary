"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(554146),
    c = n(435371),
    d = n(397927),
    u = n(964486),
    h = n(379848),
    A = n(651649),
    p = n(253932),
    g = n(734057),
    m = n(203982),
    _ = n(517381),
    f = n(822382),
    x = n(868974),
    C = n(771650),
    E = n(616252),
    I = n(753806),
    b = n(775427),
    N = n(969715),
    S = n(477654),
    T = n(65600),
    v = n(145331),
    y = n(976966),
    j = n(159083),
    R = n(229374),
    O = n(310420),
    L = n(652215),
    M = n(670455),
    D = n(985018),
    G = n(737299);
class U extends s.Component {
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
            let n = 0,
                i = 0,
                s = 0,
                l = 0;
            e.props.messages.forEach((e) => {
                null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                    null != e.embeds && e.embeds.length > 0 && s++,
                    null != e.attachments && e.attachments.length > 0 && i++;
            });
            let r = (0, f.bS)(e.props.searchContext);
            0 === n
                ? (0, v.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: I.A.getSearchInputText(e.props.searchContext),
                      searchQuery: T.A.getSearchResultsQuery(r),
                  })
                : (0, v.H9)({
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
                      pageNumMessages: n,
                      pageNumLinks: l,
                      pageNumEmbeds: s,
                      pageNumAttachments: i,
                      searchQueryString: I.A.getSearchInputText(e.props.searchContext),
                      searchQuery: T.A.getSearchResultsQuery(r),
                  });
        };
    })();
    render() {
        return null;
    }
}
function P(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: G.Oq, children: (0, i.jsx)("div", { className: G.de, children: t }) });
}
function w(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: s } = e;
    return n ? (0, i.jsx)(O.A, { searchContext: t, dismissFeedbackEntrypoint: s }) : null;
}
function k(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: s,
            search: l,
            searchContext: a,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: d,
            onPageChange: u,
            paginationTotalCount: h,
            renderPageWrapper: A,
            onBlockedResultsClick: p,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: _,
        } = e,
        { totalResults: f, isSearching: x, isIndexing: C, hasError: E } = l;
    if (E)
        return (0, i.jsxs)(P, {
            children: [
                (0, i.jsx)("div", { className: G.M6 }),
                (0, i.jsx)("div", { className: r()(G.pZ, G.gJ), children: D.intl.string(D.t.uvDZBZ) }),
            ],
        });
    if (C) {
        let e = a.type === L.I4_.GUILD ? D.intl.string(D.t.AXPbZr) : D.intl.string(D.t.Q0JJjv);
        return (0, i.jsxs)(P, {
            children: [(0, i.jsx)(j.A, {}), (0, i.jsx)("div", { className: (G.pZ, G.Jy), children: e })],
        });
    }
    if (x) return null;
    if (f > 0)
        return (0, i.jsx)(R.A, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: n,
            ignoreCount: s,
            renderEmbeds: o,
            scrollTo: d,
            onPageChange: u,
            paginationTotalCount: h,
            renderPageWrapper: A,
            onBlockedResultsClick: p,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: _,
        });
    let { showNoResultsAlt: I } = l,
        b = I ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
    return (0, i.jsxs)(P, {
        children: [
            (0, i.jsx)("div", { className: r()(G.$l, { [G.CC]: I }) }),
            (0, i.jsx)("div", { className: r()(G.pZ, G.wV, { [G.CC]: I }), children: b }),
        ],
    });
}
let V = [],
    B = s.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: r,
                messages: u,
                blockCount: A,
                ignoreCount: p,
                isFeedbackVisible: _,
                dismissFeedbackEntrypoint: x,
                onSearchModeChange: E,
                onPageChange: b,
                searchMode: N,
                onBlockedResultsClick: j,
                searchResultsQuery: R,
                isFavoritesSearch: O,
                selectedChannelId: M,
            } = e,
            U = s.useRef(null),
            P = s.useCallback(() => {
                I.A.cleanUpSearchState(t);
            }, [t]);
        s.useEffect(
            () => (
                m._.subscribe(L.jej.SEARCH_RESULTS_CLOSE, P),
                () => {
                    m._.unsubscribe(L.jej.SEARCH_RESULTS_CLOSE, P);
                }
            ),
            [P],
        );
        let B = s.useRef(n.showBlockedResults);
        s.useEffect(() => {
            if (B.current !== n.showBlockedResults) {
                B.current = n.showBlockedResults;
                let e = U.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let H = s.useCallback((e, t, n) => {
                let i = U.current;
                if (null == i) return;
                let s = i.getScrollerState().scrollTop - e;
                i.scrollTo({ to: s, animate: t, callback: n });
            }, []),
            {
                paginationTotalCount: F,
                paginationMaxIndex: K,
                isPaginationTotalCountLimited: W,
            } = (0, S.o)({ totalResults: n.totalResults, isSearching: n.isSearching }),
            Y = s.useCallback(
                (e, t) => {
                    let n = K + 1;
                    if (!W || e.targetPage !== n) return t;
                    {
                        let e = D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: n });
                        return (0, i.jsx)(c.m_, { asContainer: !0, text: e, children: t });
                    }
                },
                [W, K],
            ),
            z = s.useCallback(
                (e) => {
                    e === N ||
                        n.isSearching ||
                        ((0, v.L6)({ searchContext: t, searchRequestAnalyticsId: r, mode: e }), E(e));
                },
                [E, n.isSearching, t, N, r],
            ),
            X = s.useCallback(
                (e, i) => {
                    let s = g.A.getChannel(e.channel_id),
                        l = null != s ? s.getGuildId() : null,
                        a = (0, f.bS)(t),
                        { offset: o, totalResults: c } = n;
                    (0, v.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: r,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: L.T_y,
                        page: Math.floor(o / L.T_y) + 1,
                        offset: o,
                        index: i,
                        searchQueryString: I.A.getSearchInputText(t),
                        searchQuery: T.A.getSearchResultsQuery(a),
                    });
                },
                [n, t, r, u],
            ),
            q = s.useCallback(
                (e) => {
                    (0, v.kq)({ searchContext: t, searchRequestAnalyticsId: r, newPageIndex: e }), b(e);
                },
                [b, t, r],
            ),
            J = Math.floor(n.offset / L.T_y),
            Q = W && J >= K,
            $ = K + 1,
            Z = (0, a.yK)([T.A], () => {
                if (0 !== n.offset) return V;
                let e = u.length;
                if (e < 10) return V;
                let i = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && i++;
                    }),
                    i / e < 0.75)
                )
                    return V;
                let s = (0, f.bS)(t),
                    l = T.A.getSearchResultsQueryString(s);
                return (0, f._o)(l ?? "").some((e) => e.type === L.LWr.FILTER_AUTHOR_TYPE)
                    ? V
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [ee, et] = (0, h.kn)(Z),
            en = ee === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = s.useCallback(() => {
                if (n.isSearching) return;
                let e = `${C.Ay[L.LWr.FILTER_AUTHOR_TYPE].key} ${D.intl.string(D.t.tPZo4p)} `;
                I.A.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, i.jsxs)("section", {
            className: G.zt,
            "aria-label": D.intl.string(D.t["zkoeq/"]),
            children: [
                (0, i.jsx)(y.A, {
                    searchContext: t,
                    searchMode: N,
                    onSearchModeChange: z,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: M,
                }),
                (0, i.jsxs)(d.T7Y, {
                    ref: U,
                    className: G.XG,
                    children: [
                        Q &&
                            !n.isSearching &&
                            (0, i.jsx)(d.po8, {
                                className: G.VC,
                                messageType: d.YCn.WARNING,
                                children: D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: $ }),
                            }),
                        en &&
                            (0, i.jsx)(d.po8, {
                                className: G.QR,
                                messageType: d.YCn.INFO,
                                children: D.intl.format(D.t["gQeg/R"], { handleClick: ei }),
                            }),
                        (0, i.jsx)(k, {
                            messages: u,
                            blockCount: A,
                            ignoreCount: p,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: X,
                            onScrollTo: H,
                            onPageChange: q,
                            paginationTotalCount: W ? F : void 0,
                            renderPageWrapper: Y,
                            onBlockedResultsClick: j,
                            searchRequestAnalyticsId: r,
                            searchResultsQuery: R,
                            isFavoritesSearch: O,
                        }),
                    ],
                }),
                (0, i.jsx)(w, { searchContext: t, isFeedbackVisible: _, dismissFeedbackEntrypoint: x }),
            ],
        });
    });
function H(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: r } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, x.H)({ location: "SearchResults" });
            return (
                (0, u.Ay)(() => {
                    n &&
                        A.A.possiblyShowFeedbackModal(
                            M.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: s.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, f.bS)(t),
        c = (0, a.cf)([_.A, T.A], () => ({
            isSearching: _.A.getIsFetching(o) ?? !1,
            isIndexing: _.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: _.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: _.A.getDocumentsIndexed(o),
            offset: T.A.getSearchResultsOffset(o) ?? 0,
            totalResults: _.A.getTotalCount(o) ?? 0,
            hasError: null != _.A.getError(o),
            showBlockedResults: T.A.shouldShowBlockedResults(o),
            showNoResultsAlt: T.A.shouldShowNoResultsAlt(o),
        })),
        d = (0, a.bG)([_.A], () => _.A.getAnalyticsId(o)),
        { renderedMessages: h, ignoreCount: g, blockCount: m } = (0, N.A)({ searchContext: t }),
        C = (0, a.bG)([T.A], () => T.A.getSearchMode(o) ?? L.BBH.NEWEST),
        b = s.useCallback(
            (e) => {
                if (c.isSearching) return;
                E.A.updateSearchMode(t, e);
                let n = I.A.getSearchInputText(t);
                null != n && I.A.fetchMessages({ searchContext: t, searchQueryString: n, offset: 0 });
            },
            [c.isSearching, t],
        ),
        S = s.useCallback(
            (e) => {
                if (c.isSearching) return;
                let n = I.A.getSearchInputText(t);
                null != n && I.A.fetchMessages({ searchContext: t, searchQueryString: n, offset: e * L.T_y });
            },
            [c.isSearching, t],
        ),
        v = (0, a.bG)([T.A], () => {
            let e = (0, f.bS)(t);
            return T.A.getSearchResultsQuery(e);
        }),
        y = t.type === L.I4_.FAVORITES,
        j = s.useCallback((e) => E.A.setShowBlockedResults(t, e), [t]),
        R = s.useDeferredValue(h),
        O = s.useDeferredValue(c),
        D = s.useDeferredValue(d);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B, {
                searchContext: t,
                search: O,
                searchRequestAnalyticsId: D,
                messages: R,
                ignoreCount: g,
                blockCount: m,
                renderEmbeds: p.rs.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: r,
                onPageChange: S,
                onSearchModeChange: b,
                searchMode: C,
                onBlockedResultsClick: j,
                searchResultsQuery: v,
                isFavoritesSearch: y,
                selectedChannelId: n,
            }),
            (0, i.jsx)(U, {
                searchContext: t,
                searchRequestAnalyticsId: D,
                messages: R,
                searchOffset: O.offset,
                searchLimit: L.T_y,
                searchHasError: O.hasError,
                searchTotalResults: O.totalResults,
                searchIsIndexing: O.isHistoricalIndexing,
                isSearching: O.isSearching,
            }),
        ],
    });
}
function F(e) {
    let { guildId: t, channelId: n } = e,
        s = (0, b.J)({ guildId: t, channelId: n });
    return null == s ? null : (0, i.jsx)(H, { searchContext: s, selectedChannelId: n });
}
