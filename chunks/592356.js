n.d(t, {
    A: () => m,
    o: () => f,
}),
    n(114821),
    n(339614),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(52133),
    s = n(721932),
    o = n(67480),
    l = n(733391),
    c = n(832163),
    u = n(916023),
    d = n(652215);
let f = 6;
function p(e) {
    return new s.A({
        sku_id: e.id,
        sku_product_line: d.EZt.SOCIAL_LAYER_GAME_ITEM,
        sku_name: e.name,
        sku: e,
    });
}
function _(e) {
    let { applicationId: t, numItems: n, userIds: a, isEligible: s, includeWishlists: o } = e,
        u = null == a ? void 0 : a.slice(0, l.g9),
        d = (0, i.bG)([c.A], () => (null != t ? c.A.recommendationsByApplicationsAndUsers(t, u) : void 0));
    return (
        r.useEffect(() => {
            s &&
                null != t &&
                null != u &&
                0 !== u.length &&
                0 !== n &&
                (0, l.Xg)({
                    applicationId: t,
                    userIds: u,
                    maxRecommendations: n,
                    includeWishlists: o,
                });
        }, [t, u, s, n, o]),
        r.useMemo(() => {
            let e = null == d ? "loading" : d.state;
            return null == d || "success" !== d.state
                ? {
                      state: e,
                      recommendations: [],
                      skuIdToUserIdsReasons: {},
                  }
                : {
                      state: e,
                      recommendations: d.data.skus.slice(0, n).map((e) => p(e)),
                      skuIdToUserIdsReasons: d.data.skusToRecommendationReasons,
                  };
        }, [d, n])
    );
}
function h(e) {
    let { guildId: t, numItems: n, isEligible: a } = e,
        s = (0, i.bG)([c.A], () => (null != t ? c.A.getStorefrontData(t) : void 0));
    r.useEffect(() => {
        a && null != t && null == c.A.getStorefrontData(t) && 0 !== n && (0, l.Rw)(t, { eager: !1 });
    }, [t, n, a]);
    let u = r.useMemo(() => {
            if (null == s || null == s.storefront || "loading" === s.state || "partially-fetched" === s.state)
                return [];
            let e = s.storefront.pages.flatMap((e) => {
                    var t, n;
                    return [
                        ...e.skuIds,
                        ...(null != (t = null == (n = e.sections) ? void 0 : n.flatMap((e) => e.skuIds)) ? t : []),
                    ];
                }),
                t = [],
                r = new Set();
            for (let i of e) if (!r.has(i) && (t.push(i), r.add(i), t.length >= n)) break;
            return t;
        }, [s, n]),
        d = (0, i.yK)([o.A], () => u.map((e) => o.A.get(e)).filter((e) => null != e), [u]),
        f = r.useMemo(() => d.map((e) => p(e)), [d]);
    return {
        state: r.useMemo(
            () =>
                null == s || "loading" === s.state || "partially-fetched" === s.state || 0 === n
                    ? "loading"
                    : "error" === s.state
                      ? "error"
                      : "success",
            [s, n],
        ),
        recommendations: f,
        skuIdToUserIdsReasons: {},
    };
}
function m(e) {
    let {
            guildId: t,
            numWishlistItems: n = f,
            location: i,
            applicationId: s,
            userIds: o,
            includeWishlists: l = !1,
        } = e,
        c = (0, u.kt)({ location: i }),
        d = null != o && o.length > 0,
        [p, m] = r.useState(o);
    r.useEffect(() => {
        m((e) => (null == e ? o : (0, a.v)(e, o) ? e : o));
    }, [o]);
    let {
            state: g,
            recommendations: E,
            skuIdToUserIdsReasons: b,
        } = _({
            applicationId: s,
            userIds: p,
            numItems: n,
            isEligible: d && c,
            includeWishlists: l,
        }),
        y = d && "error" !== g,
        { state: O, recommendations: A } = h({
            guildId: t,
            numItems: n,
            isEligible: !y && c,
        });
    return c && 0 !== n
        ? y
            ? {
                  state: g,
                  recommendations: E,
                  skuIdToUserIdsReasons: b,
              }
            : {
                  state: O,
                  recommendations: A,
                  skuIdToUserIdsReasons: {},
              }
        : {
              state: "success",
              recommendations: [],
              skuIdToUserIdsReasons: {},
          };
}
