(r.d(t, {
    $: () => D,
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
    d = r(410030),
    p = r(169223),
    f = r(695346),
    g = r(592125),
    m = r(944486),
    S = r(585483),
    _ = r(72006),
    y = r(748610),
    x = r(171900),
    b = r(518944),
    E = r(607802),
    C = r(945577),
    v = r(759209),
    O = r(970850),
    R = r(861262),
    I = r(406326),
    j = r(994463),
    T = r(611004),
    P = r(619753),
    N = r(902733),
    A = r(737),
    Z = r(315322),
    M = r(981631),
    k = r(531578),
    w = r(388032),
    L = r(682065);
function F(e, t, r) {
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
function D(e) {
    let t = null != e ? b.Z.getEditorState(e) : null;
    return null != t ? _.Sq(t) : null;
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
            F(this, 'autoAnalytics', function () {
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
                        ? (0, Z.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: D(t.props.searchId),
                              searchQuery: null != t.props.searchId ? b.Z.getSearchResultsQuery(t.props.searchId) : null
                          })
                        : (0, Z.hM)({
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
                              searchQueryString: D(t.props.searchId),
                              searchQuery: null != t.props.searchId ? b.Z.getSearchResultsQuery(t.props.searchId) : null
                          }));
            }));
    }
}
let W = (e) => {
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
        S.S.subscribe(M.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        S.S.unsubscribe(M.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            F(this, 'scrollerRef', s.createRef()),
            F(this, 'scrollTo', (e, t, r) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                let s = n.getScrollerState().scrollTop - e;
                n.scrollTo({
                    to: s,
                    animate: t,
                    callback: r
                });
            }),
            F(this, 'selectChannel', (e) => {
                e !== m.Z.getChannelId() && h.ZP.transitionToInviteChannelSync(e);
            }),
            F(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                T.Z.cleanUpSearchState(e);
            }),
            F(this, 'handleSearchModeChange', (e) => {
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
                    ((0, Z.zW)({
                        searchId: t,
                        searchType: r,
                        searchAnalyticsId: s,
                        mode: e
                    }),
                    l(e));
            }),
            F(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                y.Z.setShowBlockedResults(e, !t);
            }),
            F(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, n.jsx)(N.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            F(this, 'renderHeader', () => {
                let {
                    searchId: e,
                    searchMode: t,
                    search: { totalResults: r, isSearching: s, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, n.jsx)(I.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: r,
                    isSearching: s,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            F(this, 'renderIndexing', () => {
                let e = this.props.searchType === M.aib.GUILD ? w.intl.string(w.t.AXPbZm) : w.intl.string(w.t.Q0JJjo);
                return (0, n.jsxs)(W, {
                    children: [
                        (0, n.jsx)(j.Z, {}),
                        (0, n.jsx)('div', {
                            className: (L.emptyResultsText, L.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            F(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? w.intl.string(w.t['VrK/2d']) : w.intl.string(w.t.V6nAfH);
                return (0, n.jsxs)(W, {
                    children: [
                        (0, n.jsx)('div', { className: a()(L.noResultsImage, { [L.alt]: e }) }),
                        (0, n.jsx)('div', {
                            className: a()(L.emptyResultsText, L.noResults, { [L.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            F(this, 'renderError', () =>
                (0, n.jsxs)(W, {
                    children: [
                        (0, n.jsx)('div', { className: L.errorImage }),
                        (0, n.jsx)('div', {
                            className: a()(L.emptyResultsText, L.errorMessage),
                            children: w.intl.string(w.t.uvDZBQ)
                        })
                    ]
                })
            ),
            F(this, 'handleSearchResultClick', (e, t) => {
                let r = g.Z.getChannel(e.channel_id),
                    n = null != r ? r.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: i, totalResults: o } = this.props.search;
                (0, Z.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: n,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: o,
                    limit: M.vpv,
                    page: Math.floor(i / M.vpv) + 1,
                    offset: i,
                    index: t,
                    searchQueryString: D(s),
                    searchQuery: b.Z.getSearchResultsQuery(s)
                });
            }),
            F(this, 'handlePageChange', (e) => {
                let { searchId: t, searchType: r, searchAnalyticsId: n } = this.props;
                ((0, Z.t6)({
                    searchId: t,
                    searchType: r,
                    searchAnalyticsId: n,
                    newPageIndex: e
                }),
                    this.props.onPageChange(e));
            }),
            F(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: r, search: s, searchId: l, renderEmbeds: a } = this.props,
                    { totalResults: i, isSearching: o, isIndexing: c, hasError: u } = s;
                return u
                    ? this.renderError()
                    : c
                      ? this.renderIndexing()
                      : o
                        ? null
                        : i > 0
                          ? (0, n.jsx)(P.Z, {
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
function B(e) {
    let { searchId: t, isFeedbackVisible: r, theme: l, dismissFeedbackEntrypoint: a } = e,
        i = (0, c.cj)([x.Z, b.Z], () => {
            var e, r, n, s, l;
            return {
                isSearching: null != (e = x.Z.getIsFetching(t)) && e,
                isIndexing: null != (r = x.Z.getIsIndexing(t)) && r,
                isHistoricalIndexing: null != (n = x.Z.getIsHistoricalIndexing(t)) && n,
                documentsIndexed: x.Z.getDocumentsIndexed(t),
                offset: null != (s = b.Z.getSearchResultsOffset(t)) ? s : 0,
                totalResults: null != (l = x.Z.getTotalCount(t)) ? l : 0,
                hasError: null != x.Z.getError(t),
                showBlockedResults: b.Z.shouldShowBlockedResults(t),
                showNoResultsAlt: b.Z.shouldShowNoResultsAlt(t)
            };
        }),
        o = (0, R.k)(t),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)),
        { searchResults: h, ignoreCount: d, blockCount: p } = (0, A.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, O.Z)({ searchId: t }),
        S = s.useCallback(
            (e) => {
                m(e);
                let r = D(t),
                    n = b.Z.getSearchResultsQuery(t);
                null != r &&
                    null != n &&
                    T.Z.fetchMessages({
                        searchId: t,
                        queryString: r,
                        searchQuery: n,
                        searchMode: e,
                        offset: 0
                    });
            },
            [t, m]
        ),
        _ = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                let r = D(t),
                    n = b.Z.getSearchResultsQuery(t);
                null != r &&
                    null != n &&
                    T.Z.fetchMessages({
                        searchId: t,
                        queryString: r,
                        searchQuery: n,
                        offset: e * M.vpv
                    });
            },
            [t, i.isSearching]
        ),
        y = s.useDeferredValue(h),
        E = s.useDeferredValue(i);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U, {
                searchId: t,
                search: E,
                searchAnalyticsId: u,
                searchType: o,
                searchResults: y,
                ignoreCount: d,
                blockCount: p,
                renderEmbeds: f.NA.useSetting(),
                developerMode: f.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: a,
                onPageChange: _,
                onSearchModeChange: S,
                searchMode: g
            }),
            (0, n.jsx)(H, {
                searchId: t,
                searchType: o,
                searchAnalyticsId: u,
                searchResults: h,
                searchOffset: i.offset,
                searchLimit: M.vpv,
                searchHasError: i.hasError,
                searchTotalResults: i.totalResults,
                searchIsIndexing: i.isHistoricalIndexing,
                isSearching: i.isSearching
            })
        ]
    });
}
function Q(e) {
    let { theme: t, isFeedbackVisible: r, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: M.aib.DMS }), []),
        i = (0, E.WJ)(a),
        o = (0, c.cj)([x.Z, b.Z], () => {
            var e, t, r, n, s;
            return {
                isSearching: null != (e = x.Z.getIsFetching(i)) && e,
                isIndexing: null != (t = x.Z.getIsIndexing(i)) && t,
                isHistoricalIndexing: null != (r = x.Z.getIsHistoricalIndexing(i)) && r,
                documentsIndexed: x.Z.getDocumentsIndexed(i),
                offset: null != (n = b.Z.getSearchResultsOffset(i)) ? n : 0,
                totalResults: null != (s = x.Z.getTotalCount(i)) ? s : 0,
                hasError: null != x.Z.getError(i),
                showBlockedResults: b.Z.shouldShowBlockedResults(i),
                showNoResultsAlt: b.Z.shouldShowNoResultsAlt(i)
            };
        }),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(i)),
        { searchResults: h, ignoreCount: d, blockCount: p } = (0, A.Z)(i),
        { searchMode: g, setSearchMode: m } = (0, O.Z)({ searchId: i }),
        S = s.useCallback(
            (e) => {
                m(e);
                let t = D(i);
                T.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [a, i, m]
        ),
        _ = s.useCallback(
            (e) => {
                var t;
                T.Z.fetchCrossDMMessages({
                    searchContext: a,
                    queryString: null != (t = D(i)) ? t : '',
                    selectedPageIndex: e,
                    searchMode: g
                });
            },
            [a, i, g]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U, {
                searchId: M.aib.DMS,
                search: o,
                searchAnalyticsId: u,
                searchType: M.aib.DMS,
                searchResults: h,
                ignoreCount: d,
                blockCount: p,
                renderEmbeds: f.NA.useSetting(),
                developerMode: f.Sb.useSetting(),
                theme: t,
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: l,
                onPageChange: _,
                onSearchModeChange: S,
                searchMode: g
            }),
            (0, n.jsx)(H, {
                searchId: M.aib.DMS,
                searchType: M.aib.DMS,
                searchAnalyticsId: u,
                searchResults: h,
                searchOffset: o.offset,
                searchLimit: M.vpv,
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
        r = (0, d.ZP)(),
        l = (0, C.U)({ location: 'SearchResults' }),
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
                        p.Z.possiblyShowFeedbackModal(
                            k.nw.SEARCH_RESULTS,
                            () => o(!0),
                            () => o(!1)
                        ))));
        }, [c, u, t]));
    let h = s.useCallback(() => {
        o(!1);
    }, []);
    return l && t === M.aib.DMS
        ? (0, n.jsx)(Q, {
              theme: r,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: h
          })
        : (0, n.jsx)(B, {
              theme: r,
              searchId: t,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: h
          });
}
