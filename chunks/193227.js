n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    c = n(434650),
    u = n(594174),
    d = n(381585),
    g = n(128922),
    p = n(870289),
    f = n(370039),
    h = n(937510),
    C = n(303952),
    _ = n(253355),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    S = n(258939),
    v = n(81136),
    x = n(619899),
    O = n(215023),
    T = n(887353);
function y(e) {
    let { products: t, header: n, category: l } = e,
        i = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        a = (0, x.St)(t),
        c = g.Z.useConfig({ location: "Products" }).showCardsV2;
    return null == i || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(o.Text, {
                            className: T.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(o.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
                      className: T.cardsContainer,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: c
                                      ? (0, r.jsx)(E.Z, { skuId: e.skuId }, e.skuId)
                                      : (0, r.jsx)(
                                            b.Z,
                                            {
                                                category: l,
                                                product: e,
                                                user: i,
                                                tab: O.AW.CATALOG,
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
function L(e) {
    let { category: t } = e,
        n = (0, h.l)(t.products),
        l = (0, f.a)()(n);
    return (0, r.jsx)(y, {
        products: l,
        category: t,
    });
}
function j(e) {
    let { category: t, isFullScreen: n } = e,
        [i, a] = l.useState(!1),
        s = (0, c.O)(
            (e) => {
                a(e);
            },
            n ? 0.13 : 0.15,
        );
    return (0, r.jsxs)("div", {
        className: T.categoryWrapper,
        ref: s,
        children: [(0, r.jsx)(_.Z, { category: t }), (0, r.jsx)(L, { category: t })],
    });
}
function k(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, isFullScreen: s, currentPage: c, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, S.R)(),
        h = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
        { noCache: _, includeUnpublished: b } = (0, v.Z)(),
        E = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n],
        ),
        x = l.useMemo(() => {
            let e = (c - 1) * O.kN;
            return E.slice(e, e + O.kN);
        }, [E, c]);
    l.useEffect(() => {
        (0, C.n)({
            sessionId: h,
            checkpoint: C.a.SHOP_MOUNTED,
            tab: O.AW.CATALOG,
            isFullScreen: s,
            unpublishedCategoriesShown: b,
            cacheDisabled: _,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === x.length ||
                (0, C.n)({
                    sessionId: h,
                    checkpoint: C.a.SHOP_RENDERED,
                    tab: O.AW.CATALOG,
                    isFullScreen: s,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: _,
                });
        }, [h, s, b, _, f, x.length]);
    let y = (0, p.FF)("CollectiblesBrowse");
    return f
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)("div", {
              className: a()(T.categories, { [T.categoriesNoFilter]: !y }),
              children: [
                  x.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(j, {
                                      category: e,
                                      isFullScreen: s,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: T.paginationContainer,
                      children: (0, r.jsx)(o.DsT, {
                          currentPage: c,
                          totalCount: E.length,
                          pageSize: O.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
