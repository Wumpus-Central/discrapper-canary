n.d(t, { A: () => u }), n(896048), n(733351);
var r = n(449054),
    i = n(417426),
    l = n(823448),
    a = n(351022),
    s = n(282026);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class c {}
let u = new (class extends c {
    constructor(...e) {
        super(...e),
            o(this, "loadMoreCategoryResults", async (e) => {
                let { query: t, categoryId: n, languageCode: l, offset: s } = e;
                a.A.getIsFetching({
                    query: t,
                    categoryId: n,
                    languageCode: l,
                }) ||
                    (a.A.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l,
                    }) &&
                        (r.br({
                            withCounts: !1,
                            offset: s,
                        }),
                        await i.A.fetchSearchResults(t, {
                            categoryId: n,
                            languageCode: l,
                            offset: s,
                            limit: 12,
                            withCounts: !1,
                        })));
            }),
            o(this, "loadCategoryResults", async (e) => {
                let { query: t, categoryId: n, languageCode: l } = e,
                    s = a.A.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l,
                    }),
                    o = a.A.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l,
                    });
                s ||
                    o ||
                    (r.br({
                        withCounts: !1,
                        offset: 0,
                    }),
                    await i.A.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: l,
                        offset: 0,
                        limit: 12,
                        withCounts: !1,
                    }));
            }),
            o(this, "loadCategoryResultsAndCounts", async (e) => {
                let { query: t, loadId: n, categoryId: a, languageCode: o } = e;
                if ("" === t.trim()) return;
                let c = l.A.getIsFetchingCounts(t),
                    u = l.A.getIsFetchingCounts(t);
                c ||
                    u ||
                    (s.A.setState({
                        fetchedQuery: t,
                        resultsQuery: "",
                    }),
                    r.fd(n, a),
                    r.br({
                        withCounts: !0,
                        offset: 0,
                    }),
                    await i.A.fetchSearchResults(t, {
                        categoryId: a,
                        languageCode: o,
                        offset: 0,
                        limit: 12,
                        withCounts: !0,
                    }),
                    s.A.setState({ resultsQuery: t }));
            });
    }
})();
