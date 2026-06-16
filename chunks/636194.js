"use strict";
n.d(t, { A: () => D, e: () => c });
var i,
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(713402),
    l = n(228366),
    u = n(867164),
    c =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
function d(e) {
    return `guild:${e}`;
}
function _(e) {
    return `subscription_listing:${e}`;
}
function h(e) {
    return `application:${e}`;
}
let f = new o.J(
        (e) => [d(e.guild_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id,
    ),
    p = new o.J(
        (e) => {
            var t;
            return [h(e.application_id), ((t = e.subscription_plans[0].id), `plan:${t}`)];
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
function C(e) {
    return f.values(d(e));
}
function N(e) {
    for (let t of (f.set(e.id, e), S.set(e.guild_id, e.application_id), e.subscription_listings ?? [])) v(t);
}
function v(e) {
    p.set(e.id, e);
}
function R(e) {
    for (let t of e) y.set(t.id, t);
}
let O = [];
class b extends a.Ay.Store {
    static displayName = "GuildRoleSubscriptionsStore";
    getSubscriptionGroupListingsForGuildFetchState(e) {
        return E[e] ?? 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return m.has(e);
    }
    getSubscriptionGroupListing(e) {
        return f.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return C(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = f.values(_(e));
        return s()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return p.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        let t = this.getSubscriptionGroupListingsForGuild(e)[0]?.application_id;
        return null != t ? p.values(h(t)) : O;
    }
    getSubscriptionListingForPlan(e) {
        let t = p.values(`plan:${e}`);
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
        f.clear(), p.clear(), (E = {}), m.clear(), (g = {}), (A = {}), (I = {}), (T = {}), S.clear(), y.clear();
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
        let { settings: t } = e;
        g[t.guild_id] = t;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
        let { guildId: t } = e;
        for (let e of ((E[t] = 1), C(t))) for (let t of (f.delete(e.id), e.subscription_listings_ids)) p.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
        let { guildId: t, groupListings: n, benefitChannels: i, settings: r, subscriptionTrials: s } = e;
        for (let e of ((E[t] = 2), n)) N(e);
        for (let e of ((g[t] = r), s)) A[e.id] = e;
        R(i);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
        let { guildId: t } = e;
        E[t] = 2;
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
        let { listing: t } = e;
        N(t), null != t.benefit_channels && R(t.benefit_channels);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
        let { groupListingId: t } = e;
        f.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
        let { planId: t } = e;
        m.add(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
        let { groupListing: t } = e;
        N(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
        let { listing: t, groupListing: n } = e;
        v(t), N(n);
    },
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
        let { listing: t } = e;
        v(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
        let { listingId: t } = e;
        return p.delete(t);
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
