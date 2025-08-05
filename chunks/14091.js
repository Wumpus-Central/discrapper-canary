(n.d(t, {
    $: () => B,
    Z: () => z
}),
    n(388685),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(169223),
    f = n(695346),
    _ = n(592125),
    p = n(585483),
    h = n(72006),
    m = n(748610),
    g = n(171900),
    E = n(518944),
    b = n(607802),
    y = n(945577),
    O = n(759209),
    v = n(970850),
    I = n(406326),
    T = n(994463),
    S = n(611004),
    A = n(619753),
    N = n(902733),
    C = n(165017),
    w = n(737),
    R = n(909125),
    P = n(315322),
    D = n(981631),
    L = n(531578),
    x = n(388032),
    k = n(682065);
function j(e, t, n) {
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
                j(e, t, n[t]);
            }));
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let t = (0, b.WJ)(e),
        n = null != t ? E.Z.getEditorState(t) : null;
    return null != n ? h.Sq(n) : null;
}
class Z extends i.Component {
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
            j(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    a = 0;
                null != t.props.searchResults &&
                    l()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && a++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++);
                        });
                let o = (0, b.WJ)(t.props.searchContext);
                0 === n
                    ? (0, P.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: B(t.props.searchContext),
                          searchQuery: E.Z.getSearchResultsQuery(o)
                      })
                    : (0, P.hM)({
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
                          pageNumLinks: a,
                          pageNumEmbeds: i,
                          pageNumAttachments: r,
                          searchQueryString: B(t.props.searchContext),
                          searchQuery: E.Z.getSearchResultsQuery(o)
                      });
            }));
    }
}
function F(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: k.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: k.emptyResultsContent,
            children: t
        })
    });
}
function V(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(N.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i
          })
        : null;
}
function H(e) {
    let { searchResults: t, blockCount: n, ignoreCount: i, search: a, searchContext: s, renderEmbeds: l, onClick: c, onScrollTo: u, onPageChange: d, paginationTotalCount: f, renderPageWrapper: _, onBlockedResultsClick: p, searchRequestAnalyticsId: h, searchResultsQuery: m, isFavoritesSearch: g } = e,
        { totalResults: E, isSearching: b, isIndexing: y, hasError: O } = a;
    if (O)
        return (0, r.jsxs)(F, {
            children: [
                (0, r.jsx)('div', { className: k.errorImage }),
                (0, r.jsx)('div', {
                    className: o()(k.emptyResultsText, k.errorMessage),
                    children: x.intl.string(x.t.uvDZBQ)
                })
            ]
        });
    if (y) {
        let e = s.type === D.aib.GUILD ? x.intl.string(x.t.AXPbZm) : x.intl.string(x.t.Q0JJjo);
        return (0, r.jsxs)(F, {
            children: [
                (0, r.jsx)(T.Z, {}),
                (0, r.jsx)('div', {
                    className: (k.emptyResultsText, k.stillIndexing),
                    children: e
                })
            ]
        });
    }
    if (b) return null;
    if (E > 0)
        return (0, r.jsx)(A.Z, {
            search: a,
            searchResults: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: l,
            scrollTo: u,
            onPageChange: d,
            paginationTotalCount: f,
            renderPageWrapper: _,
            onBlockedResultsClick: p,
            searchRequestAnalyticsId: h,
            searchResultsQuery: m,
            isFavoritesSearch: g
        });
    let { showNoResultsAlt: v } = a,
        I = v ? x.intl.string(x.t['VrK/2d']) : x.intl.string(x.t.V6nAfH);
    return (0, r.jsxs)(F, {
        children: [
            (0, r.jsx)('div', { className: o()(k.noResultsImage, { [k.alt]: v }) }),
            (0, r.jsx)('div', {
                className: o()(k.emptyResultsText, k.noResults, { [k.alt]: v }),
                children: I
            })
        ]
    });
}
let Y = i.memo(function (e) {
    let { searchContext: t, search: n, renderEmbeds: a, searchRequestAnalyticsId: o, searchResults: s, blockCount: l, ignoreCount: c, isFeedbackVisible: d, dismissFeedbackEntrypoint: f, onSearchModeChange: h, onPageChange: m, searchMode: g, onBlockedResultsClick: y, searchResultsQuery: O, isFavoritesSearch: v } = e,
        T = i.useRef(null),
        A = i.useCallback(() => {
            S.Z.cleanUpSearchState(t);
        }, [t]);
    i.useEffect(
        () => (
            p.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, A),
            () => {
                p.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, A);
            }
        ),
        [A]
    );
    let N = i.useRef(n.showBlockedResults);
    i.useEffect(() => {
        if (N.current !== n.showBlockedResults) {
            N.current = n.showBlockedResults;
            let e = T.current;
            null != e && e.scrollToBottom();
        }
    }, [n.showBlockedResults]);
    let C = i.useCallback((e, t, n) => {
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
            paginationTotalCount: w,
            paginationMaxIndex: L,
            isPaginationTotalCountLimited: j
        } = (0, R.M)({
            totalResults: n.totalResults,
            isSearching: n.isSearching
        }),
        U = i.useCallback(
            (e, t) => {
                let n = L + 1;
                if (!j || e.targetPage !== n) return t;
                {
                    let e = x.intl.formatToPlainString(x.t['E+2azc'], { maxPages: n });
                    return (0, r.jsx)(u.ua7, {
                        tooltipClassName: k.paginationLimitTooltip,
                        tooltipContentClassName: k.paginationLimitTooltipText,
                        text: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-primary',
                            children: e
                        }),
                        'aria-label': e,
                        children: (e) => (0, r.jsx)('div', G(M({}, e), { children: t }))
                    });
                }
            },
            [j, L]
        ),
        Z = i.useCallback(
            (e) => {
                e === g ||
                    n.isSearching ||
                    ((0, P.zW)({
                        searchContext: t,
                        searchRequestAnalyticsId: o,
                        mode: e
                    }),
                    h(e));
            },
            [h, n.isSearching, t, g, o]
        ),
        F = i.useCallback(
            (e, r) => {
                let i = _.Z.getChannel(e.channel_id),
                    a = null != i ? i.getGuildId() : null,
                    l = (0, b.WJ)(t),
                    { offset: c, totalResults: u } = n;
                (0, P.sL)({
                    searchContext: t,
                    searchRequestAnalyticsId: o,
                    guildId: a,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != s ? s.length : null,
                    totalResults: u,
                    limit: D.vpv,
                    page: Math.floor(c / D.vpv) + 1,
                    offset: c,
                    index: r,
                    searchQueryString: B(t),
                    searchQuery: E.Z.getSearchResultsQuery(l)
                });
            },
            [n, t, o, s]
        ),
        Y = i.useCallback(
            (e) => {
                ((0, P.t6)({
                    searchContext: t,
                    searchRequestAnalyticsId: o,
                    newPageIndex: e
                }),
                    m(e));
            },
            [m, t, o]
        ),
        W = Math.floor(n.offset / D.vpv),
        K = j && W >= L,
        z = L + 1;
    return (0, r.jsxs)('section', {
        className: k.searchResultsWrap,
        'aria-label': x.intl.string(x.t.zkoeq6),
        children: [
            (0, r.jsx)(I.Z, {
                searchContext: t,
                searchMode: g,
                onSearchModeChange: Z,
                totalResults: n.totalResults,
                isSearching: n.isSearching,
                isIndexing: n.isHistoricalIndexing,
                documentsIndexed: n.documentsIndexed
            }),
            (0, r.jsxs)(u.Den, {
                ref: T,
                className: k.scroller,
                children: [
                    K &&
                        !n.isSearching &&
                        (0, r.jsx)(u.Wn, {
                            className: k.paginationLimitHeader,
                            messageType: u.QYI.WARNING,
                            children: x.intl.formatToPlainString(x.t['E+2azc'], { maxPages: z })
                        }),
                    (0, r.jsx)(H, {
                        searchResults: s,
                        blockCount: l,
                        ignoreCount: c,
                        search: n,
                        searchContext: t,
                        renderEmbeds: a,
                        onClick: F,
                        onScrollTo: C,
                        onPageChange: Y,
                        paginationTotalCount: j ? w : void 0,
                        renderPageWrapper: U,
                        onBlockedResultsClick: y,
                        searchRequestAnalyticsId: o,
                        searchResultsQuery: O,
                        isFavoritesSearch: v
                    })
                ]
            }),
            (0, r.jsx)(V, {
                searchContext: t,
                isFeedbackVisible: d,
                dismissFeedbackEntrypoint: f
            })
        ]
    });
});
function W(e) {
    let t = i.useRef(e),
        [n, r] = i.useState(!1),
        { enabled: a, force: o } = (0, O.f)({ location: 'SearchResults' });
    return (
        i.useEffect(() => {
            a && o && r(!0);
        }, [o, a]),
        i.useEffect(() => {
            a &&
                (o ||
                    (e !== t.current &&
                        ((t.current = e),
                        d.Z.possiblyShowFeedbackModal(
                            L.nw.SEARCH_RESULTS,
                            () => r(!0),
                            () => r(!1)
                        ))));
        }, [a, o, e]),
        {
            dismissFeedbackEntrypoint: i.useCallback(() => {
                r(!1);
            }, []),
            isFeedbackVisible: n
        }
    );
}
function K(e) {
    let { searchContext: t } = e,
        n = (0, y.U)({ location: 'SearchResults' }),
        { isFeedbackVisible: a, dismissFeedbackEntrypoint: o } = W(t),
        s = (0, b.WJ)(t),
        l = (0, c.cj)([g.Z, E.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = g.Z.getIsFetching(s)) && e,
                isIndexing: null != (t = g.Z.getIsIndexing(s)) && t,
                isHistoricalIndexing: null != (n = g.Z.getIsHistoricalIndexing(s)) && n,
                documentsIndexed: g.Z.getDocumentsIndexed(s),
                offset: null != (r = E.Z.getSearchResultsOffset(s)) ? r : 0,
                totalResults: null != (i = g.Z.getTotalCount(s)) ? i : 0,
                hasError: null != g.Z.getError(s),
                showBlockedResults: E.Z.shouldShowBlockedResults(s),
                showNoResultsAlt: E.Z.shouldShowNoResultsAlt(s)
            };
        }),
        u = (0, c.e7)([g.Z], () => g.Z.getAnalyticsId(s)),
        { searchResults: d, ignoreCount: _, blockCount: p } = (0, w.Z)(s),
        { searchMode: h, setSearchMode: O } = (0, v.Z)({ searchId: s }),
        I = i.useCallback(
            (e) => {
                if (l.isSearching) return;
                O(e);
                let r = B(t),
                    i = E.Z.getSearchResultsQuery(s);
                null != r &&
                    null != i &&
                    (n && t.type === D.aib.DMS
                        ? S.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: r,
                              searchMode: e
                          })
                        : S.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: i,
                              searchMode: e,
                              offset: 0
                          }));
            },
            [n, l.isSearching, t, s, O]
        ),
        T = i.useCallback(
            (e) => {
                if (l.isSearching) return;
                let r = B(t),
                    i = E.Z.getSearchResultsQuery(s);
                null != r &&
                    null != i &&
                    (n && t.type === D.aib.DMS
                        ? S.Z.fetchCrossDMMessages({
                              searchContext: t,
                              queryString: r,
                              selectedPageIndex: e,
                              searchMode: h
                          })
                        : S.Z.fetchMessages({
                              searchContext: t,
                              queryString: r,
                              searchQuery: i,
                              offset: e * D.vpv
                          }));
            },
            [n, l.isSearching, t, s, h]
        ),
        A = (0, c.e7)([E.Z], () => E.Z.getSearchResultsQuery(s)),
        N = t.type === D.aib.FAVORITES,
        C = i.useCallback((e) => m.Z.setShowBlockedResults(s, e), [s]),
        R = i.useDeferredValue(d),
        P = i.useDeferredValue(l),
        L = i.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Y, {
                searchContext: t,
                search: P,
                searchRequestAnalyticsId: L,
                searchResults: R,
                ignoreCount: _,
                blockCount: p,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: a,
                dismissFeedbackEntrypoint: o,
                onPageChange: T,
                onSearchModeChange: I,
                searchMode: h,
                onBlockedResultsClick: C,
                searchResultsQuery: A,
                isFavoritesSearch: N
            }),
            (0, r.jsx)(Z, {
                searchContext: t,
                searchRequestAnalyticsId: L,
                searchResults: R,
                searchOffset: P.offset,
                searchLimit: D.vpv,
                searchHasError: P.hasError,
                searchTotalResults: P.totalResults,
                searchIsIndexing: P.isHistoricalIndexing,
                isSearching: P.isSearching
            })
        ]
    });
}
function z(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, C.H)({
            guildId: t,
            channelId: n
        });
    return null == i ? null : (0, r.jsx)(K, { searchContext: i });
}
