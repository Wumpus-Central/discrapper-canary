n.d(t, { Z: () => A }), n(388685);
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
    v = n(81136),
    S = n(215023),
    O = n(981631),
    x = n(388032),
    y = n(887353),
    T = n(558513),
    j = n(662128),
    L = n(676790),
    k = n(665195),
    I = n(42742),
    B = n(283727),
    N = n(266058),
    P = n(719138);
function A(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: A, scrollerRef: R, tab: Z } = e,
        w = (0, g.sp)(),
        H = null != (t = null == w ? void 0 : w.sessionId) ? t : "",
        { noCache: F, includeUnpublished: D } = (0, v.Z)(),
        M = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        W = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup),
        [U, V] = l.useState(1),
        G = (0, c.Fg)(),
        z = (0, o.ap)(G),
        [K, Y, q] = l.useMemo(() => {
            switch (Z) {
                case S.AW.AVATAR_DECORATIONS:
                    return [x.intl.string(x.t.dRZYND), z ? k.Z : L.Z, i.Z.AVATAR_DECORATION];
                case S.AW.PROFILE_EFFECTS:
                    return [x.intl.string(x.t["1cNjt7"]), z ? P.Z : N.Z, i.Z.PROFILE_EFFECT];
                case S.AW.NAMEPLATES:
                    return [x.intl.string(x.t.V68Fq6), z ? B.Z : I.Z, i.Z.NAMEPLATE];
                case S.AW.BUNDLES:
                    return [x.intl.string(x.t.FYFppq), z ? j.Z : T.Z, i.Z.BUNDLE];
            }
        }, [Z, z]),
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
    let $ = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return n || null == M
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(Y, ")") },
                      className: y.bannerContainer,
                      children: (0, r.jsx)(a.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: K,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y.products,
                      children: X.slice(40 * (U - 1), 40 * U).map((e, t) => {
                          let n = f.Z.getCategory(e.categorySkuId);
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
                  X.length > 40 &&
                      (0, r.jsx)("div", {
                          className: y.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(a.DsT, {
                                  currentPage: U,
                                  totalCount: X.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
