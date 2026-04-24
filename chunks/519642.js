l.d(t, { A: () => p });
var r = l(627968),
    n = l(64700),
    a = l(841702),
    s = l(575593),
    i = l(702841),
    c = l(67480),
    d = l(29292),
    o = l(590180),
    u = l(652215),
    m = l(261225);
let h = (e) => {
        let t,
            l,
            h,
            p,
            g,
            {
                skuIds: f = [],
                skuBlock: A = "ShopProductCard",
                skuBlockProps: v,
                sortPurchased: E = !1,
                showSkeleton: x = !1,
                componentMap: y,
                pagedSkuIds: C,
                page: S,
                perPage: T,
                truncate: j,
            } = e,
            _ =
                ((t = (0, i.yK)([c.A], () => f.map((e) => c.A.get(e)))),
                (l = (0, i.yK)([o.A], () => f.map((e) => o.A.isFetchingProduct(e)))),
                (h = (0, i.yK)([o.A], () => f.map((e) => o.A.getProduct(e)))),
                (p = (0, i.yK)([o.A], () => f.map((e) => o.A.getProductFetchError(e)))),
                (g = (0, i.yK)([o.A], () => f.map((e) => o.A.getProductFetchErrorTimestamp(e)))),
                (0, n.useEffect)(() => {
                    let e = Date.now();
                    for (let [r, n] of f.entries()) {
                        let a = t[r],
                            i = h[r],
                            c = l[r],
                            o = p[r],
                            m = g[r],
                            f = i?.type === s.R.BUNDLE && 0 === i.items.length,
                            A = null != o && null != m && e - m < 36e5;
                        (null != i && !f) ||
                            (null != a && a.productLine !== u.EZt.COLLECTIBLES) ||
                            c ||
                            A ||
                            (0, d.Jp)(n, { includeBundles: !0 });
                    }
                }, [f, t, l, h, p, g, !0]),
                h.some((e, t) => l[t] || (null == e && null == p[t]))),
            { purchases: b, isFetching: k } = (0, a.b5)(),
            L = (0, n.useMemo)(() => {
                if (!E) return C;
                let e = [...f].sort((e, t) => (null != b.get(e)) - (null != b.get(t)));
                return (0, m.oP)(e, S, T, j);
            }, [f, C, E, b, S, T, j]),
            I = y[A],
            O = y.Skeleton;
        return null == I
            ? null
            : (_ || (E && k)) && x
              ? L.map((e, t) =>
                    null != O
                        ? (0, r.jsx)(O, { children: (0, r.jsx)(I, { ...v, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : L.map((e, t) => (0, r.jsx)(I, { ...v, skuId: e, productId: e }, `${e}-${t}`));
    },
    p = (e) => {
        let {
                skuIds: t = [],
                skuBlock: l = "ShopProductCard",
                skuBlockProps: a,
                sortPurchased: s = !1,
                eagerLoad: i = !1,
                showSkeleton: c = !1,
                componentMap: d,
                paginationOptions: o,
            } = e,
            u = (0, m.JZ)(),
            p = o ?? u,
            g = n.useRef(null),
            {
                page: f,
                pages: A,
                paginate: v,
                showPagination: E,
                paginationPosition: x,
                truncate: y,
                perPage: C,
                setPage: S,
            } = (0, m.Wk)(t.length, p, g),
            T = (0, n.useMemo)(() => (0, m.oP)(t, v ? f : void 0, C, y), [t, v, f, C, y]),
            j = E && "top" === x,
            _ = E && "bottom" === x,
            b =
                null != p
                    ? (0, r.jsx)("div", {
                          ref: g,
                          "aria-hidden": "true",
                          style: { position: "absolute", top: 0, height: 0 },
                      })
                    : null;
        if (i || s)
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    b,
                    j && (0, r.jsx)(m.hi, { page: f, pages: A, setPage: S }),
                    (0, r.jsx)(h, {
                        skuIds: t,
                        skuBlock: l,
                        skuBlockProps: a,
                        sortPurchased: s,
                        showSkeleton: c,
                        componentMap: d,
                        pagedSkuIds: T,
                        page: v ? f : void 0,
                        perPage: v ? C : void 0,
                        truncate: y,
                    }),
                    _ && (0, r.jsx)(m.hi, { page: f, pages: A, setPage: S }),
                ],
            });
        let k = d[l];
        return null == k
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      b,
                      j && (0, r.jsx)(m.hi, { page: f, pages: A, setPage: S }),
                      T.map((e, t) => (0, r.jsx)(k, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                      _ && (0, r.jsx)(m.hi, { page: f, pages: A, setPage: S }),
                  ],
              });
    };
