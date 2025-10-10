n.d(t, { Z: () => A }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(979554),
    a = n(399606),
    i = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    g = n(381585),
    p = n(597688),
    f = n(128922),
    C = n(370039),
    h = n(937510),
    _ = n(303952),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    S = n(81136),
    v = n(215023),
    x = n(981631),
    O = n(388032),
    y = n(887353),
    T = n(558513),
    L = n(662128),
    j = n(676790),
    k = n(665195),
    I = n(42742),
    P = n(283727),
    N = n(266058),
    B = n(719138);
function A(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: A, scrollerRef: R, tab: Z } = e,
        w = (0, g.sp)(),
        H = null != (t = null == w ? void 0 : w.sessionId) ? t : "",
        { noCache: F, includeUnpublished: D } = (0, S.Z)(),
        M = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        W = (0, a.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [U, V] = l.useState(1),
        z = (0, c.Fg)(),
        G = (0, i.ap)(z),
        [K, q, Y] = l.useMemo(() => {
            switch (Z) {
                case v.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), G ? k.Z : j.Z, s.Z.AVATAR_DECORATION];
                case v.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t["1cNjt7"]), G ? B.Z : N.Z, s.Z.PROFILE_EFFECT];
                case v.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fq6), G ? P.Z : I.Z, s.Z.NAMEPLATE];
                case v.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFppq), G ? L.Z : T.Z, s.Z.BUNDLE];
            }
        }, [Z, G]),
        X = (0, C.a)(),
        Q = l.useMemo(
            () =>
                X(
                    W.filter((e) => {
                        var t;
                        return (
                            e.type === Y ||
                            (e.type === s.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === Y)) === !0)
                        );
                    }),
                ),
            [W, Y, X],
        ),
        J = (0, h.l)(Q);
    l.useEffect(() => {
        (0, _.n)({
            sessionId: H,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: Z,
            isFullScreen: A,
            unpublishedCategoriesShown: D,
            cacheDisabled: F,
        });
    }, []),
        l.useEffect(() => {
            n ||
                (0, _.n)({
                    sessionId: H,
                    checkpoint: _.a.SHOP_RENDERED,
                    tab: Z,
                    isFullScreen: A,
                    unpublishedCategoriesShown: D,
                    cacheDisabled: F,
                });
        }, [H, A, D, F, n, Z]);
    let $ = f.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return n || null == M
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(q, ")") },
                      className: y.bannerContainer,
                      children: (0, r.jsx)(o.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: K,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y.products,
                      children: J.slice(40 * (U - 1), 40 * U).map((e, t) => {
                          let n = p.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: $
                                            ? (0, r.jsx)(E.Z, { skuId: e.skuId }, e.skuId)
                                            : (0, r.jsx)(
                                                  b.Z,
                                                  {
                                                      product: e,
                                                      user: M,
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
                          className: y.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: U,
                                  totalCount: J.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
