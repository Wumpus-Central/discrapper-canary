n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(624968),
    i = n(381585),
    o = n(597688),
    c = n(1870),
    u = n(370039),
    d = n(155066),
    f = n(937510),
    g = n(653126),
    b = n(786040),
    p = n(401975),
    m = n(373183),
    h = n(619899),
    C = n(911390),
    E = n(215023);
let v = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: v } = e,
        S = (0, i.sp)(),
        x = l.useMemo(() => o.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        O = (0, a.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)),
        { products: _ } = ((e, t, n) => {
            let r = (0, d.Z)(),
                a = l.useMemo(
                    () => (e ? [] : r(t.rankedSkuIds).filter((e) => e.skuId !== t.rewardSkuId || null != n)),
                    [e, r, t.rankedSkuIds, n, t.rewardSkuId],
                ),
                s = (0, u.a)()(a),
                i = (0, f.l)(s);
            return { products: (0, h.St)(i) };
        })(t, n, O),
        y = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(_.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = o.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, _.length],
        ),
        j = t || y,
        { readyToClaim: k } = (0, C.q)(x, n.rewardSkuId),
        T = null == O && null != n.rewardSkuId && null != x;
    return (0, r.jsx)(s.Z, {
        gap: "xl",
        children: j
            ? (0, r.jsx)(r.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(p.Z, {}, t)),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      T &&
                          k &&
                          (0, r.jsx)(
                              i.k0,
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
                      _.map((e, t) => {
                          let n = o.Z.getCategoryForProduct(e.skuId);
                          return null == e || null == n
                              ? null
                              : (0, r.jsx)(
                                    i.k0,
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
                                                prioritizedCurrency: v === E.AW.ORBS ? b.tA.ORBS : void 0,
                                                onClickAnalytics: (0, b.wO)(e, v, S),
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
