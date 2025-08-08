n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(979554),
    i = n(399606),
    o = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    p = n(381585),
    g = n(597688),
    f = n(370039),
    b = n(937510),
    h = n(303952),
    m = n(38900),
    _ = n(709999),
    v = n(81136),
    C = n(215023),
    O = n(981631),
    E = n(388032),
    S = n(484920),
    y = n(558513),
    x = n(662128),
    j = n(676790),
    T = n(665195),
    P = n(42742),
    L = n(283727),
    k = n(266058),
    I = n(719138);
function N(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: N, scrollerRef: A, tab: w } = e,
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
                case C.AW.AVATAR_DECORATIONS:
                    return [E.intl.string(E.t.dRZYND), z ? T.Z : j.Z, a.Z.AVATAR_DECORATION];
                case C.AW.PROFILE_EFFECTS:
                    return [E.intl.string(E.t["1cNjt7"]), z ? I.Z : k.Z, a.Z.PROFILE_EFFECT];
                case C.AW.NAMEPLATES:
                    return [E.intl.string(E.t.V68Fq6), z ? L.Z : P.Z, a.Z.NAMEPLATE];
                case C.AW.BUNDLES:
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
        J = (0, b.l)(X);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: R,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: w,
            isFullScreen: N,
            unpublishedCategoriesShown: D,
            cacheDisabled: Z,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: R,
                checkpoint: h.a.SHOP_RENDERED,
                tab: w,
                isFullScreen: N,
                unpublishedCategoriesShown: D,
                cacheDisabled: Z,
            });
    }, [R, N, D, Z, n, w]),
    n || null == F)
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(q, ")") },
                      className: S.bannerContainer,
                      children: (0, r.jsx)(s.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: G,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S.products,
                      children: J.slice(40 * (H - 1), 40 * H).map((e, t) => {
                          let n = g.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    p.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            _.Z,
                                            {
                                                product: e,
                                                user: F,
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
                  J.length > 40 &&
                      (0, r.jsx)("div", {
                          className: S.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(s.DsT, {
                                  currentPage: H,
                                  totalCount: J.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      d.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
