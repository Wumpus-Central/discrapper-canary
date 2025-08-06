r.d(t, { Z: () => N }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(979554),
    i = r(399606),
    o = r(780384),
    s = r(481060),
    c = r(410030),
    u = r(594174),
    d = r(626135),
    p = r(381585),
    g = r(597688),
    f = r(370039),
    h = r(937510),
    b = r(303952),
    _ = r(38900),
    m = r(709999),
    v = r(81136),
    O = r(215023),
    C = r(981631),
    E = r(388032),
    S = r(484920),
    y = r(558513),
    x = r(662128),
    j = r(676790),
    P = r(665195),
    T = r(42742),
    L = r(283727),
    I = r(266058),
    k = r(719138);
function N(e) {
    var t;
    let { isFetchingCategories: r, isFullScreen: N, scrollerRef: A, tab: w } = e,
        B = (0, p.sp)(),
        R = null != (t = null == B ? void 0 : B.sessionId) ? t : "",
        { noCache: Z, includeUnpublished: D } = (0, v.Z)(),
        F = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        M = (0, i.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup),
        [H, W] = l.useState(1),
        V = () => {
            var e;
            null == A || null == (e = A.current) || e.scrollToTop({ animate: !0 });
        },
        U = (0, c.Fg)(),
        z = (0, o.ap)(U),
        [G, q, K] = l.useMemo(() => {
            switch (w) {
                case O.AW.AVATAR_DECORATIONS:
                    return [E.intl.string(E.t.dRZYND), z ? P.Z : j.Z, a.Z.AVATAR_DECORATION];
                case O.AW.PROFILE_EFFECTS:
                    return [E.intl.string(E.t["1cNjt7"]), z ? k.Z : I.Z, a.Z.PROFILE_EFFECT];
                case O.AW.NAMEPLATES:
                    return [E.intl.string(E.t.V68Fq6), z ? L.Z : T.Z, a.Z.NAMEPLATE];
                case O.AW.BUNDLES:
                    return [E.intl.string(E.t.FYFppq), z ? x.Z : y.Z, a.Z.BUNDLE];
            }
        }, [w, z]),
        Y = (0, f.a)(),
        X = l.useMemo(
            () =>
                Y(
                    M.filter((e) => {
                        var t;
                        return (
                            e.type === K ||
                            (e.type === a.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === K)) === !0)
                        );
                    }),
                ),
            [M, K, Y],
        ),
        J = (0, h.l)(X);
    return (l.useEffect(() => {
        (0, b.n)({
            sessionId: R,
            checkpoint: b.a.SHOP_MOUNTED,
            tab: w,
            isFullScreen: N,
            unpublishedCategoriesShown: D,
            cacheDisabled: Z,
        });
    }, []),
    l.useEffect(() => {
        r ||
            (0, b.n)({
                sessionId: R,
                checkpoint: b.a.SHOP_RENDERED,
                tab: w,
                isFullScreen: N,
                unpublishedCategoriesShown: D,
                cacheDisabled: Z,
            });
    }, [R, N, D, Z, r, w]),
    r || null == F)
        ? (0, n.jsx)(_.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      style: { backgroundImage: "url(".concat(q, ")") },
                      className: S.bannerContainer,
                      children: (0, n.jsx)(s.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: G,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: S.products,
                      children: J.slice(40 * (H - 1), 40 * H).map((e, t) => {
                          let r = g.Z.getCategory(e.categorySkuId);
                          return null == r
                              ? null
                              : (0, n.jsx)(
                                    p.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, n.jsx)(
                                            m.Z,
                                            {
                                                product: e,
                                                user: F,
                                                category: r,
                                                tab: w,
                                            },
                                            e.skuId,
                                        ),
                                    },
                                    e.skuId,
                                );
                      }),
                  }),
                  J.length > 40 &&
                      (0, n.jsx)("div", {
                          className: S.paginationContainer,
                          children: (0, n.jsx)("div", {
                              children: (0, n.jsx)(s.DsT, {
                                  currentPage: H,
                                  totalCount: J.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      d.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                          page_section: null == B ? void 0 : B.pageSection,
                                          page_category: null == B ? void 0 : B.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(w, " page ").concat(e),
                                          page_type: w,
                                      }),
                                          W(e),
                                          V();
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
