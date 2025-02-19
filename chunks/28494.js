n.d(t, {
    H: () => g,
    f: () => h
}),
    n(566702);
var r = n(192379),
    i = n(442837),
    l = n(900849),
    o = n(762692),
    a = n(959165),
    s = n(356164),
    c = n(164991),
    u = n(456268),
    d = n(859921),
    p = n(128449);
function h(e) {
    let { loadId: t } = e,
        n = c.Z.useField('fetchedQuery'),
        l = c.Z.useField('categoryId'),
        o = c.Z.useField('languageCode'),
        u = r.useMemo(
            () => ({
                categoryId: l,
                query: n,
                languageCode: o
            }),
            [l, o, n]
        ),
        d = (0, i.e7)([s.Z], () => {
            var e;
            return null !== (e = s.Z.getGuildIds(u)) && void 0 !== e ? e : p.q5;
        }),
        h = (0, i.e7)([s.Z], () => {
            var e;
            return null !== (e = s.Z.getIsFetching(u)) && void 0 !== e && e;
        }),
        g = c.Z.useField('resultsQuery'),
        f = g !== n,
        m = r.useCallback(() => {
            let e = s.Z.getGuildIds(u),
                n = s.Z.getTotal(u);
            if (null == e || null == n) return;
            let r = s.Z.getIsFetching(u),
                i = s.Z.getIsInitialFetchComplete(u);
            r ||
                !i ||
                e.length >= n ||
                a.Z.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: c.Z.getField('categoryId'),
                    query: c.Z.getField('fetchedQuery'),
                    languageCode: c.Z.getField('languageCode')
                });
        }, [t, u]);
    return r.useMemo(
        () => ({
            guildIds: d,
            loading: f || h,
            searchResultsQuery: g,
            loadMore: m,
            searchCategoryId: l
        }),
        [d, f, h, g, m, l]
    );
}
function g(e) {
    let { loadId: t } = e,
        n = d.Z.useField('isSearchVisible'),
        i = c.Z.useField('query');
    r.useEffect(() => {
        (0, u.le)();
    }, []);
    let s = r.useCallback((e) => {
        c.Z.setState({ query: e });
    }, []);
    return {
        searchQuery: i,
        onSearchTextChange: s,
        onClearSearch: r.useCallback(() => {
            l.IZ(t),
                o.Z.clearSearchResults(),
                o.Z.resetSearchLayout(),
                c.Z.setState({
                    query: '',
                    fetchedQuery: '',
                    resultsQuery: '',
                    categoryId: p.Hk,
                    resultsInitialCategoryId: null,
                    scrollPosition: null
                }),
                d.Z.setState({ isSearchVisible: !1 });
        }, [t]),
        onSearchSubmit: r.useCallback(() => {
            let e = c.Z.getField('query'),
                n = c.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            o.Z.clearSearchResults();
            let r = c.Z.getField('languageCode'),
                i = c.Z.getField('categoryId');
            c.Z.setState({ resultsInitialCategoryId: i }),
                d.Z.setState({ isSearchVisible: !0 }),
                a.Z.loadCategoryResultsAndCounts({
                    loadId: t,
                    categoryId: i,
                    query: e,
                    languageCode: r
                });
        }, [t]),
        isSearchVisible: n
    };
}
