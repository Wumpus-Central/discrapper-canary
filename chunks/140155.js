n.d(t, { Z: () => q }), n(47120), n(653041), n(230036);
var r,
    i = n(442837),
    o = n(570140),
    a = n(353926),
    s = n(372460),
    l = n(924301),
    c = n(786761),
    u = n(922611),
    d = n(23750),
    f = n(699516),
    p = n(594174),
    _ = n(709054),
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
function v(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
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
function S(e) {
    return null != e.id && null != e.type;
}
function I() {
    let { keepLocalItems: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    O = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: e ? O.notifCenterLocalItems : [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1
    };
}
function T() {
    I({ keepLocalItems: !0 });
}
function N() {
    O.loading = !0;
}
function A() {
    (O.loading = !1), (O.initialized = !0), (O.errored = !0);
}
function C(e) {
    return y(v({}, e), {
        kind: 'notification-center-item',
        message: null != e.message ? (0, c.e5)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0
    });
}
function R(e) {
    I();
    let t = [],
        n = (0, s.r8)({ location: 'NotificationCenterItemsStore' }),
        r = (0, u.JX)({ location: 'notification-center' }),
        i = new Set();
    e.relationships.forEach((e) => {
        let { type: o, user: a, since: s, is_spam_request: l, user_ignored: c, origin_application_id: u } = e;
        if (null == a) return null;
        let d = r && c;
        if ((d && i.add(a.id), o !== g.OGo.PENDING_INCOMING || l || d || null == s)) return null;
        let f = p.default.getUser(a.id);
        if (null == f) return null;
        let _ = n ? u : void 0;
        t.push((0, m.mH)(f, s, _));
    }),
        n &&
            e.gameRelationships.forEach((e) => {
                let { type: n, id: r, application_id: o, since: a } = e;
                if (n !== g.OGo.PENDING_INCOMING || i.has(r)) return;
                let s = p.default.getUser(r);
                null != s && t.push((0, m.LF)(s, a, o));
            }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                Y(e);
            });
        }),
        (O.notifCenterLocalItems = t);
}
function P(e) {
    let { items: t, hasMore: n, cursor: r } = e;
    O.loading && ((O.loading = !1), (O.initialized = !0), (O.errored = !1), (O.isDataStale = !1), (null != r && O.notifCenterIds.has(r)) || ((O.paginationHasMore = t.length > 0 && n), (O.paginationCursor = t.length > 0 ? r : void 0)), (O.notifCenterItems = [...O.notifCenterItems, ...t.map(C).filter((e) => !O.notifCenterIds.has(e.id))]), O.notifCenterItems.sort((e, t) => _.default.compare(t.id, e.id)), t.forEach((e) => O.notifCenterIds.add(e.id)));
}
function w(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? C(e.item) : e.item;
    if (!O.initialized || !S(t) || O.notifCenterIds.has(t.id)) return !1;
    O.notifCenterIds.add(t.id), (O.notifCenterItems = [t, ...O.notifCenterItems]), O.notifCenterItems.sort((e, t) => _.default.compare(t.id, e.id));
}
function D(e) {
    let { id: t } = e;
    if (!O.notifCenterIds.has(t)) return !1;
    O.notifCenterIds.delete(t), (O.notifCenterItems = O.notifCenterItems.filter((e) => e.id !== t));
}
function x(e, t) {
    O.notifCenterItems = O.notifCenterItems.map((n) => (e.includes(n.id) ? y(v({}, n), { acked: t }) : n)).filter(S);
}
function L(e) {
    let { ids: t } = e;
    x(t, !0);
}
function M(e) {
    let { ids: t } = e;
    x(t, !1);
}
function k(e) {
    let { active: t } = e;
    O.notifCenterActive = t;
}
function j(e) {
    let { focused: t } = e;
    O.notifCenterTabFocused = t;
}
function U(e, t, n) {
    var r;
    return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}
