n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(979554),
    o = n(399606),
    a = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(626135),
    f = n(381585),
    g = n(597688),
    p = n(370039),
    m = n(937510),
    h = n(303952),
    C = n(38900),
    _ = n(653126),
    b = n(786040),
    v = n(81136),
    x = n(215023),
    E = n(981631),
    O = n(388032),
    S = n(887353),
    y = n(558513),
    j = n(662128),
    I = n(676790),
    k = n(665195),
    T = n(42742),
    L = n(283727),
    P = n(266058),
    B = n(719138);
function N(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: N, tab: A } = e,
        R = (0, f.sp)(),
        Z = null != (t = null == R ? void 0 : R.sessionId) ? t : "",
        { noCache: w, includeUnpublished: H } = (0, v.Z)(),
        D = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        M = (0, o.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup),
        [F, W] = l.useState(1),
        V = (0, c.Fg)(),
        U = (0, a.ap)(V),
        [z, G, K] = l.useMemo(() => {
            switch (A) {
                case x.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYNE), U ? k.Z : I.Z, i.Z.AVATAR_DECORATION];
                case x.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t["1cNjtx"]), U ? B.Z : P.Z, i.Z.PROFILE_EFFECT];
                case x.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fqz), U ? L.Z : T.Z, i.Z.NAMEPLATE];
                case x.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFpps), U ? j.Z : y.Z, i.Z.BUNDLE];
            }
        }, [A, U]),
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
                            !x.y8.some((t) => {
                                let { categorySkuId: n } = t;
                                return n === e.categorySkuId;
                            })
                        );
                    }),
                ),
            [M, K, Y],
        ),
        J = (0, m.l)(q);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: Z,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: A,
            unpublishedCategoriesShown: H,
            cacheDisabled: w,
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: Z,
                checkpoint: h.a.SHOP_RENDERED,
                tab: A,
                unpublishedCategoriesShown: H,
                cacheDisabled: w,
            });
    }, [Z, H, w, n, A]),
    n || null == D)
        ? (0, r.jsx)(C.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      style: { backgroundImage: "url(".concat(G, ")") },
                      className: S.bannerContainer,
                      children: (0, r.jsx)(s.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: z,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S.products,
                      children: J.slice(40 * (F - 1), 40 * F).map((e, t) =>
                          null == g.Z.getCategory(e.categorySkuId)
                              ? null
                              : (0, r.jsx)(
                                    f.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            _.Z,
                                            {
                                                skuId: e.skuId,
                                                onClickAnalytics: (0, b.wO)(e, A, R),
                                            },
                                            e.skuId,
                                        ),
                                    },
                                    e.skuId,
                                ),
                      ),
                  }),
                  J.length > 40 &&
                      (0, r.jsx)("div", {
                          className: S.paginationContainer,
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(s.DsT, {
                                  currentPage: F,
                                  totalCount: J.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == R ? void 0 : R.sessionId,
                                          page_section: null == R ? void 0 : R.pageSection,
                                          page_category: null == R ? void 0 : R.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(A, " page ").concat(e),
                                          page_type: A,
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
