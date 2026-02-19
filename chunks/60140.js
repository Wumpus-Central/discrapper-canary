"use strict";
n.d(t, { A: () => C });
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
    m = n(940622),
    h = n(758836),
    p = n(201073);
let f = (e) => (0, s.jsx)("div", { className: p.hm, children: (0, s.jsx)(E, { ...e }) }),
    x = (e) => (0, s.jsx)(r.A, { gap: "xl", children: (0, s.jsx)(E, { ...e }) }),
    E = (e) => {
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
                                      prioritizedCurrency: l === h.G2.ORBS ? g.Hi.ORBS : void 0,
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
    C = (e) => {
        let t,
            n,
            r,
            a,
            { heroBlockRecord: u, layout: g, tab: _, isBlockLoading: h = !1 } = e,
            { products: p } =
                ((t = (0, c.A)()),
                (n = l.useMemo(() => (h ? [] : t(u.rankedSkuIds)), [h, t, u.rankedSkuIds])),
                (r = (0, o.p)()(n)),
                (a = (0, d.X)(r)),
                { products: (0, m.od)(a) }),
            E = l.useMemo(
                () =>
                    !h &&
                    0 !== u.rankedSkuIds.length &&
                    !(p.length > 0) &&
                    u.rankedSkuIds.every((e) => i.A.getProduct(e)?.variantGroupStoreListingId != null),
                [h, u.rankedSkuIds, p.length],
            ),
            C = h || E;
        switch (g) {
            case "feed":
                return (0, s.jsx)(f, { heroBlockRecord: u, isLoading: C, products: p, tab: _ });
            case "hscroll":
                return (0, s.jsx)(x, { heroBlockRecord: u, isLoading: C, products: p, tab: _ });
        }
    };