function G(e, t, n, r) {
    return U(e, t, n) && e.applicationId === r;
}
function B(e) {
    let { relationship: t } = e,
        { id: n, type: r, isSpamRequest: i, userIgnored: o, user: a, since: l, originApplicationId: c } = t;
    if (r === g.OGo.PENDING_INCOMING && !i && !((0, u.JX)({ location: 'notification-center' }) && o)) {
        if (null == l) return null;
        if (null != a) {
            let e = (0, s.r8)({ location: 'NotificationCenterItemsStore' }) ? c : void 0,
                t = p.default.getUser(a.id);
            null != t && (O.notifCenterLocalItems = [...O.notifCenterLocalItems, (0, m.mH)(t, l, e)]);
        }
    }
    r !== g.OGo.FRIEND ||
        null == t.user ||
        o ||
        (O.notifCenterLocalItems = O.notifCenterLocalItems.map((e) =>
            U(e, h.O7.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? y(v({}, e), {
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(a.id, '_').concat(e.id),
                      type: h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  })
                : e
        )),
        (r === g.OGo.BLOCKED || o) && (O.notifCenterLocalItems = O.notifCenterLocalItems.filter((e) => !U(e, h.O7.INCOMING_FRIEND_REQUESTS, n) && !U(e, h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !U(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS, n) && !U(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)));
}
function Z(e) {
    O.notifCenterLocalItems = O.notifCenterLocalItems.filter((t) => !U(t, h.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !U(t, h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function F(e) {
    let { gameRelationship: t } = e;
    if (!(0, s.r8)({ location: 'NotificationCenterItemsStore' })) return !1;
    let { id: n, type: r, since: i, applicationId: o } = t;
    if (f.Z.isBlockedOrIgnored(n)) return !1;
    if (r === g.OGo.PENDING_INCOMING) {
        let e = p.default.getUser(n);
        null != i && null != e && (O.notifCenterLocalItems = [...O.notifCenterLocalItems, (0, m.LF)(e, i, o)]);
    } else {
        if (r !== g.OGo.FRIEND) return !1;
        O.notifCenterLocalItems = O.notifCenterLocalItems.map((e) =>
            G(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS, n, o)
                ? y(v({}, e), {
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_game_friend_requests_accepted_'.concat(n, '_').concat(e.id),
                      type: h.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED
                  })
                : e
        );
    }
}
function V(e) {
    let { userId: t, applicationId: n } = e;
    if (!(0, s.r8)({ location: 'NotificationCenterItemsStore' })) return !1;
    O.notifCenterLocalItems = O.notifCenterLocalItems.filter((e) => !G(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !G(e, h.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n));
}
function H(e) {
    let { item_enum: t } = e;
    O.notifCenterItems = O.notifCenterItems
        .map((e) =>
            e.item_enum === t
                ? y(v({}, e), {
                      completed: !0,
                      acked: !0
                  })
                : e
        )
        .filter(S);
}
function W(e) {
    let { guildScheduledEvent: t } = e;
    Y(t);
}
function Y(e) {
    (0, l.Z2)(e) && (O.notifCenterItems = O.notifCenterItems.map((t) => (t.type === h.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? y(v({}, t), { disable_action: !0 }) : t)));
}
function K(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, m.hn)(t);
        void 0 === O.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (O.notifCenterLocalItems = [...O.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class z extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(p.default, f.Z, a.Z), null != e)) {
            let t = (e) => y(v({}, e), { message: null != e.message ? new d.ZP(e.message) : void 0 }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (O = y(v({}, O), {
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: n
                }));
        }
    }
    getState() {
        let e = (e) => y(v({}, e), { message: null != e.message ? e.message.toJS() : void 0 });
        return y(v({}, O), {
            notifCenterItems: O.notifCenterItems.map(e),
            staleNotifCenterItems: O.staleNotifCenterItems.map(e)
        });
    }
    get loading() {
        return O.loading;
    }
    get initialized() {
        return O.initialized;
    }
    get items() {
        return O.isDataStale ? O.staleNotifCenterItems : O.notifCenterItems;
    }
    get hasMore() {
        return O.paginationHasMore;
    }
    get cursor() {
        return O.paginationCursor;
    }
    get errored() {
        return O.errored;
    }
    get active() {
        return O.notifCenterActive;
    }
    get localItems() {
        return O.notifCenterLocalItems;
    }
    get tabFocused() {
        return O.notifCenterTabFocused;
    }
}
E(z, 'displayName', 'NotificationCenterItemsStore'), E(z, 'persistKey', 'NotificationCenterItemsStore_v2');
let q = new z(o.Z, {
    CONNECTION_OPEN: R,
    LOGOUT: () => I(),
    NOTIFICATION_CENTER_ITEMS_ACK: L,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: M,
    GUILD_SCHEDULED_EVENT_UPDATE: W,
    NOTIFICATION_CENTER_ITEM_CREATE: w,
    NOTIFICATION_CENTER_ITEM_DELETE: D,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: w,
    LOAD_NOTIFICATION_CENTER_ITEMS: N,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: A,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: P,
    RESET_NOTIFICATION_CENTER: () => T(),
    NOTIFICATION_CENTER_SET_ACTIVE: k,
    NOTIFICATION_CENTER_TAB_FOCUSED: j,
    RELATIONSHIP_ADD: B,
    RELATIONSHIP_UPDATE: B,
    RELATIONSHIP_REMOVE: Z,
    GAME_RELATIONSHIP_ADD: F,
    GAME_RELATIONSHIP_REMOVE: V,
    NOTIFICATION_CENTER_ITEM_COMPLETED: H,
    SET_RECENT_MENTIONS_FILTER: () => T(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: K
});
