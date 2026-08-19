"use strict";
n.d(t, { A: () => v, e: () => c });
var i,
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    l = n(713402),
    o = n(228366),
    d = n(867164),
    c =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
function u(e) {
    return `guild:${e}`;
}
function _(e) {
    return `subscription_listing:${e}`;
}
function E(e) {
    return `application:${e}`;
}
let A = new l.J(
        (e) => [u(e.guild_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id,
    ),
    h = new l.J(
        (e) => {
            var t;
            return [E(e.application_id), ((t = e.subscription_plans[0].id), `plan:${t}`)];
        },
        (e) => e.id,
    ),
    I = {},
    f = new Set(),
    p = {},
    T = {},
    m = {},
    g = {},
    S = new Map(),
    N = new Map();
function C(e) {
    return A.values(u(e));
}
function O(e) {
    for (let t of (A.set(e.id, e), S.set(e.guild_id, e.application_id), e.subscription_listings ?? [])) R(t);
}
function R(e) {
    h.set(e.id, e);
}
function L(e) {
    for (let t of e) N.set(t.id, t);
}
let y = [];
class D extends s.Ay.Store {
    static displayName = "GuildRoleSubscriptionsStore";
    getSubscriptionGroupListingsForGuildFetchState(e) {
        return I[e] ?? 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return f.has(e);
    }
    getSubscriptionGroupListing(e) {
        return A.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return C(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = A.values(_(e));
        return a()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return h.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        let t = this.getSubscriptionGroupListingsForGuild(e)[0]?.application_id;
        return null != t ? h.values(E(t)) : y;
    }
    getSubscriptionListingForPlan(e) {
        let t = h.values(`plan:${e}`);
        return a()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getSubscriptionSettings(e) {
        return p[e];
    }
    getSubscriptionTrial(e) {
        return T[e];
    }
    getMonetizationRestrictions(e) {
        return m[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        return g[e] ?? 0;
    }
    getApplicationIdForGuild(e) {
        return S.get(e);
    }
    getBenefitChannel(e) {
        return N.get(e);
    }
}
let v = new D(o.h, {
    CONNECTION_OPEN: function () {
        A.clear(), h.clear(), (I = {}), f.clear(), (p = {}), (T = {}), (m = {}), (g = {}), S.clear(), N.clear();
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
        let { settings: t } = e;
        p[t.guild_id] = t;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { guildId: t } = e;
        for (let e of ((I[t] = 1), C(t))) for (let t of (A.delete(e.id), e.subscription_listings_ids)) h.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { guildId: t, groupListings: n, benefitChannels: i, settings: r, subscriptionTrials: a } = e;
        for (let e of ((I[t] = 2), n)) O(e);
        for (let e of ((p[t] = r), a)) T[e.id] = e;
        L(i);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { guildId: t } = e;
        I[t] = 2;
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
        let { listing: t } = e;
        O(t), null != t.benefit_channels && L(t.benefit_channels);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
        let { groupListingId: t } = e;
        A.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
        let { planId: t } = e;
        f.add(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        O(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
        let { listing: t, groupListing: n } = e;
        R(t), O(n);
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
        let { listing: t } = e;
        R(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
        let { listingId: t } = e;
        return h.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function (e) {
        let { subscriptionTrial: t } = e;
        T[t.id] = t;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function (e) {
        let { guildId: t } = e;
        g[t] = 1;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let { guildId: t, restrictions: n } = e;
        (m[t] = n), (g[t] = 2);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let { guildId: t } = e;
        (g[t] = 2), (m[t] = d.o);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function (e) {
        let { guildId: t } = e;
        g[t] = 0;
    },
});
