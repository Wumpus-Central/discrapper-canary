n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(479446),
    d = n(981632),
    p = n(594174),
    f = n(381585),
    b = n(328347),
    g = n(370039),
    h = n(937510),
    m = n(303952),
    _ = n(853748),
    C = n(823941),
    v = n(38900),
    O = n(709999),
    x = n(81136),
    S = n(619899),
    E = n(302800),
    y = n(215023),
    j = n(474936),
    P = n(484920);
function k(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: i, isGiftEasterEggEnabled: c } = e,
        u = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        d = (0, S.St)(t);
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
                              f.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      O.Z,
                                      {
                                          onMount: n,
                                          isPremiumUser: i,
                                          category: a,
                                          product: e,
                                          user: u,
                                          isGiftEasterEggEnabled: c,
                                          tab: y.AW.CATALOG
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
function T(e) {
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
        c = (0, o.e7)([b.Z], () => b.Z.initialProductSkuId),
        u = l.useCallback(
            (e, t) => {
                var r;
                (t.skuId === c || (null == (r = t.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = e.current);
            },
            [c, n]
        );
    return (0, r.jsx)(
        k,
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
function I(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: p, showEasterEggToggle: f, isFullScreen: b } = e,
        g = l.useRef(10 + 70 * Math.random()),
        [h, m] = l.useState(!1),
        v = (0, E.M7)(t.skuId),
        O = (0, c.O)(
            (e) => {
                m(e && null != v);
            },
            b ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: P.categoryWrapper,
        ref: O,
        children: [
            f &&
                (0, r.jsx)(s.P3F, {
                    className: i()(P.hiddenWumpus, { [P.hiddenWumpusEnabled]: o }),
                    onClick: () => p(!0),
                    style: { left: ''.concat(g.current, '%') },
                    children: (0, r.jsx)(d.Z, {
                        idleAnimationState: u.SR.IDLE,
                        giftStyle: j.Cj.BOX
                    })
                }),
            (0, r.jsx)(C.Z, {
                category: t,
                hideLimitedTimeBadge: null != v
            }),
            (0, r.jsx)(T, {
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
                    isFullScreen: b
                })
        ]
    });
}
function L(e) {
    var t;
    let { isFetchingCategories: n, sortedCategories: a, setCategoryRef: i, isPremiumUser: o, initialItemCardRef: s, setIsGiftEasterEggEnabled: c, isGiftEasterEggEnabled: u, isFullScreen: d } = e,
        p = (0, f.sp)(),
        b = null != (t = null == p ? void 0 : p.sessionId) ? t : '',
        { noCache: g, includeUnpublished: h } = (0, x.Z)();
    return (l.useEffect(() => {
        (0, m.n)({
            sessionId: b,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: y.AW.CATALOG,
            isFullScreen: d,
            unpublishedCategoriesShown: h,
            cacheDisabled: g
        });
    }, []),
    l.useEffect(() => {
        n ||
            0 === a.length ||
            (0, m.n)({
                sessionId: b,
                checkpoint: m.a.SHOP_RENDERED,
                tab: y.AW.CATALOG,
                isFullScreen: d,
                unpublishedCategoriesShown: h,
                cacheDisabled: g
            });
    }, [b, d, h, g, n, a.length]),
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
                              children: (0, r.jsx)(f.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(I, {
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
