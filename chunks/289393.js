n.d(t, {
    M: () => d,
    Z: () => K
}),
    n(47120);
var r,
    i = n(512722),
    o = n.n(i),
    a = n(442837),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var d = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), e;
})({});
function f(e) {
    return 'guild:'.concat(e);
}
function _(e) {
    return 'subscription_listing:'.concat(e);
}
function p(e) {
    return 'application:'.concat(e);
}
function h(e) {
    return 'plan:'.concat(e);
}
let m = new s.h(
        (e) => [f(e.guild_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id
    ),
    g = new s.h(
        (e) => [p(e.application_id), h(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    E = {},
    b = new Set(),
    y = {},
    v = {},
    O = {},
    I = {},
    S = new Map();
function T(e) {
    return m.values(f(e));
}
function N(e) {
    var t;
    for (let n of (m.set(e.id, e), S.set(e.guild_id, e.application_id), null != (t = e.subscription_listings) ? t : [])) A(n);
}
function A(e) {
    g.set(e.id, e);
}
function C() {
    m.clear(), g.clear(), (E = {}), b.clear(), (y = {}), (v = {}), (O = {}), (I = {}), S.clear();
}
function R(e) {
    let { settings: t } = e;
    y[t.guild_id] = t;
}
function P(e) {
    let { guildId: t } = e;
    for (let e of ((E[t] = 1), T(t))) for (let t of (m.delete(e.id), e.subscription_listings_ids)) g.delete(t);
}
function w(e) {
    let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
    for (let e of ((E[t] = 2), n)) N(e);
    for (let e of ((y[t] = r), i)) v[e.id] = e;
}
function D(e) {
    let { guildId: t } = e;
    E[t] = 2;
}
function L(e) {
    let { listing: t } = e;
    N(t);
}
function x(e) {
    let { groupListingId: t } = e;
    m.delete(t);
}
function M(e) {
    let { planId: t } = e;
    b.add(t);
}
function k(e) {
    let { groupListing: t } = e;
    N(t);
}
function j(e) {
    let { listing: t, groupListing: n } = e;
    A(t), N(n);
}
function U(e) {
    let { listing: t } = e;
    A(t);
}
function G(e) {
    let { listingId: t } = e;
    return g.delete(t);
}
function B(e) {
    let { subscriptionTrial: t } = e;
    v[t.id] = t;
}
function F(e) {
    let { guildId: t } = e;
    I[t] = 1;
}
function V(e) {
    let { guildId: t, restrictions: n } = e;
    (O[t] = n), (I[t] = 2);
}
function Z(e) {
    let { guildId: t } = e;
    (I[t] = 2), (O[t] = c.m);
}
function H(e) {
    let { guildId: t } = e;
    I[t] = 0;
}
let W = [];
class Y extends (r = a.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var t;
        return null != (t = E[e]) ? t : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return b.has(e);
    }
    getSubscriptionGroupListing(e) {
        return m.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return T(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = m.values(_(e));
        return o()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null == (t = this.getSubscriptionGroupListingsForGuild(e)[0]) ? void 0 : t.application_id;
        return null != n ? g.values(p(n)) : W;
    }
    getSubscriptionListingForPlan(e) {
        let t = g.values(h(e));
        return o()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getSubscriptionSettings(e) {
        return y[e];
    }
    getSubscriptionTrial(e) {
        return v[e];
    }
    getMonetizationRestrictions(e) {
        return O[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null != (t = I[e]) ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return S.get(e);
    }
}
u(Y, 'displayName', 'GuildRoleSubscriptionsStore');
let K = new Y(l.Z, {
    CONNECTION_OPEN: C,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: R,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: D,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: L,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: k,
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: j,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: U,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: G,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: B,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: Z,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: H
});
