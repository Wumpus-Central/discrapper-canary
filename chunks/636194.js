"use strict";
n.d(t, { A: () => L, e: () => _ });
var i,
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(713402),
    l = n(228366),
    d = n(867164),
    _ =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
function u(e) {
    return `guild:${e}`;
}
function c(e) {
    return `subscription_listing:${e}`;
}
function E(e) {
    return `application:${e}`;
}
let h = new o.J(
        (e) => [u(e.guild_id), ...e.subscription_listings_ids.map(c)],
        (e) => e.id,
    ),
    m = new o.J(
        (e) => {
            var t;
            return [E(e.application_id), ((t = e.subscription_plans[0].id), `plan:${t}`)];
        },
        (e) => e.id,
    ),
    f = {},
    g = new Set(),
    p = {},
    A = {},
    I = {},
    T = {},
    S = new Map(),
    N = new Map();
function C(e) {
    return h.values(u(e));
}
function R(e) {
    for (let t of (h.set(e.id, e), S.set(e.guild_id, e.application_id), e.subscription_listings ?? [])) O(t);
}
function O(e) {
    m.set(e.id, e);
}
function y(e) {
    for (let t of e) N.set(t.id, t);
}
let v = [];
class D extends a.Ay.Store {
    static displayName = "GuildRoleSubscriptionsStore";
    getSubscriptionGroupListingsForGuildFetchState(e) {
        return f[e] ?? 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return g.has(e);
    }
    getSubscriptionGroupListing(e) {
        return h.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return C(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = h.values(c(e));
        return s()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return m.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        let t = this.getSubscriptionGroupListingsForGuild(e)[0]?.application_id;
        return null != t ? m.values(E(t)) : v;
    }
    getSubscriptionListingForPlan(e) {
        let t = m.values(`plan:${e}`);
        return s()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getSubscriptionSettings(e) {
        return p[e];
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
        return N.get(e);
    }
}
let L = new D(l.h, {
    CONNECTION_OPEN: function () {
        h.clear(), m.clear(), (f = {}), g.clear(), (p = {}), (A = {}), (I = {}), (T = {}), S.clear(), N.clear();
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
        let { settings: t } = e;
        p[t.guild_id] = t;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { guildId: t } = e;
        for (let e of ((f[t] = 1), C(t))) for (let t of (h.delete(e.id), e.subscription_listings_ids)) m.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { guildId: t, groupListings: n, benefitChannels: i, settings: r, subscriptionTrials: s } = e;
        for (let e of ((f[t] = 2), n)) R(e);
        for (let e of ((p[t] = r), s)) A[e.id] = e;
        y(i);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { guildId: t } = e;
        f[t] = 2;
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
        let { listing: t } = e;
        R(t), null != t.benefit_channels && y(t.benefit_channels);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
        let { groupListingId: t } = e;
        h.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
        let { planId: t } = e;
        g.add(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        R(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
        let { listing: t, groupListing: n } = e;
        O(t), R(n);
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
        let { listing: t } = e;
        O(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
        let { listingId: t } = e;
        return m.delete(t);
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
        (T[t] = 2), (I[t] = d.o);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function (e) {
        let { guildId: t } = e;
        T[t] = 0;
    },
});
