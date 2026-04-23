"use strict";
n.d(t, { A: () => D, e: () => c });
var r,
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(713402),
    l = n(73153),
    u = n(867164),
    c =
        (((r = {})[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED"),
        r);
function d(e) {
    return `guild:${e}`;
}
function _(e) {
    return `subscription_listing:${e}`;
}
function f(e) {
    return `application:${e}`;
}
let p = new o.J(
        (e) => [d(e.guild_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id,
    ),
    h = new o.J(
        (e) => {
            var t;
            return [f(e.application_id), ((t = e.subscription_plans[0].id), `plan:${t}`)];
        },
        (e) => e.id,
    ),
    E = {},
    m = new Set(),
    g = {},
    A = {},
    I = {},
    T = {},
    S = new Map(),
    y = new Map();
function N(e) {
    return p.values(d(e));
}
function v(e) {
    for (let t of (p.set(e.id, e), S.set(e.guild_id, e.application_id), e.subscription_listings ?? [])) C(t);
}
function C(e) {
    h.set(e.id, e);
}
function O(e) {
    for (let t of e) y.set(t.id, t);
}
let R = [];
class b extends a.Ay.Store {
    static displayName = "GuildRoleSubscriptionsStore";
    getSubscriptionGroupListingsForGuildFetchState(e) {
        return E[e] ?? 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return m.has(e);
    }
    getSubscriptionGroupListing(e) {
        return p.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return N(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = p.values(_(e));
        return s()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return h.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        let t = this.getSubscriptionGroupListingsForGuild(e)[0]?.application_id;
        return null != t ? h.values(f(t)) : R;
    }
    getSubscriptionListingForPlan(e) {
        let t = h.values(`plan:${e}`);
        return s()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getSubscriptionSettings(e) {
        return g[e];
    }
    getSubscriptionTrial(e) {
        return A[e];
    }
    getMonetizationRestrictions(e) {
        return I[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        return T[e] ?? 0;
    }
    getApplicationIdForGuild(e) {
        return S.get(e);
    }
    getBenefitChannel(e) {
        return y.get(e);
    }
}
let D = new b(l.h, {
    CONNECTION_OPEN: function () {
        p.clear(), h.clear(), (E = {}), m.clear(), (g = {}), (A = {}), (I = {}), (T = {}), S.clear(), y.clear();
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
        let { settings: t } = e;
        g[t.guild_id] = t;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { guildId: t } = e;
        for (let e of ((E[t] = 1), N(t))) for (let t of (p.delete(e.id), e.subscription_listings_ids)) h.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { guildId: t, groupListings: n, benefitChannels: r, settings: i, subscriptionTrials: s } = e;
        for (let e of ((E[t] = 2), n)) v(e);
        for (let e of ((g[t] = i), s)) A[e.id] = e;
        O(r);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { guildId: t } = e;
        E[t] = 2;
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
        let { listing: t } = e;
        v(t), null != t.benefit_channels && O(t.benefit_channels);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
        let { groupListingId: t } = e;
        p.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
        let { planId: t } = e;
        m.add(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        v(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
        let { listing: t, groupListing: n } = e;
        C(t), v(n);
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
        let { listing: t } = e;
        C(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
        let { listingId: t } = e;
        return h.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function (e) {
        let { subscriptionTrial: t } = e;
        A[t.id] = t;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function (e) {
        let { guildId: t } = e;
        T[t] = 1;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let { guildId: t, restrictions: n } = e;
        (I[t] = n), (T[t] = 2);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let { guildId: t } = e;
        (T[t] = 2), (I[t] = u.o);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function (e) {
        let { guildId: t } = e;
        T[t] = 0;
    },
});
