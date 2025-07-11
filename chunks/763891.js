(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(979554),
    a = n(399606),
    i = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(594174),
    d = n(381585),
    p = n(597688),
    g = n(370039),
    f = n(937510),
    h = n(303952),
    b = n(38900),
    m = n(709999),
    _ = n(81136),
    C = n(215023),
    O = n(388032),
    v = n(484920),
    E = n(558513),
    S = n(662128),
    x = n(676790),
    y = n(665195),
    j = n(42742),
    T = n(283727),
    P = n(266058),
    L = n(719138);
function k(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: k, scrollerRef: I, tab: B } = e,
        N = (0, d.sp)(),
        A = null != (t = null == N ? void 0 : N.sessionId) ? t : '',
        { noCache: w, includeUnpublished: R } = (0, _.Z)(),
        Z = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        F = (0, a.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [D, M] = l.useState(1),
        H = () => {
            var e;
            null == I || null == (e = I.current) || e.scrollToTop({ animate: !0 });
        },
        W = (0, c.Fg)(),
        V = (0, i.ap)(W),
        [U, G, z] = l.useMemo(() => {
            switch (B) {
                case C.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), V ? y.Z : x.Z, o.Z.AVATAR_DECORATION];
                case C.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t['1cNjt7']), V ? L.Z : P.Z, o.Z.PROFILE_EFFECT];
                case C.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fq6), V ? T.Z : j.Z, o.Z.NAMEPLATE];
                case C.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFppq), V ? S.Z : E.Z, o.Z.BUNDLE];
            }
        }, [B, V]),
        q = (0, g.a)(),
        Y = l.useMemo(
            () =>
                q(
                    F.filter((e) => {
                        var t;
                        return e.type === z || (e.type === o.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === z)) === !0);
                    })
                ),
            [F, z, q]
        ),
        K = (0, f.l)(Y);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: A,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: B,
            isFullScreen: k,
            unpublishedCategoriesShown: R,
            cacheDisabled: w
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: A,
                checkpoint: h.a.SHOP_RENDERED,
                tab: B,
                isFullScreen: k,
                unpublishedCategoriesShown: R,
                cacheDisabled: w
            });
    }, [A, k, R, w, n, B]),
    n || null == Z)
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      style: { backgroundImage: 'url('.concat(G, ')') },
                      className: v.bannerContainer,
                      children: (0, r.jsx)(s.X6q, {
                          variant: 'heading-xxl/extrabold',
                          children: U
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: v.products,
                      children: K.slice(40 * (D - 1), 40 * D).map((e, t) => {
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
                                                user: Z,
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
                          className: v.paginationContainer,
                          children: (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.DsT, {
                                  currentPage: D,
                                  totalCount: K.length,
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
