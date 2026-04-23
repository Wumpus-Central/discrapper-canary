"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(395671);
let a = [],
    o = new Map(),
    l = new Map(),
    d = new Map(),
    _ = new Map(),
    u = new Map(),
    c = { botUserIdToAppUsage: {} };
function E(e) {
    let t = o.get(e.id);
    _.set(e.id, Date.now());
    let n = e;
    for (let i of (null != t && (n = t.mergeFromApplicationUpdate(e)),
    o.set(e.id, n),
    d.set(e.name.toLowerCase(), n),
    e.aliases))
        d.set(i.toLowerCase(), n);
    if (null != e.linkedGames)
        for (let t of e.linkedGames)
            null != t.application &&
                E(t.application instanceof s.Ay ? t.application : s.Ay.createFromServer(t.application));
    u.delete(e.id);
}
function h(e) {
    let {
        wishlistData: { applications: t },
    } = e;
    if (null == t || 0 === t.length) return !1;
    for (let e of t) E(e);
}
function m(e) {
    E(s.Ay.createFromServer(e));
}
function f(e) {
    let { userId: t, applicationId: n } = e,
        i = c.botUserIdToAppUsage[t];
    null == i
        ? (c.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: Date.now() })
        : (c.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: i.lastUsedMs });
    let r = new Map();
    for (let [e, t] of Object.entries(c.botUserIdToAppUsage)) r.set(e, t);
    let s = Array.from(r.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < s.length; e++)
        if (e >= 10) {
            let t = s[e][0];
            delete c.botUserIdToAppUsage[t];
        }
}
function g(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) e?.application != null && (E(s.Ay.createFromServer(e.application)), (n = !0));
    return n;
}
class p extends i.Ay.PersistedStore {
    static displayName = "ApplicationStore";
    static persistKey = "ApplicationStore";
    initialize(e) {
        if (null != e && "object" == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    i = n.applicationId,
                    r = n.lastUsedMs;
                "string" == typeof i &&
                    i.length > 0 &&
                    "number" == typeof r &&
                    r > 0 &&
                    (c.botUserIdToAppUsage[t] = { applicationId: i, lastUsedMs: r });
            }
    }
    getState() {
        return c;
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
        return null == e ? a : (l.get(e) ?? a);
    }
    getApplication(e) {
        if (null != e) return o.get(e);
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return d.has(t) ? d.get(t) : void 0;
    }
    getApplicationLastUpdated(e) {
        return _.get(e);
    }
    isFetchingApplication(e) {
        return !0 === u.get(e);
    }
    didFetchingApplicationFail(e) {
        return !1 === u.get(e);
    }
    getFetchingOrFailedFetchingIds() {
        return Array.from(u.keys());
    }
    getAppIdForBotUserId(e) {
        if (null != e) return c.botUserIdToAppUsage[e]?.applicationId;
    }
}
let A = new p(r.h, {
    LOGOUT: function () {
        o.clear(), l.clear(), d.clear(), _.clear(), u.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applications: t } = e;
        for (let e of t) E(new s.Ay(e));
    },
    APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e,
            n = u.get(t);
        return u.set(t, !0), !0 !== n;
    },
    APPLICATION_FETCH_SUCCESS: function (e) {
        let { application: t } = e;
        m(t);
    },
    APPLICATION_FETCH_FAIL: function (e) {
        let { applicationId: t } = e,
            n = u.get(t);
        return u.set(t, !1), !1 !== n;
    },
    APPLICATIONS_FETCH: function (e) {
        let { applicationIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = u.get(e);
            u.set(e, !0), (n = !0 !== t);
        }
        return n;
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applications: t } = e;
        for (let e of t) E(s.Ay.createFromServer(e));
    },
    APPLICATIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = u.get(e);
            u.set(e, !1), (n = !1 !== t);
        }
        return n;
    },
    APPLICATION_UPDATE: function (e) {
        let { application: t } = e;
        m(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: g,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: g,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: g,
    GUILD_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { guildId: t, applications: n } = e,
            i = [];
        for (let e of n) i.push(e.id), E(s.Ay.createFromServer(e));
        l.set(t, i);
    },
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e,
            n = new Set();
        for (let e of t) {
            let t = e.sku?.application;
            null == t || n.has(t.id) || E(s.Ay.createFromServer(t));
        }
        return n.size > 0;
    },
    PAYMENT_UPDATE: function (e) {
        let { payment: t } = e;
        if (t.sku?.application == null) return !1;
        E(s.Ay.createFromServer(t.sku.application));
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        let { invite: t } = e;
        if (null == t.target_application) return !1;
        E(s.Ay.createFromServer(t.target_application));
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (t.store_listing?.sku.application == null) return !1;
        E(s.Ay.createFromServer(t.store_listing.sku.application));
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) E(s.Ay.createFromServer(e.application));
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t } = e;
        if (null == t.sku.application) return !1;
        E(s.Ay.createFromServer(t.sku.application));
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => {
            var t;
            return (
                (t = e),
                void t.attachments?.forEach((e) => {
                    null != e.application && E(s.Ay.createFromServer(e.application));
                })
            );
        });
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            { user: n, application: i } = t;
        n.bot && null != i && f({ userId: n.id, applicationId: i.id });
    },
    APP_DM_OPEN: function (e) {
        let { botUserId: t } = e,
            n = c.botUserIdToAppUsage[t];
        null != n && (c.botUserIdToAppUsage[t] = { ...n, lastUsedMs: Date.now() });
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        for (let t of Object.values(e.tokens)) {
            if (null == t) continue;
            E(s.Ay.createFromServer(t.application));
            let e = t.application.bot;
            null != e && f({ userId: e.id, applicationId: t.application.id });
        }
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        e.items.forEach((e) => {
            null != e.application && E(s.Ay.createFromServer(e.application));
        });
    },
    OAUTH2_TOKEN_CREATE: function (e) {
        let { application: t } = e;
        E(s.Ay.createFromServer(t));
    },
    WISHLIST_FETCH_SUCCESS: h,
    WISHLIST_ADD_SKU_SUCCESS: h,
    WISHLIST_REMOVE_SKU_SUCCESS: h,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let {
            storefront: { application: t },
        } = e;
        if (null == t) return !1;
        E(t);
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let {
            data: { applications: t },
        } = e;
        if (null == t || 0 === t.length) return !1;
        for (let e of t) E(e);
    },
});
