n.d(t, { Z: () => T }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(594174),
    d = n(381585),
    p = n(870289),
    g = n(370039),
    f = n(937510),
    b = n(303952),
    h = n(823941),
    m = n(38900),
    _ = n(709999),
    v = n(258939),
    O = n(81136),
    C = n(619899),
    E = n(215023),
    S = n(484920);
function y(e) {
    let { products: t, header: n, category: l } = e,
        a = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        i = (0, C.St)(t);
    return null == a || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(s.Text, {
                            className: S.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(s.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
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
                                          user: a,
                                          tab: E.AW.CATALOG,
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
function x(e) {
    let { category: t } = e,
        n = (0, f.l)(t.products),
        l = (0, g.a)()(n);
    return (0, r.jsx)(y, {
        products: l,
        category: t,
    });
}
function j(e) {
    let { category: t, isFullScreen: n } = e,
        [a, i] = l.useState(!1),
        o = (0, c.O)(
            (e) => {
                i(e);
            },
            n ? 0.13 : 0.15,
        );
    return (0, r.jsxs)("div", {
        className: S.categoryWrapper,
        ref: o,
        children: [
            (0, r.jsx)(h.Z, {
                category: t,
                hideLimitedTimeBadge: !1,
            }),
            (0, r.jsx)(x, { category: t }),
        ],
    });
}
function T(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: a, isFullScreen: o, currentPage: c, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, v.R)(),
        h = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
        { noCache: _, includeUnpublished: C } = (0, O.Z)(),
        y = l.useMemo(
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
            let e = (c - 1) * E.kN;
            return y.slice(e, e + E.kN);
        }, [y, c]);
    l.useEffect(() => {
        (0, b.n)({
            sessionId: h,
            checkpoint: b.a.SHOP_MOUNTED,
            tab: E.AW.CATALOG,
            isFullScreen: o,
            unpublishedCategoriesShown: C,
            cacheDisabled: _,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === x.length ||
                (0, b.n)({
                    sessionId: h,
                    checkpoint: b.a.SHOP_RENDERED,
                    tab: E.AW.CATALOG,
                    isFullScreen: o,
                    unpublishedCategoriesShown: C,
                    cacheDisabled: _,
                });
        }, [h, o, C, _, f, x.length]);
    let T = (0, p.FF)("CollectiblesBrowse");
    return f
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)("div", {
              className: i()(S.categories, { [S.categoriesNoFilter]: !T }),
              children: [
                  x.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => a(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(j, {
                                      category: e,
                                      isFullScreen: o,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: S.paginationContainer,
                      children: (0, r.jsx)(s.DsT, {
                          currentPage: c,
                          totalCount: y.length,
                          pageSize: E.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
