r.d(t, { default: () => x });
var n = r(477900),
    i = r(582128),
    s = r(17928),
    a = r(935462),
    l = r(289873),
    o = r(744082),
    u = r(561794),
    d = r(4227),
    c = r(298072),
    h = r(71604),
    p = r(642160),
    f = r(841702),
    y = r(466459),
    C = r(623373),
    g = r(599062),
    I = r(983251),
    S = r(652215),
    b = r(835576);
let j = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    x = function (e) {
        let {
                skuId: t,
                transitionState: r,
                onClose: x,
                returnRef: O,
                analyticsLocations: R,
                analyticsSource: k,
                shouldCheckoutWithOrbs: A,
                tab: P,
                giftRecipient: w,
                giftingOrigin: E,
            } = e,
            { product: N, category: v, state: M, retry: _ } = (0, p.I)(t, { needsCategory: !0, seedCategoryStore: !0 }),
            { hasPreviouslyFetched: m, fetchPurchasesError: D } = (0, f.b5)(),
            G = m || null != D,
            L = (0, h.M)("CollectiblesShop");
        (0, o.A)(L ? S.FYj : void 0), (0, u.pE)();
        let B = (0, s.cf)([d.A], () => (null != N ? (0, y.o)(d.A, N) : j), [N]),
            F = N?.isCategoryReward === !0 && !B.isPurchased;
        i.useEffect(() => {
            "ready" === M && G && F && x();
        }, [M, G, F, x]);
        let Y = i.useRef(!1);
        return (i.useEffect(() => {
            if (Y.current || null == N || !(0, C.B1)(N)) return;
            let e = N.variants.findIndex((e) => e.skuId === t);
            e > -1 && (0, c.n)(N, e), (Y.current = !0);
        }, [N, t]),
        "ready" === M && G && !F && null != N && null != v)
            ? (0, n.jsx)(I.default, {
                  transitionState: r,
                  onClose: x,
                  returnRef: O,
                  product: N,
                  category: v,
                  analyticsLocations: R,
                  analyticsSource: k,
                  shouldCheckoutWithOrbs: A,
                  tab: P,
                  giftRecipient: w,
                  giftingOrigin: E,
              })
            : (0, n.jsx)(a.EO, {
                  returnRef: O,
                  transitionState: r,
                  size: a.rI.DYNAMIC,
                  parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                  children: (0, n.jsx)(a.$m, {
                      children:
                          "error" === M
                              ? (0, n.jsx)(g.h, { onRetry: _, errorOrigin: g.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: b.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
