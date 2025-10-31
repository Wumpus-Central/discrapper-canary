n.d(t, { Z: () => z }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(681715),
    d = n(481060),
    u = n(493773),
    p = n(243778),
    h = n(169223),
    f = n(695346),
    g = n(592125),
    m = n(585483),
    b = n(171900),
    _ = n(607802),
    y = n(375123),
    x = n(56522),
    O = n(759209),
    j = n(532428),
    v = n(406326),
    C = n(994463),
    I = n(991896),
    S = n(611004),
    E = n(619753),
    Z = n(902733),
    P = n(165017),
    T = n(737),
    N = n(909125),
    R = n(817190),
    w = n(315322),
    A = n(981631),
    D = n(531578),
    L = n(388032),
    M = n(669922);
class k extends i.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "autoAnalytics", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    l = 0;
                t.props.messages.forEach((e) => {
                    null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                        null != e.embeds && e.embeds.length > 0 && i++,
                        null != e.attachments && e.attachments.length > 0 && r++;
                });
                let a = (0, _.Tm)(t.props.searchContext);
                0 === n
                    ? (0, w.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: S.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: R.Z.getSearchResultsQuery(a),
                      })
                    : (0, w.hM)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          prevSearchRequestAnalyticsId: e !== t.props.searchRequestAnalyticsId ? e : null,
                          isError: t.props.searchHasError,
                          limit: t.props.searchLimit,
                          offset: t.props.searchOffset,
                          page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                          totalResults: t.props.searchTotalResults,
                          pageResults: null != t.props.messages ? t.props.messages.length : null,
                          isIndexing: t.props.searchIsIndexing,
                          pageNumMessages: n,
                          pageNumLinks: l,
                          pageNumEmbeds: i,
                          pageNumAttachments: r,
                          searchQueryString: S.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: R.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function U(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: M.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: M.emptyResultsContent,
            children: t,
        }),
    });
}
function G(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(Z.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function H(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: i,
            search: l,
            searchContext: s,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: d,
            onPageChange: u,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        } = e,
        { totalResults: _, isSearching: y, isIndexing: x, hasError: O } = l;
    if (O)
        return (0, r.jsxs)(U, {
            children: [
                (0, r.jsx)("div", { className: M.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(M.emptyResultsText, M.errorMessage),
                    children: L.intl.string(L.t.uvDZBZ),
                }),
            ],
        });
    if (x) {
        let e = s.type === A.aib.GUILD ? L.intl.string(L.t.AXPbZr) : L.intl.string(L.t.Q0JJjv);
        return (0, r.jsxs)(U, {
            children: [
                (0, r.jsx)(C.Z, {}),
                (0, r.jsx)("div", {
                    className: (M.emptyResultsText, M.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (y) return null;
    if (_ > 0)
        return (0, r.jsx)(E.Z, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: o,
            scrollTo: d,
            onPageChange: u,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        });
    let { showNoResultsAlt: j } = l,
        v = j ? L.intl.string(L.t["VrK/2R"]) : L.intl.string(L.t.V6nAfF);
    return (0, r.jsxs)(U, {
        children: [
            (0, r.jsx)("div", { className: a()(M.noResultsImage, { [M.alt]: j }) }),
            (0, r.jsx)("div", {
                className: a()(M.emptyResultsText, M.noResults, { [M.alt]: j }),
                children: v,
            }),
        ],
    });
}
let F = [],
    B = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: h,
                ignoreCount: f,
                isFeedbackVisible: b,
                dismissFeedbackEntrypoint: x,
                onSearchModeChange: O,
                onPageChange: C,
                searchMode: I,
                onBlockedResultsClick: E,
                searchResultsQuery: Z,
                isFavoritesSearch: P,
                selectedChannelId: T,
            } = e,
            D = i.useRef(null),
            k = i.useCallback(() => {
                S.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(A.CkL.SEARCH_RESULTS_CLOSE, k),
                () => {
                    m.S.unsubscribe(A.CkL.SEARCH_RESULTS_CLOSE, k);
                }
            ),
            [k],
        );
        let U = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (U.current !== n.showBlockedResults) {
                U.current = n.showBlockedResults;
                let e = D.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let B = i.useCallback((e, t, n) => {
                let r = D.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n,
                });
            }, []),
            {
                paginationTotalCount: V,
                paginationMaxIndex: z,
                isPaginationTotalCountLimited: W,
            } = (0, N.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            Y = i.useCallback(
                (e, t) => {
                    let n = z + 1;
                    if (!W || e.targetPage !== n) return t;
                    {
                        let e = L.intl.formatToPlainString(L.t["E+2azY"], { maxPages: n });
                        return (0, r.jsx)(c.u, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [W, z],
            ),
            q = i.useCallback(
                (e) => {
                    e === I ||
                        n.isSearching ||
                        ((0, w.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        O(e));
                },
                [O, n.isSearching, t, I, a],
            ),
            K = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        s = (0, _.Tm)(t),
                        { offset: o, totalResults: c } = n;
                    (0, w.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: A.vpv,
                        page: Math.floor(o / A.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: S.Z.getSearchInputText(t),
                        searchQuery: R.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, u],
            ),
            Q = i.useCallback(
                (e) => {
                    (0, w.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        C(e);
                },
                [C, t, a],
            ),
            X = Math.floor(n.offset / A.vpv),
            J = W && X >= z,
            $ = z + 1,
            ee = (0, y.C)({ location: "SearchResults" }),
            et = (0, s.Wu)([R.Z], () => {
                if (0 !== n.offset || !ee) return F;
                let e = u.length;
                if (e < 10) return F;
                let r = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return F;
                let i = (0, _.Tm)(t),
                    l = R.Z.getSearchResultsQueryString(i);
                return (0, _.kG)(null != l ? l : "").some((e) => e.type === A.dCx.FILTER_AUTHOR_TYPE)
                    ? F
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [en, er] = (0, p.US)(et),
            ei = en === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            el = i.useCallback(() => {
                if (n.isSearching) return;
                let e = "".concat(j.ZP[A.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(L.intl.string(L.t.tPZo4p)) + " ";
                S.Z.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, r.jsxs)("section", {
            className: M.searchResultsWrap,
            "aria-label": L.intl.string(L.t["zkoeq/"]),
            children: [
                (0, r.jsx)(v.Z, {
                    searchContext: t,
                    searchMode: I,
                    onSearchModeChange: q,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: T,
                }),
                (0, r.jsxs)(d.Den, {
                    ref: D,
                    className: M.scroller,
                    children: [
                        J &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: M.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: L.intl.formatToPlainString(L.t["E+2azY"], { maxPages: $ }),
                            }),
                        ei &&
                            (0, r.jsx)(d.Wn, {
                                className: M.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: L.intl.format(L.t["gQeg/R"], { handleClick: el }),
                            }),
                        (0, r.jsx)(H, {
                            messages: u,
                            blockCount: h,
                            ignoreCount: f,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: K,
                            onScrollTo: B,
                            onPageChange: Q,
                            paginationTotalCount: W ? V : void 0,
                            renderPageWrapper: Y,
                            onBlockedResultsClick: E,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: Z,
                            isFavoritesSearch: P,
                        }),
                    ],
                }),
                (0, r.jsx)(G, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: x,
                }),
            ],
        });
    });
function V(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, x.M)({ location: "SearchResults" }),
                { enabled: l, force: a } = (0, O.f)({ location: "SearchResults" }),
                s = e.type === A.aib.DMS || e.type === A.aib.CHANNEL,
                o = (r && s) || l;
            return (
                i.useEffect(() => {
                    o && a && n(!0);
                }, [a, o, l]),
                (0, u.ZP)(() => {
                    o &&
                        (a ||
                            h.Z.possiblyShowFeedbackModal(
                                D.nw.SEARCH_RESULTS,
                                () => n(!0),
                                () => n(!1),
                            ));
                }),
                {
                    dismissFeedbackEntrypoint: i.useCallback(() => {
                        n(!1);
                    }, []),
                    isFeedbackVisible: t,
                }
            );
        })(t),
        o = (0, _.Tm)(t),
        c = (0, s.cj)([b.Z, R.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(o),
                offset: null != (r = R.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(o)) ? i : 0,
                hasError: null != b.Z.getError(o),
                showBlockedResults: R.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: R.Z.shouldShowNoResultsAlt(o),
            };
        }),
        d = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(o)),
        { renderedMessages: p, ignoreCount: g, blockCount: m } = (0, T.Z)({ searchContext: t }),
        y = (0, s.e7)([R.Z], () => {
            var e;
            return null != (e = R.Z.getSearchMode(o)) ? e : A.QIO.NEWEST;
        }),
        j = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                I.Z.updateSearchMode(t, e);
                let n = S.Z.getSearchInputText(t);
                null != n &&
                    S.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: 0,
                    });
            },
            [c.isSearching, t],
        ),
        v = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                let n = S.Z.getSearchInputText(t);
                null != n &&
                    S.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: e * A.vpv,
                    });
            },
            [c.isSearching, t],
        ),
        C = (0, s.e7)([R.Z], () => {
            let e = (0, _.Tm)(t);
            return R.Z.getSearchResultsQuery(e);
        }),
        E = t.type === A.aib.FAVORITES,
        Z = i.useCallback((e) => I.Z.setShowBlockedResults(t, e), [t]),
        P = i.useDeferredValue(p),
        N = i.useDeferredValue(c),
        w = i.useDeferredValue(d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(B, {
                searchContext: t,
                search: N,
                searchRequestAnalyticsId: w,
                messages: P,
                ignoreCount: g,
                blockCount: m,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: v,
                onSearchModeChange: j,
                searchMode: y,
                onBlockedResultsClick: Z,
                searchResultsQuery: C,
                isFavoritesSearch: E,
                selectedChannelId: n,
            }),
            (0, r.jsx)(k, {
                searchContext: t,
                searchRequestAnalyticsId: w,
                messages: P,
                searchOffset: N.offset,
                searchLimit: A.vpv,
                searchHasError: N.hasError,
                searchTotalResults: N.totalResults,
                searchIsIndexing: N.isHistoricalIndexing,
                isSearching: N.isSearching,
            }),
        ],
    });
}
function z(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, P.H)({
            guildId: t,
            channelId: n,
        });
    return null == i
        ? null
        : (0, r.jsx)(V, {
              searchContext: i,
              selectedChannelId: n,
          });
}
