n.d(t, { Z: () => I }), n(388685);
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
    b = n(937510),
    g = n(303952),
    h = n(38900),
    m = n(709999),
    _ = n(81136),
    C = n(215023),
    v = n(388032),
    O = n(484920),
    x = n(558513),
    S = n(662128),
    E = n(676790),
    y = n(665195),
    j = n(42742),
    P = n(283727),
    k = n(266058),
    T = n(719138);
function I(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: I, scrollerRef: L, tab: B } = e,
        w = (0, d.sp)(),
        N = null != (t = null == w ? void 0 : w.sessionId) ? t : '',
        { noCache: A, includeUnpublished: R } = (0, _.Z)(),
        Z = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        F = (0, i.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [D, H] = l.useState(1),
        M = () => {
            var e;
            null == L || null == (e = L.current) || e.scrollToTop({ animate: !0 });
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
                    return [v.intl.string(v.t.FYFppq), V ? S.Z : x.Z, a.Z.BUNDLE];
            }
        }, [B, V]),
        q = (0, f.a)(),
        K = l.useMemo(
            () =>
                q(
                    F.filter((e) => {
                        var t;
                        return e.type === z || (e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === z)) === !0);
                    })
                ),
            [F, z, q]
        ),
        Y = (0, b.l)(K);
    return (l.useEffect(() => {
        (0, g.n)({
            sessionId: N,
            checkpoint: g.a.SHOP_MOUNTED,
            tab: B,
            isFullScreen: I,
            unpublishedCategoriesShown: R,
            cacheDisabled: A
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, g.n)({
                sessionId: N,
                checkpoint: g.a.SHOP_RENDERED,
                tab: B,
                isFullScreen: I,
                unpublishedCategoriesShown: R,
                cacheDisabled: A
            });
    }, [N, I, R, A, n, B]),
    n || null == Z)
        ? (0, r.jsx)(h.Z, {})
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
                      children: Y.slice(40 * (D - 1), 40 * D).map((e, t) => {
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
                  Y.length > 40 &&
                      (0, r.jsx)('div', {
                          className: O.paginationContainer,
                          children: (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.DsT, {
                                  currentPage: D,
                                  totalCount: Y.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      H(e), M();
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
