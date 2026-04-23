a.d(t, { I: () => g, X: () => A });
var s = a(64700),
    l = a(311907),
    r = a(449054),
    i = a(417426),
    n = a(747550),
    c = a(351022),
    o = a(282026),
    d = a(460760),
    u = a(601193),
    h = a(324580);
function g(e) {
    let { loadId: t } = e,
        a = o.A.useField("fetchedQuery"),
        r = o.A.useField("categoryId"),
        i = o.A.useField("languageCode"),
        d = s.useMemo(() => ({ categoryId: r, query: a, languageCode: i }), [r, i, a]),
        u = (0, l.bG)([c.A], () => c.A.getGuildIds(d) ?? h.VX),
        g = (0, l.bG)([c.A], () => c.A.getIsFetching(d) ?? !1),
        A = o.A.useField("resultsQuery"),
        _ = A !== a,
        m = s.useCallback(() => {
            let e = c.A.getGuildIds(d),
                a = c.A.getTotal(d);
            if (null == e || null == a) return;
            let s = c.A.getIsFetching(d),
                l = c.A.getIsInitialFetchComplete(d);
            s ||
                !l ||
                e.length >= a ||
                n.A.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: o.A.getField("categoryId"),
                    query: o.A.getField("fetchedQuery"),
                    languageCode: o.A.getField("languageCode"),
                });
        }, [t, d]);
    return s.useMemo(
        () => ({ guildIds: u, loading: _ || g, searchResultsQuery: A, loadMore: m, searchCategoryId: r }),
        [u, _, g, A, m, r],
    );
}
function A(e) {
    let { loadId: t } = e,
        a = u.A.useField("isSearchVisible"),
        l = o.A.useField("query");
    s.useEffect(() => {
        (0, d.Mu)();
    }, []);
    let c = s.useCallback((e) => {
        o.A.setState({ query: e });
    }, []);
    return {
        searchQuery: l,
        onSearchTextChange: c,
        onClearSearch: s.useCallback(() => {
            r.gp(t),
                i.A.clearSearchResults(),
                i.A.resetSearchLayout(),
                o.A.setState({
                    query: "",
                    fetchedQuery: "",
                    resultsQuery: "",
                    categoryId: h.Iq,
                    resultsInitialCategoryId: null,
                    scrollPosition: null,
                }),
                u.A.setState({ isSearchVisible: !1 });
        }, [t]),
        onSearchSubmit: s.useCallback(() => {
            let e = o.A.getField("query"),
                a = o.A.getField("fetchedQuery");
            if ("" === e.trim() || e === a) return;
            i.A.clearSearchResults();
            let s = o.A.getField("languageCode"),
                l = o.A.getField("categoryId");
            o.A.setState({ resultsInitialCategoryId: l }),
                u.A.setState({ isSearchVisible: !0 }),
                n.A.loadCategoryResultsAndCounts({ loadId: t, categoryId: l, query: e, languageCode: s });
        }, [t]),
        isSearchVisible: a,
    };
}
