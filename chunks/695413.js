"use strict";
s.d(t, { A: () => A });
var n = s(627968),
    l = s(64700),
    r = s(311907),
    a = s(951707),
    i = s(440938),
    o = s(590180),
    c = s(4227),
    d = s(940980),
    u = s(511265),
    g = s(313276),
    h = s(206077),
    _ = s(751304),
    m = s(561769),
    p = s(484469),
    f = s(661623),
    E = s(357704),
    x = s(758836);
let A = (e) => {
    let t,
        s,
        A,
        { isBlockLoading: C = !1, heroBlock: S, tab: b } = e,
        v = (0, d.W)("RewardHeroBlockCards"),
        L = l.useMemo(() => o.A.getCategoryForProduct(S.rewardSkuId), [S.rewardSkuId]),
        I = (0, r.bG)([c.A], () => c.A.getPurchase(S.rewardSkuId)),
        { products: j } =
            ((t = (0, g.A)()),
            (s = l.useMemo(
                () => (C ? [] : t(S.rankedSkuIds).filter((e) => e.skuId !== S.rewardSkuId || null != I)),
                [C, t, S.rankedSkuIds, I, S.rewardSkuId],
            )),
            (A = (0, u.p)()(s)),
            { products: (0, h.X)(A) }),
        N = l.useMemo(
            () =>
                !C &&
                0 !== S.rankedSkuIds.length &&
                !(j.length > 0) &&
                S.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [C, S.rankedSkuIds, j.length],
        ),
        T = C || N,
        { readyToClaim: O } = (0, E.K)(L, S.rewardSkuId),
        y = null == I && null != S.rewardSkuId && null != L;
    return (0, n.jsx)(a.A, {
        gap: "xl",
        children: T
            ? (0, n.jsx)(n.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(p.A, {}, t)),
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      y &&
                          O &&
                          (0, n.jsx)(
                              i.R9,
                              {
                                  newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                  children: (0, n.jsx)(f.A, { category: L, rewardSkuId: S.rewardSkuId }),
                              },
                              S.rewardSkuId,
                          ),
                      j.map((e, t) => {
                          let s = o.A.getCategoryForProduct(e.skuId);
                          return null == e || null == s
                              ? null
                              : (0, n.jsx)(
                                    i.R9,
                                    {
                                        newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                        children: (0, n.jsx)(
                                            _.A,
                                            {
                                                skuId: e?.skuId,
                                                prioritizedCurrency:
                                                    b === x.G2.ORBS ? m.Hi.ORBS : v ? m.Hi.FIAT : void 0,
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
