"use strict";
n.d(t, { Kh: () => T, Rw: () => E, SP: () => A, Xg: () => I, Xw: () => S, g9: () => h, iR: () => y, qf: () => g });
var r = n(562465),
    i = n(73153),
    s = n(927813),
    a = n(871123),
    o = n(832163),
    l = n(179935),
    u = n(652215);
let c = 6,
    d = 30 * s.A.Millis.SECOND,
    _ = 30 * s.A.Millis.MINUTE,
    f = 60 * s.A.Millis.MINUTE,
    p = 30 * s.A.Millis.SECOND,
    h = 5,
    m = 5 * s.A.Millis.SECOND;
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: s = !1 } = t,
        l = o.A.getStorefrontData(e),
        c = l?.state === "loading",
        f = l?.state === "error" && l?.fetchedAt != null && Date.now() - l.fetchedAt < d,
        p = l?.state === "fetched" && l?.fetchedAt != null && Date.now() - l.fetchedAt < _;
    if (!(c || f || p) || s)
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await r.Bo.get({
                url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                rejectWithError: !0,
                retries: 3,
            });
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: (0, a.sq)(t.body) }),
                i.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function g(e, t) {
    try {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: t });
        let n = await r.Bo.get({ url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), rejectWithError: !0 });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, a.sq)({
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
function A(e, t, n) {
    i.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function I(e) {
    let { applicationId: t, userIds: n, maxRecommendations: s = c, includeWishlists: l = !1 } = e;
    if (0 === n.length) return;
    let d = o.A.recommendationsByApplicationsAndUsers(t, n);
    if (
        null == d ||
        ("error" !== d.state && "loading" !== d.state && ("success" !== d.state || !(d.data.numItemsRequested >= s)))
    )
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START", applicationId: t, userIds: n });
            let e = await r.Bo.get({
                    url: u.Rsh.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS(t),
                    rejectWithError: !0,
                    query: { user_ids: n, max_recommendations: s, include_wishlists: l },
                }),
                o = (0, a.ty)(e.body);
            return (
                i.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS",
                    ...o,
                    userIds: n,
                    numItemsRequested: s,
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
async function T(e) {
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
async function S() {
    let e = o.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < f)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < p)
    )
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await r.Bo.get({ url: u.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            i.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                config: { promotionalSkuIds: e.promotional_sku_ids, promotionEndDatetime: t },
            });
        } catch {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function y(e, t, n) {
    if (!(0, l.T)({ location: n })) return;
    let s = o.A.getSKUEligibility(t);
    "checking" !== s &&
        "eligible" !== s &&
        "ineligible" !== s &&
        (i.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === o.A.getSKUEligibility(t) &&
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, m),
        r.Bo.post({ url: u.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch((e) => {
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    httpStatus: e?.status,
                });
            }));
}
