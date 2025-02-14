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
    d = n(164991),
    c = n(456268),
    u = n(859921),
    h = n(128449);
function m(e) {
    let { loadId: t } = e,
        n = d.Z.useField('fetchedQuery'),
        r = d.Z.useField('categoryId'),
        a = d.Z.useField('languageCode'),
        c = i.useMemo(
            () => ({
                categoryId: r,
                query: n,
                languageCode: a
            }),
            [r, a, n]
        ),
        u = (0, l.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getGuildIds(c)) && void 0 !== e ? e : h.q5;
        }),
        m = (0, l.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getIsFetching(c)) && void 0 !== e && e;
        }),
        p = d.Z.useField('resultsQuery'),
        g = p !== n,
        _ = i.useCallback(() => {
            let e = o.Z.getGuildIds(c),
                n = o.Z.getTotal(c);
            if (null == e || null == n) return;
            let i = o.Z.getIsFetching(c),
                l = o.Z.getIsInitialFetchComplete(c);
            i ||
                !l ||
                e.length >= n ||
                s.Z.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: d.Z.getField('categoryId'),
                    query: d.Z.getField('fetchedQuery'),
                    languageCode: d.Z.getField('languageCode')
                });
        }, [t, c]);
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
        l = d.Z.useField('query');
    i.useEffect(() => {
        (0, c.le)();
    }, []);
    let o = i.useCallback((e) => {
        d.Z.setState({ query: e });
    }, []);
    return {
        searchQuery: l,
        onSearchTextChange: o,
        onClearSearch: i.useCallback(() => {
            r.IZ(t),
                a.Z.clearSearchResults(),
                a.Z.resetSearchLayout(),
                d.Z.setState({
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
            let e = d.Z.getField('query'),
                n = d.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            a.Z.clearSearchResults();
            let i = d.Z.getField('languageCode'),
                l = d.Z.getField('categoryId');
            d.Z.setState({ resultsInitialCategoryId: l }),
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
