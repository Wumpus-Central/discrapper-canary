r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    s = r(47120);
var o = r(512722),
    l = r.n(o),
    u = r(442837),
    c = r(759174),
    d = r(570140),
    f = r(308636);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function h(e) {
    return 'guild:'.concat(e);
}
function p(e) {
    return 'subscription_listing:'.concat(e);
}
function m(e) {
    return 'application:'.concat(e);
}
function g(e) {
    return 'plan:'.concat(e);
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(i || (i = {}));
let E = new c.h(
        (e) => [h(e.guild_id), ...e.subscription_listings_ids.map(p)],
        (e) => e.id
    ),
    v = new c.h(
        (e) => [m(e.application_id), g(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    I = {},
    T = new Set(),
    b = {},
    y = {},
    S = {},
    A = {},
    N = new Map();
function C(e) {
    return E.values(h(e));
}
function R(e) {
    var n;
    for (let r of (E.set(e.id, e), N.set(e.guild_id, e.application_id), null !== (n = e.subscription_listings) && void 0 !== n ? n : [])) O(r);
}
function O(e) {
    v.set(e.id, e);
}
function D() {
    E.clear(), v.clear(), (I = {}), T.clear(), (b = {}), (y = {}), (S = {}), (A = {}), N.clear();
}
function L(e) {
    let { settings: n } = e;
    b[n.guild_id] = n;
}
function x(e) {
    let { guildId: n } = e;
    for (let e of ((I[n] = 1), C(n))) for (let n of (E.delete(e.id), e.subscription_listings_ids)) v.delete(n);
}
function w(e) {
    let { guildId: n, groupListings: r, settings: i, subscriptionTrials: a } = e;
    for (let e of ((I[n] = 2), r)) R(e);
    for (let e of ((b[n] = i), a)) y[e.id] = e;
}
function P(e) {
    let { guildId: n } = e;
    I[n] = 2;
}
function M(e) {
    let { listing: n } = e;
    R(n);
}
function k(e) {
    let { groupListingId: n } = e;
    E.delete(n);
}
function U(e) {
    let { planId: n } = e;
    T.add(n);
}
function B(e) {
    let { groupListing: n } = e;
    R(n);
}
function G(e) {
    let { listing: n, groupListing: r } = e;
    O(n), R(r);
}
function Z(e) {
    let { listing: n } = e;
    O(n);
}
function F(e) {
    let { listingId: n } = e;
    return v.delete(n);
}
function V(e) {
    let { subscriptionTrial: n } = e;
    y[n.id] = n;
}
function j(e) {
    let { guildId: n } = e;
    A[n] = 1;
}
function H(e) {
    let { guildId: n, restrictions: r } = e;
    (S[n] = r), (A[n] = 2);
}
function Y(e) {
    let { guildId: n } = e;
    (A[n] = 2), (S[n] = f.m);
}
function W(e) {
    let { guildId: n } = e;
    A[n] = 0;
}
let K = [];
class z extends (a = u.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return T.has(e);
    }
    getSubscriptionGroupListing(e) {
        return E.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return C(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = E.values(p(e));
        return l()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return v.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var n;
        let r = null === (n = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === n ? void 0 : n.application_id;
        return null != r ? v.values(m(r)) : K;
    }
    getSubscriptionListingForPlan(e) {
        let n = v.values(g(e));
        return l()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getSubscriptionSettings(e) {
        return b[e];
    }
    getSubscriptionTrial(e) {
        return y[e];
    }
    getMonetizationRestrictions(e) {
        return S[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var n;
        return null !== (n = A[e]) && void 0 !== n ? n : 0;
    }
    getApplicationIdForGuild(e) {
        return N.get(e);
    }
}
_(z, 'displayName', 'GuildRoleSubscriptionsStore'),
    (n.Z = new z(d.Z, {
        CONNECTION_OPEN: D,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: L,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: x,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: w,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: P,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: M,
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: k,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: U,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: B,
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: G,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: Z,
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: F,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: V,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: j,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: H,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: Y,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: W
    }));
