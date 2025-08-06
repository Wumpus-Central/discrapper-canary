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
    x = n(518944),
    j = n(607802),
    _ = n(375123),
    O = n(945577),
    v = n(56522),
    C = n(759209),
    E = n(970850),
    S = n(532428),
    Z = n(406326),
    I = n(994463),
    P = n(611004),
    T = n(619753),
    N = n(902733),
    R = n(165017),
    w = n(737),
    A = n(909125),
    D = n(315322),
    k = n(981631),
    L = n(531578),
    M = n(388032),
    U = n(682065);
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
                    ? (0, D.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: P.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: x.Z.getSearchResultsQuery(a),
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
                          searchQueryString: P.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: x.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function F(e) {
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
        ? (0, r.jsx)(N.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function z(e) {
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
        return (0, r.jsxs)(F, {
            children: [
                (0, r.jsx)("div", { className: U.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(U.emptyResultsText, U.errorMessage),
                    children: M.intl.string(M.t.uvDZBQ),
                }),
            ],
        });
    if (j) {
        let e = s.type === k.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
        return (0, r.jsxs)(F, {
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)("div", {
                    className: (U.emptyResultsText, U.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (x) return null;
    if (y > 0)
        return (0, r.jsx)(T.Z, {
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
    return (0, r.jsxs)(F, {
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
    W = i.memo(function (e) {
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
                onPageChange: O,
                searchMode: v,
                onBlockedResultsClick: C,
                searchResultsQuery: E,
                isFavoritesSearch: I,
            } = e,
            T = i.useRef(null),
            N = i.useCallback(() => {
                P.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(k.CkL.SEARCH_RESULTS_CLOSE, N),
                () => {
                    m.S.unsubscribe(k.CkL.SEARCH_RESULTS_CLOSE, N);
                }
            ),
            [N],
        );
        let R = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (R.current !== n.showBlockedResults) {
                R.current = n.showBlockedResults;
                let e = T.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let w = i.useCallback((e, t, n) => {
                let r = T.current;
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
                paginationMaxIndex: G,
                isPaginationTotalCountLimited: F,
            } = (0, A.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = G + 1;
                    if (!F || e.targetPage !== n) return t;
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
                [F, G],
            ),
            Y = i.useCallback(
                (e) => {
                    e === v ||
                        n.isSearching ||
                        ((0, D.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        y(e));
                },
                [y, n.isSearching, t, v, a],
            ),
            q = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        o = (0, j.Tm)(t),
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
                        searchQueryString: P.Z.getSearchInputText(t),
                        searchQuery: x.Z.getSearchResultsQuery(o),
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
                        O(e);
                },
                [O, t, a],
            ),
            Q = Math.floor(n.offset / k.vpv),
            X = F && Q >= G,
            J = G + 1,
            $ = (0, _.C)({ location: "SearchResults" }),
            ee = (0, c.Wu)([x.Z], () => {
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
                let i = (0, j.Tm)(t),
                    l = x.Z.getSearchResultsQueryString(i);
                return (0, j.kG)(null != l ? l : "").some((e) => e.type === k.dCx.FILTER_AUTHOR_TYPE)
                    ? V
                    : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, h.US)(ee),
            er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(S.ZP[k.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
                P.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: U.searchResultsWrap,
            "aria-label": M.intl.string(M.t.zkoeq6),
            children: [
                (0, r.jsx)(Z.Z, {
                    searchContext: t,
                    searchMode: v,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                }),
                (0, r.jsxs)(d.Den, {
                    ref: T,
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
                        (0, r.jsx)(z, {
                            searchResults: s,
                            blockCount: o,
                            ignoreCount: p,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: w,
                            onPageChange: K,
                            paginationTotalCount: F ? L : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: C,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: E,
                            isFavoritesSearch: I,
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
        n = (0, O.UX)({ location: "SearchResults" }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let t = i.useRef(e),
                [n, r] = i.useState(!1),
                l = (0, v.M)({ location: "SearchResults" }),
                { enabled: a, force: s } = (0, C.f)({ location: "SearchResults" }),
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
        s = (0, j.Tm)(t),
        o = (0, c.cj)([y.Z, x.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = y.Z.getIsFetching(s)) && e,
                isIndexing: null != (t = y.Z.getIsIndexing(s)) && t,
                isHistoricalIndexing: null != (n = y.Z.getIsHistoricalIndexing(s)) && n,
                documentsIndexed: y.Z.getDocumentsIndexed(s),
                offset: null != (r = x.Z.getSearchResultsOffset(s)) ? r : 0,
                totalResults: null != (i = y.Z.getTotalCount(s)) ? i : 0,
                hasError: null != y.Z.getError(s),
                showBlockedResults: x.Z.shouldShowBlockedResults(s),
                showNoResultsAlt: x.Z.shouldShowNoResultsAlt(s),
            };
        }),
        u = (0, c.e7)([y.Z], () => y.Z.getAnalyticsId(s)),
        { searchResults: d, ignoreCount: h, blockCount: g } = (0, w.Z)({ searchContext: t }),
        { searchMode: m, setSearchMode: _ } = (0, E.Z)({ searchContext: t }),
        S = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                _(e);
                let r = P.Z.getSearchInputText(t),
                    i = (0, j.Tm)(t),
                    l = x.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === k.aib.DMS
                        ? P.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e,
                          })
                        : P.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              searchMode: e,
                              offset: 0,
                          }));
            },
            [n, o.isSearching, t, _],
        ),
        Z = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let r = P.Z.getSearchInputText(t),
                    i = (0, j.Tm)(t),
                    l = x.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === k.aib.DMS
                        ? P.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: m,
                          })
                        : P.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * k.vpv,
                          }));
            },
            [n, o.isSearching, t, m],
        ),
        I = (0, c.e7)([x.Z], () => {
            let e = (0, j.Tm)(t);
            return x.Z.getSearchResultsQuery(e);
        }),
        T = t.type === k.aib.FAVORITES,
        N = i.useCallback((e) => b.Z.setShowBlockedResults(t, e), [t]),
        R = i.useDeferredValue(d),
        A = i.useDeferredValue(o),
        D = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W, {
                searchContext: t,
                search: A,
                searchRequestAnalyticsId: D,
                searchResults: R,
                ignoreCount: h,
                blockCount: g,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: Z,
                onSearchModeChange: S,
                searchMode: m,
                onBlockedResultsClick: N,
                searchResultsQuery: I,
                isFavoritesSearch: T,
            }),
            (0, r.jsx)(G, {
                searchContext: t,
                searchRequestAnalyticsId: D,
                searchResults: R,
                searchOffset: A.offset,
                searchLimit: k.vpv,
                searchHasError: A.hasError,
                searchTotalResults: A.totalResults,
                searchIsIndexing: A.isHistoricalIndexing,
                isSearching: A.isSearching,
            }),
        ],
    });
}
function q(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, R.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(Y, { searchContext: i });
}
