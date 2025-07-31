(r.d(t, { Z: () => I }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(979554),
    a = r(399606),
    o = r(780384),
    s = r(481060),
    c = r(410030),
    u = r(594174),
    d = r(381585),
    p = r(597688),
    f = r(370039),
    g = r(937510),
    h = r(303952),
    b = r(38900),
    m = r(709999),
    _ = r(81136),
    O = r(215023),
    v = r(388032),
    C = r(484920),
    E = r(558513),
    S = r(662128),
    y = r(676790),
    x = r(665195),
    j = r(42742),
    P = r(283727),
    T = r(266058),
    L = r(719138);
function I(e) {
    var t;
    let { isFetchingCategories: r, isFullScreen: I, scrollerRef: k, tab: w } = e,
        N = (0, d.sp)(),
        A = null != (t = null == N ? void 0 : N.sessionId) ? t : '',
        { noCache: B, includeUnpublished: R } = (0, _.Z)(),
        Z = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, a.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [F, M] = l.useState(1),
        H = () => {
            var e;
            null == k || null == (e = k.current) || e.scrollToTop({ animate: !0 });
        },
        W = (0, c.Fg)(),
        V = (0, o.ap)(W),
        [U, z, G] = l.useMemo(() => {
            switch (w) {
                case O.AW.AVATAR_DECORATIONS:
                    return [v.intl.string(v.t.dRZYND), V ? x.Z : y.Z, i.Z.AVATAR_DECORATION];
                case O.AW.PROFILE_EFFECTS:
                    return [v.intl.string(v.t['1cNjt7']), V ? L.Z : T.Z, i.Z.PROFILE_EFFECT];
                case O.AW.NAMEPLATES:
                    return [v.intl.string(v.t.V68Fq6), V ? P.Z : j.Z, i.Z.NAMEPLATE];
                case O.AW.BUNDLES:
                    return [v.intl.string(v.t.FYFppq), V ? S.Z : E.Z, i.Z.BUNDLE];
            }
        }, [w, V]),
        q = (0, f.a)(),
        K = l.useMemo(
            () =>
                q(
                    D.filter((e) => {
                        var t;
                        return e.type === G || (e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === G)) === !0);
                    })
                ),
            [D, G, q]
        ),
        Y = (0, g.l)(K);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: A,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: w,
            isFullScreen: I,
            unpublishedCategoriesShown: R,
            cacheDisabled: B
        });
    }, []),
    l.useEffect(() => {
        r ||
            (0, h.n)({
                sessionId: A,
                checkpoint: h.a.SHOP_RENDERED,
                tab: w,
                isFullScreen: I,
                unpublishedCategoriesShown: R,
                cacheDisabled: B
            });
    }, [A, I, R, B, r, w]),
    r || null == Z)
        ? (0, n.jsx)(b.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)('div', {
                      style: { backgroundImage: 'url('.concat(z, ')') },
                      className: C.bannerContainer,
                      children: (0, n.jsx)(s.X6q, {
                          variant: 'heading-xxl/extrabold',
                          children: U
                      })
                  }),
                  (0, n.jsx)('div', {
                      className: C.products,
                      children: Y.slice(40 * (F - 1), 40 * F).map((e, t) => {
                          let r = p.Z.getCategory(e.categorySkuId);
                          return null == r
                              ? null
                              : (0, n.jsx)(
                                    d.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, n.jsx)(
                                            m.Z,
                                            {
                                                product: e,
                                                user: Z,
                                                category: r,
                                                tab: w
                                            },
                                            e.skuId
                                        )
                                    },
                                    e.skuId
                                );
                      })
                  }),
                  Y.length > 40 &&
                      (0, n.jsx)('div', {
                          className: C.paginationContainer,
                          children: (0, n.jsx)('div', {
                              children: (0, n.jsx)(s.DsT, {
                                  currentPage: F,
                                  totalCount: Y.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      (M(e), H());
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
