n.d(t, {
    M: () => d,
    Z: () => K
}),
    n(47120);
var i,
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(759174),
    l = n(570140),
    u = n(308636);
function c(e, t, n) {
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
let m = new o.h(
        (e) => [f(e.guild_id), ...e.subscription_listings_ids.map(_)],
        (e) => e.id
    ),
    g = new o.h(
        (e) => [p(e.application_id), h(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    E = {},
    v = new Set(),
    y = {},
    I = {},
    T = {},
    b = {},
    S = new Map();
function A(e) {
    return m.values(f(e));
}
function N(e) {
    var t;
    for (let n of (m.set(e.id, e), S.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) C(n);
}
function C(e) {
    g.set(e.id, e);
}
function R() {
    m.clear(), g.clear(), (E = {}), v.clear(), (y = {}), (I = {}), (T = {}), (b = {}), S.clear();
}
function O(e) {
    let { settings: t } = e;
    y[t.guild_id] = t;
}
function D(e) {
    let { guildId: t } = e;
    for (let e of ((E[t] = 1), A(t))) for (let t of (m.delete(e.id), e.subscription_listings_ids)) g.delete(t);
}
function x(e) {
    let { guildId: t, groupListings: n, settings: i, subscriptionTrials: r } = e;
    for (let e of ((E[t] = 2), n)) N(e);
    for (let e of ((y[t] = i), r)) I[e.id] = e;
}
function L(e) {
    let { guildId: t } = e;
    E[t] = 2;
}
function P(e) {
    let { listing: t } = e;
    N(t);
}
function w(e) {
    let { groupListingId: t } = e;
    m.delete(t);
}
function M(e) {
    let { planId: t } = e;
    v.add(t);
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
function B(e) {
    let { listingId: t } = e;
    return g.delete(t);
}
function Z(e) {
    let { subscriptionTrial: t } = e;
    I[t.id] = t;
}
function F(e) {
    let { guildId: t } = e;
    b[t] = 1;
}
function V(e) {
    let { guildId: t, restrictions: n } = e;
    (T[t] = n), (b[t] = 2);
}
function j(e) {
    let { guildId: t } = e;
    (b[t] = 2), (T[t] = u.m);
}
function H(e) {
    let { guildId: t } = e;
    b[t] = 0;
}
let Y = [];
class W extends (i = s.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return v.has(e);
    }
    getSubscriptionGroupListing(e) {
        return m.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return A(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = m.values(_(e));
        return a()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
        return null != n ? g.values(p(n)) : Y;
    }
    getSubscriptionListingForPlan(e) {
        let t = g.values(h(e));
        return a()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getSubscriptionSettings(e) {
        return y[e];
    }
    getSubscriptionTrial(e) {
        return I[e];
    }
    getMonetizationRestrictions(e) {
        return T[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return S.get(e);
    }
}
c(W, 'displayName', 'GuildRoleSubscriptionsStore');
let K = new W(l.Z, {
    CONNECTION_OPEN: R,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: O,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: x,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: L,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: P,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: k,
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: U,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: G,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: B,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: Z,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: j,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: H
});
