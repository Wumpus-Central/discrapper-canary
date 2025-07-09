(n.d(t, { Z: () => z }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    p = n(603263),
    h = n(410030),
    f = n(169223),
    m = n(778877),
    g = n(903488),
    b = n(416638),
    _ = n(695346),
    y = n(592125),
    C = n(768119),
    x = n(944486),
    v = n(585483),
    O = n(72006),
    j = n(965996),
    E = n(652399),
    S = n(970850),
    I = n(861262),
    P = n(251285),
    Z = n(406326),
    N = n(994463),
    T = n(611004),
    A = n(619753),
    w = n(902733),
    R = n(981631),
    M = n(531578),
    D = n(388032),
    L = n(682065);
function k(e, t, n) {
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
function U(e) {
    let t = null != e ? C.Z.getEditorState(e) : null;
    return null != t ? O.Sq(t) : null;
}
class B extends i.Component {
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
            k(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    s()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++);
                        }),
                    0 === n
                        ? (0, E.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: U(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
                          })
                        : (0, E.hM)({
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
                              pageNumEmbeds: i,
                              pageNumAttachments: r,
                              searchQueryString: U(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let F = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: L.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: L.emptyResultsContent,
            children: t
        })
    });
};
class H extends i.PureComponent {
    componentDidMount() {
        v.S.subscribe(R.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        v.S.unsubscribe(R.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
        let { searchAnalyticsId: e, searchType: t, searchResults: n, searchId: i } = this.props,
            { offset: l, hasError: a, totalResults: o, isHistoricalIndexing: s, isSearching: c } = this.props.search;
        return (0, r.jsxs)('section', {
            className: L.searchResultsWrap,
            'aria-label': D.intl.string(D.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: L.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter(),
                (0, r.jsx)(B, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: R.vpv,
                    searchHasError: a,
                    searchTotalResults: o,
                    searchIsIndexing: s,
                    isSearching: c
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            k(this, 'scrollerRef', i.createRef()),
            k(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            k(this, 'selectChannel', (e) => {
                e !== x.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            k(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            k(this, 'handleSearchModeChange', (e) => {
                let {
                    searchId: t,
                    searchType: n,
                    search: { isSearching: r },
                    searchAnalyticsId: i,
                    onSearchModeChange: l,
                    searchMode: a
                } = this.props;
                e === a ||
                    r ||
                    ((0, E.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    }),
                    l(e));
            }),
            k(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            k(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, r.jsx)(w.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            k(this, 'renderHeader', () => {
                let {
                    searchId: e,
                    searchMode: t,
                    search: { totalResults: n, isSearching: i, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, r.jsx)(Z.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: n,
                    isSearching: i,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            k(this, 'renderIndexing', () => {
                let e = this.props.searchType === R.aib.GUILD ? D.intl.string(D.t.AXPbZm) : D.intl.string(D.t.Q0JJjo);
                return (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)('div', {
                            className: (L.emptyResultsText, L.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            k(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? D.intl.string(D.t['VrK/2d']) : D.intl.string(D.t.V6nAfH);
                return (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)('div', { className: a()(L.noResultsImage, { [L.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(L.emptyResultsText, L.noResults, { [L.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            k(this, 'renderError', () =>
                (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)('div', { className: L.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(L.emptyResultsText, L.errorMessage),
                            children: D.intl.string(D.t.uvDZBQ)
                        })
                    ]
                })
            ),
            k(this, 'handleSearchResultClick', (e, t) => {
                let n = y.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: i, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: o, totalResults: s } = this.props.search;
                (0, E.sL)({
                    searchId: i,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: s,
                    limit: R.vpv,
                    page: Math.floor(o / R.vpv) + 1,
                    offset: o,
                    index: t,
                    searchQueryString: U(i),
                    searchQuery: C.Z.getQuery(i)
                });
            }),
            k(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n, search: i, searchId: l, renderEmbeds: a, onPageChange: o } = this.props,
                    { totalResults: s, isSearching: c, isIndexing: u, hasError: d } = i;
                return d
                    ? this.renderError()
                    : u
                      ? this.renderIndexing()
                      : c
                        ? null
                        : s > 0
                          ? (0, r.jsx)(A.Z, {
                                search: i,
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
function G(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: a } = e,
        o = (0, c.cj)([C.Z], () => C.Z.getResultsState(t), [t]),
        s = (0, I.k)(t),
        u = (0, c.e7)([C.Z], () => C.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: h, blockCount: f } = (0, P.Z)(t),
        { searchMode: m, setSearchMode: g } = (0, S.Z)({ searchId: t }),
        b = i.useCallback(
            (e) => {
                g(e);
                let n = U(t);
                p.Nz(t, e, n);
            },
            [t, g]
        ),
        y = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let n = U(t);
                p.oO(t, e, n);
            },
            [t, o.isSearching]
        );
    return (0, r.jsx)(H, {
        searchId: t,
        search: o,
        searchAnalyticsId: u,
        searchType: s,
        searchResults: d,
        ignoreCount: h,
        blockCount: f,
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        theme: l,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: a,
        onPageChange: y,
        onSearchModeChange: b,
        searchMode: m
    });
}
function V(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = i.useMemo(() => ({ type: R.aib.DMS }), []),
        o = (0, b.WJ)(a),
        s = (0, c.e7)([C.Z], () => C.Z.getSearchResultsQueryString(o)),
        [u, d] = i.useState(0);
    i.useEffect(() => {
        d(0);
    }, [s]);
    let p = (0, c.cj)([g.Z, C.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = g.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = g.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = g.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: g.Z.getDocumentsIndexed(o),
                offset: u * R.vpv,
                totalResults: null != (r = g.Z.getTotalCount(o)) ? r : 0,
                hasError: null != g.Z.getError(o),
                showBlockedResults: C.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: C.Z.shouldShowNoResultsAlt(o)
            };
        }),
        h = (0, c.e7)([g.Z], () => g.Z.getLastSearchAnalyticsId()),
        { searchResults: f, ignoreCount: m, blockCount: y } = (0, P.G)(a),
        { searchMode: x, setSearchMode: v } = (0, S.Z)({ searchId: o }),
        O = i.useCallback(
            (e) => {
                v(e);
                let t = U(o);
                T.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [a, o, v]
        ),
        j = i.useCallback(
            (e) => {
                var t;
                (d(e),
                    T.Z.fetchCrossDMMessages({
                        searchContext: a,
                        queryString: null != (t = U(o)) ? t : '',
                        selectedPageIndex: e,
                        searchMode: x
                    }));
            },
            [a, o, x]
        );
    return (0, r.jsx)(H, {
        searchId: R.aib.DMS,
        search: p,
        searchAnalyticsId: h,
        searchType: R.aib.DMS,
        searchResults: f,
        ignoreCount: m,
        blockCount: y,
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        theme: t,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l,
        onPageChange: j,
        onSearchModeChange: O,
        searchMode: x
    });
}
function z(e) {
    let { searchId: t } = e,
        n = (0, h.ZP)(),
        l = (0, m.U)({ location: 'SearchResults' }),
        a = i.useRef(null),
        [o, s] = i.useState(!1),
        { enabled: c, force: u } = (0, j.f)({ location: 'SearchResults' });
    (i.useEffect(() => {
        c && u && s(!0);
    }, [u, c]),
        i.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            M.nw.SEARCH_RESULTS,
                            () => s(!0),
                            () => s(!1)
                        ))));
        }, [c, u, t]));
    let d = i.useCallback(() => {
        s(!1);
    }, []);
    return l && t === R.aib.DMS
        ? (0, r.jsx)(V, {
              theme: n,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(G, {
              theme: n,
              searchId: t,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          });
}
