n.d(t, { Z: () => V }), n(388685), n(35282), n(49124);
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
    m = n(977885),
    g = n(778877),
    b = n(903488),
    _ = n(416638),
    y = n(695346),
    x = n(592125),
    C = n(768119),
    v = n(944486),
    j = n(585483),
    O = n(72006),
    E = n(965996),
    I = n(652399),
    S = n(251285),
    P = n(406326),
    Z = n(994463),
    N = n(619753),
    T = n(902733),
    A = n(981631),
    w = n(531578),
    R = n(862825),
    M = n(388032),
    k = n(682065);
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
function L(e) {
    let t = null != e ? C.Z.getEditorState(e) : null;
    return null != t ? O.Sq(t) : null;
}
class U extends i.Component {
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
        super(...e),
            (t = this),
            D(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    l = 0;
                null != t.props.searchResults &&
                    s()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++;
                        }),
                    0 === n
                        ? (0, I.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: L(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
                          })
                        : (0, I.hM)({
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
                              searchQueryString: L(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
                          });
            });
    }
}
let B = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: k.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: k.emptyResultsContent,
            children: t
        })
    });
};
class F extends i.PureComponent {
    componentDidMount() {
        j.S.subscribe(A.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        j.S.unsubscribe(A.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
        let n = C.Z.getQuery(this.props.searchId);
        JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) &&
            this.setState({
                searchQuery: n,
                searchMode: p.Vj({
                    sort_by: null == n ? void 0 : n.sort_by,
                    sort_order: null == n ? void 0 : n.sort_order
                })
            });
    }
    render() {
        let { searchAnalyticsId: e, searchType: t, searchResults: n, searchId: i } = this.props,
            { offset: l, hasError: a, totalResults: o, isHistoricalIndexing: s, isSearching: c } = this.props.search;
        return (0, r.jsxs)('section', {
            className: k.searchResultsWrap,
            'aria-label': M.intl.string(M.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: k.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter(),
                (0, r.jsx)(U, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: A.vpv,
                    searchHasError: a,
                    searchTotalResults: o,
                    searchIsIndexing: s,
                    isSearching: c
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'state', {
                searchMode: A.QIO.NEWEST,
                searchQuery: null
            }),
            D(this, 'scrollerRef', i.createRef()),
            D(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            D(this, 'selectChannel', (e) => {
                e !== v.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            D(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            D(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        searchType: n,
                        search: { isSearching: r },
                        searchAnalyticsId: i
                    } = this.props,
                    { searchMode: l } = this.state;
                if (e !== l && !r) {
                    (0, I.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    });
                    let r = null != t ? C.Z.getEditorState(t) : null,
                        l = null != r ? O.Sq(r) : null;
                    p.Nz(t, e, l), this.setState({ searchMode: e });
                }
            }),
            D(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            D(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, r.jsx)(T.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            D(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: i, documentsIndexed: l } = this.props.search;
                return (0, r.jsx)(P.Z, {
                    searchId: this.props.searchId,
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            D(this, 'renderIndexing', () => {
                let e = C.Z.getSearchType(this.props.searchId) === A.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
                return (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)(Z.Z, {}),
                        (0, r.jsx)('div', {
                            className: (k.emptyResultsText, k.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? M.intl.string(M.t['VrK/2d']) : M.intl.string(M.t.V6nAfH);
                return (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)('div', { className: a()(k.noResultsImage, { [k.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(k.emptyResultsText, k.noResults, { [k.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)('div', { className: k.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(k.emptyResultsText, k.errorMessage),
                            children: M.intl.string(M.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let n = x.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: i, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: o, totalResults: s } = this.props.search;
                (0, I.sL)({
                    searchId: i,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: s,
                    limit: A.vpv,
                    page: Math.floor(o / A.vpv) + 1,
                    offset: o,
                    index: t,
                    searchQueryString: L(i),
                    searchQuery: C.Z.getQuery(i)
                });
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: i, isSearching: l, isIndexing: a, hasError: o } = this.props.search;
                return o
                    ? this.renderError()
                    : a
                      ? this.renderIndexing()
                      : l
                        ? null
                        : i > 0
                          ? (0, r.jsx)(N.Z, {
                                search: this.props.search,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: this.props.searchId,
                                renderEmbeds: this.props.renderEmbeds,
                                scrollTo: this.scrollTo,
                                onPageChange: this.props.onPageChange
                            })
                          : this.renderNoResults();
            });
    }
}
function G(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: a } = e,
        o = (0, c.cj)([C.Z], () => C.Z.getResultsState(t), [t]),
        { searchAnalyticsId: s, searchType: u } = (0, c.cj)(
            [C.Z],
            () => ({
                searchAnalyticsId: C.Z.getAnalyticsId(t),
                searchType: C.Z.getSearchType()
            }),
            [t]
        ),
        d = i.useCallback(
            (e) => {
                if (o.isSearching) return;
                let n = null != t ? C.Z.getEditorState(t) : null,
                    r = null != n ? O.Sq(n) : null;
                p.oO(t, e, r);
            },
            [t, o.isSearching]
        ),
        { searchResults: h, ignoreCount: f, blockCount: m } = (0, S.Z)(t);
    return (0, r.jsx)(F, {
        searchId: t,
        search: o,
        searchAnalyticsId: s,
        searchType: u,
        searchResults: h,
        ignoreCount: f,
        blockCount: m,
        renderEmbeds: y.NA.useSetting(),
        developerMode: y.Sb.useSetting(),
        theme: l,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: a,
        onPageChange: d
    });
}
function H(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = i.useMemo(() => ({ type: A.aib.DMS }), []),
        o = (0, _.WJ)(a),
        s = (0, c.e7)([C.Z], () => C.Z.getSearchResultsQueryString(o)),
        u = (0, _.jj)(a, R.sR.MESSAGES, s),
        [d, h] = i.useState(0),
        f = (0, c.cj)([b.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = b.Z.getIsFetching(u)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(u)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(u)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(u),
                offset: d * A.vpv,
                totalResults: null != (r = b.Z.getTotalCount(u)) ? r : 0,
                hasError: null != b.Z.getError(u),
                showBlockedResults: !1,
                showNoResultsAlt: b.Z.getShowNoResultsAlt(u)
            };
        }),
        g = (0, c.e7)([b.Z], () => b.Z.getLastSearchAnalyticsId()),
        x = i.useCallback(
            (e) => {
                var t;
                h(e),
                    m.Z.clearSearch(),
                    m.Z.fetchMessages({
                        searchContext: a,
                        searchTabs: [R.sR.MESSAGES],
                        searchQueryString: null != (t = L(o)) ? t : '',
                        getLimit: () => A.vpv,
                        onFetchStart: (e) => {
                            let { searchContext: t, searchQueryString: n, searchQuery: r } = e,
                                i = (0, _.WJ)(t);
                            p.Vs(i, n, r);
                        },
                        pagination: { offset: e * A.vpv },
                        trackExactTotalHits: !1
                    });
            },
            [a, o]
        ),
        { searchResults: v, ignoreCount: j, blockCount: O } = (0, S.G)(a);
    return (0, r.jsx)(F, {
        searchId: A.aib.DMS,
        search: f,
        searchAnalyticsId: g,
        searchType: A.aib.DMS,
        searchResults: v,
        ignoreCount: j,
        blockCount: O,
        renderEmbeds: y.NA.useSetting(),
        developerMode: y.Sb.useSetting(),
        theme: t,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l,
        onPageChange: x
    });
}
function V(e) {
    let { searchId: t } = e,
        n = (0, h.ZP)(),
        l = (0, g.U)({ location: 'SearchResults' }),
        a = i.useRef(null),
        [o, s] = i.useState(!1),
        { enabled: c, force: u } = (0, E.f)({ location: 'SearchResults' });
    i.useEffect(() => {
        c && u && s(!0);
    }, [u, c]),
        i.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            w.nw.SEARCH_RESULTS,
                            () => s(!0),
                            () => s(!1)
                        ))));
        }, [c, u, t]);
    let d = i.useCallback(() => {
        s(!1);
    }, []);
    return l && t === A.aib.DMS
        ? (0, r.jsx)(H, {
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
