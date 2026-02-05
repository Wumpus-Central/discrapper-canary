n.d(e, { A: () => h, e: () => d });
var i,
    l = n(284009),
    r = n.n(l),
    s = n(311907),
    u = n(713402),
    a = n(73153),
    o = n(557009),
    c = n(67480),
    d =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
function A(t) {
    return `subscription_listing:${t}`;
}
function p(t) {
    return `application:${t}`;
}
function S(t, e, n) {
    return `entitlement:${t}:${n}:${e}`;
}
function I(t, e) {
    return `entitlement:${e}:${t}`;
}
let f = new u.J(
        (t) => [p(t.application_id), ...t.subscription_listings_ids.map(A)],
        (t) => t.id,
    ),
    E = new u.J(
        (t) => {
            var e;
            return [p(t.application_id), ((e = t.subscription_plans[0].id), `plan:${e}`)];
        },
        (t) => t.id,
    ),
    g = new u.J(
        (t) => [S(t.applicationId, t.isValid(null, c.A), t.guildId), I(t.isValid(null, c.A), t.guildId)],
        (t) => t.id,
    ),
    m = {},
    T = {};
function _(t) {
    for (let n of (f.set(t.id, t), t.subscription_listings ?? [])) {
        var e;
        (e = n), E.set(e.id, e);
    }
}
class N extends s.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        return m[t] ?? 0;
    }
    getSubscriptionGroupListing(t) {
        return f.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = f.values(A(t));
        return r()(e.length <= 1, "Found multiple group listings for listing"), e[0];
    }
    getSubscriptionListing(t) {
        return E.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return E.values(p(t));
    }
    getEntitlementsForGuildFetchState(t) {
        return T[t] ?? 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = E.values(`plan:${t}`);
        return r()(e.length <= 1, "Found multiple listings for plan"), e[0];
    }
    getApplicationEntitlementsForGuild(t, e) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return g.values(S(t, n, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return g.values(I(e, t));
    }
}
let h = new N(a.h, {
    LOGOUT: function () {
        f.clear(), E.clear(), g.clear(), (m = {}), (T = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: e, groupListingId: n } = t;
        m[e] = 1;
        let i = f.get(n);
        if (null != i) for (let t of i.subscription_listings_ids) E.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: e, groupListing: n } = t;
        (m[e] = 2), _(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: e } = t;
        m[e] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: e } = t;
        T[e] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: e, entitlements: n } = t;
        (T[e] = 2),
            n.forEach((t) => {
                let e = o.A.createFromServer(t);
                g.set(e.id, e);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: e } = t;
        T[e] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: e } = t;
        _(e);
    },
});
