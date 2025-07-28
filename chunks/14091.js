(r.d(t, {
    $: () => F,
    Z: () => q
}),
    r(388685),
    r(35282));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(392711),
    o = r.n(i),
    c = r(442837),
    u = r(481060),
    h = r(447543),
    d = r(603263),
    p = r(410030),
    f = r(169223),
    g = r(778877),
    m = r(903488),
    S = r(416638),
    _ = r(695346),
    y = r(592125),
    b = r(768119),
    x = r(944486),
    E = r(585483),
    O = r(72006),
    v = r(965996),
    C = r(652399),
    j = r(970850),
    R = r(861262),
    I = r(251285),
    T = r(406326),
    P = r(994463),
    N = r(611004),
    A = r(619753),
    M = r(902733),
    k = r(981631),
    Z = r(531578),
    w = r(388032),
    L = r(682065);
function D(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function F(e) {
    let t = null != e ? b.Z.getEditorState(e) : null;
    return null != t ? O.Sq(t) : null;
}
class H extends s.Component {
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
            D(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let r = 0,
                    n = 0,
                    s = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (r++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && n++);
                        }),
                    0 === r
                        ? (0, C.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: F(t.props.searchId),
                              searchQuery: null != t.props.searchId ? b.Z.getSearchResultsQuery(t.props.searchId) : null
                          })
                        : (0, C.hM)({
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
                              pageNumMessages: r,
                              pageNumLinks: l,
                              pageNumEmbeds: s,
                              pageNumAttachments: n,
                              searchQueryString: F(t.props.searchId),
                              searchQuery: null != t.props.searchId ? b.Z.getSearchResultsQuery(t.props.searchId) : null
                          }));
            }));
    }
}
let B = (e) => {
    let { children: t } = e;
    return (0, n.jsx)('div', {
        className: L.emptyResultsWrap,
        children: (0, n.jsx)('div', {
            className: L.emptyResultsContent,
            children: t
        })
    });
};
class U extends s.PureComponent {
    componentDidMount() {
        E.S.subscribe(k.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        E.S.unsubscribe(k.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
    }
    render() {
        return (0, n.jsxs)('section', {
            className: L.searchResultsWrap,
            'aria-label': w.intl.string(w.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, n.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: L.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            D(this, 'scrollerRef', s.createRef()),
            D(this, 'scrollTo', (e, t, r) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                let s = n.getScrollerState().scrollTop - e;
                n.scrollTo({
                    to: s,
                    animate: t,
                    callback: r
                });
            }),
            D(this, 'selectChannel', (e) => {
                e !== x.Z.getChannelId() && h.ZP.transitionToInviteChannelSync(e);
            }),
            D(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                N.Z.cleanUpSearchState(e);
            }),
            D(this, 'handleSearchModeChange', (e) => {
                let {
                    searchId: t,
                    searchType: r,
                    search: { isSearching: n },
                    searchAnalyticsId: s,
                    onSearchModeChange: l,
                    searchMode: a
                } = this.props;
                e === a ||
                    n ||
                    ((0, C.zW)({
                        searchId: t,
                        searchType: r,
                        searchAnalyticsId: s,
                        mode: e
                    }),
                    l(e));
            }),
            D(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                d.QY(e, !t);
            }),
            D(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, n.jsx)(M.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            D(this, 'renderHeader', () => {
                let {
                    searchId: e,
                    searchMode: t,
                    search: { totalResults: r, isSearching: s, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, n.jsx)(T.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: r,
                    isSearching: s,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            D(this, 'renderIndexing', () => {
                let e = this.props.searchType === k.aib.GUILD ? w.intl.string(w.t.AXPbZm) : w.intl.string(w.t.Q0JJjo);
                return (0, n.jsxs)(B, {
                    children: [
                        (0, n.jsx)(P.Z, {}),
                        (0, n.jsx)('div', {
                            className: (L.emptyResultsText, L.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? w.intl.string(w.t['VrK/2d']) : w.intl.string(w.t.V6nAfH);
                return (0, n.jsxs)(B, {
                    children: [
                        (0, n.jsx)('div', { className: a()(L.noResultsImage, { [L.alt]: e }) }),
                        (0, n.jsx)('div', {
                            className: a()(L.emptyResultsText, L.noResults, { [L.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, n.jsxs)(B, {
                    children: [
                        (0, n.jsx)('div', { className: L.errorImage }),
                        (0, n.jsx)('div', {
                            className: a()(L.emptyResultsText, L.errorMessage),
                            children: w.intl.string(w.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let r = y.Z.getChannel(e.channel_id),
                    n = null != r ? r.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: i, totalResults: o } = this.props.search;
                (0, C.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: n,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: o,
                    limit: k.vpv,
                    page: Math.floor(i / k.vpv) + 1,
                    offset: i,
                    index: t,
                    searchQueryString: F(s),
                    searchQuery: b.Z.getSearchResultsQuery(s)
                });
            }),
            D(this, 'handlePageChange', (e) => {
                let { searchId: t, searchType: r, searchAnalyticsId: n } = this.props;
                ((0, C.t6)({
                    searchId: t,
                    searchType: r,
                    searchAnalyticsId: n,
                    newPageIndex: e
                }),
                    this.props.onPageChange(e));
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: r, search: s, searchId: l, renderEmbeds: a } = this.props,
                    { totalResults: i, isSearching: o, isIndexing: c, hasError: u } = s;
                return u
                    ? this.renderError()
                    : c
                      ? this.renderIndexing()
                      : o
                        ? null
                        : i > 0
                          ? (0, n.jsx)(A.Z, {
                                search: s,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: r,
                                searchId: l,
                                renderEmbeds: a,
                                scrollTo: this.scrollTo,
                                onPageChange: this.handlePageChange
                            })
                          : this.renderNoResults();
            }));
    }
}
function W(e) {
    let { searchId: t, isFeedbackVisible: r, theme: l, dismissFeedbackEntrypoint: a } = e,
        i = (0, c.cj)([m.Z, b.Z], () => {
            var e, r, n, s, l;
            return {
                isSearching: null != (e = m.Z.getIsFetching(t)) && e,
                isIndexing: null != (r = m.Z.getIsIndexing(t)) && r,
                isHistoricalIndexing: null != (n = m.Z.getIsHistoricalIndexing(t)) && n,
                documentsIndexed: m.Z.getDocumentsIndexed(t),
                offset: null != (s = b.Z.getSearchResultsOffset(t)) ? s : 0,
                totalResults: null != (l = m.Z.getTotalCount(t)) ? l : 0,
                hasError: null != m.Z.getError(t),
                showBlockedResults: b.Z.shouldShowBlockedResults(t),
                showNoResultsAlt: b.Z.shouldShowNoResultsAlt(t)
            };
        }),
        o = (0, R.k)(t),
        u = (0, c.e7)([m.Z], () => m.Z.getAnalyticsId(t)),
        { searchResults: h, ignoreCount: d, blockCount: p } = (0, I.Z)(t),
        { searchMode: f, setSearchMode: g } = (0, j.Z)({ searchId: t }),
        S = s.useCallback(
            (e) => {
                g(e);
                let r = F(t),
                    n = b.Z.getSearchResultsQuery(t);
                null != r &&
                    null != n &&
                    N.Z.fetchMessages({
                        searchId: t,
                        queryString: r,
                        searchQuery: n,
                        searchMode: e,
                        offset: 0
                    });
            },
            [t, g]
        ),
        y = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                let r = F(t),
                    n = b.Z.getSearchResultsQuery(t);
                null != r &&
                    null != n &&
                    N.Z.fetchMessages({
                        searchId: t,
                        queryString: r,
                        searchQuery: n,
                        offset: e * k.vpv
                    });
            },
            [t, i.isSearching]
        ),
        x = s.useDeferredValue(h),
        E = s.useDeferredValue(i);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U, {
                searchId: t,
                search: E,
                searchAnalyticsId: u,
                searchType: o,
                searchResults: x,
                ignoreCount: d,
                blockCount: p,
                renderEmbeds: _.NA.useSetting(),
                developerMode: _.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: a,
                onPageChange: y,
                onSearchModeChange: S,
                searchMode: f
            }),
            (0, n.jsx)(H, {
                searchId: t,
                searchType: o,
                searchAnalyticsId: u,
                searchResults: h,
                searchOffset: i.offset,
                searchLimit: k.vpv,
                searchHasError: i.hasError,
                searchTotalResults: i.totalResults,
                searchIsIndexing: i.isHistoricalIndexing,
                isSearching: i.isSearching
            })
        ]
    });
}
function G(e) {
    let { theme: t, isFeedbackVisible: r, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: k.aib.DMS }), []),
        i = (0, S.WJ)(a),
        o = (0, c.cj)([m.Z, b.Z], () => {
            var e, t, r, n, s;
            return {
                isSearching: null != (e = m.Z.getIsFetching(i)) && e,
                isIndexing: null != (t = m.Z.getIsIndexing(i)) && t,
                isHistoricalIndexing: null != (r = m.Z.getIsHistoricalIndexing(i)) && r,
                documentsIndexed: m.Z.getDocumentsIndexed(i),
                offset: null != (n = b.Z.getSearchResultsOffset(i)) ? n : 0,
                totalResults: null != (s = m.Z.getTotalCount(i)) ? s : 0,
                hasError: null != m.Z.getError(i),
                showBlockedResults: b.Z.shouldShowBlockedResults(i),
                showNoResultsAlt: b.Z.shouldShowNoResultsAlt(i)
            };
        }),
        u = (0, c.e7)([m.Z], () => m.Z.getAnalyticsId(i)),
        { searchResults: h, ignoreCount: d, blockCount: p } = (0, I.G)(a),
        { searchMode: f, setSearchMode: g } = (0, j.Z)({ searchId: i }),
        y = s.useCallback(
            (e) => {
                g(e);
                let t = F(i);
                N.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [a, i, g]
        ),
        x = s.useCallback(
            (e) => {
                var t;
                N.Z.fetchCrossDMMessages({
                    searchContext: a,
                    queryString: null != (t = F(i)) ? t : '',
                    selectedPageIndex: e,
                    searchMode: f
                });
            },
            [a, i, f]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U, {
                searchId: k.aib.DMS,
                search: o,
                searchAnalyticsId: u,
                searchType: k.aib.DMS,
                searchResults: h,
                ignoreCount: d,
                blockCount: p,
                renderEmbeds: _.NA.useSetting(),
                developerMode: _.Sb.useSetting(),
                theme: t,
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: l,
                onPageChange: x,
                onSearchModeChange: y,
                searchMode: f
            }),
            (0, n.jsx)(H, {
                searchId: k.aib.DMS,
                searchType: k.aib.DMS,
                searchAnalyticsId: u,
                searchResults: h,
                searchOffset: o.offset,
                searchLimit: k.vpv,
                searchHasError: o.hasError,
                searchTotalResults: o.totalResults,
                searchIsIndexing: o.isHistoricalIndexing,
                isSearching: o.isSearching
            })
        ]
    });
}
function q(e) {
    let { searchId: t } = e,
        r = (0, p.ZP)(),
        l = (0, g.U)({ location: 'SearchResults' }),
        a = s.useRef(null),
        [i, o] = s.useState(!1),
        { enabled: c, force: u } = (0, v.f)({ location: 'SearchResults' });
    (s.useEffect(() => {
        c && u && o(!0);
    }, [u, c]),
        s.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            Z.nw.SEARCH_RESULTS,
                            () => o(!0),
                            () => o(!1)
                        ))));
        }, [c, u, t]));
    let h = s.useCallback(() => {
        o(!1);
    }, []);
    return l && t === k.aib.DMS
        ? (0, n.jsx)(G, {
              theme: r,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: h
          })
        : (0, n.jsx)(W, {
              theme: r,
              searchId: t,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: h
          });
}
