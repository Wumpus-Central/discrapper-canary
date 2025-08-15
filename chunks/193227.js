r.d(t, { Z: () => P }), r(388685);
var n = r(951288),
    l = r(647438),
    a = r(120356),
    i = r.n(a),
    o = r(399606),
    s = r(481060),
    c = r(434650),
    u = r(594174),
    d = r(381585),
    p = r(870289),
    g = r(370039),
    f = r(937510),
    b = r(303952),
    m = r(823941),
    h = r(38900),
    _ = r(709999),
    v = r(258939),
    O = r(81136),
    C = r(619899),
    E = r(215023),
    y = r(887353);
function S(e) {
    let { products: t, header: r, category: l } = e,
        a = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        i = (0, C.St)(t);
    return null == a || 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  null != r
                      ? (0, n.jsx)(s.Text, {
                            className: y.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: r,
                        })
                      : (0, n.jsx)(s.LZC, { size: 24 }),
                  (0, n.jsx)("div", {
                      className: y.cardsContainer,
                      children: i.map((e, t) =>
                          (0, n.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, n.jsx)(
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
        r = (0, f.l)(t.products),
        l = (0, g.a)()(r);
    return (0, n.jsx)(S, {
        products: l,
        category: t,
    });
}
function j(e) {
    let { category: t, isFullScreen: r } = e,
        [a, i] = l.useState(!1),
        o = (0, c.O)(
            (e) => {
                i(e);
            },
            r ? 0.13 : 0.15,
        );
    return (0, n.jsxs)("div", {
        className: y.categoryWrapper,
        ref: o,
        children: [
            (0, n.jsx)(m.Z, {
                category: t,
                hideLimitedTimeBadge: !1,
            }),
            (0, n.jsx)(x, { category: t }),
        ],
    });
}
function P(e) {
    var t;
    let { sortedCategories: r, setCategoryRef: a, isFullScreen: o, currentPage: c, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, v.R)(),
        m = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
        { noCache: _, includeUnpublished: C } = (0, O.Z)(),
        S = l.useMemo(
            () =>
                r
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [r],
        ),
        x = l.useMemo(() => {
            let e = (c - 1) * E.kN;
            return S.slice(e, e + E.kN);
        }, [S, c]);
    l.useEffect(() => {
        (0, b.n)({
            sessionId: m,
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
                    sessionId: m,
                    checkpoint: b.a.SHOP_RENDERED,
                    tab: E.AW.CATALOG,
                    isFullScreen: o,
                    unpublishedCategoriesShown: C,
                    cacheDisabled: _,
                });
        }, [m, o, C, _, f, x.length]);
    let P = (0, p.FF)("CollectiblesBrowse");
    return f
        ? (0, n.jsx)(h.Z, {})
        : (0, n.jsxs)("div", {
              className: i()(y.categories, { [y.categoriesNoFilter]: !P }),
              children: [
                  x.map((e, t) =>
                      (0, n.jsx)(
                          "div",
                          {
                              ref: (t) => a(e.skuId, t),
                              children: (0, n.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, n.jsx)(j, {
                                      category: e,
                                      isFullScreen: o,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, n.jsx)("div", {
                      className: y.paginationContainer,
                      children: (0, n.jsx)(s.DsT, {
                          currentPage: c,
                          totalCount: S.length,
                          pageSize: E.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
