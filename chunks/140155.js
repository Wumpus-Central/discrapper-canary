var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(570140),
    u = r(924301),
    c = r(786761),
    d = r(922611),
    f = r(23750),
    _ = r(594174),
    h = r(709054),
    p = r(497089),
    m = r(178480),
    g = r(981631);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
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
function I(e) {
    return null != e.id && null != e.type;
}
function T() {
    v = {
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
}
function b() {
    v.loading = !0;
}
function y() {
    (v.loading = !1), (v.initialized = !0), (v.errored = !0);
}
function S(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, c.e5)(e.message) : void 0
    };
}
function A(e) {
    T();
    let n = [];
    e.relationships.forEach((e) => {
        let { type: r, user: i, since: a, is_spam_request: s, user_ignored: o } = e;
        if (r !== g.OGo.PENDING_INCOMING || s || ((0, d.JX)({ location: 'notification-center' }) && o) || null == i || null == a) return null;
        let l = _.default.getUser(i.id);
        if (null == l) return null;
        n.push((0, m.mH)(l, a));
    }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                G(e);
            });
        }),
        (v.notifCenterLocalItems = n);
}
function N(e) {
    let { items: n, hasMore: r, cursor: i } = e;
    if (!!v.loading) (v.loading = !1), (v.initialized = !0), (v.errored = !1), (v.isDataStale = !1), (null == i || !v.notifCenterIds.has(i)) && ((v.paginationHasMore = n.length > 0 && r), (v.paginationCursor = n.length > 0 ? i : void 0)), (v.notifCenterItems = [...v.notifCenterItems, ...n.map(S).filter((e) => !v.notifCenterIds.has(e.id))]), v.notifCenterItems.sort((e, n) => h.default.compare(n.id, e.id)), n.forEach((e) => v.notifCenterIds.add(e.id));
}
function C(e) {
    let n = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? S(e.item) : e.item;
    if (!v.initialized || !I(n) || v.notifCenterIds.has(n.id)) return !1;
    v.notifCenterIds.add(n.id), (v.notifCenterItems = [n, ...v.notifCenterItems]), v.notifCenterItems.sort((e, n) => h.default.compare(n.id, e.id));
}
function R(e) {
    let { id: n } = e;
    if (!v.notifCenterIds.has(n)) return !1;
    v.notifCenterIds.delete(n), (v.notifCenterItems = v.notifCenterItems.filter((e) => e.id !== n));
}
function O(e, n) {
    v.notifCenterItems = v.notifCenterItems
        .map((r) =>
            e.includes(r.id)
                ? {
                      ...r,
                      acked: n
                  }
                : r
        )
        .filter(I);
}
function D(e) {
    let { ids: n } = e;
    O(n, !0);
}
function L(e) {
    let { ids: n } = e;
    O(n, !1);
}
function x(e) {
    let { active: n } = e;
    v.notifCenterActive = n;
}
function w(e) {
    let { focused: n } = e;
    v.notifCenterTabFocused = n;
}
function P(e, n, r) {
    var i;
    return e.type === n && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === r;
}
function M(e) {
    let { relationship: n } = e,
        { id: r, type: i, isSpamRequest: a, userIgnored: s, user: o, since: l } = n;
    if (i === g.OGo.PENDING_INCOMING && !a && !((0, d.JX)({ location: 'notification-center' }) && s)) {
        if (null == l) return null;
        if (null != o) {
            let e = _.default.getUser(o.id);
            null != e && (v.notifCenterLocalItems = [...v.notifCenterLocalItems, (0, m.mH)(e, l)]);
        }
    }
    i === g.OGo.FRIEND &&
        (v.notifCenterLocalItems = v.notifCenterLocalItems.map((e) =>
            P(e, p.O7.INCOMING_FRIEND_REQUESTS, n.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(o.id, '_').concat(e.id),
                      type: p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  }
                : e
        )),
        (i === g.OGo.BLOCKED || s) && (v.notifCenterLocalItems = v.notifCenterLocalItems.filter((e) => !P(e, p.O7.INCOMING_FRIEND_REQUESTS, r) && !P(e, p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, r)));
}
function k(e) {
    v.notifCenterLocalItems = v.notifCenterLocalItems.filter((n) => !P(n, p.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !P(n, p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function U(e) {
    let { item_enum: n } = e;
    v.notifCenterItems = v.notifCenterItems
        .map((e) =>
            e.item_enum === n
                ? {
                      ...e,
                      completed: !0,
                      acked: !0
                  }
                : e
        )
        .filter(I);
}
function B(e) {
    let { guildScheduledEvent: n } = e;
    G(n);
}
function G(e) {
    if (!!(0, u.Z2)(e))
        v.notifCenterItems = v.notifCenterItems.map((n) =>
            n.type === p.DY.GUILD_SCHEDULED_EVENT_STARTED && n.guild_scheduled_event_id === e.id
                ? {
                      ...n,
                      disable_action: !0
                  }
                : n
        );
}
function Z(e) {
    let { newBuild: n } = e;
    if (null !== n) {
        let e = (0, m.hn)(n);
        void 0 === v.notifCenterLocalItems.find((n) => n.local_id === e.local_id) && (v.notifCenterLocalItems = [...v.notifCenterLocalItems.filter((n) => n.kind !== e.kind), e]);
    }
}
class F extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(_.default), null != e)) {
            let n = (e) => ({
                    ...e,
                    message: null != e.message ? new f.ZP(e.message) : void 0
                }),
                r = e.notifCenterItems.map(n);
            r.length > 0 &&
                (v = {
                    ...v,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: r
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
E(F, 'displayName', 'NotificationCenterItemsStore'), E(F, 'persistKey', 'NotificationCenterItemsStore_v2');
let V = new F(l.Z, {
    CONNECTION_OPEN: A,
    LOGOUT: T,
    NOTIFICATION_CENTER_ITEMS_ACK: D,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: L,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    NOTIFICATION_CENTER_ITEM_CREATE: C,
    NOTIFICATION_CENTER_ITEM_DELETE: R,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: C,
    LOAD_NOTIFICATION_CENTER_ITEMS: b,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: y,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: N,
    RESET_NOTIFICATION_CENTER: T,
    NOTIFICATION_CENTER_SET_ACTIVE: x,
    NOTIFICATION_CENTER_TAB_FOCUSED: w,
    RELATIONSHIP_ADD: M,
    RELATIONSHIP_UPDATE: M,
    RELATIONSHIP_REMOVE: k,
    NOTIFICATION_CENTER_ITEM_COMPLETED: U,
    SET_RECENT_MENTIONS_FILTER: T,
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: Z
});
n.Z = V;
