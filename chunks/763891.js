n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(979554),
    s = n(399606),
    i = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    g = n(381585),
    f = n(597688),
    p = n(370039),
    h = n(937510),
    m = n(303952),
    _ = n(38900),
    C = n(709999),
    b = n(81136),
    E = n(215023),
    S = n(981631),
    v = n(388032),
    O = n(887353),
    x = n(274472),
    y = n(3961),
    T = n(697751),
    L = n(38700),
    j = n(617373),
    k = n(330840),
    B = n(750846),
    I = n(860846);
function N(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: N, scrollerRef: A, tab: P } = e,
        R = (0, g.sp)(),
        Z = null != (t = null == R ? void 0 : R.sessionId) ? t : "",
        { noCache: w, includeUnpublished: F } = (0, b.Z)(),
        H = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup),
        [M, W] = l.useState(1),
        U = (0, c.Fg)(),
        V = (0, i.ap)(U),
        [z, G, q] = l.useMemo(() => {
            switch (P) {
                case E.AW.AVATAR_DECORATIONS:
                    return [v.intl.string(v.t.dRZYND), V ? L.Z : T.Z, a.Z.AVATAR_DECORATION];
                case E.AW.PROFILE_EFFECTS:
                    return [v.intl.string(v.t["1cNjt7"]), V ? I.Z : B.Z, a.Z.PROFILE_EFFECT];
                case E.AW.NAMEPLATES:
                    return [v.intl.string(v.t.V68Fq6), V ? k.Z : j.Z, a.Z.NAMEPLATE];
                case E.AW.BUNDLES:
                    return [v.intl.string(v.t.FYFppq), V ? y.Z : x.Z, a.Z.BUNDLE];
            }
        }, [P, V]),
        K = (0, p.a)(),
        Y = l.useMemo(
            () =>
                K(
                    D.filter((e) => {
                        var t;
                        return (
                            e.type === q ||
                            (e.type === a.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === q)) === !0)
                        );
                    }),
                ),
            [D, q, K],
        ),
        X = (0, h.l)(Y);
    return (l.useEffect(() => {
        (0, m.n)({
            sessionId: Z,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: P,
            isFullScreen: N,
            unpublishedCategoriesShown: F,
            cacheDisabled: w,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, m.n)({
                sessionId: Z,
                checkpoint: m.a.SHOP_RENDERED,
                tab: P,
                isFullScreen: N,
                unpublishedCategoriesShown: F,
                cacheDisabled: w,
            });
    }, [Z, N, F, w, n, P]),
    n || null == H)
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(G, ")") },
                      className: O.bannerContainer,
                      children: (0, r.jsx)(o.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: z,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: O.products,
                      children: X.slice(40 * (M - 1), 40 * M).map((e, t) => {
                          let n = f.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            C.Z,
                                            {
                                                product: e,
                                                user: H,
                                                category: n,
                                                tab: P,
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
                          className: O.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: M,
                                  totalCount: X.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == R ? void 0 : R.sessionId,
                                          page_section: null == R ? void 0 : R.pageSection,
                                          page_category: null == R ? void 0 : R.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(P, " page ").concat(e),
                                          page_type: P,
                                      }),
                                          W(e),
                                          null == A || null == (t = A.current) || t.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
