"use strict";
n.d(t, { q: () => c });
var i = n(64700),
    r = n(575593),
    s = n(702841),
    a = n(67480),
    o = n(564064),
    l = n(590180),
    u = n(652215);
function c(e, t) {
    let n = (0, s.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        c = null != n && n.productLine !== u.EZt.COLLECTIBLES,
        [d, _] = (0, s.yK)([l.A], () => [l.A.getProduct(e), l.A.getProductFetch(e)]),
        h = !0 === t && d?.type === r.R.BUNDLE && 0 === d.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e ||
                (null != d && !h) ||
                c ||
                _?.state === "fetching" ||
                (_?.state === "error" && null != _.endedAt && Date.now() - _.endedAt < 36e5) ||
                (0, o.Jp)(e, { includeBundles: t });
        }, [e, d, c, _, t, h]),
        { product: d, isFetching: _?.state === "fetching" }
    );
}
