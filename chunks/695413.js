l.d(t, { A: () => A }), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(311907),
    a = l(408238),
    i = l(440938),
    o = l(590180),
    c = l(4227),
    u = l(511265),
    d = l(313276),
    f = l(206077),
    b = l(751304),
    g = l(561769),
    p = l(484469),
    m = l(661623),
    h = l(940622),
    E = l(357704),
    v = l(758836);
let A = (e) => {
    let t,
        l,
        A,
        x,
        { isBlockLoading: S = !1, heroBlock: C, tab: O } = e,
        _ = (0, i.uM)(),
        y = r.useMemo(() => o.A.getCategoryForProduct(C.rewardSkuId), [C.rewardSkuId]),
        j = (0, s.bG)([c.A], () => c.A.getPurchase(C.rewardSkuId)),
        { products: L } =
            ((t = (0, d.A)()),
            (l = r.useMemo(
                () => (S ? [] : t(C.rankedSkuIds).filter((e) => e.skuId !== C.rewardSkuId || null != j)),
                [S, t, C.rankedSkuIds, j, C.rewardSkuId],
            )),
            (A = (0, u.p)()(l)),
            (x = (0, f.X)(A)),
            { products: (0, h.od)(x) }),
        T = r.useMemo(
            () =>
                !S &&
                0 !== C.rankedSkuIds.length &&
                !(L.length > 0) &&
                C.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = o.A.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [S, C.rankedSkuIds, L.length],
        ),
        I = S || T,
        { readyToClaim: N } = (0, E.K)(y, C.rewardSkuId),
        k = null == j && null != C.rewardSkuId && null != y;
    return (0, n.jsx)(a.A, {
        gap: "xl",
        children: I
            ? (0, n.jsx)(n.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(p.A, {}, t)),
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      k &&
                          N &&
                          (0, n.jsx)(
                              i.R9,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, n.jsx)(m.A, {
                                      category: y,
                                      rewardSkuId: C.rewardSkuId,
                                  }),
                              },
                              C.rewardSkuId,
                          ),
                      L.map((e, t) => {
                          let l = o.A.getCategoryForProduct(e.skuId);
                          return null == e || null == l
                              ? null
                              : (0, n.jsx)(
                                    i.R9,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "top 4",
                                            categoryPosition: 0,
                                        },
                                        children: (0, n.jsx)(
                                            b.A,
                                            {
                                                skuId: null == e ? void 0 : e.skuId,
                                                prioritizedCurrency: O === v.G2.ORBS ? g.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, g.UU)(e, O, _),
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
