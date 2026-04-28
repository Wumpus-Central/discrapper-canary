"use strict";
r.d(t, { A: () => p });
var l = r(627968),
    s = r(64700),
    n = r(841702),
    a = r(575593),
    i = r(702841),
    c = r(67480),
    d = r(693477),
    o = r(590180),
    u = r(652215),
    h = r(261225);
let m = (e) => {
        let t,
            r,
            m,
            {
                skuIds: p = [],
                skuBlock: g = "ShopProductCard",
                skuBlockProps: f,
                sortPurchased: v = !1,
                showSkeleton: A = !1,
                componentMap: x,
                pagedSkuIds: E,
                page: y,
                perPage: C,
                truncate: S,
            } = e,
            j =
                ((t = (0, i.yK)([c.A], () => p.map((e) => c.A.get(e)))),
                (r = (0, i.yK)([o.A], () => p.map((e) => o.A.getProduct(e)))),
                (m = (0, i.yK)([o.A], () => p.map((e) => o.A.getProductFetch(e)))),
                (0, s.useEffect)(() => {
                    let e = Date.now();
                    for (let [l, s] of p.entries()) {
                        let n = t[l],
                            i = r[l],
                            c = m[l],
                            o = i?.type === a.R.BUNDLE && 0 === i.items.length,
                            h = c?.state === "error" && null != c.endedAt && e - c.endedAt < 36e5;
                        (null == i || o) &&
                            (null == n || n.productLine === u.EZt.COLLECTIBLES) &&
                            c?.state !== "fetching" &&
                            !h &&
                            (0, d.Jp)(s, { includeBundles: !0 });
                    }
                }, [p, t, m, r, !0]),
                r.some((e, t) => m[t]?.state === "fetching" || (null == e && m[t]?.state !== "error"))),
            { purchases: T, isFetching: b } = (0, n.b5)(),
            _ = (0, s.useMemo)(() => {
                if (!v) return E;
                let e = [...p].sort((e, t) => (null != T.get(e)) - (null != T.get(t)));
                return (0, h.oP)(e, y, C, S);
            }, [p, E, v, T, y, C, S]),
            k = x[g],
            L = x.Skeleton;
        return null == k
            ? null
            : (j || (v && b)) && A
              ? _.map((e, t) =>
                    null != L
                        ? (0, l.jsx)(L, { children: (0, l.jsx)(k, { ...f, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : _.map((e, t) => (0, l.jsx)(k, { ...f, skuId: e, productId: e }, `${e}-${t}`));
    },
    p = (e) => {
        let {
                skuIds: t = [],
                skuBlock: r = "ShopProductCard",
                skuBlockProps: n,
                sortPurchased: a = !1,
                eagerLoad: i = !1,
                showSkeleton: c = !1,
                componentMap: d,
                paginationOptions: o,
            } = e,
            u = (0, h.JZ)(),
            p = o ?? u,
            g = s.useRef(null),
            {
                page: f,
                pages: v,
                paginate: A,
                showPagination: x,
                paginationPosition: E,
                truncate: y,
                perPage: C,
                setPage: S,
            } = (0, h.Wk)(t.length, p, g),
            j = (0, s.useMemo)(() => (0, h.oP)(t, A ? f : void 0, C, y), [t, A, f, C, y]),
            T = x && "top" === E,
            b = x && "bottom" === E,
            _ =
                null != p
                    ? (0, l.jsx)("div", {
                          ref: g,
                          "aria-hidden": "true",
                          style: { position: "absolute", top: 0, height: 0 },
                      })
                    : null;
        if (i || a)
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    _,
                    T && (0, l.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                    (0, l.jsx)(m, {
                        skuIds: t,
                        skuBlock: r,
                        skuBlockProps: n,
                        sortPurchased: a,
                        showSkeleton: c,
                        componentMap: d,
                        pagedSkuIds: j,
                        page: A ? f : void 0,
                        perPage: A ? C : void 0,
                        truncate: y,
                    }),
                    b && (0, l.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                ],
            });
        let k = d[r];
        return null == k
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      _,
                      T && (0, l.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                      j.map((e, t) => (0, l.jsx)(k, { ...n, skuId: e, productId: e }, `${e}-${t}`)),
                      b && (0, l.jsx)(h.hi, { page: f, pages: v, setPage: S }),
                  ],
              });
    };
