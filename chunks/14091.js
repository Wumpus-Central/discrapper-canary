(n.d(t, { Z: () => Y }), n(388685), n(35282));
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
    v = n(759209),
    C = n(970850),
    E = n(532428),
    S = n(406326),
    Z = n(994463),
    I = n(611004),
    P = n(619753),
    T = n(902733),
    N = n(165017),
    R = n(737),
    w = n(909125),
    A = n(315322),
    D = n(981631),
    L = n(531578),
    k = n(388032),
    M = n(682065);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            U(this, 'autoAnalytics', function () {
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
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++);
                        });
                let a = (0, j.Tm)(t.props.searchContext);
                0 === n
                    ? (0, A.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: x.Z.getSearchResultsQuery(a)
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
                          pageResults: null != t.props.searchResults ? t.props.searchResults.length : null,
                          isIndexing: t.props.searchIsIndexing,
                          pageNumMessages: n,
                          pageNumLinks: l,
                          pageNumEmbeds: i,
                          pageNumAttachments: r,
                          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: x.Z.getSearchResultsQuery(a)
                      });
            }));
    }
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: M.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: M.emptyResultsContent,
            children: t
        })
    });
}
function F(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(T.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i
          })
        : null;
}
function B(e) {
    let { searchResults: t, blockCount: n, ignoreCount: i, search: l, searchContext: s, renderEmbeds: o, onClick: c, onScrollTo: u, onPageChange: d, paginationTotalCount: h, renderPageWrapper: p, onBlockedResultsClick: f, searchRequestAnalyticsId: g, searchResultsQuery: m, isFavoritesSearch: b } = e,
        { totalResults: y, isSearching: x, isIndexing: j, hasError: _ } = l;
    if (_)
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)('div', { className: M.errorImage }),
                (0, r.jsx)('div', {
                    className: a()(M.emptyResultsText, M.errorMessage),
                    children: k.intl.string(k.t.uvDZBQ)
                })
            ]
        });
    if (j) {
        let e = s.type === D.aib.GUILD ? k.intl.string(k.t.AXPbZm) : k.intl.string(k.t.Q0JJjo);
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)(Z.Z, {}),
                (0, r.jsx)('div', {
                    className: (M.emptyResultsText, M.stillIndexing),
                    children: e
                })
            ]
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
            isFavoritesSearch: b
        });
    let { showNoResultsAlt: O } = l,
        v = O ? k.intl.string(k.t['VrK/2d']) : k.intl.string(k.t.V6nAfH);
    return (0, r.jsxs)(G, {
        children: [
            (0, r.jsx)('div', { className: a()(M.noResultsImage, { [M.alt]: O }) }),
            (0, r.jsx)('div', {
                className: a()(M.emptyResultsText, M.noResults, { [M.alt]: O }),
                children: v
            })
        ]
    });
}
let z = [],
    V = i.memo(function (e) {
        let { searchContext: t, search: n, renderEmbeds: l, searchRequestAnalyticsId: a, searchResults: s, blockCount: o, ignoreCount: p, isFeedbackVisible: f, dismissFeedbackEntrypoint: b, onSearchModeChange: y, onPageChange: O, searchMode: v, onBlockedResultsClick: C, searchResultsQuery: Z, isFavoritesSearch: P } = e,
            T = i.useRef(null),
            N = i.useCallback(() => {
                I.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, N),
                () => {
                    m.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, N);
                }
            ),
            [N]
        );
        let R = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (R.current !== n.showBlockedResults) {
                R.current = n.showBlockedResults;
                let e = T.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let L = i.useCallback((e, t, n) => {
                let r = T.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }, []),
            {
                paginationTotalCount: H,
                paginationMaxIndex: G,
                isPaginationTotalCountLimited: V
            } = (0, w.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching
            }),
            W = i.useCallback(
                (e, t) => {
                    let n = G + 1;
                    if (!V || e.targetPage !== n) return t;
                    {
                        let e = k.intl.formatToPlainString(k.t['E+2azc'], { maxPages: n });
                        return (0, r.jsx)(d.ua7, {
                            tooltipClassName: M.paginationLimitTooltip,
                            tooltipContentClassName: M.paginationLimitTooltipText,
                            text: (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-primary',
                                children: e
                            }),
                            'aria-label': e,
                            children: (e) => {
                                var n, i;
                                return (0, r.jsx)(
                                    'div',
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    U(e, t, n[t]);
                                                }));
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
                                    n)
                                );
                            }
                        });
                    }
                },
                [V, G]
            ),
            Y = i.useCallback(
                (e) => {
                    e === v ||
                        n.isSearching ||
                        ((0, A.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e
                        }),
                        y(e));
                },
                [y, n.isSearching, t, v, a]
            ),
            q = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        o = (0, j.Tm)(t),
                        { offset: c, totalResults: u } = n;
                    (0, A.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != s ? s.length : null,
                        totalResults: u,
                        limit: D.vpv,
                        page: Math.floor(c / D.vpv) + 1,
                        offset: c,
                        index: r,
                        searchQueryString: I.Z.getSearchInputText(t),
                        searchQuery: x.Z.getSearchResultsQuery(o)
                    });
                },
                [n, t, a, s]
            ),
            K = i.useCallback(
                (e) => {
                    ((0, A.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e
                    }),
                        O(e));
                },
                [O, t, a]
            ),
            Q = Math.floor(n.offset / D.vpv),
            X = V && Q >= G,
            J = G + 1,
            $ = (0, _.C)({ location: 'SearchResults' }),
            ee = (0, c.Wu)([x.Z], () => {
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
                    l = x.Z.getSearchResultsQueryString(i);
                return (0, j.kG)(null != l ? l : '').some((e) => e.type === D.dCx.FILTER_AUTHOR_TYPE) ? z : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [et, en] = (0, h.US)(ee),
            er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ei = i.useCallback(() => {
                let e = ''.concat(E.ZP[D.dCx.FILTER_AUTHOR_TYPE].key, ' user') + ' ';
                I.Z.appendTextToSearchInput(t, e);
            }, [t]);
        return (0, r.jsxs)('section', {
            className: M.searchResultsWrap,
            'aria-label': k.intl.string(k.t.zkoeq6),
            children: [
                (0, r.jsx)(S.Z, {
                    searchContext: t,
                    searchMode: v,
                    onSearchModeChange: Y,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed
                }),
                (0, r.jsxs)(d.Den, {
                    ref: T,
                    className: M.scroller,
                    children: [
                        X &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: M.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: k.intl.formatToPlainString(k.t['E+2azc'], { maxPages: J })
                            }),
                        er &&
                            (0, r.jsx)(d.Wn, {
                                className: M.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: k.intl.format(k.t['gQeg/f'], { handleClick: ei })
                            }),
                        (0, r.jsx)(B, {
                            searchResults: s,
                            blockCount: o,
                            ignoreCount: p,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: q,
                            onScrollTo: L,
                            onPageChange: K,
                            paginationTotalCount: V ? H : void 0,
                            renderPageWrapper: W,
                            onBlockedResultsClick: C,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: Z,
                            isFavoritesSearch: P
                        })
                    ]
                }),
                (0, r.jsx)(F, {
                    searchContext: t,
                    isFeedbackVisible: f,
                    dismissFeedbackEntrypoint: b
                })
            ]
        });
    });
