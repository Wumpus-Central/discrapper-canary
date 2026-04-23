"use strict";
s.d(t, { A: () => P });
var n = s(627968),
    l = s(64700),
    r = s(575593),
    a = s(417597),
    i = s(462887),
    o = s(534514),
    c = s(158142),
    d = s(736653),
    u = s(287809),
    g = s(954571),
    h = s(440938),
    _ = s(590180),
    m = s(940980),
    p = s(511265),
    f = s(206077),
    E = s(100057),
    x = s(392183),
    A = s(751304),
    C = s(561769),
    S = s(998694),
    b = s(758836),
    v = s(652215),
    L = s(985018),
    I = s(647685),
    j = s(517700),
    N = s(304009),
    T = s(495482),
    O = s(479512),
    y = s(867341),
    k = s(632728),
    R = s(368146),
    B = s(536003);
function P(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: P } = e,
        M = (0, h.uM)(),
        D = M?.sessionId ?? "",
        { noCache: w, includeUnpublished: H } = (0, S.A)(),
        G = (0, m.W)("CollectiblesFilterableShop"),
        F = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        U = (0, a.bG)([_.A], () => _.A.productsWithVariantsAsGroup),
        [K, V] = l.useState(1),
        W = (0, d.DP)(),
        z = (0, i.q)(W),
        [$, Y, Z] = l.useMemo(() => {
            switch (P) {
                case b.G2.AVATAR_DECORATIONS:
                    return [L.intl.string(L.t.dRZYNE), z ? O.A : T.A, r.R.AVATAR_DECORATION];
                case b.G2.PROFILE_EFFECTS:
                    return [L.intl.string(L.t["1cNjtx"]), z ? B.A : R.A, r.R.PROFILE_EFFECT];
                case b.G2.NAMEPLATES:
                    return [L.intl.string(L.t.V68Fqz), z ? k.A : y.A, r.R.NAMEPLATE];
                case b.G2.BUNDLES:
                    return [L.intl.string(L.t.FYFpps), z ? N.A : j.A, r.R.BUNDLE];
            }
        }, [P, z]),
        J = (0, p.p)(),
        X = l.useMemo(
            () =>
                J(
                    U.filter(
                        (e) =>
                            (e.type === Z ||
                                (e.type === r.R.VARIANTS_GROUP && e.variants?.some((e) => e.type === Z) === !0)) &&
                            !b.MS.some((t) => {
                                let { categorySkuId: s } = t;
                                return s === e.categorySkuId;
                            }),
                    ),
                ),
            [U, Z, J],
        ),
        q = (0, f.X)(X);
    return (l.useEffect(() => {
        (0, E.z)({
            sessionId: D,
            checkpoint: E.t.SHOP_MOUNTED,
            tab: P,
            unpublishedCategoriesShown: H,
            cacheDisabled: w,
        });
    }, []),
    l.useEffect(() => {
        t ||
            (0, E.z)({
                sessionId: D,
                checkpoint: E.t.SHOP_RENDERED,
                tab: P,
                unpublishedCategoriesShown: H,
                cacheDisabled: w,
            });
    }, [D, H, w, t, P]),
    t || null == F)
        ? (0, n.jsx)(x.A, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      style: { backgroundImage: `url(${Y})` },
                      className: I.cI,
                      children: (0, n.jsx)(o.D, { variant: "heading-xxl/extrabold", children: $ }),
                  }),
                  (0, n.jsx)("div", {
                      className: I.ZE,
                      children: q
                          .slice(40 * (K - 1), 40 * K)
                          .map((e, t) =>
                              null == _.A.getCategory(e.categorySkuId)
                                  ? null
                                  : (0, n.jsx)(
                                        h.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, n.jsx)(
                                                A.A,
                                                { skuId: e.skuId, prioritizedCurrency: G ? C.Hi.FIAT : void 0 },
                                                e.skuId,
                                            ),
                                        },
                                        e.skuId,
                                    ),
                          ),
                  }),
                  q.length > 40 &&
                      (0, n.jsx)("div", {
                          className: I.Ej,
                          children: (0, n.jsx)("div", {
                              children: (0, n.jsx)(c.m, {
                                  currentPage: K,
                                  totalCount: q.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      g.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: M?.sessionId,
                                          page_section: M?.pageSection,
                                          page_category: M?.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: `${P} page ${e}`,
                                          page_type: P,
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
