n.d(t, { T: () => c }), n(47120);
var i = n(192379),
    r = n(399606),
    a = n(55563),
    s = n(335131),
    o = n(597688),
    l = n(981631);
let u = 3600000;
function c(e) {
    let t = (0, r.e7)([a.Z], () => (null != e ? a.Z.get(e) : null)),
        n = null != t && t.productLine !== l.POd.COLLECTIBLES,
        [c, d, f, _] = (0, r.Wu)([o.Z], () => [o.Z.isFetchingProduct(e), o.Z.getProduct(e), o.Z.getProductFetchError(e), o.Z.getProductFetchErrorTimestamp(e)]),
        p = null != f && null != _ && Date.now() - _ < u;
    return (
        (0, i.useEffect)(() => {
            null != e && null == d && !n && !c && !p && (0, s.jr)(e);
        }, [e, d, n, c, p]),
        {
            product: d,
            isFetching: c
        }
    );
}
