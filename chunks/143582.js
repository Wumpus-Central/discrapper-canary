s.d(i, { Hc: () => l, _R: () => r, f5: () => d, vz: () => c });
var e = s(228366),
    a = s(73825),
    S = s(337095),
    _ = s(652215);
function I(t) {
    return {
        id: t.id,
        type: _.Puh.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: _.EZt.APPLICATION,
        name: t.name,
        summary: "",
        description: t.description,
        flags: t.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: "",
        deleted: t.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1,
    };
}
function n(t) {
    return {
        id: t.id,
        sku: I(t),
        summary: t.description,
        description: t.description,
        benefits: t.store_listing_benefits ?? [],
        thumbnail: t.image_asset,
        published: t.published,
    };
}
function p(t) {
    for (let i of (e.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t.map(I) }),
    e.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.map(n) }),
    t))
        e.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: i.id,
            subscriptionPlans: i.subscription_plans,
        });
}
async function c(t, i) {
    e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: t, groupListingId: i });
    try {
        let s = await S.fY(t, i);
        return (
            e.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: t,
                groupListing: s,
            }),
            p(s.subscription_listings ?? []),
            s
        );
    } catch (i) {
        e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: t });
    }
}
async function d(t) {
    e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: t });
    try {
        let i = await S.dU(t);
        e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: t, entitlements: i });
    } catch (i) {
        e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: t });
    }
}
function l(t) {
    e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: t });
}
async function r(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: t });
    try {
        let i = await S.q$(t);
        e.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: i });
        let s = i.subscription_listings ?? [];
        await Promise.all(
            s.map((i) => {
                if (i.subscription_plans[0].id === t) return a.ur(i.id, void 0, void 0, !0);
            }),
        ),
            p(s);
    } catch (s) {
        if ("status" in s && 429 === s.status && i < 10) await r(t, ++i);
        else throw s;
    }
}
