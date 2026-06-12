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
    h = l(217109);
let m = (e) => {
        let t,
            l,
            m,
            {
                skuIds: p = [],
                skuBlock: g = "ShopProductCard",
                skuBlockProps: E,
                sortPurchased: f = !1,
                showSkeleton: A = !1,
                componentMap: v,
                pagedSkuIds: x,
                page: T,
                perPage: S,
                truncate: y,
            } = e,
            j =
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
            { purchases: _, isFetching: C } = (0, a.b5)(),
            L = (0, n.useMemo)(() => {
                if (!f) return x;
                let e = [...p].sort((e, t) => (null != _.get(e)) - (null != _.get(t)));
                return (0, h.oP)(e, T, S, y);
            }, [p, x, f, _, T, S, y]),
            b = v[g],
            k = v.Skeleton;
        return null == b
            ? null
            : (j || (f && C)) && A
              ? L.map((e, t) =>
                    null != k
                        ? (0, r.jsx)(k, { children: (0, r.jsx)(b, { ...E, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : L.map((e, t) => (0, r.jsx)(b, { ...E, skuId: e, productId: e }, `${e}-${t}`));
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
                page: E,
                pages: f,
                paginate: A,
                showPagination: v,
                paginationPosition: x,
                truncate: T,
                perPage: S,
                setPage: y,
            } = (0, h.Wk)(t.length, p, g),
            j = (0, n.useMemo)(() => (0, h.oP)(t, A ? E : void 0, S, T), [t, A, E, S, T]),
            _ = v && "top" === x,
            C = v && "bottom" === x,
            L =
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
                    L,
                    _ && (0, r.jsx)(h.hi, { page: E, pages: f, setPage: y }),
                    (0, r.jsx)(m, {
                        skuIds: t,
                        skuBlock: l,
                        skuBlockProps: a,
                        sortPurchased: s,
                        showSkeleton: c,
                        componentMap: d,
                        pagedSkuIds: j,
                        page: A ? E : void 0,
                        perPage: A ? S : void 0,
                        truncate: T,
                    }),
                    C && (0, r.jsx)(h.hi, { page: E, pages: f, setPage: y }),
                ],
            });
        let b = d[l];
        return null == b
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L,
                      _ && (0, r.jsx)(h.hi, { page: E, pages: f, setPage: y }),
                      j.map((e, t) => (0, r.jsx)(b, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                      C && (0, r.jsx)(h.hi, { page: E, pages: f, setPage: y }),
                  ],
              });
    };
