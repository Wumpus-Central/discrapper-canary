(r.d(t, { Z: () => T }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(399606),
    s = r(481060),
    c = r(434650),
    u = r(594174),
    d = r(381585),
    p = r(870289),
    f = r(370039),
    g = r(937510),
    h = r(303952),
    b = r(823941),
    m = r(38900),
    _ = r(709999),
    O = r(258939),
    C = r(81136),
    v = r(619899),
    E = r(215023),
    S = r(484920);
function y(e) {
    let { products: t, header: r, category: l } = e,
        i = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        o = (0, v.St)(t);
    return null == i || 0 === t.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  null != r
                      ? (0, n.jsx)(s.Text, {
                            className: S.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, n.jsx)(s.LZC, { size: 24 }),
                  (0, n.jsx)('div', {
                      className: S.cardsContainer,
                      children: o.map((e, t) =>
                          (0, n.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, n.jsx)(
                                      _.Z,
                                      {
                                          category: l,
                                          product: e,
                                          user: i,
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
function x(e) {
    let { category: t } = e,
        r = (0, g.l)(t.products),
        l = (0, f.a)()(r);
    return (0, n.jsx)(y, {
        products: l,
        category: t
    });
}
function j(e) {
    let { category: t, isFullScreen: r } = e,
        [i, o] = l.useState(!1),
        a = (0, c.O)(
            (e) => {
                o(e);
            },
            r ? 0.13 : 0.15
        );
    return (0, n.jsxs)('div', {
        className: S.categoryWrapper,
        ref: a,
        children: [
            (0, n.jsx)(b.Z, {
                category: t,
                hideLimitedTimeBadge: !1
            }),
            (0, n.jsx)(x, { category: t })
        ]
    });
}
function T(e) {
    var t;
    let { sortedCategories: r, setCategoryRef: i, isFullScreen: a, currentPage: c, handlePageChange: u } = e,
        f = (0, d.sp)(),
        g = (0, O.R)(),
        b = null != (t = null == f ? void 0 : f.sessionId) ? t : '',
        { noCache: _, includeUnpublished: v } = (0, C.Z)(),
        y = l.useMemo(
            () =>
                r
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [r]
        ),
        x = l.useMemo(() => {
            let e = (c - 1) * E.kN;
            return y.slice(e, e + E.kN);
        }, [y, c]);
    (l.useEffect(() => {
        (0, h.n)({
            sessionId: b,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: E.AW.CATALOG,
            isFullScreen: a,
            unpublishedCategoriesShown: v,
            cacheDisabled: _
        });
    }, []),
        l.useEffect(() => {
            g ||
                0 === x.length ||
                (0, h.n)({
                    sessionId: b,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: E.AW.CATALOG,
                    isFullScreen: a,
                    unpublishedCategoriesShown: v,
                    cacheDisabled: _
                });
        }, [b, a, v, _, g, x.length]));
    let T = (0, p.F)('CollectiblesBrowse');
    return g
        ? (0, n.jsx)(m.Z, {})
        : (0, n.jsxs)('div', {
              className: o()(S.categories, { [S.categoriesNoFilter]: !T }),
              children: [
                  x.map((e, t) =>
                      (0, n.jsx)(
                          'div',
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, n.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, n.jsx)(j, {
                                      category: e,
                                      isFullScreen: a
                                  })
                              })
                          },
                          e.skuId
                      )
                  ),
                  (0, n.jsx)('div', {
                      className: S.paginationContainer,
                      children: (0, n.jsx)(s.DsT, {
                          currentPage: c,
                          totalCount: y.length,
                          pageSize: E.kN,
                          onPageChange: u,
                          disablePaginationGap: !0
                      })
                  })
              ]
          });
}
