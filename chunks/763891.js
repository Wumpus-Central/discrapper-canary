n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(979554),
    a = n(399606),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    f = n(381585),
    g = n(597688),
    p = n(128922),
    m = n(370039),
    h = n(937510),
    C = n(303952),
    _ = n(38900),
    b = n(709999),
    v = n(653126),
    x = n(786040),
    E = n(81136),
    O = n(215023),
    S = n(981631),
    y = n(388032),
    j = n(887353),
    k = n(558513),
    I = n(662128),
    T = n(676790),
    L = n(665195),
    B = n(42742),
    P = n(283727),
    N = n(266058),
    A = n(719138);
function R(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: R, tab: Z } = e,
        w = (0, f.sp)(),
        H = null != (t = null == w ? void 0 : w.sessionId) ? t : "",
        { noCache: D, includeUnpublished: M } = (0, E.Z)(),
        F = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        W = (0, a.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup),
        [V, U] = l.useState(1),
        z = (0, c.Fg)(),
        G = (0, s.ap)(z),
        [K, Y, q] = l.useMemo(() => {
            switch (Z) {
                case O.AW.AVATAR_DECORATIONS:
                    return [y.intl.string(y.t.dRZYNE), G ? L.Z : T.Z, i.Z.AVATAR_DECORATION];
                case O.AW.PROFILE_EFFECTS:
                    return [y.intl.string(y.t["1cNjtx"]), G ? A.Z : N.Z, i.Z.PROFILE_EFFECT];
                case O.AW.NAMEPLATES:
                    return [y.intl.string(y.t.V68Fqz), G ? P.Z : B.Z, i.Z.NAMEPLATE];
                case O.AW.BUNDLES:
                    return [y.intl.string(y.t.FYFpps), G ? I.Z : k.Z, i.Z.BUNDLE];
            }
        }, [Z, G]),
        J = (0, m.a)(),
        Q = l.useMemo(
            () =>
                J(
                    W.filter((e) => {
                        var t;
                        return (
                            e.type === q ||
                            (e.type === i.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === q)) === !0)
                        );
                    }),
                ),
            [W, q, J],
        ),
        X = (0, h.l)(Q);
    l.useEffect(() => {
        (0, C.n)({
            sessionId: H,
            checkpoint: C.a.SHOP_MOUNTED,
            tab: Z,
            unpublishedCategoriesShown: M,
            cacheDisabled: D,
        });
    }, []),
        l.useEffect(() => {
            n ||
                (0, C.n)({
                    sessionId: H,
                    checkpoint: C.a.SHOP_RENDERED,
                    tab: Z,
                    unpublishedCategoriesShown: M,
                    cacheDisabled: D,
                });
        }, [H, M, D, n, Z]);
    let $ = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return n || null == F
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(Y, ")") },
                      className: j.bannerContainer,
                      children: (0, r.jsx)(o.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: K,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: j.products,
                      children: X.slice(40 * (V - 1), 40 * V).map((e, t) => {
                          let n = g.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    f.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: $
                                            ? (0, r.jsx)(
                                                  v.Z,
                                                  {
                                                      skuId: e.skuId,
                                                      onClickAnalytics: (0, x.wO)(e, Z, w),
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
                          className: j.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: V,
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
                                          U(e),
                                          null == R || null == (t = R.current) || t.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
