"use strict";
n.d(t, { q: () => c });
var i = n(64700),
    r = n(575593),
    s = n(702841),
    a = n(67480),
    o = n(662388),
    l = n(590180),
    u = n(652215);
function c(e, t) {
    let n = (0, s.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        c = null != n && n.productLine !== u.EZt.COLLECTIBLES,
        [d, _] = (0, s.yK)([l.A], () => [l.A.getProduct(e), l.A.getProductFetch(e)]),
        h = (0, s.bG)([l.A], () => l.A.isProductFetchBackedOff(e)),
        f = !0 === t && d?.type === r.R.BUNDLE && 0 === d.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e || (null != d && !f) || c || _?.state === "fetching" || h || (0, o.Jp)(e, { includeBundles: t });
        }, [e, d, c, _, t, f, h]),
        { product: d, isFetching: _?.state === "fetching" }
    );
}
