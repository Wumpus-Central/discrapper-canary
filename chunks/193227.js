n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(907331),
    o = n(399606),
    s = n(481060),
    a = n(594174),
    c = n(381585),
    u = n(370039),
    d = n(937510),
    g = n(303952),
    f = n(253355),
    p = n(38900),
    m = n(653126),
    h = n(786040),
    C = n(258939),
    _ = n(81136),
    b = n(619899),
    v = n(215023),
    E = n(887353);
function S(e) {
    let { category: t } = e,
        n = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        l = (0, d.l)(t.products),
        i = (0, u.a)()(l),
        s = (0, b.St)(i),
        g = (0, c.sp)();
    return null == n || 0 === s.length
        ? null
        : (0, r.jsx)("div", {
              className: E.cardsContainer,
              children: s.map((e, t) =>
                  (0, r.jsx)(
                      c.k0,
                      {
                          newValue: { tilePosition: t },
                          children: (0, r.jsx)(
                              m.Z,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, h.wO)(e, v.AW.CATALOG, g),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function O(e) {
    let { category: t } = e,
        [n, o] = l.useState(!1),
        s = (0, i.O)((e) => {
            o(e);
        }, 0.15);
    return (0, r.jsxs)("div", {
        className: E.categoryWrapper,
        ref: s,
        children: [(0, r.jsx)(f.Z, { category: t }), (0, r.jsx)(S, { category: t })],
    });
}
function x(e) {
    var t;
    let { sortedCategories: n, setCategoryRef: i, currentPage: o, handlePageChange: a, initialCategoryId: u } = e,
        d = (0, c.sp)(),
        f = (0, C.R)(),
        m = null != (t = null == d ? void 0 : d.sessionId) ? t : "",
        { noCache: h, includeUnpublished: b } = (0, _.Z)(),
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
        x = l.useRef(void 0);
    l.useEffect(() => {
        if (null == u || 0 === S.length) {
            x.current = void 0;
            return;
        }
        if (u === x.current) return;
        let e = S.findIndex((e) => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / v.kN) + 1;
        t !== o && a(t), (x.current = u);
    }, [u, S, a, o]);
    let y = l.useMemo(() => {
        let e = (o - 1) * v.kN;
        return S.slice(e, e + v.kN);
    }, [S, o]);
    return (l.useEffect(() => {
        (0, g.n)({
            sessionId: m,
            checkpoint: g.a.SHOP_MOUNTED,
            tab: v.AW.CATALOG,
            unpublishedCategoriesShown: b,
            cacheDisabled: h,
        });
    }, []),
    l.useEffect(() => {
        f ||
            0 === y.length ||
            (0, g.n)({
                sessionId: m,
                checkpoint: g.a.SHOP_RENDERED,
                tab: v.AW.CATALOG,
                unpublishedCategoriesShown: b,
                cacheDisabled: h,
            });
    }, [m, b, h, f, y.length]),
    f)
        ? (0, r.jsx)(p.Z, {})
        : (0, r.jsxs)("div", {
              className: E.categories,
              children: [
                  y.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              ref: (t) => i(e.skuId, t),
                              children: (0, r.jsx)(c.k0, {
                                  newValue: { categoryPosition: t },
                                  children: (0, r.jsx)(O, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, r.jsx)("div", {
                      className: E.paginationContainer,
                      children: (0, r.jsx)(s.DsT, {
                          currentPage: o,
                          totalCount: S.length,
                          pageSize: v.kN,
                          onPageChange: a,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
