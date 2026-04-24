l.d(t, { A: () => g });
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
function h(e, t, l, r) {
    return null == t || null == l ? e : r ? e.slice(0, l) : e.slice(l * t, l * (t + 1));
}
let p = (e) => {
        let t,
            l,
            m,
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
                (m = (0, i.yK)([o.A], () => f.map((e) => o.A.getProduct(e)))),
                (p = (0, i.yK)([o.A], () => f.map((e) => o.A.getProductFetchError(e)))),
                (g = (0, i.yK)([o.A], () => f.map((e) => o.A.getProductFetchErrorTimestamp(e)))),
                (0, n.useEffect)(() => {
                    let e = Date.now();
                    for (let [r, n] of f.entries()) {
                        let a = t[r],
                            i = m[r],
                            c = l[r],
                            o = p[r],
                            h = g[r],
                            f = i?.type === s.R.BUNDLE && 0 === i.items.length,
                            A = null != o && null != h && e - h < 36e5;
                        (null != i && !f) ||
                            (null != a && a.productLine !== u.EZt.COLLECTIBLES) ||
                            c ||
                            A ||
                            (0, d.Jp)(n, { includeBundles: !0 });
                    }
                }, [f, t, l, m, p, g, !0]),
                m.some((e, t) => l[t] || (null == e && null == p[t]))),
            { purchases: b, isFetching: k } = (0, a.b5)(),
            L = (0, n.useMemo)(
                () =>
                    E
                        ? h(
                              [...f].sort((e, t) => (null != b.get(e)) - (null != b.get(t))),
                              S,
                              T,
                              j,
                          )
                        : C,
                [f, C, E, b, S, T, j],
            ),
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
    g = (e) => {
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
            g = o ?? u,
            f = n.useRef(null),
            {
                page: A,
                pages: v,
                paginate: E,
                showPagination: x,
                paginationPosition: y,
                truncate: C,
                perPage: S,
                setPage: T,
            } = (0, m.Wk)(t.length, g, f),
            j = (0, n.useMemo)(() => h(t, E ? A : void 0, S, C), [t, E, A, S, C]),
            _ = x && "top" === y,
            b = x && "bottom" === y,
            k = null != g ? (0, r.jsx)("div", { ref: f, style: { gridColumn: "1 / -1", height: 0 } }) : null;
        if (i || s)
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    k,
                    _ && (0, r.jsx)(m.hi, { page: A, pages: v, setPage: T }),
                    (0, r.jsx)(p, {
                        skuIds: t,
                        skuBlock: l,
                        skuBlockProps: a,
                        sortPurchased: s,
                        showSkeleton: c,
                        componentMap: d,
                        pagedSkuIds: j,
                        page: E ? A : void 0,
                        perPage: E ? S : void 0,
                        truncate: C,
                    }),
                    b && (0, r.jsx)(m.hi, { page: A, pages: v, setPage: T }),
                ],
            });
        let L = d[l];
        return null == L
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      k,
                      _ && (0, r.jsx)(m.hi, { page: A, pages: v, setPage: T }),
                      j.map((e, t) => (0, r.jsx)(L, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                      b && (0, r.jsx)(m.hi, { page: A, pages: v, setPage: T }),
                  ],
              });
    };
