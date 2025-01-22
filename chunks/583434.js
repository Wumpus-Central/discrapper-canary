r.d(n, {
    T: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(399606),
    s = r(55563),
    l = r(335131),
    u = r(597688),
    c = r(981631);
let d = 3600000;
function f(e) {
    let n = (0, o.e7)([s.Z], () => (null != e ? s.Z.get(e) : null)),
        r = null != n && n.productLine !== c.POd.COLLECTIBLES,
        [i, f, p, h] = (0, o.Wu)([u.Z], () => [u.Z.isFetchingProduct(e), u.Z.getProduct(e), u.Z.getProductFetchError(e), u.Z.getProductFetchErrorTimestamp(e)]),
        _ = null != p && null != h && Date.now() - h < d;
    return (
        (0, a.useEffect)(() => {
            if (null != e && null == f && !r && !i && !_) (0, l.jr)(e);
        }, [e, f, r, i, _]),
        {
            product: f,
            isFetching: i
        }
    );
}
