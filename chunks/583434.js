n.d(t, { T: () => u }), n(47120);
var r = n(192379),
    i = n(399606),
    o = n(55563),
    a = n(335131),
    s = n(597688),
    l = n(981631);
let c = 3600000;
function u(e) {
    let t = (0, i.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
        n = null != t && t.productLine !== l.POd.COLLECTIBLES,
        [u, d, f, _] = (0, i.Wu)([s.Z], () => [s.Z.isFetchingProduct(e), s.Z.getProduct(e), s.Z.getProductFetchError(e), s.Z.getProductFetchErrorTimestamp(e)]),
        p = null != f && null != _ && Date.now() - _ < c;
    return (
        (0, r.useEffect)(() => {
            null == e || null != d || n || u || p || (0, a.jr)(e);
        }, [e, d, n, u, p]),
        {
            product: d,
            isFetching: u
        }
    );
}
