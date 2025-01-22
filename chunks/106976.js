i.d(n, {
    i1: function () {
        return u;
    },
    rx: function () {
        return d;
    },
    sB: function () {
        return p;
    },
    vY: function () {
        return _;
    }
}),
    i(47120);
var e = i(570140),
    r = i(821849),
    a = i(307643),
    o = i(981631);
function s(t) {
    return {
        id: t.id,
        type: o.epS.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: o.POd.APPLICATION,
        name: t.name,
        summary: '',
        description: t.description,
        flags: t.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: t.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function l(t) {
    var n;
    return {
        id: t.id,
        sku: s(t),
        summary: t.description,
        description: t.description,
        benefits: null !== (n = t.store_listing_benefits) && void 0 !== n ? n : [],
        thumbnail: t.image_asset,
        published: t.published
    };
}
function c(t) {
    for (let n of (e.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: t.map(s)
    }),
    e.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: t.map(l)
    }),
    t))
        e.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: n.id,
            subscriptionPlans: n.subscription_plans
        });
}
async function d(t, n) {
    e.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: t,
        groupListingId: n
    });
    try {
        var i;
        let r = await a.jz(t, n);
        return (
            e.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: t,
                groupListing: r
            }),
            c(null !== (i = r.subscription_listings) && void 0 !== i ? i : []),
            r
        );
    } catch (n) {
        e.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: t
        });
    }
}
async function u(t) {
    e.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: t
    });
    try {
        let n = await a.GF(t);
        e.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: t,
            entitlements: n
        });
    } catch (n) {
        e.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: t
        });
    }
}
function p(t) {
    e.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: t
    });
}
async function _(t) {
    e.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: t
    });
    try {
        var n;
        let i = await a.a_(t);
        e.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: i
        });
        let o = null !== (n = i.subscription_listings) && void 0 !== n ? n : [];
        await Promise.all(
            o.map((n) => {
                if (n.subscription_plans[0].id === t) return r.GZ(n.id, void 0, void 0, !0);
            })
        ),
            c(o);
    } catch (t) {}
}
