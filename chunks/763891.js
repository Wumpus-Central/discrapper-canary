n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(979554),
    o = n(399606),
    s = n(780384),
    a = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    g = n(381585),
    f = n(597688),
    p = n(128922),
    C = n(370039),
    h = n(937510),
    _ = n(303952),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    v = n(786040),
    O = n(81136),
    x = n(215023),
    S = n(981631),
    y = n(388032),
    k = n(887353),
    j = n(558513),
    T = n(662128),
    L = n(676790),
    I = n(665195),
    B = n(42742),
    A = n(283727),
    N = n(266058),
    P = n(719138);
function R(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: R, tab: Z } = e,
        w = (0, g.sp)(),
        H = null != (t = null == w ? void 0 : w.sessionId) ? t : "",
        { noCache: D, includeUnpublished: M } = (0, O.Z)(),
        F = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        W = (0, o.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup),
        [U, V] = l.useState(1),
        z = (0, c.Fg)(),
        G = (0, s.ap)(z),
        [K, Y, q] = l.useMemo(() => {
            switch (Z) {
                case x.AW.AVATAR_DECORATIONS:
                    return [y.intl.string(y.t.dRZYND), G ? I.Z : L.Z, i.Z.AVATAR_DECORATION];
                case x.AW.PROFILE_EFFECTS:
                    return [y.intl.string(y.t["1cNjt7"]), G ? P.Z : N.Z, i.Z.PROFILE_EFFECT];
                case x.AW.NAMEPLATES:
                    return [y.intl.string(y.t.V68Fq6), G ? A.Z : B.Z, i.Z.NAMEPLATE];
                case x.AW.BUNDLES:
                    return [y.intl.string(y.t.FYFppq), G ? T.Z : j.Z, i.Z.BUNDLE];
            }
        }, [Z, G]),
        Q = (0, C.a)(),
        J = l.useMemo(
            () =>
                Q(
                    W.filter((e) => {
                        var t;
                        return (
                            e.type === q ||
                            (e.type === i.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === q)) === !0)
                        );
                    }),
                ),
            [W, q, Q],
        ),
        X = (0, h.l)(J);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: H,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: Z,
            unpublishedCategoriesShown: M,
            cacheDisabled: D,
        });
    }, []),
        l.useEffect(() => {
            n ||
                (0, _.n)({
                    sessionId: H,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: Z,
                    unpublishedCategoriesShown: M,
                    cacheDisabled: D,
                });
        }, [H, M, D, n, Z]);
    let $ = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return n || null == F
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(Y, ")") },
                      className: k.bannerContainer,
                      children: (0, r.jsx)(a.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: K,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k.products,
                      children: X.slice(40 * (U - 1), 40 * U).map((e, t) => {
                          let n = f.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: $
                                            ? (0, r.jsx)(
                                                  E.Z,
                                                  {
                                                      skuId: e.skuId,
                                                      onClickAnalytics: (0, v.wO)(e, Z, w),
                                                  },
                                                  e.skuId,
                                              )
                                            : (0, r.jsx)(
                                                  b.Z,
                                                  {
                                                      product: e,
                                                      user: F,
                                                      category: n,
                                                      tab: Z,
                                                  },
                                                  e.skuId,
                                              ),
                                    },
                                    e.skuId,
                                );
                      }),
                  }),
                  X.length > 40 &&
                      (0, r.jsx)("div", {
                          className: k.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(a.DsT, {
                                  currentPage: U,
                                  totalCount: X.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                                          page_section: null == w ? void 0 : w.pageSection,
                                          page_category: null == w ? void 0 : w.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(Z, " page ").concat(e),
                                          page_type: Z,
                                      }),
                                          V(e),
                                          null == R || null == (t = R.current) || t.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
