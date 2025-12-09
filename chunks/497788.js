n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    s = n(624968),
    o = n(381585),
    a = n(597688),
    c = n(1870),
    u = n(834943),
    d = n(370039),
    g = n(937510),
    f = n(653126),
    p = n(786040),
    m = n(401975),
    C = n(373183),
    h = n(934760),
    _ = n(619899),
    b = n(911390),
    E = n(215023);
let v = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: v } = e,
        S = (0, o.sp)(),
        { hasPromoUpsell: x } = u.Z.useConfig({ location: "RewardHeroBlockCards" }),
        O = l.useMemo(() => a.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        y = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: k } = ((e, t, n) => {
            let r = (0, h.Z)(),
                s = (0, i.e7)([a.Z], () => a.Z.products),
                o = l.useMemo(
                    () =>
                        e
                            ? []
                            : s.size > 0
                              ? r(t.rankedSkuIds).filter((e) => e.skuId !== t.rewardSkuId || null != n)
                              : [],
                    [e, r, t.rankedSkuIds, s, n, t.rewardSkuId],
                ),
                c = (0, d.a)()(o),
                u = (0, g.l)(c);
            return { products: (0, _.St)(u) };
        })(t, n, y),
        T = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(k.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = a.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, k.length],
        ),
        j = t || T,
        { readyToClaim: I } = (0, b.q)(O, n.rewardSkuId),
        L = null == y && null != n.rewardSkuId && null != O;
    return (0, r.jsx)(s.Z, {
        gap: "xl",
        children: j
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(m.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L &&
                          !!(x || I) &&
                          (0, r.jsx)(
                              o.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(C.Z, {
                                      category: O,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      k.map((e, t) => {
                          let n = a.Z.getCategoryForProduct(e.skuId);
                          return null == e || null == n
                              ? null
                              : (0, r.jsx)(
                                    o.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "top 4",
                                            categoryPosition: 0,
                                        },
                                        children: (0, r.jsx)(
                                            f.Z,
                                            {
                                                skuId: null == e ? void 0 : e.skuId,
                                                prioritizedCurrency: v === E.AW.ORBS ? p.tA.ORBS : void 0,
                                                onClickAnalytics: (0, p.wO)(e, v, S),
                                            },
                                            e.skuId,
                                        ),
                                    },
                                    null == e ? void 0 : e.skuId,
                                );
                      }),
                  ],
              }),
    });
};
