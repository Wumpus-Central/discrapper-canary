n.d(t, { Z: () => H }), n(388685), n(35282), n(49124);
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
    j = n(72006),
    O = n(965996),
    E = n(652399),
    I = n(251285),
    P = n(406326),
    S = n(994463),
    Z = n(619753),
    N = n(902733),
    T = n(981631),
    A = n(531578),
    w = n(862825),
    R = n(388032),
    M = n(682065);
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
function L(e) {
    let t = null != e ? C.Z.getEditorState(e) : null;
    return null != t ? j.Sq(t) : null;
}
class D extends i.Component {
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
            k(this, 'autoAnalytics', function () {
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
                        ? (0, E.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: L(t.props.searchId),
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
                              searchQueryString: L(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
                          });
            });
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
class B extends i.PureComponent {
    componentDidMount() {
        v.S.subscribe(T.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        v.S.unsubscribe(T.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            className: M.searchResultsWrap,
            'aria-label': R.intl.string(R.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: M.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter(),
                (0, r.jsx)(D, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: T.vpv,
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
            k(this, 'state', {
                searchMode: T.QIO.NEWEST,
                searchQuery: null
            }),
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
            k(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                if (!t) {
                    let t = L(e);
                    p.jn(e, T.vpv, t);
                }
            }),
            k(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                if (!t) {
                    let t = L(e);
                    p.m$(e, T.vpv, t);
                }
            }),
            k(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            k(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        searchType: n,
                        search: { isSearching: r },
                        searchAnalyticsId: i
                    } = this.props,
                    { searchMode: l } = this.state;
                if (e !== l && !r) {
                    (0, E.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    });
                    let r = null != t ? C.Z.getEditorState(t) : null,
                        l = null != r ? j.Sq(r) : null;
                    p.Nz(t, e, l), this.setState({ searchMode: e });
                }
            }),
            k(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            k(this, 'renderFooter', () => (this.props.isFeedbackVisible ? (0, r.jsx)(N.Z, { dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint }) : null)),
            k(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: i, documentsIndexed: l } = this.props.search;
                return (0, r.jsx)(P.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            k(this, 'renderIndexing', () => {
                let e = C.Z.getSearchType(this.props.searchId) === T.aib.GUILD ? R.intl.string(R.t.AXPbZm) : R.intl.string(R.t.Q0JJjo);
                return (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)(S.Z, {}),
                        (0, r.jsx)('div', {
                            className: (M.emptyResultsText, M.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            k(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? R.intl.string(R.t['VrK/2d']) : R.intl.string(R.t.V6nAfH);
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
            k(this, 'renderError', () =>
                (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)('div', { className: M.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(M.emptyResultsText, M.errorMessage),
                            children: R.intl.string(R.t.uvDZBQ)
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
                    limit: T.vpv,
                    page: Math.floor(o / T.vpv) + 1,
                    offset: o,
                    index: t,
                    searchQueryString: L(i),
                    searchQuery: C.Z.getQuery(i)
                });
            }),
            k(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: i, isSearching: l, isIndexing: a, hasError: o } = this.props.search;
                return o
                    ? this.renderError()
                    : a
                      ? this.renderIndexing()
                      : l
                        ? null
                        : i > 0
                          ? (0, r.jsx)(Z.Z, {
                                search: this.props.search,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: this.props.searchId,
                                renderEmbeds: this.props.renderEmbeds,
                                scrollTo: this.scrollTo
                            })
                          : this.renderNoResults();
            });
    }
}
function F(e) {
    let { searchId: t, isFeedbackVisible: n, theme: i, dismissFeedbackEntrypoint: l } = e,
        a = (0, c.cj)([C.Z], () => C.Z.getResultsState(t), [t]),
        { searchAnalyticsId: o, searchType: s } = (0, c.cj)(
            [C.Z],
            () => ({
                searchAnalyticsId: C.Z.getAnalyticsId(t),
                searchType: C.Z.getSearchType()
            }),
            [t]
        ),
        { searchResults: u, ignoreCount: d, blockCount: p } = (0, I.Z)(t);
    return (0, r.jsx)(B, {
        searchId: t,
        search: a,
        searchAnalyticsId: o,
        searchType: s,
        searchResults: u,
        ignoreCount: d,
        blockCount: p,
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        theme: i,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l
    });
}
function G(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = i.useMemo(() => ({ type: T.aib.DMS }), []),
        o = (0, b.WJ)(a),
        s = (0, c.e7)([C.Z], () => C.Z.getSearchResultsQueryString(o)),
        u = (0, b.jj)(a, w.sR.MESSAGES, s),
        d = (0, c.cj)([g.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = g.Z.getIsFetching(u)) && e,
                isIndexing: null != (t = g.Z.getIsIndexing(u)) && t,
                isHistoricalIndexing: null != (n = g.Z.getIsHistoricalIndexing(u)) && n,
                documentsIndexed: g.Z.getDocumentsIndexed(u),
                offset: 0,
                totalResults: null != (r = g.Z.getTotalCount(u)) ? r : 0,
                hasError: null != g.Z.getError(u),
                showBlockedResults: !1,
                showNoResultsAlt: g.Z.getShowNoResultsAlt(u)
            };
        }),
        p = (0, c.e7)([g.Z], () => g.Z.getLastSearchAnalyticsId()),
        { searchResults: h, ignoreCount: f, blockCount: m } = (0, I.G)(a);
    return (0, r.jsx)(B, {
        searchId: T.aib.DMS,
        search: d,
        searchAnalyticsId: p,
        searchType: T.aib.DMS,
        searchResults: h,
        ignoreCount: f,
        blockCount: m,
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        theme: t,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l
    });
}
function H(e) {
    let { searchId: t } = e,
        n = (0, h.ZP)(),
        l = (0, m.U)({ location: 'SearchResults' }),
        a = i.useRef(null),
        [o, s] = i.useState(!1),
        { enabled: c, force: u } = (0, O.f)({ location: 'SearchResults' });
    i.useEffect(() => {
        c && u && s(!0);
    }, [u, c]),
        i.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            A.nw.SEARCH_RESULTS,
                            () => s(!0),
                            () => s(!1)
                        ))));
        }, [c, u, t]);
    let d = i.useCallback(() => {
        s(!1);
    }, []);
    return l && t === T.aib.DMS
        ? (0, r.jsx)(G, {
              theme: n,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(F, {
              theme: n,
              searchId: t,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          });
}
