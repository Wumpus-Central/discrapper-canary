n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(979554),
    i = n(399606),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    g = n(381585),
    p = n(597688),
    f = n(128922),
    h = n(370039),
    C = n(937510),
    _ = n(303952),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    S = n(81136),
    x = n(215023),
    v = n(981631),
    O = n(388032),
    T = n(887353),
    y = n(558513),
    L = n(662128),
    j = n(676790),
    k = n(665195),
    I = n(42742),
    P = n(283727),
    A = n(266058),
    B = n(719138);
function N(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: N, scrollerRef: R, tab: Z } = e,
        w = (0, g.sp)(),
        F = null != (t = null == w ? void 0 : w.sessionId) ? t : "",
        { noCache: H, includeUnpublished: M } = (0, S.Z)(),
        D = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        W = (0, i.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [U, V] = l.useState(1),
        z = (0, c.Fg)(),
        G = (0, s.ap)(z),
        [q, K, Y] = l.useMemo(() => {
            switch (Z) {
                case x.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), G ? k.Z : j.Z, a.Z.AVATAR_DECORATION];
                case x.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t["1cNjt7"]), G ? B.Z : A.Z, a.Z.PROFILE_EFFECT];
                case x.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fq6), G ? P.Z : I.Z, a.Z.NAMEPLATE];
                case x.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFppq), G ? L.Z : y.Z, a.Z.BUNDLE];
            }
        }, [Z, G]),
        X = (0, h.a)(),
        Q = l.useMemo(
            () =>
                X(
                    W.filter((e) => {
                        var t;
                        return (
                            e.type === Y ||
                            (e.type === a.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === Y)) === !0)
                        );
                    }),
                ),
            [W, Y, X],
        ),
        J = (0, C.l)(Q);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: F,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: Z,
            isFullScreen: N,
            unpublishedCategoriesShown: M,
            cacheDisabled: H,
        });
    }, []),
        l.useEffect(() => {
            n ||
                (0, _.n)({
                    sessionId: F,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: Z,
                    isFullScreen: N,
                    unpublishedCategoriesShown: M,
                    cacheDisabled: H,
                });
        }, [F, N, M, H, n, Z]);
    let $ = f.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return n || null == D
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(K, ")") },
                      className: T.bannerContainer,
                      children: (0, r.jsx)(o.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: q,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: T.products,
                      children: J.slice(40 * (U - 1), 40 * U).map((e, t) => {
                          let n = p.Z.getCategory(e.categorySkuId);
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
                                                      config: { tab: Z },
                                                  },
                                                  e.skuId,
                                              )
                                            : (0, r.jsx)(
                                                  b.Z,
                                                  {
                                                      product: e,
                                                      user: D,
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
                  J.length > 40 &&
                      (0, r.jsx)("div", {
                          className: T.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: U,
                                  totalCount: J.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
