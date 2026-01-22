n.d(t, { A: () => B }), n(896048), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(554146),
    c = n(435371),
    u = n(397927),
    d = n(964486),
    f = n(379848),
    p = n(651649),
    h = n(253932),
    b = n(734057),
    g = n(203982),
    m = n(517381),
    A = n(822382),
    y = n(868974),
    O = n(771650),
    j = n(616252),
    v = n(753806),
    x = n(775427),
    E = n(969715),
    _ = n(477654),
    C = n(65600),
    S = n(145331),
    I = n(976966),
    N = n(159083),
    T = n(229374),
    P = n(310420),
    w = n(652215),
    R = n(670455),
    D = n(985018),
    M = n(737299);
class L extends l.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "autoAnalytics", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    l = 0,
                    i = 0;
                t.props.messages.forEach((e) => {
                    null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && i++),
                        null != e.embeds && e.embeds.length > 0 && l++,
                        null != e.attachments && e.attachments.length > 0 && r++;
                });
                let a = (0, A.bS)(t.props.searchContext);
                0 === n
                    ? (0, S.oK)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: v.A.getSearchInputText(t.props.searchContext),
                          searchQuery: C.A.getSearchResultsQuery(a),
                      })
                    : (0, S.H9)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          prevSearchRequestAnalyticsId: e !== t.props.searchRequestAnalyticsId ? e : null,
                          isError: t.props.searchHasError,
                          limit: t.props.searchLimit,
                          offset: t.props.searchOffset,
                          page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                          totalResults: t.props.searchTotalResults,
                          pageResults: null != t.props.messages ? t.props.messages.length : null,
                          isIndexing: t.props.searchIsIndexing,
                          pageNumMessages: n,
                          pageNumLinks: i,
                          pageNumEmbeds: l,
                          pageNumAttachments: r,
                          searchQueryString: v.A.getSearchInputText(t.props.searchContext),
                          searchQuery: C.A.getSearchResultsQuery(a),
                      });
            });
    }
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: M.Oq,
        children: (0, r.jsx)("div", {
            className: M.de,
            children: t,
        }),
    });
}
function k(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e;
    return n
        ? (0, r.jsx)(P.A, {
              searchContext: t,
              dismissFeedbackEntrypoint: l,
          })
        : null;
}
function U(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: l,
            search: i,
            searchContext: s,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: u,
            onPageChange: d,
            paginationTotalCount: f,
            renderPageWrapper: p,
            onBlockedResultsClick: h,
            searchRequestAnalyticsId: b,
            searchResultsQuery: g,
            isFavoritesSearch: m,
        } = e,
        { totalResults: A, isSearching: y, isIndexing: O, hasError: j } = i;
    if (j)
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)("div", { className: M.M6 }),
                (0, r.jsx)("div", {
                    className: a()(M.pZ, M.gJ),
                    children: D.intl.string(D.t.uvDZBZ),
                }),
            ],
        });
    if (O) {
        let e = s.type === w.I4_.GUILD ? D.intl.string(D.t.AXPbZr) : D.intl.string(D.t.Q0JJjv);
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)(N.A, {}),
                (0, r.jsx)("div", {
                    className: (M.pZ, M.Jy),
                    children: e,
                }),
            ],
        });
    }
    if (y) return null;
    if (A > 0)
        return (0, r.jsx)(T.A, {
            search: i,
            messages: t,
            onClick: c,
            blockCount: n,
            ignoreCount: l,
            renderEmbeds: o,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: f,
            renderPageWrapper: p,
            onBlockedResultsClick: h,
            searchRequestAnalyticsId: b,
            searchResultsQuery: g,
            isFavoritesSearch: m,
        });
    let { showNoResultsAlt: v } = i,
        x = v ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
    return (0, r.jsxs)(G, {
        children: [
            (0, r.jsx)("div", { className: a()(M.$l, { [M.CC]: v }) }),
            (0, r.jsx)("div", {
                className: a()(M.pZ, M.wV, { [M.CC]: v }),
                children: x,
            }),
        ],
    });
}
let V = [],
    F = l.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: i,
                searchRequestAnalyticsId: a,
                messages: d,
                blockCount: p,
                ignoreCount: h,
                isFeedbackVisible: m,
                dismissFeedbackEntrypoint: y,
                onSearchModeChange: j,
                onPageChange: x,
                searchMode: E,
                onBlockedResultsClick: N,
                searchResultsQuery: T,
                isFavoritesSearch: P,
                selectedChannelId: R,
            } = e,
            L = l.useRef(null),
            G = l.useCallback(() => {
                v.A.cleanUpSearchState(t);
            }, [t]);
        l.useEffect(
            () => (
                g._.subscribe(w.jej.SEARCH_RESULTS_CLOSE, G),
                () => {
                    g._.unsubscribe(w.jej.SEARCH_RESULTS_CLOSE, G);
                }
            ),
            [G],
        );
        let F = l.useRef(n.showBlockedResults);
        l.useEffect(() => {
            if (F.current !== n.showBlockedResults) {
                F.current = n.showBlockedResults;
                let e = L.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let H = l.useCallback((e, t, n) => {
                let r = L.current;
                if (null == r) return;
                let l = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: l,
                    animate: t,
                    callback: n,
                });
            }, []),
            {
                paginationTotalCount: B,
                paginationMaxIndex: K,
                isPaginationTotalCountLimited: W,
            } = (0, _.o)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            z = l.useCallback(
                (e, t) => {
                    let n = K + 1;
                    if (!W || e.targetPage !== n) return t;
                    {
                        let e = D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: n });
                        return (0, r.jsx)(c.m_, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [W, K],
            ),
            Y = l.useCallback(
                (e) => {
                    e === E ||
                        n.isSearching ||
                        ((0, S.L6)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        j(e));
                },
                [j, n.isSearching, t, E, a],
            ),
            q = l.useCallback(
                (e, r) => {
                    let l = b.A.getChannel(e.channel_id),
                        i = null != l ? l.getGuildId() : null,
                        s = (0, A.bS)(t),
                        { offset: o, totalResults: c } = n;
                    (0, S.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: i,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != d ? d.length : null,
                        totalResults: c,
                        limit: w.T_y,
                        page: Math.floor(o / w.T_y) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: v.A.getSearchInputText(t),
                        searchQuery: C.A.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, d],
            ),
            X = l.useCallback(
                (e) => {
                    (0, S.kq)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        x(e);
                },
                [x, t, a],
            ),
            J = Math.floor(n.offset / w.T_y),
            Q = W && J >= K,
            Z = K + 1,
            $ = (0, s.yK)([C.A], () => {
                if (0 !== n.offset) return V;
                let e = d.length;
                if (e < 10) return V;
                let r = 0;
                if (
                    (d.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return V;
                let l = (0, A.bS)(t),
                    i = C.A.getSearchResultsQueryString(l);
                return (0, A._o)(null != i ? i : "").some((e) => e.type === w.LWr.FILTER_AUTHOR_TYPE)
                    ? V
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [ee, et] = (0, f.kn)($),
            en = ee === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            er = l.useCallback(() => {
                if (n.isSearching) return;
                let e = "".concat(O.Ay[w.LWr.FILTER_AUTHOR_TYPE].key, " ").concat(D.intl.string(D.t.tPZo4p)) + " ";
                v.A.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, r.jsxs)("section", {
            className: M.zt,
            "aria-label": D.intl.string(D.t["zkoeq/"]),
            children: [
                (0, r.jsx)(I.A, {
                    searchContext: t,
                    searchMode: E,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: R,
                }),
                (0, r.jsxs)(u.T7Y, {
                    ref: L,
                    className: M.XG,
                    children: [
                        Q &&
                            !n.isSearching &&
                            (0, r.jsx)(u.po8, {
                                className: M.VC,
                                messageType: u.YCn.WARNING,
                                children: D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: Z }),
                            }),
                        en &&
                            (0, r.jsx)(u.po8, {
                                className: M.QR,
                                messageType: u.YCn.INFO,
                                children: D.intl.format(D.t["gQeg/R"], { handleClick: er }),
                            }),
                        (0, r.jsx)(U, {
                            messages: d,
                            blockCount: p,
                            ignoreCount: h,
                            search: n,
                            searchContext: t,
                            renderEmbeds: i,
                            onClick: q,
                            onScrollTo: H,
                            onPageChange: X,
                            paginationTotalCount: W ? B : void 0,
                            renderPageWrapper: z,
                            onBlockedResultsClick: N,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: T,
                            isFavoritesSearch: P,
                        }),
                    ],
                }),
                (0, r.jsx)(k, {
                    searchContext: t,
                    isFeedbackVisible: m,
                    dismissFeedbackEntrypoint: y,
                }),
            ],
        });
    });
function H(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: i, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, y.H)({ location: "SearchResults" });
            return (
                (0, d.Ay)(() => {
                    n &&
                        p.A.possiblyShowFeedbackModal(
                            R.MW.SEARCH_RESULTS,
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
        o = (0, A.bS)(t),
        c = (0, s.cf)([m.A, C.A], () => {
            var e, t, n, r, l;
            return {
                isSearching: null != (e = m.A.getIsFetching(o)) && e,
                isIndexing: null != (t = m.A.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = m.A.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: m.A.getDocumentsIndexed(o),
                offset: null != (r = C.A.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (l = m.A.getTotalCount(o)) ? l : 0,
                hasError: null != m.A.getError(o),
                showBlockedResults: C.A.shouldShowBlockedResults(o),
                showNoResultsAlt: C.A.shouldShowNoResultsAlt(o),
            };
        }),
        u = (0, s.bG)([m.A], () => m.A.getAnalyticsId(o)),
        { renderedMessages: f, ignoreCount: b, blockCount: g } = (0, E.A)({ searchContext: t }),
        O = (0, s.bG)([C.A], () => {
            var e;
            return null != (e = C.A.getSearchMode(o)) ? e : w.BBH.NEWEST;
        }),
        x = l.useCallback(
            (e) => {
                if (c.isSearching) return;
                j.A.updateSearchMode(t, e);
                let n = v.A.getSearchInputText(t);
                null != n &&
                    v.A.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: 0,
                    });
            },
            [c.isSearching, t],
        ),
        _ = l.useCallback(
            (e) => {
                if (c.isSearching) return;
                let n = v.A.getSearchInputText(t);
                null != n &&
                    v.A.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: e * w.T_y,
                    });
            },
            [c.isSearching, t],
        ),
        S = (0, s.bG)([C.A], () => {
            let e = (0, A.bS)(t);
            return C.A.getSearchResultsQuery(e);
        }),
        I = t.type === w.I4_.FAVORITES,
        N = l.useCallback((e) => j.A.setShowBlockedResults(t, e), [t]),
        T = l.useDeferredValue(f),
        P = l.useDeferredValue(c),
        D = l.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(F, {
                searchContext: t,
                search: P,
                searchRequestAnalyticsId: D,
                messages: T,
                ignoreCount: b,
                blockCount: g,
                renderEmbeds: h.rs.useSetting(),
                isFeedbackVisible: i,
                dismissFeedbackEntrypoint: a,
                onPageChange: _,
                onSearchModeChange: x,
                searchMode: O,
                onBlockedResultsClick: N,
                searchResultsQuery: S,
                isFavoritesSearch: I,
                selectedChannelId: n,
            }),
            (0, r.jsx)(L, {
                searchContext: t,
                searchRequestAnalyticsId: D,
                messages: T,
                searchOffset: P.offset,
                searchLimit: w.T_y,
                searchHasError: P.hasError,
                searchTotalResults: P.totalResults,
                searchIsIndexing: P.isHistoricalIndexing,
                isSearching: P.isSearching,
            }),
        ],
    });
}
function B(e) {
    let { guildId: t, channelId: n } = e,
        l = (0, x.J)({
            guildId: t,
            channelId: n,
        });
    return null == l
        ? null
        : (0, r.jsx)(H, {
              searchContext: l,
              selectedChannelId: n,
          });
}
