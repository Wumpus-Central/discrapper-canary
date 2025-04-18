n.d(t, { Z: () => K }), n(388685), n(539854), n(642613);
var r,
    i = n(442837),
    a = n(570140),
    o = n(353926),
    s = n(924301),
    l = n(786761),
    c = n(23750),
    u = n(699516),
    d = n(594174),
    f = n(709054),
    _ = n(497089),
    p = n(178480),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = {
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
function v(e) {
    return null != e.id && null != e.type;
}
function O() {
    let { keepLocalItems: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    y = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: e ? y.notifCenterLocalItems : [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1
    };
}
function I() {
    O({ keepLocalItems: !0 });
}
function S() {
    y.loading = !0;
}
function T() {
    (y.loading = !1), (y.initialized = !0), (y.errored = !0);
}
function N(e) {
    return b(g({}, e), {
        kind: 'notification-center-item',
        message: null != e.message ? (0, l.e5)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0
    });
}
function A(e) {
    O();
    let t = [],
        n = new Set();
    e.relationships.forEach((e) => {
        let { type: r, user: i, since: a, is_spam_request: o, user_ignored: s, origin_application_id: l } = e;
        if (null == i || (s && n.add(i.id), r !== h.OGo.PENDING_INCOMING || o || s || null == a)) return null;
        let c = d.default.getUser(i.id);
        if (null == c) return null;
        t.push((0, p.mH)(c, a, l));
    }),
        e.gameRelationships.forEach((e) => {
            let { type: r, id: i, application_id: a, since: o } = e;
            if (r !== h.OGo.PENDING_INCOMING || n.has(i)) return;
            let s = d.default.getUser(i);
            null != s && t.push((0, p.LF)(s, o, a));
        }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                H(e);
            });
        }),
        (y.notifCenterLocalItems = t);
}
function C(e) {
    let { items: t, hasMore: n, cursor: r } = e;
    y.loading && ((y.loading = !1), (y.initialized = !0), (y.errored = !1), (y.isDataStale = !1), (null != r && y.notifCenterIds.has(r)) || ((y.paginationHasMore = t.length > 0 && n), (y.paginationCursor = t.length > 0 ? r : void 0)), (y.notifCenterItems = [...y.notifCenterItems, ...t.map(N).filter((e) => !y.notifCenterIds.has(e.id))]), y.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id)), t.forEach((e) => y.notifCenterIds.add(e.id)));
}
function R(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? N(e.item) : e.item;
    if (!y.initialized || !v(t) || y.notifCenterIds.has(t.id)) return !1;
    y.notifCenterIds.add(t.id), (y.notifCenterItems = [t, ...y.notifCenterItems]), y.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id));
}
function P(e) {
    let { id: t } = e;
    if (!y.notifCenterIds.has(t)) return !1;
    y.notifCenterIds.delete(t), (y.notifCenterItems = y.notifCenterItems.filter((e) => e.id !== t));
}
function w(e, t) {
    y.notifCenterItems = y.notifCenterItems.map((n) => (e.includes(n.id) ? b(g({}, n), { acked: t }) : n)).filter(v);
}
function D(e) {
    let { ids: t } = e;
    w(t, !0);
}
function L(e) {
    let { ids: t } = e;
    w(t, !1);
}
function x(e) {
    let { active: t } = e;
    y.notifCenterActive = t;
}
function M(e) {
    let { focused: t } = e;
    y.notifCenterTabFocused = t;
}
function k(e, t, n) {
    var r;
    return e.type === t && (null == (r = e.other_user) ? void 0 : r.id) === n;
}
function j(e, t, n, r) {
    return k(e, t, n) && e.applicationId === r;
}
function U(e) {
    let { relationship: t } = e,
        { id: n, type: r, isSpamRequest: i, userIgnored: a, user: o, since: s, originApplicationId: l } = t;
    if (r === h.OGo.PENDING_INCOMING && !i && !a) {
        if (null == s) return null;
        if (null != o) {
            let e = d.default.getUser(o.id);
            null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, p.mH)(e, s, l)]);
        }
    }
    r !== h.OGo.FRIEND ||
        null == t.user ||
        a ||
        (y.notifCenterLocalItems = y.notifCenterLocalItems.map((e) =>
            k(e, _.O7.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? b(g({}, e), {
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(o.id, '_').concat(e.id),
                      type: _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  })
                : e
        )),
        (r === h.OGo.BLOCKED || a) && (y.notifCenterLocalItems = y.notifCenterLocalItems.filter((e) => !k(e, _.O7.INCOMING_FRIEND_REQUESTS, n) && !k(e, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !k(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS, n) && !k(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)));
}
function G(e) {
    y.notifCenterLocalItems = y.notifCenterLocalItems.filter((t) => !k(t, _.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !k(t, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function B(e) {
    let { gameRelationship: t } = e,
        { id: n, type: r, since: i, applicationId: a } = t;
    if (u.Z.isBlockedOrIgnored(n)) return !1;
    if (r === h.OGo.PENDING_INCOMING) {
        let e = d.default.getUser(n);
        null != i && null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, p.LF)(e, i, a)]);
    } else {
        if (r !== h.OGo.FRIEND) return !1;
        y.notifCenterLocalItems = y.notifCenterLocalItems.map((e) =>
            j(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS, n, a)
                ? b(g({}, e), {
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_game_friend_requests_accepted_'.concat(n, '_').concat(e.id),
                      type: _.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED
                  })
                : e
        );
    }
}
function F(e) {
    let { userId: t, applicationId: n } = e;
    y.notifCenterLocalItems = y.notifCenterLocalItems.filter((e) => !j(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !j(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n));
}
function V(e) {
    let { item_enum: t } = e;
    y.notifCenterItems = y.notifCenterItems
        .map((e) =>
            e.item_enum === t
                ? b(g({}, e), {
                      completed: !0,
                      acked: !0
                  })
                : e
        )
        .filter(v);
}
function Z(e) {
    let { guildScheduledEvent: t } = e;
    H(t);
}
function H(e) {
    (0, s.Z2)(e) && (y.notifCenterItems = y.notifCenterItems.map((t) => (t.type === _.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? b(g({}, t), { disable_action: !0 }) : t)));
}
function W(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, p.hn)(t);
        void 0 === y.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (y.notifCenterLocalItems = [...y.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class Y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(d.default, u.Z, o.Z), null != e)) {
            let t = (e) => b(g({}, e), { message: null != e.message ? new c.ZP(e.message) : void 0 }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (y = b(g({}, y), {
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: n
                }));
        }
    }
    getState() {
        let e = (e) => b(g({}, e), { message: null != e.message ? e.message.toJS() : void 0 });
        return b(g({}, y), {
            notifCenterItems: y.notifCenterItems.map(e),
            staleNotifCenterItems: y.staleNotifCenterItems.map(e)
        });
    }
    get loading() {
        return y.loading;
    }
    get initialized() {
        return y.initialized;
    }
    get items() {
        return y.isDataStale ? y.staleNotifCenterItems : y.notifCenterItems;
    }
    get hasMore() {
        return y.paginationHasMore;
    }
    get cursor() {
        return y.paginationCursor;
    }
    get errored() {
        return y.errored;
    }
    get active() {
        return y.notifCenterActive;
    }
    get localItems() {
        return y.notifCenterLocalItems;
    }
    get tabFocused() {
        return y.notifCenterTabFocused;
    }
}
m(Y, 'displayName', 'NotificationCenterItemsStore'), m(Y, 'persistKey', 'NotificationCenterItemsStore_v2');
let K = new Y(a.Z, {
    CONNECTION_OPEN: A,
    LOGOUT: () => O(),
    NOTIFICATION_CENTER_ITEMS_ACK: D,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: L,
    GUILD_SCHEDULED_EVENT_UPDATE: Z,
    NOTIFICATION_CENTER_ITEM_CREATE: R,
    NOTIFICATION_CENTER_ITEM_DELETE: P,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: R,
    LOAD_NOTIFICATION_CENTER_ITEMS: S,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: T,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: C,
    RESET_NOTIFICATION_CENTER: () => I(),
    NOTIFICATION_CENTER_SET_ACTIVE: x,
    NOTIFICATION_CENTER_TAB_FOCUSED: M,
    RELATIONSHIP_ADD: U,
    RELATIONSHIP_UPDATE: U,
    RELATIONSHIP_REMOVE: G,
    GAME_RELATIONSHIP_ADD: B,
    GAME_RELATIONSHIP_REMOVE: F,
    NOTIFICATION_CENTER_ITEM_COMPLETED: V,
    SET_RECENT_MENTIONS_FILTER: () => I(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: W
});
