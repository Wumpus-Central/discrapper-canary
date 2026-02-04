n.d(t, {
    A: () => _,
    o: () => d,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(52133),
    o = n(721932),
    s = n(733391),
    l = n(832163),
    c = n(916023),
    u = n(652215);
let d = 6;

function f(e) {
    return new o.A({
        sku_id: e.id,
        sku_product_line: u.EZt.SOCIAL_LAYER_GAME_ITEM,
        sku_name: e.name,
        sku: e,
    });
}

function p(e) {
    let { applicationId: t, numItems: n, userIds: a, isEligible: o, includeWishlists: c } = e,
        u = r.useMemo(() => (null == a ? void 0 : a.slice(0, s.g9)), [a]),
        d = (0, i.bG)([l.A], () => (null != t ? l.A.recommendationsByApplicationsAndUsers(t, u) : void 0)),
        p = !o || null == t || null == u || 0 === u.length || 0 === n;
    return (
        r.useEffect(() => {
            p ||
                (0, s.Xg)({
                    applicationId: t,
                    userIds: u,
                    maxRecommendations: n,
                    includeWishlists: c,
                });
        }, [p, t, u, c, n]),
        r.useMemo(() => {
            if (p)
                return {
                    state: "success",
                    recommendations: [],
                    skuIdToUserIdsReasons: {},
                };
            let e = null == d ? "loading" : d.state;
            return null == d || "success" !== d.state
                ? {
                      state: e,
                      recommendations: [],
                      skuIdToUserIdsReasons: {},
                  }
                : {
                      state: e,
                      recommendations: d.data.skus.slice(0, n).map((e) => f(e)),
                      skuIdToUserIdsReasons: d.data.skusToRecommendationReasons,
                  };
        }, [d, n, p])
    );
}

function _(e) {
    let { numWishlistItems: t = d, location: n, applicationId: i, userIds: o, includeWishlists: s = !1 } = e,
        l = (0, c.kt)({
            location: n,
        }),
        [u, f] = r.useState(o);
    r.useEffect(() => {
        f((e) => (null == e ? o : (0, a.v)(e, o) ? e : o));
    }, [o]);
    let {
        state: _,
        recommendations: h,
        skuIdToUserIdsReasons: m,
    } = p({
        applicationId: i,
        userIds: u,
        numItems: t,
        isEligible: l,
        includeWishlists: s,
    });
    return l && 0 !== t
        ? {
              state: _,
              recommendations: h,
              skuIdToUserIdsReasons: m,
          }
        : {
              state: "success",
              recommendations: [],
              skuIdToUserIdsReasons: {},
          };
}
