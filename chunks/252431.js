"use strict";
n.d(t, { A: () => L }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(736056),
    s = n(698441),
    l = n(320095),
    o = n(383233),
    d = n(994500),
    c = n(287809),
    u = n(935208),
    _ = n(322387),
    E = n(995273),
    A = n(652215);
let h = {
    loading: !1,
    initialized: !1,
    errored: !1,
    isDataStale: !1,
    notifCenterItems: [],
    staleNotifCenterItems: [],
    notifCenterIds: new Set(),
    notifCenterLocalItems: [],
    paginationHasMore: !0,
    paginationCursor: void 0,
    notifCenterActive: !1,
    notifCenterTabFocused: !1,
};
function I(e) {
    return null != e.id && null != e.type;
}
function f() {
    let { keepLocalItems: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    h = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: e ? h.notifCenterLocalItems : [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1,
    };
}
function p() {
    f({ keepLocalItems: !0 });
}
function T(e) {
    return {
        ...e,
        kind: "notification-center-item",
        message: null != e.message ? (0, l.rh)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0,
    };
}
function m(e) {
    let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? T(e.item) : e.item;
    if (!h.initialized || !I(t) || h.notifCenterIds.has(t.id)) return !1;
    h.notifCenterIds.add(t.id),
        (h.notifCenterItems = [t, ...h.notifCenterItems]),
        h.notifCenterItems.sort((e, t) => u.default.compare(t.id, e.id));
}
function g(e, t) {
    h.notifCenterItems = h.notifCenterItems.map((n) => (e.includes(n.id) ? { ...n, acked: t } : n)).filter(I);
}
function S(e, t, n) {
    return e.type === t && e.other_user?.id === n;
}
function N(e, t, n, i) {
    return S(e, t, n) && e.applicationId === i;
}
function C(e) {
    let { relationship: t } = e,
        { id: n, type: i, isSpamRequest: r, userIgnored: a, user: s, since: l, originApplicationId: o } = t;
    if (i === A.eA$.PENDING_INCOMING && !r && !a) {
        if (null == l) return null;
        if (null != s) {
            let e = c.default.getUser(s.id);
            null != e && (h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, E.Qi)(e, l, o)]);
        }
    }
    i !== A.eA$.FRIEND ||
        null == t.user ||
        a ||
        (h.notifCenterLocalItems = h.notifCenterLocalItems.map((e) =>
            S(e, _.Uo.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: `incoming_friend_requests_accepted_${s.id}_${e.id}`,
                      type: _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                  }
                : e,
        )),
        (i === A.eA$.BLOCKED || a) &&
            (h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
                (e) =>
                    !S(e, _.Uo.INCOMING_FRIEND_REQUESTS, n) &&
                    !S(e, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) &&
                    !S(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) &&
                    !S(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n),
            ));
}
function R(e) {
    (0, s.AZ)(e) &&
        (h.notifCenterItems = h.notifCenterItems.map((t) =>
            t.type === _.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? { ...t, disable_action: !0 }
                : t,
        ));
}
class O extends i.Ay.PersistedStore {
    static displayName = "NotificationCenterItemsStore";
    static persistKey = "NotificationCenterItemsStore_v2";
    initialize(e) {
        if ((this.waitFor(c.default, d.A, a.A), null != e)) {
            let t = e.notifCenterItems.map(function (e) {
                return { ...e, message: null != e.message ? new o.Ay(e.message) : void 0 };
            });
            t.length > 0 &&
                (h = { ...h, initialized: !0, isDataStale: !0, notifCenterItems: [], staleNotifCenterItems: t });
        }
    }
    getState() {
        function e(e) {
            return { ...e, message: null != e.message ? e.message.toJS() : void 0 };
        }
        return {
            ...h,
            notifCenterItems: h.notifCenterItems.map(e),
            staleNotifCenterItems: h.staleNotifCenterItems.map(e),
        };
    }
    get loading() {
        return h.loading;
    }
    get initialized() {
        return h.initialized;
    }
    get items() {
        return h.isDataStale ? h.staleNotifCenterItems : h.notifCenterItems;
    }
    get hasMore() {
        return h.paginationHasMore;
    }
    get cursor() {
        return h.paginationCursor;
    }
    get errored() {
        return h.errored;
    }
    get active() {
        return h.notifCenterActive;
    }
    get localItems() {
        return h.notifCenterLocalItems;
    }
    get tabFocused() {
        return h.notifCenterTabFocused;
    }
}
let L = new O(r.h, {
    CONNECTION_OPEN: function (e) {
        f();
        let t = [],
            n = new Set();
        e.relationships.forEach((e) => {
            let { id: i, type: r, since: a, is_spam_request: s, user_ignored: l, origin_application_id: o } = e;
            if ((l && n.add(i), r !== A.eA$.PENDING_INCOMING || s || l || null == a)) return null;
            let d = c.default.getUser(i);
            if (null == d) return null;
            t.push((0, E.Qi)(d, a, o));
        }),
            e.gameRelationships.forEach((e) => {
                let { type: i, id: r, application_id: a, since: s } = e;
                if (i !== A.eA$.PENDING_INCOMING || n.has(r)) return;
                let l = c.default.getUser(r);
                null != l && t.push((0, E.KS)(l, s, a));
            }),
            e.guilds.forEach((e) => {
                e.guild_scheduled_events.forEach((e) => {
                    R(e);
                });
            }),
            (h.notifCenterLocalItems = t);
    },
    LOGOUT: () => f(),
    NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
        let { ids: t } = e;
        g(t, !0);
    },
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function (e) {
        let { ids: t } = e;
        g(t, !1);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        R(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: m,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!h.notifCenterIds.has(t)) return !1;
        h.notifCenterIds.delete(t), (h.notifCenterItems = h.notifCenterItems.filter((e) => e.id !== t));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: m,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        h.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        (h.loading = !1), (h.initialized = !0), (h.errored = !0);
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: i } = e;
        h.loading &&
            ((h.loading = !1),
            (h.initialized = !0),
            (h.errored = !1),
            (h.isDataStale = !1),
            (null != i && h.notifCenterIds.has(i)) ||
                ((h.paginationHasMore = t.length > 0 && n), (h.paginationCursor = t.length > 0 ? i : void 0)),
            (h.notifCenterItems = [...h.notifCenterItems, ...t.map(T).filter((e) => !h.notifCenterIds.has(e.id))]),
            h.notifCenterItems.sort((e, t) => u.default.compare(t.id, e.id)),
            t.forEach((e) => h.notifCenterIds.add(e.id)));
    },
    RESET_NOTIFICATION_CENTER: () => p(),
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        h.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        h.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: C,
    RELATIONSHIP_UPDATE: C,
    RELATIONSHIP_REMOVE: function (e) {
        h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
            (t) =>
                !S(t, _.Uo.INCOMING_FRIEND_REQUESTS, e.relationship.id) &&
                !S(t, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id),
        );
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        let { gameRelationship: t } = e,
            { id: n, type: i, since: r, applicationId: a } = t;
        if (d.A.isBlockedOrIgnored(n)) return !1;
        if (i === A.eA$.PENDING_INCOMING) {
            let e = c.default.getUser(n);
            null != r && null != e && (h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, E.KS)(e, r, a)]);
        } else {
            if (i !== A.eA$.FRIEND) return !1;
            h.notifCenterLocalItems = h.notifCenterLocalItems.map((e) =>
                N(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n, a)
                    ? {
                          ...e,
                          acked: !0,
                          forceUnacked: !1,
                          local_id: `incoming_game_friend_requests_accepted_${n}_${e.id}`,
                          type: _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
                      }
                    : e,
            );
        }
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        let { userId: t, applicationId: n } = e;
        h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
            (e) =>
                !N(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) &&
                !N(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n),
        );
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        h.notifCenterItems = h.notifCenterItems
            .map((e) => (e.item_enum === t ? { ...e, completed: !0, acked: !0 } : e))
            .filter(I);
    },
    SET_RECENT_MENTIONS_FILTER: () => p(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, E._u)(t);
            void 0 === h.notifCenterLocalItems.find((t) => t.local_id === e.local_id) &&
                (h.notifCenterLocalItems = [...h.notifCenterLocalItems.filter((t) => t.type !== e.type), e]);
        }
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null == t) return;
        let n = new Set(t);
        h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
            (e) => null == e.applicationId || !n.has(e.applicationId),
        );
    },
});
