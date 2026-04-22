"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(311907),
    o = s(534514),
    c = s(821609),
    d = s(793574),
    u = s(688810),
    g = s(951707),
    h = s(287809),
    _ = s(440938),
    m = s(590180),
    p = s(940980),
    f = s(313276),
    E = s(206077),
    x = s(751304),
    A = s(561769),
    C = s(758836),
    S = s(985018),
    b = s(941734);
let v = (e) => {
    let { shelf: t, handleTransition: s, tab: r } = e,
        v = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        L = (0, p.W)("ShelfBlock"),
        I = (0, i.bG)([m.A], () => m.A.getCategory(t.categorySkuId)),
        j = (0, f.A)(),
        N = l.useMemo(() => j(t.rankedSkuIds), [t.rankedSkuIds, j]),
        T = (0, E.X)(N),
        { analyticsLocations: O } = (0, u.Ay)(d.A.COLLECTIBLES_SHOP_SHELF);
    return null == v
        ? null
        : (0, n.jsx)(u.f5, {
              value: O,
              children: (0, n.jsxs)("div", {
                  className: a()(b.Vp, b.YB),
                  children: [
                      (0, n.jsxs)("div", {
                          className: b.$6,
                          children: [
                              (0, n.jsx)(o.D, { variant: "heading-lg/semibold", children: t.name }),
                              (0, n.jsx)(c.$, {
                                  variant: "secondary",
                                  text: S.intl.formatToPlainString(S.t.bc9RBE, { category_name: t.name }),
                                  onClick: () => {
                                      s({
                                          sourceButton: "shelf block see all",
                                          categorySkuId: t.categorySkuId,
                                          isInternalShopDeeplink: !0,
                                          isOrbsExclusive: I?.isOrbsExclusive && r !== C.G2.ORBS,
                                      });
                                  },
                              }),
                          ],
                      }),
                      (0, n.jsx)(g.A, {
                          gap: "xl",
                          children: (0, n.jsx)(n.Fragment, {
                              children: T.map((e, s) => {
                                  if (null == m.A.getCategoryForProduct(e.skuId) || null == e) return null;
                                  let l = e.skuId;
                                  return (0, n.jsx)(
                                      _.R9,
                                      {
                                          newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                          children: (0, n.jsx)(
                                              x.A,
                                              {
                                                  skuId: l,
                                                  prioritizedCurrency:
                                                      r === C.G2.ORBS ? A.Hi.ORBS : L ? A.Hi.FIAT : void 0,
                                              },
                                              l,
                                          ),
                                      },
                                      l,
                                  );
                              }),
                          }),
                      }),
                  ],
              }),
          });
};
