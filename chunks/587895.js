"use strict";
n.d(t, { A: () => W }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(611010);
let s = [],
    o = new Map(),
    l = new Map(),
    u = new Map(),
    c = new Map(),
    d = new Map(),
    _ = { botUserIdToAppUsage: {} },
    f = 10;
function p(e) {
    let t = o.get(e.id);
    c.set(e.id, Date.now());
    let n = e;
    for (let r of (null != t && (n = t.mergeFromApplicationUpdate(e)),
    o.set(e.id, n),
    u.set(e.name.toLowerCase(), n),
    e.aliases))
        u.set(r.toLowerCase(), n);
    if (null != e.linkedGames)
        for (let t of e.linkedGames)
            null != t.application &&
                p(t.application instanceof a.Ay ? t.application : a.Ay.createFromServer(t.application));
    d.delete(e.id);
}
function h() {
    o.clear(), l.clear(), u.clear(), c.clear(), d.clear();
}
function m(e) {
    let {
        wishlistData: { applications: t },
    } = e;
    if (null == t || 0 === t.length) return !1;
    for (let e of t) p(e);
}
function g(e) {
    let { application: t } = e;
    p(t);
}
function E(e) {
    let {
        storefront: { application: t },
    } = e;
    if (null == t) return !1;
    p(t);
}
function A(e) {
    let { applications: t } = e;
    for (let e of t) p(new a.Ay(e));
}
function I(e) {
    let { applicationId: t } = e,
        n = d.get(t);
    return d.set(t, !0), !0 !== n;
}
function T(e) {
    let { application: t } = e;
    S(t);
}
function y(e) {
    let { application: t } = e;
    S(t);
}
function S(e) {
    p(a.Ay.createFromServer(e));
}
function v(e) {
    let { userId: t, applicationId: n } = e,
        r = _.botUserIdToAppUsage[t];
    null == r
        ? (_.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: Date.now() })
        : (_.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: r.lastUsedMs });
    let i = new Map();
    for (let [e, t] of Object.entries(_.botUserIdToAppUsage)) i.set(e, t);
    let a = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < a.length; e++)
        if (e >= f) {
            let t = a[e][0];
            delete _.botUserIdToAppUsage[t];
        }
}
function C(e) {
    let { applicationId: t } = e,
        n = d.get(t);
    return d.set(t, !1), !1 !== n;
}
function b(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = d.get(e);
        d.set(e, !0), (n = !0 !== t);
    }
    return n;
}
function N(e) {
    let { libraryApplications: t } = e;
    for (let e of t) p(a.Ay.createFromServer(e.application));
}
function R(e) {
    let { applications: t } = e;
    for (let e of t) p(a.Ay.createFromServer(e));
}
function O(e) {
    let { userProfile: t } = e,
        { user: n, application: r } = t;
    n.bot && null != r && v({ userId: n.id, applicationId: r.id });
}
function D(e) {
    let { botUserId: t } = e,
        n = _.botUserIdToAppUsage[t];
    null != n && (_.botUserIdToAppUsage[t] = { ...n, lastUsedMs: Date.now() });
}
function L(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = d.get(e);
        d.set(e, !1), (n = !1 !== t);
    }
    return n;
}
function w(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) e?.application != null && (p(a.Ay.createFromServer(e.application)), (n = !0));
    return n;
}
function x(e) {
    let { guildId: t, applications: n } = e,
        r = [];
    for (let e of n) r.push(e.id), p(a.Ay.createFromServer(e));
    l.set(t, r);
}
function P(e) {
    let { payments: t } = e,
        n = new Set();
    for (let e of t) {
        let t = e.sku?.application;
        null == t || n.has(t.id) || p(a.Ay.createFromServer(t));
    }
    return n.size > 0;
}
function M(e) {
    let { payment: t } = e;
    if (t.sku?.application == null) return !1;
    p(a.Ay.createFromServer(t.sku.application));
}
function k(e) {
    let { giftCode: t } = e;
    if (t.store_listing?.sku.application == null) return !1;
    p(a.Ay.createFromServer(t.store_listing.sku.application));
}
function U(e) {
    let { invite: t } = e;
    if (null == t.target_application) return !1;
    p(a.Ay.createFromServer(t.target_application));
}
function G(e) {
    let { storeListing: t } = e;
    if (null == t.sku.application) return !1;
    p(a.Ay.createFromServer(t.sku.application));
}
function V(e) {
    let { messages: t } = e;
    t.forEach((e) => F(e));
}
function F(e) {
    e.attachments?.forEach((e) => {
        null != e.application && p(a.Ay.createFromServer(e.application));
    });
}
function B(e) {
    let { application: t } = e;
    p(a.Ay.createFromServer(t));
}
function j(e) {
    e.tokens.forEach((e) => {
        p(a.Ay.createFromServer(e.application));
        let t = e.application.bot;
        null != t && v({ userId: t.id, applicationId: e.application.id });
    });
}
function H(e) {
    e.items.forEach((e) => {
        null != e.application && p(a.Ay.createFromServer(e.application));
    });
}
class Y extends r.Ay.PersistedStore {
    static displayName = "ApplicationStore";
    static persistKey = "ApplicationStore";
    initialize(e) {
        if (null != e && "object" == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    r = n.applicationId,
                    i = n.lastUsedMs;
                "string" == typeof r &&
                    r.length > 0 &&
                    "number" == typeof i &&
                    i > 0 &&
                    (_.botUserIdToAppUsage[t] = { applicationId: r, lastUsedMs: i });
            }
    }
    getState() {
        return _;
    }
    _getAllApplications() {
        return Array.from(o.values());
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of o.values()) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        return null == e ? s : (l.get(e) ?? s);
    }
    getApplication(e) {
        if (null != e) return o.get(e);
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return u.has(t) ? u.get(t) : void 0;
    }
    getApplicationLastUpdated(e) {
        return c.get(e);
    }
    isFetchingApplication(e) {
        return !0 === d.get(e);
    }
    didFetchingApplicationFail(e) {
        return !1 === d.get(e);
    }
    getFetchingOrFailedFetchingIds() {
        return Array.from(d.keys());
    }
    getAppIdForBotUserId(e) {
        if (null != e) return _.botUserIdToAppUsage[e]?.applicationId;
    }
}
let W = new Y(i.h, {
    LOGOUT: h,
    OVERLAY_INITIALIZE: A,
    APPLICATION_FETCH: I,
    APPLICATION_FETCH_SUCCESS: y,
    APPLICATION_FETCH_FAIL: C,
    APPLICATIONS_FETCH: b,
    APPLICATIONS_FETCH_SUCCESS: R,
    APPLICATIONS_FETCH_FAIL: L,
    APPLICATION_UPDATE: T,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: w,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: w,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: w,
    GUILD_APPLICATIONS_FETCH_SUCCESS: x,
    BILLING_PAYMENTS_FETCH_SUCCESS: P,
    PAYMENT_UPDATE: M,
    INVITE_RESOLVE_SUCCESS: U,
    GIFT_CODE_RESOLVE_SUCCESS: k,
    LIBRARY_FETCH_SUCCESS: N,
    STORE_LISTING_FETCH_SUCCESS: G,
    LOAD_MESSAGES_SUCCESS: V,
    USER_PROFILE_FETCH_SUCCESS: O,
    APP_DM_OPEN: D,
    USER_AUTHORIZED_APPS_UPDATE: j,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: H,
    OAUTH2_TOKEN_CREATE: B,
    WISHLIST_FETCH_SUCCESS: m,
    WISHLIST_ADD_SKU_SUCCESS: m,
    WISHLIST_REMOVE_SKU_SUCCESS: m,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: E,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: g,
});
