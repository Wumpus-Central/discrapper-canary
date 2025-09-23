n.d(t, { Z: () => Y }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(493773),
    u = n(243778),
    p = n(169223),
    h = n(695346),
    f = n(592125),
    g = n(585483),
    m = n(171900),
    b = n(607802),
    y = n(375123),
    _ = n(945577),
    O = n(56522),
    j = n(759209),
    x = n(532428),
    v = n(406326),
    C = n(994463),
    I = n(991896),
    E = n(611004),
    S = n(619753),
    Z = n(902733),
    P = n(165017),
    T = n(737),
    N = n(967974),
    R = n(909125),
    w = n(817190),
    A = n(315322),
    D = n(981631),
    L = n(531578),
    M = n(388032),
    k = n(254321);
function U(e, t, n) {
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
            U(this, "autoAnalytics", function () {
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
                let a = (0, b.Tm)(t.props.searchContext);
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
function H(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: k.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: k.emptyResultsContent,
            children: t,
        }),
    });
}
function F(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(Z.Z, {
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
        { totalResults: y, isSearching: _, isIndexing: O, hasError: j } = l;
    if (j)
        return (0, r.jsxs)(H, {
            children: [
                (0, r.jsx)("div", { className: k.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(k.emptyResultsText, k.errorMessage),
                    children: M.intl.string(M.t.uvDZBQ),
                }),
            ],
        });
    if (O) {
        let e = s.type === D.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
        return (0, r.jsxs)(H, {
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
    return (0, r.jsxs)(H, {
        children: [
            (0, r.jsx)("div", { className: a()(k.noResultsImage, { [k.alt]: x }) }),
            (0, r.jsx)("div", {
                className: a()(k.emptyResultsText, k.noResults, { [k.alt]: x }),
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
                messages: d,
                blockCount: p,
                ignoreCount: h,
                isFeedbackVisible: m,
                dismissFeedbackEntrypoint: _,
                onSearchModeChange: O,
                onPageChange: j,
                searchMode: C,
                onBlockedResultsClick: I,
                searchResultsQuery: S,
                isFavoritesSearch: Z,
            } = e,
            P = i.useRef(null),
            T = i.useCallback(() => {
                E.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                g.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, T),
                () => {
                    g.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, T);
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
        let L = i.useCallback((e, t, n) => {
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
            } = (0, R.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = H + 1;
                    if (!V || e.targetPage !== n) return t;
                    {
                        let e = M.intl.formatToPlainString(M.t["E+2azc"], { maxPages: n });
                        return (0, r.jsx)(c.ua7, {
                            tooltipClassName: k.paginationLimitTooltip,
                            tooltipContentClassName: k.paginationLimitTooltipText,
                            text: (0, r.jsx)(c.Text, {
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
                                                    U(e, t, n[t]);
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
                [V, H],
            ),
            Y = i.useCallback(
                (e) => {
                    e === C ||
                        n.isSearching ||
                        ((0, A.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        O(e));
                },
                [O, n.isSearching, t, C, a],
            ),
            q = i.useCallback(
                (e, r) => {
                    let i = f.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        s = (0, b.Tm)(t),
                        { offset: o, totalResults: c } = n;
                    (0, A.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != d ? d.length : null,
                        totalResults: c,
                        limit: D.vpv,
                        page: Math.floor(o / D.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: E.Z.getSearchInputText(t),
                        searchQuery: w.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, d],
            ),
            K = i.useCallback(
                (e) => {
                    (0, A.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        j(e);
                },
                [j, t, a],
            ),
            Q = Math.floor(n.offset / D.vpv),
            X = V && Q >= H,
            J = H + 1,
            $ = (0, y.C)({ location: "SearchResults" }),
            ee = (0, s.Wu)([w.Z], () => {
                if (0 !== n.offset || !$) return z;
                let e = d.length;
                if (e < 10) return z;
                let r = 0;
                if (
                    (d.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return z;
                let i = (0, b.Tm)(t),
                    l = w.Z.getSearchResultsQueryString(i);
                return (0, b.kG)(null != l ? l : "").some((e) => e.type === D.dCx.FILTER_AUTHOR_TYPE)
                    ? z
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, u.US)(ee),
            er = et === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = "".concat(x.ZP[D.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
                E.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)("section", {
            className: k.searchResultsWrap,
            "aria-label": M.intl.string(M.t.zkoeq6),
            children: [
                (0, r.jsx)(v.Z, {
                    searchContext: t,
                    searchMode: C,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                }),
                (0, r.jsxs)(c.Den, {
                    ref: P,
                    className: k.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(c.Wn, {
                                className: k.paginationLimitHeader,
                                messageType: c.QYI.WARNING,
                                children: M.intl.formatToPlainString(M.t["E+2azc"], { maxPages: J }),
                            }),
                        er &&
                            (0, r.jsx)(c.Wn, {
                                className: k.helpMessageContainer,
                                messageType: c.QYI.INFO,
                                children: M.intl.format(M.t["gQeg/f"], { handleClick: ei }),
                            }),
                        (0, r.jsx)(B, {
                            messages: d,
                            blockCount: p,
                            ignoreCount: h,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: L,
                            onPageChange: K,
                            paginationTotalCount: V ? G : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: I,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: S,
                            isFavoritesSearch: Z,
                        }),
                    ],
                }),
                (0, r.jsx)(F, {
                    searchContext: t,
                    isFeedbackVisible: m,
                    dismissFeedbackEntrypoint: _,
                }),
            ],
        });
    });
function W(e) {
    let { searchContext: t } = e,
        n = (0, _.UX)({ location: "SearchResults" }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, O.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, j.f)({ location: "SearchResults" }),
                s = e.type === D.aib.DMS || e.type === D.aib.CHANNEL,
                o = (r && s) || l;
            return (
                i.useEffect(() => {
                    o && a && n(!0);
                }, [a, o, l]),
                (0, d.ZP)(() => {
                    o &&
                        (a ||
                            p.Z.possiblyShowFeedbackModal(
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
        o = (0, b.Tm)(t),
        c = (0, s.cj)([m.Z, w.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = m.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = m.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = m.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: m.Z.getDocumentsIndexed(o),
                offset: null != (r = w.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (i = m.Z.getTotalCount(o)) ? i : 0,
                hasError: null != m.Z.getError(o),
                showBlockedResults: w.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: w.Z.shouldShowNoResultsAlt(o),
            };
        }),
        u = (0, s.e7)([m.Z], () => m.Z.getAnalyticsId(o)),
        { renderedMessages: f, ignoreCount: g, blockCount: y } = (0, T.Z)({ searchContext: t }),
        { searchMode: x, setSearchMode: v } = (0, N.Z)({ searchContext: t }),
        C = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                v(e);
                let r = E.Z.getSearchInputText(t),
                    i = (0, b.Tm)(t),
                    l = w.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === D.aib.DMS
                        ? E.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e,
                          })
                        : E.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              searchMode: e,
                              offset: 0,
                          }));
            },
            [n, c.isSearching, t, v],
        ),
        S = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                let r = E.Z.getSearchInputText(t),
                    i = (0, b.Tm)(t),
                    l = w.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === D.aib.DMS
                        ? E.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: x,
                          })
                        : E.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * D.vpv,
                          }));
            },
            [n, c.isSearching, t, x],
        ),
        Z = (0, s.e7)([w.Z], () => {
            let e = (0, b.Tm)(t);
            return w.Z.getSearchResultsQuery(e);
        }),
        P = t.type === D.aib.FAVORITES,
        R = i.useCallback((e) => I.Z.setShowBlockedResults(t, e), [t]),
        A = i.useDeferredValue(f),
        M = i.useDeferredValue(c),
        k = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(V, {
                searchContext: t,
                search: M,
                searchRequestAnalyticsId: k,
                messages: A,
                ignoreCount: g,
                blockCount: y,
                renderEmbeds: h.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: C,
                searchMode: x,
                onBlockedResultsClick: R,
                searchResultsQuery: Z,
                isFavoritesSearch: P,
            }),
            (0, r.jsx)(G, {
                searchContext: t,
                searchRequestAnalyticsId: k,
                messages: A,
                searchOffset: M.offset,
                searchLimit: D.vpv,
                searchHasError: M.hasError,
                searchTotalResults: M.totalResults,
                searchIsIndexing: M.isHistoricalIndexing,
                isSearching: M.isSearching,
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
