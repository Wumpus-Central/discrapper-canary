n.d(t, { Z: () => K }), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(493773),
    p = n(243778),
    f = n(169223),
    g = n(695346),
    m = n(592125),
    b = n(585483),
    y = n(748610),
    x = n(171900),
    j = n(607802),
    _ = n(375123),
    O = n(945577),
    v = n(56522),
    C = n(759209),
    E = n(532428),
    S = n(406326),
    I = n(994463),
    Z = n(611004),
    P = n(619753),
    T = n(902733),
    N = n(165017),
    R = n(737),
    w = n(967974),
    A = n(909125),
    D = n(817190),
    k = n(315322),
    L = n(981631),
    M = n(531578),
    U = n(388032),
    F = n(733935);
function H(e, t, n) {
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
            H(this, "autoAnalytics", function () {
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
                let a = (0, j.Tm)(t.props.searchContext);
                0 === n
                    ? (0, k.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: Z.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: D.Z.getSearchResultsQuery(a),
                      })
                    : (0, k.hM)({
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
                          searchQueryString: Z.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: D.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function B(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: F.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: F.emptyResultsContent,
            children: t,
        }),
    });
}
function W(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(T.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function V(e) {
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
        { totalResults: y, isSearching: x, isIndexing: j, hasError: _ } = l;
    if (_)
        return (0, r.jsxs)(B, {
            children: [
                (0, r.jsx)("div", { className: F.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(F.emptyResultsText, F.errorMessage),
                    children: U.intl.string(U.t.uvDZBQ),
                }),
            ],
        });
    if (j) {
        let e = s.type === L.aib.GUILD ? U.intl.string(U.t.AXPbZm) : U.intl.string(U.t.Q0JJjo);
        return (0, r.jsxs)(B, {
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)("div", {
                    className: (F.emptyResultsText, F.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (x) return null;
    if (y > 0)
        return (0, r.jsx)(P.Z, {
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
        v = O ? U.intl.string(U.t["VrK/2d"]) : U.intl.string(U.t.V6nAfH);
    return (0, r.jsxs)(B, {
        children: [
            (0, r.jsx)("div", { className: a()(F.noResultsImage, { [F.alt]: O }) }),
            (0, r.jsx)("div", {
                className: a()(F.emptyResultsText, F.noResults, { [F.alt]: O }),
                children: v,
            }),
        ],
    });
}
let z = [],
    Y = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                searchResults: s,
                blockCount: o,
                ignoreCount: h,
                isFeedbackVisible: f,
                dismissFeedbackEntrypoint: g,
                onSearchModeChange: y,
                onPageChange: x,
                searchMode: O,
                onBlockedResultsClick: v,
                searchResultsQuery: C,
                isFavoritesSearch: I,
            } = e,
            P = i.useRef(null),
            T = i.useCallback(() => {
                Z.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                b.S.subscribe(L.CkL.SEARCH_RESULTS_CLOSE, T),
                () => {
                    b.S.unsubscribe(L.CkL.SEARCH_RESULTS_CLOSE, T);
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
                paginationTotalCount: w,
                paginationMaxIndex: M,
                isPaginationTotalCountLimited: G,
            } = (0, A.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            B = i.useCallback(
                (e, t) => {
                    let n = M + 1;
                    if (!G || e.targetPage !== n) return t;
                    {
                        let e = U.intl.formatToPlainString(U.t["E+2azc"], { maxPages: n });
                        return (0, r.jsx)(d.ua7, {
                            tooltipClassName: F.paginationLimitTooltip,
                            tooltipContentClassName: F.paginationLimitTooltipText,
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
                                                    H(e, t, n[t]);
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
                [G, M],
            ),
            Y = i.useCallback(
                (e) => {
                    e === O ||
                        n.isSearching ||
                        ((0, k.zW)({
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
                    let i = m.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        o = (0, j.Tm)(t),
                        { offset: c, totalResults: u } = n;
                    (0, k.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != s ? s.length : null,
                        totalResults: u,
                        limit: L.vpv,
                        page: Math.floor(c / L.vpv) + 1,
                        offset: c,
                        index: r,
                        searchQueryString: Z.Z.getSearchInputText(t),
                        searchQuery: D.Z.getSearchResultsQuery(o),
                    });
                },
                [n, t, a, s],
            ),
            K = i.useCallback(
                (e) => {
                    (0, k.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        x(e);
                },
                [x, t, a],
            ),
            Q = Math.floor(n.offset / L.vpv),
            X = G && Q >= M,
            J = M + 1,
            $ = (0, _.C)({ location: "SearchResults" }),
            ee = (0, c.Wu)([D.Z], () => {
                if (0 !== n.offset || !$) return z;
                let e = s.length;
                if (e < 10) return z;
                let r = 0;
                if (
                    (s.forEach((e) => {
                        e.forEach((e) => {
                            (e.author.bot || null != e.webhookId) && r++;
                        });
                    }),
                    r / e < 0.75)
                )
                    return z;
                let i = (0, j.Tm)(t),
                    l = D.Z.getSearchResultsQueryString(i);
                return (0, j.kG)(null != l ? l : "").some((e) => e.type === L.dCx.FILTER_AUTHOR_TYPE)
                    ? z
                    : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, p.US)(ee),
            er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(E.ZP[L.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
                Z.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: F.searchResultsWrap,
            "aria-label": U.intl.string(U.t.zkoeq6),
            children: [
                (0, r.jsx)(S.Z, {
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
                    className: F.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: F.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: U.intl.formatToPlainString(U.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: F.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: U.intl.format(U.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(V, {
                            searchResults: s,
                            blockCount: o,
                            ignoreCount: h,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: R,
                            onPageChange: K,
                            paginationTotalCount: G ? w : void 0,
                            renderPageWrapper: B,
                            onBlockedResultsClick: v,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: C,
                            isFavoritesSearch: I,
                        }),
                    ],
                }),
                (0, r.jsx)(W, {
                    searchContext: t,
                    isFeedbackVisible: f,
                    dismissFeedbackEntrypoint: g,
                }),
            ],
        });
    });
function q(e) {
    let { searchContext: t } = e,
        n = (0, O.UX)({ location: "SearchResults" }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, v.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, C.f)({ location: "SearchResults" }),
                s = e.type === L.aib.DMS || e.type === L.aib.CHANNEL,
                o = (r && s) || l;
            return (
                i.useEffect(() => {
                    o && a && n(!0);
                }, [a, o, l]),
                (0, h.ZP)(() => {
                    o &&
                        (a ||
                            f.Z.possiblyShowFeedbackModal(
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
        s = (0, j.Tm)(t),
        o = (0, c.cj)([x.Z, D.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = x.Z.getIsFetching(s)) && e,
                isIndexing: null != (t = x.Z.getIsIndexing(s)) && t,
                isHistoricalIndexing: null != (n = x.Z.getIsHistoricalIndexing(s)) && n,
                documentsIndexed: x.Z.getDocumentsIndexed(s),
                offset: null != (r = D.Z.getSearchResultsOffset(s)) ? r : 0,
                totalResults: null != (i = x.Z.getTotalCount(s)) ? i : 0,
                hasError: null != x.Z.getError(s),
                showBlockedResults: D.Z.shouldShowBlockedResults(s),
                showNoResultsAlt: D.Z.shouldShowNoResultsAlt(s),
            };
        }),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(s)),
        { searchResults: d, ignoreCount: p, blockCount: m } = (0, R.Z)({ searchContext: t }),
        { searchMode: b, setSearchMode: _ } = (0, w.Z)({ searchContext: t }),
        E = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                _(e);
                let r = Z.Z.getSearchInputText(t),
                    i = (0, j.Tm)(t),
                    l = D.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === L.aib.DMS
                        ? Z.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e,
                          })
                        : Z.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              searchMode: e,
                              offset: 0,
                          }));
            },
            [n, o.isSearching, t, _],
        ),
        S = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let r = Z.Z.getSearchInputText(t),
                    i = (0, j.Tm)(t),
                    l = D.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === L.aib.DMS
                        ? Z.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: b,
                          })
                        : Z.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * L.vpv,
                          }));
            },
            [n, o.isSearching, t, b],
        ),
        I = (0, c.e7)([D.Z], () => {
            let e = (0, j.Tm)(t);
            return D.Z.getSearchResultsQuery(e);
        }),
        P = t.type === L.aib.FAVORITES,
        T = i.useCallback((e) => y.Z.setShowBlockedResults(t, e), [t]),
        N = i.useDeferredValue(d),
        A = i.useDeferredValue(o),
        k = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Y, {
                searchContext: t,
                search: A,
                searchRequestAnalyticsId: k,
                searchResults: N,
                ignoreCount: p,
                blockCount: m,
                renderEmbeds: g.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: E,
                searchMode: b,
                onBlockedResultsClick: T,
                searchResultsQuery: I,
                isFavoritesSearch: P,
            }),
            (0, r.jsx)(G, {
                searchContext: t,
                searchRequestAnalyticsId: k,
                searchResults: N,
                searchOffset: A.offset,
                searchLimit: L.vpv,
                searchHasError: A.hasError,
                searchTotalResults: A.totalResults,
                searchIsIndexing: A.isHistoricalIndexing,
                isSearching: A.isSearching,
            }),
        ],
    });
}
function K(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, N.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(q, { searchContext: i });
}
