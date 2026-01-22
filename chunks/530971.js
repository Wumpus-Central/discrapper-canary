l.d(t, { A: () => v }), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(311907),
    a = l(775602),
    i = l(287809),
    o = l(728458),
    c = l(590180),
    u = l(4227),
    d = l(856686),
    f = l(429876),
    b = l(599062),
    g = l(998694),
    p = l(231209),
    m = l(781724),
    h = l(758836);
let E = [h.G2.HOME, h.G2.ORBS];
function v(e) {
    let {
            tab: t,
            sortedCategories: l,
            transitionToTab: i,
            transitionState: o,
            updateAnalyticsState: c,
            refreshCategories: u,
        } = e,
        g = A();
    x(g);
    let v = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        [S, C] = r.useState(void 0),
        [O, _] = r.useState(!0),
        y = r.useMemo(
            () =>
                l.filter(
                    (e) =>
                        !h.MS.some((t) => {
                            let { categorySkuId: l } = t;
                            return l === e.skuId;
                        }),
                ),
            [l],
        ),
        j = r.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: l,
                    shouldAnimate: n,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: s,
                } = e;
                c(t, l);
                let a = n && !v,
                    o = s ? h.G2.ORBS : h.G2.CATALOG;
                C(l), _(!r), i(o, a);
            },
            [v, i, c],
        ),
        { searchError: L } = (0, d.S)();
    return null != L
        ? (0, n.jsx)(m.A, {})
        : null != g
          ? (0, n.jsx)(b.h, {
                onRetry: u,
                errorMessage: g,
                errorOrigin: b.A.SHOP_PAGE,
            })
          : E.includes(t)
            ? (0, n.jsx)(p.A, {
                  handleTransition: j,
                  tab: t,
                  transitionState: o,
              })
            : (0, n.jsx)(f.A, {
                  tab: t,
                  sortedCategories: y,
                  initialCategoryId: S,
                  showFilterInitially: O,
                  onUnmount: () => {
                      C(void 0), _(!0);
                  },
              });
}
let A = () =>
        (0, s.bG)([c.A, u.A], () =>
            null != c.A.error
                ? "shop load fetch categories error: ".concat(c.A.error.message)
                : null != u.A.claimError
                  ? "shop load claim error: ".concat(u.A.claimError.message)
                  : null != u.A.fetchError
                    ? "shop load fetch purchase error: ".concat(u.A.fetchError.message)
                    : void 0,
        ),
    x = (e) => {
        let t = (0, s.bG)([i.default], () => i.default.getCurrentUser()),
            { noCache: l, includeUnpublished: n } = (0, g.A)();
        r.useEffect(() => {
            var r, s;
            null != e &&
                o.A.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (r = null == t || null == (s = t.isStaff()) ? void 0 : s.toString())
                                ? r
                                : "unknown",
                        disableCache: l.toString(),
                        includeUnpublished: n.toString(),
                    },
                });
        }, [e, t, l, n]);
    };
