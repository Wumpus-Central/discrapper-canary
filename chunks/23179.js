n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(435371),
    c = n(397927),
    u = n(964486),
    h = n(379848),
    A = n(651649),
    g = n(253932),
    m = n(734057),
    p = n(203982),
    _ = n(517381),
    x = n(822382),
    f = n(868974),
    E = n(771650),
    C = n(616252),
    I = n(753806),
    S = n(775427),
    b = n(969715),
    N = n(477654),
    T = n(65600),
    j = n(145331),
    v = n(976966),
    y = n(159083),
    R = n(229374),
    O = n(310420),
    L = n(652215),
    D = n(670455),
    M = n(985018),
    G = n(737299);
class U extends l.Component {
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
                l = 0,
                s = 0;
            e.props.messages.forEach((e) => {
                null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && s++),
                    null != e.embeds && e.embeds.length > 0 && l++,
                    null != e.attachments && e.attachments.length > 0 && i++;
            });
            let a = (0, x.bS)(e.props.searchContext);
            0 === n
                ? (0, j.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: I.A.getSearchInputText(e.props.searchContext),
                      searchQuery: T.A.getSearchResultsQuery(a),
                  })
                : (0, j.H9)({
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
                      pageNumLinks: s,
                      pageNumEmbeds: l,
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
function k(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e;
    return n ? (0, i.jsx)(O.A, { searchContext: t, dismissFeedbackEntrypoint: l }) : null;
}
function w(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: l,
            search: s,
            searchContext: r,
            renderEmbeds: o,
            onClick: d,
            onScrollTo: c,
            onPageChange: u,
            paginationTotalCount: h,
            renderPageWrapper: A,
            onBlockedResultsClick: g,
            searchRequestAnalyticsId: m,
            searchResultsQuery: p,
            isFavoritesSearch: _,
        } = e,
        { totalResults: x, isSearching: f, isIndexing: E, hasError: C } = s;
    if (C)
        return (0, i.jsxs)(P, {
            children: [
                (0, i.jsx)("div", { className: G.M6 }),
                (0, i.jsx)("div", { className: a()(G.pZ, G.gJ), children: M.intl.string(M.t.uvDZBZ) }),
            ],
        });
    if (E) {
        let e = r.type === L.I4_.GUILD ? M.intl.string(M.t.AXPbZr) : M.intl.string(M.t.Q0JJjv);
        return (0, i.jsxs)(P, {
            children: [(0, i.jsx)(y.A, {}), (0, i.jsx)("div", { className: (G.pZ, G.Jy), children: e })],
        });
    }
    if (f) return null;
    if (x > 0)
        return (0, i.jsx)(R.A, {
            search: s,
            messages: t,
            onClick: d,
            blockCount: n,
            ignoreCount: l,
            renderEmbeds: o,
            scrollTo: c,
            onPageChange: u,
            paginationTotalCount: h,
            renderPageWrapper: A,
            onBlockedResultsClick: g,
            searchRequestAnalyticsId: m,
            searchResultsQuery: p,
            isFavoritesSearch: _,
        });
    let { showNoResultsAlt: I } = s,
        S = I ? M.intl.string(M.t["VrK/2R"]) : M.intl.string(M.t.V6nAfF);
    return (0, i.jsxs)(P, {
        children: [
            (0, i.jsx)("div", { className: a()(G.$l, { [G.CC]: I }) }),
            (0, i.jsx)("div", { className: a()(G.pZ, G.wV, { [G.CC]: I }), children: S }),
        ],
    });
}
let V = [],
    B = l.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: s,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: A,
                ignoreCount: g,
                isFeedbackVisible: _,
                dismissFeedbackEntrypoint: f,
                onSearchModeChange: C,
                onPageChange: S,
                searchMode: b,
                onBlockedResultsClick: y,
                searchResultsQuery: R,
                isFavoritesSearch: O,
                selectedChannelId: D,
            } = e,
            U = l.useRef(null),
            P = l.useCallback(() => {
                I.A.cleanUpSearchState(t);
            }, [t]);
        l.useEffect(
            () => (
                p._.subscribe(L.jej.SEARCH_RESULTS_CLOSE, P),
                () => {
                    p._.unsubscribe(L.jej.SEARCH_RESULTS_CLOSE, P);
                }
            ),
            [P],
        );
        let B = l.useRef(n.showBlockedResults);
        l.useEffect(() => {
            if (B.current !== n.showBlockedResults) {
                B.current = n.showBlockedResults;
                let e = U.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let H = l.useCallback((e, t, n) => {
                let i = U.current;
                if (null == i) return;
                let l = i.getScrollerState().scrollTop - e;
                i.scrollTo({ to: l, animate: t, callback: n });
            }, []),
            {
                paginationTotalCount: F,
                paginationMaxIndex: Y,
                isPaginationTotalCountLimited: W,
            } = (0, N.o)({ totalResults: n.totalResults, isSearching: n.isSearching }),
            K = l.useCallback(
                (e, t) => {
                    let n = Y + 1;
                    if (!W || e.targetPage !== n) return t;
                    {
                        let e = M.intl.formatToPlainString(M.t["E+2azY"], { maxPages: n });
                        return (0, i.jsx)(d.m_, { asContainer: !0, text: e, children: t });
                    }
                },
                [W, Y],
            ),
            z = l.useCallback(
                (e) => {
                    e === b ||
                        n.isSearching ||
                        ((0, j.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), C(e));
                },
                [C, n.isSearching, t, b, a],
            ),
            X = l.useCallback(
                (e, i) => {
                    let l = m.A.getChannel(e.channel_id),
                        s = null != l ? l.getGuildId() : null,
                        r = (0, x.bS)(t),
                        { offset: o, totalResults: d } = n;
                    (0, j.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: s,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: d,
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
            q = l.useCallback(
                (e) => {
                    (0, j.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), S(e);
                },
                [S, t, a],
            ),
            J = Math.floor(n.offset / L.T_y),
            Q = W && J >= Y,
            Z = Y + 1,
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
                let l = (0, x.bS)(t),
                    s = T.A.getSearchResultsQueryString(l);
                return (0, x._o)(s ?? "").some((e) => e.type === L.LWr.FILTER_AUTHOR_TYPE)
                    ? V
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [ee, et] = (0, h.kn)($),
            en = ee === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = l.useCallback(() => {
                if (n.isSearching) return;
                let e = `${E.Ay[L.LWr.FILTER_AUTHOR_TYPE].key} ${M.intl.string(M.t.tPZo4p)} `;
                I.A.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, i.jsxs)("section", {
            className: G.zt,
            "aria-label": M.intl.string(M.t["zkoeq/"]),
            children: [
                (0, i.jsx)(v.A, {
                    searchContext: t,
                    searchMode: b,
                    onSearchModeChange: z,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: D,
                }),
                (0, i.jsxs)(c.T7Y, {
                    ref: U,
                    className: G.XG,
                    children: [
                        Q &&
                            !n.isSearching &&
                            (0, i.jsx)(c.po8, {
                                className: G.VC,
                                messageType: c.YCn.WARNING,
                                children: M.intl.formatToPlainString(M.t["E+2azY"], { maxPages: Z }),
                            }),
                        en &&
                            (0, i.jsx)(c.po8, {
                                className: G.QR,
                                messageType: c.YCn.INFO,
                                children: M.intl.format(M.t["gQeg/R"], { handleClick: ei }),
                            }),
                        (0, i.jsx)(w, {
                            messages: u,
                            blockCount: A,
                            ignoreCount: g,
                            search: n,
                            searchContext: t,
                            renderEmbeds: s,
                            onClick: X,
                            onScrollTo: H,
                            onPageChange: q,
                            paginationTotalCount: W ? F : void 0,
                            renderPageWrapper: K,
                            onBlockedResultsClick: y,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: R,
                            isFavoritesSearch: O,
                        }),
                    ],
                }),
                (0, i.jsx)(k, { searchContext: t, isFeedbackVisible: _, dismissFeedbackEntrypoint: f }),
            ],
        });
    });
function H(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: s, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, f.H)({ location: "SearchResults" });
            return (
                (0, u.Ay)(() => {
                    n &&
                        A.A.possiblyShowFeedbackModal(
                            D.MW.SEARCH_RESULTS,
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
        o = (0, x.bS)(t),
        d = (0, r.cf)([_.A, T.A], () => ({
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
        c = (0, r.bG)([_.A], () => _.A.getAnalyticsId(o)),
        { renderedMessages: h, ignoreCount: m, blockCount: p } = (0, b.A)({ searchContext: t }),
        E = (0, r.bG)([T.A], () => T.A.getSearchMode(o) ?? L.BBH.NEWEST),
        S = l.useCallback(
            (e) => {
                if (d.isSearching) return;
                C.A.updateSearchMode(t, e);
                let n = I.A.getSearchInputText(t);
                null != n && I.A.fetchMessages({ searchContext: t, searchQueryString: n, offset: 0 });
            },
            [d.isSearching, t],
        ),
        N = l.useCallback(
            (e) => {
                if (d.isSearching) return;
                let n = I.A.getSearchInputText(t);
                null != n && I.A.fetchMessages({ searchContext: t, searchQueryString: n, offset: e * L.T_y });
            },
            [d.isSearching, t],
        ),
        j = (0, r.bG)([T.A], () => {
            let e = (0, x.bS)(t);
            return T.A.getSearchResultsQuery(e);
        }),
        v = t.type === L.I4_.FAVORITES,
        y = l.useCallback((e) => C.A.setShowBlockedResults(t, e), [t]),
        R = l.useDeferredValue(h),
        O = l.useDeferredValue(d),
        M = l.useDeferredValue(c);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B, {
                searchContext: t,
                search: O,
                searchRequestAnalyticsId: M,
                messages: R,
                ignoreCount: m,
                blockCount: p,
                renderEmbeds: g.rs.useSetting(),
                isFeedbackVisible: s,
                dismissFeedbackEntrypoint: a,
                onPageChange: N,
                onSearchModeChange: S,
                searchMode: E,
                onBlockedResultsClick: y,
                searchResultsQuery: j,
                isFavoritesSearch: v,
                selectedChannelId: n,
            }),
            (0, i.jsx)(U, {
                searchContext: t,
                searchRequestAnalyticsId: M,
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
        l = (0, S.J)({ guildId: t, channelId: n });
    return null == l ? null : (0, i.jsx)(H, { searchContext: l, selectedChannelId: n });
}
