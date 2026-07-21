"use strict";
n.d(t, { q: () => c });
var i = n(64700),
    r = n(575593),
    a = n(702841),
    s = n(67480),
    l = n(34332),
    o = n(590180),
    d = n(652215);
function c(e, t) {
    let n = (0, a.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
        c = null != n && n.productLine !== d.EZt.COLLECTIBLES,
        [u, _] = (0, a.yK)([o.A], () => [o.A.getProduct(e), o.A.getProductFetch(e)]),
        E = (0, a.bG)([o.A], () => o.A.isProductFetchBackedOff(e)),
        A = !0 === t && u?.type === r.R.BUNDLE && 0 === u.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e || (null != u && !A) || c || _?.state === "fetching" || E || (0, l.Jp)(e, { includeBundles: t });
        }, [e, u, c, _, t, A, E]),
        { product: u, isFetching: _?.state === "fetching" }
    );
}
