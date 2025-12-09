n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(979554),
    s = n(399606),
    o = n(780384),
    a = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    g = n(381585),
    f = n(597688),
    p = n(370039),
    m = n(937510),
    C = n(303952),
    h = n(38900),
    _ = n(653126),
    b = n(786040),
    E = n(81136),
    v = n(215023),
    S = n(981631),
    x = n(388032),
    O = n(887353),
    y = n(558513),
    k = n(662128),
    T = n(676790),
    j = n(665195),
    I = n(42742),
    L = n(283727),
    B = n(266058),
    N = n(719138);
function A(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: A, tab: P } = e,
        R = (0, g.sp)(),
        Z = null != (t = null == R ? void 0 : R.sessionId) ? t : "",
        { noCache: w, includeUnpublished: D } = (0, E.Z)(),
        H = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        M = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup),
        [F, W] = l.useState(1),
        U = (0, c.Fg)(),
        V = (0, o.ap)(U),
        [z, G, K] = l.useMemo(() => {
            switch (P) {
                case v.AW.AVATAR_DECORATIONS:
                    return [x.intl.string(x.t.dRZYNE), V ? j.Z : T.Z, i.Z.AVATAR_DECORATION];
                case v.AW.PROFILE_EFFECTS:
                    return [x.intl.string(x.t["1cNjtx"]), V ? N.Z : B.Z, i.Z.PROFILE_EFFECT];
                case v.AW.NAMEPLATES:
                    return [x.intl.string(x.t.V68Fqz), V ? L.Z : I.Z, i.Z.NAMEPLATE];
                case v.AW.BUNDLES:
                    return [x.intl.string(x.t.FYFpps), V ? k.Z : y.Z, i.Z.BUNDLE];
            }
        }, [P, V]),
        Y = (0, p.a)(),
        q = l.useMemo(
            () =>
                Y(
                    M.filter((e) => {
                        var t;
                        return (
                            (e.type === K ||
                                (e.type === i.Z.VARIANTS_GROUP &&
                                    (null == (t = e.variants) ? void 0 : t.some((e) => e.type === K)) === !0)) &&
                            !v.y8.some((t) => {
                                let { categorySkuId: n } = t;
                                return n === e.categorySkuId;
                            })
                        );
                    }),
                ),
            [M, K, Y],
        ),
        Q = (0, m.l)(q);
    return (l.useEffect(() => {
        (0, C.n)({
            sessionId: Z,
            checkpoint: C.a.SHOP_MOUNTED,
            tab: P,
            unpublishedCategoriesShown: D,
            cacheDisabled: w,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, C.n)({
                sessionId: Z,
                checkpoint: C.a.SHOP_RENDERED,
                tab: P,
                unpublishedCategoriesShown: D,
                cacheDisabled: w,
            });
    }, [Z, D, w, n, P]),
    n || null == H)
        ? (0, r.jsx)(h.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(G, ")") },
                      className: O.bannerContainer,
                      children: (0, r.jsx)(a.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: z,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: O.products,
                      children: Q.slice(40 * (F - 1), 40 * F).map((e, t) =>
                          null == f.Z.getCategory(e.categorySkuId)
                              ? null
                              : (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            _.Z,
                                            {
                                                skuId: e.skuId,
                                                onClickAnalytics: (0, b.wO)(e, P, R),
                                            },
                                            e.skuId,
                                        ),
                                    },
                                    e.skuId,
                                ),
                      ),
                  }),
                  Q.length > 40 &&
                      (0, r.jsx)("div", {
                          className: O.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(a.DsT, {
                                  currentPage: F,
                                  totalCount: Q.length,
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
