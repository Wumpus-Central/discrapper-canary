"use strict";
s.d(t, { A: () => E });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(311907),
    o = s(397927),
    c = s(287809),
    d = s(440938),
    u = s(590180),
    g = s(206077),
    m = s(751304),
    _ = s(561769),
    h = s(758836),
    p = s(985018),
    f = s(201073);
let E = (e) => {
    let { shelf: t, handleTransition: s, tab: l } = e,
        E = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        C = (0, i.bG)([u.A], () => u.A.getCategory(t.categorySkuId)),
        b = (0, d.uM)(),
        A = r.useMemo(() => t.rankedSkuIds.map((e) => u.A.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        x = (0, g.X)(A).slice(0, 4);
    return null == E
        ? null
        : (0, n.jsxs)("div", {
              className: a()(f.Vp, f.YB),
              children: [
                  (0, n.jsxs)("div", {
                      className: f.$6,
                      children: [
                          (0, n.jsx)(o.Heading, { variant: "heading-lg/semibold", children: t.name }),
                          (0, n.jsx)(o.Button, {
                              variant: "secondary",
                              text: p.intl.formatToPlainString(p.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  s({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: C?.isOrbsExclusive && l !== h.G2.ORBS,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: f.hm,
                      children: (0, n.jsx)(n.Fragment, {
                          children: x.map((e, s) => {
                              if (null == u.A.getCategoryForProduct(e.skuId) || null == e) return null;
                              let r = e.skuId;
                              return (0, n.jsx)(
                                  d.R9,
                                  {
                                      newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                      children: (0, n.jsx)(
                                          m.A,
                                          {
                                              skuId: r,
                                              prioritizedCurrency: l === h.G2.ORBS ? _.Hi.ORBS : void 0,
                                              onClickAnalytics: (0, _.UU)(e, l, b),
                                          },
                                          r,
                                      ),
                                  },
                                  r,
                              );
                          }),
                      }),
                  }),
              ],
          });
};
