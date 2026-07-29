n.d(t, { A: () => p });
var r = n(477900),
    l = n(582128),
    a = n(841702),
    s = n(575593),
    i = n(702841),
    c = n(67480),
    o = n(839534),
    u = n(590180),
    d = n(652215),
    h = n(217109);
function m(e) {
    let t,
        n,
        m,
        p,
        {
            skuIds: f = [],
            skuBlock: g = "ShopProductCard",
            skuBlockProps: E,
            sortPurchased: v = !1,
            showSkeleton: A = !1,
            componentMap: x,
            pagedSkuIds: T,
            page: S,
            perPage: y,
            truncate: j,
        } = e,
        _ =
            ((t = (0, i.yK)([c.A], () => f.map((e) => c.A.get(e)))),
            (n = (0, i.yK)([u.A], () => f.map((e) => u.A.getProduct(e)))),
            (m = (0, i.yK)([u.A], () => f.map((e) => u.A.getProductFetch(e)))),
            (p = (0, i.yK)([u.A], () => f.map((e) => u.A.isProductFetchBackedOff(e)))),
            (0, l.useEffect)(() => {
                for (let [e, r] of f.entries()) {
                    let l = t[e],
                        a = n[e],
                        i = m[e],
                        c = a?.type === s.R.BUNDLE && 0 === a.items.length;
                    (null == a || c) &&
                        (null == l || l.productLine === d.EZt.COLLECTIBLES) &&
                        i?.state !== "fetching" &&
                        !p[e] &&
                        (0, o.Jp)(r, { includeBundles: !0 });
                }
            }, [f, t, m, n, !0, p]),
            n.some((e, t) => m[t]?.state === "fetching" || (null == e && m[t]?.state !== "error"))),
        { purchases: C, isFetching: L } = (0, a.b5)(),
        b = (0, l.useMemo)(() => {
            if (!v) return T;
            let e = [...f].sort((e, t) => (null != C.get(e)) - (null != C.get(t)));
            return (0, h.oP)(e, S, y, j);
        }, [f, T, v, C, S, y, j]),
        k = x[g],
        I = x.Skeleton;
    return null == k
        ? null
        : (_ || (v && L)) && A
          ? b.map((e, t) =>
                null != I
                    ? (0, r.jsx)(I, { children: (0, r.jsx)(k, { ...E, skuId: e, productId: e }) }, `${e}-${t}`)
                    : null,
            )
          : b.map((e, t) => (0, r.jsx)(k, { ...E, skuId: e, productId: e }, `${e}-${t}`));
}
let p = function (e) {
    let {
            skuIds: t = [],
            skuBlock: n = "ShopProductCard",
            skuBlockProps: a,
            sortPurchased: s = !1,
            eagerLoad: i = !1,
            showSkeleton: c = !1,
            componentMap: o,
            paginationOptions: u,
        } = e,
        d = (0, h.JZ)(),
        p = u ?? d,
        f = l.useRef(null),
        {
            page: g,
            pages: E,
            paginate: v,
            showPagination: A,
            paginationPosition: x,
            truncate: T,
            perPage: S,
            setPage: y,
        } = (0, h.Wk)(t.length, p, f),
        j = (0, l.useMemo)(() => (0, h.oP)(t, v ? g : void 0, S, T), [t, v, g, S, T]),
        _ = A && "top" === x,
        C = A && "bottom" === x,
        L =
            null != p
                ? (0, r.jsx)("div", {
                      ref: f,
                      "aria-hidden": "true",
                      style: { position: "absolute", top: 0, height: 0 },
                  })
                : null;
    if (i || s)
        return (0, r.jsxs)(r.Fragment, {
            children: [
                L,
                _ && (0, r.jsx)(h.hi, { page: g, pages: E, setPage: y }),
                (0, r.jsx)(m, {
                    skuIds: t,
                    skuBlock: n,
                    skuBlockProps: a,
                    sortPurchased: s,
                    showSkeleton: c,
                    componentMap: o,
                    pagedSkuIds: j,
                    page: v ? g : void 0,
                    perPage: v ? S : void 0,
                    truncate: T,
                }),
                C && (0, r.jsx)(h.hi, { page: g, pages: E, setPage: y }),
            ],
        });
    let b = o[n];
    return null == b
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  L,
                  _ && (0, r.jsx)(h.hi, { page: g, pages: E, setPage: y }),
                  j.map((e, t) => (0, r.jsx)(b, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                  C && (0, r.jsx)(h.hi, { page: g, pages: E, setPage: y }),
              ],
          });
};
