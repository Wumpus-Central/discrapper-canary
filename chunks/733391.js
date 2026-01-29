n.d(t, {
    Kh: () => v,
    Rw: () => E,
    SP: () => b,
    Xg: () => O,
    g9: () => g,
    iR: () => A,
    qf: () => y,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(927813),
    o = n(871123),
    s = n(832163),
    l = n(179935),
    c = n(652215);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 6,
    h = 30 * a.A.Millis.SECOND,
    m = 30 * a.A.Millis.MINUTE,
    g = 5;
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: a = !1 } = t,
        l = s.A.getStorefrontData(e),
        u = (null == l ? void 0 : l.state) === "loading",
        d =
            (null == l ? void 0 : l.state) === "error" &&
            (null == l ? void 0 : l.fetchedAt) != null &&
            Date.now() - l.fetchedAt < h,
        f =
            (null == l ? void 0 : l.state) === "fetched" &&
            (null == l ? void 0 : l.fetchedAt) != null &&
            Date.now() - l.fetchedAt < m;
    if (!(u || d || f) || a)
        try {
            var p;
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD",
                guildId: e,
            });
            let t = await r.Bo.get({
                url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                rejectWithError: !0,
                retries: 3,
            });
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                guildId: e,
                storefront: (0, o.sq)(t.body),
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
async function y(e, t) {
    try {
        i.h.dispatch({
            type: "STORE_LISTINGS_FETCH_START",
            skuId: t,
        });
        let n = await r.Bo.get({
            url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, o.sq)({
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
async function O(e) {
    let { applicationId: t, userIds: n, maxRecommendations: a = _, includeWishlists: l = !1 } = e;
    if (0 === n.length) return;
    let u = s.A.recommendationsByApplicationsAndUsers(t, n);
    if (
        null == u ||
        ("error" !== u.state && "loading" !== u.state && ("success" !== u.state || !(u.data.numItemsRequested >= a)))
    )
        try {
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START",
                applicationId: t,
                userIds: n,
            });
            let e = await r.Bo.get({
                    url: c.Rsh.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
                    rejectWithError: !0,
                    query: {
                        user_ids: n,
                        max_recommendations: a,
                        include_wishlists: l,
                    },
                }),
                s = (0, o.ty)(e.body);
            return (
                i.h.dispatch(
                    p(
                        d(
                            {
                                type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS",
                            },
                            s,
                        ),
                        {
                            userIds: n,
                            numItemsRequested: a,
                        },
                    ),
                ),
                s
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
async function v(e) {
    try {
        let t = (
            await r.Bo.get({
                url: c.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e),
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

function A(e, t, n) {
    if (
        !(0, l.T)({
            location: n,
        })
    )
        return;
    let a = s.A.getSKUEligibility(t);
    "checking" !== a &&
        "eligible" !== a &&
        "ineligible" !== a &&
        (i.h.dispatch({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START",
            skuId: t,
        }),
        r.Bo.post({
            url: c.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t),
            rejectWithError: !0,
        })
            .then((e) => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch(() => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                });
            }));
}
