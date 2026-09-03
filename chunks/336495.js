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
                transitionState: r,
                onClose: A,
                returnRef: O,
                analyticsLocations: R,
                analyticsSource: S,
                shouldCheckoutWithOrbs: k,
                tab: P,
                giftRecipient: _,
                giftingOrigin: w,
            } = e,
            E = (0, u.A)("shop_include_unpublished"),
            {
                product: N,
                category: m,
                state: v,
                retry: D,
            } = (0, p.IK)(t, { needsCategory: !0, seedCategoryStore: !0, includeUnpublished: E }),
            { hasPreviouslyFetched: G, fetchPurchasesError: L } = (0, f.b5)(),
            M = G || null != L;
        (0, d.A)(b.FYj), (0, o.pE)();
        let B = (0, s.cf)([c.A], () => (null != N ? (0, y.o)(c.A, N) : x), [N]),
            F = N?.isCategoryReward === !0 && !B.isPurchased;
        i.useEffect(() => {
            "ready" === v && M && F && A();
        }, [v, M, F, A]);
        let Y = i.useRef(!1);
        return (i.useEffect(() => {
            if (Y.current || null == N || !(0, C.B1)(N)) return;
            let e = N.variants.findIndex((e) => e.skuId === t);
            e > -1 && (0, h.n)(N, e), (Y.current = !0);
        }, [N, t]),
        "ready" === v && M && !F && null != N && null != m)
            ? (0, n.jsx)(I.default, {
                  transitionState: r,
                  onClose: A,
                  returnRef: O,
                  product: N,
                  category: m,
                  analyticsLocations: R,
                  analyticsSource: S,
                  shouldCheckoutWithOrbs: k,
                  tab: P,
                  giftRecipient: _,
                  giftingOrigin: w,
              })
            : (0, n.jsx)(a.EO, {
                  returnRef: O,
                  transitionState: r,
                  size: a.rI.DYNAMIC,
                  parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                  children: (0, n.jsx)(a.$m, {
                      children:
                          "error" === v
                              ? (0, n.jsx)(g.h, { onRetry: D, errorOrigin: g.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: j.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
