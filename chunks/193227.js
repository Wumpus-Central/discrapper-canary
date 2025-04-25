n.d(t, { Z: () => I }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(479446),
    d = n(981632),
    b = n(594174),
    p = n(381585),
    f = n(328347),
    g = n(370039),
    h = n(937510),
    m = n(303952),
    _ = n(853748),
    C = n(823941),
    v = n(38900),
    x = n(709999),
    O = n(81136),
    j = n(619899),
    y = n(302800),
    k = n(215023),
    S = n(474936),
    P = n(484920);
function E(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: i, isGiftEasterEggEnabled: c } = e,
        u = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        d = (0, j.St)(t);
    return null == u || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(s.Text, {
                            className: P.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(s.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: P.cardsContainer,
                      children: d.map((e, t) =>
                          (0, r.jsx)(
                              p.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      x.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: i,
                                          category: a,
                                          product: e,
                                          user: u,
                                          isGiftEasterEggEnabled: c,
                                          tab: k.AW.CATALOG
                                      },
                                      e.skuId
                                  )
                              },
                              e.skuId
                          )
                      )
                  })
              ]
          });
}
function w(e) {
    var { category: t, initialItemCardRef: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['category', 'initialItemCardRef']);
    let i = (0, h.l)(t.products),
        s = (0, g.a)()(i),
        c = (0, o.e7)([f.Z], () => f.Z.initialProductSkuId),
        u = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === c || (null == (r = e.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = t.current);
            },
            [c, n]
        );
    return (0, r.jsx)(
        E,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                products: s,
                handleShopCardMount: u,
                category: t
            },
            a
        )
    );
}
function B(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: b, showEasterEggToggle: p, isFullScreen: f } = e,
        g = l.useRef(10 + 70 * Math.random()),
        [h, m] = l.useState(!1),
        v = (0, y.M7)(t.skuId),
        x = (0, c.O)(
            (e) => {
                m(e && null != v);
            },
            f ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: P.categoryWrapper,
        ref: x,
        children: [
            p &&
                (0, r.jsx)(s.P3F, {
                    className: i()(P.hiddenWumpus, { [P.hiddenWumpusEnabled]: o }),
                    onClick: () => b(!0),
                    style: { left: ''.concat(g.current, '%') },
                    children: (0, r.jsx)(d.Z, {
                        idleAnimationState: u.SR.IDLE,
                        giftStyle: S.Cj.BOX
                    })
                }),
            (0, r.jsx)(C.Z, {
                category: t,
                hideLimitedTimeBadge: null != v
            }),
            (0, r.jsx)(w, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: o
            }),
            null != v &&
                null != t.unpublishedAt &&
                (0, r.jsx)(_.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: h,
                    displayOptions: v,
                    isFullScreen: f
                })
        ]
    });
}
function I(e) {
    var t;
    let { isFetchingCategories: n, sortedCategories: a, setCategoryRef: i, isPremiumUser: o, initialItemCardRef: s, setIsGiftEasterEggEnabled: c, isGiftEasterEggEnabled: u, isFullScreen: d } = e,
        b = (0, p.sp)(),
        f = null != (t = null == b ? void 0 : b.sessionId) ? t : '',
        { noCache: g, includeUnpublished: h } = (0, O.Z)();
    return (l.useEffect(() => {
        (0, m.n)({
            sessionId: f,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: k.AW.CATALOG,
            isFullScreen: d,
            unpublishedCategoriesShown: h,
            cacheDisabled: g
        });
    }, []),
    l.useEffect(() => {
        n ||
            0 === a.length ||
            (0, m.n)({
                sessionId: f,
                checkpoint: m.a.SHOP_RENDERED,
                tab: k.AW.CATALOG,
                isFullScreen: d,
                unpublishedCategoriesShown: h,
                cacheDisabled: g
            });
    }, [f, d, h, g, n, a.length]),
    n)
        ? (0, r.jsx)(v.Z, {})
        : (0, r.jsx)('div', {
              className: P.categories,
              children: a
                  .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                  .filter((e) => {
                      let { products: t } = e;
                      return t.length > 0;
                  })
                  .map((e, t) =>
                      (0, r.jsx)(
                          'div',
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(p.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(B, {
                                      isPremiumUser: o,
                                      category: e,
                                      initialItemCardRef: s,
                                      setIsGiftEasterEggEnabled: c,
                                      isGiftEasterEggEnabled: u,
                                      isFullScreen: d
                                  })
                              })
                          },
                          e.skuId
                      )
                  )
          });
}
