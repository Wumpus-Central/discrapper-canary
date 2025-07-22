(n.d(t, {
    $: () => F,
    Z: () => q
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
    d = n(447543),
    h = n(603263),
    p = n(410030),
    f = n(169223),
    g = n(778877),
    m = n(903488),
    _ = n(416638),
    S = n(695346),
    y = n(592125),
    b = n(768119),
    x = n(944486),
    E = n(585483),
    C = n(72006),
    v = n(965996),
    O = n(652399),
    I = n(970850),
    j = n(861262),
    R = n(251285),
    T = n(406326),
    P = n(994463),
    N = n(611004),
    A = n(619753),
    Z = n(902733),
    k = n(981631),
    M = n(531578),
    L = n(388032),
    w = n(682065);
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
function F(e) {
    let t = null != e ? b.Z.getEditorState(e) : null;
    return null != t ? C.Sq(t) : null;
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
                        ? (0, O.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: F(t.props.searchId),
                              searchQuery: b.Z.getQuery(t.props.searchId)
                          })
                        : (0, O.hM)({
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
                              searchQueryString: F(t.props.searchId),
                              searchQuery: b.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let B = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: w.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: w.emptyResultsContent,
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
        return (0, r.jsxs)('section', {
            className: w.searchResultsWrap,
            'aria-label': L.intl.string(L.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: w.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            D(this, 'scrollerRef', s.createRef()),
            D(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let s = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: s,
                    animate: t,
                    callback: n
                });
            }),
            D(this, 'selectChannel', (e) => {
                e !== x.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            D(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                N.Z.cleanUpSearchState(e);
            }),
            D(this, 'handleSearchModeChange', (e) => {
                let {
                    searchId: t,
                    searchType: n,
                    search: { isSearching: r },
                    searchAnalyticsId: s,
                    onSearchModeChange: l,
                    searchMode: a
                } = this.props;
                e === a ||
                    r ||
                    ((0, O.zW)({
                        searchId: t,
                        searchType: n,
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
                h.QY(e, !t);
            }),
            D(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, r.jsx)(Z.Z, {
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
                    search: { totalResults: n, isSearching: s, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, r.jsx)(T.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: n,
                    isSearching: s,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            D(this, 'renderIndexing', () => {
                let e = this.props.searchType === k.aib.GUILD ? L.intl.string(L.t.AXPbZm) : L.intl.string(L.t.Q0JJjo);
                return (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)(P.Z, {}),
                        (0, r.jsx)('div', {
                            className: (w.emptyResultsText, w.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? L.intl.string(L.t['VrK/2d']) : L.intl.string(L.t.V6nAfH);
                return (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)('div', { className: a()(w.noResultsImage, { [w.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(w.emptyResultsText, w.noResults, { [w.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)('div', { className: w.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(w.emptyResultsText, w.errorMessage),
                            children: L.intl.string(L.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let n = y.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: i, totalResults: o } = this.props.search;
                (0, O.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: o,
                    limit: k.vpv,
                    page: Math.floor(i / k.vpv) + 1,
                    offset: i,
                    index: t,
                    searchQueryString: F(s),
                    searchQuery: b.Z.getQuery(s)
                });
            }),
            D(this, 'handlePageChange', (e) => {
                let { searchId: t, searchType: n, searchAnalyticsId: r } = this.props;
                ((0, O.t6)({
                    searchId: t,
                    searchType: n,
                    searchAnalyticsId: r,
                    newPageIndex: e
                }),
                    this.props.onPageChange(e));
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n, search: s, searchId: l, renderEmbeds: a } = this.props,
                    { totalResults: i, isSearching: o, isIndexing: c, hasError: u } = s;
                return u
                    ? this.renderError()
                    : c
                      ? this.renderIndexing()
                      : o
                        ? null
                        : i > 0
                          ? (0, r.jsx)(A.Z, {
                                search: s,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
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
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: a } = e,
        i = (0, c.cj)([b.Z], () => b.Z.getResultsState(t), [t]),
        o = (0, j.k)(t),
        u = (0, c.e7)([b.Z], () => b.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: p, blockCount: f } = (0, R.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, I.Z)({ searchId: t }),
        _ = s.useCallback(
            (e) => {
                m(e);
                let n = F(t);
                h.Nz(t, e, n);
            },
            [t, m]
        ),
        y = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                let n = F(t);
                h.oO(t, e, n);
            },
            [t, i.isSearching]
        ),
        x = s.useDeferredValue(d),
        E = s.useDeferredValue(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U, {
                searchId: t,
                search: E,
                searchAnalyticsId: u,
                searchType: o,
                searchResults: x,
                ignoreCount: p,
                blockCount: f,
                renderEmbeds: S.NA.useSetting(),
                developerMode: S.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: a,
                onPageChange: y,
                onSearchModeChange: _,
                searchMode: g
            }),
            (0, r.jsx)(H, {
                searchId: t,
                searchType: o,
                searchAnalyticsId: u,
                searchResults: d,
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
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: k.aib.DMS }), []),
        i = (0, _.WJ)(a),
        o = (0, c.cj)([m.Z, b.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = m.Z.getIsFetching(i)) && e,
                isIndexing: null != (t = m.Z.getIsIndexing(i)) && t,
                isHistoricalIndexing: null != (n = m.Z.getIsHistoricalIndexing(i)) && n,
                documentsIndexed: m.Z.getDocumentsIndexed(i),
                offset: b.Z.getOffset(i),
                totalResults: null != (r = m.Z.getTotalCount(i)) ? r : 0,
                hasError: null != m.Z.getError(i),
                showBlockedResults: b.Z.shouldShowBlockedResults(i),
                showNoResultsAlt: b.Z.shouldShowNoResultsAlt(i)
            };
        }),
        u = (0, c.e7)([m.Z], () => m.Z.getLastSearchAnalyticsId()),
        { searchResults: d, ignoreCount: h, blockCount: p } = (0, R.G)(a),
        { searchMode: f, setSearchMode: g } = (0, I.Z)({ searchId: i }),
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U, {
                searchId: k.aib.DMS,
                search: o,
                searchAnalyticsId: u,
                searchType: k.aib.DMS,
                searchResults: d,
                ignoreCount: h,
                blockCount: p,
                renderEmbeds: S.NA.useSetting(),
                developerMode: S.Sb.useSetting(),
                theme: t,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: l,
                onPageChange: x,
                onSearchModeChange: y,
                searchMode: f
            }),
            (0, r.jsx)(H, {
                searchId: k.aib.DMS,
                searchType: k.aib.DMS,
                searchAnalyticsId: u,
                searchResults: d,
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
        n = (0, p.ZP)(),
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
                            M.nw.SEARCH_RESULTS,
                            () => o(!0),
                            () => o(!1)
                        ))));
        }, [c, u, t]));
    let d = s.useCallback(() => {
        o(!1);
    }, []);
    return l && t === k.aib.DMS
        ? (0, r.jsx)(G, {
              theme: n,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(W, {
              theme: n,
              searchId: t,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: d
          });
}
