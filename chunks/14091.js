n.d(t, { Z: () => W }), n(388685), n(35282);
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
    O = n(759209),
    x = n(532428),
    v = n(406326),
    C = n(994463),
    I = n(991896),
    E = n(611004),
    S = n(619753),
    Z = n(902733),
    T = n(165017),
    P = n(737),
    N = n(967974),
    R = n(909125),
    w = n(817190),
    A = n(315322),
    D = n(981631),
    L = n(531578),
    M = n(388032),
    k = n(669922);
class U extends i.Component {
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
                    ? (0, A.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: E.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: w.Z.getSearchResultsQuery(a),
                      })
                    : (0, A.hM)({
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
                          searchQuery: w.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: k.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: k.emptyResultsContent,
            children: t,
        }),
    });
}
function H(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(Z.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function F(e) {
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
        { totalResults: y, isSearching: _, isIndexing: j, hasError: O } = l;
    if (O)
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)("div", { className: k.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(k.emptyResultsText, k.errorMessage),
                    children: M.intl.string(M.t.uvDZBQ),
                }),
            ],
        });
    if (j) {
        let e = s.type === D.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)(C.Z, {}),
                (0, r.jsx)("div", {
                    className: (k.emptyResultsText, k.stillIndexing),
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
    let { showNoResultsAlt: x } = l,
        v = x ? M.intl.string(M.t["VrK/2d"]) : M.intl.string(M.t.V6nAfH);
    return (0, r.jsxs)(G, {
        children: [
            (0, r.jsx)("div", { className: a()(k.noResultsImage, { [k.alt]: x }) }),
            (0, r.jsx)("div", {
                className: a()(k.emptyResultsText, k.noResults, { [k.alt]: x }),
                children: v,
            }),
        ],
    });
}
let B = [],
    z = i.memo(function (e) {
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
                onSearchModeChange: O,
                onPageChange: C,
                searchMode: I,
                onBlockedResultsClick: S,
                searchResultsQuery: Z,
                isFavoritesSearch: T,
            } = e,
            P = i.useRef(null),
            N = i.useCallback(() => {
                E.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, N),
                () => {
                    m.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, N);
                }
            ),
            [N],
        );
        let L = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (L.current !== n.showBlockedResults) {
                L.current = n.showBlockedResults;
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
                paginationTotalCount: G,
                paginationMaxIndex: z,
                isPaginationTotalCountLimited: V,
            } = (0, R.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = z + 1;
                    if (!V || e.targetPage !== n) return t;
                    {
                        let e = M.intl.formatToPlainString(M.t["E+2azc"], { maxPages: n });
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
                        ((0, A.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        O(e));
                },
                [O, n.isSearching, t, I, a],
            ),
            q = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        s = (0, y.Tm)(t),
                        { offset: o, totalResults: c } = n;
                    (0, A.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: D.vpv,
                        page: Math.floor(o / D.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: E.Z.getSearchInputText(t),
                        searchQuery: w.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, u],
            ),
            K = i.useCallback(
                (e) => {
                    (0, A.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        C(e);
                },
                [C, t, a],
            ),
            Q = Math.floor(n.offset / D.vpv),
            X = V && Q >= z,
            J = z + 1,
            $ = (0, _.C)({ location: "SearchResults" }),
            ee = (0, s.Wu)([w.Z], () => {
                if (0 !== n.offset || !$) return B;
                let e = u.length;
                if (e < 10) return B;
                let r = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return B;
                let i = (0, y.Tm)(t),
                    l = w.Z.getSearchResultsQueryString(i);
                return (0, y.kG)(null != l ? l : "").some((e) => e.type === D.dCx.FILTER_AUTHOR_TYPE)
                    ? B
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, p.US)(ee),
            er = et === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(x.ZP[D.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(M.intl.string(M.t.tPZo4u)) + " ";
                E.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: k.searchResultsWrap,
            "aria-label": M.intl.string(M.t.zkoeq6),
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
                    className: k.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: k.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: M.intl.formatToPlainString(M.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: k.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: M.intl.format(M.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(F, {
                            messages: u,
                            blockCount: h,
                            ignoreCount: f,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: U,
                            onPageChange: K,
                            paginationTotalCount: V ? G : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: S,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: Z,
                            isFavoritesSearch: T,
                        }),
                    ],
                }),
                (0, r.jsx)(H, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: j,
                }),
            ],
        });
    });
