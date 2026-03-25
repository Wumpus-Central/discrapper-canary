"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(554146),
    c = n(435371),
    d = n(397927),
    u = n(964486),
    h = n(932001),
    A = n(651649),
    m = n(253932),
    _ = n(734057),
    p = n(203982),
    g = n(517381),
    f = n(822382),
    x = n(868974),
    C = n(771650),
    E = n(616252),
    I = n(753806),
    N = n(775427),
    b = n(969715),
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
            let a = (0, f.bS)(e.props.searchContext);
            0 === n
                ? (0, v.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: I.A.getSearchInputText(e.props.searchContext),
                      searchQuery: T.A.getSearchResultsQuery(a),
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
                      searchQuery: T.A.getSearchResultsQuery(a),
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
            searchContext: r,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: d,
            onPageChange: u,
            paginationTotalCount: h,
            renderPageWrapper: A,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: _,
            searchResultsQuery: p,
        } = e,
        { totalResults: g, isSearching: x, isIndexing: C, hasError: E } = l;
    if (E)
        return (0, i.jsxs)(P, {
            children: [
                (0, i.jsx)("div", { className: G.M6 }),
                (0, i.jsx)("div", { className: a()(G.pZ, G.gJ), children: D.intl.string(D.t.uvDZBZ) }),
            ],
        });
    if (C) {
        let e = (0, f.Y7)(r);
        return (0, i.jsxs)(P, {
            children: [(0, i.jsx)(j.A, {}), (0, i.jsx)("div", { className: (G.pZ, G.Jy), children: e })],
        });
    }
    if (x) return null;
    if (g > 0)
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
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: _,
            searchResultsQuery: p,
        });
    let { showNoResultsAlt: I } = l,
        N = I ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
    return (0, i.jsxs)(P, {
        children: [
            (0, i.jsx)("div", { className: a()(G.$l, { [G.CC]: I }) }),
            (0, i.jsx)("div", { className: a()(G.pZ, G.wV, { [G.CC]: I }), children: N }),
        ],
    });
}
let V = [],
    B = s.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: A,
                ignoreCount: m,
                isFeedbackVisible: g,
                dismissFeedbackEntrypoint: x,
                onSearchModeChange: E,
                onPageChange: N,
                searchMode: b,
                onBlockedResultsClick: j,
                searchResultsQuery: R,
                selectedChannelId: O,
            } = e,
            M = s.useRef(null),
            U = s.useCallback(() => {
                I.A.cleanUpSearchState(t);
            }, [t]);
        s.useEffect(
            () => (
                p._.subscribe(L.jej.SEARCH_RESULTS_CLOSE, U),
                () => {
                    p._.unsubscribe(L.jej.SEARCH_RESULTS_CLOSE, U);
                }
            ),
            [U],
        );
        let P = s.useRef(n.showBlockedResults);
        s.useEffect(() => {
            if (P.current !== n.showBlockedResults) {
                P.current = n.showBlockedResults;
                let e = M.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let B = s.useCallback((e, t, n) => {
                let i = M.current;
                if (null == i) return;
                let s = i.getScrollerState().scrollTop - e;
                i.scrollTo({ to: s, animate: t, callback: n });
            }, []),
            {
                paginationTotalCount: H,
                paginationMaxIndex: F,
                isPaginationTotalCountLimited: K,
            } = (0, S.o)({ totalResults: n.totalResults, isSearching: n.isSearching }),
            W = s.useCallback(
                (e, t) => {
                    let n = F + 1;
                    if (!K || e.targetPage !== n) return t;
                    {
                        let e = D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: n });
                        return (0, i.jsx)(c.m_, { asContainer: !0, text: e, children: t });
                    }
                },
                [K, F],
            ),
            Y = s.useCallback(
                (e) => {
                    e === b ||
                        n.isSearching ||
                        ((0, v.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), E(e));
                },
                [E, n.isSearching, t, b, a],
            ),
            z = s.useCallback(
                (e, i) => {
                    let s = _.A.getChannel(e.channel_id),
                        l = null != s ? s.getGuildId() : null,
                        r = (0, f.bS)(t),
                        { offset: o, totalResults: c } = n;
                    (0, v.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
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
                        searchQuery: T.A.getSearchResultsQuery(r),
                    });
                },
                [n, t, a, u],
            ),
            q = s.useCallback(
                (e) => {
                    (0, v.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), N(e);
                },
                [N, t, a],
            ),
            X = Math.floor(n.offset / L.T_y),
            J = K && X >= F,
            Q = F + 1,
            $ = (0, r.yK)([T.A], () => {
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
            [Z, ee] = (0, h.kn)($),
            et = Z === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            en = s.useCallback(() => {
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
                    searchMode: b,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: O,
                }),
                (0, i.jsxs)(d.T7Y, {
                    ref: M,
                    className: G.XG,
                    children: [
                        J &&
                            !n.isSearching &&
                            (0, i.jsx)(d.po8, {
                                className: G.VC,
                                messageType: d.YCn.WARNING,
                                children: D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: Q }),
                            }),
                        et &&
                            (0, i.jsx)(d.po8, {
                                className: G.QR,
                                messageType: d.YCn.INFO,
                                children: D.intl.format(D.t["gQeg/R"], { handleClick: en }),
                            }),
                        (0, i.jsx)(k, {
                            messages: u,
                            blockCount: A,
                            ignoreCount: m,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: z,
                            onScrollTo: B,
                            onPageChange: q,
                            paginationTotalCount: K ? H : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: j,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: R,
                        }),
                    ],
                }),
                (0, i.jsx)(w, { searchContext: t, isFeedbackVisible: g, dismissFeedbackEntrypoint: x }),
            ],
        });
    });
