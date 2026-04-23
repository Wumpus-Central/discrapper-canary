"use strict";
n.d(t, { Kh: () => m, Rw: () => p, SP: () => E, Xw: () => g, dS: () => I, iR: () => A, qf: () => h });
var r = n(562465),
    i = n(73153),
    s = n(927813),
    a = n(871123),
    o = n(832163),
    l = n(652215);
let u = 30 * s.A.Millis.SECOND,
    c = 30 * s.A.Millis.MINUTE,
    d = 60 * s.A.Millis.MINUTE,
    _ = 30 * s.A.Millis.SECOND,
    f = 5 * s.A.Millis.SECOND;
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: s = !1 } = t,
        d = o.A.getStorefrontData(e),
        _ = d?.state === "loading",
        f = d?.state === "error" && d?.fetchedAt != null && Date.now() - d.fetchedAt < u,
        p = d?.state === "fetched" && d?.fetchedAt != null && Date.now() - d.fetchedAt < c;
    if (!(_ || f || p) || s)
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await r.Bo.get({
                    url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                    rejectWithError: !0,
                    retries: 3,
                }),
                n = t.body,
                s = (0, a.sq)(n);
            null != s.storefrontPricing &&
                i.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: s.applicationId },
                    data: s.storefrontPricing,
                }),
                i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: s }),
                i.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: s.applicationId,
                    storefrontMetadata: (0, a.NE)(n),
                }),
                i.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function h(e, t) {
    try {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: t });
        let n = await r.Bo.get({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), rejectWithError: !0 });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        let s = n.body.store_listing,
            o = n.body.storefront_metadata;
        i.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(n.body.assets.map((e) => [e.id, e])),
        }),
            null != o &&
                i.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: s.sku.application_id,
                    storefrontMetadata: (0, a.NE)(o),
                }),
            i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: s });
    } catch (e) {
        i.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: t });
    }
}
function E(e, t, n) {
    i.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function m(e) {
    try {
        i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await r.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body;
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
async function g() {
    let e = o.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < d)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < _)
    )
        try {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await r.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
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
                    announcementModalConfig:
                        null != e.announcement_modal_config
                            ? {
                                  version: e.announcement_modal_config.version,
                                  applicationId: e.announcement_modal_config.application_id,
                              }
                            : null,
                },
            });
        } catch {
            i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function A(e, t) {
    let n = o.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (i.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === o.A.getSKUEligibility(t) &&
                i.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, f),
        r.Bo.post({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
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
async function I() {
    i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START" });
    try {
        let e = (await r.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ELIGIBILITY, rejectWithError: !0 })).body;
        return i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS", affinity: (0, a.Ox)(e) }), e;
    } catch (e) {
        return i.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE" }), null;
    }
}
