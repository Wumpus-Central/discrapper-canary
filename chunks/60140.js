"use strict";
n.d(t, { A: () => E });
var s = n(627968),
    l = n(64700),
    r = n(720462),
    a = n(440938),
    i = n(590180),
    o = n(511265),
    c = n(313276),
    d = n(206077),
    u = n(751304),
    g = n(561769),
    _ = n(484469),
    m = n(758836),
    h = n(419447);
let p = (e) => (0, s.jsx)("div", { className: h.hm, children: (0, s.jsx)(x, { ...e }) }),
    f = (e) => (0, s.jsx)(r.A, { gap: "xl", children: (0, s.jsx)(x, { ...e }) }),
    x = (e) => {
        let { isLoading: t, products: n, tab: l, totalCards: r } = e,
            o = (0, a.uM)();
        if (t) return (0, s.jsx)(s.Fragment, { children: [...Array(r ?? 4)].map((e, t) => (0, s.jsx)(_.A, {}, t)) });
        let c = null != r ? n.slice(0, r) : n;
        return (0, s.jsx)(g.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: c.map((e, t) => {
                let n = i.A.getCategoryForProduct(e.skuId);
                return null == e || null == n
                    ? null
                    : (0, s.jsx)(
                          a.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, s.jsx)(
                                  u.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: l === m.G2.ORBS ? g.Hi.ORBS : void 0,
                                      onClickAnalytics: (0, g.UU)(e, l, o),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    E = (e) => {
        let t,
            n,
            r,
            { heroBlockRecord: a, layout: u, tab: g, isBlockLoading: _ = !1 } = e,
            { products: m } =
                ((t = (0, c.A)()),
                (n = l.useMemo(() => (_ ? [] : t(a.rankedSkuIds)), [_, t, a.rankedSkuIds])),
                (r = (0, o.p)()(n)),
                { products: (0, d.X)(r) }),
            h = l.useMemo(
                () =>
                    !_ &&
                    0 !== a.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    a.rankedSkuIds.every((e) => i.A.getProduct(e)?.variantGroupStoreListingId != null),
                [_, a.rankedSkuIds, m.length],
            ),
            x = _ || h;
        switch (u) {
            case "feed":
                return (0, s.jsx)(p, { heroBlockRecord: a, isLoading: x, products: m, tab: g });
            case "hscroll":
                return (0, s.jsx)(f, { heroBlockRecord: a, isLoading: x, products: m, tab: g });
        }
    };
