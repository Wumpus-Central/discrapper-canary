l.d(t, { A: () => E });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(311907),
    o = l(397927),
    c = l(287809),
    u = l(440938),
    d = l(590180),
    f = l(206077),
    b = l(751304),
    g = l(561769),
    p = l(758836),
    m = l(985018),
    h = l(201073);
let E = (e) => {
    let { shelf: t, handleTransition: l, tab: s } = e,
        E = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        v = (0, i.bG)([d.A], () => d.A.getCategory(t.categorySkuId)),
        A = (0, u.uM)(),
        x = r.useMemo(() => t.rankedSkuIds.map((e) => d.A.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        S = (0, f.X)(x).slice(0, 4);
    return null == E
        ? null
        : (0, n.jsxs)("div", {
              className: a()(h.Vp, h.YB),
              children: [
                  (0, n.jsxs)("div", {
                      className: h.$6,
                      children: [
                          (0, n.jsx)(o.Heading, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, n.jsx)(o.Button, {
                              variant: "secondary",
                              text: m.intl.formatToPlainString(m.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  l({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: (null == v ? void 0 : v.isOrbsExclusive) && s !== p.G2.ORBS,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: h.hm,
                      children: (0, n.jsx)(n.Fragment, {
                          children: S.map((e, l) => {
                              if (null == d.A.getCategoryForProduct(e.skuId) || null == e) return null;
                              let r = e.skuId;
                              return (0, n.jsx)(
                                  u.R9,
                                  {
                                      newValue: {
                                          tilePosition: l,
                                          pageSection: t.name,
                                          categoryPosition: 2,
                                      },
                                      children: (0, n.jsx)(
                                          b.A,
                                          {
                                              skuId: r,
                                              prioritizedCurrency: s === p.G2.ORBS ? g.Hi.ORBS : void 0,
                                              onClickAnalytics: (0, g.UU)(e, s, A),
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
