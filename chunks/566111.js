n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(365943),
    s = n(25251),
    o = n(223143);
function c(e) {
    var t;
    let { isFetching: n, fetchCategoriesError: c, fetchPurchasesError: a, categories: d, purchases: u } = (0, o.ZP)({ location: e }),
        [f, m, p] = (0, i.Wu)([s.Z], () => [s.Z.isFetching, s.Z.fetchError, s.Z.profileEffects]);
    return (
        r.useEffect(() => {
            (0, l.z)(!0);
        }, []),
        {
            isFetching: n || f,
            combinedError: null !== (t = null != c ? c : a) && void 0 !== t ? t : m,
            profileEffects: p,
            categories: d,
            purchases: u
        }
    );
}
