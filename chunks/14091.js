(r.d(t, {
    $: () => F,
    Z: () => Q
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
    _ = r(585483),
    y = r(72006),
    S = r(748610),
    x = r(171900),
    b = r(518944),
    v = r(607802),
    C = r(945577),
    j = r(759209),
    E = r(970850),
    O = r(406326),
    R = r(994463),
    I = r(611004),
    P = r(619753),
    T = r(902733),
    N = r(165017),
    A = r(737),
    k = r(315322),
    M = r(981631),
    Z = r(531578),
    w = r(388032),
    D = r(682065);
function L(e, t, r) {
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
    return null != t ? y.Sq(t) : null;
}
class W extends s.Component {
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
            L(this, 'autoAnalytics', function () {
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
                        ? (0, k.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: F(t.props.searchId),
                              searchQuery: null != t.props.searchId ? b.Z.getSearchResultsQuery(t.props.searchId) : null
                          })
                        : (0, k.hM)({
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
let H = (e) => {
    let { children: t } = e;
    return (0, n.jsx)('div', {
        className: D.emptyResultsWrap,
        children: (0, n.jsx)('div', {
            className: D.emptyResultsContent,
            children: t
        })
    });
};
class B extends s.PureComponent {
    componentDidMount() {
        _.S.subscribe(M.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        _.S.unsubscribe(M.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            className: D.searchResultsWrap,
            'aria-label': w.intl.string(w.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, n.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: D.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            L(this, 'scrollerRef', s.createRef()),
            L(this, 'scrollTo', (e, t, r) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                let s = n.getScrollerState().scrollTop - e;
                n.scrollTo({
                    to: s,
                    animate: t,
                    callback: r
                });
            }),
            L(this, 'selectChannel', (e) => {
                e !== m.Z.getChannelId() && h.ZP.transitionToInviteChannelSync(e);
            }),
            L(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                I.Z.cleanUpSearchState(e);
            }),
            L(this, 'handleSearchModeChange', (e) => {
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
                    ((0, k.zW)({
                        searchId: t,
                        searchType: r,
                        searchAnalyticsId: s,
                        mode: e
                    }),
                    l(e));
            }),
            L(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                S.Z.setShowBlockedResults(e, !t);
            }),
            L(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, n.jsx)(T.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            L(this, 'renderHeader', () => {
                let {
                    searchId: e,
                    searchMode: t,
                    search: { totalResults: r, isSearching: s, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, n.jsx)(O.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: r,
                    isSearching: s,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            L(this, 'renderIndexing', () => {
                let e = this.props.searchType === M.aib.GUILD ? w.intl.string(w.t.AXPbZm) : w.intl.string(w.t.Q0JJjo);
                return (0, n.jsxs)(H, {
                    children: [
                        (0, n.jsx)(R.Z, {}),
                        (0, n.jsx)('div', {
                            className: (D.emptyResultsText, D.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            L(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? w.intl.string(w.t['VrK/2d']) : w.intl.string(w.t.V6nAfH);
                return (0, n.jsxs)(H, {
                    children: [
                        (0, n.jsx)('div', { className: a()(D.noResultsImage, { [D.alt]: e }) }),
                        (0, n.jsx)('div', {
                            className: a()(D.emptyResultsText, D.noResults, { [D.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            L(this, 'renderError', () =>
                (0, n.jsxs)(H, {
                    children: [
                        (0, n.jsx)('div', { className: D.errorImage }),
                        (0, n.jsx)('div', {
                            className: a()(D.emptyResultsText, D.errorMessage),
                            children: w.intl.string(w.t.uvDZBQ)
                        })
                    ]
                })
            ),
            L(this, 'handleSearchResultClick', (e, t) => {
                let r = g.Z.getChannel(e.channel_id),
                    n = null != r ? r.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: i, totalResults: o } = this.props.search;
                (0, k.sL)({
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
                    searchQueryString: F(s),
                    searchQuery: b.Z.getSearchResultsQuery(s)
                });
            }),
            L(this, 'handlePageChange', (e) => {
                let { searchId: t, searchType: r, searchAnalyticsId: n } = this.props;
                ((0, k.t6)({
                    searchId: t,
                    searchType: r,
                    searchAnalyticsId: n,
                    newPageIndex: e
                }),
                    this.props.onPageChange(e));
            }),
            L(this, 'renderContent', () => {
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
function U(e) {
    let { searchContext: t } = e,
        r = (0, d.ZP)(),
        l = (0, C.U)({ location: 'SearchResults' }),
        { isFeedbackVisible: a, dismissFeedbackEntrypoint: i } = (function (e) {
            let t = s.useRef(e),
                [r, n] = s.useState(!1),
                { enabled: l, force: a } = (0, j.f)({ location: 'SearchResults' });
            return (
                s.useEffect(() => {
                    l && a && n(!0);
                }, [a, l]),
                s.useEffect(() => {
                    l &&
                        (a ||
                            (e !== t.current &&
                                ((t.current = e),
                                p.Z.possiblyShowFeedbackModal(
                                    Z.nw.SEARCH_RESULTS,
                                    () => n(!0),
                                    () => n(!1)
                                ))));
                }, [l, a, e]),
                {
                    dismissFeedbackEntrypoint: s.useCallback(() => {
                        n(!1);
                    }, []),
                    isFeedbackVisible: r
                }
            );
        })(t),
        o = (0, v.WJ)(t),
        u = (0, c.cj)([x.Z, b.Z], () => {
            var e, t, r, n, s;
            return {
                isSearching: null != (e = x.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = x.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (r = x.Z.getIsHistoricalIndexing(o)) && r,
                documentsIndexed: x.Z.getDocumentsIndexed(o),
                offset: null != (n = b.Z.getSearchResultsOffset(o)) ? n : 0,
                totalResults: null != (s = x.Z.getTotalCount(o)) ? s : 0,
                hasError: null != x.Z.getError(o),
                showBlockedResults: b.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: b.Z.shouldShowNoResultsAlt(o)
            };
        }),
        h = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(o)),
        { searchResults: g, ignoreCount: m, blockCount: _ } = (0, A.Z)(o),
        { searchMode: y, setSearchMode: S } = (0, E.Z)({ searchId: o }),
        O = s.useCallback(
            (e) => {
                if (u.isSearching) return;
                S(e);
                let r = F(o),
                    n = b.Z.getSearchResultsQuery(o);
                null != r &&
                    null != n &&
                    (l && t.type === M.aib.DMS
                        ? I.Z.fetchCrossDMMessages({
                              searchContext: t,
                              selectedPageIndex: 0,
                              queryString: null != r ? r : '',
                              searchMode: e
                          })
                        : I.Z.fetchMessages({
                              searchId: o,
                              queryString: r,
                              searchQuery: n,
                              searchMode: e,
                              offset: 0
                          }));
            },
            [l, u.isSearching, t, o, S]
        ),
        R = s.useCallback(
            (e) => {
                if (u.isSearching) return;
                let r = F(o),
                    n = b.Z.getSearchResultsQuery(o);
                if (null != r && null != n)
                    if (l && t.type === M.aib.DMS) {
                        var s;
                        I.Z.fetchCrossDMMessages({
                            searchContext: t,
                            queryString: null != (s = F(o)) ? s : '',
                            selectedPageIndex: e,
                            searchMode: y
                        });
                    } else
                        I.Z.fetchMessages({
                            searchId: o,
                            queryString: r,
                            searchQuery: n,
                            offset: e * M.vpv
                        });
            },
            [l, u.isSearching, t, o, y]
        ),
        P = s.useDeferredValue(g),
        T = s.useDeferredValue(u),
        N = s.useDeferredValue(h);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(B, {
                searchId: o,
                search: T,
                searchAnalyticsId: N,
                searchType: t.type,
                searchResults: P,
                ignoreCount: m,
                blockCount: _,
                renderEmbeds: f.NA.useSetting(),
                developerMode: f.Sb.useSetting(),
                theme: r,
                isFeedbackVisible: a,
                dismissFeedbackEntrypoint: i,
                onPageChange: R,
                onSearchModeChange: O,
                searchMode: y
            }),
            (0, n.jsx)(W, {
                searchId: o,
                searchType: t.type,
                searchAnalyticsId: N,
                searchResults: P,
                searchOffset: T.offset,
                searchLimit: M.vpv,
                searchHasError: T.hasError,
                searchTotalResults: T.totalResults,
                searchIsIndexing: T.isHistoricalIndexing,
                isSearching: T.isSearching
            })
        ]
    });
}
function Q(e) {
    let { guildId: t, channelId: r } = e,
        s = (0, N.H)({
            guildId: t,
            channelId: r
        });
    return null == s ? null : (0, n.jsx)(U, { searchContext: s });
}
