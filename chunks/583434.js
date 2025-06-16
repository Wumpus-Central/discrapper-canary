n.d(t, { T: () => u }), n(388685);
var r = n(73800),
    i = n(399606),
    a = n(55563),
    o = n(335131),
    s = n(597688),
    l = n(981631);
let c = 3600000;
function u(e) {
    let t = (0, i.e7)([a.Z], () => (null != e ? a.Z.get(e) : null)),
        n = null != t && t.productLine !== l.POd.COLLECTIBLES,
        [u, d, f, _] = (0, i.Wu)([s.Z], () => [s.Z.isFetchingProduct(e), s.Z.getProduct(e), s.Z.getProductFetchError(e), s.Z.getProductFetchErrorTimestamp(e)]),
        p = null != f && null != _ && Date.now() - _ < c;
    return (
        (0, r.useEffect)(() => {
            null == e || null != d || n || u || p || (0, o.jr)(e);
        }, [e, d, n, u, p]),
        {
            product: d,
            isFetching: u
        }
    );
}
