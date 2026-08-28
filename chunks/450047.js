n.d(t, { D: () => c });
var l = n(582128),
    i = n(575593),
    r = n(702841),
    a = n(67480),
    s = n(839534),
    o = n(590180),
    u = n(652215);
function c(e, t) {
    let n = (0, r.yK)([a.A], () => e.map((e) => a.A.get(e))),
        c = (0, r.yK)([o.A], () => e.map((e) => o.A.getProduct(e))),
        d = (0, r.yK)([o.A], () => e.map((e) => o.A.getProductFetch(e))),
        m = (0, r.yK)([o.A], () => e.map((e) => o.A.isProductFetchBackedOff(e)));
    return (
        (0, l.useEffect)(() => {
            for (let [l, r] of e.entries()) {
                let e = n[l],
                    a = c[l],
                    o = d[l],
                    p = !0 === t && a?.type === i.R.BUNDLE && 0 === a.items.length;
                (null == a || p) &&
                    (null == e || e.productLine === u.EZt.COLLECTIBLES) &&
                    o?.state !== "fetching" &&
                    !m[l] &&
                    (0, s.Jp)(r, { includeBundles: t });
            }
        }, [e, n, d, c, t, m]),
        c.some((e, t) => d[t]?.state === "fetching" || (null == e && d[t]?.state !== "error"))
    );
}
