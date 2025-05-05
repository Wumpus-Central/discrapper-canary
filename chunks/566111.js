r.d(t, { Z: () => c }), r(388685);
var n = r(73800),
    i = r(442837),
    l = r(365943),
    o = r(25251),
    s = r(223143);
function c(e) {
    var t;
    let { isFetching: r, fetchCategoriesError: c, fetchPurchasesError: a, categories: u, purchases: d } = (0, s.ZP)({ location: e }),
        [f, p, m] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.fetchError, o.Z.profileEffects]);
    return (
        n.useEffect(() => {
            (0, l.z)(!0);
        }, []),
        {
            isFetching: r || f,
            combinedError: null != (t = null != c ? c : a) ? t : p,
            profileEffects: m,
            categories: u,
            purchases: d
        }
    );
}
