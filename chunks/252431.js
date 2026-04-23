"use strict";
n.d(t, { A: () => y }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(698441),
    o = n(320095),
    l = n(383233),
    d = n(994500),
    _ = n(287809),
    u = n(935208),
    c = n(322387),
    E = n(995273),
    h = n(652215);
let m = {
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
function f(e) {
    return null != e.id && null != e.type;
}
function g() {
    let { keepLocalItems: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    m = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: e ? m.notifCenterLocalItems : [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1,
    };
}
function p() {
    g({ keepLocalItems: !0 });
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
    if (!m.initialized || !f(t) || m.notifCenterIds.has(t.id)) return !1;
    m.notifCenterIds.add(t.id),
        (m.notifCenterItems = [t, ...m.notifCenterItems]),
        m.notifCenterItems.sort((e, t) => u.default.compare(t.id, e.id));
}
function T(e, t) {
    m.notifCenterItems = m.notifCenterItems.map((n) => (e.includes(n.id) ? { ...n, acked: t } : n)).filter(f);
}
function S(e, t, n) {
    return e.type === t && e.other_user?.id === n;
}
function N(e, t, n, i) {
    return S(e, t, n) && e.applicationId === i;
}
function C(e) {
    let { relationship: t } = e,
        { id: n, type: i, isSpamRequest: r, userIgnored: s, user: a, since: o, originApplicationId: l } = t;
    if (i === h.eA$.PENDING_INCOMING && !r && !s) {
        if (null == o) return null;
        if (null != a) {
            let e = _.default.getUser(a.id);
            null != e && (m.notifCenterLocalItems = [...m.notifCenterLocalItems, (0, E.Qi)(e, o, l)]);
        }
    }
    i !== h.eA$.FRIEND ||
        null == t.user ||
        s ||
        (m.notifCenterLocalItems = m.notifCenterLocalItems.map((e) =>
            S(e, c.Uo.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: `incoming_friend_requests_accepted_${a.id}_${e.id}`,
                      type: c.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                  }
                : e,
        )),
        (i === h.eA$.BLOCKED || s) &&
            (m.notifCenterLocalItems = m.notifCenterLocalItems.filter(
                (e) =>
                    !S(e, c.Uo.INCOMING_FRIEND_REQUESTS, n) &&
                    !S(e, c.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) &&
                    !S(e, c.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) &&
                    !S(e, c.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n),
            ));
}
function R(e) {
    (0, a.AZ)(e) &&
        (m.notifCenterItems = m.notifCenterItems.map((t) =>
            t.type === c.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? { ...t, disable_action: !0 }
                : t,
        ));
}
class O extends i.Ay.PersistedStore {
    static displayName = "NotificationCenterItemsStore";
    static persistKey = "NotificationCenterItemsStore_v2";
    initialize(e) {
        if ((this.waitFor(_.default, d.A, s.A), null != e)) {
            let t = e.notifCenterItems.map((e) => ({
                ...e,
                message: null != e.message ? new l.Ay(e.message) : void 0,
            }));
            t.length > 0 &&
                (m = { ...m, initialized: !0, isDataStale: !0, notifCenterItems: [], staleNotifCenterItems: t });
        }
    }
    getState() {
        let e = (e) => ({ ...e, message: null != e.message ? e.message.toJS() : void 0 });
        return {
            ...m,
            notifCenterItems: m.notifCenterItems.map(e),
            staleNotifCenterItems: m.staleNotifCenterItems.map(e),
        };
    }
    get loading() {
        return m.loading;
    }
    get initialized() {
        return m.initialized;
    }
    get items() {
        return m.isDataStale ? m.staleNotifCenterItems : m.notifCenterItems;
    }
    get hasMore() {
        return m.paginationHasMore;
    }
    get cursor() {
        return m.paginationCursor;
    }
    get errored() {
        return m.errored;
    }
    get active() {
        return m.notifCenterActive;
    }
    get localItems() {
        return m.notifCenterLocalItems;
    }
    get tabFocused() {
        return m.notifCenterTabFocused;
    }
}
let y = new O(r.h, {
    CONNECTION_OPEN: function (e) {
        g();
        let t = [],
            n = new Set();
        e.relationships.forEach((e) => {
            let { id: i, type: r, since: s, is_spam_request: a, user_ignored: o, origin_application_id: l } = e;
            if ((o && n.add(i), r !== h.eA$.PENDING_INCOMING || a || o || null == s)) return null;
            let d = _.default.getUser(i);
            if (null == d) return null;
            t.push((0, E.Qi)(d, s, l));
        }),
            e.gameRelationships.forEach((e) => {
                let { type: i, id: r, application_id: s, since: a } = e;
                if (i !== h.eA$.PENDING_INCOMING || n.has(r)) return;
                let o = _.default.getUser(r);
                null != o && t.push((0, E.KS)(o, a, s));
            }),
            e.guilds.forEach((e) => {
                e.guild_scheduled_events.forEach((e) => {
                    R(e);
                });
            }),
            (m.notifCenterLocalItems = t);
    },
    LOGOUT: () => g(),
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
        R(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: I,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!m.notifCenterIds.has(t)) return !1;
        m.notifCenterIds.delete(t), (m.notifCenterItems = m.notifCenterItems.filter((e) => e.id !== t));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: I,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        m.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        (m.loading = !1), (m.initialized = !0), (m.errored = !0);
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: i } = e;
        m.loading &&
            ((m.loading = !1),
            (m.initialized = !0),
            (m.errored = !1),
            (m.isDataStale = !1),
            (null != i && m.notifCenterIds.has(i)) ||
                ((m.paginationHasMore = t.length > 0 && n), (m.paginationCursor = t.length > 0 ? i : void 0)),
            (m.notifCenterItems = [...m.notifCenterItems, ...t.map(A).filter((e) => !m.notifCenterIds.has(e.id))]),
            m.notifCenterItems.sort((e, t) => u.default.compare(t.id, e.id)),
            t.forEach((e) => m.notifCenterIds.add(e.id)));
    },
    RESET_NOTIFICATION_CENTER: () => p(),
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        m.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        m.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: C,
    RELATIONSHIP_UPDATE: C,
    RELATIONSHIP_REMOVE: function (e) {
        m.notifCenterLocalItems = m.notifCenterLocalItems.filter(
            (t) =>
                !S(t, c.Uo.INCOMING_FRIEND_REQUESTS, e.relationship.id) &&
                !S(t, c.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id),
        );
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        let { gameRelationship: t } = e,
            { id: n, type: i, since: r, applicationId: s } = t;
        if (d.A.isBlockedOrIgnored(n)) return !1;
        if (i === h.eA$.PENDING_INCOMING) {
            let e = _.default.getUser(n);
            null != r && null != e && (m.notifCenterLocalItems = [...m.notifCenterLocalItems, (0, E.KS)(e, r, s)]);
        } else {
            if (i !== h.eA$.FRIEND) return !1;
            m.notifCenterLocalItems = m.notifCenterLocalItems.map((e) =>
                N(e, c.Uo.INCOMING_GAME_FRIEND_REQUESTS, n, s)
                    ? {
                          ...e,
                          acked: !0,
                          forceUnacked: !1,
                          local_id: `incoming_game_friend_requests_accepted_${n}_${e.id}`,
                          type: c.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
                      }
                    : e,
            );
        }
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        let { userId: t, applicationId: n } = e;
        m.notifCenterLocalItems = m.notifCenterLocalItems.filter(
            (e) =>
                !N(e, c.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) &&
                !N(e, c.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n),
        );
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        m.notifCenterItems = m.notifCenterItems
            .map((e) => (e.item_enum === t ? { ...e, completed: !0, acked: !0 } : e))
            .filter(f);
    },
    SET_RECENT_MENTIONS_FILTER: () => p(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, E._u)(t);
            void 0 === m.notifCenterLocalItems.find((t) => t.local_id === e.local_id) &&
                (m.notifCenterLocalItems = [...m.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
        }
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null == t) return;
        let n = new Set(t);
        m.notifCenterLocalItems = m.notifCenterLocalItems.filter(
            (e) => null == e.applicationId || !n.has(e.applicationId),
        );
    },
});
