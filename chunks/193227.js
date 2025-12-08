n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(907331),
    a = n(399606),
    c = n(481060),
    u = n(594174),
    d = n(381585),
    g = n(870289),
    f = n(370039),
    p = n(937510),
    m = n(303952),
    C = n(253355),
    h = n(38900),
    _ = n(653126),
    b = n(786040),
    E = n(258939),
    v = n(81136),
    S = n(619899),
    O = n(215023),
    x = n(887353);
function y(e) {
    let { category: t } = e,
        n = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        l = (0, p.l)(t.products),
        i = (0, f.a)()(l),
        s = (0, S.St)(i),
        o = (0, d.sp)();
    return null == n || 0 === s.length
        ? null
        : (0, r.jsx)("div", {
              className: x.cardsContainer,
              children: s.map((e, t) =>
                  (0, r.jsx)(
                      d.k0,
                      {
                          newValue: { tilePosition: t },
                          children: (0, r.jsx)(
                              _.Z,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, b.wO)(e, O.AW.CATALOG, o),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function k(e) {
    let { category: t } = e,
        [n, i] = l.useState(!1),
        s = (0, o.O)((e) => {
            i(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: x.categoryWrapper,
        ref: s,
        children: [(0, r.jsx)(C.Z, { category: t }), (0, r.jsx)(y, { category: t })],
    });
}
function T(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, currentPage: o, handlePageChange: a, initialCategoryId: u } = e,
        f = (0, d.sp)(),
        p = (0, E.R)(),
        C = null != (t = null == f ? void 0 : f.sessionId) ? t : "",
        { noCache: _, includeUnpublished: b } = (0, v.Z)(),
        S = l.useMemo(
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
        if (null == u || 0 === S.length) {
            y.current = void 0;
            return;
        }
        if (u === y.current) return;
        let e = S.findIndex((e) => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / O.kN) + 1;
        t !== o && a(t), (y.current = u);
    }, [u, S, a, o]);
    let T = l.useMemo(() => {
        let e = (o - 1) * O.kN;
        return S.slice(e, e + O.kN);
    }, [S, o]);
    l.useEffect(() => {
        (0, m.n)({
            sessionId: C,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: O.AW.CATALOG,
            unpublishedCategoriesShown: b,
            cacheDisabled: _,
        });
    }, []),
        l.useEffect(() => {
            p ||
                0 === T.length ||
                (0, m.n)({
                    sessionId: C,
                    checkpoint: m.a.SHOP_RENDERED,
                    tab: O.AW.CATALOG,
                    unpublishedCategoriesShown: b,
                    cacheDisabled: _,
                });
        }, [C, b, _, p, T.length]);
    let j = (0, g.FF)("CollectiblesBrowse");
    return p
        ? (0, r.jsx)(h.Z, {})
        : (0, r.jsxs)("div", {
              className: s()(x.categories, { [x.categoriesNoFilter]: !j }),
              children: [
                  T.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(d.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(k, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: x.paginationContainer,
                      children: (0, r.jsx)(c.DsT, {
                          currentPage: o,
                          totalCount: S.length,
                          pageSize: O.kN,
                          onPageChange: a,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
