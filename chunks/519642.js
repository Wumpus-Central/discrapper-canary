l.d(t, { A: () => h });
var r = l(627968),
    n = l(64700),
    a = l(841702),
    s = l(575593),
    c = l(702841),
    i = l(67480),
    d = l(803375),
    o = l(590180),
    u = l(652215);
let m = (e) => {
        let t,
            l,
            m,
            h,
            p,
            {
                skuIds: A = [],
                skuBlock: f = "ShopProductCard",
                skuBlockProps: E,
                sortPurchased: g = !1,
                showSkeleton: v = !1,
                componentMap: x,
            } = e,
            y =
                ((t = (0, c.yK)([i.A], () => A.map((e) => i.A.get(e)))),
                (l = (0, c.yK)([o.A], () => A.map((e) => o.A.isFetchingProduct(e)))),
                (m = (0, c.yK)([o.A], () => A.map((e) => o.A.getProduct(e)))),
                (h = (0, c.yK)([o.A], () => A.map((e) => o.A.getProductFetchError(e)))),
                (p = (0, c.yK)([o.A], () => A.map((e) => o.A.getProductFetchErrorTimestamp(e)))),
                (0, n.useEffect)(() => {
                    let e = Date.now();
                    for (let [r, n] of A.entries()) {
                        let a = t[r],
                            c = m[r],
                            i = l[r],
                            o = h[r],
                            A = p[r],
                            f = c?.type === s.R.BUNDLE && 0 === c.items.length,
                            E = null != o && null != A && e - A < 36e5;
                        (null != c && !f) ||
                            (null != a && a.productLine !== u.EZt.COLLECTIBLES) ||
                            i ||
                            E ||
                            (0, d.Jp)(n, { includeBundles: !0 });
                    }
                }, [A, t, l, m, h, p, !0]),
                m.some((e, t) => l[t] || (null == e && null == h[t]))),
            { purchases: C, isFetching: S } = (0, a.b5)(),
            T = (0, n.useMemo)(
                () => (g ? [...A].sort((e, t) => (null != C.get(e)) - (null != C.get(t))) : A),
                [A, g, C],
            ),
            j = x[f],
            _ = x.Skeleton;
        return null == j
            ? null
            : (y || (g && S)) && v
              ? A.map((e, t) =>
                    null != _
                        ? (0, r.jsx)(_, { children: (0, r.jsx)(j, { ...E, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : T.map((e, t) => (0, r.jsx)(j, { ...E, skuId: e, productId: e }, `${e}-${t}`));
    },
    h = (e) => {
        let {
            skuIds: t = [],
            skuBlock: l = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: a = !1,
            eagerLoad: s = !1,
            showSkeleton: c = !1,
            componentMap: i,
        } = e;
        if (s || a)
            return (0, r.jsx)(m, {
                skuIds: t,
                skuBlock: l,
                skuBlockProps: n,
                sortPurchased: a,
                showSkeleton: c,
                componentMap: i,
            });
        let d = i[l];
        return null == d ? null : t.map((e, t) => (0, r.jsx)(d, { ...n, skuId: e, productId: e }, `${e}-${t}`));
    };
