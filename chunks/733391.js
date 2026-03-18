"use strict";
n.d(t, { Kh: () => g, Rw: () => h, SP: () => E, Xw: () => A, iR: () => I, qf: () => m });
var r = n(562465),
    i = n(73153),
    s = n(927813),
    a = n(871123),
    o = n(832163),
    l = n(179935),
    u = n(652215);
let c = 30 * s.A.Millis.SECOND,
    d = 30 * s.A.Millis.MINUTE,
    _ = 60 * s.A.Millis.MINUTE,
    f = 30 * s.A.Millis.SECOND,
    p = 5 * s.A.Millis.SECOND;
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: s = !1 } = t,
        l = o.A.getStorefrontData(e),
        _ = l?.state === "loading",
        f = l?.state === "error" && l?.fetchedAt != null && Date.now() - l.fetchedAt < c,
        p = l?.state === "fetched" && l?.fetchedAt != null && Date.now() - l.fetchedAt < d;
    if (!(_ || f || p) || s)
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
async function m(e, t) {
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
function E(e, t, n) {
    i.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function g(e) {
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
async function A() {
    let e = o.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < _)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < f)
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
                config: {
                    promotionalSkuIds: e.promotional_sku_ids,
                    promotionEndDatetime: t,
                    storefronts:
                        e.storefronts?.map((e) => ({
                            guildId: e.guild_id,
                            applicationId: e.application_id,
                            gameId: e.game_id,
                        })) ?? [],
                },
            });
        } catch {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function I(e, t, n) {
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
        }, p),
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
