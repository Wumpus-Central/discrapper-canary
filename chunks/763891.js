(n.d(t, { Z: () => I }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(979554),
    i = n(399606),
    a = n(780384),
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
    O = n(388032),
    E = n(484920),
    v = n(558513),
    S = n(662128),
    x = n(676790),
    y = n(665195),
    j = n(42742),
    T = n(283727),
    P = n(266058),
    L = n(719138);
function I(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: I, scrollerRef: k, tab: N } = e,
        B = (0, d.sp)(),
        A = null != (t = null == B ? void 0 : B.sessionId) ? t : '',
        { noCache: R, includeUnpublished: w } = (0, _.Z)(),
        Z = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        F = (0, i.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [D, M] = l.useState(1),
        H = () => {
            var e;
            null == k || null == (e = k.current) || e.scrollToTop({ animate: !0 });
        },
        W = (0, c.Fg)(),
        V = (0, a.ap)(W),
        [U, G, z] = l.useMemo(() => {
            switch (N) {
                case C.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), V ? y.Z : x.Z, o.Z.AVATAR_DECORATION];
                case C.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t['1cNjt7']), V ? L.Z : P.Z, o.Z.PROFILE_EFFECT];
                case C.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fq6), V ? T.Z : j.Z, o.Z.NAMEPLATE];
                case C.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFppq), V ? S.Z : v.Z, o.Z.BUNDLE];
            }
        }, [N, V]),
        Y = (0, f.a)(),
        q = l.useMemo(
            () =>
                Y(
                    F.filter((e) => {
                        var t;
                        return e.type === z || (e.type === o.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === z)) === !0);
                    })
                ),
            [F, z, Y]
        ),
        K = (0, g.l)(q);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: A,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: N,
            isFullScreen: I,
            unpublishedCategoriesShown: w,
            cacheDisabled: R
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: A,
                checkpoint: h.a.SHOP_RENDERED,
                tab: N,
                isFullScreen: I,
                unpublishedCategoriesShown: w,
                cacheDisabled: R
            });
    }, [A, I, w, R, n, N]),
    n || null == Z)
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      style: { backgroundImage: 'url('.concat(G, ')') },
                      className: E.bannerContainer,
                      children: (0, r.jsx)(s.X6q, {
                          variant: 'heading-xxl/extrabold',
                          children: U
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: E.products,
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
                                                tab: N
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
                          className: E.paginationContainer,
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
