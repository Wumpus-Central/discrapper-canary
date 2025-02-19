n.d(t, {
    i1: () => u,
    rx: () => _,
    sB: () => d,
    vY: () => p
}),
    n(266796),
    n(47120);
var o = n(570140),
    i = n(821849),
    r = n(307643),
    a = n(981631);
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
    var t;
    return {
        id: e.id,
        sku: l(e),
        summary: e.description,
        description: e.description,
        benefits: null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
        thumbnail: e.image_asset,
        published: e.published
    };
}
function s(e) {
    for (let t of (o.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: e.map(l)
    }),
    o.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: e.map(c)
    }),
    e))
        o.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: t.id,
            subscriptionPlans: t.subscription_plans
        });
}
async function _(e, t) {
    o.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: e,
        groupListingId: t
    });
    try {
        var n;
        let i = await r.jz(e, t);
        return (
            o.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: e,
                groupListing: i
            }),
            s(null !== (n = i.subscription_listings) && void 0 !== n ? n : []),
            i
        );
    } catch (t) {
        o.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: e
        });
    }
}
async function u(e) {
    o.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: e
    });
    try {
        let t = await r.GF(e);
        o.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: e,
            entitlements: t
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: e
        });
    }
}
function d(e) {
    o.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: e
    });
}
async function p(e) {
    o.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    try {
        var t;
        let n = await r.a_(e);
        o.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: n
        });
        let a = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
        await Promise.all(
            a.map((t) => {
                if (t.subscription_plans[0].id === e) return i.GZ(t.id, void 0, void 0, !0);
            })
        ),
            s(a);
    } catch (e) {}
}
