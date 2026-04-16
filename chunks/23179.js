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
    h = n(932001),
    A = n(651649),
    _ = n(253932),
    m = n(734057),
    p = n(203982),
    g = n(517381),
    f = n(822382),
    E = n(868974),
    x = n(771650),
    I = n(616252),
    C = n(753806),
    N = n(775427),
    T = n(969715),
    S = n(477654),
    b = n(65600),
    y = n(145331),
    v = n(976966),
    R = n(159083),
    j = n(229374),
    O = n(310420),
    L = n(652215),
    M = n(670455),
    D = n(985018),
    U = n(85942);
class G extends l.Component {
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
            let a = (0, f.bS)(e.props.searchContext);
            0 === n
                ? (0, y.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: C.A.getSearchInputText(e.props.searchContext),
                      searchQuery: b.A.getSearchResultsQuery(a),
                  })
                : (0, y.H9)({
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
                      searchQueryString: C.A.getSearchInputText(e.props.searchContext),
                      searchQuery: b.A.getSearchResultsQuery(a),
                  });
        };
    })();
    render() {
        return null;
    }
}
function P(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: U.Oq, children: (0, i.jsx)("div", { className: U.de, children: t }) });
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
            onBlockedResultsClick: _,
            searchRequestAnalyticsId: m,
            searchResultsQuery: p,
        } = e,
        { totalResults: g, isSearching: E, isIndexing: x, hasError: I } = s;
    if (I)
        return (0, i.jsxs)(P, {
            children: [
                (0, i.jsx)("div", { className: U.M6 }),
                (0, i.jsx)("div", { className: a()(U.pZ, U.gJ), children: D.intl.string(D.t.uvDZBZ) }),
            ],
        });
    if (x) {
        let e = (0, f.Y7)(r);
        return (0, i.jsxs)(P, {
            children: [(0, i.jsx)(R.A, {}), (0, i.jsx)("div", { className: (U.pZ, U.Jy), children: e })],
        });
    }
    if (E) return null;
    if (g > 0)
        return (0, i.jsx)(j.A, {
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
            onBlockedResultsClick: _,
            searchRequestAnalyticsId: m,
            searchResultsQuery: p,
        });
    let { showNoResultsAlt: C } = s,
        N = C ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
    return (0, i.jsxs)(P, {
        children: [
            (0, i.jsx)("div", { className: a()(U.$l, { [U.CC]: C }) }),
            (0, i.jsx)("div", { className: a()(U.pZ, U.wV, { [U.CC]: C }), children: N }),
        ],
    });
}
let B = [],
    V = l.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: s,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: A,
                ignoreCount: _,
                isFeedbackVisible: g,
                dismissFeedbackEntrypoint: E,
                onSearchModeChange: I,
                onPageChange: N,
                searchMode: T,
                onBlockedResultsClick: R,
                searchResultsQuery: j,
                selectedChannelId: O,
            } = e,
            M = l.useRef(null),
            G = l.useCallback(() => {
                C.A.cleanUpSearchState(t);
            }, [t]);
        l.useEffect(
            () => (
                p._.subscribe(L.jej.SEARCH_RESULTS_CLOSE, G),
                () => {
                    p._.unsubscribe(L.jej.SEARCH_RESULTS_CLOSE, G);
                }
            ),
            [G],
        );
        let P = l.useRef(n.showBlockedResults);
        l.useEffect(() => {
            if (P.current !== n.showBlockedResults) {
                P.current = n.showBlockedResults;
                let e = M.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let V = l.useCallback((e, t, n) => {
                let i = M.current;
                if (null == i) return;
                let l = i.getScrollerState().scrollTop - e;
                i.scrollTo({ to: l, animate: t, callback: n });
            }, []),
            {
                paginationTotalCount: H,
                paginationMaxIndex: F,
                isPaginationTotalCountLimited: W,
            } = (0, S.o)({ totalResults: n.totalResults, isSearching: n.isSearching }),
            K = l.useCallback(
                (e, t) => {
                    let n = F + 1;
                    if (!W || e.targetPage !== n) return t;
                    {
                        let e = D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: n });
                        return (0, i.jsx)(d.m_, { asContainer: !0, text: e, children: t });
                    }
                },
                [W, F],
            ),
            Y = l.useCallback(
                (e) => {
                    e === T ||
                        n.isSearching ||
                        ((0, y.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), I(e));
                },
                [I, n.isSearching, t, T, a],
            ),
            z = l.useCallback(
                (e, i) => {
                    let l = m.A.getChannel(e.channel_id),
                        s = null != l ? l.getGuildId() : null,
                        r = (0, f.bS)(t),
                        { offset: o, totalResults: d } = n;
                    (0, y.i4)({
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
                        searchQueryString: C.A.getSearchInputText(t),
                        searchQuery: b.A.getSearchResultsQuery(r),
                    });
                },
                [n, t, a, u],
            ),
            q = l.useCallback(
                (e) => {
                    (0, y.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), N(e);
                },
                [N, t, a],
            ),
            X = Math.floor(n.offset / L.T_y),
            $ = W && X >= F,
            J = F + 1,
            Q = (0, r.yK)([b.A], () => {
                if (0 !== n.offset) return B;
                let e = u.length;
                if (e < 10) return B;
                let i = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && i++;
                    }),
                    i / e < 0.75)
                )
                    return B;
                let l = (0, f.bS)(t),
                    s = b.A.getSearchResultsQueryString(l);
                return (0, f._o)(s ?? "").some((e) => e.type === L.LWr.FILTER_AUTHOR_TYPE)
                    ? B
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [Z, ee] = (0, h.kn)(Q),
            et = Z === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            en = l.useCallback(() => {
                if (n.isSearching) return;
                let e = `${x.Ay[L.LWr.FILTER_AUTHOR_TYPE].key} ${D.intl.string(D.t.tPZo4p)} `;
                C.A.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, i.jsxs)("section", {
            className: U.zt,
            "aria-label": D.intl.string(D.t["zkoeq/"]),
            children: [
                (0, i.jsx)(v.A, {
                    searchContext: t,
                    searchMode: T,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: O,
                }),
                (0, i.jsxs)(c.T7Y, {
                    ref: M,
                    className: U.XG,
                    children: [
                        $ &&
                            !n.isSearching &&
                            (0, i.jsx)(c.po8, {
                                className: U.VC,
                                messageType: c.YCn.WARNING,
                                children: D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: J }),
                            }),
                        et &&
                            (0, i.jsx)(c.po8, {
                                className: U.QR,
                                messageType: c.YCn.INFO,
                                children: D.intl.format(D.t["gQeg/R"], { handleClick: en }),
                            }),
                        (0, i.jsx)(w, {
                            messages: u,
                            blockCount: A,
                            ignoreCount: _,
                            search: n,
                            searchContext: t,
                            renderEmbeds: s,
                            onClick: z,
                            onScrollTo: V,
                            onPageChange: q,
                            paginationTotalCount: W ? H : void 0,
                            renderPageWrapper: K,
                            onBlockedResultsClick: R,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: j,
                        }),
                    ],
                }),
                (0, i.jsx)(k, { searchContext: t, isFeedbackVisible: g, dismissFeedbackEntrypoint: E }),
            ],
        });
    });
