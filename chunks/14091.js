n.d(t, { Z: () => K }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    p = n(493773),
    h = n(243778),
    f = n(169223),
    m = n(695346),
    g = n(592125),
    b = n(585483),
    y = n(748610),
    _ = n(171900),
    C = n(607802),
    x = n(375123),
    v = n(945577),
    j = n(56522),
    O = n(759209),
    E = n(532428),
    S = n(406326),
    P = n(994463),
    I = n(611004),
    Z = n(619753),
    T = n(902733),
    N = n(165017),
    A = n(737),
    w = n(967974),
    R = n(909125),
    M = n(817190),
    k = n(315322),
    D = n(981631),
    L = n(531578),
    U = n(388032),
    B = n(669922);
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
                    s()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                                null != e.embeds && e.embeds.length > 0 && i++,
                                null != e.attachments && e.attachments.length > 0 && r++;
                        });
                let a = (0, C.Tm)(t.props.searchContext);
                0 === n
                    ? (0, k.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: M.Z.getSearchResultsQuery(a),
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
                          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: M.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: B.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: B.emptyResultsContent,
            children: t,
        }),
    });
}
function V(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(T.Z, {
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
            searchContext: o,
            renderEmbeds: s,
            onClick: c,
            onScrollTo: u,
            onPageChange: d,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: m,
            searchResultsQuery: g,
            isFavoritesSearch: b,
        } = e,
        { totalResults: y, isSearching: _, isIndexing: C, hasError: x } = l;
    if (x)
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)("div", { className: B.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(B.emptyResultsText, B.errorMessage),
                    children: U.intl.string(U.t.uvDZBQ),
                }),
            ],
        });
    if (C) {
        let e = o.type === D.aib.GUILD ? U.intl.string(U.t.AXPbZm) : U.intl.string(U.t.Q0JJjo);
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)(P.Z, {}),
                (0, r.jsx)("div", {
                    className: (B.emptyResultsText, B.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (_) return null;
    if (y > 0)
        return (0, r.jsx)(Z.Z, {
            search: l,
            searchResults: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: s,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: m,
            searchResultsQuery: g,
            isFavoritesSearch: b,
        });
    let { showNoResultsAlt: v } = l,
        j = v ? U.intl.string(U.t["VrK/2d"]) : U.intl.string(U.t.V6nAfH);
    return (0, r.jsxs)(G, {
        children: [
            (0, r.jsx)("div", { className: a()(B.noResultsImage, { [B.alt]: v }) }),
            (0, r.jsx)("div", {
                className: a()(B.emptyResultsText, B.noResults, { [B.alt]: v }),
                children: j,
            }),
        ],
    });
}
let W = [],
    q = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                searchResults: o,
                blockCount: s,
                ignoreCount: p,
                isFeedbackVisible: f,
                dismissFeedbackEntrypoint: m,
                onSearchModeChange: y,
                onPageChange: _,
                searchMode: v,
                onBlockedResultsClick: j,
                searchResultsQuery: O,
                isFavoritesSearch: P,
            } = e,
            Z = i.useRef(null),
            T = i.useCallback(() => {
                I.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                b.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, T),
                () => {
                    b.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, T);
                }
            ),
            [T],
        );
        let N = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (N.current !== n.showBlockedResults) {
                N.current = n.showBlockedResults;
                let e = Z.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let A = i.useCallback((e, t, n) => {
                let r = Z.current;
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
                paginationMaxIndex: L,
                isPaginationTotalCountLimited: H,
            } = (0, R.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            G = i.useCallback(
                (e, t) => {
                    let n = L + 1;
                    if (!H || e.targetPage !== n) return t;
                    {
                        let e = U.intl.formatToPlainString(U.t["E+2azc"], { maxPages: n });
                        return (0, r.jsx)(d.ua7, {
                            tooltipClassName: B.paginationLimitTooltip,
                            tooltipContentClassName: B.paginationLimitTooltipText,
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
                [H, L],
            ),
            q = i.useCallback(
                (e) => {
                    e === v ||
                        n.isSearching ||
                        ((0, k.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        y(e));
                },
                [y, n.isSearching, t, v, a],
            ),
            Y = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        s = (0, C.Tm)(t),
                        { offset: c, totalResults: u } = n;
                    (0, k.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != o ? o.length : null,
                        totalResults: u,
                        limit: D.vpv,
                        page: Math.floor(c / D.vpv) + 1,
                        offset: c,
                        index: r,
                        searchQueryString: I.Z.getSearchInputText(t),
                        searchQuery: M.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, o],
            ),
            K = i.useCallback(
                (e) => {
                    (0, k.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        _(e);
                },
                [_, t, a],
            ),
            X = Math.floor(n.offset / D.vpv),
            Q = H && X >= L,
            J = L + 1,
            $ = (0, x.C)({ location: "SearchResults" }),
            ee = (0, c.Wu)([M.Z], () => {
                if (0 !== n.offset || !$) return W;
                let e = o.length;
                if (e < 10) return W;
                let r = 0;
                if (
                    (o.forEach((e) => {
                        e.forEach((e) => {
                            (e.author.bot || null != e.webhookId) && r++;
                        });
                    }),
                    r / e < 0.75)
                )
                    return W;
                let i = (0, C.Tm)(t),
                    l = M.Z.getSearchResultsQueryString(i);
                return (0, C.kG)(null != l ? l : "").some((e) => e.type === D.dCx.FILTER_AUTHOR_TYPE)
                    ? W
                    : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, h.US)(ee),
            er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(E.ZP[D.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
                I.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: B.searchResultsWrap,
            "aria-label": U.intl.string(U.t.zkoeq6),
            children: [
                (0, r.jsx)(S.Z, {
                    searchContext: t,
                    searchMode: v,
                    onSearchModeChange: q,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                }),
                (0, r.jsxs)(d.Den, {
                    ref: Z,
                    className: B.scroller,
                    children: [
                        Q &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: B.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: U.intl.formatToPlainString(U.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: B.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: U.intl.format(U.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(z, {
                            searchResults: o,
                            blockCount: s,
                            ignoreCount: p,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: Y,
                            onScrollTo: A,
                            onPageChange: K,
                            paginationTotalCount: H ? w : void 0,
                            renderPageWrapper: G,
                            onBlockedResultsClick: j,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: O,
                            isFavoritesSearch: P,
                        }),
                    ],
                }),
                (0, r.jsx)(V, {
                    searchContext: t,
                    isFeedbackVisible: f,
                    dismissFeedbackEntrypoint: m,
                }),
            ],
        });
    });
function Y(e) {
    let { searchContext: t } = e,
        n = (0, v.UX)({ location: "SearchResults" }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, j.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, O.f)({ location: "SearchResults" }),
                o = e.type === D.aib.DMS || e.type === D.aib.CHANNEL,
                s = (r && o) || l;
            return (
                i.useEffect(() => {
                    s && a && n(!0);
                }, [a, s, l]),
                (0, p.ZP)(() => {
                    s &&
                        (a ||
                            f.Z.possiblyShowFeedbackModal(
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
        o = (0, C.Tm)(t),
        s = (0, c.cj)([_.Z, M.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = _.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = _.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = _.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: _.Z.getDocumentsIndexed(o),
                offset: null != (r = M.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (i = _.Z.getTotalCount(o)) ? i : 0,
                hasError: null != _.Z.getError(o),
                showBlockedResults: M.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: M.Z.shouldShowNoResultsAlt(o),
            };
        }),
        u = (0, c.e7)([_.Z], () => _.Z.getAnalyticsId(o)),
        { searchResults: d, ignoreCount: h, blockCount: g } = (0, A.Z)({ searchContext: t }),
        { searchMode: b, setSearchMode: x } = (0, w.Z)({ searchContext: t }),
        E = i.useCallback(
            (e) => {
                if (s.isSearching) return;
                x(e);
                let r = I.Z.getSearchInputText(t),
                    i = (0, C.Tm)(t),
                    l = M.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === D.aib.DMS
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
            [n, s.isSearching, t, x],
        ),
        S = i.useCallback(
            (e) => {
                if (s.isSearching) return;
                let r = I.Z.getSearchInputText(t),
                    i = (0, C.Tm)(t),
                    l = M.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === D.aib.DMS
                        ? I.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: b,
                          })
                        : I.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * D.vpv,
                          }));
            },
            [n, s.isSearching, t, b],
        ),
        P = (0, c.e7)([M.Z], () => {
            let e = (0, C.Tm)(t);
            return M.Z.getSearchResultsQuery(e);
        }),
        Z = t.type === D.aib.FAVORITES,
        T = i.useCallback((e) => y.Z.setShowBlockedResults(t, e), [t]),
        N = i.useDeferredValue(d),
        R = i.useDeferredValue(s),
        k = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(q, {
                searchContext: t,
                search: R,
                searchRequestAnalyticsId: k,
                searchResults: N,
                ignoreCount: h,
                blockCount: g,
                renderEmbeds: m.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: E,
                searchMode: b,
                onBlockedResultsClick: T,
                searchResultsQuery: P,
                isFavoritesSearch: Z,
            }),
            (0, r.jsx)(H, {
                searchContext: t,
                searchRequestAnalyticsId: k,
                searchResults: N,
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
function K(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, N.H)({
            guildId: t,
            channelId: n,
        });
    return null == i ? null : (0, r.jsx)(Y, { searchContext: i });
}
