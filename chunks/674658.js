var u = c(582128),
    n = c(575593),
    i = c(164636),
    s = c(67480),
    l = c(969935),
    h = c(590180),
    d = c(652215);
c.d(
    e,
    {},
    {
        q: function (t, e) {
            let c = (0, i.bG)([s.A], () => (null != t ? s.A.get(t) : null)),
                p = null != c && c.productLine !== d.EZt.COLLECTIBLES,
                [r, a] = (0, i.yK)([h.A], () => [h.A.getProduct(t), h.A.getProductFetch(t)]),
                f = (0, i.bG)([h.A], () => h.A.isProductFetchBackedOff(t)),
                g = !0 === e && r?.type === n.R.BUNDLE && 0 === r.items.length;
            return (
                (0, u.useEffect)(() => {
                    null == t ||
                        (null != r && !g) ||
                        p ||
                        a?.state === "fetching" ||
                        f ||
                        (0, l.Jp)(t, { includeBundles: e });
                }, [t, r, p, a, e, g, f]),
                { product: r, isFetching: a?.state === "fetching" }
            );
        },
    },
);
