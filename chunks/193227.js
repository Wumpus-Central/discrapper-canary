n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(907331),
    a = n(399606),
    c = n(481060),
    u = n(594174),
    d = n(381585),
    g = n(128922),
    f = n(870289),
    p = n(370039),
    C = n(937510),
    h = n(303952),
    _ = n(253355),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    v = n(786040),
    O = n(258939),
    x = n(81136),
    S = n(619899),
    y = n(215023),
    k = n(887353);
function j(e) {
    let { products: t, header: n, category: l } = e,
        i = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        o = (0, S.St)(t),
        s = g.Z.useConfig({ location: "Products" }).showCardsV2,
        f = (0, d.sp)();
    return null == i || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(c.Text, {
                            className: k.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(c.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
                      className: k.cardsContainer,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: s
                                      ? (0, r.jsx)(
                                            E.Z,
                                            {
                                                skuId: e.skuId,
                                                onClickAnalytics: (0, v.wO)(e, y.AW.CATALOG, f),
                                            },
                                            e.skuId,
                                        )
                                      : (0, r.jsx)(
                                            b.Z,
                                            {
                                                category: l,
                                                product: e,
                                                user: i,
                                                tab: y.AW.CATALOG,
                                            },
                                            e.skuId,
                                        ),
                              },
                              e.skuId,
                          ),
                      ),
                  }),
              ],
          });
}
function T(e) {
    let { category: t } = e,
        n = (0, C.l)(t.products),
        l = (0, p.a)()(n);
    return (0, r.jsx)(j, {
        products: l,
        category: t,
    });
}
function L(e) {
    let { category: t } = e,
        [n, i] = l.useState(!1),
        o = (0, s.O)((e) => {
            i(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: k.categoryWrapper,
        ref: o,
        children: [(0, r.jsx)(_.Z, { category: t }), (0, r.jsx)(T, { category: t })],
    });
}
function I(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, currentPage: s, handlePageChange: a } = e,
        u = (0, d.sp)(),
        g = (0, O.R)(),
        p = null != (t = null == u ? void 0 : u.sessionId) ? t : "",
        { noCache: C, includeUnpublished: _ } = (0, x.Z)(),
        b = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n],
        ),
        E = l.useMemo(() => {
            let e = (s - 1) * y.kN;
            return b.slice(e, e + y.kN);
        }, [b, s]);
    l.useEffect(() => {
        (0, h.n)({
            sessionId: p,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: y.AW.CATALOG,
            unpublishedCategoriesShown: _,
            cacheDisabled: C,
        });
    }, []),
        l.useEffect(() => {
            g ||
                0 === E.length ||
                (0, h.n)({
                    sessionId: p,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: y.AW.CATALOG,
                    unpublishedCategoriesShown: _,
                    cacheDisabled: C,
                });
        }, [p, _, C, g, E.length]);
    let v = (0, f.FF)("CollectiblesBrowse");
    return g
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)("div", {
              className: o()(k.categories, { [k.categoriesNoFilter]: !v }),
              children: [
                  E.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(L, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: k.paginationContainer,
                      children: (0, r.jsx)(c.DsT, {
                          currentPage: s,
                          totalCount: b.length,
                          pageSize: y.kN,
                          onPageChange: a,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
