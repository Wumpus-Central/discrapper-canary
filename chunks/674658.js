n.d(t, { q: () => d }), n(896048);
var r = n(64700),
    i = n(575593),
    a = n(417597),
    s = n(67480),
    o = n(979286),
    l = n(590180),
    c = n(652215);
let u = 3600000;
function d(e, t) {
    let n = (0, a.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
        d = null != n && n.productLine !== c.EZt.COLLECTIBLES,
        [f, p, _, h] = (0, a.yK)([l.A], () => [
            l.A.isFetchingProduct(e),
            l.A.getProduct(e),
            l.A.getProductFetchError(e),
            l.A.getProductFetchErrorTimestamp(e),
        ]),
        m = null != _ && null != h && Date.now() - h < u,
        g = !0 === t && (null == p ? void 0 : p.type) === i.R.BUNDLE && 0 === p.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != p && !g) || d || f || m || (0, o.Jp)(e, { includeBundles: t });
        }, [e, p, d, f, m, t, g]),
        {
            product: p,
            isFetching: f,
        }
    );
}
