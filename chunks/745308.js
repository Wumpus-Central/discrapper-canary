l.d(t, { A: () => g });
var r = l(627968),
    n = l(64700),
    a = l(841702),
    s = l(575593),
    i = l(702841),
    c = l(67480),
    d = l(564064),
    o = l(590180),
    u = l(758836),
    h = l(652215),
    m = l(217109);
let p = (e) => {
        let t,
            l,
            p,
            {
                skuIds: g = [],
                skuBlock: E = "ShopProductCard",
                skuBlockProps: f,
                sortPurchased: A = !1,
                showSkeleton: v = !1,
                componentMap: x,
                pagedSkuIds: T,
                page: S,
                perPage: y,
                truncate: j,
            } = e,
            _ =
                ((t = (0, i.yK)([c.A], () => g.map((e) => c.A.get(e)))),
                (l = (0, i.yK)([o.A], () => g.map((e) => o.A.getProduct(e)))),
                (p = (0, i.yK)([o.A], () => g.map((e) => o.A.getProductFetch(e)))),
                (0, n.useEffect)(() => {
                    let e = Date.now();
                    for (let [r, n] of g.entries()) {
                        let a = t[r],
                            i = l[r],
                            c = p[r],
                            o = i?.type === s.R.BUNDLE && 0 === i.items.length,
                            m = c?.state === "error" && null != c.endedAt && e - c.endedAt < u.Gj;
                        (null == i || o) &&
                            (null == a || a.productLine === h.EZt.COLLECTIBLES) &&
                            c?.state !== "fetching" &&
                            !m &&
                            (0, d.Jp)(n, { includeBundles: !0 });
                    }
                }, [g, t, p, l, !0]),
                l.some((e, t) => p[t]?.state === "fetching" || (null == e && p[t]?.state !== "error"))),
            { purchases: C, isFetching: L } = (0, a.b5)(),
            b = (0, n.useMemo)(() => {
                if (!A) return T;
                let e = [...g].sort((e, t) => (null != C.get(e)) - (null != C.get(t)));
                return (0, m.oP)(e, S, y, j);
            }, [g, T, A, C, S, y, j]),
            k = x[E],
            I = x.Skeleton;
        return null == k
            ? null
            : (_ || (A && L)) && v
              ? b.map((e, t) =>
                    null != I
                        ? (0, r.jsx)(I, { children: (0, r.jsx)(k, { ...f, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : b.map((e, t) => (0, r.jsx)(k, { ...f, skuId: e, productId: e }, `${e}-${t}`));
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
            h = o ?? u,
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
            } = (0, m.Wk)(t.length, h, g),
            j = (0, n.useMemo)(() => (0, m.oP)(t, A ? E : void 0, S, T), [t, A, E, S, T]),
            _ = v && "top" === x,
            C = v && "bottom" === x,
            L =
                null != h
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
                    _ && (0, r.jsx)(m.hi, { page: E, pages: f, setPage: y }),
                    (0, r.jsx)(p, {
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
                    C && (0, r.jsx)(m.hi, { page: E, pages: f, setPage: y }),
                ],
            });
        let b = d[l];
        return null == b
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L,
                      _ && (0, r.jsx)(m.hi, { page: E, pages: f, setPage: y }),
                      j.map((e, t) => (0, r.jsx)(b, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                      C && (0, r.jsx)(m.hi, { page: E, pages: f, setPage: y }),
                  ],
              });
    };
