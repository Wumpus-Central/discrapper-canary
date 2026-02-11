"use strict";
s.d(t, { A: () => E });
var n = s(627968),
    r = s(64700),
    l = s(311907),
    a = s(775602),
    i = s(287809),
    o = s(728458),
    c = s(590180),
    d = s(4227),
    u = s(856686),
    g = s(429876),
    _ = s(599062),
    m = s(998694),
    h = s(231209),
    p = s(781724),
    f = s(758836);
let x = [f.G2.HOME, f.G2.ORBS];
function E(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: i,
            transitionState: o,
            updateAnalyticsState: c,
            refreshCategories: d,
        } = e,
        m = C();
    A(m);
    let E = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        [b, S] = r.useState(void 0),
        [v, L] = r.useState(!0),
        I = r.useMemo(
            () =>
                s.filter(
                    (e) =>
                        !f.MS.some((t) => {
                            let { categorySkuId: s } = t;
                            return s === e.skuId;
                        }),
                ),
            [s],
        ),
        j = r.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: n,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: l,
                } = e;
                c(t, s);
                let a = n && !E,
                    o = l ? f.G2.ORBS : f.G2.CATALOG;
                S(s), L(!r), i(o, a);
            },
            [E, i, c],
        ),
        { searchError: k } = (0, u.S)();
    return null != k
        ? (0, n.jsx)(p.A, {})
        : null != m
          ? (0, n.jsx)(_.h, { onRetry: d, errorMessage: m, errorOrigin: _.A.SHOP_PAGE })
          : x.includes(t)
            ? (0, n.jsx)(h.A, { handleTransition: j, tab: t, transitionState: o })
            : (0, n.jsx)(g.A, {
                  tab: t,
                  categories: I,
                  initialCategoryId: b,
                  showFilterInitially: v,
                  onUnmount: () => {
                      S(void 0), L(!0);
                  },
              });
}
let C = () =>
        (0, l.bG)([c.A, d.A], () =>
            null != c.A.error
                ? `shop load fetch categories error: ${c.A.error.message}`
                : null != d.A.claimError
                  ? `shop load claim error: ${d.A.claimError.message}`
                  : null != d.A.fetchError
                    ? `shop load fetch purchase error: ${d.A.fetchError.message}`
                    : void 0,
        ),
    A = (e) => {
        let t = (0, l.bG)([i.default], () => i.default.getCurrentUser()),
            { noCache: s, includeUnpublished: n } = (0, m.A)();
        r.useEffect(() => {
            null != e &&
                o.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: n.toString(),
                    },
                });
        }, [e, t, s, n]);
    };
