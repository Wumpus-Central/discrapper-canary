(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(594174),
    d = n(381585),
    p = n(870289),
    g = n(370039),
    f = n(937510),
    h = n(303952),
    b = n(823941),
    m = n(38900),
    _ = n(709999),
    C = n(258939),
    O = n(81136),
    v = n(619899),
    E = n(215023),
    S = n(484920);
function x(e) {
    let { products: t, header: n, category: l } = e,
        o = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        i = (0, v.St)(t);
    return null == o || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != n
                      ? (0, r.jsx)(s.Text, {
                            className: S.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: n
                        })
                      : (0, r.jsx)(s.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: S.cardsContainer,
                      children: i.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      _.Z,
                                      {
                                          category: l,
                                          product: e,
                                          user: o,
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
function y(e) {
    let { category: t } = e,
        n = (0, f.l)(t.products),
        l = (0, g.a)()(n);
    return (0, r.jsx)(x, {
        products: l,
        category: t
    });
}
function j(e) {
    let { category: t, isFullScreen: n } = e,
        [o, i] = l.useState(!1),
        a = (0, c.O)(
            (e) => {
                i(e);
            },
            n ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: S.categoryWrapper,
        ref: a,
        children: [
            (0, r.jsx)(b.Z, {
                category: t,
                hideLimitedTimeBadge: !1
            }),
            (0, r.jsx)(y, { category: t })
        ]
    });
}
function T(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: o, isFullScreen: a, currentPage: c, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, C.R)(),
        b = null != (t = null == g ? void 0 : g.sessionId) ? t : '',
        { noCache: _, includeUnpublished: v } = (0, O.Z)(),
        x = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n]
        ),
        y = l.useMemo(() => {
            let e = (c - 1) * E.kN;
            return x.slice(e, e + E.kN);
        }, [x, c]);
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
            f ||
                0 === y.length ||
                (0, h.n)({
                    sessionId: b,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: E.AW.CATALOG,
                    isFullScreen: a,
                    unpublishedCategoriesShown: v,
                    cacheDisabled: _
                });
        }, [b, a, v, _, f, y.length]));
    let T = (0, p.F)('CollectiblesBrowse');
    return f
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)('div', {
              className: i()(S.categories, { [S.categoriesNoFilter]: !T }),
              children: [
                  y.map((e, t) =>
                      (0, r.jsx)(
                          'div',
                          {
                              ref: (t) => o(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(j, {
                                      category: e,
                                      isFullScreen: a
                                  })
                              })
                          },
                          e.skuId
                      )
                  ),
                  (0, r.jsx)('div', {
                      className: S.paginationContainer,
                      children: (0, r.jsx)(s.DsT, {
                          currentPage: c,
                          totalCount: x.length,
                          pageSize: E.kN,
                          onPageChange: u,
                          disablePaginationGap: !0
                      })
                  })
              ]
          });
}
