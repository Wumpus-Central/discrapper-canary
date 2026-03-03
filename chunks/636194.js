"use strict";
n.d(t, { A: () => $, e: () => u });
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(713402),
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
let p = new a.J(
        (e) => [c(e.guild_id), ...e.subscription_listings_ids.map(d)],
        (e) => e.id,
    ),
    h = new a.J(
        (e) => [_(e.application_id), f(e.subscription_plans[0].id)],
        (e) => e.id,
    ),
    m = {},
    E = new Set(),
    g = {},
    A = {},
    I = {},
    T = {},
    S = new Map(),
    y = new Map();
function v(e) {
    return p.values(c(e));
}
function N(e) {
    for (let t of (p.set(e.id, e), S.set(e.guild_id, e.application_id), e.subscription_listings ?? [])) C(t);
}
function C(e) {
    h.set(e.id, e);
}
function R(e) {
    for (let t of e) y.set(t.id, t);
}
function O() {
    p.clear(), h.clear(), (m = {}), E.clear(), (g = {}), (A = {}), (I = {}), (T = {}), S.clear(), y.clear();
}
function b(e) {
    let { settings: t } = e;
    g[t.guild_id] = t;
}
function D(e) {
    let { guildId: t } = e;
    for (let e of ((m[t] = 1), v(t))) for (let t of (p.delete(e.id), e.subscription_listings_ids)) h.delete(t);
}
function L(e) {
    let { guildId: t, groupListings: n, benefitChannels: r, settings: i, subscriptionTrials: s } = e;
    for (let e of ((m[t] = 2), n)) N(e);
    for (let e of ((g[t] = i), s)) A[e.id] = e;
    R(r);
}
function w(e) {
    let { guildId: t } = e;
    m[t] = 2;
}
function M(e) {
    let { listing: t } = e;
    N(t), null != t.benefit_channels && R(t.benefit_channels);
}
function x(e) {
    let { groupListingId: t } = e;
    p.delete(t);
}
function P(e) {
    let { planId: t } = e;
    E.add(t);
}
function k(e) {
    let { groupListing: t } = e;
    N(t);
}
function U(e) {
    let { listing: t, groupListing: n } = e;
    C(t), N(n);
}
function G(e) {
    let { listing: t } = e;
    C(t);
}
function F(e) {
    let { listingId: t } = e;
    return h.delete(t);
}
function V(e) {
    let { subscriptionTrial: t } = e;
    A[t.id] = t;
}
function B(e) {
    let { guildId: t } = e;
    T[t] = 1;
}
function H(e) {
    let { guildId: t, restrictions: n } = e;
    (I[t] = n), (T[t] = 2);
}
function j(e) {
    let { guildId: t } = e;
    (T[t] = 2), (I[t] = l.o);
}
function Y(e) {
    let { guildId: t } = e;
    T[t] = 0;
}
let W = [];
class K extends s.Ay.Store {
    static displayName = "GuildRoleSubscriptionsStore";
    getSubscriptionGroupListingsForGuildFetchState(e) {
        return m[e] ?? 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return E.has(e);
    }
    getSubscriptionGroupListing(e) {
        return p.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return v(e);
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
        return null != t ? h.values(_(t)) : W;
    }
    getSubscriptionListingForPlan(e) {
        let t = h.values(f(e));
        return i()(t.length <= 1, "Found multiple listings for plan"), t[0];
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
let $ = new K(o.h, {
    CONNECTION_OPEN: O,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: b,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: w,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: M,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: k,
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: U,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: G,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: F,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: B,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: H,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: j,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: Y,
});
