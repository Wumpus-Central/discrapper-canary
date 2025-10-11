n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(907331),
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
    S = n(258939),
    O = n(81136),
    x = n(619899),
    y = n(215023),
    j = n(887353);
function k(e) {
    let { products: t, header: n, category: l } = e,
        i = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        s = (0, x.St)(t),
        o = g.Z.useConfig({ location: "Products" }).showCardsV2,
        f = (0, d.sp)();
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
                                  children: o
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
    return (0, r.jsx)(k, {
        products: l,
        category: t,
    });
}
function L(e) {
    let { category: t, isFullScreen: n } = e,
        [i, s] = l.useState(!1),
        a = (0, o.O)(
            (e) => {
                s(e);
            },
            n ? 0.13 : 0.15,
        );
    return (0, r.jsxs)("div", {
        className: j.categoryWrapper,
        ref: a,
        children: [(0, r.jsx)(_.Z, { category: t }), (0, r.jsx)(T, { category: t })],
    });
}
function I(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, isFullScreen: o, currentPage: a, handlePageChange: u } = e,
        g = (0, d.sp)(),
        p = (0, S.R)(),
        C = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
        { noCache: _, includeUnpublished: b } = (0, O.Z)(),
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
            let e = (a - 1) * y.kN;
            return E.slice(e, e + y.kN);
        }, [E, a]);
    l.useEffect(() => {
        (0, h.n)({
            sessionId: C,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: y.AW.CATALOG,
            isFullScreen: o,
            unpublishedCategoriesShown: b,
            cacheDisabled: _,
        });
    }, []),
        l.useEffect(() => {
            p ||
                0 === v.length ||
                (0, h.n)({
                    sessionId: C,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: y.AW.CATALOG,
                    isFullScreen: o,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: _,
                });
        }, [C, o, b, _, p, v.length]);
    let x = (0, f.FF)("CollectiblesBrowse");
    return p
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)("div", {
              className: s()(j.categories, { [j.categoriesNoFilter]: !x }),
              children: [
                  v.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(L, {
                                      category: e,
                                      isFullScreen: o,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: j.paginationContainer,
                      children: (0, r.jsx)(c.DsT, {
                          currentPage: a,
                          totalCount: E.length,
                          pageSize: y.kN,
                          onPageChange: u,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