function V(e) {
    let { searchContext: t } = e,
        { isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, j.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, O.f)({ location: "SearchResults" }),
                s = e.type === D.aib.DMS || e.type === D.aib.CHANNEL,
                o = (r && s) || l;
            return (
                i.useEffect(() => {
                    o && a && n(!0);
                }, [a, o, l]),
                (0, u.ZP)(() => {
                    o &&
                        (a ||
                            h.Z.possiblyShowFeedbackModal(
                                L.nw.SEARCH_RESULTS,
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
        o = (0, s.cj)([b.Z, w.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(a)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(a)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(a)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(a),
                offset: null != (r = w.Z.getSearchResultsOffset(a)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(a)) ? i : 0,
                hasError: null != b.Z.getError(a),
                showBlockedResults: w.Z.shouldShowBlockedResults(a),
                showNoResultsAlt: w.Z.shouldShowNoResultsAlt(a),
            };
        }),
        c = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(a)),
        { renderedMessages: d, ignoreCount: p, blockCount: g } = (0, P.Z)({ searchContext: t }),
        { searchMode: m, setSearchMode: _ } = (0, N.Z)({ searchContext: t }),
        x = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                _(e);
                let n = E.Z.getSearchInputText(t),
                    r = (0, y.Tm)(t),
                    i = w.Z.getSearchResultsQuery(r);
                null != n &&
                    null != i &&
                    (t.type === D.aib.DMS
                        ? E.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: n,
                              searchMode: e,
                          })
                        : E.Z.fetchMessages({
                              searchContext: t,
                              queryString: n,
                              searchQuery: i,
                              searchMode: e,
                              offset: 0,
                          }));
            },
            [o.isSearching, t, _],
        ),
        v = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let n = E.Z.getSearchInputText(t),
                    r = (0, y.Tm)(t),
                    i = w.Z.getSearchResultsQuery(r);
                null != n &&
                    null != i &&
                    (t.type === D.aib.DMS
                        ? E.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: n,
                              selectedPageIndex: e,
                              searchMode: m,
                          })
                        : E.Z.fetchMessages({
                              searchContext: t,
                              queryString: n,
                              searchQuery: i,
                              offset: e * D.vpv,
                          }));
            },
            [o.isSearching, t, m],
        ),
        C = (0, s.e7)([w.Z], () => {
            let e = (0, y.Tm)(t);
            return w.Z.getSearchResultsQuery(e);
        }),
        S = t.type === D.aib.FAVORITES,
        Z = i.useCallback((e) => I.Z.setShowBlockedResults(t, e), [t]),
        T = i.useDeferredValue(d),
        R = i.useDeferredValue(o),
        A = i.useDeferredValue(c);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(z, {
                searchContext: t,
                search: R,
                searchRequestAnalyticsId: A,
                messages: T,
                ignoreCount: p,
                blockCount: g,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: l,
                onPageChange: v,
                onSearchModeChange: x,
                searchMode: m,
                onBlockedResultsClick: Z,
                searchResultsQuery: C,
                isFavoritesSearch: S,
            }),
            (0, r.jsx)(U, {
                searchContext: t,
                searchRequestAnalyticsId: A,
                messages: T,
                searchOffset: R.offset,
                searchLimit: D.vpv,
                searchHasError: R.hasError,
                searchTotalResults: R.totalResults,
                searchIsIndexing: R.isHistoricalIndexing,
                isSearching: R.isSearching,
            }),
        ],
    });
}
function W(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, T.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(V, { searchContext: i });
}
