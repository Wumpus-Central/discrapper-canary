e.d(n, {
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
    e(47120);
var i = e(570140),
    r = e(821849),
    a = e(307643),
    s = e(981631);
function o(t) {
    return {
        id: t.id,
        type: s.epS.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: s.POd.APPLICATION,
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
        sku: o(t),
        summary: t.description,
        description: t.description,
        benefits: null !== (n = t.store_listing_benefits) && void 0 !== n ? n : [],
        thumbnail: t.image_asset,
        published: t.published
    };
}
function c(t) {
    for (let n of (i.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: t.map(o)
    }),
    i.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: t.map(l)
    }),
    t))
        i.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: n.id,
            subscriptionPlans: n.subscription_plans
        });
}
async function d(t, n) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: t,
        groupListingId: n
    });
    try {
        var e;
        let r = await a.jz(t, n);
        return (
            i.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: t,
                groupListing: r
            }),
            c(null !== (e = r.subscription_listings) && void 0 !== e ? e : []),
            r
        );
    } catch (n) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: t
        });
    }
}
async function u(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: t
    });
    try {
        let n = await a.GF(t);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: t,
            entitlements: n
        });
    } catch (n) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: t
        });
    }
}
function p(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: t
    });
}
async function _(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: t
    });
    try {
        var n;
        let e = await a.a_(t);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: e
        });
        let s = null !== (n = e.subscription_listings) && void 0 !== n ? n : [];
        await Promise.all(
            s.map((n) => {
                if (n.subscription_plans[0].id === t) return r.GZ(n.id, void 0, void 0, !0);
            })
        ),
            c(s);
    } catch (t) {}
}
