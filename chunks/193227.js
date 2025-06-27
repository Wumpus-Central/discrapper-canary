n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(399606),
    i = n(481060),
    o = n(434650),
    s = n(819640),
    c = n(594174),
    u = n(381585),
    d = n(328347),
    p = n(370039),
    f = n(937510),
    g = n(303952),
    h = n(853748),
    b = n(426171),
    m = n(823941),
    _ = n(38900),
    C = n(709999),
    v = n(258939),
    O = n(81136),
    S = n(619899),
    x = n(302800),
    E = n(215023),
    y = n(981631),
    j = n(484920);
function P(e) {
    let { products: t, handleShopCardMount: n, header: l, category: o } = e,
        s = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        d = (0, S.St)(t);
    return null == s || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(i.Text, {
                            className: j.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(i.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: j.cardsContainer,
                      children: d.map((e, t) =>
                          (0, r.jsx)(
                              u.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      C.Z,
                                      {
                                          onMount: n,
                                          category: o,
                                          product: e,
                                          user: s,
                                          tab: E.AW.CATALOG
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
    let o = (0, f.l)(t.products),
        s = (0, p.a)()(o),
        c = (0, a.e7)([d.Z], () => d.Z.initialProductSkuId),
        u = l.useCallback(
            (e, t) => {
                var r;
                (t.skuId === c || (null == (r = t.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = e.current);
            },
            [c, n]
        );
    return (0, r.jsx)(
        P,
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
            i
        )
    );
}
function T(e) {
    let { category: t, initialItemCardRef: n, isFullScreen: a } = e,
        [i, s] = l.useState(!1),
        c = (0, x.M7)(t.skuId),
        u = (0, o.O)(
            (e) => {
                s(e && null != c);
            },
            a ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: j.categoryWrapper,
        ref: u,
        children: [
            (0, r.jsx)(m.Z, {
                category: t,
                hideLimitedTimeBadge: null != c
            }),
            (0, r.jsx)(k, {
                category: t,
                initialItemCardRef: n
            }),
            null != c &&
                null != t.unpublishedAt &&
                (0, r.jsx)(h.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: i,
                    displayOptions: c,
                    isFullScreen: a
                })
        ]
    });
}
function L(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: o, isFullScreen: c, currentPage: d, handlePageChange: p } = e,
        f = (0, u.sp)(),
        h = (0, v.R)(),
        m = null != (t = null == f ? void 0 : f.sessionId) ? t : '',
        { noCache: C, includeUnpublished: S } = (0, O.Z)(),
        x = l.useMemo(() => {
            let e = (d - 1) * E.kN;
            return n.slice(e, e + E.kN);
        }, [n, d]);
    l.useEffect(() => {
        (0, g.n)({
            sessionId: m,
            checkpoint: g.a.SHOP_MOUNTED,
            tab: E.AW.CATALOG,
            isFullScreen: c,
            unpublishedCategoriesShown: S,
            cacheDisabled: C
        });
    }, []),
        l.useEffect(() => {
            h ||
                0 === x.length ||
                (0, g.n)({
                    sessionId: m,
                    checkpoint: g.a.SHOP_RENDERED,
                    tab: E.AW.CATALOG,
                    isFullScreen: c,
                    unpublishedCategoriesShown: S,
                    cacheDisabled: C
                });
        }, [m, c, S, C, h, x.length]);
    let P = l.useRef(null),
        k = (0, a.e7)([s.Z], () => s.Z.getLayers().includes(y.S9g.COLLECTIBLES_SHOP));
    return ((0, b.Kp)({
        isFetchingCategories: h,
        isLayer: k,
        initialItemCardRef: P
    }),
    h)
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)('div', {
              className: j.categories,
              children: [
                  x
                      .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                      .filter((e) => {
                          let { products: t } = e;
                          return t.length > 0;
                      })
                      .map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  ref: (t) => o(e.skuId, t),
                                  children: (0, r.jsx)(u.k0, {
                                      newValue: { categoryPosition: t },
                                      children: (0, r.jsx)(T, {
                                          category: e,
                                          initialItemCardRef: P,
                                          isFullScreen: c
                                      })
                                  })
                              },
                              e.skuId
                          )
                      ),
                  (0, r.jsx)('div', {
                      className: j.paginationContainer,
                      children: (0, r.jsx)(i.DsT, {
                          currentPage: d,
                          totalCount: n.length,
                          pageSize: E.kN,
                          onPageChange: p,
                          disablePaginationGap: !0
                      })
                  })
              ]
          });
}
