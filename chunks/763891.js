(n.d(t, { Z: () => I }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(979554),
    o = n(399606),
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
    v = n(484920),
    E = n(558513),
    S = n(662128),
    x = n(676790),
    y = n(665195),
    j = n(42742),
    T = n(283727),
    P = n(266058),
    L = n(719138);
function I(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: I, scrollerRef: k, tab: B } = e,
        N = (0, d.sp)(),
        A = null != (t = null == N ? void 0 : N.sessionId) ? t : '',
        { noCache: R, includeUnpublished: w } = (0, _.Z)(),
        Z = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        F = (0, o.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [M, D] = l.useState(1),
        H = () => {
            var e;
            null == k || null == (e = k.current) || e.scrollToTop({ animate: !0 });
        },
        W = (0, c.Fg)(),
        V = (0, a.ap)(W),
        [U, G, z] = l.useMemo(() => {
            switch (B) {
                case C.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), V ? y.Z : x.Z, i.Z.AVATAR_DECORATION];
                case C.AW.PROFILE_EFFECTS:
                    return [O.intl.string(O.t['1cNjt7']), V ? L.Z : P.Z, i.Z.PROFILE_EFFECT];
                case C.AW.NAMEPLATES:
                    return [O.intl.string(O.t.V68Fq6), V ? T.Z : j.Z, i.Z.NAMEPLATE];
                case C.AW.BUNDLES:
                    return [O.intl.string(O.t.FYFppq), V ? S.Z : E.Z, i.Z.BUNDLE];
            }
        }, [B, V]),
        Y = (0, f.a)(),
        q = l.useMemo(
            () =>
                Y(
                    F.filter((e) => {
                        var t;
                        return e.type === z || (e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === z)) === !0);
                    })
                ),
            [F, z, Y]
        ),
        K = (0, g.l)(q);
    return (l.useEffect(() => {
        (0, h.n)({
            sessionId: A,
            checkpoint: h.a.SHOP_MOUNTED,
            tab: B,
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
                tab: B,
                isFullScreen: I,
                unpublishedCategoriesShown: w,
                cacheDisabled: R
            });
    }, [A, I, w, R, n, B]),
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
                                  currentPage: M,
                                  totalCount: K.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      (D(e), H());
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
