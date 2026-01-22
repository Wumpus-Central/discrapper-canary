n.d(t, {
    Hc: () => f,
    _R: () => p,
    f5: () => d,
    vz: () => u,
}),
    n(228524),
    n(896048);
var r = n(73153),
    i = n(73825),
    a = n(337095),
    s = n(652215);
function o(e) {
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
function l(e) {
    var t;
    return {
        id: e.id,
        sku: o(e),
        summary: e.description,
        description: e.description,
        benefits: null != (t = e.store_listing_benefits) ? t : [],
        thumbnail: e.image_asset,
        published: e.published,
    };
}
function c(e) {
    for (let t of (r.h.dispatch({
        type: "SKUS_FETCH_SUCCESS",
        skus: e.map(o),
    }),
    r.h.dispatch({
        type: "STORE_LISTINGS_FETCH_SUCCESS",
        storeListings: e.map(l),
    }),
    e))
        r.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
async function u(e, t) {
    r.h.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
        applicationId: e,
        groupListingId: t,
    });
    try {
        var n;
        let i = await a.fY(e, t);
        return (
            r.h.dispatch({
                type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                applicationId: e,
                groupListing: i,
            }),
            c(null != (n = i.subscription_listings) ? n : []),
            i
        );
    } catch (t) {
        r.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
        });
    }
}
async function d(e) {
    r.h.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
        guildId: e,
    });
    try {
        let t = await a.dU(e);
        r.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
        });
    } catch (t) {
        r.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
        });
    }
}
function f(e) {
    r.h.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
        guildId: e,
    });
}
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    r.h.dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
        planId: e,
    });
    try {
        var n;
        let t = await a.q$(e);
        r.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
        });
        let s = null != (n = t.subscription_listings) ? n : [];
        await Promise.all(
            s.map((t) => {
                if (t.subscription_plans[0].id === e) return i.ur(t.id, void 0, void 0, !0);
            }),
        ),
            c(s);
    } catch (n) {
        if ("status" in n && 429 === n.status && t < 10) await p(e, ++t);
        else throw n;
    }
}
