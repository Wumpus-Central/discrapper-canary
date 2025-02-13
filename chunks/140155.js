n.d(t, { Z: () => W }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(353926),
    o = n(372460),
    l = n(924301),
    u = n(786761),
    c = n(922611),
    d = n(23750),
    f = n(699516),
    _ = n(594174),
    p = n(709054),
    h = n(497089),
    m = n(178480),
    g = n(981631);
function E(e, t, n) {
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
let v = {
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
function y(e) {
    return null != e.id && null != e.type;
}
function I() {
    let { keepLocalItems: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    v = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: e ? v.notifCenterLocalItems : [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1
    };
}
function T() {
    I({ keepLocalItems: !0 });
}
function b() {
    v.loading = !0;
}
function S() {
    (v.loading = !1), (v.initialized = !0), (v.errored = !0);
}
function A(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, u.e5)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0
    };
}
function N(e) {
    I();
    let t = [],
        n = (0, o.r8)({ location: 'NotificationCenterItemsStore' }),
        i = (0, c.JX)({ location: 'notification-center' }),
        r = new Set();
    e.relationships.forEach((e) => {
        let { type: a, user: s, since: o, is_spam_request: l, user_ignored: u, origin_application_id: c } = e,
            d = i && u;
        if ((d && null != s && r.add(s.id), a !== g.OGo.PENDING_INCOMING || l || d || null == s || null == o)) return null;
        let f = _.default.getUser(s.id);
        if (null == f) return null;
        let p = n ? c : void 0;
        t.push((0, m.mH)(f, o, p));
    }),
        n &&
            e.gameRelationships.forEach((e) => {
                let { type: n, id: i, application_id: a, since: s } = e;
                if (null == i || r.has(i) || null == s || n !== g.OGo.PENDING_INCOMING) return;
                let o = _.default.getUser(i);
                null != o && t.push((0, m.LF)(o, s, a));
            }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                j(e);
            });
        }),
        (v.notifCenterLocalItems = t);
}
function C(e) {
    let { items: t, hasMore: n, cursor: i } = e;
    v.loading && ((v.loading = !1), (v.initialized = !0), (v.errored = !1), (v.isDataStale = !1), (null != i && v.notifCenterIds.has(i)) || ((v.paginationHasMore = t.length > 0 && n), (v.paginationCursor = t.length > 0 ? i : void 0)), (v.notifCenterItems = [...v.notifCenterItems, ...t.map(A).filter((e) => !v.notifCenterIds.has(e.id))]), v.notifCenterItems.sort((e, t) => p.default.compare(t.id, e.id)), t.forEach((e) => v.notifCenterIds.add(e.id)));
}
function R(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? A(e.item) : e.item;
    if (!v.initialized || !y(t) || v.notifCenterIds.has(t.id)) return !1;
    v.notifCenterIds.add(t.id), (v.notifCenterItems = [t, ...v.notifCenterItems]), v.notifCenterItems.sort((e, t) => p.default.compare(t.id, e.id));
}
function O(e) {
    let { id: t } = e;
    if (!v.notifCenterIds.has(t)) return !1;
    v.notifCenterIds.delete(t), (v.notifCenterItems = v.notifCenterItems.filter((e) => e.id !== t));
}
function D(e, t) {
    v.notifCenterItems = v.notifCenterItems
        .map((n) =>
            e.includes(n.id)
                ? {
                      ...n,
                      acked: t
                  }
                : n
        )
        .filter(y);
}
function L(e) {
    let { ids: t } = e;
    D(t, !0);
}
function x(e) {
    let { ids: t } = e;
    D(t, !1);
}
function P(e) {
    let { active: t } = e;
    v.notifCenterActive = t;
}
function w(e) {
    let { focused: t } = e;
    v.notifCenterTabFocused = t;
}
function M(e, t, n) {
    var i;
    return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n;
}
function k(e, t, n, i) {
    return M(e, t, n) && e.applicationId === i;
}
function U(e) {
    let { relationship: t } = e,
        { id: n, type: i, isSpamRequest: r, userIgnored: a, user: s, since: l, originApplicationId: u } = t;
    if (i === g.OGo.PENDING_INCOMING && !r && !((0, c.JX)({ location: 'notification-center' }) && a)) {
        if (null == l) return null;
        if (null != s) {
            let e = (0, o.r8)({ location: 'NotificationCenterItemsStore' }) ? u : void 0,
                t = _.default.getUser(s.id);
            null != t && (v.notifCenterLocalItems = [...v.notifCenterLocalItems, (0, m.mH)(t, l, e)]);
        }
    }
    i !== g.OGo.FRIEND ||
        null == t.user ||
        a ||
        (v.notifCenterLocalItems = v.notifCenterLocalItems.map((e) =>
            M(e, h.O7.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(s.id, '_').concat(e.id),
                      type: h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  }
                : e
        )),
        (i === g.OGo.BLOCKED || a) && (v.notifCenterLocalItems = v.notifCenterLocalItems.filter((e) => !M(e, h.O7.INCOMING_FRIEND_REQUESTS, n) && !M(e, h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !M(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS, n) && !M(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)));
}
function G(e) {
    v.notifCenterLocalItems = v.notifCenterLocalItems.filter((t) => !M(t, h.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !M(t, h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function B(e) {
    let { gameRelationship: t } = e;
    if (!(0, o.r8)({ location: 'NotificationCenterItemsStore' })) return !1;
    let { id: n, type: i, since: r, applicationId: a } = t;
    if (f.Z.isBlockedOrIgnored(n)) return !1;
    if (i === g.OGo.PENDING_INCOMING) {
        let e = _.default.getUser(n);
        if (null != r && null != e) return (v.notifCenterLocalItems = [...v.notifCenterLocalItems, (0, m.LF)(e, r, a)]), !0;
    }
    return (
        i === g.OGo.FRIEND &&
        ((v.notifCenterLocalItems = v.notifCenterLocalItems.map((e) =>
            k(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS, n, a)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_game_friend_requests_accepted_'.concat(n, '_').concat(e.id),
                      type: h.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED
                  }
                : e
        )),
        !0)
    );
}
function Z(e) {
    let { userId: t, applicationId: n } = e;
    if (!(0, o.r8)({ location: 'NotificationCenterItemsStore' })) return !1;
    v.notifCenterLocalItems = v.notifCenterLocalItems.filter((e) => !k(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !k(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n));
}
function F(e) {
    let { item_enum: t } = e;
    v.notifCenterItems = v.notifCenterItems
        .map((e) =>
            e.item_enum === t
                ? {
                      ...e,
                      completed: !0,
                      acked: !0
                  }
                : e
        )
        .filter(y);
}
function V(e) {
    let { guildScheduledEvent: t } = e;
    j(t);
}
function j(e) {
    (0, l.Z2)(e) &&
        (v.notifCenterItems = v.notifCenterItems.map((t) =>
            t.type === h.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? {
                      ...t,
                      disable_action: !0
                  }
                : t
        ));
}
function H(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, m.hn)(t);
        void 0 === v.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (v.notifCenterLocalItems = [...v.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class Y extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(_.default, f.Z, s.Z), null != e)) {
            let t = (e) => ({
                    ...e,
                    message: null != e.message ? new d.ZP(e.message) : void 0
                }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (v = {
                    ...v,
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
            ...v,
            notifCenterItems: v.notifCenterItems.map(e),
            staleNotifCenterItems: v.staleNotifCenterItems.map(e)
        };
    }
    get loading() {
        return v.loading;
    }
    get initialized() {
        return v.initialized;
    }
    get items() {
        return v.isDataStale ? v.staleNotifCenterItems : v.notifCenterItems;
    }
    get hasMore() {
        return v.paginationHasMore;
    }
    get cursor() {
        return v.paginationCursor;
    }
    get errored() {
        return v.errored;
    }
    get active() {
        return v.notifCenterActive;
    }
    get localItems() {
        return v.notifCenterLocalItems;
    }
    get tabFocused() {
        return v.notifCenterTabFocused;
    }
}
E(Y, 'displayName', 'NotificationCenterItemsStore'), E(Y, 'persistKey', 'NotificationCenterItemsStore_v2');
let W = new Y(a.Z, {
    CONNECTION_OPEN: N,
    LOGOUT: () => I(),
    NOTIFICATION_CENTER_ITEMS_ACK: L,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: x,
    GUILD_SCHEDULED_EVENT_UPDATE: V,
    NOTIFICATION_CENTER_ITEM_CREATE: R,
    NOTIFICATION_CENTER_ITEM_DELETE: O,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: R,
    LOAD_NOTIFICATION_CENTER_ITEMS: b,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: S,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: C,
    RESET_NOTIFICATION_CENTER: () => T(),
    NOTIFICATION_CENTER_SET_ACTIVE: P,
    NOTIFICATION_CENTER_TAB_FOCUSED: w,
    RELATIONSHIP_ADD: U,
    RELATIONSHIP_UPDATE: U,
    RELATIONSHIP_REMOVE: G,
    GAME_RELATIONSHIP_ADD: B,
    GAME_RELATIONSHIP_REMOVE: Z,
    NOTIFICATION_CENTER_ITEM_COMPLETED: F,
    SET_RECENT_MENTIONS_FILTER: () => T(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: H
});
