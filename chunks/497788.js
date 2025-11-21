n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(624968),
    o = n(381585),
    s = n(597688),
    c = n(1870),
    u = n(834943),
    d = n(370039),
    f = n(937510),
    g = n(653126),
    p = n(786040),
    m = n(401975),
    h = n(373183),
    C = n(934760),
    _ = n(619899),
    b = n(911390),
    v = n(215023);
let x = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: x } = e,
        E = (0, o.sp)(),
        { hasPromoUpsell: O } = u.Z.useConfig({ location: "RewardHeroBlockCards" }),
        S = l.useMemo(() => s.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        y = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: j } = ((e, t, n) => {
            let r = (0, C.Z)(),
                a = (0, i.e7)([s.Z], () => s.Z.products),
                o = l.useMemo(
                    () =>
                        e
                            ? []
                            : a.size > 0
                              ? r(t.rankedSkuIds).filter((e) => e.skuId !== t.rewardSkuId || null != n)
                              : [],
                    [e, r, t.rankedSkuIds, a, n, t.rewardSkuId],
                ),
                c = (0, d.a)()(o),
                u = (0, f.l)(c);
            return { products: (0, _.St)(u) };
        })(t, n, y),
        k = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(j.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = s.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, j.length],
        ),
        I = t || k,
        { readyToClaim: T } = (0, b.q)(S, n.rewardSkuId),
        L = null == y && null != n.rewardSkuId && null != S;
    return (0, r.jsx)(a.Z, {
        gap: "xl",
        children: I
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(m.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L &&
                          !!(O || T) &&
                          (0, r.jsx)(
                              o.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(h.Z, {
                                      category: S,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      j.map((e, t) => {
                          let n = s.Z.getCategoryForProduct(e.skuId);
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
                                                prioritizedCurrency: x === v.AW.ORBS ? p.tA.ORBS : void 0,
                                                onClickAnalytics: (0, p.wO)(e, x, E),
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
