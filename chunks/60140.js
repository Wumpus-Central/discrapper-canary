"use strict";
s.d(t, { A: () => A });
var n = s(627968),
    l = s(64700),
    r = s(951707),
    a = s(440938),
    i = s(590180),
    o = s(940980),
    c = s(511265),
    d = s(313276),
    u = s(206077),
    g = s(751304),
    h = s(561769),
    _ = s(484469),
    m = s(758836),
    p = s(941734);
let f = (e) => (0, n.jsx)("div", { className: p.hm, children: (0, n.jsx)(x, { ...e }) }),
    E = (e) => (0, n.jsx)(r.A, { gap: "xl", children: (0, n.jsx)(x, { ...e }) }),
    x = (e) => {
        let { isLoading: t, products: s, tab: l, totalCards: r } = e,
            c = (0, o.W)("HeroBlockCards");
        if (t) return (0, n.jsx)(n.Fragment, { children: [...Array(r ?? 4)].map((e, t) => (0, n.jsx)(_.A, {}, t)) });
        let d = null != r ? s.slice(0, r) : s;
        return (0, n.jsx)(h.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: d.map((e, t) => {
                let s = i.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, n.jsx)(
                          a.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, n.jsx)(
                                  g.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: l === m.G2.ORBS ? h.Hi.ORBS : c ? h.Hi.FIAT : void 0,
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    A = (e) => {
        let t,
            s,
            r,
            { heroBlockRecord: a, layout: o, tab: g, isBlockLoading: h = !1 } = e,
            { products: _ } =
                ((t = (0, d.A)()),
                (s = l.useMemo(() => (h ? [] : t(a.rankedSkuIds)), [h, t, a.rankedSkuIds])),
                (r = (0, c.p)()(s)),
                { products: (0, u.X)(r) }),
            m = l.useMemo(
                () =>
                    !h &&
                    0 !== a.rankedSkuIds.length &&
                    !(_.length > 0) &&
                    a.rankedSkuIds.every((e) => i.A.getProduct(e)?.variantGroupStoreListingId != null),
                [h, a.rankedSkuIds, _.length],
            ),
            p = h || m;
        switch (o) {
            case "feed":
                return (0, n.jsx)(f, { heroBlockRecord: a, isLoading: p, products: _, tab: g });
            case "hscroll":
                return (0, n.jsx)(E, { heroBlockRecord: a, isLoading: p, products: _, tab: g });
        }
    };
