n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(624968),
    s = n(381585),
    o = n(597688),
    c = n(1870),
    u = n(370039),
    d = n(937510),
    f = n(653126),
    g = n(786040),
    p = n(401975),
    m = n(373183),
    h = n(934760),
    C = n(619899),
    _ = n(215023);
let b = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: b } = e,
        v = (0, s.sp)(),
        x = l.useMemo(() => o.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        E = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: O } = ((e, t, n) => {
            let r = (0, h.Z)(),
                a = (0, i.e7)([o.Z], () => o.Z.products),
                s = l.useMemo(
                    () =>
                        e
                            ? []
                            : a.size > 0
                              ? r(t.rankedSkuIds).filter((e) => e.skuId !== t.rewardSkuId || null != n)
                              : [],
                    [e, r, t.rankedSkuIds, a, n, t.rewardSkuId],
                ),
                c = (0, u.a)()(s),
                f = (0, d.l)(c);
            return { products: (0, C.St)(f) };
        })(t, n, E),
        S = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(O.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = o.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, O.length],
        ),
        y = t || S;
    return (0, r.jsx)(a.Z, {
        gap: "xl",
        children: y
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(p.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      null == E &&
                          null != n.rewardSkuId &&
                          null != x &&
                          (0, r.jsx)(
                              s.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(m.Z, {
                                      category: x,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      O.map((e, t) => {
                          let n = o.Z.getCategoryForProduct(e.skuId);
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
                                                prioritizedCurrency: b === _.AW.ORBS ? g.tA.ORBS : void 0,
                                                onClickAnalytics: (0, g.wO)(e, b, v),
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
