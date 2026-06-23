r.d(t, { default: () => I });
var n = r(627968),
    s = r(64700),
    i = r(17928),
    l = r(935462),
    a = r(289873),
    u = r(561794),
    o = r(4227),
    c = r(298072),
    d = r(841702),
    f = r(466459),
    h = r(494084),
    p = r(623373),
    C = r(599062),
    y = r(571047),
    g = r(479568);
let I = function (e) {
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
        { product: E, category: N, state: O, retry: _ } = (0, h.A)(t, { needsCategory: !0, seedCategoryStore: !0 }),
        { hasPreviouslyFetched: m, fetchPurchasesError: v } = (0, d.b5)(),
        w = m || null != v;
    (0, u.pE)();
    let D = (0, i.bG)([o.A], () => (null != E ? (0, f.o)(o.A, E) : null), [E]),
        G = E?.isCategoryReward === !0 && null != D && !D.isPurchased;
    s.useEffect(() => {
        "ready" === O && w && G && I();
    }, [O, w, G, I]);
    let L = s.useRef(!1);
    return (s.useEffect(() => {
        if (L.current || null == E || !(0, p.B1)(E)) return;
        let e = E.variants.findIndex((e) => e.skuId === t);
        e > -1 && (0, c.n)(E, e), (L.current = !0);
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
        : (0, n.jsx)(l.EO, {
              returnRef: b,
              transitionState: r,
              size: l.rI.DYNAMIC,
              parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
              children: (0, n.jsx)(l.$m, {
                  children:
                      "error" === O
                          ? (0, n.jsx)(C.h, { onRetry: _, errorOrigin: C.A.GIFT_MODAL })
                          : (0, n.jsx)("div", {
                                className: g.g,
                                children: (0, n.jsx)(a.y, { type: a.t.SPINNING_CIRCLE }),
                            }),
              }),
          });
};
