l.d(t, { A: () => p });
var r = l(627968),
    n = l(64700),
    a = l(841702),
    s = l(575593),
    i = l(702841),
    c = l(67480),
    d = l(693477),
    o = l(590180),
    u = l(652215),
    h = l(261225);
let m = (e) => {
        let t,
            l,
            m,
            {
                skuIds: p = [],
                skuBlock: g = "ShopProductCard",
                skuBlockProps: f,
                sortPurchased: v = !1,
                showSkeleton: A = !1,
                componentMap: E,
                pagedSkuIds: x,
                page: y,
                perPage: C,
                truncate: S,
            } = e,
            T =
                ((t = (0, i.yK)([c.A], () => p.map((e) => c.A.get(e)))),
                (l = (0, i.yK)([o.A], () => p.map((e) => o.A.getProduct(e)))),
                (m = (0, i.yK)([o.A], () => p.map((e) => o.A.getProductFetch(e)))),
                (0, n.useEffect)(() => {
                    let e = Date.now();
                    for (let [r, n] of p.entries()) {
                        let a = t[r],
                            i = l[r],
                            c = m[r],
                            o = i?.type === s.R.BUNDLE && 0 === i.items.length,
                            h = c?.state === "error" && null != c.endedAt && e - c.endedAt < 36e5;
                        (null == i || o) &&
                            (null == a || a.productLine === u.EZt.COLLECTIBLES) &&
                            c?.state !== "fetching" &&
                            !h &&
                            (0, d.Jp)(n, { includeBundles: !0 });
                    }
                }, [p, t, m, l, !0]),
                l.some((e, t) => m[t]?.state === "fetching" || (null == e && m[t]?.state !== "error"))),
            { purchases: j, isFetching: _ } = (0, a.b5)(),
            b = (0, n.useMemo)(() => {
                if (!v) return x;
                let e = [...p].sort((e, t) => (null != j.get(e)) - (null != j.get(t)));
                return (0, h.oP)(e, y, C, S);
            }, [p, x, v, j, y, C, S]),
            k = E[g],
            L = E.Skeleton;
        return null == k
            ? null
            : (T || (v && _)) && A
              ? b.map((e, t) =>
                    null != L
                        ? (0, r.jsx)(L, { children: (0, r.jsx)(k, { ...f, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : b.map((e, t) => (0, r.jsx)(k, { ...f, skuId: e, productId: e }, `${e}-${t}`));
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
            u = (0, h.JZ)(),
            p = o ?? u,
            g = n.useRef(null),
            {
                page: f,
                pages: v,
                paginate: A,
                showPagination: E,
                paginationPosition: x,
                truncate: y,
                perPage: C,
                setPage: S,
            } = (0, h.Wk)(t.length, p, g),
            T = (0, n.useMemo)(() => (0, h.oP)(t, A ? f : void 0, C, y), [t, A, f, C, y]),
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
                    j && (0, r.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                    (0, r.jsx)(m, {
                        skuIds: t,
                        skuBlock: l,
                        skuBlockProps: a,
                        sortPurchased: s,
                        showSkeleton: c,
                        componentMap: d,
                        pagedSkuIds: T,
                        page: A ? f : void 0,
                        perPage: A ? C : void 0,
                        truncate: y,
                    }),
                    _ && (0, r.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                ],
            });
        let k = d[l];
        return null == k
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      b,
                      j && (0, r.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                      T.map((e, t) => (0, r.jsx)(k, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                      _ && (0, r.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                  ],
              });
    };
