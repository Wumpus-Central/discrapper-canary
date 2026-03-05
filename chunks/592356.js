"use strict";
n.d(t, { A: () => f, o: () => c });
var r = n(64700),
    i = n(311907),
    s = n(52133),
    a = n(721932),
    o = n(733391),
    l = n(832163),
    u = n(652215);
let c = 6;
function d(e) {
    return new a.A({ sku_id: e.id, sku_product_line: u.EZt.SOCIAL_LAYER_GAME_ITEM, sku_name: e.name, sku: e });
}
function _(e) {
    let { applicationId: t, numItems: n, userIds: s, includeWishlists: a } = e,
        u = r.useMemo(() => s?.slice(0, o.g9), [s]),
        c = (0, i.bG)([l.A], () => (null != t ? l.A.recommendationsByApplicationsAndUsers(t, u) : void 0)),
        _ = null == t || null == u || 0 === u.length || 0 === n;
    return (
        r.useEffect(() => {
            _ || (0, o.Xg)({ applicationId: t, userIds: u, maxRecommendations: n, includeWishlists: a });
        }, [_, t, u, a, n]),
        r.useMemo(() => {
            if (_) return { state: "success", recommendations: [], skuIdToUserIdsReasons: {} };
            let e = null == c ? "loading" : c.state;
            return null == c || "success" !== c.state
                ? { state: e, recommendations: [], skuIdToUserIdsReasons: {} }
                : {
                      state: e,
                      recommendations: c.data.skus.slice(0, n).map((e) => d(e)),
                      skuIdToUserIdsReasons: c.data.skusToRecommendationReasons,
                  };
        }, [c, n, _])
    );
}
function f(e) {
    let { numWishlistItems: t = c, applicationId: n, userIds: i, includeWishlists: a = !1 } = e,
        [o, l] = r.useState(i);
    r.useEffect(() => {
        l((e) => (null == e ? i : (0, s.v)(e, i) ? e : i));
    }, [i]);
    let {
        state: u,
        recommendations: d,
        skuIdToUserIdsReasons: f,
    } = _({ applicationId: n, userIds: o, numItems: t, includeWishlists: a });
    return 0 === t
        ? { state: "success", recommendations: [], skuIdToUserIdsReasons: {} }
        : { state: u, recommendations: d, skuIdToUserIdsReasons: f };
}
