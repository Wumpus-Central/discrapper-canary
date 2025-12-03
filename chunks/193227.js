n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(907331),
    s = n(399606),
    c = n(481060),
    u = n(594174),
    d = n(381585),
    f = n(870289),
    g = n(370039),
    p = n(937510),
    m = n(303952),
    h = n(253355),
    C = n(38900),
    _ = n(653126),
    b = n(786040),
    v = n(258939),
    x = n(81136),
    E = n(619899),
    O = n(215023),
    S = n(887353);
function y(e) {
    let { category: t } = e,
        n = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        l = (0, p.l)(t.products),
        i = (0, g.a)()(l),
        o = (0, E.St)(i),
        a = (0, d.sp)();
    return null == n || 0 === o.length
        ? null
        : (0, r.jsx)("div", {
              className: S.cardsContainer,
              children: o.map((e, t) =>
                  (0, r.jsx)(
                      d.k0,
                      {
                          newValue: { tilePosition: t },
                          children: (0, r.jsx)(
                              _.Z,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, b.wO)(e, O.AW.CATALOG, a),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function j(e) {
    let { category: t } = e,
        [n, i] = l.useState(!1),
        o = (0, a.O)((e) => {
            i(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: S.categoryWrapper,
        ref: o,
        children: [(0, r.jsx)(h.Z, { category: t }), (0, r.jsx)(y, { category: t })],
    });
}
function I(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, currentPage: a, handlePageChange: s, initialCategoryId: u } = e,
        g = (0, d.sp)(),
        p = (0, v.R)(),
        h = null != (t = null == g ? void 0 : g.sessionId) ? t : "",
        { noCache: _, includeUnpublished: b } = (0, x.Z)(),
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
        y = l.useRef(void 0);
    l.useEffect(() => {
        if (null == u || 0 === E.length) {
            y.current = void 0;
            return;
        }
        if (u === y.current) return;
        let e = E.findIndex((e) => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / O.kN) + 1;
        t !== a && s(t), (y.current = u);
    }, [u, E, s, a]);
    let I = l.useMemo(() => {
        let e = (a - 1) * O.kN;
        return E.slice(e, e + O.kN);
    }, [E, a]);
    l.useEffect(() => {
        (0, m.n)({
            sessionId: h,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: O.AW.CATALOG,
            unpublishedCategoriesShown: b,
            cacheDisabled: _,
        });
    }, []),
        l.useEffect(() => {
            p ||
                0 === I.length ||
                (0, m.n)({
                    sessionId: h,
                    checkpoint: m.a.SHOP_RENDERED,
                    tab: O.AW.CATALOG,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: _,
                });
        }, [h, b, _, p, I.length]);
    let k = (0, f.FF)("CollectiblesBrowse");
    return p
        ? (0, r.jsx)(C.Z, {})
        : (0, r.jsxs)("div", {
              className: o()(S.categories, { [S.categoriesNoFilter]: !k }),
              children: [
                  I.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(j, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: S.paginationContainer,
                      children: (0, r.jsx)(c.DsT, {
                          currentPage: a,
                          totalCount: E.length,
                          pageSize: O.kN,
                          onPageChange: s,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
