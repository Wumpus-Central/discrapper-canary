i.d(e, { A: () => N, e: () => d });
var n,
    l = i(284009),
    s = i.n(l),
    a = i(311907),
    r = i(713402),
    o = i(73153),
    u = i(557009),
    c = i(67480),
    d =
        (((n = {})[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED"),
        n);
function p(t) {
    return `subscription_listing:${t}`;
}
function S(t) {
    return `application:${t}`;
}
function I(t, e, i) {
    return `entitlement:${t}:${i}:${e}`;
}
function A(t, e) {
    return `entitlement:${e}:${t}`;
}
let _ = new r.J(
        (t) => [S(t.application_id), ...t.subscription_listings_ids.map(p)],
        (t) => t.id,
    ),
    T = new r.J(
        (t) => {
            var e;
            return [S(t.application_id), ((e = t.subscription_plans[0].id), `plan:${e}`)];
        },
        (t) => t.id,
    ),
    h = new r.J(
        (t) => [I(t.applicationId, t.isValid(null, c.A), t.guildId), A(t.isValid(null, c.A), t.guildId)],
        (t) => t.id,
    ),
    E = {},
    C = {};
function f(t) {
    for (let i of (_.set(t.id, t), t.subscription_listings ?? [])) {
        var e;
        (e = i), T.set(e.id, e);
    }
}
class g extends a.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        return E[t] ?? 0;
    }
    getSubscriptionGroupListing(t) {
        return _.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = _.values(p(t));
        return s()(e.length <= 1, "Found multiple group listings for listing"), e[0];
    }
    getSubscriptionListing(t) {
        return T.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return T.values(S(t));
    }
    getEntitlementsForGuildFetchState(t) {
        return C[t] ?? 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = T.values(`plan:${t}`);
        return s()(e.length <= 1, "Found multiple listings for plan"), e[0];
    }
    getApplicationEntitlementsForGuild(t, e) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return h.values(I(t, i, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return h.values(A(e, t));
    }
}
let N = new g(o.h, {
    LOGOUT: function () {
        _.clear(), T.clear(), h.clear(), (E = {}), (C = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
        let { applicationId: e, groupListingId: i } = t;
        E[e] = 1;
        let n = _.get(i);
        if (null != n) for (let t of n.subscription_listings_ids) T.delete(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
        let { applicationId: e, groupListing: i } = t;
        (E[e] = 2), f(i);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
        let { applicationId: e } = t;
        E[e] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let { guildId: e } = t;
        C[e] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let { guildId: e, entitlements: i } = t;
        (C[e] = 2),
            i.forEach((t) => {
                let e = u.A.createFromServer(t);
                h.set(e.id, e);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let { guildId: e } = t;
        C[e] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
        let { groupListing: e } = t;
        f(e);
    },
});
