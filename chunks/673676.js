n.d(t, { Z: () => H }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(681715),
    u = n(481060),
    d = n(493773),
    p = n(243778),
    f = n(169223),
    h = n(695346),
    g = n(592125),
    m = n(585483),
    b = n(171900),
    y = n(607802),
    v = n(759209),
    O = n(532428),
    j = n(991896),
    x = n(611004),
    C = n(165017),
    E = n(737),
    S = n(909125),
    _ = n(817190),
    I = n(315322),
    P = n(656396),
    Z = n(737014),
    N = n(90956),
    T = n(991263),
    A = n(981631),
    w = n(531578),
    R = n(388032),
    D = n(253792);
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
                    ? (0, I.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: x.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: _.Z.getSearchResultsQuery(a),
                      })
                    : (0, I.hM)({
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
                          searchQueryString: x.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: _.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: D.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: D.emptyResultsContent,
            children: t,
        }),
    });
}
function L(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(T.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function U(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: i,
            search: l,
            searchContext: o,
            renderEmbeds: s,
            onClick: c,
            onScrollTo: u,
            onPageChange: d,
            paginationTotalCount: p,
            renderPageWrapper: f,
            onBlockedResultsClick: h,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        } = e,
        { totalResults: y, isSearching: v, isIndexing: O, hasError: j } = l;
    if (j)
        return (0, r.jsxs)(k, {
            children: [
                (0, r.jsx)("div", { className: D.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(D.emptyResultsText, D.errorMessage),
                    children: R.intl.string(R.t.uvDZBZ),
                }),
            ],
        });
    if (O) {
        let e = o.type === A.aib.GUILD ? R.intl.string(R.t.AXPbZr) : R.intl.string(R.t.Q0JJjv);
        return (0, r.jsxs)(k, {
            children: [
                (0, r.jsx)(Z.Z, {}),
                (0, r.jsx)("div", {
                    className: (D.emptyResultsText, D.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (v) return null;
    if (y > 0)
        return (0, r.jsx)(N.Z, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: s,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: p,
            renderPageWrapper: f,
            onBlockedResultsClick: h,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        });
    let { showNoResultsAlt: x } = l,
        C = x ? R.intl.string(R.t["VrK/2R"]) : R.intl.string(R.t.V6nAfF);
    return (0, r.jsxs)(k, {
        children: [
            (0, r.jsx)("div", { className: a()(D.noResultsImage, { [D.alt]: x }) }),
            (0, r.jsx)("div", {
                className: a()(D.emptyResultsText, D.noResults, { [D.alt]: x }),
                children: C,
            }),
        ],
    });
}
let G = [],
    B = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                messages: d,
                blockCount: f,
                ignoreCount: h,
                isFeedbackVisible: b,
                dismissFeedbackEntrypoint: v,
                onSearchModeChange: j,
                onPageChange: C,
                searchMode: E,
                onBlockedResultsClick: Z,
                searchResultsQuery: N,
                isFavoritesSearch: T,
                selectedChannelId: w,
            } = e,
            M = i.useRef(null),
            k = i.useCallback(() => {
                x.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(A.CkL.SEARCH_RESULTS_CLOSE, k),
                () => {
                    m.S.unsubscribe(A.CkL.SEARCH_RESULTS_CLOSE, k);
                }
            ),
            [k],
        );
        let B = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (B.current !== n.showBlockedResults) {
                B.current = n.showBlockedResults;
                let e = M.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let F = i.useCallback((e, t, n) => {
                let r = M.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n,
                });
            }, []),
            {
                paginationTotalCount: H,
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
                        let e = R.intl.formatToPlainString(R.t["E+2azY"], { maxPages: n });
                        return (0, r.jsx)(c.u, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [z, V],
            ),
            K = i.useCallback(
                (e) => {
                    e === E ||
                        n.isSearching ||
                        ((0, I.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        j(e));
                },
                [j, n.isSearching, t, E, a],
            ),
            Y = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        o = (0, y.Tm)(t),
                        { offset: s, totalResults: c } = n;
                    (0, I.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != d ? d.length : null,
                        totalResults: c,
                        limit: A.vpv,
                        page: Math.floor(s / A.vpv) + 1,
                        offset: s,
                        index: r,
                        searchQueryString: x.Z.getSearchInputText(t),
                        searchQuery: _.Z.getSearchResultsQuery(o),
                    });
                },
                [n, t, a, d],
            ),
            q = i.useCallback(
                (e) => {
                    (0, I.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        C(e);
                },
                [C, t, a],
            ),
            X = Math.floor(n.offset / A.vpv),
            Q = z && X >= V,
            J = V + 1,
            $ = (0, o.Wu)([_.Z], () => {
                if (0 !== n.offset) return G;
                let e = d.length;
                if (e < 10) return G;
                let r = 0;
                if (
                    (d.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return G;
                let i = (0, y.Tm)(t),
                    l = _.Z.getSearchResultsQueryString(i);
                return (0, y.kG)(null != l ? l : "").some((e) => e.type === A.dCx.FILTER_AUTHOR_TYPE)
                    ? G
                    : [s.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [ee, et] = (0, p.US)($),
            en = ee === s.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            er = i.useCallback(() => {
                if (n.isSearching) return;
                let e = "".concat(O.ZP[A.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(R.intl.string(R.t.tPZo4p)) + " ";
                x.Z.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, r.jsxs)("section", {
            className: D.searchResultsWrap,
            "aria-label": R.intl.string(R.t["zkoeq/"]),
            children: [
                (0, r.jsx)(P.Z, {
                    searchContext: t,
                    searchMode: E,
                    onSearchModeChange: K,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: w,
                }),
                (0, r.jsxs)(u.Den, {
                    ref: M,
                    className: D.scroller,
                    children: [
                        Q &&
                            !n.isSearching &&
                            (0, r.jsx)(u.Wn, {
                                className: D.paginationLimitHeader,
                                messageType: u.QYI.WARNING,
                                children: R.intl.formatToPlainString(R.t["E+2azY"], { maxPages: J }),
                            }),
                        en &&
                            (0, r.jsx)(u.Wn, {
                                className: D.helpMessageContainer,
                                messageType: u.QYI.INFO,
                                children: R.intl.format(R.t["gQeg/R"], { handleClick: er }),
                            }),
                        (0, r.jsx)(U, {
                            messages: d,
                            blockCount: f,
                            ignoreCount: h,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: Y,
                            onScrollTo: F,
                            onPageChange: q,
                            paginationTotalCount: z ? H : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: Z,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: N,
                            isFavoritesSearch: T,
                        }),
                    ],
                }),
                (0, r.jsx)(L, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: v,
                }),
            ],
        });
    });
function F(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = i.useState(!1),
                n = (0, v.f)({ location: "SearchResults" });
            return (
                (0, d.ZP)(() => {
                    n &&
                        f.Z.possiblyShowFeedbackModal(
                            w.nw.SEARCH_RESULTS,
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
        s = (0, y.Tm)(t),
        c = (0, o.cj)([b.Z, _.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(s)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(s)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(s)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(s),
                offset: null != (r = _.Z.getSearchResultsOffset(s)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(s)) ? i : 0,
                hasError: null != b.Z.getError(s),
                showBlockedResults: _.Z.shouldShowBlockedResults(s),
                showNoResultsAlt: _.Z.shouldShowNoResultsAlt(s),
            };
        }),
        u = (0, o.e7)([b.Z], () => b.Z.getAnalyticsId(s)),
        { renderedMessages: p, ignoreCount: g, blockCount: m } = (0, E.Z)({ searchContext: t }),
        O = (0, o.e7)([_.Z], () => {
            var e;
            return null != (e = _.Z.getSearchMode(s)) ? e : A.QIO.NEWEST;
        }),
        C = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                j.Z.updateSearchMode(t, e);
                let n = x.Z.getSearchInputText(t);
                null != n &&
                    x.Z.fetchMessages({
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
                let n = x.Z.getSearchInputText(t);
                null != n &&
                    x.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: e * A.vpv,
                    });
            },
            [c.isSearching, t],
        ),
        I = (0, o.e7)([_.Z], () => {
            let e = (0, y.Tm)(t);
            return _.Z.getSearchResultsQuery(e);
        }),
        P = t.type === A.aib.FAVORITES,
        Z = i.useCallback((e) => j.Z.setShowBlockedResults(t, e), [t]),
        N = i.useDeferredValue(p),
        T = i.useDeferredValue(c),
        R = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(B, {
                searchContext: t,
                search: T,
                searchRequestAnalyticsId: R,
                messages: N,
                ignoreCount: g,
                blockCount: m,
                renderEmbeds: h.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: C,
                searchMode: O,
                onBlockedResultsClick: Z,
                searchResultsQuery: I,
                isFavoritesSearch: P,
                selectedChannelId: n,
            }),
            (0, r.jsx)(M, {
                searchContext: t,
                searchRequestAnalyticsId: R,
                messages: N,
                searchOffset: T.offset,
                searchLimit: A.vpv,
                searchHasError: T.hasError,
                searchTotalResults: T.totalResults,
                searchIsIndexing: T.isHistoricalIndexing,
                isSearching: T.isSearching,
            }),
        ],
    });
}
function H(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, C.H)({
            guildId: t,
            channelId: n,
        });
    return null == i
        ? null
        : (0, r.jsx)(F, {
              searchContext: i,
              selectedChannelId: n,
          });
}
