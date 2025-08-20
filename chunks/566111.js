n.d(t, { Z: () => o }), n(388685);
var r = n(442837),
    i = n(25251),
    l = n(238359),
    s = n(223143);
function o() {
    var e;
    let { isFetching: t, fetchCategoriesError: n, fetchPurchasesError: o, categories: c, purchases: a } = (0, s.ZP)();
    (0, l.D)();
    let [u, d, f] = (0, r.Wu)([i.Z], () => [i.Z.isFetchingAll, i.Z.fetchError, i.Z.profileEffects]);
    return {
        isFetching: t || u,
        combinedError: null != (e = null != n ? n : o) ? e : d,
        profileEffects: f,
        categories: c,
        purchases: a,
    };
}
