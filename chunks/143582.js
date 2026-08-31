l.d(t, { Hc: () => h, _R: () => f, f5: () => d, vz: () => u });
var n = l(228366),
    i = l(73825),
    a = l(337095),
    r = l(652215);
function s(e) {
    return {
        id: e.id,
        type: r.Puh.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: r.EZt.APPLICATION,
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
        sku: s(e),
        summary: e.description,
        description: e.description,
        benefits: e.store_listing_benefits ?? [],
        thumbnail: e.image_asset,
        published: e.published,
    };
}
function c(e) {
    for (let t of (n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e.map(s) }),
    n.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.map(o) }),
    e))
        n.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
async function u(e, t) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: e, groupListingId: t });
    try {
        let l = await a.fY(e, t);
        return (
            n.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: l,
            }),
            c(l.subscription_listings ?? []),
            l
        );
    } catch (t) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: e });
    }
}
async function d(e) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: e });
    try {
        let t = await a.dU(e);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: e, entitlements: t });
    } catch (t) {
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: e });
    }
}
function h(e) {
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: e });
}
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    try {
        let t = await a.q$(e);
        n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t });
        let l = t.subscription_listings ?? [];
        await Promise.all(
            l.map((t) => {
                if (t.subscription_plans[0].id === e) return i.ur(t.id, void 0, void 0, !0);
            }),
        ),
            c(l);
    } catch (l) {
        if ("status" in l && 429 === l.status && t < 10) await f(e, ++t);
        else throw l;
    }
}
