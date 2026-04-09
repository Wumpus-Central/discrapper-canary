"use strict";
s.d(t, { A: () => S });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(311907),
    o = s(397927),
    c = s(793574),
    d = s(688810),
    u = s(951707),
    _ = s(287809),
    g = s(440938),
    m = s(590180),
    h = s(940980),
    p = s(313276),
    f = s(206077),
    x = s(751304),
    E = s(561769),
    b = s(758836),
    C = s(985018),
    A = s(572199);
let S = (e) => {
    let { shelf: t, handleTransition: s, tab: l } = e,
        S = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        v = (0, h.W)("ShelfBlock"),
        I = (0, a.bG)([m.A], () => m.A.getCategory(t.categorySkuId)),
        L = (0, p.A)(),
        j = r.useMemo(() => L(t.rankedSkuIds), [t.rankedSkuIds, L]),
        O = (0, f.X)(j),
        { analyticsLocations: T } = (0, d.Ay)(c.A.COLLECTIBLES_SHOP_SHELF);
    return null == S
        ? null
        : (0, n.jsx)(d.f5, {
              value: T,
              children: (0, n.jsxs)("div", {
                  className: i()(A.Vp, A.YB),
                  children: [
                      (0, n.jsxs)("div", {
                          className: A.$6,
                          children: [
                              (0, n.jsx)(o.Heading, { variant: "heading-lg/semibold", children: t.name }),
                              (0, n.jsx)(o.Button, {
                                  variant: "secondary",
                                  text: C.intl.formatToPlainString(C.t.bc9RBE, { category_name: t.name }),
                                  onClick: () => {
                                      s({
                                          sourceButton: "shelf block see all",
                                          categorySkuId: t.categorySkuId,
                                          isInternalShopDeeplink: !0,
                                          isOrbsExclusive: I?.isOrbsExclusive && l !== b.G2.ORBS,
                                      });
                                  },
                              }),
                          ],
                      }),
                      (0, n.jsx)(u.A, {
                          gap: "xl",
                          children: (0, n.jsx)(n.Fragment, {
                              children: O.map((e, s) => {
                                  if (null == m.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                  let r = e.skuId;
                                  return (0, n.jsx)(
                                      g.R9,
                                      {
                                          newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                          children: (0, n.jsx)(
                                              x.A,
                                              {
                                                  skuId: r,
                                                  prioritizedCurrency:
                                                      l === b.G2.ORBS ? E.Hi.ORBS : v ? E.Hi.FIAT : void 0,
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
              }),
          });
};
