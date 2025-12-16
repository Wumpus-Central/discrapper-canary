n.d(t, {
    YL: () => h,
    g$: () => b,
    m0: () => E,
    y: () => g,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(70956),
    o = n(164670),
    s = n(210218),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 6,
    _ = 30 * a.Z.Millis.SECOND,
    m = 30 * a.Z.Millis.MINUTE;
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = s.Z.getStorefrontData(e),
        a = (null == n ? void 0 : n.state) === "loading",
        c =
            (null == n ? void 0 : n.state) === "error" &&
            (null == n ? void 0 : n.fetchedAt) != null &&
            Date.now() - n.fetchedAt < _,
        u =
            (null == n ? void 0 : n.state) === "fetched" &&
            (null == n ? void 0 : n.fetchedAt) != null &&
            Date.now() - n.fetchedAt < m;
    if (!a && !c && !u)
        try {
            var d;
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD",
                guildId: e,
            });
            let t = await r.tn.get({
                url: l.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                rejectWithError: !0,
                retries: 3,
            });
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                guildId: e,
                storefront: (0, o.Uc)(t.body),
            }),
                i.Z.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: null != (d = t.body.store_listings) ? d : [],
                });
        } catch (n) {
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
                guildId: e,
                eager: t,
            });
        }
}
async function g(e, t) {
    try {
        i.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_START",
            skuId: t,
        });
        let n = await r.tn.get({
            url: l.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, o.Uc)({
                application_id: n.body.store_listing.sku.application_id,
                title: "",
                logo_asset_id: void 0,
                light_theme_logo_asset_id: void 0,
                pages: [],
                store_listings: [],
                assets: n.body.assets,
            }),
        }),
            i.Z.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: n.body.store_listing,
            });
    } catch (e) {
        i.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_FAIL",
            skuId: t,
        });
    }
}
function E(e, t, n) {
    i.Z.dispatch({
        type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
        guildId: e,
        pageIndex: t,
        skuId: n,
    });
}
async function b(e) {
    let { applicationId: t, userIds: n, maxRecommendations: a = p, includeWishlists: c = !1 } = e;
    if (0 === n.length) return;
    let d = s.Z.recommendationsByApplicationsAndUsers(t, n);
    if (
        null == d ||
        ("error" !== d.state && "loading" !== d.state && ("success" !== d.state || !(d.data.numItemsRequested >= a)))
    )
        try {
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START",
                applicationId: t,
                userIds: n,
            });
            let e = await r.tn.get({
                    url: l.ANM.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
                    rejectWithError: !0,
                    query: {
                        user_ids: n,
                        max_recommendations: a,
                        include_wishlists: c,
                    },
                }),
                s = (0, o.X0)(e.body);
            return (
                i.Z.dispatch(
                    f(u({ type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS" }, s), {
                        userIds: n,
                        numItemsRequested: a,
                    }),
                ),
                s
            );
        } catch (e) {
            return (
                i.Z.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE",
                    applicationId: t,
                    userIds: n,
                }),
                null
            );
        }
}
