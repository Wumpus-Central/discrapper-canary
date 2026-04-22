l.d(t, { D: () => o });
var r = l(64700),
    n = l(575593),
    a = l(417597),
    s = l(67480),
    c = l(979286),
    i = l(590180),
    d = l(652215);
function o(e, t) {
    let l = (0, a.yK)([s.A], () => e.map((e) => s.A.get(e))),
        o = (0, a.yK)([i.A], () => e.map((e) => i.A.isFetchingProduct(e))),
        u = (0, a.yK)([i.A], () => e.map((e) => i.A.getProduct(e))),
        m = (0, a.yK)([i.A], () => e.map((e) => i.A.getProductFetchError(e))),
        h = (0, a.yK)([i.A], () => e.map((e) => i.A.getProductFetchErrorTimestamp(e)));
    return (
        (0, r.useEffect)(() => {
            let r = Date.now();
            for (let [a, s] of e.entries()) {
                let e = l[a],
                    i = u[a],
                    p = o[a],
                    A = m[a],
                    E = h[a],
                    f = !0 === t && i?.type === n.R.BUNDLE && 0 === i.items.length,
                    g = null != A && null != E && r - E < 36e5;
                (null != i && !f) ||
                    (null != e && e.productLine !== d.EZt.COLLECTIBLES) ||
                    p ||
                    g ||
                    (0, c.Jp)(s, { includeBundles: t });
            }
        }, [e, l, o, u, m, h, t]),
        u.some((e, t) => o[t] || (null == e && null == m[t]))
    );
}
