"use strict";
n.d(t, { q: () => d });
var r = n(64700),
    i = n(575593),
    a = n(417597),
    s = n(67480),
    o = n(979286),
    l = n(590180),
    u = n(652215);
let c = 36e5;
function d(e, t) {
    let n = (0, a.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
        d = null != n && n.productLine !== u.EZt.COLLECTIBLES,
        [_, f, p, h] = (0, a.yK)([l.A], () => [
            l.A.isFetchingProduct(e),
            l.A.getProduct(e),
            l.A.getProductFetchError(e),
            l.A.getProductFetchErrorTimestamp(e),
        ]),
        m = null != p && null != h && Date.now() - h < c,
        g = !0 === t && f?.type === i.R.BUNDLE && 0 === f.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != f && !g) || d || _ || m || (0, o.Jp)(e, { includeBundles: t });
        }, [e, f, d, _, m, t, g]),
        { product: f, isFetching: _ }
    );
}
