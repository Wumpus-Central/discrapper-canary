r.d(t, { default: () => I });
var n = r(627968),
    s = r(64700),
    l = r(17928),
    a = r(935462),
    i = r(289873),
    u = r(561794),
    o = r(4227),
    d = r(298072),
    c = r(841702),
    h = r(466459),
    p = r(494084),
    f = r(623373),
    C = r(599062),
    y = r(571047),
    g = r(479568);
let I = (e) => {
    let {
            skuId: t,
            transitionState: r,
            onClose: I,
            returnRef: b,
            analyticsLocations: x,
            analyticsSource: R,
            shouldCheckoutWithOrbs: S,
            tab: j,
            giftRecipient: k,
            giftingOrigin: A,
        } = e,
        { product: E, category: N, state: O, retry: _ } = (0, p.A)(t, { needsCategory: !0, seedCategoryStore: !0 }),
        { hasPreviouslyFetched: m, fetchPurchasesError: v } = (0, c.b5)(),
        w = m || null != v;
    (0, u.pE)();
    let D = (0, l.bG)([o.A], () => (null != E ? (0, h.o)(o.A, E) : null), [E]),
        G = E?.isCategoryReward === !0 && null != D && !D.isPurchased;
    s.useEffect(() => {
        "ready" === O && w && G && I();
    }, [O, w, G, I]);
    let L = s.useRef(!1);
    return (s.useEffect(() => {
        if (L.current || null == E || !(0, f.B1)(E)) return;
        let e = E.variants.findIndex((e) => e.skuId === t);
        e > -1 && (0, d.n)(E, e), (L.current = !0);
    }, [E, t]),
    "ready" === O && w && !G && null != E && null != N)
        ? (0, n.jsx)(y.default, {
              transitionState: r,
              onClose: I,
              returnRef: b,
              product: E,
              category: N,
              analyticsLocations: x,
              analyticsSource: R,
              shouldCheckoutWithOrbs: S,
              tab: j,
              giftRecipient: k,
              giftingOrigin: A,
          })
        : (0, n.jsx)(a.EO, {
              returnRef: b,
              transitionState: r,
              size: a.rI.DYNAMIC,
              parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
              children: (0, n.jsx)(a.$m, {
                  children:
                      "error" === O
                          ? (0, n.jsx)(C.h, { onRetry: _, errorOrigin: C.A.GIFT_MODAL })
                          : (0, n.jsx)("div", {
                                className: g.g,
                                children: (0, n.jsx)(i.y, { type: i.t.SPINNING_CIRCLE }),
                            }),
              }),
          });
};
