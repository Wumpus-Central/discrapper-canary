var n = r(477900),
    i = r(582128),
    a = r(855986),
    s = r(935462),
    l = r(289873),
    u = r(354328),
    d = r(744082),
    o = r(634110),
    c = r(4227),
    p = r(298072),
    f = r(682301),
    h = r(841702),
    y = r(466459),
    C = r(623373),
    g = r(599062),
    I = r(496779),
    j = r(652215),
    x = r(850186);
let A = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
r.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    skuId: t,
                    flattenVariants: r = !1,
                    transitionState: R,
                    onClose: S,
                    returnRef: b,
                    analyticsLocations: O,
                    analyticsSource: P,
                    tab: _,
                    giftRecipient: k,
                    giftingOrigin: w,
                    initialVariantSkuId: E,
                } = e,
                N = (0, u.A)("shop_include_unpublished"),
                {
                    product: m,
                    category: v,
                    state: D,
                    retry: G,
                } = (0, f.IK)(t, {
                    needsCategory: !0,
                    seedCategoryStore: !0,
                    includeUnpublished: N,
                    flattenVariants: r,
                }),
                { hasPreviouslyFetched: L, fetchPurchasesError: M } = (0, h.b5)(),
                B = L || null != M;
            ((0, d.A)(j.FYj), (0, o.pE)());
            let F = (0, a.cf)([c.A], () => (null != m ? (0, y.o)(c.A, m) : A), [m]),
                Y = m?.isCategoryReward === !0 && !F.isPurchased;
            i.useEffect(() => {
                "ready" === D && B && Y && S();
            }, [D, B, Y, S]);
            let z = i.useRef(!1);
            return (i.useEffect(() => {
                if (z.current || null == m || !(0, C.B1)(m)) return;
                let e = E ?? t,
                    r = m.variants.findIndex((t) => t.skuId === e);
                (r > -1 && (0, p.n)(m, r), (z.current = !0));
            }, [m, t, E]),
            "ready" === D && B && !Y && null != m && null != v)
                ? (0, n.jsx)(I.default, {
                      transitionState: R,
                      onClose: S,
                      returnRef: b,
                      product: m,
                      category: v,
                      analyticsLocations: O,
                      analyticsSource: P,
                      tab: _,
                      giftRecipient: k,
                      giftingOrigin: w,
                  })
                : (0, n.jsx)(s.EO, {
                      returnRef: b,
                      transitionState: R,
                      size: s.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                      children: (0, n.jsx)(s.$m, {
                          children:
                              "error" === D
                                  ? (0, n.jsx)(g.h, { onRetry: G, errorOrigin: g.A.GIFT_MODAL })
                                  : (0, n.jsx)("div", {
                                        className: x.g,
                                        children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                    }),
                      }),
                  });
        },
    },
);
