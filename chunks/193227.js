(n.d(t, { Z: () => L }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(594174),
    d = n(381585),
    p = n(870289),
    g = n(370039),
    f = n(937510),
    h = n(303952),
    b = n(853748),
    m = n(823941),
    _ = n(38900),
    C = n(709999),
    O = n(258939),
    v = n(81136),
    E = n(619899),
    S = n(302800),
    x = n(215023),
    y = n(484920);
function j(e) {
    let { products: t, header: n, category: l } = e,
        o = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        a = (0, E.St)(t);
    return null == o || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != n
                      ? (0, r.jsx)(s.Text, {
                            className: y.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: n
                        })
                      : (0, r.jsx)(s.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: y.cardsContainer,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      C.Z,
                                      {
                                          category: l,
                                          product: e,
                                          user: o,
                                          tab: x.AW.CATALOG
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
    let { category: t } = e,
        n = (0, f.l)(t.products),
        l = (0, g.a)()(n);
    return (0, r.jsx)(j, {
        products: l,
        category: t
    });
}
function P(e) {
    let { category: t, isFullScreen: n } = e,
        [o, a] = l.useState(!1),
        i = (0, S.M7)(t.skuId),
        s = (0, c.O)(
            (e) => {
                a(e && null != i);
            },
            n ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: y.categoryWrapper,
        ref: s,
        children: [
            (0, r.jsx)(m.Z, {
                category: t,
                hideLimitedTimeBadge: null != i
            }),
            (0, r.jsx)(T, { category: t }),
            null != i &&
                null != t.unpublishedAt &&
                (0, r.jsx)(b.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: o,
                    displayOptions: i,
                    isFullScreen: n
                })
        ]
    });
}
function L(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: o, isFullScreen: i, currentPage: c, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, O.R)(),
        b = null != (t = null == g ? void 0 : g.sessionId) ? t : '',
        { noCache: m, includeUnpublished: C } = (0, v.Z)(),
        E = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n]
        ),
        S = l.useMemo(() => {
            let e = (c - 1) * x.kN;
            return E.slice(e, e + x.kN);
        }, [E, c]);
    (l.useEffect(() => {
        (0, h.n)({
            sessionId: b,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: x.AW.CATALOG,
            isFullScreen: i,
            unpublishedCategoriesShown: C,
            cacheDisabled: m
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === S.length ||
                (0, h.n)({
                    sessionId: b,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: x.AW.CATALOG,
                    isFullScreen: i,
                    unpublishedCategoriesShown: C,
                    cacheDisabled: m
                });
        }, [b, i, C, m, f, S.length]));
    let j = (0, p.F)('CollectiblesBrowse');
    return f
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)('div', {
              className: a()(y.categories, { [y.categoriesNoFilter]: !j }),
              children: [
                  S.map((e, t) =>
                      (0, r.jsx)(
                          'div',
                          {
                              ref: (t) => o(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(P, {
                                      category: e,
                                      isFullScreen: i
                                  })
                              })
                          },
                          e.skuId
                      )
                  ),
                  (0, r.jsx)('div', {
                      className: y.paginationContainer,
                      children: (0, r.jsx)(s.DsT, {
                          currentPage: c,
                          totalCount: E.length,
                          pageSize: x.kN,
                          onPageChange: u,
                          disablePaginationGap: !0
                      })
                  })
              ]
          });
}
