(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(819640),
    d = n(594174),
    p = n(381585),
    f = n(328347),
    g = n(870289),
    h = n(370039),
    b = n(937510),
    m = n(303952),
    _ = n(853748),
    C = n(426171),
    O = n(823941),
    v = n(38900),
    E = n(709999),
    S = n(258939),
    x = n(81136),
    y = n(619899),
    j = n(302800),
    T = n(215023),
    P = n(981631),
    L = n(484920);
function I(e) {
    let { products: t, handleShopCardMount: n, header: l, category: i } = e,
        o = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        c = (0, y.St)(t);
    return null == o || 0 === t.length
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
                      children: c.map((e, t) =>
                          (0, r.jsx)(
                              p.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      E.Z,
                                      {
                                          onMount: n,
                                          category: i,
                                          product: e,
                                          user: o,
                                          tab: T.AW.CATALOG
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
function k(e) {
    var { category: t, initialItemCardRef: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['category', 'initialItemCardRef']);
    let o = (0, b.l)(t.products),
        s = (0, h.a)()(o),
        c = (0, a.e7)([f.Z], () => f.Z.initialProductSkuId),
        u = l.useCallback(
            (e, t) => {
                var r;
                (t.skuId === c || (null == (r = t.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = e.current);
            },
            [c, n]
        );
    return (0, r.jsx)(
        I,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                products: s,
                handleShopCardMount: u,
                category: t
            },
            i
        )
    );
}
function B(e) {
    let { category: t, initialItemCardRef: n, isFullScreen: i } = e,
        [o, a] = l.useState(!1),
        s = (0, j.M7)(t.skuId),
        u = (0, c.O)(
            (e) => {
                a(e && null != s);
            },
            i ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: L.categoryWrapper,
        ref: u,
        children: [
            (0, r.jsx)(O.Z, {
                category: t,
                hideLimitedTimeBadge: null != s
            }),
            (0, r.jsx)(k, {
                category: t,
                initialItemCardRef: n
            }),
            null != s &&
                null != t.unpublishedAt &&
                (0, r.jsx)(_.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: o,
                    displayOptions: s,
                    isFullScreen: i
                })
        ]
    });
}
function N(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, isFullScreen: c, currentPage: d, handlePageChange: f } = e,
        h = (0, p.sp)(),
        b = (0, S.R)(),
        _ = null != (t = null == h ? void 0 : h.sessionId) ? t : '',
        { noCache: O, includeUnpublished: E } = (0, x.Z)(),
        y = l.useMemo(() => {
            let e = (d - 1) * T.kN;
            return n.slice(e, e + T.kN);
        }, [n, d]);
    (l.useEffect(() => {
        (0, m.n)({
            sessionId: _,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: T.AW.CATALOG,
            isFullScreen: c,
            unpublishedCategoriesShown: E,
            cacheDisabled: O
        });
    }, []),
        l.useEffect(() => {
            b ||
                0 === y.length ||
                (0, m.n)({
                    sessionId: _,
                    checkpoint: m.a.SHOP_RENDERED,
                    tab: T.AW.CATALOG,
                    isFullScreen: c,
                    unpublishedCategoriesShown: E,
                    cacheDisabled: O
                });
        }, [_, c, E, O, b, y.length]));
    let j = l.useRef(null),
        I = (0, a.e7)([u.Z], () => u.Z.getLayers().includes(P.S9g.COLLECTIBLES_SHOP));
    (0, C.Kp)({
        isFetchingCategories: b,
        isLayer: I,
        initialItemCardRef: j
    });
    let k = (0, g.F)('CollectiblesBrowse');
    return b
        ? (0, r.jsx)(v.Z, {})
        : (0, r.jsxs)('div', {
              className: o()(L.categories, { [L.categoriesNoFilter]: !k }),
              children: [
                  y
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
                                          category: e,
                                          initialItemCardRef: j,
                                          isFullScreen: c
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
                          pageSize: T.kN,
                          onPageChange: f,
                          disablePaginationGap: !0
                      })
                  })
              ]
          });
}
