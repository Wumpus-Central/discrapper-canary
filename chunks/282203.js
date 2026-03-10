t.d(l, { A: () => s });
var r = t(627968),
    n = t(64700),
    o = t(841702),
    i = t(672428);
let a = (e) => {
        let {
                skuIds: l = [],
                skuBlock: t = "ShopProductCard",
                skuBlockProps: a,
                sortPurchased: s = !1,
                showSkeleton: d = !1,
                componentMap: c,
            } = e,
            u = (0, i.D)(l, !0),
            { purchases: h, isFetching: m } = (0, o.b5)(),
            p = (0, n.useMemo)(
                () => (s ? [...l].sort((e, l) => (null != h.get(e)) - (null != h.get(l))) : l),
                [l, s, h],
            ),
            _ = c[t],
            T = c.Skeleton;
        return null == _
            ? null
            : (u || (s && m)) && d
              ? l.map((e, l) =>
                    null != T
                        ? (0, r.jsx)(T, { children: (0, r.jsx)(_, { ...a, skuId: e, productId: e }) }, `${e}-${l}`)
                        : null,
                )
              : p.map((e, l) => (0, r.jsx)(_, { ...a, skuId: e, productId: e }, `${e}-${l}`));
    },
    s = (e) => {
        let {
            skuIds: l = [],
            skuBlock: t = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: o = !1,
            eagerLoad: i = !1,
            showSkeleton: s = !1,
            componentMap: d,
        } = e;
        if (i || o)
            return (0, r.jsx)(a, {
                skuIds: l,
                skuBlock: t,
                skuBlockProps: n,
                sortPurchased: o,
                showSkeleton: s,
                componentMap: d,
            });
        let c = d[t];
        return null == c ? null : l.map((e, l) => (0, r.jsx)(c, { ...n, skuId: e, productId: e }, `${e}-${l}`));
    };
