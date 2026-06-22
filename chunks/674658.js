"use strict";
n.d(t, { q: () => d });
var i = n(64700),
    r = n(575593),
    s = n(702841),
    a = n(67480),
    o = n(564064),
    l = n(590180),
    u = n(758836),
    c = n(652215);
function d(e, t) {
    let n = (0, s.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        d = null != n && n.productLine !== c.EZt.COLLECTIBLES,
        [_, h] = (0, s.yK)([l.A], () => [l.A.getProduct(e), l.A.getProductFetch(e)]),
        f = !0 === t && _?.type === r.R.BUNDLE && 0 === _.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e ||
                (null != _ && !f) ||
                d ||
                h?.state === "fetching" ||
                (h?.state === "error" && null != h.endedAt && Date.now() - h.endedAt < u.Gj) ||
                (0, o.Jp)(e, { includeBundles: t });
        }, [e, _, d, h, t, f]),
        { product: _, isFetching: h?.state === "fetching" }
    );
}
