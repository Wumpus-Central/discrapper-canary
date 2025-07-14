(r.d(t, { Z: () => k }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(979554),
    i = r(399606),
    a = r(780384),
    s = r(481060),
    c = r(410030),
    u = r(594174),
    d = r(381585),
    p = r(597688),
    g = r(370039),
    f = r(937510),
    h = r(303952),
    b = r(38900),
    m = r(709999),
    _ = r(81136),
    C = r(215023),
    O = r(388032),
    v = r(484920),
    E = r(558513),
    S = r(662128),
    y = r(676790),
    x = r(665195),
    j = r(42742),
    T = r(283727),
    P = r(266058),
    L = r(719138);
function k(e) {
    var t;
    let { isFetchingCategories: r, isFullScreen: k, scrollerRef: I, tab: B } = e,
        N = (0, d.sp)(),
        A = null != (t = null == N ? void 0 : N.sessionId) ? t : '',
        { noCache: w, includeUnpublished: R } = (0, _.Z)(),
        Z = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, i.e7)([p.Z], () => p.Z.productsWithVariantsAsGroup),
        [F, M] = l.useState(1),
        H = () => {
            var e;
            null == I || null == (e = I.current) || e.scrollToTop({ animate: !0 });
        },
        W = (0, c.Fg)(),
        V = (0, a.ap)(W),
        [U, z, G] = l.useMemo(() => {
            switch (B) {
                case C.AW.AVATAR_DECORATIONS:
                    return [O.intl.string(O.t.dRZYND), V ? x.Z : y.Z, o.Z.AVATAR_DECORATION];
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
                    D.filter((e) => {
                        var t;
                        return e.type === G || (e.type === o.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === G)) === !0);
                    })
                ),
            [D, G, q]
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
        r ||
            (0, h.n)({
                sessionId: A,
                checkpoint: h.a.SHOP_RENDERED,
                tab: B,
                isFullScreen: k,
                unpublishedCategoriesShown: R,
                cacheDisabled: w
            });
    }, [A, k, R, w, r, B]),
    r || null == Z)
        ? (0, n.jsx)(b.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)('div', {
                      style: { backgroundImage: 'url('.concat(z, ')') },
                      className: v.bannerContainer,
                      children: (0, n.jsx)(s.X6q, {
                          variant: 'heading-xxl/extrabold',
                          children: U
                      })
                  }),
                  (0, n.jsx)('div', {
                      className: v.products,
                      children: K.slice(40 * (F - 1), 40 * F).map((e, t) => {
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
                      (0, n.jsx)('div', {
                          className: v.paginationContainer,
                          children: (0, n.jsx)('div', {
                              children: (0, n.jsx)(s.DsT, {
                                  currentPage: F,
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
