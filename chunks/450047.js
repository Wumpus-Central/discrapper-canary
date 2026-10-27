n.d(t, { D: () => o });
var l = n(582128),
    r = n(575593),
    i = n(702841),
    a = n(67480),
    s = n(815996),
    u = n(590180),
    c = n(652215);
function o(e, t) {
    let n = (0, i.yK)([a.A], () => e.map((e) => a.A.get(e))),
        o = (0, i.yK)([u.A], () => e.map((e) => u.A.getProduct(e))),
        d = (0, i.yK)([u.A], () => e.map((e) => u.A.getProductFetch(e))),
        f = (0, i.yK)([u.A], () => e.map((e) => u.A.isProductFetchBackedOff(e)));
    return (
        (0, l.useEffect)(() => {
            for (let [l, i] of e.entries()) {
                let e = n[l],
                    a = o[l],
                    u = d[l],
                    h = !0 === t && a?.type === r.R.BUNDLE && 0 === a.items.length;
                (null == a || h) &&
                    (null == e || e.productLine === c.EZt.COLLECTIBLES) &&
                    u?.state !== "fetching" &&
                    !f[l] &&
                    (0, s.Jp)(i, { includeBundles: t });
            }
        }, [e, n, d, o, t, f]),
        o.some((e, t) => d[t]?.state === "fetching" || (null == e && d[t]?.state !== "error"))
    );
}
