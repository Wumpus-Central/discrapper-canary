r.d(t, { default: () => I });
var n = r(627968),
    s = r(64700),
    i = r(17928),
    l = r(935462),
    a = r(289873),
    o = r(561794),
    u = r(4227),
    c = r(298072),
    d = r(841702),
    h = r(466459),
    p = r(590572),
    f = r(623373),
    C = r(599062),
    y = r(518598),
    g = r(174992);
let I = function (e) {
    let {
            skuId: t,
            transitionState: r,
            onClose: I,
            returnRef: S,
            analyticsLocations: b,
            analyticsSource: x,
            shouldCheckoutWithOrbs: R,
            tab: j,
            giftRecipient: k,
            giftingOrigin: A,
            showGoToShop: E,
        } = e,
        { product: N, category: O, state: w, retry: G } = (0, p.A)(t, { needsCategory: !0, seedCategoryStore: !0 }),
        { hasPreviouslyFetched: _, fetchPurchasesError: m } = (0, d.b5)(),
        v = _ || null != m;
    (0, o.pE)();
    let D = (0, i.bG)([u.A], () => (null != N ? (0, h.o)(u.A, N) : null), [N]),
        L = N?.isCategoryReward === !0 && null != D && !D.isPurchased;
    s.useEffect(() => {
        "ready" === w && v && L && I();
    }, [w, v, L, I]);
    let M = s.useRef(!1);
    return (s.useEffect(() => {
        if (M.current || null == N || !(0, f.B1)(N)) return;
        let e = N.variants.findIndex((e) => e.skuId === t);
        e > -1 && (0, c.n)(N, e), (M.current = !0);
    }, [N, t]),
    "ready" === w && v && !L && null != N && null != O)
        ? (0, n.jsx)(y.default, {
              transitionState: r,
              onClose: I,
              returnRef: S,
              product: N,
              category: O,
              analyticsLocations: b,
              analyticsSource: x,
              shouldCheckoutWithOrbs: R,
              tab: j,
              giftRecipient: k,
              giftingOrigin: A,
              showGoToShop: E,
          })
        : (0, n.jsx)(l.EO, {
              returnRef: S,
              transitionState: r,
              size: l.rI.DYNAMIC,
              parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
              children: (0, n.jsx)(l.$m, {
                  children:
                      "error" === w
                          ? (0, n.jsx)(C.h, { onRetry: G, errorOrigin: C.A.GIFT_MODAL })
                          : (0, n.jsx)("div", {
                                className: g.g,
                                children: (0, n.jsx)(a.y, { type: a.t.SPINNING_CIRCLE }),
                            }),
              }),
          });
};
