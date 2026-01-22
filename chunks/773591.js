l.d(t, { A: () => R }), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(575593),
    a = l(417597),
    i = l(582754),
    o = l(397927),
    c = l(736653),
    u = l(287809),
    d = l(954571),
    f = l(440938),
    b = l(590180),
    g = l(511265),
    p = l(206077),
    m = l(100057),
    h = l(392183),
    E = l(751304),
    v = l(561769),
    A = l(998694),
    x = l(758836),
    S = l(652215),
    C = l(985018),
    O = l(157884),
    _ = l(517700),
    y = l(304009),
    j = l(495482),
    L = l(479512),
    T = l(867341),
    I = l(632728),
    N = l(368146),
    k = l(536003);
function R(e) {
    var t;
    let { isFetchingCategories: l, scrollerRef: R, tab: P } = e,
        D = (0, f.uM)(),
        w = null != (t = null == D ? void 0 : D.sessionId) ? t : "",
        { noCache: B, includeUnpublished: M } = (0, A.A)(),
        H = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        G = (0, a.bG)([b.A], () => b.A.productsWithVariantsAsGroup),
        [F, U] = r.useState(1),
        z = (0, c.DP)(),
        V = (0, i.qB)(z),
        [K, W, Y] = r.useMemo(() => {
            switch (P) {
                case x.G2.AVATAR_DECORATIONS:
                    return [C.intl.string(C.t.dRZYNE), V ? L.A : j.A, s.R.AVATAR_DECORATION];
                case x.G2.PROFILE_EFFECTS:
                    return [C.intl.string(C.t["1cNjtx"]), V ? k.A : N.A, s.R.PROFILE_EFFECT];
                case x.G2.NAMEPLATES:
                    return [C.intl.string(C.t.V68Fqz), V ? I.A : T.A, s.R.NAMEPLATE];
                case x.G2.BUNDLES:
                    return [C.intl.string(C.t.FYFpps), V ? y.A : _.A, s.R.BUNDLE];
            }
        }, [P, V]),
        q = (0, g.p)(),
        Z = r.useMemo(
            () =>
                q(
                    G.filter((e) => {
                        var t;
                        return (
                            (e.type === Y ||
                                (e.type === s.R.VARIANTS_GROUP &&
                                    (null == (t = e.variants) ? void 0 : t.some((e) => e.type === Y)) === !0)) &&
                            !x.MS.some((t) => {
                                let { categorySkuId: l } = t;
                                return l === e.categorySkuId;
                            })
                        );
                    }),
                ),
            [G, Y, q],
        ),
        X = (0, p.X)(Z);
    return (r.useEffect(() => {
        (0, m.z)({
            sessionId: w,
            checkpoint: m.t.SHOP_MOUNTED,
            tab: P,
            unpublishedCategoriesShown: M,
            cacheDisabled: B,
        });
    }, []),
    r.useEffect(() => {
        l ||
            (0, m.z)({
                sessionId: w,
                checkpoint: m.t.SHOP_RENDERED,
                tab: P,
                unpublishedCategoriesShown: M,
                cacheDisabled: B,
            });
    }, [w, M, B, l, P]),
    l || null == H)
        ? (0, n.jsx)(h.A, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      style: { backgroundImage: "url(".concat(W, ")") },
                      className: O.cI,
                      children: (0, n.jsx)(o.Heading, {
                          variant: "heading-xxl/extrabold",
                          children: K,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: O.ZE,
                      children: X.slice(40 * (F - 1), 40 * F).map((e, t) =>
                          null == b.A.getCategory(e.categorySkuId)
                              ? null
                              : (0, n.jsx)(
                                    f.R9,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, n.jsx)(
                                            E.A,
                                            {
                                                skuId: e.skuId,
                                                onClickAnalytics: (0, v.UU)(e, P, D),
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
                          className: O.Ej,
                          children: (0, n.jsx)("div", {
                              children: (0, n.jsx)(o.mgR, {
                                  currentPage: F,
                                  totalCount: X.length,
                                  pageSize: 40,
                                  onPageChange: (e) => {
                                      var t;
                                      d.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                          collectibles_shop_session_id: null == D ? void 0 : D.sessionId,
                                          page_section: null == D ? void 0 : D.pageSection,
                                          page_category: null == D ? void 0 : D.pageCategory,
                                          page_index: e,
                                          page_size: 40,
                                          cta_name: "".concat(P, " page ").concat(e),
                                          page_type: P,
                                      }),
                                          U(e),
                                          null == R || null == (t = R.current) || t.scrollToTop({ animate: !0 });
                                  },
                                  disablePaginationGap: !0,
                              }),
                          }),
                      }),
              ],
          });
}
