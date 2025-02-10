n.d(t, { Z: () => Z }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(924301),
    o = n(786761),
    l = n(922611),
    u = n(23750),
    c = n(594174),
    d = n(709054),
    f = n(497089),
    _ = n(178480),
    p = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
    notifCenterTabFocused: !1
};
function g(e) {
    return null != e.id && null != e.type;
}
function E() {
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
        notifCenterTabFocused: !1
    };
}
function v() {
    E({ keepLocalItems: !0 });
}
function y() {
    m.loading = !0;
}
function I() {
    (m.loading = !1), (m.initialized = !0), (m.errored = !0);
}
function T(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, o.e5)(e.message) : void 0
    };
}
function b(e) {
    E();
    let t = [];
    e.relationships.forEach((e) => {
        let { type: n, user: i, since: r, is_spam_request: a, user_ignored: s } = e;
        if (n !== p.OGo.PENDING_INCOMING || a || ((0, l.JX)({ location: 'notification-center' }) && s) || null == i || null == r) return null;
        let o = c.default.getUser(i.id);
        if (null == o) return null;
        t.push((0, _.mH)(o, r));
    }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                U(e);
            });
        }),
        (m.notifCenterLocalItems = t);
}
function S(e) {
    let { items: t, hasMore: n, cursor: i } = e;
    m.loading && ((m.loading = !1), (m.initialized = !0), (m.errored = !1), (m.isDataStale = !1), (null != i && m.notifCenterIds.has(i)) || ((m.paginationHasMore = t.length > 0 && n), (m.paginationCursor = t.length > 0 ? i : void 0)), (m.notifCenterItems = [...m.notifCenterItems, ...t.map(T).filter((e) => !m.notifCenterIds.has(e.id))]), m.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)), t.forEach((e) => m.notifCenterIds.add(e.id)));
}
function A(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? T(e.item) : e.item;
    if (!m.initialized || !g(t) || m.notifCenterIds.has(t.id)) return !1;
    m.notifCenterIds.add(t.id), (m.notifCenterItems = [t, ...m.notifCenterItems]), m.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id));
}
function N(e) {
    let { id: t } = e;
    if (!m.notifCenterIds.has(t)) return !1;
    m.notifCenterIds.delete(t), (m.notifCenterItems = m.notifCenterItems.filter((e) => e.id !== t));
}
function C(e, t) {
    m.notifCenterItems = m.notifCenterItems
        .map((n) =>
            e.includes(n.id)
                ? {
                      ...n,
                      acked: t
                  }
                : n
        )
        .filter(g);
}
function R(e) {
    let { ids: t } = e;
    C(t, !0);
}
function O(e) {
    let { ids: t } = e;
    C(t, !1);
}
function D(e) {
    let { active: t } = e;
    m.notifCenterActive = t;
}
function L(e) {
    let { focused: t } = e;
    m.notifCenterTabFocused = t;
}
function x(e, t, n) {
    var i;
    return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n;
}
function P(e) {
    let { relationship: t } = e,
        { id: n, type: i, isSpamRequest: r, userIgnored: a, user: s, since: o } = t;
    if (i === p.OGo.PENDING_INCOMING && !r && !((0, l.JX)({ location: 'notification-center' }) && a)) {
        if (null == o) return null;
        if (null != s) {
            let e = c.default.getUser(s.id);
            null != e && (m.notifCenterLocalItems = [...m.notifCenterLocalItems, (0, _.mH)(e, o)]);
        }
    }
    i !== p.OGo.FRIEND ||
        null == t.user ||
        a ||
        (m.notifCenterLocalItems = m.notifCenterLocalItems.map((e) =>
            x(e, f.O7.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(s.id, '_').concat(e.id),
                      type: f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  }
                : e
        )),
        (i === p.OGo.BLOCKED || a) && (m.notifCenterLocalItems = m.notifCenterLocalItems.filter((e) => !x(e, f.O7.INCOMING_FRIEND_REQUESTS, n) && !x(e, f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n)));
}
function w(e) {
    m.notifCenterLocalItems = m.notifCenterLocalItems.filter((t) => !x(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !x(t, f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function M(e) {
    let { item_enum: t } = e;
    m.notifCenterItems = m.notifCenterItems
        .map((e) =>
            e.item_enum === t
                ? {
                      ...e,
                      completed: !0,
                      acked: !0
                  }
                : e
        )
        .filter(g);
}
function k(e) {
    let { guildScheduledEvent: t } = e;
    U(t);
}
function U(e) {
    (0, s.Z2)(e) &&
        (m.notifCenterItems = m.notifCenterItems.map((t) =>
            t.type === f.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? {
                      ...t,
                      disable_action: !0
                  }
                : t
        ));
}
function G(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, _.hn)(t);
        void 0 === m.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (m.notifCenterLocalItems = [...m.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class B extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(c.default), null != e)) {
            let t = (e) => ({
                    ...e,
                    message: null != e.message ? new u.ZP(e.message) : void 0
                }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (m = {
                    ...m,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: n
                });
        }
    }
    getState() {
        let e = (e) => ({
            ...e,
            message: null != e.message ? e.message.toJS() : void 0
        });
        return {
            ...m,
            notifCenterItems: m.notifCenterItems.map(e),
            staleNotifCenterItems: m.staleNotifCenterItems.map(e)
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
h(B, 'displayName', 'NotificationCenterItemsStore'), h(B, 'persistKey', 'NotificationCenterItemsStore_v2');
let Z = new B(a.Z, {
    CONNECTION_OPEN: b,
    LOGOUT: () => E(),
    NOTIFICATION_CENTER_ITEMS_ACK: R,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: O,
    GUILD_SCHEDULED_EVENT_UPDATE: k,
    NOTIFICATION_CENTER_ITEM_CREATE: A,
    NOTIFICATION_CENTER_ITEM_DELETE: N,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: A,
    LOAD_NOTIFICATION_CENTER_ITEMS: y,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: I,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: S,
    RESET_NOTIFICATION_CENTER: () => v(),
    NOTIFICATION_CENTER_SET_ACTIVE: D,
    NOTIFICATION_CENTER_TAB_FOCUSED: L,
    RELATIONSHIP_ADD: P,
    RELATIONSHIP_UPDATE: P,
    RELATIONSHIP_REMOVE: w,
    NOTIFICATION_CENTER_ITEM_COMPLETED: M,
    SET_RECENT_MENTIONS_FILTER: () => v(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: G
});
