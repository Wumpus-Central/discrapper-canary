n.d(t, { Z: () => q }), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(243778),
    p = n(169223),
    f = n(695346),
    g = n(592125),
    m = n(585483),
    b = n(748610),
    y = n(171900),
    x = n(607802),
    _ = n(375123),
    j = n(945577),
    O = n(56522),
    v = n(759209),
    C = n(532428),
    E = n(406326),
    S = n(994463),
    I = n(611004),
    Z = n(619753),
    P = n(902733),
    T = n(165017),
    N = n(737),
    R = n(967974),
    w = n(909125),
    A = n(817190),
    D = n(315322),
    k = n(981631),
    L = n(531578),
    M = n(388032),
    U = n(682065);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class H extends i.Component {
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
            F(this, "autoAnalytics", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    l = 0;
                null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                                null != e.embeds && e.embeds.length > 0 && i++,
                                null != e.attachments && e.attachments.length > 0 && r++;
                        });
                let a = (0, x.Tm)(t.props.searchContext);
                0 === n
                    ? (0, D.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
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
                          pageResults: null != t.props.searchResults ? t.props.searchResults.length : null,
                          isIndexing: t.props.searchIsIndexing,
                          pageNumMessages: n,
                          pageNumLinks: l,
                          pageNumEmbeds: i,
                          pageNumAttachments: r,
                          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: A.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: U.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: U.emptyResultsContent,
            children: t,
        }),
    });
}
function B(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(P.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function W(e) {
    let {
            searchResults: t,
            blockCount: n,
            ignoreCount: i,
            search: l,
            searchContext: s,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: u,
            onPageChange: d,
            paginationTotalCount: h,
            renderPageWrapper: p,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        } = e,
        { totalResults: y, isSearching: x, isIndexing: _, hasError: j } = l;
    if (j)
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)("div", { className: U.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(U.emptyResultsText, U.errorMessage),
                    children: M.intl.string(M.t.uvDZBQ),
                }),
            ],
        });
    if (_) {
        let e = s.type === k.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)(S.Z, {}),
                (0, r.jsx)("div", {
                    className: (U.emptyResultsText, U.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (x) return null;
    if (y > 0)
        return (0, r.jsx)(Z.Z, {
            search: l,
            searchResults: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: o,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: h,
            renderPageWrapper: p,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        });
    let { showNoResultsAlt: O } = l,
        v = O ? M.intl.string(M.t["VrK/2d"]) : M.intl.string(M.t.V6nAfH);
    return (0, r.jsxs)(G, {
        children: [
            (0, r.jsx)("div", { className: a()(U.noResultsImage, { [U.alt]: O }) }),
            (0, r.jsx)("div", {
                className: a()(U.emptyResultsText, U.noResults, { [U.alt]: O }),
                children: v,
            }),
        ],
    });
}
let V = [],
    z = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                searchResults: s,
                blockCount: o,
                ignoreCount: p,
                isFeedbackVisible: f,
                dismissFeedbackEntrypoint: b,
                onSearchModeChange: y,
                onPageChange: j,
                searchMode: O,
                onBlockedResultsClick: v,
                searchResultsQuery: S,
                isFavoritesSearch: Z,
            } = e,
            P = i.useRef(null),
            T = i.useCallback(() => {
                I.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(k.CkL.SEARCH_RESULTS_CLOSE, T),
                () => {
                    m.S.unsubscribe(k.CkL.SEARCH_RESULTS_CLOSE, T);
                }
            ),
            [T],
        );
        let N = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (N.current !== n.showBlockedResults) {
                N.current = n.showBlockedResults;
                let e = P.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let R = i.useCallback((e, t, n) => {
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
                paginationTotalCount: L,
                paginationMaxIndex: H,
                isPaginationTotalCountLimited: G,
            } = (0, w.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            z = i.useCallback(
                (e, t) => {
                    let n = H + 1;
                    if (!G || e.targetPage !== n) return t;
                    {
                        let e = M.intl.formatToPlainString(M.t["E+2azc"], { maxPages: n });
                        return (0, r.jsx)(d.ua7, {
                            tooltipClassName: U.paginationLimitTooltip,
                            tooltipContentClassName: U.paginationLimitTooltipText,
                            text: (0, r.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "text-primary",
                                children: e,
                            }),
                            "aria-label": e,
                            children: (e) => {
                                var n, i;
                                return (0, r.jsx)(
                                    "div",
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (t) {
                                                    F(e, t, n[t]);
                                                });
                                        }
                                        return e;
                                    })({}, e)),
                                    (i = i = { children: t }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n),
                                );
                            },
                        });
                    }
                },
                [G, H],
            ),
            Y = i.useCallback(
                (e) => {
                    e === O ||
                        n.isSearching ||
                        ((0, D.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        y(e));
                },
                [y, n.isSearching, t, O, a],
            ),
            q = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        o = (0, x.Tm)(t),
                        { offset: c, totalResults: u } = n;
                    (0, D.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != s ? s.length : null,
                        totalResults: u,
                        limit: k.vpv,
                        page: Math.floor(c / k.vpv) + 1,
                        offset: c,
                        index: r,
                        searchQueryString: I.Z.getSearchInputText(t),
                        searchQuery: A.Z.getSearchResultsQuery(o),
                    });
                },
                [n, t, a, s],
            ),
            K = i.useCallback(
                (e) => {
                    (0, D.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        j(e);
                },
                [j, t, a],
            ),
            Q = Math.floor(n.offset / k.vpv),
            X = G && Q >= H,
            J = H + 1,
            $ = (0, _.C)({ location: "SearchResults" }),
            ee = (0, c.Wu)([A.Z], () => {
                if (0 !== n.offset || !$) return V;
                let e = s.length;
                if (e < 10) return V;
                let r = 0;
                if (
                    (s.forEach((e) => {
                        e.forEach((e) => {
                            (e.author.bot || null != e.webhookId) && r++;
                        });
                    }),
                    r / e < 0.75)
                )
                    return V;
                let i = (0, x.Tm)(t),
                    l = A.Z.getSearchResultsQueryString(i);
                return (0, x.kG)(null != l ? l : "").some((e) => e.type === k.dCx.FILTER_AUTHOR_TYPE)
                    ? V
                    : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, h.US)(ee),
            er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(C.ZP[k.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
                I.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: U.searchResultsWrap,
            "aria-label": M.intl.string(M.t.zkoeq6),
            children: [
                (0, r.jsx)(E.Z, {
                    searchContext: t,
                    searchMode: O,
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
                                children: M.intl.formatToPlainString(M.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: U.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: M.intl.format(M.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(W, {
                            searchResults: s,
                            blockCount: o,
                            ignoreCount: p,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: R,
                            onPageChange: K,
                            paginationTotalCount: G ? L : void 0,
                            renderPageWrapper: z,
                            onBlockedResultsClick: v,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: S,
                            isFavoritesSearch: Z,
                        }),
                    ],
                }),
                (0, r.jsx)(B, {
                    searchContext: t,
                    isFeedbackVisible: f,
                    dismissFeedbackEntrypoint: b,
                }),
            ],
        });
    });
function Y(e) {
    let { searchContext: t } = e,
        n = (0, j.UX)({ location: "SearchResults" }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let t = i.useRef(e),
                [n, r] = i.useState(!1),
                l = (0, O.M)({ location: "SearchResults" }),
                { enabled: a, force: s } = (0, v.f)({ location: "SearchResults" }),
                o = l || a;
            return (
                i.useEffect(() => {
                    o && s && r(!0);
                }, [s, o, a]),
                i.useEffect(() => {
                    o &&
                        (s ||
                            (e !== t.current &&
                                ((t.current = e),
                                p.Z.possiblyShowFeedbackModal(
                                    L.nw.SEARCH_RESULTS,
                                    () => r(!0),
                                    () => r(!1),
                                ))));
                }, [a, s, e, o]),
                {
                    dismissFeedbackEntrypoint: i.useCallback(() => {
                        r(!1);
                    }, []),
                    isFeedbackVisible: n,
                }
            );
        })(t),
        s = (0, x.Tm)(t),
        o = (0, c.cj)([y.Z, A.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = y.Z.getIsFetching(s)) && e,
                isIndexing: null != (t = y.Z.getIsIndexing(s)) && t,
                isHistoricalIndexing: null != (n = y.Z.getIsHistoricalIndexing(s)) && n,
                documentsIndexed: y.Z.getDocumentsIndexed(s),
                offset: null != (r = A.Z.getSearchResultsOffset(s)) ? r : 0,
                totalResults: null != (i = y.Z.getTotalCount(s)) ? i : 0,
                hasError: null != y.Z.getError(s),
                showBlockedResults: A.Z.shouldShowBlockedResults(s),
                showNoResultsAlt: A.Z.shouldShowNoResultsAlt(s),
            };
        }),
        u = (0, c.e7)([y.Z], () => y.Z.getAnalyticsId(s)),
        { searchResults: d, ignoreCount: h, blockCount: g } = (0, N.Z)({ searchContext: t }),
        { searchMode: m, setSearchMode: _ } = (0, R.Z)({ searchContext: t }),
        C = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                _(e);
                let r = I.Z.getSearchInputText(t),
                    i = (0, x.Tm)(t),
                    l = A.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === k.aib.DMS
                        ? I.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e,
                          })
                        : I.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              searchMode: e,
                              offset: 0,
                          }));
            },
            [n, o.isSearching, t, _],
        ),
        E = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let r = I.Z.getSearchInputText(t),
                    i = (0, x.Tm)(t),
                    l = A.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === k.aib.DMS
                        ? I.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: m,
                          })
                        : I.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * k.vpv,
                          }));
            },
            [n, o.isSearching, t, m],
        ),
        S = (0, c.e7)([A.Z], () => {
            let e = (0, x.Tm)(t);
            return A.Z.getSearchResultsQuery(e);
        }),
        Z = t.type === k.aib.FAVORITES,
        P = i.useCallback((e) => b.Z.setShowBlockedResults(t, e), [t]),
        T = i.useDeferredValue(d),
        w = i.useDeferredValue(o),
        D = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(z, {
                searchContext: t,
                search: w,
                searchRequestAnalyticsId: D,
                searchResults: T,
                ignoreCount: h,
                blockCount: g,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: E,
                onSearchModeChange: C,
                searchMode: m,
                onBlockedResultsClick: P,
                searchResultsQuery: S,
                isFavoritesSearch: Z,
            }),
            (0, r.jsx)(H, {
                searchContext: t,
                searchRequestAnalyticsId: D,
                searchResults: T,
                searchOffset: w.offset,
                searchLimit: k.vpv,
                searchHasError: w.hasError,
                searchTotalResults: w.totalResults,
                searchIsIndexing: w.isHistoricalIndexing,
                isSearching: w.isSearching,
            }),
        ],
    });
}
function q(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, T.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(Y, { searchContext: i });
}
