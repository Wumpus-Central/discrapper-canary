t.d(l, { A: () => d });
var r = t(627968),
    o = t(64700),
    n = t(841702),
    a = t(672428);
let i = (e) => {
        let {
                skuIds: l = [],
                skuBlock: t = "ShopProductCard",
                sortPurchased: i = !1,
                showSkeleton: d = !1,
                componentMap: c,
            } = e,
            s = (0, a.D)(l, !0),
            { purchases: u, isFetching: h } = (0, n.b5)(),
            m = (0, o.useMemo)(
                () => (i ? [...l].sort((e, l) => (null != u.get(e)) - (null != u.get(l))) : l),
                [l, i, u],
            ),
            p = c[t],
            b = c.Skeleton;
        return null == p
            ? null
            : (s || (i && h)) && d
              ? l.map((e, l) =>
                    null != b
                        ? (0, r.jsx)(b, { children: (0, r.jsx)(p, { skuId: e, productId: e }) }, `${e}-${l}`)
                        : null,
                )
              : m.map((e, l) => (0, r.jsx)(p, { skuId: e, productId: e }, `${e}-${l}`));
    },
    d = (e) => {
        let {
            skuIds: l = [],
            skuBlock: t = "ShopProductCard",
            sortPurchased: o = !1,
            eagerLoad: n = !1,
            showSkeleton: a = !1,
            componentMap: d,
        } = e;
        if (n || o)
            return (0, r.jsx)(i, { skuIds: l, skuBlock: t, sortPurchased: o, showSkeleton: a, componentMap: d });
        let c = d[t];
        return null == c ? null : l.map((e, l) => (0, r.jsx)(c, { skuId: e, productId: e }, `${e}-${l}`));
    };
