n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(979554),
    i = n(399606),
    o = n(481060),
    s = n(594174),
    c = n(381585),
    u = n(597688),
    d = n(370039),
    p = n(937510),
    b = n(303952),
    f = n(38900),
    g = n(709999),
    h = n(81136),
    m = n(215023),
    _ = n(388032),
    C = n(484920),
    v = n(558513),
    O = n(676790),
    x = n(42742),
    S = n(266058);
function E(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: E, scrollerRef: j, tab: P } = e,
        y = (0, c.sp)(),
        k = null != (t = null == y ? void 0 : y.sessionId) ? t : '',
        { noCache: T, includeUnpublished: I } = (0, h.Z)(),
        L = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        B = (0, i.e7)([u.Z], () => u.Z.productsWithVariantsAsGroup),
        [w, N] = l.useState(1),
        A = () => {
            var e;
            null == j || null == (e = j.current) || e.scrollToTop({ animate: !0 });
        },
        [R, Z, F] = l.useMemo(() => {
            switch (P) {
                case m.AW.AVATAR_DECORATIONS:
                    return [_.intl.string(_.t.dRZYND), O.Z, a.Z.AVATAR_DECORATION];
                case m.AW.PROFILE_EFFECTS:
                    return [_.intl.string(_.t['1cNjt7']), S.Z, a.Z.PROFILE_EFFECT];
                case m.AW.BUNDLES:
                    return [_.intl.string(_.t.FYFppq), v.Z, a.Z.BUNDLE];
                case m.AW.NAMEPLATES:
                    return [_.intl.string(_.t.V68Fq6), x.Z, a.Z.NAMEPLATE];
            }
        }, [P]),
        D = (0, d.a)(),
        H = l.useMemo(
            () =>
                D(
                    B.filter((e) => {
                        var t;
                        return e.type === F || (e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some((e) => e.type === F)) === !0);
                    })
                ),
            [B, F, D]
        ),
        M = (0, p.l)(H);
    return (l.useEffect(() => {
        (0, b.n)({
            sessionId: k,
            checkpoint: b.a.SHOP_MOUNTED,
            tab: P,
            isFullScreen: E,
            unpublishedCategoriesShown: I,
            cacheDisabled: T
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, b.n)({
                sessionId: k,
                checkpoint: b.a.SHOP_RENDERED,
                tab: P,
                isFullScreen: E,
                unpublishedCategoriesShown: I,
                cacheDisabled: T
            });
    }, [k, E, I, T, n, P]),
    n || null == L)
        ? (0, r.jsx)(f.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      style: { backgroundImage: 'url('.concat(Z, ')') },
                      className: C.bannerContainer,
                      children: (0, r.jsx)(o.X6q, {
                          variant: 'heading-xxl/extrabold',
                          color: 'always-white',
                          children: R
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: C.products,
                      children: M.slice(40 * (w - 1), 40 * w).map((e, t) => {
                          let n = u.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    c.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            g.Z,
                                            {
                                                product: e,
                                                user: L,
                                                category: n,
                                                tab: P
                                            },
                                            e.skuId
                                        )
                                    },
                                    e.skuId
                                );
                      })
                  }),
                  M.length > 40 &&
                      (0, r.jsx)('div', {
                          className: C.paginationContainer,
                          children: (0, r.jsx)('div', {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: w,
                                  totalCount: M.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      N(e), A();
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
