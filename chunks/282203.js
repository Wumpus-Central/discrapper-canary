l.d(t, { A: () => i });
var r = l(627968),
    n = l(64700),
    a = l(841702),
    s = l(450047);
let c = (e) => {
        let {
                skuIds: t = [],
                skuBlock: l = "ShopProductCard",
                skuBlockProps: c,
                sortPurchased: i = !1,
                showSkeleton: d = !1,
                componentMap: o,
            } = e,
            u = (0, s.D)(t, !0),
            { purchases: m, isFetching: h } = (0, a.b5)(),
            p = (0, n.useMemo)(
                () => (i ? [...t].sort((e, t) => (null != m.get(e)) - (null != m.get(t))) : t),
                [t, i, m],
            ),
            A = o[l],
            f = o.Skeleton;
        return null == A
            ? null
            : (u || (i && h)) && d
              ? t.map((e, t) =>
                    null != f
                        ? (0, r.jsx)(f, { children: (0, r.jsx)(A, { ...c, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : p.map((e, t) => (0, r.jsx)(A, { ...c, skuId: e, productId: e }, `${e}-${t}`));
    },
    i = (e) => {
        let {
            skuIds: t = [],
            skuBlock: l = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: a = !1,
            eagerLoad: s = !1,
            showSkeleton: i = !1,
            componentMap: d,
        } = e;
        if (s || a)
            return (0, r.jsx)(c, {
                skuIds: t,
                skuBlock: l,
                skuBlockProps: n,
                sortPurchased: a,
                showSkeleton: i,
                componentMap: d,
            });
        let o = d[l];
        return null == o ? null : t.map((e, t) => (0, r.jsx)(o, { ...n, skuId: e, productId: e }, `${e}-${t}`));
    };
