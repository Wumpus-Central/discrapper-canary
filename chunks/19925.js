n.d(t, {
    I: () => f,
    X: () => h,
}),
    n(733351);
var r = n(64700),
    i = n(311907),
    l = n(449054),
    a = n(417426),
    s = n(747550),
    o = n(351022),
    c = n(282026),
    u = n(460760),
    d = n(601193),
    p = n(324580);
function f(e) {
    let { loadId: t } = e,
        n = c.A.useField("fetchedQuery"),
        l = c.A.useField("categoryId"),
        a = c.A.useField("languageCode"),
        u = r.useMemo(
            () => ({
                categoryId: l,
                query: n,
                languageCode: a,
            }),
            [l, a, n],
        ),
        d = (0, i.bG)([o.A], () => {
            var e;
            return null != (e = o.A.getGuildIds(u)) ? e : p.VX;
        }),
        f = (0, i.bG)([o.A], () => {
            var e;
            return null != (e = o.A.getIsFetching(u)) && e;
        }),
        h = c.A.useField("resultsQuery"),
        A = h !== n,
        g = r.useCallback(() => {
            let e = o.A.getGuildIds(u),
                n = o.A.getTotal(u);
            if (null == e || null == n) return;
            let r = o.A.getIsFetching(u),
                i = o.A.getIsInitialFetchComplete(u);
            r ||
                !i ||
                e.length >= n ||
                s.A.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: c.A.getField("categoryId"),
                    query: c.A.getField("fetchedQuery"),
                    languageCode: c.A.getField("languageCode"),
                });
        }, [t, u]);
    return r.useMemo(
        () => ({
            guildIds: d,
            loading: A || f,
            searchResultsQuery: h,
            loadMore: g,
            searchCategoryId: l,
        }),
        [d, A, f, h, g, l],
    );
}
function h(e) {
    let { loadId: t } = e,
        n = d.A.useField("isSearchVisible"),
        i = c.A.useField("query");
    r.useEffect(() => {
        (0, u.Mu)();
    }, []);
    let o = r.useCallback((e) => {
        c.A.setState({ query: e });
    }, []);
    return {
        searchQuery: i,
        onSearchTextChange: o,
        onClearSearch: r.useCallback(() => {
            l.gp(t),
                a.A.clearSearchResults(),
                a.A.resetSearchLayout(),
                c.A.setState({
                    query: "",
                    fetchedQuery: "",
                    resultsQuery: "",
                    categoryId: p.Iq,
                    resultsInitialCategoryId: null,
                    scrollPosition: null,
                }),
                d.A.setState({ isSearchVisible: !1 });
        }, [t]),
        onSearchSubmit: r.useCallback(() => {
            let e = c.A.getField("query"),
                n = c.A.getField("fetchedQuery");
            if ("" === e.trim() || e === n) return;
            a.A.clearSearchResults();
            let r = c.A.getField("languageCode"),
                i = c.A.getField("categoryId");
            c.A.setState({ resultsInitialCategoryId: i }),
                d.A.setState({ isSearchVisible: !0 }),
                s.A.loadCategoryResultsAndCounts({
                    loadId: t,
                    categoryId: i,
                    query: e,
                    languageCode: r,
                });
        }, [t]),
        isSearchVisible: n,
    };
}
