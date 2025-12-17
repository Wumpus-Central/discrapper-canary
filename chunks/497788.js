n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(624968),
    o = n(381585),
    i = n(597688),
    c = n(1870),
    u = n(370039),
    d = n(937510),
    f = n(653126),
    g = n(786040),
    b = n(401975),
    p = n(373183),
    m = n(934760),
    h = n(619899),
    C = n(911390),
    E = n(215023);
let v = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: v } = e,
        S = (0, o.sp)(),
        _ = l.useMemo(() => i.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        x = (0, a.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: O } = ((e, t, n) => {
            let r = (0, m.Z)(),
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
                c = (0, u.a)()(o),
                f = (0, d.l)(c);
            return { products: (0, h.St)(f) };
        })(t, n, x),
        y = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(O.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = i.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, O.length],
        ),
        k = t || y,
        { readyToClaim: T } = (0, C.q)(_, n.rewardSkuId),
        j = null == x && null != n.rewardSkuId && null != _;
    return (0, r.jsx)(s.Z, {
        gap: "xl",
        children: k
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(b.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      j &&
                          T &&
                          (0, r.jsx)(
                              o.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(p.Z, {
                                      category: _,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      O.map((e, t) => {
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
                                            f.Z,
                                            {
                                                skuId: null == e ? void 0 : e.skuId,
                                                prioritizedCurrency: v === E.AW.ORBS ? g.tA.ORBS : void 0,
                                                onClickAnalytics: (0, g.wO)(e, v, S),
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
