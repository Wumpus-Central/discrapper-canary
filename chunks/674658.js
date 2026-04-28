"use strict";
n.d(t, { q: () => d });
var i = n(64700),
    r = n(575593),
    s = n(702841),
    a = n(67480),
    o = n(693477),
    l = n(590180),
    _ = n(652215);
function d(e, t) {
    let n = (0, s.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        d = null != n && n.productLine !== _.EZt.COLLECTIBLES,
        [u, c] = (0, s.yK)([l.A], () => [l.A.getProduct(e), l.A.getProductFetch(e)]),
        E = !0 === t && u?.type === r.R.BUNDLE && 0 === u.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e ||
                (null != u && !E) ||
                d ||
                c?.state === "fetching" ||
                (c?.state === "error" && null != c.endedAt && Date.now() - c.endedAt < 36e5) ||
                (0, o.Jp)(e, { includeBundles: t });
        }, [e, u, d, c, t, E]),
        { product: u, isFetching: c?.state === "fetching" }
    );
}
