var l = n(582128),
    r = n(575593),
    i = n(164636),
    a = n(67480),
    s = n(429811),
    u = n(590180),
    c = n(652215);
n.d(
    t,
    {},
    {
        D: function (e, t) {
            let n = (0, i.yK)([a.A], () => e.map((e) => a.A.get(e))),
                o = (0, i.yK)([u.A], () => e.map((e) => u.A.getProduct(e))),
                d = (0, i.yK)([u.A], () => e.map((e) => u.A.getProductFetch(e))),
                h = (0, i.yK)([u.A], () => e.map((e) => u.A.isProductFetchBackedOff(e)));
            return (
                (0, l.useEffect)(() => {
                    for (let [l, i] of e.entries()) {
                        let e = n[l],
                            a = o[l],
                            u = d[l],
                            f = !0 === t && a?.type === r.R.BUNDLE && 0 === a.items.length;
                        (null == a || f) &&
                            (null == e || e.productLine === c.EZt.COLLECTIBLES) &&
                            u?.state !== "fetching" &&
                            !h[l] &&
                            (0, s.Jp)(i, { includeBundles: t });
                    }
                }, [e, n, d, o, t, h]),
                o.some((e, t) => d[t]?.state === "fetching" || (null == e && d[t]?.state !== "error"))
            );
        },
    },
);
