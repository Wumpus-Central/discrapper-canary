n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    i = n(907331),
    o = n(399606),
    c = n(481060),
    u = n(594174),
    d = n(381585),
    g = n(128922),
    p = n(870289),
    f = n(370039),
    C = n(937510),
    h = n(303952),
    _ = n(253355),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    S = n(258939),
    v = n(81136),
    x = n(619899),
    O = n(215023),
    y = n(887353);
function T(e) {
    let { products: t, header: n, category: l } = e,
        s = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        a = (0, x.St)(t),
        i = g.Z.useConfig({ location: "Products" }).showCardsV2;
    return null == s || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(c.Text, {
                            className: y.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(c.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
                      className: y.cardsContainer,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: i
                                      ? (0, r.jsx)(E.Z, { skuId: e.skuId }, e.skuId)
                                      : (0, r.jsx)(
                                            b.Z,
                                            {
                                                category: l,
                                                product: e,
                                                user: s,
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
        n = (0, C.l)(t.products),
        l = (0, f.a)()(n);
    return (0, r.jsx)(T, {
        products: l,
        category: t,
    });
}
function j(e) {
    let { category: t, isFullScreen: n } = e,
        [s, a] = l.useState(!1),
        o = (0, i.O)(
            (e) => {
                a(e);
            },
            n ? 0.13 : 0.15,
        );
    return (0, r.jsxs)("div", {
        className: y.categoryWrapper,
        ref: o,
        children: [(0, r.jsx)(_.Z, { category: t }), (0, r.jsx)(L, { category: t })],
    });
}
function k(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: s, isFullScreen: i, currentPage: o, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, S.R)(),
        C = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
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
            let e = (o - 1) * O.kN;
            return E.slice(e, e + O.kN);
        }, [E, o]);
    l.useEffect(() => {
        (0, h.n)({
            sessionId: C,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: O.AW.CATALOG,
            isFullScreen: i,
            unpublishedCategoriesShown: b,
            cacheDisabled: _,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === x.length ||
                (0, h.n)({
                    sessionId: C,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: O.AW.CATALOG,
                    isFullScreen: i,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: _,
                });
        }, [C, i, b, _, f, x.length]);
    let T = (0, p.FF)("CollectiblesBrowse");
    return f
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)("div", {
              className: a()(y.categories, { [y.categoriesNoFilter]: !T }),
              children: [
                  x.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(j, {
                                      category: e,
                                      isFullScreen: i,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: y.paginationContainer,
                      children: (0, r.jsx)(c.DsT, {
                          currentPage: o,
                          totalCount: E.length,
                          pageSize: O.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
