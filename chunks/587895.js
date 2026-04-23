"use strict";
n.d(t, { A: () => A }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(611010);
let a = [],
    o = new Map(),
    l = new Map(),
    u = new Map(),
    c = new Map(),
    d = new Map(),
    _ = { botUserIdToAppUsage: {} };
function f(e) {
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
                f(t.application instanceof s.Ay ? t.application : s.Ay.createFromServer(t.application));
    d.delete(e.id);
}
function p(e) {
    let {
        wishlistData: { applications: t },
    } = e;
    if (null == t || 0 === t.length) return !1;
    for (let e of t) f(e);
}
function h(e) {
    f(s.Ay.createFromServer(e));
}
function E(e) {
    let { userId: t, applicationId: n } = e,
        r = _.botUserIdToAppUsage[t];
    null == r
        ? (_.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: Date.now() })
        : (_.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: r.lastUsedMs });
    let i = new Map();
    for (let [e, t] of Object.entries(_.botUserIdToAppUsage)) i.set(e, t);
    let s = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < s.length; e++)
        if (e >= 10) {
            let t = s[e][0];
            delete _.botUserIdToAppUsage[t];
        }
}
function m(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) e?.application != null && (f(s.Ay.createFromServer(e.application)), (n = !0));
    return n;
}
class g extends r.Ay.PersistedStore {
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
        return null == e ? a : (l.get(e) ?? a);
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
let A = new g(i.h, {
    LOGOUT: function () {
        o.clear(), l.clear(), u.clear(), c.clear(), d.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applications: t } = e;
        for (let e of t) f(new s.Ay(e));
    },
    APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e,
            n = d.get(t);
        return d.set(t, !0), !0 !== n;
    },
    APPLICATION_FETCH_SUCCESS: function (e) {
        let { application: t } = e;
        h(t);
    },
    APPLICATION_FETCH_FAIL: function (e) {
        let { applicationId: t } = e,
            n = d.get(t);
        return d.set(t, !1), !1 !== n;
    },
    APPLICATIONS_FETCH: function (e) {
        let { applicationIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = d.get(e);
            d.set(e, !0), (n = !0 !== t);
        }
        return n;
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applications: t } = e;
        for (let e of t) f(s.Ay.createFromServer(e));
    },
    APPLICATIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = d.get(e);
            d.set(e, !1), (n = !1 !== t);
        }
        return n;
    },
    APPLICATION_UPDATE: function (e) {
        let { application: t } = e;
        h(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: m,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: m,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: m,
    GUILD_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { guildId: t, applications: n } = e,
            r = [];
        for (let e of n) r.push(e.id), f(s.Ay.createFromServer(e));
        l.set(t, r);
    },
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e,
            n = new Set();
        for (let e of t) {
            let t = e.sku?.application;
            null == t || n.has(t.id) || f(s.Ay.createFromServer(t));
        }
        return n.size > 0;
    },
    PAYMENT_UPDATE: function (e) {
        let { payment: t } = e;
        if (t.sku?.application == null) return !1;
        f(s.Ay.createFromServer(t.sku.application));
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        let { invite: t } = e;
        if (null == t.target_application) return !1;
        f(s.Ay.createFromServer(t.target_application));
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (t.store_listing?.sku.application == null) return !1;
        f(s.Ay.createFromServer(t.store_listing.sku.application));
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) f(s.Ay.createFromServer(e.application));
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t } = e;
        if (null == t.sku.application) return !1;
        f(s.Ay.createFromServer(t.sku.application));
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => {
            var t;
            return (
                (t = e),
                void t.attachments?.forEach((e) => {
                    null != e.application && f(s.Ay.createFromServer(e.application));
                })
            );
        });
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            { user: n, application: r } = t;
        n.bot && null != r && E({ userId: n.id, applicationId: r.id });
    },
    APP_DM_OPEN: function (e) {
        let { botUserId: t } = e,
            n = _.botUserIdToAppUsage[t];
        null != n && (_.botUserIdToAppUsage[t] = { ...n, lastUsedMs: Date.now() });
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        for (let t of Object.values(e.tokens)) {
            if (null == t) continue;
            f(s.Ay.createFromServer(t.application));
            let e = t.application.bot;
            null != e && E({ userId: e.id, applicationId: t.application.id });
        }
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        e.items.forEach((e) => {
            null != e.application && f(s.Ay.createFromServer(e.application));
        });
    },
    OAUTH2_TOKEN_CREATE: function (e) {
        let { application: t } = e;
        f(s.Ay.createFromServer(t));
    },
    WISHLIST_FETCH_SUCCESS: p,
    WISHLIST_ADD_SKU_SUCCESS: p,
    WISHLIST_REMOVE_SKU_SUCCESS: p,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let {
            storefront: { application: t },
        } = e;
        if (null == t) return !1;
        f(t);
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let {
            data: { applications: t },
        } = e;
        if (null == t || 0 === t.length) return !1;
        for (let e of t) f(e);
    },
});
