r.d(t, { default: () => I });
var n = r(627968),
    l = r(64700),
    a = r(17928),
    s = r(935462),
    i = r(289873),
    o = r(561794),
    u = r(4227),
    d = r(298072),
    c = r(581964),
    f = r(841702),
    h = r(466459),
    p = r(494084),
    C = r(623373),
    g = r(599062),
    y = r(125808),
    S = r(815076),
    b = r(479568);
let I = (e) => {
    let {
            skuId: t,
            transitionState: r,
            onClose: I,
            returnRef: x,
            analyticsLocations: A,
            analyticsSource: R,
            shouldCheckoutWithOrbs: j,
            tab: k,
            giftRecipient: E,
            giftingOrigin: N,
        } = e,
        { product: O, category: D, state: M, retry: P } = (0, p.A)(t, { needsCategory: !0, seedCategoryStore: !0 }),
        { hasPreviouslyFetched: _, fetchPurchasesError: m } = (0, f.b5)(),
        v = _ || null != m;
    (0, o.pE)();
    let w = c.A.useConfig({ location: "CollectiblesShopStandaloneProductDetailsModal" }) ? S.default : y.default,
        G = (0, a.bG)([u.A], () => (null != O ? (0, h.o)(u.A, O) : null), [O]),
        L = O?.isCategoryReward === !0 && null != G && !G.isPurchased;
    l.useEffect(() => {
        "ready" === M && v && L && I();
    }, [M, v, L, I]);
    let z = l.useRef(!1);
    return (l.useEffect(() => {
        if (z.current || null == O || !(0, C.B1)(O)) return;
        let e = O.variants.findIndex((e) => e.skuId === t);
        e > -1 && (0, d.n)(O, e), (z.current = !0);
    }, [O, t]),
    "ready" === M && v && !L && null != O && null != D)
        ? (0, n.jsx)(w, {
              transitionState: r,
              onClose: I,
              returnRef: x,
              product: O,
              category: D,
              analyticsLocations: A,
              analyticsSource: R,
              shouldCheckoutWithOrbs: j,
              tab: k,
              giftRecipient: E,
              giftingOrigin: N,
          })
        : (0, n.jsx)(s.EO, {
              returnRef: x,
              transitionState: r,
              size: s.rI.DYNAMIC,
              parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
              children: (0, n.jsx)(s.$m, {
                  children:
                      "error" === M
                          ? (0, n.jsx)(g.h, { onRetry: P, errorOrigin: g.A.GIFT_MODAL })
                          : (0, n.jsx)("div", {
                                className: b.g,
                                children: (0, n.jsx)(i.y, { type: i.t.SPINNING_CIRCLE }),
                            }),
              }),
          });
};
