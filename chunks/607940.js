n.d(i, { A: () => L, e: () => I });
var e,
    l = n(284009),
    r = n.n(l),
    s = n(17928),
    u = n(713402),
    o = n(228366),
    S = n(557009),
    p = n(67480),
    I =
        (((e = {})[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        e);
function c(t) {
    return `subscription_listing:${t}`;
}
function a(t) {
    return `application:${t}`;
}
function T(t, i, n) {
    return `entitlement:${t}:${n}:${i}`;
}
function _(t, i) {
    return `entitlement:${i}:${t}`;
}
let C = new u.J(
        (t) => [a(t.application_id), ...t.subscription_listings_ids.map(c)],
        (t) => t.id,
    ),
    E = new u.J(
        (t) => {
            var i;
            return [a(t.application_id), ((i = t.subscription_plans[0].id), `plan:${i}`)];
        },
        (t) => t.id,
    ),
    d = new u.J(
        (t) => [T(t.applicationId, t.isValid(null, p.A), t.guildId), _(t.isValid(null, p.A), t.guildId)],
        (t) => t.id,
    ),
    g = {},
    N = {};
function F(t) {
    for (let n of (C.set(t.id, t), t.subscription_listings ?? [])) {
        var i;
        (i = n), E.set(i.id, i);
    }
}
class A extends s.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        return g[t] ?? 0;
    }
    getSubscriptionGroupListing(t) {
        return C.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let i = C.values(c(t));
        return r()(i.length <= 1, "Found multiple group listings for listing"), i[0];
    }
    getSubscriptionListing(t) {
        return E.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return E.values(a(t));
    }
    getEntitlementsForGuildFetchState(t) {
        return N[t] ?? 0;
    }
    getSubscriptionListingForPlan(t) {
        let i = E.values(`plan:${t}`);
        return r()(i.length <= 1, "Found multiple listings for plan"), i[0];
    }
    getApplicationEntitlementsForGuild(t, i) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return d.values(T(t, n, i));
    }
    getEntitlementsForGuild(t) {
        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return d.values(_(i, t));
    }
}
let L = new A(o.h, {
    LOGOUT: function () {
        C.clear(), E.clear(), d.clear(), (g = {}), (N = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: i, groupListingId: n } = t;
        g[i] = 1;
        let e = C.get(n);
        if (null != e) for (let t of e.subscription_listings_ids) E.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: i, groupListing: n } = t;
        (g[i] = 2), F(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: i } = t;
        g[i] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: i } = t;
        N[i] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: i, entitlements: n } = t;
        (N[i] = 2),
            n.forEach((t) => {
                let i = S.A.createFromServer(t);
                d.set(i.id, i);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: i } = t;
        N[i] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: i } = t;
        F(i);
    },
});
