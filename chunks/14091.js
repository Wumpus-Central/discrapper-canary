n.d(t, { Z: () => T }), n(47120), n(301563), n(26686);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    p = n(603263),
    h = n(367907),
    f = n(210887),
    m = n(695346),
    g = n(768119),
    b = n(944486),
    _ = n(585483),
    C = n(251285),
    v = n(406326),
    y = n(994463),
    x = n(619753),
    j = n(981631),
    O = n(388032),
    N = n(10753);
function E(e, t, n) {
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
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
class I extends i.Component {
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
            E(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId) return;
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
                    h.ZP.trackWithMetadata(j.rMx.SEARCH_RESULT_VIEWED, {
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
                        page_num_links: l,
                        page_num_embeds: i,
                        page_num_attach: r
                    });
            });
    }
}
let S = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: N.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: N.emptyResultsContent,
            children: t
        })
    });
};
class Z extends i.PureComponent {
    componentDidMount() {
        _.S.subscribe(j.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        _.S.unsubscribe(j.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
                        ? p.Vj({
                              sort_by: n.sort_by,
                              sort_order: n.sort_order
                          })
                        : j.QIO.NEWEST
            });
    }
    render() {
        let { searchAnalyticsId: e, searchType: t, searchResults: n } = this.props,
            { offset: i, hasError: l, totalResults: o, isHistoricalIndexing: a } = this.props.search;
        return (0, r.jsxs)('section', {
            className: N.searchResultsWrap,
            'aria-label': O.NW.string(O.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: N.scroller,
                    children: this.renderContent()
                }),
                (0, r.jsx)(I, {
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: i,
                    searchLimit: j.vpv,
                    searchHasError: l,
                    searchTotalResults: o,
                    searchIsIndexing: a
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                searchMode: j.QIO.NEWEST,
                searchQuery: null
            }),
            E(this, 'scrollerRef', i.createRef()),
            E(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            E(this, 'selectChannel', (e) => {
                e !== b.Z.getChannelId() && d.Z.transitionToInviteChannelSync(e);
            }),
            E(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                t || p.jn(e);
            }),
            E(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                t || p.m$(e);
            }),
            E(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            E(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        search: { isSearching: n }
                    } = this.props,
                    { searchMode: r } = this.state;
                e === r ||
                    n ||
                    (h.ZP.trackWithMetadata(j.rMx.SEARCH_RESULT_SORT_CHANGED, {
                        search_id: g.Z.getAnalyticsId(t),
                        new_sort_type: e
                    }),
                    p.Nz(t, e),
                    this.setState({ searchMode: e }));
            }),
            E(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            E(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: i, documentsIndexed: l } = this.props.search;
                return (0, r.jsx)(v.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            E(this, 'renderIndexing', () => {
                let e = g.Z.getSearchType(this.props.searchId) === j.aib.GUILD ? O.NW.string(O.t.AXPbZm) : O.NW.string(O.t.Q0JJjo);
                return (0, r.jsxs)(S, {
                    children: [
                        (0, r.jsx)(y.Z, {}),
                        (0, r.jsx)('div', {
                            className: (N.emptyResultsText, N.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            E(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? O.NW.string(O.t['VrK/2d']) : O.NW.string(O.t.V6nAfH);
                return (0, r.jsxs)(S, {
                    children: [
                        (0, r.jsx)('div', { className: o()(N.noResultsImage, { [N.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: o()(N.emptyResultsText, N.noResults, { [N.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            E(this, 'renderError', () =>
                (0, r.jsxs)(S, {
                    children: [
                        (0, r.jsx)('div', { className: N.errorImage }),
                        (0, r.jsx)('div', {
                            className: o()(N.emptyResultsText, N.errorMessage),
                            children: O.NW.string(O.t.uvDZBQ)
                        })
                    ]
                })
            ),
            E(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: i, isSearching: l, isIndexing: o, hasError: a } = this.props.search;
                return a
                    ? this.renderError()
                    : o
                      ? this.renderIndexing()
                      : l
                        ? null
                        : i > 0
                          ? (0, r.jsx)(x.Z, {
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
function T(e) {
    var t, n;
    let { searchId: i } = e,
        l = (0, c.cj)([g.Z], () => g.Z.getResultsState(i), [i]);
    return (0, r.jsx)(
        Z,
        P(
            ((t = P(
                {
                    searchId: i,
                    search: l
                },
                (0, c.cj)(
                    [g.Z],
                    () => ({
                        searchAnalyticsId: g.Z.getAnalyticsId(i),
                        searchType: g.Z.getSearchType()
                    }),
                    [i]
                ),
                (0, C.Z)(i)
            )),
            (n = n =
                {
                    renderEmbeds: m.NA.useSetting(),
                    developerMode: m.Sb.useSetting()
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
            (0, c.cj)([f.Z], () => {
                let { theme: e } = f.Z;
                return { theme: e };
            })
        )
    );
}
