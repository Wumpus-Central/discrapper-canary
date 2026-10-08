n.d(t, { D: () => c });
var r = n(582128),
    l = n(575593),
    i = n(702841),
    s = n(67480),
    a = n(815996),
    u = n(590180),
    o = n(652215);
function c(e, t) {
    let n = (0, i.yK)([s.A], () => e.map((e) => s.A.get(e))),
        c = (0, i.yK)([u.A], () => e.map((e) => u.A.getProduct(e))),
        d = (0, i.yK)([u.A], () => e.map((e) => u.A.getProductFetch(e))),
        f = (0, i.yK)([u.A], () => e.map((e) => u.A.isProductFetchBackedOff(e)));
    return (
        (0, r.useEffect)(() => {
            for (let [r, i] of e.entries()) {
                let e = n[r],
                    s = c[r],
                    u = d[r],
                    h = !0 === t && s?.type === l.R.BUNDLE && 0 === s.items.length;
                (null == s || h) &&
                    (null == e || e.productLine === o.EZt.COLLECTIBLES) &&
                    u?.state !== "fetching" &&
                    !f[r] &&
                    (0, a.Jp)(i, { includeBundles: t });
            }
        }, [e, n, d, c, t, f]),
        c.some((e, t) => d[t]?.state === "fetching" || (null == e && d[t]?.state !== "error"))
    );
}
