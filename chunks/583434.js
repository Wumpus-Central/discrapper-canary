n.d(t, { T: () => u }), n(388685);
var r = n(647438),
    i = n(399606),
    a = n(55563),
    o = n(335131),
    s = n(597688),
    l = n(981631);
let c = 3600000;
function u(e, t) {
    let n = (0, i.e7)([a.Z], () => (null != e ? a.Z.get(e) : null)),
        u = null != n && n.productLine !== l.POd.COLLECTIBLES,
        [d, f, _, p] = (0, i.Wu)([s.Z], () => [
            s.Z.isFetchingProduct(e),
            s.Z.getProduct(e),
            s.Z.getProductFetchError(e),
            s.Z.getProductFetchErrorTimestamp(e),
        ]),
        h = null != _ && null != p && Date.now() - p < c;
    return (
        (0, r.useEffect)(() => {
            null == e || null != f || u || d || h || (0, o.jr)(e, t);
        }, [e, f, u, d, h, t]),
        {
            product: f,
            isFetching: d,
        }
    );
}
