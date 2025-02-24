n.d(t, { Z: () => z }), n(47120), n(653041), n(230036);
var r,
    i = n(442837),
    o = n(570140),
    a = n(353926),
    s = n(372460),
    l = n(924301),
    c = n(786761),
    u = n(23750),
    d = n(699516),
    f = n(594174),
    p = n(709054),
    _ = n(497089),
    h = n(178480),
    m = n(981631);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
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
function O(e) {
    return null != e.id && null != e.type;
}
function S() {
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
    S({ keepLocalItems: !0 });
}
function T() {
    y.loading = !0;
}
function N() {
    (y.loading = !1), (y.initialized = !0), (y.errored = !0);
}
function A(e) {
    return b(E({}, e), {
        kind: 'notification-center-item',
        message: null != e.message ? (0, c.e5)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0
    });
}
function C(e) {
    S();
    let t = [],
        n = (0, s.r8)({ location: 'NotificationCenterItemsStore' }),
        r = new Set();
    e.relationships.forEach((e) => {
        let { type: i, user: o, since: a, is_spam_request: s, user_ignored: l, origin_application_id: c } = e;
        if (null == o || (l && r.add(o.id), i !== m.OGo.PENDING_INCOMING || s || l || null == a)) return null;
        let u = f.default.getUser(o.id);
        if (null == u) return null;
        let d = n ? c : void 0;
        t.push((0, h.mH)(u, a, d));
    }),
        n &&
            e.gameRelationships.forEach((e) => {
                let { type: n, id: i, application_id: o, since: a } = e;
                if (n !== m.OGo.PENDING_INCOMING || r.has(i)) return;
                let s = f.default.getUser(i);
                null != s && t.push((0, h.LF)(s, a, o));
            }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                W(e);
            });
        }),
        (y.notifCenterLocalItems = t);
}
function R(e) {
    let { items: t, hasMore: n, cursor: r } = e;
    y.loading && ((y.loading = !1), (y.initialized = !0), (y.errored = !1), (y.isDataStale = !1), (null != r && y.notifCenterIds.has(r)) || ((y.paginationHasMore = t.length > 0 && n), (y.paginationCursor = t.length > 0 ? r : void 0)), (y.notifCenterItems = [...y.notifCenterItems, ...t.map(A).filter((e) => !y.notifCenterIds.has(e.id))]), y.notifCenterItems.sort((e, t) => p.default.compare(t.id, e.id)), t.forEach((e) => y.notifCenterIds.add(e.id)));
}
function P(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? A(e.item) : e.item;
    if (!y.initialized || !O(t) || y.notifCenterIds.has(t.id)) return !1;
    y.notifCenterIds.add(t.id), (y.notifCenterItems = [t, ...y.notifCenterItems]), y.notifCenterItems.sort((e, t) => p.default.compare(t.id, e.id));
}
function w(e) {
    let { id: t } = e;
    if (!y.notifCenterIds.has(t)) return !1;
    y.notifCenterIds.delete(t), (y.notifCenterItems = y.notifCenterItems.filter((e) => e.id !== t));
}
function D(e, t) {
    y.notifCenterItems = y.notifCenterItems.map((n) => (e.includes(n.id) ? b(E({}, n), { acked: t }) : n)).filter(O);
}
function x(e) {
    let { ids: t } = e;
    D(t, !0);
}
function L(e) {
    let { ids: t } = e;
    D(t, !1);
}
function M(e) {
    let { active: t } = e;
    y.notifCenterActive = t;
}
function k(e) {
    let { focused: t } = e;
    y.notifCenterTabFocused = t;
}
function j(e, t, n) {
    var r;
    return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}
