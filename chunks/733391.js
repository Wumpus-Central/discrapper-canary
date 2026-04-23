n.d(t, { Kh: () => S, Rw: () => I, SP: () => T, Xw: () => N, dS: () => R, iR: () => O, qf: () => A });
var i = n(636537),
    r = n(228366),
    a = n(927813),
    s = n(871123),
    _ = n(832163),
    l = n(652215);
let o = 30 * a.A.Millis.SECOND,
    E = 30 * a.A.Millis.MINUTE,
    d = 60 * a.A.Millis.MINUTE,
    c = 30 * a.A.Millis.SECOND,
    u = 5 * a.A.Millis.SECOND;
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { eager: n = !1, forceFetch: a = !1 } = t,
        d = _.A.getStorefrontData(e),
        c = d?.state === "loading",
        u = d?.state === "error" && d?.fetchedAt != null && Date.now() - d.fetchedAt < o,
        I = d?.state === "fetched" && d?.fetchedAt != null && Date.now() - d.fetchedAt < E;
    if (!(c || u || I) || a)
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildId: e });
            let t = await i.Bo.get({
                    url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                    rejectWithError: !0,
                    retries: 3,
                }),
                n = t.body,
                a = (0, s.sq)(n);
            null != a.storefrontPricing &&
                r.h.dispatch({
                    type: "SKUS_PRICING_FETCH_SUCCESS",
                    priceId: { type: "application", applicationId: a.applicationId },
                    data: a.storefrontPricing,
                }),
                r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildId: e, storefront: a }),
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: a.applicationId,
                    storefrontMetadata: (0, s.NE)(n),
                }),
                r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.body.store_listings ?? [] });
        } catch (t) {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildId: e, eager: n });
        }
}
async function A(e, t) {
    try {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: t });
        let n = await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t), rejectWithError: !0 });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        let a = n.body.store_listing,
            _ = n.body.storefront_metadata;
        r.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            assets: Object.fromEntries(n.body.assets.map((e) => [e.id, e])),
        }),
            null != _ &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                    applicationId: a.sku.application_id,
                    storefrontMetadata: (0, s.NE)(_),
                }),
            r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: a });
    } catch (e) {
        r.h.dispatch({ type: "STORE_LISTINGS_FETCH_FAIL", skuId: t });
    }
}
function T(e, t, n) {
    r.h.dispatch({ type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", guildId: e, pageIndex: t, skuId: n });
}
async function S(e) {
    try {
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: e });
        let t = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(e), rejectWithError: !0 })).body;
        r.h.dispatch({
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
        r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: e });
    }
}
async function N() {
    let e = _.A.getConfigFetchState();
    if (
        !("loading" === e.state || ("success" === e.state && Date.now() - e.fetchedAt < d)) &&
        !("error" === e.state && Date.now() - e.fetchedAt < c)
    )
        try {
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
            let e = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: !0 })).body,
                t = null;
            if (null != e.promotion_end_datetime) {
                let n = new Date(e.promotion_end_datetime);
                Number.isNaN(n.getTime()) || (t = n);
            }
            r.h.dispatch({
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
            r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        }
}
function O(e, t) {
    let n = _.A.getSKUEligibility(t);
    "checking" !== n &&
        "eligible" !== n &&
        "ineligible" !== n &&
        (r.h.dispatch({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: t }),
        setTimeout(() => {
            "checking" === _.A.getSKUEligibility(t) &&
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    reason: "interaction_deadline",
                });
        }, u),
        i.Bo.post({ url: l.Rsh.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(e, t), rejectWithError: !0 })
            .then((e) => {
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
                    skuId: t,
                    interactionId: e.body.interaction_id,
                });
            })
            .catch((e) => {
                r.h.dispatch({
                    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
                    skuId: t,
                    httpStatus: e?.status,
                });
            }));
}
async function R() {
    r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: l.Rsh.SOCIAL_LAYER_STOREFRONT_ELIGIBILITY, rejectWithError: !0 })).body;
        return r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS", affinity: (0, s.Ox)(e) }), e;
    } catch (e) {
        return r.h.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE" }), null;
    }
}
