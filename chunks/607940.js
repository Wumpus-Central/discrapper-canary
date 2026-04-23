e.d(i, { A: () => h, e: () => d });
var n,
    l = e(284009),
    s = e.n(l),
    a = e(17928),
    o = e(713402),
    r = e(228366),
    u = e(513985),
    c = e(67480),
    d =
        (((n = {})[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED"),
        n);
function S(t) {
    return `subscription_listing:${t}`;
}
function p(t) {
    return `application:${t}`;
}
function I(t, i, e) {
    return `entitlement:${t}:${e}:${i}`;
}
function _(t, i) {
    return `entitlement:${i}:${t}`;
}
let T = new o.J(
        (t) => [p(t.application_id), ...t.subscription_listings_ids.map(S)],
        (t) => t.id,
    ),
    C = new o.J(
        (t) => {
            var i;
            return [p(t.application_id), ((i = t.subscription_plans[0].id), `plan:${i}`)];
        },
        (t) => t.id,
    ),
    A = new o.J(
        (t) => [I(t.applicationId, t.isValid(null, c.A), t.guildId), _(t.isValid(null, c.A), t.guildId)],
        (t) => t.id,
    ),
    E = {},
    N = {};
function f(t) {
    for (let e of (T.set(t.id, t), t.subscription_listings ?? [])) {
        var i;
        (i = e), C.set(i.id, i);
    }
}
class P extends a.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        return E[t] ?? 0;
    }
    getSubscriptionGroupListing(t) {
        return T.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let i = T.values(S(t));
        return s()(i.length <= 1, "Found multiple group listings for listing"), i[0];
    }
    getSubscriptionListing(t) {
        return C.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return C.values(p(t));
    }
    getEntitlementsForGuildFetchState(t) {
        return N[t] ?? 0;
    }
    getSubscriptionListingForPlan(t) {
        let i = C.values(`plan:${t}`);
        return s()(i.length <= 1, "Found multiple listings for plan"), i[0];
    }
    getApplicationEntitlementsForGuild(t, i) {
        let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return A.values(I(t, e, i));
    }
    getEntitlementsForGuild(t) {
        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return A.values(_(i, t));
    }
}
let h = new P(r.h, {
    LOGOUT: function () {
        T.clear(), C.clear(), A.clear(), (E = {}), (N = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: i, groupListingId: e } = t;
        E[i] = 1;
        let n = T.get(e);
        if (null != n) for (let t of n.subscription_listings_ids) C.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: i, groupListing: e } = t;
        (E[i] = 2), f(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: i } = t;
        E[i] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: i } = t;
        N[i] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: i, entitlements: e } = t;
        (N[i] = 2),
            e.forEach((t) => {
                let i = u.A.createFromServer(t);
                A.set(i.id, i);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: i } = t;
        N[i] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: i } = t;
        f(i);
    },
});
