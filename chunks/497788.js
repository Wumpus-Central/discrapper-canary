n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(624968),
    s = n(381585),
    a = n(597688),
    c = n(1870),
    u = n(834943),
    d = n(370039),
    g = n(937510),
    f = n(653126),
    p = n(786040),
    m = n(401975),
    h = n(373183),
    C = n(934760),
    _ = n(619899),
    b = n(911390),
    v = n(215023);
let E = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: E } = e,
        S = (0, s.sp)(),
        { hasPromoUpsell: O } = u.Z.useConfig({ location: "RewardHeroBlockCards" }),
        x = l.useMemo(() => a.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        y = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: j } = ((e, t, n) => {
            let r = (0, C.Z)(),
                o = (0, i.e7)([a.Z], () => a.Z.products),
                s = l.useMemo(
                    () =>
                        e
                            ? []
                            : o.size > 0
                              ? r(t.rankedSkuIds).filter((e) => e.skuId !== t.rewardSkuId || null != n)
                              : [],
                    [e, r, t.rankedSkuIds, o, n, t.rewardSkuId],
                ),
                c = (0, d.a)()(s),
                u = (0, g.l)(c);
            return { products: (0, _.St)(u) };
        })(t, n, y),
        k = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(j.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = a.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, j.length],
        ),
        T = t || k,
        { readyToClaim: I } = (0, b.q)(x, n.rewardSkuId),
        L = null == y && null != n.rewardSkuId && null != x;
    return (0, r.jsx)(o.Z, {
        gap: "xl",
        children: T
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(m.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L &&
                          !!(O || I) &&
                          (0, r.jsx)(
                              s.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(h.Z, {
                                      category: x,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      j.map((e, t) => {
                          let n = a.Z.getCategoryForProduct(e.skuId);
                          return null == e || null == n
                              ? null
                              : (0, r.jsx)(
                                    s.k0,
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
                                                prioritizedCurrency: E === v.AW.ORBS ? p.tA.ORBS : void 0,
                                                onClickAnalytics: (0, p.wO)(e, E, S),
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
