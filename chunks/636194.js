n.d(t, {
    A: () => z,
    e: () => d,
}),
    n(896048);
var r,
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(867164);
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
function h(e) {
    return "plan:".concat(e);
}
let m = new o.J(
        (e) => [f(e.guild_id), ...e.subscription_listings_ids.map(p)],
        (e) => e.id,
    ),
    g = new o.J(
        (e) => [_(e.application_id), h(e.subscription_plans[0].id)],
        (e) => e.id,
    ),
    E = {},
    b = new Set(),
    y = {},
    O = {},
    A = {},
    v = {},
    S = new Map();
function I(e) {
    return m.values(f(e));
}
function T(e) {
    var t;
    for (let n of (m.set(e.id, e), S.set(e.guild_id, e.application_id), null != (t = e.subscription_listings) ? t : []))
        C(n);
}
function C(e) {
    g.set(e.id, e);
}
function N() {
    m.clear(), g.clear(), (E = {}), b.clear(), (y = {}), (O = {}), (A = {}), (v = {}), S.clear();
}
function R(e) {
    let { settings: t } = e;
    y[t.guild_id] = t;
}
function w(e) {
    let { guildId: t } = e;
    for (let e of ((E[t] = 1), I(t))) for (let t of (m.delete(e.id), e.subscription_listings_ids)) g.delete(t);
}
function P(e) {
    let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
    for (let e of ((E[t] = 2), n)) T(e);
    for (let e of ((y[t] = r), i)) O[e.id] = e;
}
function D(e) {
    let { guildId: t } = e;
    E[t] = 2;
}
function x(e) {
    let { listing: t } = e;
    T(t);
}
function L(e) {
    let { groupListingId: t } = e;
    m.delete(t);
}
function j(e) {
    let { planId: t } = e;
    b.add(t);
}
function M(e) {
    let { groupListing: t } = e;
    T(t);
}
function k(e) {
    let { listing: t, groupListing: n } = e;
    C(t), T(n);
}
function U(e) {
    let { listing: t } = e;
    C(t);
}
function G(e) {
    let { listingId: t } = e;
    return g.delete(t);
}
function V(e) {
    let { subscriptionTrial: t } = e;
    O[t.id] = t;
}
function F(e) {
    let { guildId: t } = e;
    v[t] = 1;
}
function B(e) {
    let { guildId: t, restrictions: n } = e;
    (A[t] = n), (v[t] = 2);
}
function H(e) {
    let { guildId: t } = e;
    (v[t] = 2), (A[t] = c.o);
}
function Y(e) {
    let { guildId: t } = e;
    v[t] = 0;
}
let W = [];
class K extends (r = s.Ay.Store) {
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
        return I(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = m.values(p(e));
        return a()(t.length <= 1, "Found multiple group listings for listing"), t[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null == (t = this.getSubscriptionGroupListingsForGuild(e)[0]) ? void 0 : t.application_id;
        return null != n ? g.values(_(n)) : W;
    }
    getSubscriptionListingForPlan(e) {
        let t = g.values(h(e));
        return a()(t.length <= 1, "Found multiple listings for plan"), t[0];
    }
    getSubscriptionSettings(e) {
        return y[e];
    }
    getSubscriptionTrial(e) {
        return O[e];
    }
    getMonetizationRestrictions(e) {
        return A[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null != (t = v[e]) ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return S.get(e);
    }
}
u(K, "displayName", "GuildRoleSubscriptionsStore");
let z = new K(l.h, {
    CONNECTION_OPEN: N,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: R,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: D,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: x,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: j,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: M,
    GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: k,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: U,
    GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: G,
    GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: B,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: H,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: Y,
});
