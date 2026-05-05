l.d(t, { A: () => p });
var r = l(627968),
    n = l(64700),
    a = l(841702),
    s = l(575593),
    i = l(702841),
    c = l(67480),
    d = l(859040),
    o = l(590180),
    u = l(652215),
    m = l(217109);
let h = (e) => {
        let t,
            l,
            h,
            {
                skuIds: p = [],
                skuBlock: g = "ShopProductCard",
                skuBlockProps: E,
                sortPurchased: A = !1,
                showSkeleton: f = !1,
                componentMap: v,
                pagedSkuIds: T,
                page: x,
                perPage: S,
                truncate: y,
            } = e,
            j =
                ((t = (0, i.yK)([c.A], () => p.map((e) => c.A.get(e)))),
                (l = (0, i.yK)([o.A], () => p.map((e) => o.A.getProduct(e)))),
                (h = (0, i.yK)([o.A], () => p.map((e) => o.A.getProductFetch(e)))),
                (0, n.useEffect)(() => {
                    let e = Date.now();
                    for (let [r, n] of p.entries()) {
                        let a = t[r],
                            i = l[r],
                            c = h[r],
                            o = i?.type === s.R.BUNDLE && 0 === i.items.length,
                            m = c?.state === "error" && null != c.endedAt && e - c.endedAt < 36e5;
                        (null == i || o) &&
                            (null == a || a.productLine === u.EZt.COLLECTIBLES) &&
                            c?.state !== "fetching" &&
                            !m &&
                            (0, d.Jp)(n, { includeBundles: !0 });
                    }
                }, [p, t, h, l, !0]),
                l.some((e, t) => h[t]?.state === "fetching" || (null == e && h[t]?.state !== "error"))),
            { purchases: _, isFetching: C } = (0, a.b5)(),
            b = (0, n.useMemo)(() => {
                if (!A) return T;
                let e = [...p].sort((e, t) => (null != _.get(e)) - (null != _.get(t)));
                return (0, m.oP)(e, x, S, y);
            }, [p, T, A, _, x, S, y]),
            L = v[g],
            k = v.Skeleton;
        return null == L
            ? null
            : (j || (A && C)) && f
              ? b.map((e, t) =>
                    null != k
                        ? (0, r.jsx)(k, { children: (0, r.jsx)(L, { ...E, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : b.map((e, t) => (0, r.jsx)(L, { ...E, skuId: e, productId: e }, `${e}-${t}`));
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
                page: E,
                pages: A,
                paginate: f,
                showPagination: v,
                paginationPosition: T,
                truncate: x,
                perPage: S,
                setPage: y,
            } = (0, m.Wk)(t.length, p, g),
            j = (0, n.useMemo)(() => (0, m.oP)(t, f ? E : void 0, S, x), [t, f, E, S, x]),
            _ = v && "top" === T,
            C = v && "bottom" === T,
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
                    _ && (0, r.jsx)(m.hi, { page: E, pages: A, setPage: y }),
                    (0, r.jsx)(h, {
                        skuIds: t,
                        skuBlock: l,
                        skuBlockProps: a,
                        sortPurchased: s,
                        showSkeleton: c,
                        componentMap: d,
                        pagedSkuIds: j,
                        page: f ? E : void 0,
                        perPage: f ? S : void 0,
                        truncate: x,
                    }),
                    C && (0, r.jsx)(m.hi, { page: E, pages: A, setPage: y }),
                ],
            });
        let L = d[l];
        return null == L
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      b,
                      _ && (0, r.jsx)(m.hi, { page: E, pages: A, setPage: y }),
                      j.map((e, t) => (0, r.jsx)(L, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                      C && (0, r.jsx)(m.hi, { page: E, pages: A, setPage: y }),
                  ],
              });
    };
