"use strict";
n.d(t, { A: () => W, e: () => u });
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    s = n(713402),
    o = n(73153),
    l = n(867164),
    u = (function (e) {
        return (
            (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
            (e[(e.FETCHING = 1)] = "FETCHING"),
            (e[(e.FETCHED = 2)] = "FETCHED"),
            e
        );
    })({});
function c(e) {
    return `guild:${e}`;
}
function d(e) {
    return `subscription_listing:${e}`;
}
function _(e) {
    return `application:${e}`;
}
function f(e) {
    return `plan:${e}`;
}
let p = new s.J(
        (e) => [c(e.guild_id), ...e.subscription_listings_ids.map(d)],
        (e) => e.id,
    ),
    h = new s.J(
        (e) => [_(e.application_id), f(e.subscription_plans[0].id)],
        (e) => e.id,
    ),
    m = {},
    g = new Set(),
    E = {},
    A = {},
    I = {},
    T = {},
    y = new Map();
function S(e) {
    return p.values(c(e));
}
function v(e) {
    for (let t of (p.set(e.id, e), y.set(e.guild_id, e.application_id), e.subscription_listings ?? [])) C(t);
}
function C(e) {
    h.set(e.id, e);
}
function b() {
    p.clear(), h.clear(), (m = {}), g.clear(), (E = {}), (A = {}), (I = {}), (T = {}), y.clear();
}
function N(e) {
    let { settings: t } = e;
    E[t.guild_id] = t;
}
function R(e) {
    let { guildId: t } = e;
    for (let e of ((m[t] = 1), S(t))) for (let t of (p.delete(e.id), e.subscription_listings_ids)) h.delete(t);
}
function O(e) {
    let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
    for (let e of ((m[t] = 2), n)) v(e);
    for (let e of ((E[t] = r), i)) A[e.id] = e;
}
function D(e) {
    let { guildId: t } = e;
    m[t] = 2;
}
function L(e) {
    let { listing: t } = e;
    v(t);
}
function w(e) {
    let { groupListingId: t } = e;
    p.delete(t);
}
function x(e) {
    let { planId: t } = e;
    g.add(t);
}
function P(e) {
    let { groupListing: t } = e;
    v(t);
}
function M(e) {
    let { listing: t, groupListing: n } = e;
    C(t), v(n);
}
function k(e) {
    let { listing: t } = e;
    C(t);
}
function U(e) {
    let { listingId: t } = e;
    return h.delete(t);
}
function G(e) {
    let { subscriptionTrial: t } = e;
    A[t.id] = t;
}
function V(e) {
    let { guildId: t } = e;
    T[t] = 1;
}
function F(e) {
    let { guildId: t, restrictions: n } = e;
    (I[t] = n), (T[t] = 2);
}
function B(e) {
    let { guildId: t } = e;
    (T[t] = 2), (I[t] = l.o);
}
function j(e) {
    let { guildId: t } = e;
    T[t] = 0;
}
let H = [];
class Y extends a.Ay.Store {
    static displayName = "GuildRoleSubscriptionsStore";
    getSubscriptionGroupListingsForGuildFetchState(e) {
        return m[e] ?? 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return g.has(e);
    }
    getSubscriptionGroupListing(e) {
        return p.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return S(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = p.values(d(e));
        return i()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return h.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        let t = this.getSubscriptionGroupListingsForGuild(e)[0]?.application_id;
        return null != t ? h.values(_(t)) : H;
    }
    getSubscriptionListingForPlan(e) {
        let t = h.values(f(e));
        return i()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getSubscriptionSettings(e) {
        return E[e];
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
        return y.get(e);
    }
}
let W = new Y(o.h, {
    CONNECTION_OPEN: b,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: N,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: R,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: O,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: D,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: L,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: P,
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: M,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: k,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: U,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: G,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: B,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: j,
});
