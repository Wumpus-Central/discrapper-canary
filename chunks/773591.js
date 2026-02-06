"use strict";
s.d(t, { A: () => R });
var n = s(627968),
    r = s(64700),
    l = s(575593),
    a = s(417597),
    i = s(582754),
    o = s(397927),
    c = s(736653),
    d = s(287809),
    u = s(954571),
    g = s(440938),
    _ = s(590180),
    m = s(511265),
    h = s(206077),
    p = s(100057),
    f = s(392183),
    x = s(751304),
    E = s(561769),
    C = s(998694),
    A = s(758836),
    b = s(652215),
    S = s(985018),
    v = s(157884),
    L = s(517700),
    I = s(304009),
    j = s(495482),
    k = s(479512),
    O = s(867341),
    T = s(632728),
    N = s(368146),
    y = s(536003);
function R(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: R } = e,
        B = (0, g.uM)(),
        M = B?.sessionId ?? "",
        { noCache: P, includeUnpublished: D } = (0, C.A)(),
        H = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        w = (0, a.bG)([_.A], () => _.A.productsWithVariantsAsGroup),
        [U, G] = r.useState(1),
        F = (0, c.DP)(),
        V = (0, i.qB)(F),
        [K, z, W] = r.useMemo(() => {
            switch (R) {
                case A.G2.AVATAR_DECORATIONS:
                    return [S.intl.string(S.t.dRZYNE), V ? k.A : j.A, l.R.AVATAR_DECORATION];
                case A.G2.PROFILE_EFFECTS:
                    return [S.intl.string(S.t["1cNjtx"]), V ? y.A : N.A, l.R.PROFILE_EFFECT];
                case A.G2.NAMEPLATES:
                    return [S.intl.string(S.t.V68Fqz), V ? T.A : O.A, l.R.NAMEPLATE];
                case A.G2.BUNDLES:
                    return [S.intl.string(S.t.FYFpps), V ? I.A : L.A, l.R.BUNDLE];
            }
        }, [R, V]),
        Y = (0, m.p)(),
        $ = r.useMemo(
            () =>
                Y(
                    w.filter(
                        (e) =>
                            (e.type === W ||
                                (e.type === l.R.VARIANTS_GROUP && e.variants?.some((e) => e.type === W) === !0)) &&
                            !A.MS.some((t) => {
                                let { categorySkuId: s } = t;
                                return s === e.categorySkuId;
                            }),
                    ),
                ),
            [w, W, Y],
        ),
        Z = (0, h.X)($);
    return (r.useEffect(() => {
        (0, p.z)({
            sessionId: M,
            checkpoint: p.t.SHOP_MOUNTED,
            tab: R,
            unpublishedCategoriesShown: D,
            cacheDisabled: P,
        });
    }, []),
    r.useEffect(() => {
        t ||
            (0, p.z)({
                sessionId: M,
                checkpoint: p.t.SHOP_RENDERED,
                tab: R,
                unpublishedCategoriesShown: D,
                cacheDisabled: P,
            });
    }, [M, D, P, t, R]),
    t || null == H)
        ? (0, n.jsx)(f.A, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      style: { backgroundImage: `url(${z})` },
                      className: v.cI,
                      children: (0, n.jsx)(o.Heading, { variant: "heading-xxl/extrabold", children: K }),
                  }),
                  (0, n.jsx)("div", {
                      className: v.ZE,
                      children: Z.slice(40 * (U - 1), 40 * U).map((e, t) =>
                          null == _.A.getCategory(e.categorySkuId)
                              ? null
                              : (0, n.jsx)(
                                    g.R9,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, n.jsx)(
                                            x.A,
                                            { skuId: e.skuId, onClickAnalytics: (0, E.UU)(e, R, B) },
                                            e.skuId,
                                        ),
                                    },
                                    e.skuId,
                                ),
                      ),
                  }),
                  Z.length > 40 &&
                      (0, n.jsx)("div", {
                          className: v.Ej,
                          children: (0, n.jsx)("div", {
                              children: (0, n.jsx)(o.mgR, {
                                  currentPage: U,
                                  totalCount: Z.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      u.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: B?.sessionId,
                                          page_section: B?.pageSection,
                                          page_category: B?.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: `${R} page ${e}`,
                                          page_type: R,
                                      }),
                                          G(e),
                                          s?.current?.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
