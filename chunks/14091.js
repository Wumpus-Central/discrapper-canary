n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(944486),
    C = n(585483),
    x = n(251285),
    v = n(406326),
    E = n(994463),
    I = n(619753),
    b = n(981631),
    Z = n(388032),
    N = n(475374);
function T(e, t, n) {
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
class S extends l.Component {
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
            T(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId) return;
                let n = 0,
                    i = 0,
                    l = 0,
                    a = 0;
                null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && a++), null != e.embeds && e.embeds.length > 0 && l++, null != e.attachments && e.attachments.length > 0 && i++;
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
                        page_num_links: a,
                        page_num_embeds: l,
                        page_num_attach: i
                    });
            });
    }
}
let j = (e) => {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: N.emptyResultsWrap,
        children: (0, i.jsx)('div', {
            className: N.emptyResultsContent,
            children: t
        })
    });
};
class y extends l.PureComponent {
    componentDidMount() {
        C.S.subscribe(b.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        C.S.unsubscribe(b.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            { offset: l, hasError: a, totalResults: r, isHistoricalIndexing: s } = this.props.search;
        return (0, i.jsxs)('section', {
            className: N.searchResultsWrap,
            'aria-label': Z.intl.string(Z.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, i.jsx)(d.Den, {
                    ref: this.scrollerRef,
                    className: N.scroller,
                    children: this.renderContent()
                }),
                (0, i.jsx)(S, {
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: b.vpv,
                    searchHasError: a,
                    searchTotalResults: r,
                    searchIsIndexing: s
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                searchMode: b.QIO.NEWEST,
                searchQuery: null
            }),
            T(this, 'scrollerRef', l.createRef()),
            T(this, 'scrollTo', (e, t, n) => {
                let i = this.scrollerRef.current;
                if (null == i) return;
                let l = i.getScrollerState().scrollTop - e;
                i.scrollTo({
                    to: l,
                    animate: t,
                    callback: n
                });
            }),
            T(this, 'selectChannel', (e) => {
                e !== _.Z.getChannelId() && u.Z.transitionToInviteChannelSync(e);
            }),
            T(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                t || h.jn(e);
            }),
            T(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                t || h.m$(e);
            }),
            T(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                h.qt(e);
            }),
            T(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        search: { isSearching: n }
                    } = this.props,
                    { searchMode: i } = this.state;
                e === i ||
                    n ||
                    (p.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_SORT_CHANGED, {
                        search_id: g.Z.getAnalyticsId(t),
                        new_sort_type: e
                    }),
                    h.Nz(t, e),
                    this.setState({ searchMode: e }));
            }),
            T(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                h.QY(e, !t);
            }),
            T(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: l, documentsIndexed: a } = this.props.search;
                return (0, i.jsx)(v.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            T(this, 'renderIndexing', () => {
                let e = g.Z.getSearchType(this.props.searchId) === b.aib.GUILD ? Z.intl.string(Z.t.AXPbZm) : Z.intl.string(Z.t.Q0JJjo);
                return (0, i.jsxs)(j, {
                    children: [
                        (0, i.jsx)(E.Z, {}),
                        (0, i.jsx)('div', {
                            className: (N.emptyResultsText, N.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            T(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? Z.intl.string(Z.t['VrK/2d']) : Z.intl.string(Z.t.V6nAfH);
                return (0, i.jsxs)(j, {
                    children: [
                        (0, i.jsx)('div', { className: r()(N.noResultsImage, { [N.alt]: e }) }),
                        (0, i.jsx)('div', {
                            className: r()(N.emptyResultsText, N.noResults, { [N.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            T(this, 'renderError', () =>
                (0, i.jsxs)(j, {
                    children: [
                        (0, i.jsx)('div', { className: N.errorImage }),
                        (0, i.jsx)('div', {
                            className: r()(N.emptyResultsText, N.errorMessage),
                            children: Z.intl.string(Z.t.uvDZBQ)
                        })
                    ]
                })
            ),
            T(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: l, isSearching: a, isIndexing: r, hasError: s } = this.props.search;
                return s
                    ? this.renderError()
                    : r
                      ? this.renderIndexing()
                      : a
                        ? null
                        : l > 0
                          ? (0, i.jsx)(I.Z, {
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
function A(e) {
    let { searchId: t } = e,
        n = (0, c.cj)([g.Z], () => g.Z.getResultsState(t), [t]);
    return (0, i.jsx)(y, {
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
        ...(0, x.Z)(t),
        renderEmbeds: f.NA.useSetting(),
        developerMode: f.Sb.useSetting(),
        ...(0, c.cj)([m.Z], () => {
            let { theme: e } = m.Z;
            return { theme: e };
        })
    });
}