function H(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function () {
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
        c = (0, r.cf)([g.A, T.A], () => ({
            isSearching: g.A.getIsFetching(o) ?? !1,
            isIndexing: g.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: g.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: g.A.getDocumentsIndexed(o),
            offset: T.A.getSearchResultsOffset(o) ?? 0,
            totalResults: g.A.getTotalCount(o) ?? 0,
            hasError: null != g.A.getError(o),
            showBlockedResults: T.A.shouldShowBlockedResults(o),
            showNoResultsAlt: T.A.shouldShowNoResultsAlt(o),
        })),
        d = (0, r.bG)([g.A], () => g.A.getAnalyticsId(o)),
        { renderedMessages: h, ignoreCount: _, blockCount: p } = (0, b.A)({ searchContext: t }),
        C = (0, r.bG)([T.A], () => T.A.getSearchMode(o) ?? L.BBH.NEWEST),
        N = s.useCallback(
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
        v = (0, r.bG)([T.A], () => {
            let e = (0, f.bS)(t);
            return T.A.getSearchResultsQuery(e);
        }),
        y = s.useCallback((e) => E.A.setShowBlockedResults(t, e), [t]),
        j = s.useDeferredValue(h),
        R = s.useDeferredValue(c),
        O = s.useDeferredValue(d);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B, {
                searchContext: t,
                search: R,
                searchRequestAnalyticsId: O,
                messages: j,
                ignoreCount: _,
                blockCount: p,
                renderEmbeds: m.rs.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: N,
                searchMode: C,
                onBlockedResultsClick: y,
                searchResultsQuery: v,
                selectedChannelId: n,
            }),
            (0, i.jsx)(U, {
                searchContext: t,
                searchRequestAnalyticsId: O,
                messages: j,
                searchOffset: R.offset,
                searchLimit: L.T_y,
                searchHasError: R.hasError,
                searchTotalResults: R.totalResults,
                searchIsIndexing: R.isHistoricalIndexing,
                isSearching: R.isSearching,
            }),
        ],
    });
}
function F(e) {
    let { guildId: t, channelId: n } = e,
        s = (0, N.J)({ guildId: t, channelId: n });
    return null == s ? null : (0, i.jsx)(H, { searchContext: s, selectedChannelId: n });
}
