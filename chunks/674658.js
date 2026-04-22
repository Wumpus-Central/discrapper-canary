"use strict";
n.d(t, { q: () => d });
var r = n(64700),
    i = n(575593),
    s = n(417597),
    a = n(67480),
    o = n(979286),
    l = n(590180),
    u = n(652215);
function d(e, t) {
    let n = (0, s.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
        d = null != n && n.productLine !== u.EZt.COLLECTIBLES,
        [c, _, f, E] = (0, s.yK)([l.A], () => [
            l.A.isFetchingProduct(e),
            l.A.getProduct(e),
            l.A.getProductFetchError(e),
            l.A.getProductFetchErrorTimestamp(e),
        ]),
        h = null != f && null != E && Date.now() - E < 36e5,
        p = !0 === t && _?.type === i.R.BUNDLE && 0 === _.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != _ && !p) || d || c || h || (0, o.Jp)(e, { includeBundles: t });
        }, [e, _, d, c, h, t, p]),
        { product: _, isFetching: c }
    );
}
