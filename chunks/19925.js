n.d(t, { I: () => h, X: () => _ });
var i = n(64700),
    r = n(311907),
    a = n(449054),
    l = n(417426),
    s = n(747550),
    o = n(351022),
    d = n(282026),
    c = n(460760),
    u = n(601193),
    A = n(324580);
function h(e) {
    let { loadId: t } = e,
        n = d.A.useField("fetchedQuery"),
        a = d.A.useField("categoryId"),
        l = d.A.useField("languageCode"),
        c = i.useMemo(() => ({ categoryId: a, query: n, languageCode: l }), [a, l, n]),
        u = (0, r.bG)([o.A], () => o.A.getGuildIds(c) ?? A.VX),
        h = (0, r.bG)([o.A], () => o.A.getIsFetching(c) ?? !1),
        _ = d.A.useField("resultsQuery"),
        m = _ !== n,
        p = i.useCallback(() => {
            let e = o.A.getGuildIds(c),
                n = o.A.getTotal(c);
            if (null == e || null == n) return;
            let i = o.A.getIsFetching(c),
                r = o.A.getIsInitialFetchComplete(c);
            i ||
                !r ||
                e.length >= n ||
                s.A.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: d.A.getField("categoryId"),
                    query: d.A.getField("fetchedQuery"),
                    languageCode: d.A.getField("languageCode"),
                });
        }, [t, c]);
    return i.useMemo(
        () => ({ guildIds: u, loading: m || h, searchResultsQuery: _, loadMore: p, searchCategoryId: a }),
        [u, m, h, _, p, a],
    );
}
function _(e) {
    let { loadId: t } = e,
        n = u.A.useField("isSearchVisible"),
        r = d.A.useField("query");
    i.useEffect(() => {
        (0, c.Mu)();
    }, []);
    let o = i.useCallback((e) => {
        d.A.setState({ query: e });
    }, []);
    return {
        searchQuery: r,
        onSearchTextChange: o,
        onClearSearch: i.useCallback(() => {
            a.gp(t),
                l.A.clearSearchResults(),
                l.A.resetSearchLayout(),
                d.A.setState({
                    query: "",
                    fetchedQuery: "",
                    resultsQuery: "",
                    categoryId: A.Iq,
                    resultsInitialCategoryId: null,
                    scrollPosition: null,
                }),
                u.A.setState({ isSearchVisible: !1 });
        }, [t]),
        onSearchSubmit: i.useCallback(() => {
            let e = d.A.getField("query"),
                n = d.A.getField("fetchedQuery");
            if ("" === e.trim() || e === n) return;
            l.A.clearSearchResults();
            let i = d.A.getField("languageCode"),
                r = d.A.getField("categoryId");
            d.A.setState({ resultsInitialCategoryId: r }),
                u.A.setState({ isSearchVisible: !0 }),
                s.A.loadCategoryResultsAndCounts({ loadId: t, categoryId: r, query: e, languageCode: i });
        }, [t]),
        isSearchVisible: n,
    };
}
