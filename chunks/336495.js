r.d(t, { default: () => x });
var n = r(627968),
    a = r(64700),
    i = r(17928),
    s = r(935462),
    l = r(289873),
    u = r(561794),
    o = r(4227),
    d = r(298072),
    c = r(642160),
    f = r(841702),
    h = r(466459),
    p = r(623373),
    y = r(599062),
    C = r(230540),
    g = r(479568);
let I = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    x = function (e) {
        let {
                skuId: t,
                transitionState: r,
                onClose: x,
                returnRef: O,
                analyticsLocations: R,
                analyticsSource: S,
                shouldCheckoutWithOrbs: b,
                tab: j,
                giftRecipient: k,
                giftingOrigin: P,
            } = e,
            { product: w, category: A, state: E, retry: N } = (0, c.I)(t, { needsCategory: !0, seedCategoryStore: !0 }),
            { hasPreviouslyFetched: _, fetchPurchasesError: m } = (0, f.b5)(),
            v = _ || null != m;
        (0, u.pE)();
        let D = (0, i.cf)([o.A], () => (null != w ? (0, h.o)(o.A, w) : I), [w]),
            G = w?.isCategoryReward === !0 && !D.isPurchased;
        a.useEffect(() => {
            "ready" === E && v && G && x();
        }, [E, v, G, x]);
        let L = a.useRef(!1);
        return (a.useEffect(() => {
            if (L.current || null == w || !(0, p.B1)(w)) return;
            let e = w.variants.findIndex((e) => e.skuId === t);
            e > -1 && (0, d.n)(w, e), (L.current = !0);
        }, [w, t]),
        "ready" === E && v && !G && null != w && null != A)
            ? (0, n.jsx)(C.default, {
                  transitionState: r,
                  onClose: x,
                  returnRef: O,
                  product: w,
                  category: A,
                  analyticsLocations: R,
                  analyticsSource: S,
                  shouldCheckoutWithOrbs: b,
                  tab: j,
                  giftRecipient: k,
                  giftingOrigin: P,
              })
            : (0, n.jsx)(s.EO, {
                  returnRef: O,
                  transitionState: r,
                  size: s.rI.DYNAMIC,
                  parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
                  children: (0, n.jsx)(s.$m, {
                      children:
                          "error" === E
                              ? (0, n.jsx)(y.h, { onRetry: N, errorOrigin: y.A.GIFT_MODAL })
                              : (0, n.jsx)("div", {
                                    className: g.g,
                                    children: (0, n.jsx)(l.y, { type: l.t.SPINNING_CIRCLE }),
                                }),
                  }),
              });
    };
