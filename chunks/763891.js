n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(979554),
    s = n(399606),
    o = n(780384),
    i = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    f = n(381585),
    g = n(597688),
    b = n(370039),
    p = n(937510),
    m = n(303952),
    h = n(38900),
    C = n(653126),
    E = n(786040),
    v = n(81136),
    S = n(215023),
    _ = n(981631),
    x = n(388032),
    O = n(213875),
    y = n(274472),
    k = n(3961),
    T = n(697751),
    j = n(38700),
    L = n(617373),
    I = n(330840),
    A = n(750846),
    B = n(860846);
function N(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: N, tab: R } = e,
        P = (0, f.sp)(),
        w = null != (t = null == P ? void 0 : P.sessionId) ? t : "",
        { noCache: Z, includeUnpublished: D } = (0, v.Z)(),
        H = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        M = (0, s.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup),
        [F, W] = l.useState(1),
        U = (0, c.Fg)(),
        z = (0, o.ap)(U),
        [V, G, K] = l.useMemo(() => {
            switch (R) {
                case S.AW.AVATAR_DECORATIONS:
                    return [x.intl.string(x.t.dRZYNE), z ? j.Z : T.Z, a.Z.AVATAR_DECORATION];
                case S.AW.PROFILE_EFFECTS:
                    return [x.intl.string(x.t["1cNjtx"]), z ? B.Z : A.Z, a.Z.PROFILE_EFFECT];
                case S.AW.NAMEPLATES:
                    return [x.intl.string(x.t.V68Fqz), z ? I.Z : L.Z, a.Z.NAMEPLATE];
                case S.AW.BUNDLES:
                    return [x.intl.string(x.t.FYFpps), z ? k.Z : y.Z, a.Z.BUNDLE];
            }
        }, [R, z]),
        Y = (0, b.a)(),
        q = l.useMemo(
            () =>
                Y(
                    M.filter((e) => {
                        var t;
                        return (
                            (e.type === K ||
                                (e.type === a.Z.VARIANTS_GROUP &&
                                    (null == (t = e.variants) ? void 0 : t.some((e) => e.type === K)) === !0)) &&
                            !S.y8.some((t) => {
                                let { categorySkuId: n } = t;
                                return n === e.categorySkuId;
                            })
                        );
                    }),
                ),
            [M, K, Y],
        ),
        Q = (0, p.l)(q);
    return (l.useEffect(() => {
        (0, m.n)({
            sessionId: w,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: R,
            unpublishedCategoriesShown: D,
            cacheDisabled: Z,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, m.n)({
                sessionId: w,
                checkpoint: m.a.SHOP_RENDERED,
                tab: R,
                unpublishedCategoriesShown: D,
                cacheDisabled: Z,
            });
    }, [w, D, Z, n, R]),
    n || null == H)
        ? (0, r.jsx)(h.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(G, ")") },
                      className: O.bannerContainer,
                      children: (0, r.jsx)(i.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: V,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: O.products,
                      children: Q.slice(40 * (F - 1), 40 * F).map((e, t) =>
                          null == g.Z.getCategory(e.categorySkuId)
                              ? null
                              : (0, r.jsx)(
                                    f.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            C.Z,
                                            {
                                                skuId: e.skuId,
                                                onClickAnalytics: (0, E.wO)(e, R, P),
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
                              children: (0, r.jsx)(i.DsT, {
                                  currentPage: F,
                                  totalCount: Q.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                                          page_section: null == P ? void 0 : P.pageSection,
                                          page_category: null == P ? void 0 : P.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(R, " page ").concat(e),
                                          page_type: R,
                                      }),
                                          W(e),
                                          null == N || null == (t = N.current) || t.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
