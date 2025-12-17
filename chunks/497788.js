n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(624968),
    o = n(381585),
    i = n(597688),
    c = n(1870),
    u = n(834943),
    d = n(370039),
    f = n(937510),
    g = n(653126),
    b = n(786040),
    p = n(401975),
    m = n(373183),
    h = n(934760),
    C = n(619899),
    E = n(911390),
    v = n(215023);
let S = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: S } = e,
        _ = (0, o.sp)(),
        { hasPromoUpsell: x } = u.Z.useConfig({ location: "RewardHeroBlockCards" }),
        O = l.useMemo(() => i.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        y = (0, a.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: k } = ((e, t, n) => {
            let r = (0, h.Z)(),
                s = (0, a.e7)([i.Z], () => i.Z.products),
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
                u = (0, f.l)(c);
            return { products: (0, C.St)(u) };
        })(t, n, y),
        T = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(k.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = i.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, k.length],
        ),
        j = t || T,
        { readyToClaim: L } = (0, E.q)(O, n.rewardSkuId),
        I = null == y && null != n.rewardSkuId && null != O;
    return (0, r.jsx)(s.Z, {
        gap: "xl",
        children: j
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(p.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      I &&
                          !!(x || L) &&
                          (0, r.jsx)(
                              o.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(m.Z, {
                                      category: O,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      k.map((e, t) => {
                          let n = i.Z.getCategoryForProduct(e.skuId);
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
                                            g.Z,
                                            {
                                                skuId: null == e ? void 0 : e.skuId,
                                                prioritizedCurrency: S === v.AW.ORBS ? b.tA.ORBS : void 0,
                                                onClickAnalytics: (0, b.wO)(e, S, _),
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
