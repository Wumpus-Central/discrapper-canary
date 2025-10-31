n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(907331),
    o = n(399606),
    c = n(481060),
    u = n(594174),
    d = n(381585),
    p = n(128922),
    g = n(870289),
    f = n(370039),
    h = n(937510),
    C = n(303952),
    m = n(253355),
    _ = n(38900),
    b = n(709999),
    v = n(653126),
    E = n(786040),
    x = n(258939),
    O = n(81136),
    S = n(619899),
    y = n(215023),
    j = n(887353);
function k(e) {
    let { products: t, header: n, category: l } = e,
        i = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        s = (0, S.St)(t),
        a = p.Z.useConfig({ location: "Products" }).showCardsV2,
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
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: a
                                      ? (0, r.jsx)(
                                            v.Z,
                                            {
                                                skuId: e.skuId,
                                                skipLimitedTimeCheck: !0,
                                                onClickAnalytics: (0, E.wO)(e, y.AW.CATALOG, g),
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
        n = (0, h.l)(t.products),
        l = (0, f.a)()(n);
    return (0, r.jsx)(k, {
        products: l,
        category: t,
    });
}
function T(e) {
    let { category: t } = e,
        [n, i] = l.useState(!1),
        s = (0, a.O)((e) => {
            i(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: j.categoryWrapper,
        ref: s,
        children: [(0, r.jsx)(m.Z, { category: t }), (0, r.jsx)(I, { category: t })],
    });
}
function L(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, currentPage: a, handlePageChange: o } = e,
        u = (0, d.sp)(),
        p = (0, x.R)(),
        f = null != (t = null == u ? void 0 : u.sessionId) ? t : "",
        { noCache: h, includeUnpublished: m } = (0, O.Z)(),
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
            let e = (a - 1) * y.kN;
            return b.slice(e, e + y.kN);
        }, [b, a]);
    l.useEffect(() => {
        (0, C.n)({
            sessionId: f,
            checkpoint: C.a.SHOP_MOUNTED,
            tab: y.AW.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: h,
        });
    }, []),
        l.useEffect(() => {
            p ||
                0 === v.length ||
                (0, C.n)({
                    sessionId: f,
                    checkpoint: C.a.SHOP_RENDERED,
                    tab: y.AW.CATALOG,
                    unpublishedCategoriesShown: m,
                    cacheDisabled: h,
                });
        }, [f, m, h, p, v.length]);
    let E = (0, g.FF)("CollectiblesBrowse");
    return p
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)("div", {
              className: s()(j.categories, { [j.categoriesNoFilter]: !E }),
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
                          currentPage: a,
                          totalCount: b.length,
                          pageSize: y.kN,
                          onPageChange: o,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
