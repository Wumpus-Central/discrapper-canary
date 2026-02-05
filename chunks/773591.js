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
    m = s(590180),
    _ = s(511265),
    h = s(206077),
    p = s(100057),
    f = s(392183),
    E = s(751304),
    C = s(561769),
    b = s(998694),
    A = s(758836),
    x = s(652215),
    S = s(985018),
    v = s(157884),
    L = s(517700),
    T = s(304009),
    I = s(495482),
    O = s(479512),
    y = s(867341),
    j = s(632728),
    N = s(368146),
    k = s(536003);
function R(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: R } = e,
        B = (0, g.uM)(),
        P = B?.sessionId ?? "",
        { noCache: M, includeUnpublished: D } = (0, b.A)(),
        w = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        H = (0, a.bG)([m.A], () => m.A.productsWithVariantsAsGroup),
        [G, U] = r.useState(1),
        F = (0, c.DP)(),
        V = (0, i.qB)(F),
        [z, $, K] = r.useMemo(() => {
            switch (R) {
                case A.G2.AVATAR_DECORATIONS:
                    return [S.intl.string(S.t.dRZYNE), V ? O.A : I.A, l.R.AVATAR_DECORATION];
                case A.G2.PROFILE_EFFECTS:
                    return [S.intl.string(S.t["1cNjtx"]), V ? k.A : N.A, l.R.PROFILE_EFFECT];
                case A.G2.NAMEPLATES:
                    return [S.intl.string(S.t.V68Fqz), V ? j.A : y.A, l.R.NAMEPLATE];
                case A.G2.BUNDLES:
                    return [S.intl.string(S.t.FYFpps), V ? T.A : L.A, l.R.BUNDLE];
            }
        }, [R, V]),
        W = (0, _.p)(),
        Y = r.useMemo(
            () =>
                W(
                    H.filter(
                        (e) =>
                            (e.type === K ||
                                (e.type === l.R.VARIANTS_GROUP && e.variants?.some((e) => e.type === K) === !0)) &&
                            !A.MS.some((t) => {
                                let { categorySkuId: s } = t;
                                return s === e.categorySkuId;
                            }),
                    ),
                ),
            [H, K, W],
        ),
        q = (0, h.X)(Y);
    return (r.useEffect(() => {
        (0, p.z)({
            sessionId: P,
            checkpoint: p.t.SHOP_MOUNTED,
            tab: R,
            unpublishedCategoriesShown: D,
            cacheDisabled: M,
        });
    }, []),
    r.useEffect(() => {
        t ||
            (0, p.z)({
                sessionId: P,
                checkpoint: p.t.SHOP_RENDERED,
                tab: R,
                unpublishedCategoriesShown: D,
                cacheDisabled: M,
            });
    }, [P, D, M, t, R]),
    t || null == w)
        ? (0, n.jsx)(f.A, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      style: { backgroundImage: `url(${$})` },
                      className: v.cI,
                      children: (0, n.jsx)(o.Heading, { variant: "heading-xxl/extrabold", children: z }),
                  }),
                  (0, n.jsx)("div", {
                      className: v.ZE,
                      children: q
                          .slice(40 * (G - 1), 40 * G)
                          .map((e, t) =>
                              null == m.A.getCategory(e.categorySkuId)
                                  ? null
                                  : (0, n.jsx)(
                                        g.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, n.jsx)(
                                                E.A,
                                                { skuId: e.skuId, onClickAnalytics: (0, C.UU)(e, R, B) },
                                                e.skuId,
                                            ),
                                        },
                                        e.skuId,
                                    ),
                          ),
                  }),
                  q.length > 40 &&
                      (0, n.jsx)("div", {
                          className: v.Ej,
                          children: (0, n.jsx)("div", {
                              children: (0, n.jsx)(o.mgR, {
                                  currentPage: G,
                                  totalCount: q.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      u.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: B?.sessionId,
                                          page_section: B?.pageSection,
                                          page_category: B?.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: `${R} page ${e}`,
                                          page_type: R,
                                      }),
                                          U(e),
                                          s?.current?.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
