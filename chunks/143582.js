i.d(e, { Hc: () => p, _R: () => S, f5: () => d, vz: () => c });
var n = i(73153),
    l = i(73825),
    s = i(337095),
    a = i(652215);
function r(t) {
    return {
        id: t.id,
        type: a.Puh.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: a.EZt.APPLICATION,
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
function o(t) {
    return {
        id: t.id,
        sku: r(t),
        summary: t.description,
        description: t.description,
        benefits: t.store_listing_benefits ?? [],
        thumbnail: t.image_asset,
        published: t.published,
    };
}
function u(t) {
    for (let e of (n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t.map(r) }),
    n.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.map(o) }),
    t))
        n.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: e.id,
            subscriptionPlans: e.subscription_plans,
        });
}
async function c(t, e) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: t, groupListingId: e });
    try {
        let i = await s.fY(t, e);
        return (
            n.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: t,
                groupListing: i,
            }),
            u(i.subscription_listings ?? []),
            i
        );
    } catch (e) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: t });
    }
}
async function d(t) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: t });
    try {
        let e = await s.dU(t);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: t, entitlements: e });
    } catch (e) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: t });
    }
}
function p(t) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: t });
}
async function S(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: t });
    try {
        let e = await s.q$(t);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: e });
        let i = e.subscription_listings ?? [];
        await Promise.all(
            i.map((e) => {
                if (e.subscription_plans[0].id === t) return l.ur(e.id, void 0, void 0, !0);
            }),
        ),
            u(i);
    } catch (i) {
        if ("status" in i && 429 === i.status && e < 10) await S(t, ++e);
        else throw i;
    }
}
