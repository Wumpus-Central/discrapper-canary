n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(907331),
    s = n(399606),
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
    j = n(887353);
function k(e) {
    let { products: t, header: n, category: l } = e,
        i = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        a = (0, S.St)(t),
        o = f.Z.useConfig({ location: "Products" }).showCardsV2,
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
                                  children: o
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
        a = (0, o.O)((e) => {
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
    let { sortedCategories: n, setCategoryRef: i, currentPage: o, handlePageChange: s, initialCategoryId: u } = e,
        f = (0, d.sp)(),
        p = (0, E.R)(),
        m = null != (t = null == f ? void 0 : f.sessionId) ? t : "",
        { noCache: C, includeUnpublished: b } = (0, O.Z)(),
        v = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n],
        ),
        x = l.useRef(void 0);
    l.useEffect(() => {
        if (null == u || 0 === v.length) {
            x.current = void 0;
            return;
        }
        if (u === x.current) return;
        let e = v.findIndex((e) => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / y.kN) + 1;
        t !== o && s(t), (x.current = u);
    }, [u, v, s, o]);
    let S = l.useMemo(() => {
        let e = (o - 1) * y.kN;
        return v.slice(e, e + y.kN);
    }, [v, o]);
    l.useEffect(() => {
        (0, h.n)({
            sessionId: m,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: y.AW.CATALOG,
            unpublishedCategoriesShown: b,
            cacheDisabled: C,
        });
    }, []),
        l.useEffect(() => {
            p ||
                0 === S.length ||
                (0, h.n)({
                    sessionId: m,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: y.AW.CATALOG,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: C,
                });
        }, [m, b, C, p, S.length]);
    let k = (0, g.FF)("CollectiblesBrowse");
    return p
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)("div", {
              className: a()(j.categories, { [j.categoriesNoFilter]: !k }),
              children: [
                  S.map((e, t) =>
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
                          currentPage: o,
                          totalCount: v.length,
                          pageSize: y.kN,
                          onPageChange: s,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
