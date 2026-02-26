"use strict";
n.d(t, { A: () => E });
var s = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(720462),
    i = n(440938),
    o = n(590180),
    c = n(4227),
    d = n(511265),
    u = n(313276),
    g = n(206077),
    _ = n(751304),
    m = n(561769),
    h = n(484469),
    p = n(661623),
    f = n(357704),
    x = n(758836);
let E = (e) => {
    let t,
        n,
        E,
        { isBlockLoading: C = !1, heroBlock: A, tab: b } = e,
        S = (0, i.uM)(),
        v = l.useMemo(() => o.A.getCategoryForProduct(A.rewardSkuId), [A.rewardSkuId]),
        L = (0, r.bG)([c.A], () => c.A.getPurchase(A.rewardSkuId)),
        { products: I } =
            ((t = (0, u.A)()),
            (n = l.useMemo(
                () => (C ? [] : t(A.rankedSkuIds).filter((e) => e.skuId !== A.rewardSkuId || null != L)),
                [C, t, A.rankedSkuIds, L, A.rewardSkuId],
            )),
            (E = (0, d.p)()(n)),
            { products: (0, g.X)(E) }),
        j = l.useMemo(
            () =>
                !C &&
                0 !== A.rankedSkuIds.length &&
                !(I.length > 0) &&
                A.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [C, A.rankedSkuIds, I.length],
        ),
        k = C || j,
        { readyToClaim: T } = (0, f.K)(v, A.rewardSkuId),
        O = null == L && null != A.rewardSkuId && null != v;
    return (0, s.jsx)(a.A, {
        gap: "xl",
        children: k
            ? (0, s.jsx)(s.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, s.jsx)(h.A, {}, t)),
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      O &&
                          T &&
                          (0, s.jsx)(
                              i.R9,
                              {
                                  newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                  children: (0, s.jsx)(p.A, { category: v, rewardSkuId: A.rewardSkuId }),
                              },
                              A.rewardSkuId,
                          ),
                      I.map((e, t) => {
                          let n = o.A.getCategoryForProduct(e.skuId);
                          return null == e || null == n
                              ? null
                              : (0, s.jsx)(
                                    i.R9,
                                    {
                                        newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                        children: (0, s.jsx)(
                                            _.A,
                                            {
                                                skuId: e?.skuId,
                                                prioritizedCurrency: b === x.G2.ORBS ? m.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, m.UU)(e, b, S),
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
