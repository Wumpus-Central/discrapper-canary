"use strict";
n.d(t, { A: () => S, e: () => u });
var i,
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    l = n(713402),
    o = n(228366),
    c = n(557009),
    d = n(67480),
    u =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
function _(e) {
    return `subscription_listing:${e}`;
}
function p(e) {
    return `application:${e}`;
}
function f(e, t, n) {
    return `entitlement:${e}:${n}:${t}`;
}
function h(e, t) {
    return `entitlement:${t}:${e}`;
}
let m = new l.J(
        (e) => [p(e.application_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id,
    ),
    g = new l.J(
        (e) => {
            var t;
            return [p(e.application_id), ((t = e.subscription_plans[0].id), `plan:${t}`)];
        },
        (e) => e.id,
    ),
    b = new l.J(
        (e) => [f(e.applicationId, e.isValid(null, d.A), e.guildId), h(e.isValid(null, d.A), e.guildId)],
        (e) => e.id,
    ),
    A = {},
    E = {};
function I(e) {
    for (let n of (m.set(e.id, e), e.subscription_listings ?? [])) {
        var t;
        (t = n), g.set(t.id, t);
    }
}
class v extends s.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        return A[e] ?? 0;
    }
    getSubscriptionGroupListing(e) {
        return m.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = m.values(_(e));
        return a()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return g.values(p(e));
    }
    getEntitlementsForGuildFetchState(e) {
        return E[e] ?? 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = g.values(`plan:${e}`);
        return a()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return b.values(f(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return b.values(h(t, e));
    }
}
let S = new v(o.h, {
    LOGOUT: function () {
        m.clear(), g.clear(), b.clear(), (A = {}), (E = {});
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { applicationId: t, groupListingId: n } = e;
        A[t] = 1;
        let i = m.get(n);
        if (null != i) for (let e of i.subscription_listings_ids) g.delete(e);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { applicationId: t, groupListing: n } = e;
        (A[t] = 2), I(n);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { applicationId: t } = e;
        A[t] = 2;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
        let { guildId: t } = e;
        E[t] = 1;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
        let { guildId: t, entitlements: n } = e;
        (E[t] = 2),
            n.forEach((e) => {
                let t = c.A.createFromServer(e);
                b.set(t.id, t);
            });
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
        let { guildId: t } = e;
        E[t] = 0;
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        I(t);
    },
});
