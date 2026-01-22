n.d(t, {
    Kh: () => O,
    Rw: () => g,
    SP: () => b,
    Xg: () => y,
    g9: () => m,
    qf: () => E,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(927813),
    s = n(871123),
    o = n(832163),
    l = n(652215);

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
    _ = 30 * a.A.Millis.SECOND,
    h = 30 * a.A.Millis.MINUTE,
    m = 5;
async function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: a = !1 } = t,
        c = o.A.getStorefrontData(e),
        u = (null == c ? void 0 : c.state) === "loading",
        d =
            (null == c ? void 0 : c.state) === "error" &&
            (null == c ? void 0 : c.fetchedAt) != null &&
            Date.now() - c.fetchedAt < _,
        f =
            (null == c ? void 0 : c.state) === "fetched" &&
            (null == c ? void 0 : c.fetchedAt) != null &&
            Date.now() - c.fetchedAt < h;
    if (!(u || d || f) || a)
        try {
            var p;
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD",
                guildId: e,
            });
            let t = await r.Bo.get({
                url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                rejectWithError: !0,
                retries: 3,
            });
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                guildId: e,
                storefront: (0, s.sq)(t.body),
            }),
                i.h.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: null != (p = t.body.store_listings) ? p : [],
                });
        } catch (t) {
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
                guildId: e,
                eager: n,
            });
        }
}
async function E(e, t) {
    try {
        i.h.dispatch({
            type: "STORE_LISTINGS_FETCH_START",
            skuId: t,
        });
        let n = await r.Bo.get({
            url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, s.sq)({
                application_id: n.body.store_listing.sku.application_id,
                title: "",
                logo_asset_id: void 0,
                light_theme_logo_asset_id: void 0,
                pages: [],
                store_listings: [],
                assets: n.body.assets,
            }),
        }),
            i.h.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: n.body.store_listing,
            });
    } catch (e) {
        i.h.dispatch({
            type: "STORE_LISTINGS_FETCH_FAIL",
            skuId: t,
        });
    }
}

function b(e, t, n) {
    i.h.dispatch({
        type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
        guildId: e,
        pageIndex: t,
        skuId: n,
    });
}
async function y(e) {
    let { applicationId: t, userIds: n, maxRecommendations: a = p, includeWishlists: c = !1 } = e;
    if (0 === n.length) return;
    let d = o.A.recommendationsByApplicationsAndUsers(t, n);
    if (
        null == d ||
        ("error" !== d.state && "loading" !== d.state && ("success" !== d.state || !(d.data.numItemsRequested >= a)))
    )
        try {
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START",
                applicationId: t,
                userIds: n,
            });
            let e = await r.Bo.get({
                    url: l.Rsh.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
                    rejectWithError: !0,
                    query: {
                        user_ids: n,
                        max_recommendations: a,
                        include_wishlists: c,
                    },
                }),
                o = (0, s.ty)(e.body);
            return (
                i.h.dispatch(
                    f(
                        u(
                            {
                                type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS",
                            },
                            o,
                        ),
                        {
                            userIds: n,
                            numItemsRequested: a,
                        },
                    ),
                ),
                o
            );
        } catch (e) {
            return (
                i.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE",
                    applicationId: t,
                    userIds: n,
                }),
                null
            );
        }
}
async function O(e) {
    try {
        let t = (
            await r.Bo.get({
                url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e),
                rejectWithError: !0,
            })
        ).body;
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS",
            guildId: e,
            announcement: {
                id: t.id,
                applicationId: t.application_id,
                applicationName: t.application_name,
                assetId: t.asset_id,
                backgroundImageAssetId: t.background_image_asset_id,
            },
        });
    } catch (t) {
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE",
            guildId: e,
        });
    }
}
