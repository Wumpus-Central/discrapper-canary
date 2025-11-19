n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(907331),
    o = n(399606),
    c = n(481060),
    u = n(594174),
    d = n(381585),
    f = n(128922),
    g = n(870289),
    p = n(370039),
    m = n(937510),
    h = n(303952),
    C = n(253355),
    _ = n(38900),
    b = n(709999),
    v = n(653126),
    x = n(786040),
    E = n(258939),
    O = n(81136),
    S = n(619899),
    y = n(215023),
    j = n(654664);
function k(e) {
    let { products: t, header: n, category: l } = e,
        i = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        a = (0, S.St)(t),
        s = f.Z.useConfig({ location: "Products" }).showCardsV2,
        g = (0, d.sp)();
    return null == i || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(c.Text, {
                            className: j.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(c.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
                      className: j.cardsContainer,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: s
                                      ? (0, r.jsx)(
                                            v.Z,
                                            {
                                                skuId: e.skuId,
                                                skipLimitedTimeCheck: !0,
                                                onClickAnalytics: (0, x.wO)(e, y.AW.CATALOG, g),
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
                                                skipLimitedTimeCheck: !0,
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
function I(e) {
    let { category: t } = e,
        n = (0, m.l)(t.products),
        l = (0, p.a)()(n);
    return (0, r.jsx)(k, {
        products: l,
        category: t,
    });
}
function T(e) {
    let { category: t } = e,
        [n, i] = l.useState(!1),
        a = (0, s.O)((e) => {
            i(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: j.categoryWrapper,
        ref: a,
        children: [(0, r.jsx)(C.Z, { category: t }), (0, r.jsx)(I, { category: t })],
    });
}
function L(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, currentPage: s, handlePageChange: o } = e,
        u = (0, d.sp)(),
        f = (0, E.R)(),
        p = null != (t = null == u ? void 0 : u.sessionId) ? t : "",
        { noCache: m, includeUnpublished: C } = (0, O.Z)(),
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
        v = l.useMemo(() => {
            let e = (s - 1) * y.kN;
            return b.slice(e, e + y.kN);
        }, [b, s]);
    l.useEffect(() => {
        (0, h.n)({
            sessionId: p,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: y.AW.CATALOG,
            unpublishedCategoriesShown: C,
            cacheDisabled: m,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === v.length ||
                (0, h.n)({
                    sessionId: p,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: y.AW.CATALOG,
                    unpublishedCategoriesShown: C,
                    cacheDisabled: m,
                });
        }, [p, C, m, f, v.length]);
    let x = (0, g.FF)("CollectiblesBrowse");
    return f
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)("div", {
              className: a()(j.categories, { [j.categoriesNoFilter]: !x }),
              children: [
                  v.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(T, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: j.paginationContainer,
                      children: (0, r.jsx)(c.DsT, {
                          currentPage: s,
                          totalCount: b.length,
                          pageSize: y.kN,
                          onPageChange: o,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
