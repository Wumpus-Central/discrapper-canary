"use strict";
n.d(t, { A: () => v }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(49463),
    a = n(698441),
    o = n(141468),
    l = n(383233),
    u = n(994500),
    d = n(287809),
    c = n(661191),
    _ = n(322387),
    f = n(995273),
    E = n(652215);
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
function p(e) {
    return null != e.id && null != e.type;
}
function m() {
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
function g() {
    m({ keepLocalItems: !0 });
}
function A(e) {
    return {
        ...e,
        kind: "notification-center-item",
        message: null != e.message ? (0, o.rh)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0,
    };
}
function I(e) {
    let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? A(e.item) : e.item;
    if (!h.initialized || !p(t) || h.notifCenterIds.has(t.id)) return !1;
    h.notifCenterIds.add(t.id),
        (h.notifCenterItems = [t, ...h.notifCenterItems]),
        h.notifCenterItems.sort((e, t) => c.default.compare(t.id, e.id));
}
function T(e, t) {
    h.notifCenterItems = h.notifCenterItems.map((n) => (e.includes(n.id) ? { ...n, acked: t } : n)).filter(p);
}
function S(e, t, n) {
    return e.type === t && e.other_user?.id === n;
}
function y(e, t, n, r) {
    return S(e, t, n) && e.applicationId === r;
}
function N(e) {
    let { relationship: t } = e,
        { id: n, type: r, isSpamRequest: i, userIgnored: s, user: a, since: o, originApplicationId: l } = t;
    if (r === E.eA$.PENDING_INCOMING && !i && !s) {
        if (null == o) return null;
        if (null != a) {
            let e = d.default.getUser(a.id);
            null != e && (h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, f.Qi)(e, o, l)]);
        }
    }
    r !== E.eA$.FRIEND ||
        null == t.user ||
        s ||
        (h.notifCenterLocalItems = h.notifCenterLocalItems.map((e) =>
            S(e, _.Uo.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: `incoming_friend_requests_accepted_${a.id}_${e.id}`,
                      type: _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                  }
                : e,
        )),
        (r === E.eA$.BLOCKED || s) &&
            (h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
                (e) =>
                    !S(e, _.Uo.INCOMING_FRIEND_REQUESTS, n) &&
                    !S(e, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) &&
                    !S(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) &&
                    !S(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n),
            ));
}
function O(e) {
    (0, a.AZ)(e) &&
        (h.notifCenterItems = h.notifCenterItems.map((t) =>
            t.type === _.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? { ...t, disable_action: !0 }
                : t,
        ));
}
class R extends r.Ay.PersistedStore {
    static displayName = "NotificationCenterItemsStore";
    static persistKey = "NotificationCenterItemsStore_v2";
    initialize(e) {
        if ((this.waitFor(d.default, u.A, s.A), null != e)) {
            let t = e.notifCenterItems.map((e) => ({
                ...e,
                message: null != e.message ? new l.Ay(e.message) : void 0,
            }));
            t.length > 0 &&
                (h = { ...h, initialized: !0, isDataStale: !0, notifCenterItems: [], staleNotifCenterItems: t });
        }
    }
    getState() {
        let e = (e) => ({ ...e, message: null != e.message ? e.message.toJS() : void 0 });
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
let v = new R(i.h, {
    CONNECTION_OPEN: function (e) {
        m();
        let t = [],
            n = new Set();
        e.relationships.forEach((e) => {
            let { id: r, type: i, since: s, is_spam_request: a, user_ignored: o, origin_application_id: l } = e;
            if ((o && n.add(r), i !== E.eA$.PENDING_INCOMING || a || o || null == s)) return null;
            let u = d.default.getUser(r);
            if (null == u) return null;
            t.push((0, f.Qi)(u, s, l));
        }),
            e.gameRelationships.forEach((e) => {
                let { type: r, id: i, application_id: s, since: a } = e;
                if (r !== E.eA$.PENDING_INCOMING || n.has(i)) return;
                let o = d.default.getUser(i);
                null != o && t.push((0, f.KS)(o, a, s));
            }),
            e.guilds.forEach((e) => {
                e.guild_scheduled_events.forEach((e) => {
                    O(e);
                });
            }),
            (h.notifCenterLocalItems = t);
    },
    LOGOUT: () => m(),
    NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
        let { ids: t } = e;
        T(t, !0);
    },
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function (e) {
        let { ids: t } = e;
        T(t, !1);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        O(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: I,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!h.notifCenterIds.has(t)) return !1;
        h.notifCenterIds.delete(t), (h.notifCenterItems = h.notifCenterItems.filter((e) => e.id !== t));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: I,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        h.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        (h.loading = !1), (h.initialized = !0), (h.errored = !0);
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: r } = e;
        h.loading &&
            ((h.loading = !1),
            (h.initialized = !0),
            (h.errored = !1),
            (h.isDataStale = !1),
            (null != r && h.notifCenterIds.has(r)) ||
                ((h.paginationHasMore = t.length > 0 && n), (h.paginationCursor = t.length > 0 ? r : void 0)),
            (h.notifCenterItems = [...h.notifCenterItems, ...t.map(A).filter((e) => !h.notifCenterIds.has(e.id))]),
            h.notifCenterItems.sort((e, t) => c.default.compare(t.id, e.id)),
            t.forEach((e) => h.notifCenterIds.add(e.id)));
    },
    RESET_NOTIFICATION_CENTER: () => g(),
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        h.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        h.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: N,
    RELATIONSHIP_UPDATE: N,
    RELATIONSHIP_REMOVE: function (e) {
        h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
            (t) =>
                !S(t, _.Uo.INCOMING_FRIEND_REQUESTS, e.relationship.id) &&
                !S(t, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id),
        );
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        let { gameRelationship: t } = e,
            { id: n, type: r, since: i, applicationId: s } = t;
        if (u.A.isBlockedOrIgnored(n)) return !1;
        if (r === E.eA$.PENDING_INCOMING) {
            let e = d.default.getUser(n);
            null != i && null != e && (h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, f.KS)(e, i, s)]);
        } else {
            if (r !== E.eA$.FRIEND) return !1;
            h.notifCenterLocalItems = h.notifCenterLocalItems.map((e) =>
                y(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n, s)
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
                !y(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) &&
                !y(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n),
        );
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        h.notifCenterItems = h.notifCenterItems
            .map((e) => (e.item_enum === t ? { ...e, completed: !0, acked: !0 } : e))
            .filter(p);
    },
    SET_RECENT_MENTIONS_FILTER: () => g(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, f._u)(t);
            void 0 === h.notifCenterLocalItems.find((t) => t.local_id === e.local_id) &&
                (h.notifCenterLocalItems = [...h.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
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
