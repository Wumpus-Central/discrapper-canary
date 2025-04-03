r.d(t, { Z: () => c }), r(47120);
var n = r(192379),
    i = r(442837),
    o = r(365943),
    l = r(25251),
    s = r(223143);
function c(e) {
    var t;
    let { isFetching: r, fetchCategoriesError: c, fetchPurchasesError: a, categories: u, purchases: d } = (0, s.ZP)({ location: e }),
        [f, p, m] = (0, i.Wu)([l.Z], () => [l.Z.isFetching, l.Z.fetchError, l.Z.profileEffects]);
    return (
        n.useEffect(() => {
            (0, o.z)(!0);
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
