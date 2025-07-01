(n.d(t, { Z: () => L }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(979554),
    i = n(399606),
    o = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(381585),
    p = n(597688),
    f = n(370039),
    g = n(937510),
    h = n(303952),
    b = n(38900),
    m = n(709999),
    _ = n(81136),
    C = n(215023),
    v = n(388032),
    O = n(484920),
    S = n(558513),
    x = n(662128),
    E = n(676790),
    y = n(665195),
    j = n(42742),
    P = n(283727),
    k = n(266058),
    T = n(719138);
function L(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: L, scrollerRef: I, tab: B } = e,
        N = (0, d.sp)(),
        A = null != (t = null == N ? void 0 : N.sessionId) ? t : '',
        { noCache: w, includeUnpublished: Z } = (0, _.Z)(),
        R = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        H = (0, i.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [M, D] = l.useState(1),
        F = () => {
            var e;
            null == I || null == (e = I.current) || e.scrollToTop({ animate: !0 });
        },
        W = (0, c.Fg)(),
        V = (0, o.ap)(W),
        [U, G, z] = l.useMemo(() => {
            switch (B) {
                case C.AW.AVATAR_DECORATIONS:
                    return [v.intl.string(v.t.dRZYND), V ? y.Z : E.Z, a.Z.AVATAR_DECORATION];
                case C.AW.PROFILE_EFFECTS:
                    return [v.intl.string(v.t['1cNjt7']), V ? T.Z : k.Z, a.Z.PROFILE_EFFECT];
                case C.AW.NAMEPLATES:
                    return [v.intl.string(v.t.V68Fq6), V ? P.Z : j.Z, a.Z.NAMEPLATE];
                case C.AW.BUNDLES:
                    return [v.intl.string(v.t.FYFppq), V ? x.Z : S.Z, a.Z.BUNDLE];
            }
        }, [B, V]),
        q = (0, f.a)(),
        Y = l.useMemo(
            () =>
                q(
                    H.filter((e) => {
                        var t;
                        return e.type === z || (e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === z)) === !0);
                    })
                ),
            [H, z, q]
        ),
        K = (0, g.l)(Y);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: A,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: B,
            isFullScreen: L,
            unpublishedCategoriesShown: Z,
            cacheDisabled: w
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: A,
                checkpoint: h.a.SHOP_RENDERED,
                tab: B,
                isFullScreen: L,
                unpublishedCategoriesShown: Z,
                cacheDisabled: w
            });
    }, [A, L, Z, w, n, B]),
    n || null == R)
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      style: { backgroundImage: 'url('.concat(G, ')') },
                      className: O.bannerContainer,
                      children: (0, r.jsx)(s.X6q, {
                          variant: 'heading-xxl/extrabold',
                          children: U
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: O.products,
                      children: K.slice(40 * (M - 1), 40 * M).map((e, t) => {
                          let n = p.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    d.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            m.Z,
                                            {
                                                product: e,
                                                user: R,
                                                category: n,
                                                tab: B
                                            },
                                            e.skuId
                                        )
                                    },
                                    e.skuId
                                );
                      })
                  }),
                  K.length > 40 &&
                      (0, r.jsx)('div', {
                          className: O.paginationContainer,
                          children: (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.DsT, {
                                  currentPage: M,
                                  totalCount: K.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      (D(e), F());
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
