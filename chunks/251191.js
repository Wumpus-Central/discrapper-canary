"use strict";
n.d(t, { A: () => E });
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
    _ = n(206077),
    m = n(751304),
    h = n(561769),
    p = n(758836),
    f = n(985018),
    x = n(201073);
let E = (e) => {
    let { shelf: t, handleTransition: n, tab: r } = e,
        E = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        C = (0, i.bG)([g.A], () => g.A.getCategory(t.categorySkuId)),
        A = (0, u.uM)(),
        b = l.useMemo(() => t.rankedSkuIds.map((e) => g.A.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        S = (0, _.X)(b);
    return null == E
        ? null
        : (0, s.jsxs)("div", {
              className: a()(x.Vp, x.YB),
              children: [
                  (0, s.jsxs)("div", {
                      className: x.$6,
                      children: [
                          (0, s.jsx)(o.Heading, { variant: "heading-lg/semibold", children: t.name }),
                          (0, s.jsx)(o.Button, {
                              variant: "secondary",
                              text: f.intl.formatToPlainString(f.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  n({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: C?.isOrbsExclusive && r !== p.G2.ORBS,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, s.jsx)(c.A, {
                      gap: "xl",
                      children: (0, s.jsx)(s.Fragment, {
                          children: S.map((e, n) => {
                              if (null == g.A.getCategoryForProduct(e.skuId) || null == e) return null;
                              let l = e.skuId;
                              return (0, s.jsx)(
                                  u.R9,
                                  {
                                      newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                      children: (0, s.jsx)(
                                          m.A,
                                          {
                                              skuId: l,
                                              prioritizedCurrency: r === p.G2.ORBS ? h.Hi.ORBS : void 0,
                                              onClickAnalytics: (0, h.UU)(e, r, A),
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
