"use strict";
r.d(t, { A: () => p });
var l = r(627968),
    s = r(64700),
    n = r(841702),
    a = r(575593),
    i = r(702841),
    c = r(67480),
    u = r(29292),
    d = r(590180),
    o = r(652215),
    h = r(261225);
let m = (e) => {
        let t,
            r,
            m,
            p,
            g,
            {
                skuIds: v = [],
                skuBlock: f = "ShopProductCard",
                skuBlockProps: A,
                sortPurchased: E = !1,
                showSkeleton: x = !1,
                componentMap: y,
                pagedSkuIds: C,
                page: S,
                perPage: T,
                truncate: j,
            } = e,
            b =
                ((t = (0, i.yK)([c.A], () => v.map((e) => c.A.get(e)))),
                (r = (0, i.yK)([d.A], () => v.map((e) => d.A.isFetchingProduct(e)))),
                (m = (0, i.yK)([d.A], () => v.map((e) => d.A.getProduct(e)))),
                (p = (0, i.yK)([d.A], () => v.map((e) => d.A.getProductFetchError(e)))),
                (g = (0, i.yK)([d.A], () => v.map((e) => d.A.getProductFetchErrorTimestamp(e)))),
                (0, s.useEffect)(() => {
                    let e = Date.now();
                    for (let [l, s] of v.entries()) {
                        let n = t[l],
                            i = m[l],
                            c = r[l],
                            d = p[l],
                            h = g[l],
                            v = i?.type === a.R.BUNDLE && 0 === i.items.length,
                            f = null != d && null != h && e - h < 36e5;
                        (null != i && !v) ||
                            (null != n && n.productLine !== o.EZt.COLLECTIBLES) ||
                            c ||
                            f ||
                            (0, u.Jp)(s, { includeBundles: !0 });
                    }
                }, [v, t, r, m, p, g, !0]),
                m.some((e, t) => r[t] || (null == e && null == p[t]))),
            { purchases: _, isFetching: k } = (0, n.b5)(),
            L = (0, s.useMemo)(() => {
                if (!E) return C;
                let e = [...v].sort((e, t) => (null != _.get(e)) - (null != _.get(t)));
                return (0, h.oP)(e, S, T, j);
            }, [v, C, E, _, S, T, j]),
            I = y[f],
            O = y.Skeleton;
        return null == I
            ? null
            : (b || (E && k)) && x
              ? L.map((e, t) =>
                    null != O
                        ? (0, l.jsx)(O, { children: (0, l.jsx)(I, { ...A, skuId: e, productId: e }) }, `${e}-${t}`)
                        : null,
                )
              : L.map((e, t) => (0, l.jsx)(I, { ...A, skuId: e, productId: e }, `${e}-${t}`));
    },
    p = (e) => {
        let {
                skuIds: t = [],
                skuBlock: r = "ShopProductCard",
                skuBlockProps: n,
                sortPurchased: a = !1,
                eagerLoad: i = !1,
                showSkeleton: c = !1,
                componentMap: u,
                paginationOptions: d,
            } = e,
            o = (0, h.JZ)(),
            p = d ?? o,
            g = s.useRef(null),
            {
                page: v,
                pages: f,
                paginate: A,
                showPagination: E,
                paginationPosition: x,
                truncate: y,
                perPage: C,
                setPage: S,
            } = (0, h.Wk)(t.length, p, g),
            T = (0, s.useMemo)(() => (0, h.oP)(t, A ? v : void 0, C, y), [t, A, v, C, y]),
            j = E && "top" === x,
            b = E && "bottom" === x,
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
                    j && (0, l.jsx)(h.hi, { page: v, pages: f, setPage: S }),
                    (0, l.jsx)(m, {
                        skuIds: t,
                        skuBlock: r,
                        skuBlockProps: n,
                        sortPurchased: a,
                        showSkeleton: c,
                        componentMap: u,
                        pagedSkuIds: T,
                        page: A ? v : void 0,
                        perPage: A ? C : void 0,
                        truncate: y,
                    }),
                    b && (0, l.jsx)(h.hi, { page: v, pages: f, setPage: S }),
                ],
            });
        let k = u[r];
        return null == k
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      _,
                      j && (0, l.jsx)(h.hi, { page: v, pages: f, setPage: S }),
                      T.map((e, t) => (0, l.jsx)(k, { ...n, skuId: e, productId: e }, `${e}-${t}`)),
                      b && (0, l.jsx)(h.hi, { page: v, pages: f, setPage: S }),
                  ],
              });
    };
