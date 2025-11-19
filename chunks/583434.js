n.d(t, { T: () => d }), n(388685);
var r = n(473749),
    i = n(979554),
    a = n(399606),
    o = n(55563),
    s = n(335131),
    l = n(597688),
    c = n(981631);
let u = 3600000;
function d(e, t) {
    let n = (0, a.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
        d = null != n && n.productLine !== c.POd.COLLECTIBLES,
        [f, _, p, h] = (0, a.Wu)([l.Z], () => [
            l.Z.isFetchingProduct(e),
            l.Z.getProduct(e),
            l.Z.getProductFetchError(e),
            l.Z.getProductFetchErrorTimestamp(e),
        ]),
        m = null != p && null != h && Date.now() - h < u,
        g = !0 === t && (null == _ ? void 0 : _.type) === i.Z.BUNDLE && 0 === _.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != _ && !g) || d || f || m || (0, s.jr)(e, { includeBundles: t });
        }, [e, _, d, f, m, t, g]),
        {
            product: _,
            isFetching: f,
        }
    );
}
