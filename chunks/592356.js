"use strict";
n.d(t, { A: () => p, o: () => d });
var r = n(64700),
    i = n(311907),
    a = n(52133),
    s = n(721932),
    o = n(733391),
    l = n(832163),
    u = n(916023),
    c = n(652215);
let d = 6;
function _(e) {
    return new s.A({ sku_id: e.id, sku_product_line: c.EZt.SOCIAL_LAYER_GAME_ITEM, sku_name: e.name, sku: e });
}
function f(e) {
    let { applicationId: t, numItems: n, userIds: a, isEligible: s, includeWishlists: u } = e,
        c = r.useMemo(() => a?.slice(0, o.g9), [a]),
        d = (0, i.bG)([l.A], () => (null != t ? l.A.recommendationsByApplicationsAndUsers(t, c) : void 0)),
        f = !s || null == t || null == c || 0 === c.length || 0 === n;
    return (
        r.useEffect(() => {
            f || (0, o.Xg)({ applicationId: t, userIds: c, maxRecommendations: n, includeWishlists: u });
        }, [f, t, c, u, n]),
        r.useMemo(() => {
            if (f) return { state: "success", recommendations: [], skuIdToUserIdsReasons: {} };
            let e = null == d ? "loading" : d.state;
            return null == d || "success" !== d.state
                ? { state: e, recommendations: [], skuIdToUserIdsReasons: {} }
                : {
                      state: e,
                      recommendations: d.data.skus.slice(0, n).map((e) => _(e)),
                      skuIdToUserIdsReasons: d.data.skusToRecommendationReasons,
                  };
        }, [d, n, f])
    );
}
function p(e) {
    let { numWishlistItems: t = d, location: n, applicationId: i, userIds: s, includeWishlists: o = !1 } = e,
        l = (0, u.kt)({ location: n }),
        [c, _] = r.useState(s);
    r.useEffect(() => {
        _((e) => (null == e ? s : (0, a.v)(e, s) ? e : s));
    }, [s]);
    let {
        state: p,
        recommendations: h,
        skuIdToUserIdsReasons: m,
    } = f({ applicationId: i, userIds: c, numItems: t, isEligible: l, includeWishlists: o });
    return l && 0 !== t
        ? { state: p, recommendations: h, skuIdToUserIdsReasons: m }
        : { state: "success", recommendations: [], skuIdToUserIdsReasons: {} };
}
