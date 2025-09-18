n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(399606),
    o = n(481060),
    c = n(434650),
    u = n(594174),
    d = n(381585),
    g = n(870289),
    p = n(370039),
    f = n(937510),
    _ = n(303952),
    h = n(253355),
    C = n(38900),
    m = n(709999),
    b = n(258939),
    E = n(81136),
    S = n(619899),
    O = n(215023),
    v = n(887353);
function x(e) {
    let { products: t, header: n, category: l } = e,
        a = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        s = (0, S.St)(t);
    return null == a || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(o.Text, {
                            className: v.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(o.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
                      className: v.cardsContainer,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      m.Z,
                                      {
                                          category: l,
                                          product: e,
                                          user: a,
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
function T(e) {
    let { category: t } = e,
        n = (0, f.l)(t.products),
        l = (0, p.a)()(n);
    return (0, r.jsx)(x, {
        products: l,
        category: t,
    });
}
function y(e) {
    let { category: t, isFullScreen: n } = e,
        [a, s] = l.useState(!1),
        i = (0, c.O)(
            (e) => {
                s(e);
            },
            n ? 0.13 : 0.15,
        );
    return (0, r.jsxs)("div", {
        className: v.categoryWrapper,
        ref: i,
        children: [(0, r.jsx)(h.Z, { category: t }), (0, r.jsx)(T, { category: t })],
    });
}
function L(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: a, isFullScreen: i, currentPage: c, handlePageChange: u } = e,
        p = (0, d.sp)(),
        f = (0, b.R)(),
        h = null != (t = null == p ? void 0 : p.sessionId) ? t : "",
        { noCache: m, includeUnpublished: S } = (0, E.Z)(),
        x = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n],
        ),
        T = l.useMemo(() => {
            let e = (c - 1) * O.kN;
            return x.slice(e, e + O.kN);
        }, [x, c]);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: h,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: O.AW.CATALOG,
            isFullScreen: i,
            unpublishedCategoriesShown: S,
            cacheDisabled: m,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === T.length ||
                (0, _.n)({
                    sessionId: h,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: O.AW.CATALOG,
                    isFullScreen: i,
                    unpublishedCategoriesShown: S,
                    cacheDisabled: m,
                });
        }, [h, i, S, m, f, T.length]);
    let L = (0, g.FF)("CollectiblesBrowse");
    return f
        ? (0, r.jsx)(C.Z, {})
        : (0, r.jsxs)("div", {
              className: s()(v.categories, { [v.categoriesNoFilter]: !L }),
              children: [
                  T.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => a(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(y, {
                                      category: e,
                                      isFullScreen: i,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: v.paginationContainer,
                      children: (0, r.jsx)(o.DsT, {
                          currentPage: c,
                          totalCount: x.length,
                          pageSize: O.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
