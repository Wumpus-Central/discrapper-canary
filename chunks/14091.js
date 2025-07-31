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
    i = n(392711),
    o = n.n(i),
    c = n(442837),
    u = n(481060),
    h = n(169223),
    d = n(695346),
    p = n(592125),
    f = n(585483),
    g = n(72006),
    m = n(171900),
    y = n(518944),
    x = n(607802),
    S = n(945577),
    b = n(759209),
    v = n(970850),
    j = n(406326),
    C = n(994463),
    O = n(611004),
    _ = n(619753),
    I = n(902733),
    P = n(165017),
    E = n(737),
    R = n(909125),
    T = n(315322),
    N = n(981631),
    k = n(531578),
    w = n(388032),
    Z = n(682065);
function A(e, t, n) {
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
    let t = null != e ? y.Z.getEditorState(e) : null;
    return null != t ? g.Sq(t) : null;
}
class D extends s.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            A(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    s = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && r++);
                        }),
                    0 === n
                        ? (0, T.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: M(t.props.searchId),
                              searchQuery: null != t.props.searchId ? y.Z.getSearchResultsQuery(t.props.searchId) : null
                          })
                        : (0, T.hM)({
                              searchType: t.props.searchType,
                              searchId: t.props.searchId,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              prevSearchAnalyticsId: e !== t.props.searchAnalyticsId ? e : null,
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
                              searchQueryString: M(t.props.searchId),
                              searchQuery: null != t.props.searchId ? y.Z.getSearchResultsQuery(t.props.searchId) : null
                          }));
            }));
    }
}
function F(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: Z.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: Z.emptyResultsContent,
            children: t
        })
    });
}
function L(e) {
    let { searchId: t, searchType: n, isFeedbackVisible: s, dismissFeedbackEntrypoint: l } = e;
    return s
        ? (0, r.jsx)(I.Z, {
              searchId: t,
              searchType: n,
              dismissFeedbackEntrypoint: l
          })
        : null;
}
function B(e) {
    let { searchResults: t, blockCount: n, ignoreCount: s, search: l, searchId: i, searchType: o, renderEmbeds: c, onClick: u, onScrollTo: h, onPageChange: d, paginationTotalCount: p, renderPageWrapper: f } = e,
        { totalResults: g, isSearching: m, isIndexing: y, hasError: x } = l;
    if (x)
        return (0, r.jsxs)(F, {
            children: [
                (0, r.jsx)('div', { className: Z.errorImage }),
                (0, r.jsx)('div', {
                    className: a()(Z.emptyResultsText, Z.errorMessage),
                    children: w.intl.string(w.t.uvDZBQ)
                })
            ]
        });
    if (y) {
        let e = o === N.aib.GUILD ? w.intl.string(w.t.AXPbZm) : w.intl.string(w.t.Q0JJjo);
        return (0, r.jsxs)(F, {
            children: [
                (0, r.jsx)(C.Z, {}),
                (0, r.jsx)('div', {
                    className: (Z.emptyResultsText, Z.stillIndexing),
                    children: e
                })
            ]
        });
    }
    if (m) return null;
    if (g > 0)
        return (0, r.jsx)(_.Z, {
            search: l,
            searchResults: t,
            onClick: u,
            blockCount: n,
            ignoreCount: s,
            searchId: i,
            renderEmbeds: c,
            scrollTo: h,
            onPageChange: d,
            paginationTotalCount: p,
            renderPageWrapper: f
        });
    let { showNoResultsAlt: S } = l,
        b = S ? w.intl.string(w.t['VrK/2d']) : w.intl.string(w.t.V6nAfH);
    return (0, r.jsxs)(F, {
        children: [
            (0, r.jsx)('div', { className: a()(Z.noResultsImage, { [Z.alt]: S }) }),
            (0, r.jsx)('div', {
                className: a()(Z.emptyResultsText, Z.noResults, { [Z.alt]: S }),
                children: b
            })
        ]
    });
}
let H = s.memo(function (e) {
    let { searchId: t, search: n, searchType: l, renderEmbeds: a, searchAnalyticsId: i, searchResults: o, blockCount: c, ignoreCount: h, isFeedbackVisible: d, dismissFeedbackEntrypoint: g, onSearchModeChange: m, onPageChange: x, searchMode: S } = e,
        b = s.useRef(null),
        v = s.useCallback(() => {
            O.Z.cleanUpSearchState(t);
        }, [t]);
    s.useEffect(
        () => (
            f.S.subscribe(N.CkL.SEARCH_RESULTS_CLOSE, v),
            () => {
                f.S.unsubscribe(N.CkL.SEARCH_RESULTS_CLOSE, v);
            }
        ),
        [v]
    );
    let C = s.useRef(n.showBlockedResults);
    s.useEffect(() => {
        if (C.current !== n.showBlockedResults) {
            C.current = n.showBlockedResults;
            let e = b.current;
            null != e && e.scrollToBottom();
        }
    }, [n.showBlockedResults]);
    let _ = s.useCallback((e, t, n) => {
            let r = b.current;
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
            paginationMaxIndex: P,
            isPaginationTotalCountLimited: E
        } = (0, R.M)({
            totalResults: n.totalResults,
            isSearching: n.isSearching
        }),
        k = s.useCallback(
            (e, t) => {
                let n = P + 1;
                if (!E || e.targetPage !== n) return t;
                {
                    let e = w.intl.formatToPlainString(w.t['E+2azc'], { maxPages: n });
                    return (0, r.jsx)(u.ua7, {
                        tooltipClassName: Z.paginationLimitTooltip,
                        tooltipContentClassName: Z.paginationLimitTooltipText,
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
                                                A(e, t, n[t]);
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
            [E, P]
        ),
        D = s.useCallback(
            (e) => {
                e === S ||
                    n.isSearching ||
                    ((0, T.zW)({
                        searchId: t,
                        searchType: l,
                        searchAnalyticsId: i,
                        mode: e
                    }),
                    m(e));
            },
            [m, n.isSearching, i, t, S, l]
        ),
        F = s.useCallback(
            (e, r) => {
                let s = p.Z.getChannel(e.channel_id),
                    a = null != s ? s.getGuildId() : null,
                    { offset: c, totalResults: u } = n;
                (0, T.sL)({
                    searchId: t,
                    searchType: l,
                    searchAnalyticsId: i,
                    guildId: a,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != o ? o.length : null,
                    totalResults: u,
                    limit: N.vpv,
                    page: Math.floor(c / N.vpv) + 1,
                    offset: c,
                    index: r,
                    searchQueryString: M(t),
                    searchQuery: y.Z.getSearchResultsQuery(t)
                });
            },
            [n, i, t, o, l]
        ),
        H = s.useCallback(
            (e) => {
                ((0, T.t6)({
                    searchId: t,
                    searchType: l,
                    searchAnalyticsId: i,
                    newPageIndex: e
                }),
                    x(e));
            },
            [x, i, t, l]
        ),
        Q = Math.floor(n.offset / N.vpv),
        W = E && Q >= P,
        U = P + 1;
    return (0, r.jsxs)('section', {
        className: Z.searchResultsWrap,
        'aria-label': w.intl.string(w.t.zkoeq6),
        children: [
            (0, r.jsx)(j.Z, {
                searchId: t,
                searchMode: S,
                onSearchModeChange: D,
                totalResults: n.totalResults,
                isSearching: n.isSearching,
                isIndexing: n.isHistoricalIndexing,
                documentsIndexed: n.documentsIndexed
            }),
            (0, r.jsxs)(u.Den, {
                ref: b,
                className: Z.scroller,
                children: [
                    W &&
                        !n.isSearching &&
                        (0, r.jsx)(u.Wn, {
                            className: Z.paginationLimitHeader,
                            messageType: u.QYI.WARNING,
                            children: w.intl.formatToPlainString(w.t['E+2azc'], { maxPages: U })
                        }),
                    (0, r.jsx)(B, {
                        searchResults: o,
                        blockCount: c,
                        ignoreCount: h,
                        search: n,
                        searchId: t,
                        searchType: l,
                        renderEmbeds: a,
                        onClick: F,
                        onScrollTo: _,
                        onPageChange: H,
                        paginationTotalCount: E ? I : void 0,
                        renderPageWrapper: k
                    })
                ]
            }),
            (0, r.jsx)(L, {
                searchId: t,
                searchType: l,
                isFeedbackVisible: d,
                dismissFeedbackEntrypoint: g
            })
        ]
    });
});
function Q(e) {
    let { searchContext: t } = e,
        n = (0, S.U)({ location: 'SearchResults' }),
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let t = s.useRef(e),
                [n, r] = s.useState(!1),
                { enabled: l, force: a } = (0, b.f)({ location: 'SearchResults' });
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
                                    k.nw.SEARCH_RESULTS,
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
        i = (0, x.WJ)(t),
        o = (0, c.cj)([m.Z, y.Z], () => {
            var e, t, n, r, s;
            return {
                isSearching: null != (e = m.Z.getIsFetching(i)) && e,
                isIndexing: null != (t = m.Z.getIsIndexing(i)) && t,
                isHistoricalIndexing: null != (n = m.Z.getIsHistoricalIndexing(i)) && n,
                documentsIndexed: m.Z.getDocumentsIndexed(i),
                offset: null != (r = y.Z.getSearchResultsOffset(i)) ? r : 0,
                totalResults: null != (s = m.Z.getTotalCount(i)) ? s : 0,
                hasError: null != m.Z.getError(i),
                showBlockedResults: y.Z.shouldShowBlockedResults(i),
                showNoResultsAlt: y.Z.shouldShowNoResultsAlt(i)
            };
        }),
        u = (0, c.e7)([m.Z], () => m.Z.getAnalyticsId(i)),
        { searchResults: p, ignoreCount: f, blockCount: g } = (0, E.Z)(i),
        { searchMode: j, setSearchMode: C } = (0, v.Z)({ searchId: i }),
        _ = s.useCallback(
            (e) => {
                if (o.isSearching) return;
                C(e);
                let r = M(i),
                    s = y.Z.getSearchResultsQuery(i);
                null != r &&
                    null != s &&
                    (n && t.type === N.aib.DMS
                        ? O.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: null != r ? r : '',
                              searchMode: e
                          })
                        : O.Z.fetchMessages({
                              searchId: i,
                              queryString: r,
                              searchQuery: s,
                              searchMode: e,
                              offset: 0
                          }));
            },
            [n, o.isSearching, t, i, C]
        ),
        I = s.useCallback(
            (e) => {
                if (o.isSearching) return;
                let r = M(i),
                    s = y.Z.getSearchResultsQuery(i);
                if (null != r && null != s)
                    if (n && t.type === N.aib.DMS) {
                        var l;
                        O.Z.fetchCrossDMMessages({
                            searchContext: t,
                            queryString: null != (l = M(i)) ? l : '',
                            selectedPageIndex: e,
                            searchMode: j
                        });
                    } else
                        O.Z.fetchMessages({
                            searchId: i,
                            queryString: r,
                            searchQuery: s,
                            offset: e * N.vpv
                        });
            },
            [n, o.isSearching, t, i, j]
        ),
        P = s.useDeferredValue(p),
        R = s.useDeferredValue(o),
        T = s.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(H, {
                searchId: i,
                search: R,
                searchAnalyticsId: T,
                searchType: t.type,
                searchResults: P,
                ignoreCount: f,
                blockCount: g,
                renderEmbeds: d.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: I,
                onSearchModeChange: _,
                searchMode: j
            }),
            (0, r.jsx)(D, {
                searchId: i,
                searchType: t.type,
                searchAnalyticsId: T,
                searchResults: P,
                searchOffset: R.offset,
                searchLimit: N.vpv,
                searchHasError: R.hasError,
                searchTotalResults: R.totalResults,
                searchIsIndexing: R.isHistoricalIndexing,
                isSearching: R.isSearching
            })
        ]
    });
}
function W(e) {
    let { guildId: t, channelId: n } = e,
        s = (0, P.H)({
            guildId: t,
            channelId: n
        });
    return null == s ? null : (0, r.jsx)(Q, { searchContext: s });
}
