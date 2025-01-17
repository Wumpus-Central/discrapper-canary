n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(447543),
    h = n(603263),
    p = n(367907),
    m = n(210887),
    f = n(695346),
    g = n(768119),
    C = n(944486),
    x = n(585483),
    v = n(251285),
    _ = n(406326),
    I = n(994463),
    E = n(619753),
    b = n(981631),
    Z = n(388032),
    S = n(893665);
function N(e, t, n) {
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
class T extends l.Component {
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
            N(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId) return;
                let n = 0,
                    i = 0,
                    l = 0,
                    r = 0;
                null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && r++), null != e.embeds && e.embeds.length > 0 && l++, null != e.attachments && e.attachments.length > 0 && i++;
                        }),
                    p.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_VIEWED, {
                        search_type: t.props.searchType,
                        search_id: t.props.searchAnalyticsId,
                        prev_search_id: e !== t.props.searchAnalyticsId ? e : null,
                        is_error: t.props.searchHasError,
                        limit: t.props.searchLimit,
                        offset: t.props.searchOffset,
                        page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                        total_results: t.props.searchTotalResults,
                        page_results: null != t.props.searchResults ? t.props.searchResults.length : null,
                        is_indexing: t.props.searchIsIndexing,
                        page_num_messages: n,
                        page_num_links: r,
                        page_num_embeds: l,
                        page_num_attach: i
                    });
            });
    }
}
let j = (e) => {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: S.emptyResultsWrap,
        children: (0, i.jsx)('div', {
            className: S.emptyResultsContent,
            children: t
        })
    });
};
class A extends l.PureComponent {
    componentDidMount() {
        x.S.subscribe(b.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        x.S.unsubscribe(b.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
        let n = g.Z.getQuery(this.props.searchId);
        JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) &&
            this.setState({
                searchQuery: n,
                searchMode:
                    (null == n ? void 0 : n.sort_by) != null && null != n.sort_order
                        ? h.Vj({
                              sort_by: n.sort_by,
                              sort_order: n.sort_order
                          })
                        : b.QIO.NEWEST
            });
    }
    render() {
        let { searchAnalyticsId: e, searchType: t, searchResults: n } = this.props,
            { offset: l, hasError: r, totalResults: a, isHistoricalIndexing: s } = this.props.search;
        return (0, i.jsxs)('section', {
            className: S.searchResultsWrap,
            'aria-label': Z.intl.string(Z.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, i.jsx)(d.AdvancedScroller, {
                    ref: this.scrollerRef,
                    className: S.scroller,
                    children: this.renderContent()
                }),
                (0, i.jsx)(T, {
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: b.vpv,
                    searchHasError: r,
                    searchTotalResults: a,
                    searchIsIndexing: s
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                searchMode: b.QIO.NEWEST,
                searchQuery: null
            }),
            N(this, 'scrollerRef', l.createRef()),
            N(this, 'scrollTo', (e, t, n) => {
                let i = this.scrollerRef.current;
                if (null == i) return;
                let l = i.getScrollerState().scrollTop - e;
                i.scrollTo({
                    to: l,
                    animate: t,
                    callback: n
                });
            }),
            N(this, 'selectChannel', (e) => {
                e !== C.Z.getChannelId() && u.Z.transitionToInviteChannelSync(e);
            }),
            N(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                !t && h.jn(e);
            }),
            N(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                !t && h.m$(e);
            }),
            N(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                h.qt(e);
            }),
            N(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        search: { isSearching: n }
                    } = this.props,
                    { searchMode: i } = this.state;
                e !== i &&
                    !n &&
                    (p.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_SORT_CHANGED, {
                        search_id: g.Z.getAnalyticsId(t),
                        new_sort_type: e
                    }),
                    h.Nz(t, e),
                    this.setState({ searchMode: e }));
            }),
            N(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                h.QY(e, !t);
            }),
            N(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: l, documentsIndexed: r } = this.props.search;
                return (0, i.jsx)(_.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: l,
                    documentsIndexed: r
                });
            }),
            N(this, 'renderIndexing', () => {
                let e = g.Z.getSearchType(this.props.searchId) === b.aib.GUILD ? Z.intl.string(Z.t.AXPbZm) : Z.intl.string(Z.t.Q0JJjo);
                return (0, i.jsxs)(j, {
                    children: [
                        (0, i.jsx)(I.Z, {}),
                        (0, i.jsx)('div', {
                            className: (S.emptyResultsText, S.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            N(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? Z.intl.string(Z.t['VrK/2d']) : Z.intl.string(Z.t.V6nAfH);
                return (0, i.jsxs)(j, {
                    children: [
                        (0, i.jsx)('div', { className: a()(S.noResultsImage, { [S.alt]: e }) }),
                        (0, i.jsx)('div', {
                            className: a()(S.emptyResultsText, S.noResults, { [S.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            N(this, 'renderError', () =>
                (0, i.jsxs)(j, {
                    children: [
                        (0, i.jsx)('div', { className: S.errorImage }),
                        (0, i.jsx)('div', {
                            className: a()(S.emptyResultsText, S.errorMessage),
                            children: Z.intl.string(Z.t.uvDZBQ)
                        })
                    ]
                })
            ),
            N(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: l, isSearching: r, isIndexing: a, hasError: s } = this.props.search;
                return s
                    ? this.renderError()
                    : a
                      ? this.renderIndexing()
                      : r
                        ? null
                        : l > 0
                          ? (0, i.jsx)(E.Z, {
                                search: this.props.search,
                                searchResults: e,
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
function y(e) {
    let { searchId: t } = e,
        n = (0, c.cj)([g.Z], () => g.Z.getResultsState(t), [t]);
    return (0, i.jsx)(A, {
        searchId: t,
        search: n,
        ...(0, c.cj)(
            [g.Z],
            () => ({
                searchAnalyticsId: g.Z.getAnalyticsId(t),
                searchType: g.Z.getSearchType()
            }),
            [t]
        ),
        ...(0, v.Z)(t),
        renderEmbeds: f.NA.useSetting(),
        developerMode: f.Sb.useSetting(),
        ...(0, c.cj)([m.Z], () => {
            let { theme: e } = m.Z;
            return { theme: e };
        })
    });
}
