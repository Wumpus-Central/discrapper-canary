"use strict";
s.d(t, { A: () => B });
var n = s(627968),
    r = s(64700),
    l = s(575593),
    i = s(417597),
    a = s(582754),
    o = s(397927),
    c = s(736653),
    d = s(287809),
    u = s(954571),
    _ = s(440938),
    g = s(590180),
    m = s(940980),
    h = s(511265),
    p = s(206077),
    f = s(100057),
    x = s(392183),
    E = s(751304),
    C = s(561769),
    b = s(998694),
    A = s(758836),
    S = s(652215),
    v = s(985018),
    I = s(157884),
    L = s(517700),
    j = s(304009),
    k = s(495482),
    T = s(479512),
    O = s(867341),
    y = s(632728),
    N = s(368146),
    R = s(536003);
function B(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: B } = e,
        M = (0, _.uM)(),
        P = M?.sessionId ?? "",
        { noCache: D, includeUnpublished: w } = (0, b.A)(),
        H = (0, m.W)("CollectiblesFilterableShop"),
        U = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        F = (0, i.bG)([g.A], () => g.A.productsWithVariantsAsGroup),
        [G, V] = r.useState(1),
        K = (0, c.DP)(),
        z = (0, a.qB)(K),
        [W, Y, $] = r.useMemo(() => {
            switch (B) {
                case A.G2.AVATAR_DECORATIONS:
                    return [v.intl.string(v.t.dRZYNE), z ? T.A : k.A, l.R.AVATAR_DECORATION];
                case A.G2.PROFILE_EFFECTS:
                    return [v.intl.string(v.t["1cNjtx"]), z ? R.A : N.A, l.R.PROFILE_EFFECT];
                case A.G2.NAMEPLATES:
                    return [v.intl.string(v.t.V68Fqz), z ? y.A : O.A, l.R.NAMEPLATE];
                case A.G2.BUNDLES:
                    return [v.intl.string(v.t.FYFpps), z ? j.A : L.A, l.R.BUNDLE];
            }
        }, [B, z]),
        Z = (0, h.p)(),
        q = r.useMemo(
            () =>
                Z(
                    F.filter(
                        (e) =>
                            (e.type === $ ||
                                (e.type === l.R.VARIANTS_GROUP && e.variants?.some((e) => e.type === $) === !0)) &&
                            !A.MS.some((t) => {
                                let { categorySkuId: s } = t;
                                return s === e.categorySkuId;
                            }),
                    ),
                ),
            [F, $, Z],
        ),
        X = (0, p.X)(q);
    return (r.useEffect(() => {
        (0, f.z)({
            sessionId: P,
            checkpoint: f.t.SHOP_MOUNTED,
            tab: B,
            unpublishedCategoriesShown: w,
            cacheDisabled: D,
        });
    }, []),
    r.useEffect(() => {
        t ||
            (0, f.z)({
                sessionId: P,
                checkpoint: f.t.SHOP_RENDERED,
                tab: B,
                unpublishedCategoriesShown: w,
                cacheDisabled: D,
            });
    }, [P, w, D, t, B]),
    t || null == U)
        ? (0, n.jsx)(x.A, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      style: { backgroundImage: `url(${Y})` },
                      className: I.cI,
                      children: (0, n.jsx)(o.Heading, { variant: "heading-xxl/extrabold", children: W }),
                  }),
                  (0, n.jsx)("div", {
                      className: I.ZE,
                      children: X.slice(40 * (G - 1), 40 * G).map((e, t) =>
                          null == g.A.getCategory(e.categorySkuId)
                              ? null
                              : (0, n.jsx)(
                                    _.R9,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, n.jsx)(
                                            E.A,
                                            {
                                                skuId: e.skuId,
                                                prioritizedCurrency: H ? C.Hi.FIAT : void 0,
                                                onClickAnalytics: (0, C.UU)(e, B, M),
                                            },
                                            e.skuId,
                                        ),
                                    },
                                    e.skuId,
                                ),
                      ),
                  }),
                  X.length > 40 &&
                      (0, n.jsx)("div", {
                          className: I.Ej,
                          children: (0, n.jsx)("div", {
                              children: (0, n.jsx)(o.mgR, {
                                  currentPage: G,
                                  totalCount: X.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: M?.sessionId,
                                          page_section: M?.pageSection,
                                          page_category: M?.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: `${B} page ${e}`,
                                          page_type: B,
                                      }),
                                          V(e),
                                          s?.current?.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
