"use strict";
s.d(t, { A: () => b });
var n = s(627968),
    r = s(64700),
    l = s(311907),
    a = s(720462),
    i = s(440938),
    o = s(590180),
    c = s(4227),
    d = s(511265),
    u = s(313276),
    g = s(206077),
    m = s(751304),
    _ = s(561769),
    h = s(484469),
    p = s(661623),
    f = s(940622),
    E = s(357704),
    C = s(758836);
let b = (e) => {
    let t,
        s,
        b,
        A,
        { isBlockLoading: x = !1, heroBlock: S, tab: v } = e,
        L = (0, i.uM)(),
        T = r.useMemo(() => o.A.getCategoryForProduct(S.rewardSkuId), [S.rewardSkuId]),
        I = (0, l.bG)([c.A], () => c.A.getPurchase(S.rewardSkuId)),
        { products: O } =
            ((t = (0, u.A)()),
            (s = r.useMemo(
                () => (x ? [] : t(S.rankedSkuIds).filter((e) => e.skuId !== S.rewardSkuId || null != I)),
                [x, t, S.rankedSkuIds, I, S.rewardSkuId],
            )),
            (b = (0, d.p)()(s)),
            (A = (0, g.X)(b)),
            { products: (0, f.od)(A) }),
        y = r.useMemo(
            () =>
                !x &&
                0 !== S.rankedSkuIds.length &&
                !(O.length > 0) &&
                S.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [x, S.rankedSkuIds, O.length],
        ),
        j = x || y,
        { readyToClaim: N } = (0, E.K)(T, S.rewardSkuId),
        k = null == I && null != S.rewardSkuId && null != T;
    return (0, n.jsx)(a.A, {
        gap: "xl",
        children: j
            ? (0, n.jsx)(n.Fragment, {
                  children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(h.A, {}, t)),
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      k &&
                          N &&
                          (0, n.jsx)(
                              i.R9,
                              {
                                  newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                  children: (0, n.jsx)(p.A, { category: T, rewardSkuId: S.rewardSkuId }),
                              },
                              S.rewardSkuId,
                          ),
                      O.map((e, t) => {
                          let s = o.A.getCategoryForProduct(e.skuId);
                          return null == e || null == s
                              ? null
                              : (0, n.jsx)(
                                    i.R9,
                                    {
                                        newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                        children: (0, n.jsx)(
                                            m.A,
                                            {
                                                skuId: e?.skuId,
                                                prioritizedCurrency: v === C.G2.ORBS ? _.Hi.ORBS : void 0,
                                                onClickAnalytics: (0, _.UU)(e, v, L),
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
