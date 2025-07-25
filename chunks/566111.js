(r.d(t, { Z: () => s }), r(388685));
var n = r(442837),
    i = r(25251),
    l = r(238359),
    o = r(223143);
function s(e) {
    var t;
    let { isFetching: r, fetchCategoriesError: s, fetchPurchasesError: c, categories: a, purchases: u } = (0, o.ZP)({ location: e });
    (0, l.D)();
    let [d, f, p] = (0, n.Wu)([i.Z], () => [i.Z.isFetchingAll, i.Z.fetchError, i.Z.profileEffects]);
    return {
        isFetching: r || d,
        combinedError: null != (t = null != s ? s : c) ? t : f,
        profileEffects: p,
        categories: a,
        purchases: u
    };
}
