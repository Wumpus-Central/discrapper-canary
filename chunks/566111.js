r.d(t, { Z: () => s }), r(388685);
var n = r(442837),
    i = r(25251),
    l = r(238359),
    o = r(223143);
function s() {
    var e;
    let { isFetching: t, fetchCategoriesError: r, fetchPurchasesError: s, categories: c, purchases: a } = (0, o.ZP)();
    (0, l.D)();
    let [u, d, f] = (0, n.Wu)([i.Z], () => [i.Z.isFetchingAll, i.Z.fetchError, i.Z.profileEffects]);
    return {
        isFetching: t || u,
        combinedError: null != (e = null != r ? r : s) ? e : d,
        profileEffects: f,
        categories: c,
        purchases: a,
    };
}
