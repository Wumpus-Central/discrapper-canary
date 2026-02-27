t.d(l, { D: () => s });
var r = t(64700),
    o = t(575593),
    n = t(417597),
    a = t(67480),
    i = t(979286),
    d = t(590180),
    c = t(652215);
function s(e, l) {
    let t = (0, n.yK)([a.A], () => e.map((e) => a.A.get(e))),
        s = (0, n.yK)([d.A], () => e.map((e) => d.A.isFetchingProduct(e))),
        u = (0, n.yK)([d.A], () => e.map((e) => d.A.getProduct(e))),
        h = (0, n.yK)([d.A], () => e.map((e) => d.A.getProductFetchError(e))),
        m = (0, n.yK)([d.A], () => e.map((e) => d.A.getProductFetchErrorTimestamp(e)));
    return (
        (0, r.useEffect)(() => {
            let r = Date.now();
            for (let [n, a] of e.entries()) {
                let e = t[n],
                    d = u[n],
                    p = s[n],
                    b = h[n],
                    C = m[n],
                    g = !0 === l && d?.type === o.R.BUNDLE && 0 === d.items.length,
                    k = null != b && null != C && r - C < 36e5;
                (null != d && !g) ||
                    (null != e && e.productLine !== c.EZt.COLLECTIBLES) ||
                    p ||
                    k ||
                    (0, i.Jp)(a, { includeBundles: l });
            }
        }, [e, t, s, u, h, m, l]),
        u.some((e, l) => s[l] || (null == e && null == h[l]))
    );
}
