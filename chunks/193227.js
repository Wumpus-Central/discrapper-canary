n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    i = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(479446),
    d = n(981632),
    p = n(819640),
    f = n(594174),
    b = n(381585),
    g = n(328347),
    h = n(370039),
    m = n(937510),
    _ = n(303952),
    C = n(853748),
    v = n(426171),
    O = n(823941),
    x = n(38900),
    S = n(709999),
    E = n(258939),
    y = n(81136),
    j = n(619899),
    k = n(302800),
    P = n(215023),
    T = n(981631),
    I = n(474936),
    L = n(484920);
function B(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isGiftEasterEggEnabled: o } = e,
        c = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        u = (0, j.St)(t);
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(s.Text, {
                            className: L.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(s.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: L.cardsContainer,
                      children: u.map((e, t) =>
                          (0, r.jsx)(
                              b.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      S.Z,
                                      {
                                          onMount: n,
                                          category: a,
                                          product: e,
                                          user: c,
                                          isGiftEasterEggEnabled: o,
                                          tab: P.AW.CATALOG
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
    let o = (0, m.l)(t.products),
        s = (0, h.a)()(o),
        c = (0, i.e7)([g.Z], () => g.Z.initialProductSkuId),
        u = l.useCallback(
            (e, t) => {
                var r;
                (t.skuId === c || (null == (r = t.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = e.current);
            },
            [c, n]
        );
    return (0, r.jsx)(
        B,
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
function N(e) {
    let { category: t, initialItemCardRef: n, isGiftEasterEggEnabled: a, setIsGiftEasterEggEnabled: i, showEasterEggToggle: p, isFullScreen: f } = e,
        b = l.useRef(10 + 70 * Math.random()),
        [g, h] = l.useState(!1),
        m = (0, k.M7)(t.skuId),
        _ = (0, c.O)(
            (e) => {
                h(e && null != m);
            },
            f ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: L.categoryWrapper,
        ref: _,
        children: [
            p &&
                (0, r.jsx)(s.P3F, {
                    className: o()(L.hiddenWumpus, { [L.hiddenWumpusEnabled]: a }),
                    onClick: () => i(!0),
                    style: { left: ''.concat(b.current, '%') },
                    children: (0, r.jsx)(d.Z, {
                        idleAnimationState: u.SR.IDLE,
                        giftStyle: I.Cj.BOX
                    })
                }),
            (0, r.jsx)(O.Z, {
                category: t,
                hideLimitedTimeBadge: null != m
            }),
            (0, r.jsx)(w, {
                category: t,
                initialItemCardRef: n,
                isGiftEasterEggEnabled: a
            }),
            null != m &&
                null != t.unpublishedAt &&
                (0, r.jsx)(C.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: g,
                    displayOptions: m,
                    isFullScreen: f
                })
        ]
    });
}
function A(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: a, setIsGiftEasterEggEnabled: o, isGiftEasterEggEnabled: c, isFullScreen: u, currentPage: d, handlePageChange: f } = e,
        g = (0, b.sp)(),
        h = (0, E.R)(),
        m = null != (t = null == g ? void 0 : g.sessionId) ? t : '',
        { noCache: C, includeUnpublished: O } = (0, y.Z)(),
        S = l.useMemo(() => {
            let e = (d - 1) * P.kN;
            return n.slice(e, e + P.kN);
        }, [n, d]);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: m,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: P.AW.CATALOG,
            isFullScreen: u,
            unpublishedCategoriesShown: O,
            cacheDisabled: C
        });
    }, []),
        l.useEffect(() => {
            h ||
                0 === S.length ||
                (0, _.n)({
                    sessionId: m,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: P.AW.CATALOG,
                    isFullScreen: u,
                    unpublishedCategoriesShown: O,
                    cacheDisabled: C
                });
        }, [m, u, O, C, h, S.length]);
    let j = l.useRef(null),
        k = (0, i.e7)([p.Z], () => p.Z.getLayers().includes(T.S9g.COLLECTIBLES_SHOP));
    return ((0, v.Kp)({
        isFetchingCategories: h,
        isLayer: k,
        initialItemCardRef: j
    }),
    h)
        ? (0, r.jsx)(x.Z, {})
        : (0, r.jsxs)('div', {
              className: L.categories,
              children: [
                  S.filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                      .filter((e) => {
                          let { products: t } = e;
                          return t.length > 0;
                      })
                      .map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  ref: (t) => a(e.skuId, t),
                                  children: (0, r.jsx)(b.k0, {
                                      newValue: { categoryPosition: t },
                                      children: (0, r.jsx)(N, {
                                          category: e,
                                          initialItemCardRef: j,
                                          setIsGiftEasterEggEnabled: o,
                                          isGiftEasterEggEnabled: c,
                                          isFullScreen: u
                                      })
                                  })
                              },
                              e.skuId
                          )
                      ),
                  (0, r.jsx)('div', {
                      className: L.paginationContainer,
                      children: (0, r.jsx)(s.DsT, {
                          currentPage: d,
                          totalCount: n.length,
                          pageSize: P.kN,
                          onPageChange: f,
                          disablePaginationGap: !0
                      })
                  })
              ]
          });
}
