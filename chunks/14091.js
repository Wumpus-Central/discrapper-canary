n.d(t, { Z: () => Y }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
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
    _ = n(375123),
    j = n(945577),
    x = n(56522),
    O = n(759209),
    v = n(532428),
    C = n(406326),
    I = n(994463),
    E = n(991896),
    S = n(611004),
    Z = n(619753),
    T = n(902733),
    P = n(165017),
    N = n(737),
    R = n(967974),
    w = n(909125),
    A = n(817190),
    D = n(315322),
    L = n(981631),
    M = n(531578),
    k = n(388032),
    U = n(669922);
class G extends i.Component {
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
                    ? (0, D.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: S.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: A.Z.getSearchResultsQuery(a),
                      })
                    : (0, D.hM)({
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
                          searchQueryString: S.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: A.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function H(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: U.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: U.emptyResultsContent,
            children: t,
        }),
    });
}
function F(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(T.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function B(e) {
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
        { totalResults: y, isSearching: _, isIndexing: j, hasError: x } = l;
    if (x)
        return (0, r.jsxs)(H, {
            children: [
                (0, r.jsx)("div", { className: U.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(U.emptyResultsText, U.errorMessage),
                    children: k.intl.string(k.t.uvDZBQ),
                }),
            ],
        });
    if (j) {
        let e = s.type === L.aib.GUILD ? k.intl.string(k.t.AXPbZm) : k.intl.string(k.t.Q0JJjo);
        return (0, r.jsxs)(H, {
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)("div", {
                    className: (U.emptyResultsText, U.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (_) return null;
    if (y > 0)
        return (0, r.jsx)(Z.Z, {
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
    let { showNoResultsAlt: O } = l,
        v = O ? k.intl.string(k.t["VrK/2d"]) : k.intl.string(k.t.V6nAfH);
    return (0, r.jsxs)(H, {
        children: [
            (0, r.jsx)("div", { className: a()(U.noResultsImage, { [U.alt]: O }) }),
            (0, r.jsx)("div", {
                className: a()(U.emptyResultsText, U.noResults, { [U.alt]: O }),
                children: v,
            }),
        ],
    });
}
let z = [],
    V = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: h,
                ignoreCount: f,
                isFeedbackVisible: b,
                dismissFeedbackEntrypoint: j,
                onSearchModeChange: x,
                onPageChange: O,
                searchMode: I,
                onBlockedResultsClick: E,
                searchResultsQuery: Z,
                isFavoritesSearch: T,
            } = e,
            P = i.useRef(null),
            N = i.useCallback(() => {
                S.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(L.CkL.SEARCH_RESULTS_CLOSE, N),
                () => {
                    m.S.unsubscribe(L.CkL.SEARCH_RESULTS_CLOSE, N);
                }
            ),
            [N],
        );
        let R = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (R.current !== n.showBlockedResults) {
                R.current = n.showBlockedResults;
                let e = P.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let M = i.useCallback((e, t, n) => {
                let r = P.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n,
                });
            }, []),
            {
                paginationTotalCount: G,
                paginationMaxIndex: H,
                isPaginationTotalCountLimited: V,
            } = (0, w.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = H + 1;
                    if (!V || e.targetPage !== n) return t;
                    {
                        let e = k.intl.formatToPlainString(k.t["E+2azc"], { maxPages: n });
                        return (0, r.jsx)(c.u, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [V, H],
            ),
            Y = i.useCallback(
                (e) => {
                    e === I ||
                        n.isSearching ||
                        ((0, D.zW)({
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
                    (0, D.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: L.vpv,
                        page: Math.floor(o / L.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: S.Z.getSearchInputText(t),
                        searchQuery: A.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, u],
            ),
            K = i.useCallback(
                (e) => {
                    (0, D.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        O(e);
                },
                [O, t, a],
            ),
            Q = Math.floor(n.offset / L.vpv),
            X = V && Q >= H,
            J = H + 1,
            $ = (0, _.C)({ location: "SearchResults" }),
            ee = (0, s.Wu)([A.Z], () => {
                if (0 !== n.offset || !$) return z;
                let e = u.length;
                if (e < 10) return z;
                let r = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return z;
                let i = (0, y.Tm)(t),
                    l = A.Z.getSearchResultsQueryString(i);
                return (0, y.kG)(null != l ? l : "").some((e) => e.type === L.dCx.FILTER_AUTHOR_TYPE)
                    ? z
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, p.US)(ee),
            er = et === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(v.ZP[L.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(k.intl.string(k.t.tPZo4u)) + " ";
                S.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: U.searchResultsWrap,
            "aria-label": k.intl.string(k.t.zkoeq6),
            children: [
                (0, r.jsx)(C.Z, {
                    searchContext: t,
                    searchMode: I,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                }),
                (0, r.jsxs)(d.Den, {
                    ref: P,
                    className: U.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: U.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: k.intl.formatToPlainString(k.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: U.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: k.intl.format(k.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(B, {
                            messages: u,
                            blockCount: h,
                            ignoreCount: f,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: M,
                            onPageChange: K,
                            paginationTotalCount: V ? G : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: E,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: Z,
                            isFavoritesSearch: T,
                        }),
                    ],
                }),
                (0, r.jsx)(F, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: j,
                }),
            ],
        });
    });
function W(e) {
    let { searchContext: t } = e,
        n = (0, j.UX)({ location: "SearchResults" }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, x.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, O.f)({ location: "SearchResults" }),
                s = e.type === L.aib.DMS || e.type === L.aib.CHANNEL,
                o = (r && s) || l;
            return (
                i.useEffect(() => {
                    o && a && n(!0);
                }, [a, o, l]),
                (0, u.ZP)(() => {
                    o &&
                        (a ||
                            h.Z.possiblyShowFeedbackModal(
                                M.nw.SEARCH_RESULTS,
                                () => n(!0),
                                () => n(!1),
                            ));
                }),
                {
                    dismissFeedbackEntrypoint: i.useCallback(() => {
                        n(!1);
                    }, []),
                    isFeedbackVisible: t,
                }
            );
        })(t),
        o = (0, y.Tm)(t),
        c = (0, s.cj)([b.Z, A.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(o),
                offset: null != (r = A.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(o)) ? i : 0,
                hasError: null != b.Z.getError(o),
                showBlockedResults: A.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: A.Z.shouldShowNoResultsAlt(o),
            };
        }),
        d = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(o)),
        { renderedMessages: p, ignoreCount: g, blockCount: m } = (0, N.Z)({ searchContext: t }),
        { searchMode: _, setSearchMode: v } = (0, R.Z)({ searchContext: t }),
        C = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                v(e);
                let r = S.Z.getSearchInputText(t),
                    i = (0, y.Tm)(t),
                    l = A.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === L.aib.DMS
                        ? S.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e,
                          })
                        : S.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              searchMode: e,
                              offset: 0,
                          }));
            },
            [n, c.isSearching, t, v],
        ),
        I = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                let r = S.Z.getSearchInputText(t),
                    i = (0, y.Tm)(t),
                    l = A.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === L.aib.DMS
                        ? S.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: _,
                          })
                        : S.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * L.vpv,
                          }));
            },
            [n, c.isSearching, t, _],
        ),
        Z = (0, s.e7)([A.Z], () => {
            let e = (0, y.Tm)(t);
            return A.Z.getSearchResultsQuery(e);
        }),
        T = t.type === L.aib.FAVORITES,
        P = i.useCallback((e) => E.Z.setShowBlockedResults(t, e), [t]),
        w = i.useDeferredValue(p),
        D = i.useDeferredValue(c),
        k = i.useDeferredValue(d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(V, {
                searchContext: t,
                search: D,
                searchRequestAnalyticsId: k,
                messages: w,
                ignoreCount: g,
                blockCount: m,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: I,
                onSearchModeChange: C,
                searchMode: _,
                onBlockedResultsClick: P,
                searchResultsQuery: Z,
                isFavoritesSearch: T,
            }),
            (0, r.jsx)(G, {
                searchContext: t,
                searchRequestAnalyticsId: k,
                messages: w,
                searchOffset: D.offset,
                searchLimit: L.vpv,
                searchHasError: D.hasError,
                searchTotalResults: D.totalResults,
                searchIsIndexing: D.isHistoricalIndexing,
                isSearching: D.isSearching,
            }),
        ],
    });
}
function Y(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, P.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(W, { searchContext: i });
}
