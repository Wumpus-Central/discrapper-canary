(n.d(t, {
    $: () => H,
    Z: () => q
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
    d = n(447543),
    h = n(603263),
    p = n(410030),
    f = n(169223),
    g = n(977885),
    m = n(778877),
    b = n(903488),
    y = n(416638),
    S = n(695346),
    x = n(592125),
    j = n(768119),
    O = n(944486),
    v = n(585483),
    _ = n(72006),
    E = n(965996),
    C = n(652399),
    I = n(970850),
    R = n(861262),
    P = n(251285),
    T = n(406326),
    N = n(994463),
    k = n(611004),
    A = n(619753),
    Z = n(902733),
    w = n(981631),
    F = n(531578),
    L = n(388032),
    M = n(682065);
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
function H(e) {
    let t = null != e ? j.Z.getEditorState(e) : null;
    return null != t ? _.Sq(t) : null;
}
class B extends s.Component {
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
                    i()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && r++);
                        }),
                    0 === n
                        ? (0, C.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: H(t.props.searchId),
                              searchQuery: j.Z.getQuery(t.props.searchId)
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
                              pageNumMessages: n,
                              pageNumLinks: l,
                              pageNumEmbeds: s,
                              pageNumAttachments: r,
                              searchQueryString: H(t.props.searchId),
                              searchQuery: j.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let U = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: M.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: M.emptyResultsContent,
            children: t
        })
    });
};
class G extends s.PureComponent {
    componentDidMount() {
        v.S.subscribe(w.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        v.S.unsubscribe(w.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            className: M.searchResultsWrap,
            'aria-label': L.intl.string(L.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: M.scroller,
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
                e !== O.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            D(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                (h.qt(e), g.Z.clearSearchState(e));
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
                    ((0, C.zW)({
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
                let e = this.props.searchType === w.aib.GUILD ? L.intl.string(L.t.AXPbZm) : L.intl.string(L.t.Q0JJjo);
                return (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)('div', {
                            className: (M.emptyResultsText, M.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? L.intl.string(L.t['VrK/2d']) : L.intl.string(L.t.V6nAfH);
                return (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)('div', { className: a()(M.noResultsImage, { [M.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(M.emptyResultsText, M.noResults, { [M.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)('div', { className: M.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(M.emptyResultsText, M.errorMessage),
                            children: L.intl.string(L.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let n = x.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: o, totalResults: i } = this.props.search;
                (0, C.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: i,
                    limit: w.vpv,
                    page: Math.floor(o / w.vpv) + 1,
                    offset: o,
                    index: t,
                    searchQueryString: H(s),
                    searchQuery: j.Z.getQuery(s)
                });
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n, search: s, searchId: l, renderEmbeds: a, onPageChange: o } = this.props,
                    { totalResults: i, isSearching: c, isIndexing: u, hasError: d } = s;
                return d
                    ? this.renderError()
                    : u
                      ? this.renderIndexing()
                      : c
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
                                onPageChange: o
                            })
                          : this.renderNoResults();
            }));
    }
}
function W(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: a } = e,
        o = (0, c.cj)([j.Z], () => j.Z.getResultsState(t), [t]),
        i = (0, R.k)(t),
        u = (0, c.e7)([j.Z], () => j.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: p, blockCount: f } = (0, P.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, I.Z)({ searchId: t }),
        b = s.useCallback(
            (e) => {
                m(e);
                let n = H(t);
                h.Nz(t, e, n);
            },
            [t, m]
        ),
        y = s.useCallback(
            (e) => {
                if (o.isSearching) return;
                let n = H(t);
                h.oO(t, e, n);
            },
            [t, o.isSearching]
        ),
        x = s.useDeferredValue(d),
        O = s.useDeferredValue(o);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(G, {
                searchId: t,
                search: O,
                searchAnalyticsId: u,
                searchType: i,
                searchResults: x,
                ignoreCount: p,
                blockCount: f,
                renderEmbeds: S.NA.useSetting(),
                developerMode: S.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: a,
                onPageChange: y,
                onSearchModeChange: b,
                searchMode: g
            }),
            (0, r.jsx)(B, {
                searchId: t,
                searchType: i,
                searchAnalyticsId: u,
                searchResults: d,
                searchOffset: o.offset,
                searchLimit: w.vpv,
                searchHasError: o.hasError,
                searchTotalResults: o.totalResults,
                searchIsIndexing: o.isHistoricalIndexing,
                isSearching: o.isSearching
            })
        ]
    });
}
function z(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: w.aib.DMS }), []),
        o = (0, y.WJ)(a),
        i = (0, c.cj)([b.Z, j.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = b.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(o),
                offset: j.Z.getOffset(o),
                totalResults: null != (r = b.Z.getTotalCount(o)) ? r : 0,
                hasError: null != b.Z.getError(o),
                showBlockedResults: j.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: j.Z.shouldShowNoResultsAlt(o)
            };
        }),
        u = (0, c.e7)([b.Z], () => b.Z.getLastSearchAnalyticsId()),
        { searchResults: d, ignoreCount: h, blockCount: p } = (0, P.G)(a),
        { searchMode: f, setSearchMode: g } = (0, I.Z)({ searchId: o }),
        m = s.useCallback(
            (e) => {
                g(e);
                let t = H(o);
                k.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [a, o, g]
        ),
        x = s.useCallback(
            (e) => {
                var t;
                k.Z.fetchCrossDMMessages({
                    searchContext: a,
                    queryString: null != (t = H(o)) ? t : '',
                    selectedPageIndex: e,
                    searchMode: f
                });
            },
            [a, o, f]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(G, {
                searchId: w.aib.DMS,
                search: i,
                searchAnalyticsId: u,
                searchType: w.aib.DMS,
                searchResults: d,
                ignoreCount: h,
                blockCount: p,
                renderEmbeds: S.NA.useSetting(),
                developerMode: S.Sb.useSetting(),
                theme: t,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: l,
                onPageChange: x,
                onSearchModeChange: m,
                searchMode: f
            }),
            (0, r.jsx)(B, {
                searchId: w.aib.DMS,
                searchType: w.aib.DMS,
                searchAnalyticsId: u,
                searchResults: d,
                searchOffset: i.offset,
                searchLimit: w.vpv,
                searchHasError: i.hasError,
                searchTotalResults: i.totalResults,
                searchIsIndexing: i.isHistoricalIndexing,
                isSearching: i.isSearching
            })
        ]
    });
}
function q(e) {
    let { searchId: t } = e,
        n = (0, p.ZP)(),
        l = (0, m.U)({ location: 'SearchResults' }),
        a = s.useRef(null),
        [o, i] = s.useState(!1),
        { enabled: c, force: u } = (0, E.f)({ location: 'SearchResults' });
    (s.useEffect(() => {
        c && u && i(!0);
    }, [u, c]),
        s.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            F.nw.SEARCH_RESULTS,
                            () => i(!0),
                            () => i(!1)
                        ))));
        }, [c, u, t]));
    let d = s.useCallback(() => {
        i(!1);
    }, []);
    return l && t === w.aib.DMS
        ? (0, r.jsx)(z, {
              theme: n,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(W, {
              theme: n,
              searchId: t,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          });
}