function U(e, t, n, r) {
    return j(e, t, n) && e.applicationId === r;
}
function G(e) {
    let { relationship: t } = e,
        { id: n, type: r, isSpamRequest: i, userIgnored: o, user: a, since: l, originApplicationId: c } = t;
    if (r === m.OGo.PENDING_INCOMING && !i && !o) {
        if (null == l) return null;
        if (null != a) {
            let e = (0, s.r8)({ location: 'NotificationCenterItemsStore' }) ? c : void 0,
                t = f.default.getUser(a.id);
            null != t && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, h.mH)(t, l, e)]);
        }
    }
    r !== m.OGo.FRIEND ||
        null == t.user ||
        o ||
        (y.notifCenterLocalItems = y.notifCenterLocalItems.map((e) =>
            j(e, _.O7.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? b(E({}, e), {
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(a.id, '_').concat(e.id),
                      type: _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  })
                : e
        )),
        (r === m.OGo.BLOCKED || o) && (y.notifCenterLocalItems = y.notifCenterLocalItems.filter((e) => !j(e, _.O7.INCOMING_FRIEND_REQUESTS, n) && !j(e, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !j(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS, n) && !j(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)));
}
function B(e) {
    y.notifCenterLocalItems = y.notifCenterLocalItems.filter((t) => !j(t, _.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !j(t, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function Z(e) {
    let { gameRelationship: t } = e;
    if (!(0, s.r8)({ location: 'NotificationCenterItemsStore' })) return !1;
    let { id: n, type: r, since: i, applicationId: o } = t;
    if (d.Z.isBlockedOrIgnored(n)) return !1;
    if (r === m.OGo.PENDING_INCOMING) {
        let e = f.default.getUser(n);
        null != i && null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, h.LF)(e, i, o)]);
    } else {
        if (r !== m.OGo.FRIEND) return !1;
        y.notifCenterLocalItems = y.notifCenterLocalItems.map((e) =>
            U(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS, n, o)
                ? b(E({}, e), {
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
    if (!(0, s.r8)({ location: 'NotificationCenterItemsStore' })) return !1;
    y.notifCenterLocalItems = y.notifCenterLocalItems.filter((e) => !U(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !U(e, _.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n));
}
function V(e) {
    let { item_enum: t } = e;
    y.notifCenterItems = y.notifCenterItems
        .map((e) =>
            e.item_enum === t
                ? b(E({}, e), {
                      completed: !0,
                      acked: !0
                  })
                : e
        )
        .filter(O);
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    W(t);
}
function W(e) {
    (0, l.Z2)(e) && (y.notifCenterItems = y.notifCenterItems.map((t) => (t.type === _.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? b(E({}, t), { disable_action: !0 }) : t)));
}
function Y(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, h.hn)(t);
        void 0 === y.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (y.notifCenterLocalItems = [...y.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class K extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(f.default, d.Z, a.Z), null != e)) {
            let t = (e) => b(E({}, e), { message: null != e.message ? new u.ZP(e.message) : void 0 }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (y = b(E({}, y), {
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: n
                }));
        }
    }
    getState() {
        let e = (e) => b(E({}, e), { message: null != e.message ? e.message.toJS() : void 0 });
        return b(E({}, y), {
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
g(K, 'displayName', 'NotificationCenterItemsStore'), g(K, 'persistKey', 'NotificationCenterItemsStore_v2');
let z = new K(o.Z, {
    CONNECTION_OPEN: C,
    LOGOUT: () => S(),
    NOTIFICATION_CENTER_ITEMS_ACK: x,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: L,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
    NOTIFICATION_CENTER_ITEM_CREATE: P,
    NOTIFICATION_CENTER_ITEM_DELETE: w,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: P,
    LOAD_NOTIFICATION_CENTER_ITEMS: T,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: N,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: R,
    RESET_NOTIFICATION_CENTER: () => I(),
    NOTIFICATION_CENTER_SET_ACTIVE: M,
    NOTIFICATION_CENTER_TAB_FOCUSED: k,
    RELATIONSHIP_ADD: G,
    RELATIONSHIP_UPDATE: G,
    RELATIONSHIP_REMOVE: B,
    GAME_RELATIONSHIP_ADD: Z,
    GAME_RELATIONSHIP_REMOVE: F,
    NOTIFICATION_CENTER_ITEM_COMPLETED: V,
    SET_RECENT_MENTIONS_FILTER: () => I(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: Y
});
