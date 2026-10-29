r.d(t, { default: () => A });
var n = r(477900),
    i = r(582128),
    s = r(17928),
    a = r(935462),
    l = r(289873),
    u = r(354328),
    d = r(744082),
    o = r(561794),
    c = r(4227),
    h = r(298072),
    p = r(682301),
    f = r(841702),
    y = r(466459),
    C = r(623373),
    g = r(599062),
    I = r(610421),
    b = r(652215),
    j = r(850186);
let x = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    A = function (e) {
        let {
                skuId: t,
                flattenVariants: r = !1,
                transitionState: A,
                onClose: O,
                returnRef: R,
                analyticsLocations: S,
                analyticsSource: k,
                shouldCheckoutWithOrbs: P,
                tab: _,
                giftRecipient: w,
                giftingOrigin: E,
                initialVariantSkuId: N,
            } = e,
            m = (0, u.A)("shop_include_unpublished"),
            {
                product: v,
                category: D,
                state: G,
                retry: L,
            } = (0, p.IK)(t, { needsCategory: !0, seedCategoryStore: !0, includeUnpublished: m, flattenVariants: r }),
            { hasPreviouslyFetched: M, fetchPurchasesError: B } = (0, f.b5)(),
            F = M || null != B;
        ((0, d.A)(b.FYj), (0, o.pE)());
        let Y = (0, s.cf)([c.A], () => (null != v ? (0, y.o)(c.A, v) : x), [v]),
            z = v?.isCategoryReward === !0 && !Y.isPurchased;
        i.useEffect(() => {
            "ready" === G && F && z && O();
        }, [G, F, z, O]);
        let K = i.useRef(!1);
        return (i.useEffect(() => {
            if (K.current || null == v || !(0, C.B1)(v)) return;
            let e = N ?? t,
                r = v.variants.findIndex((t) => t.skuId === e);
            (r > -1 && (0, h.n)(v, r), (K.current = !0));
        }, [v, t, N]),
        "ready" === G && F && !z && null != v && null != D)
            ? (0, n.jsx)(I.default, {
                  transitionState: A,
                  onClose: O,
                  returnRef: R,
                  product: v,
                  category: D,
                  analyticsLocations: S,
                  analyticsSource: k,
                  shouldCheckoutWithOrbs: P,
                  tab: _,
                  giftRecipient: w,
                  giftingOrigin: E,
              })
            : (0, n.jsx)(a.EO, {
                  returnRef: R,
                  transitionState: A,
                  size: a.rI.DYNAMIC,
                  parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                  children: (0, n.jsx)(a.$m, {
                      children:
                          "error" === G
                              ? (0, n.jsx)(g.h, { onRetry: L, errorOrigin: g.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: j.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
