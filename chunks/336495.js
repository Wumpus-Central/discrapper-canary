r.d(t, { default: () => S });
var n = r(627968),
    s = r(64700),
    a = r(17928),
    i = r(935462),
    l = r(289873),
    o = r(561794),
    u = r(4227),
    d = r(298072),
    c = r(642160),
    h = r(841702),
    p = r(466459),
    f = r(623373),
    y = r(599062),
    C = r(518598),
    g = r(479568);
let I = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    S = function (e) {
        let {
                skuId: t,
                transitionState: r,
                onClose: S,
                returnRef: x,
                analyticsLocations: O,
                analyticsSource: R,
                shouldCheckoutWithOrbs: b,
                tab: j,
                giftRecipient: k,
                giftingOrigin: w,
                showGoToShop: P,
            } = e,
            { product: A, category: E, state: N, retry: G } = (0, c.I)(t, { needsCategory: !0, seedCategoryStore: !0 }),
            { hasPreviouslyFetched: _, fetchPurchasesError: m } = (0, h.b5)(),
            v = _ || null != m;
        (0, o.pE)();
        let D = (0, a.cf)([u.A], () => (null != A ? (0, p.o)(u.A, A) : I), [A]),
            L = A?.isCategoryReward === !0 && !D.isPurchased;
        s.useEffect(() => {
            "ready" === N && v && L && S();
        }, [N, v, L, S]);
        let M = s.useRef(!1);
        return (s.useEffect(() => {
            if (M.current || null == A || !(0, f.B1)(A)) return;
            let e = A.variants.findIndex((e) => e.skuId === t);
            e > -1 && (0, d.n)(A, e), (M.current = !0);
        }, [A, t]),
        "ready" === N && v && !L && null != A && null != E)
            ? (0, n.jsx)(C.default, {
                  transitionState: r,
                  onClose: S,
                  returnRef: x,
                  product: A,
                  category: E,
                  analyticsLocations: O,
                  analyticsSource: R,
                  shouldCheckoutWithOrbs: b,
                  tab: j,
                  giftRecipient: k,
                  giftingOrigin: w,
                  showGoToShop: P,
              })
            : (0, n.jsx)(i.EO, {
                  returnRef: x,
                  transitionState: r,
                  size: i.rI.DYNAMIC,
                  parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                  children: (0, n.jsx)(i.$m, {
                      children:
                          "error" === N
                              ? (0, n.jsx)(y.h, { onRetry: G, errorOrigin: y.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: g.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
