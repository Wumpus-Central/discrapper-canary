n.d(t, { Z: () => V }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(681715),
    d = n(481060),
    u = n(493773),
    p = n(243778),
    h = n(169223),
    f = n(695346),
    g = n(592125),
    m = n(585483),
    b = n(171900),
    y = n(607802),
    O = n(28964),
    x = n(759209),
    j = n(532428),
    v = n(991896),
    C = n(611004),
    I = n(165017),
    _ = n(737),
    S = n(909125),
    E = n(817190),
    Z = n(315322),
    P = n(656396),
    T = n(737014),
    N = n(90956),
    R = n(991263),
    w = n(981631),
    A = n(531578),
    D = n(388032),
    L = n(253792);
class M extends i.Component {
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
                    i = 0,
                    l = 0;
                t.props.messages.forEach((e) => {
                    null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                        null != e.embeds && e.embeds.length > 0 && i++,
                        null != e.attachments && e.attachments.length > 0 && r++;
                });
                let a = (0, y.Tm)(t.props.searchContext);
                0 === n
                    ? (0, Z.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: C.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: E.Z.getSearchResultsQuery(a),
                      })
                    : (0, Z.hM)({
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
                          pageNumLinks: l,
                          pageNumEmbeds: i,
                          pageNumAttachments: r,
                          searchQueryString: C.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: E.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: L.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: L.emptyResultsContent,
            children: t,
        }),
    });
}
function U(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(R.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function G(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: i,
            search: l,
            searchContext: s,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: d,
            onPageChange: u,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        } = e,
        { totalResults: y, isSearching: O, isIndexing: x, hasError: j } = l;
    if (j)
        return (0, r.jsxs)(k, {
            children: [
                (0, r.jsx)("div", { className: L.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(L.emptyResultsText, L.errorMessage),
                    children: D.intl.string(D.t.uvDZBZ),
                }),
            ],
        });
    if (x) {
        let e = s.type === w.aib.GUILD ? D.intl.string(D.t.AXPbZr) : D.intl.string(D.t.Q0JJjv);
        return (0, r.jsxs)(k, {
            children: [
                (0, r.jsx)(T.Z, {}),
                (0, r.jsx)("div", {
                    className: (L.emptyResultsText, L.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (O) return null;
    if (y > 0)
        return (0, r.jsx)(N.Z, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: o,
            scrollTo: d,
            onPageChange: u,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        });
    let { showNoResultsAlt: v } = l,
        C = v ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
    return (0, r.jsxs)(k, {
        children: [
            (0, r.jsx)("div", { className: a()(L.noResultsImage, { [L.alt]: v }) }),
            (0, r.jsx)("div", {
                className: a()(L.emptyResultsText, L.noResults, { [L.alt]: v }),
                children: C,
            }),
        ],
    });
}
let H = [],
    F = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: h,
                ignoreCount: f,
                isFeedbackVisible: b,
                dismissFeedbackEntrypoint: O,
                onSearchModeChange: x,
                onPageChange: v,
                searchMode: I,
                onBlockedResultsClick: _,
                searchResultsQuery: T,
                isFavoritesSearch: N,
                selectedChannelId: R,
            } = e,
            A = i.useRef(null),
            M = i.useCallback(() => {
                C.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(w.CkL.SEARCH_RESULTS_CLOSE, M),
                () => {
                    m.S.unsubscribe(w.CkL.SEARCH_RESULTS_CLOSE, M);
                }
            ),
            [M],
        );
        let k = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (k.current !== n.showBlockedResults) {
                k.current = n.showBlockedResults;
                let e = A.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let F = i.useCallback((e, t, n) => {
                let r = A.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n,
                });
            }, []),
            {
                paginationTotalCount: B,
                paginationMaxIndex: V,
                isPaginationTotalCountLimited: z,
            } = (0, S.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = V + 1;
                    if (!z || e.targetPage !== n) return t;
                    {
                        let e = D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: n });
                        return (0, r.jsx)(c.u, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [z, V],
            ),
            Y = i.useCallback(
                (e) => {
                    e === I ||
                        n.isSearching ||
                        ((0, Z.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        x(e));
                },
                [x, n.isSearching, t, I, a],
            ),
            q = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        s = (0, y.Tm)(t),
                        { offset: o, totalResults: c } = n;
                    (0, Z.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: w.vpv,
                        page: Math.floor(o / w.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: C.Z.getSearchInputText(t),
                        searchQuery: E.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, u],
            ),
            K = i.useCallback(
                (e) => {
                    (0, Z.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        v(e);
                },
                [v, t, a],
            ),
            Q = Math.floor(n.offset / w.vpv),
            X = z && Q >= V,
            J = V + 1,
            $ = (0, s.Wu)([E.Z], () => {
                if (0 !== n.offset) return H;
                let e = u.length;
                if (e < 10) return H;
                let r = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return H;
                let i = (0, y.Tm)(t),
                    l = E.Z.getSearchResultsQueryString(i);
                return (0, y.kG)(null != l ? l : "").some((e) => e.type === w.dCx.FILTER_AUTHOR_TYPE)
                    ? H
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [ee, et] = (0, p.US)($),
            en = ee === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            er = i.useCallback(() => {
                if (n.isSearching) return;
                let e = "".concat(j.ZP[w.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(D.intl.string(D.t.tPZo4p)) + " ";
                C.Z.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, r.jsxs)("section", {
            className: L.searchResultsWrap,
            "aria-label": D.intl.string(D.t["zkoeq/"]),
            children: [
                (0, r.jsx)(P.Z, {
                    searchContext: t,
                    searchMode: I,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: R,
                }),
                (0, r.jsxs)(d.Den, {
                    ref: A,
                    className: L.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: L.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: D.intl.formatToPlainString(D.t["E+2azY"], { maxPages: J }),
                            }),
                        en &&
                            (0, r.jsx)(d.Wn, {
                                className: L.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: D.intl.format(D.t["gQeg/R"], { handleClick: er }),
                            }),
                        (0, r.jsx)(G, {
                            messages: u,
                            blockCount: h,
                            ignoreCount: f,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: F,
                            onPageChange: K,
                            paginationTotalCount: z ? B : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: _,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: T,
                            isFavoritesSearch: N,
                        }),
                    ],
                }),
                (0, r.jsx)(U, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: O,
                }),
            ],
        });
    });
function B(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = i.useState(!1),
                n = (0, O.M_)({ location: "SearchResults" }),
                r = (0, x.f)({ location: "SearchResults" }) && n;
            return (
                (0, u.ZP)(() => {
                    r &&
                        h.Z.possiblyShowFeedbackModal(
                            A.nw.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: i.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, y.Tm)(t),
        c = (0, s.cj)([b.Z, E.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(o),
                offset: null != (r = E.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(o)) ? i : 0,
                hasError: null != b.Z.getError(o),
                showBlockedResults: E.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: E.Z.shouldShowNoResultsAlt(o),
            };
        }),
        d = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(o)),
        { renderedMessages: p, ignoreCount: g, blockCount: m } = (0, _.Z)({ searchContext: t }),
        j = (0, s.e7)([E.Z], () => {
            var e;
            return null != (e = E.Z.getSearchMode(o)) ? e : w.QIO.NEWEST;
        }),
        I = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                v.Z.updateSearchMode(t, e);
                let n = C.Z.getSearchInputText(t);
                null != n &&
                    C.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: 0,
                    });
            },
            [c.isSearching, t],
        ),
        S = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                let n = C.Z.getSearchInputText(t);
                null != n &&
                    C.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: e * w.vpv,
                    });
            },
            [c.isSearching, t],
        ),
        Z = (0, s.e7)([E.Z], () => {
            let e = (0, y.Tm)(t);
            return E.Z.getSearchResultsQuery(e);
        }),
        P = t.type === w.aib.FAVORITES,
        T = i.useCallback((e) => v.Z.setShowBlockedResults(t, e), [t]),
        N = i.useDeferredValue(p),
        R = i.useDeferredValue(c),
        D = i.useDeferredValue(d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(F, {
                searchContext: t,
                search: R,
                searchRequestAnalyticsId: D,
                messages: N,
                ignoreCount: g,
                blockCount: m,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: I,
                searchMode: j,
                onBlockedResultsClick: T,
                searchResultsQuery: Z,
                isFavoritesSearch: P,
                selectedChannelId: n,
            }),
            (0, r.jsx)(M, {
                searchContext: t,
                searchRequestAnalyticsId: D,
                messages: N,
                searchOffset: R.offset,
                searchLimit: w.vpv,
                searchHasError: R.hasError,
                searchTotalResults: R.totalResults,
                searchIsIndexing: R.isHistoricalIndexing,
                isSearching: R.isSearching,
            }),
        ],
    });
}
function V(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, I.H)({
            guildId: t,
            channelId: n,
        });
    return null == i
        ? null
        : (0, r.jsx)(B, {
              searchContext: i,
              selectedChannelId: n,
          });
}
