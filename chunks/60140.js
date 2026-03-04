"use strict";
s.d(t, { A: () => C });
var n = s(627968),
    r = s(64700),
    l = s(720462),
    i = s(440938),
    a = s(590180),
    o = s(940980),
    c = s(511265),
    d = s(313276),
    u = s(206077),
    _ = s(751304),
    g = s(561769),
    m = s(484469),
    h = s(758836),
    p = s(201073);
let f = (e) => (0, n.jsx)("div", { className: p.hm, children: (0, n.jsx)(E, { ...e }) }),
    x = (e) => (0, n.jsx)(l.A, { gap: "xl", children: (0, n.jsx)(E, { ...e }) }),
    E = (e) => {
        let { isLoading: t, products: s, tab: r, totalCards: l } = e,
            c = (0, i.uM)(),
            d = (0, o.W)("HeroBlockCards");
        if (t) return (0, n.jsx)(n.Fragment, { children: [...Array(l ?? 4)].map((e, t) => (0, n.jsx)(m.A, {}, t)) });
        let u = null != l ? s.slice(0, l) : s;
        return (0, n.jsx)(g.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: u.map((e, t) => {
                let s = a.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, n.jsx)(
                          i.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, n.jsx)(
                                  _.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: r === h.G2.ORBS ? g.Hi.ORBS : d ? g.Hi.FIAT : void 0,
                                      onClickAnalytics: (0, g.UU)(e, r, c),
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
            s,
            l,
            { heroBlockRecord: i, layout: o, tab: _, isBlockLoading: g = !1 } = e,
            { products: m } =
                ((t = (0, d.A)()),
                (s = r.useMemo(() => (g ? [] : t(i.rankedSkuIds)), [g, t, i.rankedSkuIds])),
                (l = (0, c.p)()(s)),
                { products: (0, u.X)(l) }),
            h = r.useMemo(
                () =>
                    !g &&
                    0 !== i.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    i.rankedSkuIds.every((e) => a.A.getProduct(e)?.variantGroupStoreListingId != null),
                [g, i.rankedSkuIds, m.length],
            ),
            p = g || h;
        switch (o) {
            case "feed":
                return (0, n.jsx)(f, { heroBlockRecord: i, isLoading: p, products: m, tab: _ });
            case "hscroll":
                return (0, n.jsx)(x, { heroBlockRecord: i, isLoading: p, products: m, tab: _ });
        }
    };
