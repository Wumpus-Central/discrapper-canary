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
        [f, p, _, m] = (0, a.Wu)([l.Z], () => [
            l.Z.isFetchingProduct(e),
            l.Z.getProduct(e),
            l.Z.getProductFetchError(e),
            l.Z.getProductFetchErrorTimestamp(e),
        ]),
        h = null != _ && null != m && Date.now() - m < u,
        g = !0 === t && (null == p ? void 0 : p.type) === i.Z.BUNDLE && 0 === p.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != p && !g) || d || f || h || (0, s.jr)(e, { includeBundles: t });
        }, [e, p, d, f, h, t, g]),
        {
            product: p,
            isFetching: f,
        }
    );
}
