n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(979554),
    o = n(399606),
    i = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    f = n(381585),
    g = n(597688),
    p = n(370039),
    b = n(937510),
    m = n(303952),
    C = n(38900),
    h = n(653126),
    v = n(786040),
    E = n(81136),
    S = n(215023),
    _ = n(981631),
    O = n(388032),
    x = n(213875),
    y = n(274472),
    j = n(3961),
    k = n(697751),
    T = n(38700),
    L = n(617373),
    I = n(330840),
    B = n(750846),
    A = n(860846);
function N(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: N, tab: P } = e,
        R = (0, f.sp)(),
        Z = null != (t = null == R ? void 0 : R.sessionId) ? t : "",
        { noCache: w, includeUnpublished: H } = (0, E.Z)(),
        D = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        M = (0, o.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup),
        [F, W] = l.useState(1),
        U = (0, c.Fg)(),
        V = (0, i.ap)(U),
        [z, G, K] = l.useMemo(() => {
            switch (P) {
                case S.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYNE), V ? T.Z : k.Z, a.Z.AVATAR_DECORATION];
                case S.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t["1cNjtx"]), V ? A.Z : B.Z, a.Z.PROFILE_EFFECT];
                case S.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fqz), V ? I.Z : L.Z, a.Z.NAMEPLATE];
                case S.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFpps), V ? j.Z : y.Z, a.Z.BUNDLE];
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
        Q = (0, b.l)(q);
    return (l.useEffect(() => {
        (0, m.n)({
            sessionId: Z,
            checkpoint: m.a.SHOP_MOUNTED,
            tab: P,
            unpublishedCategoriesShown: H,
            cacheDisabled: w,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, m.n)({
                sessionId: Z,
                checkpoint: m.a.SHOP_RENDERED,
                tab: P,
                unpublishedCategoriesShown: H,
                cacheDisabled: w,
            });
    }, [Z, H, w, n, P]),
    n || null == D)
        ? (0, r.jsx)(C.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(G, ")") },
                      className: x.bannerContainer,
                      children: (0, r.jsx)(s.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: z,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: x.products,
                      children: Q.slice(40 * (F - 1), 40 * F).map((e, t) =>
                          null == g.Z.getCategory(e.categorySkuId)
                              ? null
                              : (0, r.jsx)(
                                    f.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            h.Z,
                                            {
                                                skuId: e.skuId,
                                                onClickAnalytics: (0, v.wO)(e, P, R),
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
                          className: x.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(s.DsT, {
                                  currentPage: F,
                                  totalCount: Q.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == R ? void 0 : R.sessionId,
                                          page_section: null == R ? void 0 : R.pageSection,
                                          page_category: null == R ? void 0 : R.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(P, " page ").concat(e),
                                          page_type: P,
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
