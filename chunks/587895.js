n.d(t, { A: () => N }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(395671);
let s = [],
    l = new Map(),
    o = new Map(),
    d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = new Map(),
    E = new Set(),
    A = { botUserIdToAppUsage: {} };
function h(e) {
    let t = l.get(e.id);
    u.set(e.id, Date.now());
    let n = e;
    for (let i of (null != t && (n = t.mergeFromApplicationUpdate(e)),
    l.set(e.id, n),
    c.set(e.name.toLowerCase(), n),
    e.aliases))
        c.set(i.toLowerCase(), n);
    if (null != e.linkedGames)
        for (let t of e.linkedGames)
            null != t.application &&
                h(t.application instanceof a.Ay ? t.application : a.Ay.createFromServer(t.application));
    _.delete(e.id);
}
function I(e) {
    let {
        wishlistData: { applications: t },
    } = e;
    if (null == t || 0 === t.length) return !1;
    for (let e of t) h(e);
}
function f(e) {
    h(a.Ay.createFromServer(e));
}
function p(e) {
    let { userId: t, applicationId: n } = e,
        i = A.botUserIdToAppUsage[t];
    null == i
        ? (A.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: Date.now() })
        : (A.botUserIdToAppUsage[t] = { applicationId: n, lastUsedMs: i.lastUsedMs });
    let r = new Map();
    for (let [e, t] of Object.entries(A.botUserIdToAppUsage)) r.set(e, t);
    let a = Array.from(r.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < a.length; e++)
        if (e >= 10) {
            let t = a[e][0];
            delete A.botUserIdToAppUsage[t];
        }
}
function T(e) {
    let { applications: t } = e;
    if (0 === t.length) return !1;
    for (let e of t) h(a.Ay.createFromServer(e));
    return !0;
}
function m(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) e?.application != null && (h(a.Ay.createFromServer(e.application)), (n = !0));
    return n;
}
function g(e) {
    let { guildId: t } = e;
    if (!d.has(t)) return !1;
    d.delete(t);
}
class S extends i.Ay.PersistedStore {
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
                    (A.botUserIdToAppUsage[t] = { applicationId: i, lastUsedMs: r });
            }
    }
    getState() {
        return A;
    }
    _getAllApplications() {
        return Array.from(l.values());
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of l.values()) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        return null == e ? s : (o.get(e) ?? s);
    }
    getGuildEmbeddedApplications(e, t) {
        if (null != e) return d.get(e)?.get(t);
    }
    getApplication(e) {
        if (null != e) return l.get(e);
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return c.has(t) ? c.get(t) : void 0;
    }
    getApplicationLastUpdated(e) {
        return u.get(e);
    }
    isFetchingApplication(e) {
        return !0 === _.get(e);
    }
    isHydrated(e) {
        return E.has(e);
    }
    didFetchingApplicationFail(e) {
        return !1 === _.get(e);
    }
    getFetchingOrFailedFetchingIds() {
        return Array.from(_.keys());
    }
    getAppIdForBotUserId(e) {
        if (null != e) return A.botUserIdToAppUsage[e]?.applicationId;
    }
}
let N = new S(r.h, {
    LOGOUT: function () {
        l.clear(), o.clear(), d.clear(), c.clear(), u.clear(), _.clear(), E.clear();
    },
    OVERLAY_INITIALIZE: function (e) {
        let { applications: t } = e;
        for (let e of t) h(new a.Ay(e));
    },
    APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e,
            n = _.get(t);
        return _.set(t, !0), !0 !== n;
    },
    APPLICATION_FETCH_SUCCESS: function (e) {
        let { application: t, isHydrated: n } = e;
        !0 === n && E.add(t.id), f(t);
    },
    APPLICATION_FETCH_FAIL: function (e) {
        let { applicationId: t } = e,
            n = _.get(t);
        return _.set(t, !1), !1 !== n;
    },
    APPLICATIONS_FETCH: function (e) {
        let { applicationIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = _.get(e);
            _.set(e, !0), (n = !0 !== t);
        }
        return n;
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applications: t, isHydrated: n } = e;
        for (let e of t) !0 === n && E.add(e.id), h(a.Ay.createFromServer(e));
    },
    APPLICATIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = !1;
        for (let e of t) {
            let t = _.get(e);
            _.set(e, !1), (n = !1 !== t);
        }
        return n;
    },
    APPLICATION_UPDATE: function (e) {
        let { application: t } = e;
        f(t);
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: m,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: m,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: m,
    GUILD_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { guildId: t, applications: n } = e,
            i = [];
        for (let e of n) i.push(e.id), h(a.Ay.createFromServer(e));
        o.set(t, i);
    },
    GUILD_EMBEDDED_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { guildId: t, surface: n, items: i } = e,
            r = [];
        for (let { application: e, status: t } of i)
            r.push({ applicationId: e.id, status: t }), h(a.Ay.createFromServer(e));
        let s = d.get(t);
        null == s && ((s = new Map()), d.set(t, s)), s.set(n, r);
    },
    GUILD_INTEGRATIONS_UPDATE: g,
    INTEGRATION_CREATE: g,
    INTEGRATION_UPDATE: g,
    INTEGRATION_DELETE: g,
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e,
            n = new Set();
        for (let e of t) {
            let t = e.sku?.application;
            null == t || n.has(t.id) || h(a.Ay.createFromServer(t));
        }
        return n.size > 0;
    },
    PAYMENT_UPDATE: function (e) {
        let { payment: t } = e;
        if (t.sku?.application == null) return !1;
        h(a.Ay.createFromServer(t.sku.application));
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        let { invite: t } = e;
        if (null == t.target_application) return !1;
        h(a.Ay.createFromServer(t.target_application));
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (t.store_listing?.sku.application == null) return !1;
        h(a.Ay.createFromServer(t.store_listing.sku.application));
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) h(a.Ay.createFromServer(e.application));
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t } = e;
        if (null == t.sku.application) return !1;
        h(a.Ay.createFromServer(t.sku.application));
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => {
            var t;
            return (
                (t = e),
                void t.attachments?.forEach((e) => {
                    null != e.application && h(a.Ay.createFromServer(e.application));
                })
            );
        });
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            { user: n, application: i } = t;
        n.bot && null != i && p({ userId: n.id, applicationId: i.id });
    },
    APP_DM_OPEN: function (e) {
        let { botUserId: t } = e,
            n = A.botUserIdToAppUsage[t];
        null != n && (A.botUserIdToAppUsage[t] = { ...n, lastUsedMs: Date.now() });
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        for (let t of Object.values(e.tokens)) {
            if (null == t) continue;
            h(a.Ay.createFromServer(t.application));
            let e = t.application.bot;
            null != e && p({ userId: e.id, applicationId: t.application.id });
        }
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        e.items.forEach((e) => {
            null != e.application && h(a.Ay.createFromServer(e.application));
        });
    },
    OAUTH2_TOKEN_CREATE: function (e) {
        let { application: t } = e;
        h(a.Ay.createFromServer(t));
    },
    WISHLIST_FETCH_SUCCESS: I,
    WISHLIST_ADD_SKU_SUCCESS: I,
    WISHLIST_REMOVE_SKU_SUCCESS: I,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let {
            storefront: { application: t },
        } = e;
        if (null == t) return !1;
        h(t);
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let {
            data: { applications: t },
        } = e;
        if (null == t || 0 === t.length) return !1;
        for (let e of t) h(e);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: T,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: T,
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: T,
});
