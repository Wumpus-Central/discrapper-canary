n.d(t, { Z: () => k }), n(388685);
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
    p = n(456080),
    f = n(370039),
    m = n(937510),
    _ = n(303952),
    h = n(253355),
    b = n(823941),
    C = n(38900),
    E = n(709999),
    S = n(258939),
    O = n(81136),
    v = n(619899),
    x = n(215023),
    y = n(887353);
function T(e) {
    let { products: t, header: n, category: l } = e,
        a = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        s = (0, v.St)(t);
    return null == a || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  null != n
                      ? (0, r.jsx)(o.Text, {
                            className: y.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: n,
                        })
                      : (0, r.jsx)(o.LZC, { size: 24 }),
                  (0, r.jsx)("div", {
                      className: y.cardsContainer,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              d.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      E.Z,
                                      {
                                          category: l,
                                          product: e,
                                          user: a,
                                          tab: x.AW.CATALOG,
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
        n = (0, m.l)(t.products),
        l = (0, f.a)()(n);
    return (0, r.jsx)(T, {
        products: l,
        category: t,
    });
}
function j(e) {
    let { category: t, isFullScreen: n } = e,
        [a, s] = l.useState(!1),
        i = (0, c.O)(
            (e) => {
                s(e);
            },
            n ? 0.13 : 0.15,
        ),
        o = (0, p.B)("CollectiblesCatalogContent");
    return (0, r.jsxs)("div", {
        className: y.categoryWrapper,
        ref: i,
        children: [
            o && null != t.catalogBannerAsset
                ? (0, r.jsx)(h.Z, { category: t })
                : (0, r.jsx)(b.Z, {
                      category: t,
                      hideLimitedTimeBadge: !1,
                  }),
            (0, r.jsx)(L, { category: t }),
        ],
    });
}
function k(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: a, isFullScreen: i, currentPage: c, handlePageChange: u } = e,
        p = (0, d.sp)(),
        f = (0, S.R)(),
        m = null != (t = null == p ? void 0 : p.sessionId) ? t : "",
        { noCache: h, includeUnpublished: b } = (0, O.Z)(),
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
        v = l.useMemo(() => {
            let e = (c - 1) * x.kN;
            return E.slice(e, e + x.kN);
        }, [E, c]);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: m,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: x.AW.CATALOG,
            isFullScreen: i,
            unpublishedCategoriesShown: b,
            cacheDisabled: h,
        });
    }, []),
        l.useEffect(() => {
            f ||
                0 === v.length ||
                (0, _.n)({
                    sessionId: m,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: x.AW.CATALOG,
                    isFullScreen: i,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: h,
                });
        }, [m, i, b, h, f, v.length]);
    let T = (0, g.FF)("CollectiblesBrowse");
    return f
        ? (0, r.jsx)(C.Z, {})
        : (0, r.jsxs)("div", {
              className: s()(y.categories, { [y.categoriesNoFilter]: !T }),
              children: [
                  v.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => a(e.skuId, t),
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
                      children: (0, r.jsx)(o.DsT, {
                          currentPage: c,
                          totalCount: E.length,
                          pageSize: x.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