function W(e) {
    let { searchContext: t } = e,
        n = (0, O.U)({ location: 'SearchResults' }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let t = i.useRef(e),
                [n, r] = i.useState(!1),
                { enabled: l, force: a } = (0, v.f)({ location: 'SearchResults' });
            return (
                i.useEffect(() => {
                    l && a && r(!0);
                }, [a, l]),
                i.useEffect(() => {
                    l &&
                        (a ||
                            (e !== t.current &&
                                ((t.current = e),
                                p.Z.possiblyShowFeedbackModal(
                                    L.nw.SEARCH_RESULTS,
                                    () => r(!0),
                                    () => r(!1)
                                ))));
                }, [l, a, e]),
                {
                    dismissFeedbackEntrypoint: i.useCallback(() => {
                        r(!1);
                    }, []),
                    isFeedbackVisible: n
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
                showNoResultsAlt: x.Z.shouldShowNoResultsAlt(s)
            };
        }),
        u = (0, c.e7)([y.Z], () => y.Z.getAnalyticsId(s)),
        { searchResults: d, ignoreCount: h, blockCount: g } = (0, R.Z)({ searchContext: t }),
        { searchMode: m, setSearchMode: _ } = (0, C.Z)({ searchContext: t }),
        E = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                _(e);
                let r = I.Z.getSearchInputText(t),
                    i = (0, j.Tm)(t),
                    l = x.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === D.aib.DMS
                        ? I.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e
                          })
                        : I.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              searchMode: e,
                              offset: 0
                          }));
            },
            [n, o.isSearching, t, _]
        ),
        S = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let r = I.Z.getSearchInputText(t),
                    i = (0, j.Tm)(t),
                    l = x.Z.getSearchResultsQuery(i);
                null != r &&
                    null != l &&
                    (n && t.type === D.aib.DMS
                        ? I.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: m
                          })
                        : I.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: l,
                              offset: e * D.vpv
                          }));
            },
            [n, o.isSearching, t, m]
        ),
        Z = (0, c.e7)([x.Z], () => {
            let e = (0, j.Tm)(t);
            return x.Z.getSearchResultsQuery(e);
        }),
        P = t.type === D.aib.FAVORITES,
        T = i.useCallback((e) => b.Z.setShowBlockedResults(t, e), [t]),
        N = i.useDeferredValue(d),
        w = i.useDeferredValue(o),
        A = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(V, {
                searchContext: t,
                search: w,
                searchRequestAnalyticsId: A,
                searchResults: N,
                ignoreCount: h,
                blockCount: g,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: E,
                searchMode: m,
                onBlockedResultsClick: T,
                searchResultsQuery: Z,
                isFavoritesSearch: P
            }),
            (0, r.jsx)(H, {
                searchContext: t,
                searchRequestAnalyticsId: A,
                searchResults: N,
                searchOffset: w.offset,
                searchLimit: D.vpv,
                searchHasError: w.hasError,
                searchTotalResults: w.totalResults,
                searchIsIndexing: w.isHistoricalIndexing,
                isSearching: w.isSearching
            })
        ]
    });
}
function Y(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, N.H)({
            guildId: t,
            channelId: n
        });
    return null == i ? null : (0, r.jsx)(W, { searchContext: i });
}
