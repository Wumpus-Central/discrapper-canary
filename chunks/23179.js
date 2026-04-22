s.r(t), s.d(t, { default: () => G });
var n = s(627968),
    a = s(64700),
    l = s(503698),
    r = s.n(l),
    i = s(311907),
    o = s(554146),
    c = s(990078),
    u = s(599319),
    d = s(512950),
    h = s(964486),
    g = s(932001),
    p = s(651649),
    m = s(253932),
    x = s(734057),
    f = s(203982),
    C = s(517381),
    S = s(822382),
    A = s(868974),
    _ = s(771650),
    b = s(616252),
    R = s(753806),
    I = s(775427),
    y = s(969715),
    E = s(477654),
    j = s(65600),
    k = s(145331),
    T = s(976966),
    N = s(159083),
    v = s(229374),
    M = s(310420),
    P = s(652215),
    w = s(670455),
    O = s(985018),
    H = s(583222);
class B extends a.Component {
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
                ? (0, k.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: R.A.getSearchInputText(e.props.searchContext),
                      searchQuery: j.A.getSearchResultsQuery(r),
                  })
                : (0, k.H9)({
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
                      searchQuery: j.A.getSearchResultsQuery(r),
                  });
        };
    })();
    render() {
        return null;
    }
}
function L(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: H.Oq, children: (0, n.jsx)("div", { className: H.de, children: t }) });
}
function D(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: a } = e;
    return s ? (0, n.jsx)(M.A, { searchContext: t, dismissFeedbackEntrypoint: a }) : null;
}
function U(e) {
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
        return (0, n.jsxs)(L, {
            children: [
                (0, n.jsx)("div", { className: H.M6 }),
                (0, n.jsx)("div", { className: r()(H.pZ, H.gJ), children: O.intl.string(O.t.uvDZBZ) }),
            ],
        });
    if (A) {
        let e = (0, S.Y7)(i);
        return (0, n.jsxs)(L, {
            children: [(0, n.jsx)(N.A, {}), (0, n.jsx)("div", { className: (H.pZ, H.Jy), children: e })],
        });
    }
    if (C) return null;
    if (f > 0)
        return (0, n.jsx)(v.A, {
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
        R = b ? O.intl.string(O.t["VrK/2R"]) : O.intl.string(O.t.V6nAfF);
    return (0, n.jsxs)(L, {
        children: [
            (0, n.jsx)("div", { className: r()(H.$l, { [H.CC]: b }) }),
            (0, n.jsx)("div", { className: r()(H.pZ, H.wV, { [H.CC]: b }), children: R }),
        ],
    });
}
let q = [],
    F = a.memo(function (e) {
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
                onBlockedResultsClick: N,
                searchResultsQuery: v,
                selectedChannelId: M,
            } = e,
            w = a.useRef(null),
            B = a.useCallback(() => {
                R.A.cleanUpSearchState(t);
            }, [t]);
        a.useEffect(
            () => (
                f._.subscribe(P.jej.SEARCH_RESULTS_CLOSE, B),
                () => {
                    f._.unsubscribe(P.jej.SEARCH_RESULTS_CLOSE, B);
                }
            ),
            [B],
        );
        let L = a.useRef(s.showBlockedResults);
        a.useEffect(() => {
            if (L.current !== s.showBlockedResults) {
                L.current = s.showBlockedResults;
                let e = w.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let F = a.useCallback((e, t, s) => {
                let n = w.current;
                if (null == n) return;
                let a = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: a, animate: t, callback: s });
            }, []),
            {
                paginationTotalCount: Q,
                paginationMaxIndex: G,
                isPaginationTotalCountLimited: V,
            } = (0, E.o)({ totalResults: s.totalResults, isSearching: s.isSearching }),
            Y = a.useCallback(
                (e, t) => {
                    let s = G + 1;
                    if (!V || e.targetPage !== s) return t;
                    {
                        let e = O.intl.formatToPlainString(O.t["E+2azY"], { maxPages: s });
                        return (0, n.jsx)(c.m, { asContainer: !0, text: e, children: t });
                    }
                },
                [V, G],
            ),
            Z = a.useCallback(
                (e) => {
                    e === y ||
                        s.isSearching ||
                        ((0, k.L6)({ searchContext: t, searchRequestAnalyticsId: r, mode: e }), b(e));
                },
                [b, s.isSearching, t, y, r],
            ),
            z = a.useCallback(
                (e, n) => {
                    let a = x.A.getChannel(e.channel_id),
                        l = null != a ? a.getGuildId() : null,
                        i = (0, S.bS)(t),
                        { offset: o, totalResults: c } = s;
                    (0, k.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: r,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != h ? h.length : null,
                        totalResults: c,
                        limit: P.T_y,
                        page: Math.floor(o / P.T_y) + 1,
                        offset: o,
                        index: n,
                        searchQueryString: R.A.getSearchInputText(t),
                        searchQuery: j.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, r, h],
            ),
            J = a.useCallback(
                (e) => {
                    (0, k.kq)({ searchContext: t, searchRequestAnalyticsId: r, newPageIndex: e }), I(e);
                },
                [I, t, r],
            ),
            W = Math.floor(s.offset / P.T_y),
            K = V && W >= G,
            X = G + 1,
            $ = (0, i.yK)([j.A], () => {
                if (0 !== s.offset) return q;
                let e = h.length;
                if (e < 10) return q;
                let n = 0;
                if (
                    (h.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && n++;
                    }),
                    n / e < 0.75)
                )
                    return q;
                let a = (0, S.bS)(t),
                    l = j.A.getSearchResultsQueryString(a);
                return (0, S._o)(l ?? "").some((e) => e.type === P.LWr.FILTER_AUTHOR_TYPE)
                    ? q
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [ee, et] = (0, g.kn)($),
            es = ee === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            en = a.useCallback(() => {
                if (s.isSearching) return;
                let e = `${_.Ay[P.LWr.FILTER_AUTHOR_TYPE].key} ${O.intl.string(O.t.tPZo4p)} `;
                R.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, n.jsxs)("section", {
            className: H.zt,
            "aria-label": O.intl.string(O.t["zkoeq/"]),
            children: [
                (0, n.jsx)(T.A, {
                    searchContext: t,
                    searchMode: y,
                    onSearchModeChange: Z,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: M,
                }),
                (0, n.jsxs)(u.Ch, {
                    ref: w,
                    className: H.XG,
                    children: [
                        K &&
                            !s.isSearching &&
                            (0, n.jsx)(d.p, {
                                className: H.VC,
                                messageType: d.Y.WARNING,
                                children: O.intl.formatToPlainString(O.t["E+2azY"], { maxPages: X }),
                            }),
                        es &&
                            (0, n.jsx)(d.p, {
                                className: H.QR,
                                messageType: d.Y.INFO,
                                children: O.intl.format(O.t["gQeg/R"], { handleClick: en }),
                            }),
                        (0, n.jsx)(U, {
                            messages: h,
                            blockCount: p,
                            ignoreCount: m,
                            search: s,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: z,
                            onScrollTo: F,
                            onPageChange: J,
                            paginationTotalCount: V ? Q : void 0,
                            renderPageWrapper: Y,
                            onBlockedResultsClick: N,
                            searchRequestAnalyticsId: r,
                            searchResultsQuery: v,
                        }),
                    ],
                }),
                (0, n.jsx)(D, { searchContext: t, isFeedbackVisible: C, dismissFeedbackEntrypoint: A }),
            ],
        });
    });
function Q(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: r } = (function () {
            let [e, t] = a.useState(!1),
                s = (0, A.H)({ location: "SearchResults" });
            return (
                (0, h.Ay)(() => {
                    s &&
                        p.A.possiblyShowFeedbackModal(
                            w.MW.SEARCH_RESULTS,
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
        c = (0, i.cf)([C.A, j.A], () => ({
            isSearching: C.A.getIsFetching(o) ?? !1,
            isIndexing: C.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: C.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: C.A.getDocumentsIndexed(o),
            offset: j.A.getSearchResultsOffset(o) ?? 0,
            totalResults: C.A.getTotalCount(o) ?? 0,
            hasError: null != C.A.getError(o),
            showBlockedResults: j.A.shouldShowBlockedResults(o),
            showNoResultsAlt: j.A.shouldShowNoResultsAlt(o),
        })),
        u = (0, i.bG)([C.A], () => C.A.getAnalyticsId(o)),
        { renderedMessages: d, ignoreCount: g, blockCount: x } = (0, y.A)({ searchContext: t }),
        f = (0, i.bG)([j.A], () => j.A.getSearchMode(o) ?? P.BBH.NEWEST),
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
                null != s && R.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * P.T_y });
            },
            [c.isSearching, t],
        ),
        E = (0, i.bG)([j.A], () => {
            let e = (0, S.bS)(t);
            return j.A.getSearchResultsQuery(e);
        }),
        k = a.useCallback((e) => b.A.setShowBlockedResults(t, e), [t]),
        T = a.useDeferredValue(d),
        N = a.useDeferredValue(c),
        v = a.useDeferredValue(u);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(F, {
                searchContext: t,
                search: N,
                searchRequestAnalyticsId: v,
                messages: T,
                ignoreCount: g,
                blockCount: x,
                renderEmbeds: m.rs.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: r,
                onPageChange: I,
                onSearchModeChange: _,
                searchMode: f,
                onBlockedResultsClick: k,
                searchResultsQuery: E,
                selectedChannelId: s,
            }),
            (0, n.jsx)(B, {
                searchContext: t,
                searchRequestAnalyticsId: v,
                messages: T,
                searchOffset: N.offset,
                searchLimit: P.T_y,
                searchHasError: N.hasError,
                searchTotalResults: N.totalResults,
                searchIsIndexing: N.isHistoricalIndexing,
                isSearching: N.isSearching,
            }),
        ],
    });
}
function G(e) {
    let { guildId: t, channelId: s } = e,
        a = (0, I.J)({ guildId: t, channelId: s });
    return null == a ? null : (0, n.jsx)(Q, { searchContext: a, selectedChannelId: s });
}
