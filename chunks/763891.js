n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(979554),
    s = n(399606),
    o = n(780384),
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
    S = n(81136),
    O = n(215023),
    x = n(981631),
    y = n(388032),
    j = n(887353),
    k = n(558513),
    T = n(662128),
    L = n(676790),
    I = n(665195),
    B = n(42742),
    A = n(283727),
    N = n(266058),
    P = n(719138);
function R(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: R, scrollerRef: Z, tab: w } = e,
        H = (0, g.sp)(),
        F = null != (t = null == H ? void 0 : H.sessionId) ? t : "",
        { noCache: D, includeUnpublished: M } = (0, S.Z)(),
        W = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        U = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup),
        [V, z] = l.useState(1),
        G = (0, c.Fg)(),
        K = (0, o.ap)(G),
        [Y, q, Q] = l.useMemo(() => {
            switch (w) {
                case O.AW.AVATAR_DECORATIONS:
                    return [y.intl.string(y.t.dRZYND), K ? I.Z : L.Z, i.Z.AVATAR_DECORATION];
                case O.AW.PROFILE_EFFECTS:
                    return [y.intl.string(y.t["1cNjt7"]), K ? P.Z : N.Z, i.Z.PROFILE_EFFECT];
                case O.AW.NAMEPLATES:
                    return [y.intl.string(y.t.V68Fq6), K ? A.Z : B.Z, i.Z.NAMEPLATE];
                case O.AW.BUNDLES:
                    return [y.intl.string(y.t.FYFppq), K ? T.Z : k.Z, i.Z.BUNDLE];
            }
        }, [w, K]),
        J = (0, C.a)(),
        X = l.useMemo(
            () =>
                J(
                    U.filter((e) => {
                        var t;
                        return (
                            e.type === Q ||
                            (e.type === i.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === Q)) === !0)
                        );
                    }),
                ),
            [U, Q, J],
        ),
        $ = (0, h.l)(X);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: F,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: w,
            isFullScreen: R,
            unpublishedCategoriesShown: M,
            cacheDisabled: D,
        });
    }, []),
        l.useEffect(() => {
            n ||
                (0, _.n)({
                    sessionId: F,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: w,
                    isFullScreen: R,
                    unpublishedCategoriesShown: M,
                    cacheDisabled: D,
                });
        }, [F, R, M, D, n, w]);
    let ee = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return n || null == W
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(q, ")") },
                      className: j.bannerContainer,
                      children: (0, r.jsx)(a.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: Y,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: j.products,
                      children: $.slice(40 * (V - 1), 40 * V).map((e, t) => {
                          let n = f.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: ee
                                            ? (0, r.jsx)(
                                                  E.Z,
                                                  {
                                                      skuId: e.skuId,
                                                      onClickAnalytics: (0, v.wO)(e, w, H),
                                                  },
                                                  e.skuId,
                                              )
                                            : (0, r.jsx)(
                                                  b.Z,
                                                  {
                                                      product: e,
                                                      user: W,
                                                      category: n,
                                                      tab: w,
                                                  },
                                                  e.skuId,
                                              ),
                                    },
                                    e.skuId,
                                );
                      }),
                  }),
                  $.length > 40 &&
                      (0, r.jsx)("div", {
                          className: j.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(a.DsT, {
                                  currentPage: V,
                                  totalCount: $.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == H ? void 0 : H.sessionId,
                                          page_section: null == H ? void 0 : H.pageSection,
                                          page_category: null == H ? void 0 : H.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(w, " page ").concat(e),
                                          page_type: w,
                                      }),
                                          z(e),
                                          null == Z || null == (t = Z.current) || t.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
