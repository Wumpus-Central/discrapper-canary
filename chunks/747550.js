a.d(t, { A: () => o });
var s = a(449054),
    l = a(417426),
    r = a(823448),
    i = a(351022),
    n = a(282026);
class c {}
let o = new (class extends c {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: a, languageCode: r, offset: n } = e;
        i.A.getIsFetching({ query: t, categoryId: a, languageCode: r }) ||
            (i.A.getIsInitialFetchComplete({ query: t, categoryId: a, languageCode: r }) &&
                (s.br({ withCounts: !1, offset: n }),
                await l.A.fetchSearchResults(t, {
                    categoryId: a,
                    languageCode: r,
                    offset: n,
                    limit: 12,
                    withCounts: !1,
                })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: a, languageCode: r } = e,
            n = i.A.getIsFetching({ query: t, categoryId: a, languageCode: r }),
            c = i.A.getIsInitialFetchComplete({ query: t, categoryId: a, languageCode: r });
        n ||
            c ||
            (s.br({ withCounts: !1, offset: 0 }),
            await l.A.fetchSearchResults(t, { categoryId: a, languageCode: r, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: a, categoryId: i, languageCode: c } = e;
        if ("" === t.trim()) return;
        let o = r.A.getIsFetchingCounts(t),
            d = r.A.getIsFetchingCounts(t);
        o ||
            d ||
            (n.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            s.fd(a, i),
            s.br({ withCounts: !0, offset: 0 }),
            await l.A.fetchSearchResults(t, { categoryId: i, languageCode: c, offset: 0, limit: 12, withCounts: !0 }),
            n.A.setState({ resultsQuery: t }));
    };
})();
