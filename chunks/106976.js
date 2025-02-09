t.d(n, {
    i1: () => d,
    rx: () => _,
    sB: () => u,
    vY: () => p
}),
    t(47120);
var i = t(570140),
    o = t(821849),
    r = t(307643),
    a = t(981631);
function l(e) {
    return {
        id: e.id,
        type: a.epS.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: a.POd.APPLICATION,
        name: e.name,
        summary: '',
        description: e.description,
        flags: e.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: e.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function c(e) {
    var n;
    return {
        id: e.id,
        sku: l(e),
        summary: e.description,
        description: e.description,
        benefits: null !== (n = e.store_listing_benefits) && void 0 !== n ? n : [],
        thumbnail: e.image_asset,
        published: e.published
    };
}
function s(e) {
    for (let n of (i.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: e.map(l)
    }),
    i.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: e.map(c)
    }),
    e))
        i.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: n.id,
            subscriptionPlans: n.subscription_plans
        });
}
async function _(e, n) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: e,
        groupListingId: n
    });
    try {
        var t;
        let o = await r.jz(e, n);
        return (
            i.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: e,
                groupListing: o
            }),
            s(null !== (t = o.subscription_listings) && void 0 !== t ? t : []),
            o
        );
    } catch (n) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: e
        });
    }
}
async function d(e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: e
    });
    try {
        let n = await r.GF(e);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: e,
            entitlements: n
        });
    } catch (n) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: e
        });
    }
}
function u(e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: e
    });
}
async function p(e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    try {
        var n;
        let t = await r.a_(e);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: t
        });
        let a = null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
        await Promise.all(
            a.map((n) => {
                if (n.subscription_plans[0].id === e) return o.GZ(n.id, void 0, void 0, !0);
            })
        ),
            s(a);
    } catch (e) {}
}
