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
    p = n(597688),
    f = n(370039),
    h = n(937510),
    _ = n(303952),
    C = n(38900),
    m = n(709999),
    b = n(81136),
    E = n(215023),
    S = n(981631),
    O = n(388032),
    v = n(887353),
    x = n(558513),
    T = n(662128),
    y = n(676790),
    L = n(665195),
    j = n(42742),
    k = n(283727),
    I = n(266058),
    B = n(719138);
function N(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: N, scrollerRef: A, tab: P } = e,
        R = (0, g.sp)(),
        Z = null != (t = null == R ? void 0 : R.sessionId) ? t : "",
        { noCache: w, includeUnpublished: M } = (0, b.Z)(),
        F = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        H = (0, s.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [D, W] = l.useState(1),
        U = (0, c.Fg)(),
        V = (0, i.ap)(U),
        [z, G, q] = l.useMemo(() => {
            switch (P) {
                case E.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), V ? L.Z : y.Z, a.Z.AVATAR_DECORATION];
                case E.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t["1cNjt7"]), V ? B.Z : I.Z, a.Z.PROFILE_EFFECT];
                case E.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fq6), V ? k.Z : j.Z, a.Z.NAMEPLATE];
                case E.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFppq), V ? T.Z : x.Z, a.Z.BUNDLE];
            }
        }, [P, V]),
        K = (0, f.a)(),
        Y = l.useMemo(
            () =>
                K(
                    H.filter((e) => {
                        var t;
                        return (
                            e.type === q ||
                            (e.type === a.Z.VARIANTS_GROUP &&
                                (null == (t = e.variants) ? void 0 : t.some((e) => e.type === q)) === !0)
                        );
                    }),
                ),
            [H, q, K],
        ),
        X = (0, h.l)(Y);
    return (l.useEffect(() => {
        (0, _.n)({
            sessionId: Z,
            checkpoint: _.a.SHOP_MOUNTED,
            tab: P,
            isFullScreen: N,
            unpublishedCategoriesShown: M,
            cacheDisabled: w,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: Z,
                checkpoint: _.a.SHOP_RENDERED,
                tab: P,
                isFullScreen: N,
                unpublishedCategoriesShown: M,
                cacheDisabled: w,
            });
    }, [Z, N, M, w, n, P]),
    n || null == F)
        ? (0, r.jsx)(C.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(G, ")") },
                      className: v.bannerContainer,
                      children: (0, r.jsx)(o.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: z,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: v.products,
                      children: X.slice(40 * (D - 1), 40 * D).map((e, t) => {
                          let n = p.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            m.Z,
                                            {
                                                product: e,
                                                user: F,
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
                          className: v.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: D,
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
