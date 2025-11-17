n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(393903),
    u = n(448986),
    d = n(381585),
    p = n(597688),
    g = n(1870),
    f = n(884697),
    h = n(370039),
    C = n(937510),
    m = n(653126),
    _ = n(786040),
    b = n(401975),
    v = n(373183),
    x = n(934760),
    E = n(619899),
    O = n(215023),
    S = n(310582);
(0, f.IC)(90);
let y = (e) => {
    let { isBlockLoading: t = !1, heroBlock: n, tab: i } = e,
        f = (0, d.sp)(),
        y = l.useMemo(() => p.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
        j = (0, o.e7)([g.Z], () => g.Z.getPurchase(n.rewardSkuId)),
        { cardContainerRef: k, totalCards: I } = ((e) => {
            let [t, n] = l.useState(1),
                r = (0, s.dQu)(s.TVs.space.SPACE_XL),
                i = (0, u.Z)(() => {
                    (null == a ? void 0 : a.current) != null &&
                        n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))));
                }),
                a = (0, c.y)(i, [r, e], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                    enabled: e,
                });
            return {
                cardContainerRef: l.useCallback(
                    (t) => {
                        (a.current = t), null != t && e && i();
                    },
                    [i, a, e],
                ),
                totalCards: e ? t : void 0,
            };
        })(i !== O.AW.ORBS),
        { products: T } = ((e, t, n, r) => {
            let i = (0, x.Z)(),
                a = (0, o.e7)([p.Z], () => p.Z.products),
                s = l.useMemo(
                    () =>
                        e
                            ? []
                            : a.size > 0
                              ? i(t.rankedSkuIds).filter((e) => e.skuId !== t.rewardSkuId || null != r)
                              : [],
                    [e, i, t.rankedSkuIds, a, r, t.rewardSkuId],
                ),
                c = (0, h.a)()(s),
                u = (0, C.l)(c).slice(0, n);
            return { products: (0, E.St)(u) };
        })(t, n, I, j),
        L = l.useMemo(
            () =>
                !t &&
                0 !== n.rankedSkuIds.length &&
                !(T.length > 0) &&
                n.rankedSkuIds.every((e) => {
                    var t;
                    return (null == (t = p.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                }),
            [t, n.rankedSkuIds, T.length],
        ),
        B = t || L;
    return (0, r.jsx)("div", {
        className: a()({
            [S.row]: i === O.AW.HOME,
            [S.feed]: i === O.AW.ORBS,
        }),
        ref: k,
        children: B
            ? (0, r.jsx)(r.Fragment, { children: [...Array(null != I ? I : 4)].map((e, t) => (0, r.jsx)(b.Z, {}, t)) })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      null == j &&
                          null != n.rewardSkuId &&
                          null != y &&
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: {
                                      tilePosition: 0,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                  },
                                  children: (0, r.jsx)(v.Z, {
                                      category: y,
                                      rewardSkuId: n.rewardSkuId,
                                  }),
                              },
                              n.rewardSkuId,
                          ),
                      T.map((e, t) => {
                          let n = p.Z.getCategoryForProduct(e.skuId);
                          return null == e || null == n
                              ? null
                              : (0, r.jsx)(
                                    d.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "top 4",
                                            categoryPosition: 0,
                                        },
                                        children: (0, r.jsx)(
                                            m.Z,
                                            {
                                                skuId: null == e ? void 0 : e.skuId,
                                                prioritizedCurrency: i === O.AW.ORBS ? _.tA.ORBS : void 0,
                                                onClickAnalytics: (0, _.wO)(e, i, f),
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
