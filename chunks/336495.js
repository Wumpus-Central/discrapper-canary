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
    I = r(746669),
    b = r(652215),
    j = r(627805);
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
            } = e,
            N = (0, u.A)("shop_include_unpublished"),
            {
                product: m,
                category: v,
                state: D,
                retry: G,
            } = (0, p.IK)(t, { needsCategory: !0, seedCategoryStore: !0, includeUnpublished: N, flattenVariants: r }),
            { hasPreviouslyFetched: L, fetchPurchasesError: M } = (0, f.b5)(),
            B = L || null != M;
        (0, d.A)(b.FYj), (0, o.pE)();
        let F = (0, s.cf)([c.A], () => (null != m ? (0, y.o)(c.A, m) : x), [m]),
            Y = m?.isCategoryReward === !0 && !F.isPurchased;
        i.useEffect(() => {
            "ready" === D && B && Y && O();
        }, [D, B, Y, O]);
        let z = i.useRef(!1);
        return (i.useEffect(() => {
            if (z.current || null == m || !(0, C.B1)(m)) return;
            let e = m.variants.findIndex((e) => e.skuId === t);
            e > -1 && (0, h.n)(m, e), (z.current = !0);
        }, [m, t]),
        "ready" === D && B && !Y && null != m && null != v)
            ? (0, n.jsx)(I.default, {
                  transitionState: A,
                  onClose: O,
                  returnRef: R,
                  product: m,
                  category: v,
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
                          "error" === D
                              ? (0, n.jsx)(g.h, { onRetry: G, errorOrigin: g.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: j.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
