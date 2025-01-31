n.d(t, {
    H: () => p,
    f: () => m
});
var i = n(192379),
    l = n(442837),
    r = n(900849),
    a = n(762692),
    s = n(959165),
    o = n(356164),
    c = n(164991),
    d = n(456268),
    u = n(859921),
    h = n(128449);
function m(e) {
    let { loadId: t } = e,
        n = c.Z.useField('fetchedQuery'),
        r = c.Z.useField('categoryId'),
        a = c.Z.useField('languageCode'),
        d = i.useMemo(
            () => ({
                categoryId: r,
                query: n,
                languageCode: a
            }),
            [r, a, n]
        ),
        u = (0, l.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getGuildIds(d)) && void 0 !== e ? e : h.q5;
        }),
        m = (0, l.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getIsFetching(d)) && void 0 !== e && e;
        }),
        p = c.Z.useField('resultsQuery'),
        g = p !== n,
        _ = i.useCallback(() => {
            let e = o.Z.getGuildIds(d),
                n = o.Z.getTotal(d);
            if (null == e || null == n) return;
            let i = o.Z.getIsFetching(d),
                l = o.Z.getIsInitialFetchComplete(d);
            i ||
                !l ||
                e.length >= n ||
                s.Z.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: c.Z.getField('categoryId'),
                    query: c.Z.getField('fetchedQuery'),
                    languageCode: c.Z.getField('languageCode')
                });
        }, [t, d]);
    return i.useMemo(
        () => ({
            guildIds: u,
            loading: g || m,
            searchResultsQuery: p,
            loadMore: _,
            searchCategoryId: r
        }),
        [u, g, m, p, _, r]
    );
}
function p(e) {
    let { loadId: t } = e,
        n = u.Z.useField('isSearchVisible'),
        l = c.Z.useField('query');
    i.useEffect(() => {
        (0, d.le)();
    }, []);
    let o = i.useCallback((e) => {
        c.Z.setState({ query: e });
    }, []);
    return {
        searchQuery: l,
        onSearchTextChange: o,
        onClearSearch: i.useCallback(() => {
            r.IZ(t),
                a.Z.clearSearchResults(),
                a.Z.resetSearchLayout(),
                c.Z.setState({
                    query: '',
                    fetchedQuery: '',
                    resultsQuery: '',
                    categoryId: h.Hk,
                    resultsInitialCategoryId: null,
                    scrollPosition: null
                }),
                u.Z.setState({ isSearchVisible: !1 });
        }, [t]),
        onSearchSubmit: i.useCallback(() => {
            let e = c.Z.getField('query'),
                n = c.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            a.Z.clearSearchResults();
            let i = c.Z.getField('languageCode'),
                l = c.Z.getField('categoryId');
            c.Z.setState({ resultsInitialCategoryId: l }),
                u.Z.setState({ isSearchVisible: !0 }),
                s.Z.loadCategoryResultsAndCounts({
                    loadId: t,
                    categoryId: l,
                    query: e,
                    languageCode: i
                });
        }, [t]),
        isSearchVisible: n
    };
}
