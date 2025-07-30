(n.d(t, {
    $: () => Z,
    Z: () => H
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
    _ = n(611004),
    O = n(619753),
    I = n(902733),
    E = n(165017),
    R = n(737),
    P = n(315322),
    T = n(981631),
    N = n(531578),
    k = n(388032),
    w = n(682065);
function Z(e) {
    let t = null != e ? y.Z.getEditorState(e) : null;
    return null != t ? g.Sq(t) : null;
}
class A extends s.Component {
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
        var t, n, r;
        (super(...e),
            (t = this),
            (n = 'autoAnalytics'),
            (r = function () {
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
                        ? (0, P.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: Z(t.props.searchId),
                              searchQuery: null != t.props.searchId ? y.Z.getSearchResultsQuery(t.props.searchId) : null
                          })
                        : (0, P.hM)({
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
                              searchQueryString: Z(t.props.searchId),
                              searchQuery: null != t.props.searchId ? y.Z.getSearchResultsQuery(t.props.searchId) : null
                          }));
            }),
            n in this
                ? Object.defineProperty(this, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[n] = r));
    }
}
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: w.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: w.emptyResultsContent,
            children: t
        })
    });
}
function D(e) {
    let { searchId: t, searchType: n, isFeedbackVisible: s, dismissFeedbackEntrypoint: l } = e;
    return s
        ? (0, r.jsx)(I.Z, {
              searchId: t,
              searchType: n,
              dismissFeedbackEntrypoint: l
          })
        : null;
}
function F(e) {
    let { searchResults: t, blockCount: n, ignoreCount: s, search: l, searchId: i, searchType: o, renderEmbeds: c, onClick: u, onScrollTo: h, onPageChange: d } = e,
        { totalResults: p, isSearching: f, isIndexing: g, hasError: m } = l;
    if (m)
        return (0, r.jsxs)(M, {
            children: [
                (0, r.jsx)('div', { className: w.errorImage }),
                (0, r.jsx)('div', {
                    className: a()(w.emptyResultsText, w.errorMessage),
                    children: k.intl.string(k.t.uvDZBQ)
                })
            ]
        });
    if (g) {
        let e = o === T.aib.GUILD ? k.intl.string(k.t.AXPbZm) : k.intl.string(k.t.Q0JJjo);
        return (0, r.jsxs)(M, {
            children: [
                (0, r.jsx)(C.Z, {}),
                (0, r.jsx)('div', {
                    className: (w.emptyResultsText, w.stillIndexing),
                    children: e
                })
            ]
        });
    }
    if (f) return null;
    if (p > 0)
        return (0, r.jsx)(O.Z, {
            search: l,
            searchResults: t,
            onClick: u,
            blockCount: n,
            ignoreCount: s,
            searchId: i,
            renderEmbeds: c,
            scrollTo: h,
            onPageChange: d
        });
    let { showNoResultsAlt: y } = l,
        x = y ? k.intl.string(k.t['VrK/2d']) : k.intl.string(k.t.V6nAfH);
    return (0, r.jsxs)(M, {
        children: [
            (0, r.jsx)('div', { className: a()(w.noResultsImage, { [w.alt]: y }) }),
            (0, r.jsx)('div', {
                className: a()(w.emptyResultsText, w.noResults, { [w.alt]: y }),
                children: x
            })
        ]
    });
}
let L = s.memo(function (e) {
    let { searchId: t, search: n, searchType: l, renderEmbeds: a, searchAnalyticsId: i, searchResults: o, blockCount: c, ignoreCount: h, isFeedbackVisible: d, dismissFeedbackEntrypoint: g, onSearchModeChange: m, onPageChange: x, searchMode: S } = e,
        b = s.useRef(null),
        v = s.useCallback(() => {
            _.Z.cleanUpSearchState(t);
        }, [t]);
    s.useEffect(
        () => (
            f.S.subscribe(T.CkL.SEARCH_RESULTS_CLOSE, v),
            () => {
                f.S.unsubscribe(T.CkL.SEARCH_RESULTS_CLOSE, v);
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
    let O = s.useCallback((e, t, n) => {
            let r = b.current;
            if (null == r) return;
            let s = r.getScrollerState().scrollTop - e;
            r.scrollTo({
                to: s,
                animate: t,
                callback: n
            });
        }, []),
        I = s.useCallback(
            (e) => {
                e === S ||
                    n.isSearching ||
                    ((0, P.zW)({
                        searchId: t,
                        searchType: l,
                        searchAnalyticsId: i,
                        mode: e
                    }),
                    m(e));
            },
            [m, n.isSearching, i, t, S, l]
        ),
        E = s.useCallback(
            (e, r) => {
                let s = p.Z.getChannel(e.channel_id),
                    a = null != s ? s.getGuildId() : null,
                    { offset: c, totalResults: u } = n;
                (0, P.sL)({
                    searchId: t,
                    searchType: l,
                    searchAnalyticsId: i,
                    guildId: a,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != o ? o.length : null,
                    totalResults: u,
                    limit: T.vpv,
                    page: Math.floor(c / T.vpv) + 1,
                    offset: c,
                    index: r,
                    searchQueryString: Z(t),
                    searchQuery: y.Z.getSearchResultsQuery(t)
                });
            },
            [n, i, t, o, l]
        ),
        R = s.useCallback(
            (e) => {
                ((0, P.t6)({
                    searchId: t,
                    searchType: l,
                    searchAnalyticsId: i,
                    newPageIndex: e
                }),
                    x(e));
            },
            [x, i, t, l]
        );
    return (0, r.jsxs)('section', {
        className: w.searchResultsWrap,
        'aria-label': k.intl.string(k.t.zkoeq6),
        children: [
            (0, r.jsx)(j.Z, {
                searchId: t,
                searchMode: S,
                onSearchModeChange: I,
                totalResults: n.totalResults,
                isSearching: n.isSearching,
                isIndexing: n.isHistoricalIndexing,
                documentsIndexed: n.documentsIndexed
            }),
            (0, r.jsx)(u.Den, {
                ref: b,
                className: w.scroller,
                children: (0, r.jsx)(F, {
                    searchResults: o,
                    blockCount: c,
                    ignoreCount: h,
                    search: n,
                    searchId: t,
                    searchType: l,
                    renderEmbeds: a,
                    onClick: E,
                    onScrollTo: O,
                    onPageChange: R
                })
            }),
            (0, r.jsx)(D, {
                searchId: t,
                searchType: l,
                isFeedbackVisible: d,
                dismissFeedbackEntrypoint: g
            })
        ]
    });
});
function B(e) {
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
                                    N.nw.SEARCH_RESULTS,
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
        { searchResults: p, ignoreCount: f, blockCount: g } = (0, R.Z)(i),
        { searchMode: j, setSearchMode: C } = (0, v.Z)({ searchId: i }),
        O = s.useCallback(
            (e) => {
                if (o.isSearching) return;
                C(e);
                let r = Z(i),
                    s = y.Z.getSearchResultsQuery(i);
                null != r &&
                    null != s &&
                    (n && t.type === T.aib.DMS
                        ? _.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: null != r ? r : '',
                              searchMode: e
                          })
                        : _.Z.fetchMessages({
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
                let r = Z(i),
                    s = y.Z.getSearchResultsQuery(i);
                if (null != r && null != s)
                    if (n && t.type === T.aib.DMS) {
                        var l;
                        _.Z.fetchCrossDMMessages({
                            searchContext: t,
                            queryString: null != (l = Z(i)) ? l : '',
                            selectedPageIndex: e,
                            searchMode: j
                        });
                    } else
                        _.Z.fetchMessages({
                            searchId: i,
                            queryString: r,
                            searchQuery: s,
                            offset: e * T.vpv
                        });
            },
            [n, o.isSearching, t, i, j]
        ),
        E = s.useDeferredValue(p),
        P = s.useDeferredValue(o),
        k = s.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L, {
                searchId: i,
                search: P,
                searchAnalyticsId: k,
                searchType: t.type,
                searchResults: E,
                ignoreCount: f,
                blockCount: g,
                renderEmbeds: d.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: I,
                onSearchModeChange: O,
                searchMode: j
            }),
            (0, r.jsx)(A, {
                searchId: i,
                searchType: t.type,
                searchAnalyticsId: k,
                searchResults: E,
                searchOffset: P.offset,
                searchLimit: T.vpv,
                searchHasError: P.hasError,
                searchTotalResults: P.totalResults,
                searchIsIndexing: P.isHistoricalIndexing,
                isSearching: P.isSearching
            })
        ]
    });
}
function H(e) {
    let { guildId: t, channelId: n } = e,
        s = (0, E.H)({
            guildId: t,
            channelId: n
        });
    return null == s ? null : (0, r.jsx)(B, { searchContext: s });
}
