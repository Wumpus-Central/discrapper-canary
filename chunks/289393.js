n.d(t, {
    M: () => d,
    Z: () => K,
}),
    n(388685);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(308636);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var d = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        e
    );
})({});
function f(e) {
    return "guild:".concat(e);
}
function p(e) {
    return "subscription_listing:".concat(e);
}
function _(e) {
    return "application:".concat(e);
}
function m(e) {
    return "plan:".concat(e);
}
let h = new s.h(
        (e) => [f(e.guild_id), ...e.subscription_listings_ids.map(p)],
        (e) => e.id,
    ),
    g = new s.h(
        (e) => [_(e.application_id), m(e.subscription_plans[0].id)],
        (e) => e.id,
    ),
    E = {},
    b = new Set(),
    y = {},
    O = {},
    v = {},
    S = {},
    I = new Map();
function T(e) {
    return h.values(f(e));
}
function C(e) {
    var t;
    for (let n of (h.set(e.id, e), I.set(e.guild_id, e.application_id), null != (t = e.subscription_listings) ? t : []))
        A(n);
}
function A(e) {
    g.set(e.id, e);
}
function N() {
    h.clear(), g.clear(), (E = {}), b.clear(), (y = {}), (O = {}), (v = {}), (S = {}), I.clear();
}
function P(e) {
    let { settings: t } = e;
    y[t.guild_id] = t;
}
function R(e) {
    let { guildId: t } = e;
    for (let e of ((E[t] = 1), T(t))) for (let t of (h.delete(e.id), e.subscription_listings_ids)) g.delete(t);
}
function w(e) {
    let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
    for (let e of ((E[t] = 2), n)) C(e);
    for (let e of ((y[t] = r), i)) O[e.id] = e;
}
function D(e) {
    let { guildId: t } = e;
    E[t] = 2;
}
function x(e) {
    let { listing: t } = e;
    C(t);
}
function L(e) {
    let { groupListingId: t } = e;
    h.delete(t);
}
function j(e) {
    let { planId: t } = e;
    b.add(t);
}
function M(e) {
    let { groupListing: t } = e;
    C(t);
}
function k(e) {
    let { listing: t, groupListing: n } = e;
    A(t), C(n);
}
function U(e) {
    let { listing: t } = e;
    A(t);
}
function G(e) {
    let { listingId: t } = e;
    return g.delete(t);
}
function Z(e) {
    let { subscriptionTrial: t } = e;
    O[t.id] = t;
}
function F(e) {
    let { guildId: t } = e;
    S[t] = 1;
}
function B(e) {
    let { guildId: t, restrictions: n } = e;
    (v[t] = n), (S[t] = 2);
}
function V(e) {
    let { guildId: t } = e;
    (S[t] = 2), (v[t] = c.m);
}
function H(e) {
    let { guildId: t } = e;
    S[t] = 0;
}
let Y = [];
class W extends (r = o.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var t;
        return null != (t = E[e]) ? t : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return b.has(e);
    }
    getSubscriptionGroupListing(e) {
        return h.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return T(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = h.values(p(e));
        return a()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null == (t = this.getSubscriptionGroupListingsForGuild(e)[0]) ? void 0 : t.application_id;
        return null != n ? g.values(_(n)) : Y;
    }
    getSubscriptionListingForPlan(e) {
        let t = g.values(m(e));
        return a()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getSubscriptionSettings(e) {
        return y[e];
    }
    getSubscriptionTrial(e) {
        return O[e];
    }
    getMonetizationRestrictions(e) {
        return v[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null != (t = S[e]) ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return I.get(e);
    }
}
u(W, "displayName", "GuildRoleSubscriptionsStore");
let K = new W(l.Z, {
    CONNECTION_OPEN: N,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: R,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: D,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: x,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: j,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: M,
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: k,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: U,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: G,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: Z,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: B,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: H,
});
