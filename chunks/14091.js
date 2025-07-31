(n.d(t, {
    $: () => M,
    Z: () => W
}),
    n(388685),
    n(35282));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    i = n.n(o),
    c = n(442837),
    u = n(481060),
    h = n(169223),
    d = n(695346),
    p = n(592125),
    f = n(585483),
    g = n(72006),
    m = n(748610),
    y = n(171900),
    x = n(518944),
    b = n(607802),
    S = n(945577),
    v = n(759209),
    j = n(970850),
    C = n(406326),
    O = n(994463),
    _ = n(611004),
    P = n(619753),
    R = n(902733),
    E = n(165017),
    I = n(737),
    T = n(909125),
    N = n(315322),
    k = n(981631),
    w = n(531578),
    Z = n(388032),
    A = n(682065);
function D(e, t, n) {
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
function M(e) {
    let t = (0, b.WJ)(e),
        n = null != t ? x.Z.getEditorState(t) : null;
    return null != n ? g.Sq(n) : null;
}
class F extends s.Component {
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
            D(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    s = 0,
                    l = 0;
                null != t.props.searchResults &&
                    i()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && r++);
                        });
                let a = (0, b.WJ)(t.props.searchContext);
                0 === n
                    ? (0, N.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: M(t.props.searchContext),
                          searchQuery: x.Z.getSearchResultsQuery(a)
                      })
                    : (0, N.hM)({
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
                          pageNumEmbeds: s,
                          pageNumAttachments: r,
                          searchQueryString: M(t.props.searchContext),
                          searchQuery: x.Z.getSearchResultsQuery(a)
                      });
            }));
    }
}
function L(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: A.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: A.emptyResultsContent,
            children: t
        })
    });
}
function B(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: s } = e;
    return n
        ? (0, r.jsx)(R.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: s
          })
        : null;
}
function H(e) {
    let { searchResults: t, blockCount: n, ignoreCount: s, search: l, searchContext: o, renderEmbeds: i, onClick: c, onScrollTo: u, onPageChange: h, paginationTotalCount: d, renderPageWrapper: p, onBlockedResultsClick: f, searchRequestAnalyticsId: g, searchResultsQuery: m, isFavoritesSearch: y } = e,
        { totalResults: x, isSearching: b, isIndexing: S, hasError: v } = l;
    if (v)
        return (0, r.jsxs)(L, {
            children: [
                (0, r.jsx)('div', { className: A.errorImage }),
                (0, r.jsx)('div', {
                    className: a()(A.emptyResultsText, A.errorMessage),
                    children: Z.intl.string(Z.t.uvDZBQ)
                })
            ]
        });
    if (S) {
        let e = o.type === k.aib.GUILD ? Z.intl.string(Z.t.AXPbZm) : Z.intl.string(Z.t.Q0JJjo);
        return (0, r.jsxs)(L, {
            children: [
                (0, r.jsx)(O.Z, {}),
                (0, r.jsx)('div', {
                    className: (A.emptyResultsText, A.stillIndexing),
                    children: e
                })
            ]
        });
    }
    if (b) return null;
    if (x > 0)
        return (0, r.jsx)(P.Z, {
            search: l,
            searchResults: t,
            onClick: c,
            blockCount: n,
            ignoreCount: s,
            renderEmbeds: i,
            scrollTo: u,
            onPageChange: h,
            paginationTotalCount: d,
            renderPageWrapper: p,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: y
        });
    let { showNoResultsAlt: j } = l,
        C = j ? Z.intl.string(Z.t['VrK/2d']) : Z.intl.string(Z.t.V6nAfH);
    return (0, r.jsxs)(L, {
        children: [
            (0, r.jsx)('div', { className: a()(A.noResultsImage, { [A.alt]: j }) }),
            (0, r.jsx)('div', {
                className: a()(A.emptyResultsText, A.noResults, { [A.alt]: j }),
                children: C
            })
        ]
    });
}
let Q = s.memo(function (e) {
    let { searchContext: t, search: n, renderEmbeds: l, searchRequestAnalyticsId: a, searchResults: o, blockCount: i, ignoreCount: c, isFeedbackVisible: h, dismissFeedbackEntrypoint: d, onSearchModeChange: g, onPageChange: m, searchMode: y, onBlockedResultsClick: S, searchResultsQuery: v, isFavoritesSearch: j } = e,
        O = s.useRef(null),
        P = s.useCallback(() => {
            _.Z.cleanUpSearchState(t);
        }, [t]);
    s.useEffect(
        () => (
            f.S.subscribe(k.CkL.SEARCH_RESULTS_CLOSE, P),
            () => {
                f.S.unsubscribe(k.CkL.SEARCH_RESULTS_CLOSE, P);
            }
        ),
        [P]
    );
    let R = s.useRef(n.showBlockedResults);
    s.useEffect(() => {
        if (R.current !== n.showBlockedResults) {
            R.current = n.showBlockedResults;
            let e = O.current;
            null != e && e.scrollToBottom();
        }
    }, [n.showBlockedResults]);
    let E = s.useCallback((e, t, n) => {
            let r = O.current;
            if (null == r) return;
            let s = r.getScrollerState().scrollTop - e;
            r.scrollTo({
                to: s,
                animate: t,
                callback: n
            });
        }, []),
        {
            paginationTotalCount: I,
            paginationMaxIndex: w,
            isPaginationTotalCountLimited: F
        } = (0, T.M)({
            totalResults: n.totalResults,
            isSearching: n.isSearching
        }),
        L = s.useCallback(
            (e, t) => {
                let n = w + 1;
                if (!F || e.targetPage !== n) return t;
                {
                    let e = Z.intl.formatToPlainString(Z.t['E+2azc'], { maxPages: n });
                    return (0, r.jsx)(u.ua7, {
                        tooltipClassName: A.paginationLimitTooltip,
                        tooltipContentClassName: A.paginationLimitTooltipText,
                        text: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-primary',
                            children: e
                        }),
                        'aria-label': e,
                        children: (e) => {
                            var n, s;
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
                                                D(e, t, n[t]);
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (s = s = { children: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(s)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                                      }),
                                n)
                            );
                        }
                    });
                }
            },
            [F, w]
        ),
        Q = s.useCallback(
            (e) => {
                e === y ||
                    n.isSearching ||
                    ((0, N.zW)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        mode: e
                    }),
                    g(e));
            },
            [g, n.isSearching, t, y, a]
        ),
        U = s.useCallback(
            (e, r) => {
                let s = p.Z.getChannel(e.channel_id),
                    l = null != s ? s.getGuildId() : null,
                    i = (0, b.WJ)(t),
                    { offset: c, totalResults: u } = n;
                (0, N.sL)({
                    searchContext: t,
                    searchRequestAnalyticsId: a,
                    guildId: l,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != o ? o.length : null,
                    totalResults: u,
                    limit: k.vpv,
                    page: Math.floor(c / k.vpv) + 1,
                    offset: c,
                    index: r,
                    searchQueryString: M(t),
                    searchQuery: x.Z.getSearchResultsQuery(i)
                });
            },
            [n, t, a, o]
        ),
        W = s.useCallback(
            (e) => {
                ((0, N.t6)({
                    searchContext: t,
                    searchRequestAnalyticsId: a,
                    newPageIndex: e
                }),
                    m(e));
            },
            [m, t, a]
        ),
        q = Math.floor(n.offset / k.vpv),
        G = F && q >= w,
        z = w + 1;
    return (0, r.jsxs)('section', {
        className: A.searchResultsWrap,
        'aria-label': Z.intl.string(Z.t.zkoeq6),
        children: [
            (0, r.jsx)(C.Z, {
                searchContext: t,
                searchMode: y,
                onSearchModeChange: Q,
                totalResults: n.totalResults,
                isSearching: n.isSearching,
                isIndexing: n.isHistoricalIndexing,
                documentsIndexed: n.documentsIndexed
            }),
            (0, r.jsxs)(u.Den, {
                ref: O,
                className: A.scroller,
                children: [
                    G &&
                        !n.isSearching &&
                        (0, r.jsx)(u.Wn, {
                            className: A.paginationLimitHeader,
                            messageType: u.QYI.WARNING,
                            children: Z.intl.formatToPlainString(Z.t['E+2azc'], { maxPages: z })
                        }),
                    (0, r.jsx)(H, {
                        searchResults: o,
                        blockCount: i,
                        ignoreCount: c,
                        search: n,
                        searchContext: t,
                        renderEmbeds: l,
                        onClick: U,
                        onScrollTo: E,
                        onPageChange: W,
                        paginationTotalCount: F ? I : void 0,
                        renderPageWrapper: L,
                        onBlockedResultsClick: S,
                        searchRequestAnalyticsId: a,
                        searchResultsQuery: v,
                        isFavoritesSearch: j
                    })
                ]
            }),
            (0, r.jsx)(B, {
                searchContext: t,
                isFeedbackVisible: h,
                dismissFeedbackEntrypoint: d
            })
        ]
    });
});
function U(e) {
    let { searchContext: t } = e,
        n = (0, S.U)({ location: 'SearchResults' }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let t = s.useRef(e),
                [n, r] = s.useState(!1),
                { enabled: l, force: a } = (0, v.f)({ location: 'SearchResults' });
            return (
                s.useEffect(() => {
                    l && a && r(!0);
                }, [a, l]),
                s.useEffect(() => {
                    l &&
                        (a ||
                            (e !== t.current &&
                                ((t.current = e),
                                h.Z.possiblyShowFeedbackModal(
                                    w.nw.SEARCH_RESULTS,
                                    () => r(!0),
                                    () => r(!1)
                                ))));
                }, [l, a, e]),
                {
                    dismissFeedbackEntrypoint: s.useCallback(() => {
                        r(!1);
                    }, []),
                    isFeedbackVisible: n
                }
            );
        })(t),
        o = (0, b.WJ)(t),
        i = (0, c.cj)([y.Z, x.Z], () => {
            var e, t, n, r, s;
            return {
                isSearching: null != (e = y.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = y.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = y.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: y.Z.getDocumentsIndexed(o),
                offset: null != (r = x.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (s = y.Z.getTotalCount(o)) ? s : 0,
                hasError: null != y.Z.getError(o),
                showBlockedResults: x.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: x.Z.shouldShowNoResultsAlt(o)
            };
        }),
        u = (0, c.e7)([y.Z], () => y.Z.getAnalyticsId(o)),
        { searchResults: p, ignoreCount: f, blockCount: g } = (0, I.Z)(o),
        { searchMode: C, setSearchMode: O } = (0, j.Z)({ searchId: o }),
        P = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                O(e);
                let r = M(t),
                    s = x.Z.getSearchResultsQuery(o);
                null != r &&
                    null != s &&
                    (n && t.type === k.aib.DMS
                        ? _.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e
                          })
                        : _.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: s,
                              searchMode: e,
                              offset: 0
                          }));
            },
            [n, i.isSearching, t, o, O]
        ),
        R = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                let r = M(t),
                    s = x.Z.getSearchResultsQuery(o);
                null != r &&
                    null != s &&
                    (n && t.type === k.aib.DMS
                        ? _.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: C
                          })
                        : _.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: s,
                              offset: e * k.vpv
                          }));
            },
            [n, i.isSearching, t, o, C]
        ),
        E = (0, c.e7)([x.Z], () => x.Z.getSearchResultsQuery(o)),
        T = t.type === k.aib.FAVORITES,
        N = s.useCallback((e) => m.Z.setShowBlockedResults(o, e), [o]),
        Z = s.useDeferredValue(p),
        A = s.useDeferredValue(i),
        D = s.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q, {
                searchContext: t,
                search: A,
                searchRequestAnalyticsId: D,
                searchResults: Z,
                ignoreCount: f,
                blockCount: g,
                renderEmbeds: d.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: R,
                onSearchModeChange: P,
                searchMode: C,
                onBlockedResultsClick: N,
                searchResultsQuery: E,
                isFavoritesSearch: T
            }),
            (0, r.jsx)(F, {
                searchContext: t,
                searchRequestAnalyticsId: D,
                searchResults: Z,
                searchOffset: A.offset,
                searchLimit: k.vpv,
                searchHasError: A.hasError,
                searchTotalResults: A.totalResults,
                searchIsIndexing: A.isHistoricalIndexing,
                isSearching: A.isSearching
            })
        ]
    });
}
function W(e) {
    let { guildId: t, channelId: n } = e,
        s = (0, E.H)({
            guildId: t,
            channelId: n
        });
    return null == s ? null : (0, r.jsx)(U, { searchContext: s });
}
