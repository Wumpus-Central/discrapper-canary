"use strict";
n.d(t, { A: () => C });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(311907),
    o = n(397927),
    c = n(720462),
    d = n(287809),
    u = n(440938),
    g = n(590180),
    _ = n(313276),
    m = n(206077),
    h = n(751304),
    p = n(561769),
    f = n(758836),
    x = n(985018),
    E = n(201073);
let C = (e) => {
    let { shelf: t, handleTransition: n, tab: r } = e,
        C = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        A = (0, i.bG)([g.A], () => g.A.getCategory(t.categorySkuId)),
        b = (0, u.uM)(),
        S = (0, _.A)(),
        v = l.useMemo(() => S(t.rankedSkuIds), [t.rankedSkuIds, S]),
        L = (0, m.X)(v);
    return null == C
        ? null
        : (0, s.jsxs)("div", {
              className: a()(E.Vp, E.YB),
              children: [
                  (0, s.jsxs)("div", {
                      className: E.$6,
                      children: [
                          (0, s.jsx)(o.Heading, { variant: "heading-lg/semibold", children: t.name }),
                          (0, s.jsx)(o.Button, {
                              variant: "secondary",
                              text: x.intl.formatToPlainString(x.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  n({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: A?.isOrbsExclusive && r !== f.G2.ORBS,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, s.jsx)(c.A, {
                      gap: "xl",
                      children: (0, s.jsx)(s.Fragment, {
                          children: L.map((e, n) => {
                              if (null == g.A.getCategoryForProduct(e.skuId) || null == e) return null;
                              let l = e.skuId;
                              return (0, s.jsx)(
                                  u.R9,
                                  {
                                      newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                      children: (0, s.jsx)(
                                          h.A,
                                          {
                                              skuId: l,
                                              prioritizedCurrency: r === f.G2.ORBS ? p.Hi.ORBS : void 0,
                                              onClickAnalytics: (0, p.UU)(e, r, b),
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
          });
};
