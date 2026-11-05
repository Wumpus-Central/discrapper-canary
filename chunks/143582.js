var n = i(73153),
    r = i(73825),
    a = i(337095),
    s = i(652215);
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
function _(e) {
    for (let t of (n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e.map(l) }),
    n.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.map(o) }),
    e))
        n.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
        });
}
i.d(
    t,
    {},
    {
        Hc: function (e) {
            n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId: e });
        },
        _R: async function e(t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: t });
            try {
                let e = await a.q$(t);
                n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: e });
                let i = e.subscription_listings ?? [];
                (await Promise.all(
                    i.map((e) => {
                        if (e.subscription_plans[0].id === t) return r.ur(e.id, void 0, void 0, !0);
                    }),
                ),
                    _(i));
            } catch (n) {
                if ("status" in n && 429 === n.status && i < 10) await e(t, ++i);
                else throw n;
            }
        },
        f5: async function (e) {
            n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: e });
            try {
                let t = await a.dU(e);
                n.h.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                    guildId: e,
                    entitlements: t,
                });
            } catch (t) {
                n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: e });
            }
        },
        vz: async function (e, t) {
            n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: e, groupListingId: t });
            try {
                let i = await a.fY(e, t);
                return (
                    n.h.dispatch({
                        type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                        applicationId: e,
                        groupListing: i,
                    }),
                    _(i.subscription_listings ?? []),
                    i
                );
            } catch (t) {
                n.h.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: e });
            }
        },
    },
);
