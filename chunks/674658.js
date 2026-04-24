"use strict";
n.d(t, { q: () => _ });
var i = n(64700),
    r = n(575593),
    s = n(702841),
    a = n(67480),
    o = n(29292),
    l = n(590180),
    d = n(652215);
function _(e, t) {
    let n = (0, s.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        _ = null != n && n.productLine !== d.EZt.COLLECTIBLES,
        [u, c, E, h] = (0, s.yK)([l.A], () => [
            l.A.isFetchingProduct(e),
            l.A.getProduct(e),
            l.A.getProductFetchError(e),
            l.A.getProductFetchErrorTimestamp(e),
        ]),
        m = null != E && null != h && Date.now() - h < 36e5,
        f = !0 === t && c?.type === r.R.BUNDLE && 0 === c.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e || (null != c && !f) || _ || u || m || (0, o.Jp)(e, { includeBundles: t });
        }, [e, c, _, u, m, t, f]),
        { product: c, isFetching: u }
    );
}
