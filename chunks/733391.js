"use strict";
n.d(t, { Kh: () => E, Rw: () => p, SP: () => m, Xg: () => g, g9: () => f, iR: () => A, qf: () => h });
var r = n(562465),
    i = n(73153),
    a = n(927813),
    s = n(871123),
    o = n(832163),
    l = n(179935),
    u = n(652215);
let c = 6,
    d = 30 * a.A.Millis.SECOND,
    _ = 30 * a.A.Millis.MINUTE,
    f = 5;
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: a = !1 } = t,
        l = o.A.getStorefrontData(e),
        c = l?.state === "loading",
        f = l?.state === "error" && l?.fetchedAt != null && Date.now() - l.fetchedAt < d,
        p = l?.state === "fetched" && l?.fetchedAt != null && Date.now() - l.fetchedAt < _;
    if (!(c || f || p) || a)
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await r.Bo.get({
                url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                rejectWithError: !0,
                retries: 3,
            });
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: (0, s.sq)(t.body) }),
                i.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function h(e, t) {
    try {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: t });
        let n = await r.Bo.get({ url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), rejectWithError: !0 });
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
            i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: n.body.store_listing });
    } catch (e) {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: t });
    }
}
function m(e, t, n) {
    i.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function g(e) {
    let { applicationId: t, userIds: n, maxRecommendations: a = c, includeWishlists: l = !1 } = e;
    if (0 === n.length) return;
    let d = o.A.recommendationsByApplicationsAndUsers(t, n);
    if (
        null == d ||
        ("error" !== d.state && "loading" !== d.state && ("success" !== d.state || !(d.data.numItemsRequested >= a)))
    )
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START", applicationId: t, userIds: n });
            let e = await r.Bo.get({
                    url: u.Rsh.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
                    rejectWithError: !0,
                    query: { user_ids: n, max_recommendations: a, include_wishlists: l },
                }),
                o = (0, s.ty)(e.body);
            return (
                i.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS",
                    ...o,
                    userIds: n,
                    numItemsRequested: a,
                }),
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
async function E(e) {
    try {
        i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await r.Bo.get({ url: u.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body;
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
        i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
function A(e, t, n) {
    if (!(0, l.T)({ location: n })) return;
    let a = o.A.getSKUEligibility(t);
    "checking" !== a &&
        "eligible" !== a &&
        "ineligible" !== a &&
        (i.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        r.Bo.post({ url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch(() => {
                i.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId: t });
            }));
}
