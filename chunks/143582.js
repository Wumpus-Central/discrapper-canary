"use strict";
n.d(t, { Hc: () => _, _R: () => p, f5: () => u, vz: () => d });
var i = n(228366),
    r = n(73825),
    a = n(337095),
    s = n(652215);
function l(e) {
    return {
        id: e.id,
        type: s.Puh.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: s.EZt.APPLICATION,
        name: e.name,
        summary: "",
        description: e.description,
        flags: e.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: "",
        deleted: e.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1,
    };
}
function o(e) {
    return {
        id: e.id,
        sku: l(e),
        summary: e.description,
        description: e.description,
        benefits: e.store_listing_benefits ?? [],
        thumbnail: e.image_asset,
        published: e.published,
    };
}
function c(e) {
    for (let t of (i.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e.map(l) }),
    i.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.map(o) }),
    e))
        i.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
async function d(e, t) {
    i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: e, groupListingId: t });
    try {
        let n = await a.fY(e, t);
        return (
            i.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: n,
            }),
            c(n.subscription_listings ?? []),
            n
        );
    } catch (t) {
        i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: e });
    }
}
async function u(e) {
    i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: e });
    try {
        let t = await a.dU(e);
        i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: e, entitlements: t });
    } catch (t) {
        i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: e });
    }
}
function _(e) {
    i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: e });
}
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    try {
        let t = await a.q$(e);
        i.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t });
        let n = t.subscription_listings ?? [];
        await Promise.all(
            n.map((t) => {
                if (t.subscription_plans[0].id === e) return r.ur(t.id, void 0, void 0, !0);
            }),
        ),
            c(n);
    } catch (n) {
        if ("status" in n && 429 === n.status && t < 10) await p(e, ++t);
        else throw n;
    }
}
