n.d(t, { Z: () => V }), n(388685), n(35282);
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
    j = n(56522),
    x = n(759209),
    O = n(532428),
    v = n(406326),
    C = n(994463),
    I = n(991896),
    E = n(611004),
    S = n(619753),
    Z = n(902733),
    T = n(165017),
    P = n(737),
    N = n(909125),
    R = n(817190),
    w = n(315322),
    A = n(981631),
    D = n(531578),
    L = n(388032),
    M = n(669922);
class k extends i.Component {
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
                    ? (0, w.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: E.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: R.Z.getSearchResultsQuery(a),
                      })
                    : (0, w.hM)({
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
                          searchQueryString: E.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: R.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function U(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: M.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: M.emptyResultsContent,
            children: t,
        }),
    });
}
function G(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(Z.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function H(e) {
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
        return (0, r.jsxs)(U, {
            children: [
                (0, r.jsx)("div", { className: M.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(M.emptyResultsText, M.errorMessage),
                    children: L.intl.string(L.t.uvDZBQ),
                }),
            ],
        });
    if (j) {
        let e = s.type === A.aib.GUILD ? L.intl.string(L.t.AXPbZm) : L.intl.string(L.t.Q0JJjo);
        return (0, r.jsxs)(U, {
            children: [
                (0, r.jsx)(C.Z, {}),
                (0, r.jsx)("div", {
                    className: (M.emptyResultsText, M.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (_) return null;
    if (y > 0)
        return (0, r.jsx)(S.Z, {
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
        v = O ? L.intl.string(L.t["VrK/2d"]) : L.intl.string(L.t.V6nAfH);
    return (0, r.jsxs)(U, {
        children: [
            (0, r.jsx)("div", { className: a()(M.noResultsImage, { [M.alt]: O }) }),
            (0, r.jsx)("div", {
                className: a()(M.emptyResultsText, M.noResults, { [M.alt]: O }),
                children: v,
            }),
        ],
    });
}
let F = [],
    B = i.memo(function (e) {
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
                onPageChange: C,
                searchMode: I,
                onBlockedResultsClick: S,
                searchResultsQuery: Z,
                isFavoritesSearch: T,
            } = e,
            P = i.useRef(null),
            D = i.useCallback(() => {
                E.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(A.CkL.SEARCH_RESULTS_CLOSE, D),
                () => {
                    m.S.unsubscribe(A.CkL.SEARCH_RESULTS_CLOSE, D);
                }
            ),
            [D],
        );
        let k = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (k.current !== n.showBlockedResults) {
                k.current = n.showBlockedResults;
                let e = P.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let U = i.useCallback((e, t, n) => {
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
                paginationTotalCount: B,
                paginationMaxIndex: z,
                isPaginationTotalCountLimited: V,
            } = (0, N.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = z + 1;
                    if (!V || e.targetPage !== n) return t;
                    {
                        let e = L.intl.formatToPlainString(L.t["E+2azc"], { maxPages: n });
                        return (0, r.jsx)(c.u, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [V, z],
            ),
            Y = i.useCallback(
                (e) => {
                    e === I ||
                        n.isSearching ||
                        ((0, w.zW)({
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
                    (0, w.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: A.vpv,
                        page: Math.floor(o / A.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: E.Z.getSearchInputText(t),
                        searchQuery: R.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, u],
            ),
            K = i.useCallback(
                (e) => {
                    (0, w.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        C(e);
                },
                [C, t, a],
            ),
            Q = Math.floor(n.offset / A.vpv),
            X = V && Q >= z,
            J = z + 1,
            $ = (0, _.C)({ location: "SearchResults" }),
            ee = (0, s.Wu)([R.Z], () => {
                if (0 !== n.offset || !$) return F;
                let e = u.length;
                if (e < 10) return F;
                let r = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return F;
                let i = (0, y.Tm)(t),
                    l = R.Z.getSearchResultsQueryString(i);
                return (0, y.kG)(null != l ? l : "").some((e) => e.type === A.dCx.FILTER_AUTHOR_TYPE)
                    ? F
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, p.US)(ee),
            er = et === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(O.ZP[A.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(L.intl.string(L.t.tPZo4u)) + " ";
                E.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: M.searchResultsWrap,
            "aria-label": L.intl.string(L.t.zkoeq6),
            children: [
                (0, r.jsx)(v.Z, {
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
                    className: M.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: M.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: L.intl.formatToPlainString(L.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: M.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: L.intl.format(L.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(H, {
                            messages: u,
                            blockCount: h,
                            ignoreCount: f,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: U,
                            onPageChange: K,
                            paginationTotalCount: V ? B : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: S,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: Z,
                            isFavoritesSearch: T,
                        }),
                    ],
                }),
                (0, r.jsx)(G, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: j,
                }),
            ],
        });
    });
function z(e) {
    let { searchContext: t } = e,
        { isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, j.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, x.f)({ location: "SearchResults" }),
                s = e.type === A.aib.DMS || e.type === A.aib.CHANNEL,
                o = (r && s) || l;
            return (
                i.useEffect(() => {
                    o && a && n(!0);
                }, [a, o, l]),
                (0, u.ZP)(() => {
                    o &&
                        (a ||
                            h.Z.possiblyShowFeedbackModal(
                                D.nw.SEARCH_RESULTS,
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
        a = (0, y.Tm)(t),
        o = (0, s.cj)([b.Z, R.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(a)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(a)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(a)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(a),
                offset: null != (r = R.Z.getSearchResultsOffset(a)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(a)) ? i : 0,
                hasError: null != b.Z.getError(a),
                showBlockedResults: R.Z.shouldShowBlockedResults(a),
                showNoResultsAlt: R.Z.shouldShowNoResultsAlt(a),
            };
        }),
        c = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(a)),
        { renderedMessages: d, ignoreCount: p, blockCount: g } = (0, P.Z)({ searchContext: t }),
        m = (0, s.e7)([R.Z], () => {
            var e;
            return null != (e = R.Z.getSearchMode(a)) ? e : A.QIO.NEWEST;
        }),
        _ = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                I.Z.updateSearchMode(t, e);
                let n = E.Z.getSearchInputText(t),
                    r = (0, y.Tm)(t),
                    i = R.Z.getSearchResultsQuery(r);
                null != n &&
                    null != i &&
                    (t.type === A.aib.DMS
                        ? E.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: n,
                              selectedPageIndex: 0,
                          })
                        : E.Z.fetchMessages({
                              searchContext: t,
                              queryString: n,
                              searchQuery: i,
                              offset: 0,
                          }));
            },
            [o.isSearching, t],
        ),
        O = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let n = E.Z.getSearchInputText(t),
                    r = (0, y.Tm)(t),
                    i = R.Z.getSearchResultsQuery(r);
                null != n &&
                    null != i &&
                    (t.type === A.aib.DMS
                        ? E.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: n,
                              selectedPageIndex: e,
                          })
                        : E.Z.fetchMessages({
                              searchContext: t,
                              queryString: n,
                              searchQuery: i,
                              offset: e * A.vpv,
                          }));
            },
            [o.isSearching, t],
        ),
        v = (0, s.e7)([R.Z], () => {
            let e = (0, y.Tm)(t);
            return R.Z.getSearchResultsQuery(e);
        }),
        C = t.type === A.aib.FAVORITES,
        S = i.useCallback((e) => I.Z.setShowBlockedResults(t, e), [t]),
        Z = i.useDeferredValue(d),
        T = i.useDeferredValue(o),
        N = i.useDeferredValue(c);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(B, {
                searchContext: t,
                search: T,
                searchRequestAnalyticsId: N,
                messages: Z,
                ignoreCount: p,
                blockCount: g,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: l,
                onPageChange: O,
                onSearchModeChange: _,
                searchMode: m,
                onBlockedResultsClick: S,
                searchResultsQuery: v,
                isFavoritesSearch: C,
            }),
            (0, r.jsx)(k, {
                searchContext: t,
                searchRequestAnalyticsId: N,
                messages: Z,
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
function V(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, T.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(z, { searchContext: i });
}
