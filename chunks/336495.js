r.d(t, { default: () => O });
var n = r(477900),
    a = r(582128),
    i = r(17928),
    s = r(935462),
    l = r(289873),
    u = r(744082),
    o = r(594832),
    d = r(4227),
    c = r(298072),
    f = r(682301),
    h = r(841702),
    p = r(466459),
    y = r(623373),
    C = r(599062),
    g = r(746669),
    I = r(652215),
    j = r(627805);
let x = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    O = function (e) {
        let {
                skuId: t,
                transitionState: r,
                onClose: O,
                returnRef: R,
                analyticsLocations: S,
                analyticsSource: b,
                shouldCheckoutWithOrbs: k,
                tab: A,
                giftRecipient: P,
                giftingOrigin: w,
            } = e,
            {
                product: E,
                category: N,
                state: _,
                retry: m,
            } = (0, f.IK)(t, { needsCategory: !0, seedCategoryStore: !0 }),
            { hasPreviouslyFetched: v, fetchPurchasesError: D } = (0, h.b5)(),
            G = v || null != D;
        (0, u.A)(I.FYj), (0, o.pE)();
        let L = (0, i.cf)([d.A], () => (null != E ? (0, p.o)(d.A, E) : x), [E]),
            M = E?.isCategoryReward === !0 && !L.isPurchased;
        a.useEffect(() => {
            "ready" === _ && G && M && O();
        }, [_, G, M, O]);
        let B = a.useRef(!1);
        return (a.useEffect(() => {
            if (B.current || null == E || !(0, y.B1)(E)) return;
            let e = E.variants.findIndex((e) => e.skuId === t);
            e > -1 && (0, c.n)(E, e), (B.current = !0);
        }, [E, t]),
        "ready" === _ && G && !M && null != E && null != N)
            ? (0, n.jsx)(g.default, {
                  transitionState: r,
                  onClose: O,
                  returnRef: R,
                  product: E,
                  category: N,
                  analyticsLocations: S,
                  analyticsSource: b,
                  shouldCheckoutWithOrbs: k,
                  tab: A,
                  giftRecipient: P,
                  giftingOrigin: w,
              })
            : (0, n.jsx)(s.EO, {
                  returnRef: R,
                  transitionState: r,
                  size: s.rI.DYNAMIC,
                  parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                  children: (0, n.jsx)(s.$m, {
                      children:
                          "error" === _
                              ? (0, n.jsx)(C.h, { onRetry: m, errorOrigin: C.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: j.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
