"use strict";
n.d(t, { A: () => j }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(49463),
    a = n(698441),
    o = n(141468),
    l = n(383233),
    u = n(994500),
    c = n(287809),
    d = n(661191),
    _ = n(322387),
    f = n(995273),
    p = n(652215);
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
function m(e) {
    return null != e.id && null != e.type;
}
function E() {
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
    E({ keepLocalItems: !0 });
}
function A() {
    h.loading = !0;
}
function I() {
    (h.loading = !1), (h.initialized = !0), (h.errored = !0);
}
function T(e) {
    return {
        ...e,
        kind: "notification-center-item",
        message: null != e.message ? (0, o.rh)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0,
    };
}
function S(e) {
    let { unknownApplicationIds: t } = e;
    if (null == t) return;
    let n = new Set(t);
    h.notifCenterLocalItems = h.notifCenterLocalItems.filter((e) => null == e.applicationId || !n.has(e.applicationId));
}
function y(e) {
    E();
    let t = [],
        n = new Set();
    e.relationships.forEach((e) => {
        let { id: r, type: i, since: s, is_spam_request: a, user_ignored: o, origin_application_id: l } = e;
        if ((o && n.add(r), i !== p.eA$.PENDING_INCOMING || a || o || null == s)) return null;
        let u = c.default.getUser(r);
        if (null == u) return null;
        t.push((0, f.Qi)(u, s, l));
    }),
        e.gameRelationships.forEach((e) => {
            let { type: r, id: i, application_id: s, since: a } = e;
            if (r !== p.eA$.PENDING_INCOMING || n.has(i)) return;
            let o = c.default.getUser(i);
            null != o && t.push((0, f.KS)(o, a, s));
        }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                V(e);
            });
        }),
        (h.notifCenterLocalItems = t);
}
function v(e) {
    let { items: t, hasMore: n, cursor: r } = e;
    h.loading &&
        ((h.loading = !1),
        (h.initialized = !0),
        (h.errored = !1),
        (h.isDataStale = !1),
        (null != r && h.notifCenterIds.has(r)) ||
            ((h.paginationHasMore = t.length > 0 && n), (h.paginationCursor = t.length > 0 ? r : void 0)),
        (h.notifCenterItems = [...h.notifCenterItems, ...t.map(T).filter((e) => !h.notifCenterIds.has(e.id))]),
        h.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)),
        t.forEach((e) => h.notifCenterIds.add(e.id)));
}
function N(e) {
    let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? T(e.item) : e.item;
    if (!h.initialized || !m(t) || h.notifCenterIds.has(t.id)) return !1;
    h.notifCenterIds.add(t.id),
        (h.notifCenterItems = [t, ...h.notifCenterItems]),
        h.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id));
}
function C(e) {
    let { id: t } = e;
    if (!h.notifCenterIds.has(t)) return !1;
    h.notifCenterIds.delete(t), (h.notifCenterItems = h.notifCenterItems.filter((e) => e.id !== t));
}
function b(e, t) {
    h.notifCenterItems = h.notifCenterItems.map((n) => (e.includes(n.id) ? { ...n, acked: t } : n)).filter(m);
}
function R(e) {
    let { ids: t } = e;
    b(t, !0);
}
function O(e) {
    let { ids: t } = e;
    b(t, !1);
}
function D(e) {
    let { active: t } = e;
    h.notifCenterActive = t;
}
function L(e) {
    let { focused: t } = e;
    h.notifCenterTabFocused = t;
}
function w(e, t, n) {
    return e.type === t && e.other_user?.id === n;
}
function x(e, t, n, r) {
    return w(e, t, n) && e.applicationId === r;
}
function M(e) {
    let { relationship: t } = e,
        { id: n, type: r, isSpamRequest: i, userIgnored: s, user: a, since: o, originApplicationId: l } = t;
    if (r === p.eA$.PENDING_INCOMING && !i && !s) {
        if (null == o) return null;
        if (null != a) {
            let e = c.default.getUser(a.id);
            null != e && (h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, f.Qi)(e, o, l)]);
        }
    }
    r !== p.eA$.FRIEND ||
        null == t.user ||
        s ||
        (h.notifCenterLocalItems = h.notifCenterLocalItems.map((e) =>
            w(e, _.Uo.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: `incoming_friend_requests_accepted_${a.id}_${e.id}`,
                      type: _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                  }
                : e,
        )),
        (r === p.eA$.BLOCKED || s) &&
            (h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
                (e) =>
                    !w(e, _.Uo.INCOMING_FRIEND_REQUESTS, n) &&
                    !w(e, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) &&
                    !w(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) &&
                    !w(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n),
            ));
}
function P(e) {
    h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
        (t) =>
            !w(t, _.Uo.INCOMING_FRIEND_REQUESTS, e.relationship.id) &&
            !w(t, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id),
    );
}
function k(e) {
    let { gameRelationship: t } = e,
        { id: n, type: r, since: i, applicationId: s } = t;
    if (u.A.isBlockedOrIgnored(n)) return !1;
    if (r === p.eA$.PENDING_INCOMING) {
        let e = c.default.getUser(n);
        null != i && null != e && (h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, f.KS)(e, i, s)]);
    } else {
        if (r !== p.eA$.FRIEND) return !1;
        h.notifCenterLocalItems = h.notifCenterLocalItems.map((e) =>
            x(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n, s)
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
}
function U(e) {
    let { userId: t, applicationId: n } = e;
    h.notifCenterLocalItems = h.notifCenterLocalItems.filter(
        (e) =>
            !x(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !x(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n),
    );
}
function G(e) {
    let { item_enum: t } = e;
    h.notifCenterItems = h.notifCenterItems
        .map((e) => (e.item_enum === t ? { ...e, completed: !0, acked: !0 } : e))
        .filter(m);
}
function F(e) {
    let { guildScheduledEvent: t } = e;
    V(t);
}
function V(e) {
    (0, a.AZ)(e) &&
        (h.notifCenterItems = h.notifCenterItems.map((t) =>
            t.type === _.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? { ...t, disable_action: !0 }
                : t,
        ));
}
function B(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, f._u)(t);
        void 0 === h.notifCenterLocalItems.find((t) => t.local_id === e.local_id) &&
            (h.notifCenterLocalItems = [...h.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class H extends r.Ay.PersistedStore {
    static displayName = "NotificationCenterItemsStore";
    static persistKey = "NotificationCenterItemsStore_v2";
    initialize(e) {
        if ((this.waitFor(c.default, u.A, s.A), null != e)) {
            let t = (e) => ({ ...e, message: null != e.message ? new l.Ay(e.message) : void 0 }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (h = { ...h, initialized: !0, isDataStale: !0, notifCenterItems: [], staleNotifCenterItems: n });
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
let j = new H(i.h, {
    CONNECTION_OPEN: y,
    LOGOUT: () => E(),
    NOTIFICATION_CENTER_ITEMS_ACK: R,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: O,
    GUILD_SCHEDULED_EVENT_UPDATE: F,
    NOTIFICATION_CENTER_ITEM_CREATE: N,
    NOTIFICATION_CENTER_ITEM_DELETE: C,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: N,
    LOAD_NOTIFICATION_CENTER_ITEMS: A,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: I,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: v,
    RESET_NOTIFICATION_CENTER: () => g(),
    NOTIFICATION_CENTER_SET_ACTIVE: D,
    NOTIFICATION_CENTER_TAB_FOCUSED: L,
    RELATIONSHIP_ADD: M,
    RELATIONSHIP_UPDATE: M,
    RELATIONSHIP_REMOVE: P,
    GAME_RELATIONSHIP_ADD: k,
    GAME_RELATIONSHIP_REMOVE: U,
    NOTIFICATION_CENTER_ITEM_COMPLETED: G,
    SET_RECENT_MENTIONS_FILTER: () => g(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: B,
    APPLICATIONS_FETCH_SUCCESS: S,
});
