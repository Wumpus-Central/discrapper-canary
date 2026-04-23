"use strict";
s.d(t, { A: () => S });
var n = s(627968),
    l = s(64700),
    r = s(572944),
    a = s(311907),
    i = s(775602),
    o = s(287344),
    c = s(287809),
    d = s(728458),
    u = s(590180),
    g = s(4227),
    h = s(856686),
    _ = s(429876),
    m = s(599062),
    p = s(998694),
    f = s(231209),
    E = s(850735),
    x = s(781724),
    A = s(758836);
let C = [A.G2.HOME, A.G2.ORBS];
function S(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: c,
            transitionState: d,
            updateAnalyticsState: u,
            refreshCategories: g,
        } = e,
        p = b();
    v(p);
    let S = (0, a.bG)([i.A], () => i.A.useReducedMotion),
        [L, I] = l.useState(void 0),
        [j, N] = l.useState(!0),
        T = l.useMemo(
            () =>
                s.filter(
                    (e) =>
                        !A.MS.some((t) => {
                            let { categorySkuId: s } = t;
                            return s === e.skuId;
                        }),
                ),
            [s],
        ),
        O = (0, o.f)("CollectiblesContent"),
        y = l.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: n,
                    isInternalShopDeeplink: l,
                    isOrbsExclusive: r,
                } = e;
                u(t, s);
                let a = n && !S,
                    i = r ? A.G2.ORBS : A.G2.CATALOG;
                I(s), N(!l), c(i, a);
            },
            [S, c, u],
        ),
        { searchError: k } = (0, h.S)();
    return null != k
        ? (0, n.jsx)(x.A, {})
        : null != p
          ? (0, n.jsx)(m.h, { onRetry: g, errorMessage: p, errorOrigin: m.A.SHOP_PAGE })
          : t === A.G2.HOME && O
            ? (0, n.jsx)(E.A, { tab: r.g.HOME, transitionState: d, handleTransition: y })
            : t === A.G2.ORBS && O
              ? (0, n.jsx)(E.A, { tab: r.g.ORBS, transitionState: d, handleTransition: y })
              : C.includes(t)
                ? (0, n.jsx)(f.A, { handleTransition: y, tab: t, transitionState: d })
                : (0, n.jsx)(_.A, {
                      tab: t,
                      categories: T,
                      initialCategoryId: L,
                      showFilterInitially: j,
                      onUnmount: () => {
                          I(void 0), N(!0);
                      },
                  });
}
let b = () =>
        (0, a.bG)([u.A, g.A], () =>
            null != u.A.error
                ? `shop load fetch categories error: ${u.A.error.message}`
                : null != g.A.claimError
                  ? `shop load claim error: ${g.A.claimError.message}`
                  : null != g.A.fetchError
                    ? `shop load fetch purchase error: ${g.A.fetchError.message}`
                    : void 0,
        ),
    v = (e) => {
        let t = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
            { noCache: s, includeUnpublished: n } = (0, p.A)();
        l.useEffect(() => {
            null != e &&
                d.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: n.toString(),
                    },
                });
        }, [e, t, s, n]);
    };
