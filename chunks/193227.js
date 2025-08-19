r.d(t, { Z: () => L }), r(388685);
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
    g = r(456080),
    f = r(370039),
    m = r(937510),
    b = r(303952),
    h = r(253355),
    _ = r(823941),
    v = r(38900),
    O = r(709999),
    C = r(258939),
    E = r(81136),
    y = r(619899),
    S = r(215023),
    x = r(887353);
function j(e) {
    let { products: t, header: r, category: l } = e,
        a = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        i = (0, y.St)(t);
    return null == a || 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  null != r
                      ? (0, n.jsx)(s.Text, {
                            className: x.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: r,
                        })
                      : (0, n.jsx)(s.LZC, { size: 24 }),
                  (0, n.jsx)("div", {
                      className: x.cardsContainer,
                      children: i.map((e, t) =>
                          (0, n.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, n.jsx)(
                                      O.Z,
                                      {
                                          category: l,
                                          product: e,
                                          user: a,
                                          tab: S.AW.CATALOG,
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
function P(e) {
    let { category: t } = e,
        r = (0, m.l)(t.products),
        l = (0, f.a)()(r);
    return (0, n.jsx)(j, {
        products: l,
        category: t,
    });
}
function T(e) {
    let { category: t, isFullScreen: r } = e,
        [a, i] = l.useState(!1),
        o = (0, c.O)(
            (e) => {
                i(e);
            },
            r ? 0.13 : 0.15,
        ),
        s = (0, g.B)("CollectiblesCatalogContent");
    return (0, n.jsxs)("div", {
        className: x.categoryWrapper,
        ref: o,
        children: [
            s && null != t.catalogBannerAsset
                ? (0, n.jsx)(h.Z, { category: t })
                : (0, n.jsx)(_.Z, {
                      category: t,
                      hideLimitedTimeBadge: !1,
                  }),
            (0, n.jsx)(P, { category: t }),
        ],
    });
}
function L(e) {
    var t;
    let { sortedCategories: r, setCategoryRef: a, isFullScreen: o, currentPage: c, handlePageChange: u } = e,
        g = (0, d.sp)(),
        f = (0, C.R)(),
        m = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
        { noCache: h, includeUnpublished: _ } = (0, E.Z)(),
        O = l.useMemo(
            () =>
                r
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [r],
        ),
        y = l.useMemo(() => {
            let e = (c - 1) * S.kN;
            return O.slice(e, e + S.kN);
        }, [O, c]);
    l.useEffect(() => {
        (0, b.n)({
            sessionId: m,
            checkpoint: b.a.SHOP_MOUNTED,
            tab: S.AW.CATALOG,
            isFullScreen: o,
            unpublishedCategoriesShown: _,
            cacheDisabled: h,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === y.length ||
                (0, b.n)({
                    sessionId: m,
                    checkpoint: b.a.SHOP_RENDERED,
                    tab: S.AW.CATALOG,
                    isFullScreen: o,
                    unpublishedCategoriesShown: _,
                    cacheDisabled: h,
                });
        }, [m, o, _, h, f, y.length]);
    let j = (0, p.FF)("CollectiblesBrowse");
    return f
        ? (0, n.jsx)(v.Z, {})
        : (0, n.jsxs)("div", {
              className: i()(x.categories, { [x.categoriesNoFilter]: !j }),
              children: [
                  y.map((e, t) =>
                      (0, n.jsx)(
                          "div",
                          {
                              ref: (t) => a(e.skuId, t),
                              children: (0, n.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, n.jsx)(T, {
                                      category: e,
                                      isFullScreen: o,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, n.jsx)("div", {
                      className: x.paginationContainer,
                      children: (0, n.jsx)(s.DsT, {
                          currentPage: c,
                          totalCount: O.length,
                          pageSize: S.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
