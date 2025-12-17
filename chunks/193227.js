n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(907331),
    s = n(399606),
    o = n(481060),
    i = n(594174),
    c = n(381585),
    u = n(370039),
    d = n(937510),
    f = n(303952),
    g = n(253355),
    b = n(38900),
    p = n(653126),
    m = n(786040),
    h = n(258939),
    C = n(81136),
    E = n(619899),
    v = n(215023),
    S = n(213875);
function _(e) {
    let { category: t } = e,
        n = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
        l = (0, d.l)(t.products),
        a = (0, u.a)()(l),
        o = (0, E.St)(a),
        f = (0, c.sp)();
    return null == n || 0 === o.length
        ? null
        : (0, r.jsx)("div", {
              className: S.cardsContainer,
              children: o.map((e, t) =>
                  (0, r.jsx)(
                      c.k0,
                      {
                          newValue: { tilePosition: t },
                          children: (0, r.jsx)(
                              p.Z,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, m.wO)(e, v.AW.CATALOG, f),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function x(e) {
    let { category: t } = e,
        [n, s] = l.useState(!1),
        o = (0, a.O)((e) => {
            s(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: S.categoryWrapper,
        ref: o,
        children: [(0, r.jsx)(g.Z, { category: t }), (0, r.jsx)(_, { category: t })],
    });
}
function O(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: a, currentPage: s, handlePageChange: i, initialCategoryId: u } = e,
        d = (0, c.sp)(),
        g = (0, h.R)(),
        p = null != (t = null == d ? void 0 : d.sessionId) ? t : "",
        { noCache: m, includeUnpublished: E } = (0, C.Z)(),
        _ = l.useMemo(
            () =>
                n
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [n],
        ),
        O = l.useRef(void 0);
    l.useEffect(() => {
        if (null == u || 0 === _.length) {
            O.current = void 0;
            return;
        }
        if (u === O.current) return;
        let e = _.findIndex((e) => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / v.kN) + 1;
        t !== s && i(t), (O.current = u);
    }, [u, _, i, s]);
    let y = l.useMemo(() => {
        let e = (s - 1) * v.kN;
        return _.slice(e, e + v.kN);
    }, [_, s]);
    return (l.useEffect(() => {
        (0, f.n)({
            sessionId: p,
            checkpoint: f.a.SHOP_MOUNTED,
            tab: v.AW.CATALOG,
            unpublishedCategoriesShown: E,
            cacheDisabled: m,
        });
    }, []),
    l.useEffect(() => {
        g ||
            0 === y.length ||
            (0, f.n)({
                sessionId: p,
                checkpoint: f.a.SHOP_RENDERED,
                tab: v.AW.CATALOG,
                unpublishedCategoriesShown: E,
                cacheDisabled: m,
            });
    }, [p, E, m, g, y.length]),
    g)
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsxs)("div", {
              className: S.categories,
              children: [
                  y.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => a(e.skuId, t),
                              children: (0, r.jsx)(c.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(x, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: S.paginationContainer,
                      children: (0, r.jsx)(o.DsT, {
                          currentPage: s,
                          totalCount: _.length,
                          pageSize: v.kN,
                          onPageChange: i,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
