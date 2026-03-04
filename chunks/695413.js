"use strict";
s.d(t, { A: () => C });
var n = s(627968),
    r = s(64700),
    l = s(311907),
    i = s(720462),
    a = s(440938),
    o = s(590180),
    c = s(4227),
    d = s(940980),
    u = s(511265),
    _ = s(313276),
    g = s(206077),
    m = s(751304),
    h = s(561769),
    p = s(484469),
    f = s(661623),
    x = s(357704),
    E = s(758836);
let C = (e) => {
    let t,
        s,
        C,
        { isBlockLoading: b = !1, heroBlock: A, tab: S } = e,
        v = (0, a.uM)(),
        I = (0, d.W)("RewardHeroBlockCards"),
        L = r.useMemo(() => o.A.getCategoryForProduct(A.rewardSkuId), [A.rewardSkuId]),
        j = (0, l.bG)([c.A], () => c.A.getPurchase(A.rewardSkuId)),
        { products: k } =
            ((t = (0, _.A)()),
            (s = r.useMemo(
                () => (b ? [] : t(A.rankedSkuIds).filter((e) => e.skuId !== A.rewardSkuId || null != j)),
                [b, t, A.rankedSkuIds, j, A.rewardSkuId],
            )),
            (C = (0, u.p)()(s)),
            { products: (0, g.X)(C) }),
        T = r.useMemo(
            () =>
                !b &&
                0 !== A.rankedSkuIds.length &&
                !(k.length > 0) &&
                A.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [b, A.rankedSkuIds, k.length],
        ),
        O = b || T,
        { readyToClaim: y } = (0, x.K)(L, A.rewardSkuId),
        N = null == j && null != A.rewardSkuId && null != L;
    return (0, n.jsx)(i.A, {
        gap: "xl",
        children: O
            ? (0, n.jsx)(n.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(p.A, {}, t)),
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      N &&
                          y &&
                          (0, n.jsx)(
                              a.R9,
                              {
                                  newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                  children: (0, n.jsx)(f.A, { category: L, rewardSkuId: A.rewardSkuId }),
                              },
                              A.rewardSkuId,
                          ),
                      k.map((e, t) => {
                          let s = o.A.getCategoryForProduct(e.skuId);
                          return null == e || null == s
                              ? null
                              : (0, n.jsx)(
                                    a.R9,
                                    {
                                        newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                        children: (0, n.jsx)(
                                            m.A,
                                            {
                                                skuId: e?.skuId,
                                                prioritizedCurrency:
                                                    S === E.G2.ORBS ? h.Hi.ORBS : I ? h.Hi.FIAT : void 0,
                                                onClickAnalytics: (0, h.UU)(e, S, v),
                                            },
                                            e.skuId,
                                        ),
                                    },
                                    e?.skuId,
                                );
                      }),
                  ],
              }),
    });
};