function H(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: s, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, E.H)({ location: "SearchResults" });
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
                    dismissFeedbackEntrypoint: l.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, f.bS)(t),
        d = (0, r.cf)([g.A, b.A], () => ({
            isSearching: g.A.getIsFetching(o) ?? !1,
            isIndexing: g.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: g.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: g.A.getDocumentsIndexed(o),
            offset: b.A.getSearchResultsOffset(o) ?? 0,
            totalResults: g.A.getTotalCount(o) ?? 0,
            hasError: null != g.A.getError(o),
            showBlockedResults: b.A.shouldShowBlockedResults(o),
            showNoResultsAlt: b.A.shouldShowNoResultsAlt(o),
        })),
        c = (0, r.bG)([g.A], () => g.A.getAnalyticsId(o)),
        { renderedMessages: h, ignoreCount: m, blockCount: p } = (0, T.A)({ searchContext: t }),
        x = (0, r.bG)([b.A], () => b.A.getSearchMode(o) ?? L.BBH.NEWEST),
        N = l.useCallback(
            (e) => {
                if (d.isSearching) return;
                I.A.updateSearchMode(t, e);
                let n = C.A.getSearchInputText(t);
                null != n && C.A.fetchMessages({ searchContext: t, searchQueryString: n, offset: 0 });
            },
            [d.isSearching, t],
        ),
        S = l.useCallback(
            (e) => {
                if (d.isSearching) return;
                let n = C.A.getSearchInputText(t);
                null != n && C.A.fetchMessages({ searchContext: t, searchQueryString: n, offset: e * L.T_y });
            },
            [d.isSearching, t],
        ),
        y = (0, r.bG)([b.A], () => {
            let e = (0, f.bS)(t);
            return b.A.getSearchResultsQuery(e);
        }),
        v = l.useCallback((e) => I.A.setShowBlockedResults(t, e), [t]),
        R = l.useDeferredValue(h),
        j = l.useDeferredValue(d),
        O = l.useDeferredValue(c);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(V, {
                searchContext: t,
                search: j,
                searchRequestAnalyticsId: O,
                messages: R,
                ignoreCount: m,
                blockCount: p,
                renderEmbeds: _.rs.useSetting(),
                isFeedbackVisible: s,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: N,
                searchMode: x,
                onBlockedResultsClick: v,
                searchResultsQuery: y,
                selectedChannelId: n,
            }),
            (0, i.jsx)(G, {
                searchContext: t,
                searchRequestAnalyticsId: O,
                messages: R,
                searchOffset: j.offset,
                searchLimit: L.T_y,
                searchHasError: j.hasError,
                searchTotalResults: j.totalResults,
                searchIsIndexing: j.isHistoricalIndexing,
                isSearching: j.isSearching,
            }),
        ],
    });
}
function F(e) {
    let { guildId: t, channelId: n } = e,
        l = (0, N.J)({ guildId: t, channelId: n });
    return null == l ? null : (0, i.jsx)(H, { searchContext: l, selectedChannelId: n });
}
