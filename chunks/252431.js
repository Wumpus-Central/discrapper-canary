n(321073);
var i = n(855986),
    r = n(73153),
    a = n(343446),
    s = n(698441),
    l = n(432005),
    o = n(383233),
    d = n(994500),
    c = n(287809),
    u = n(811091),
    _ = n(322387),
    E = n(995273),
    A = n(652215);
let f = {
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
function h(e) {
    return null != e.id && null != e.type;
}
function I() {
    let { keepLocalItems: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    f = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: e ? f.notifCenterLocalItems : [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1,
    };
}
function p() {
    I({ keepLocalItems: !0 });
}
function m(e) {
    return {
        ...e,
        kind: "notification-center-item",
        message: null != e.message ? (0, l.rh)(e.message) : void 0,
        applicationId: null != e.application ? e.application.id : void 0,
    };
}
function T(e) {
    let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? m(e.item) : e.item;
    if (!f.initialized || !h(t) || f.notifCenterIds.has(t.id)) return !1;
    (f.notifCenterIds.add(t.id),
        (f.notifCenterItems = [t, ...f.notifCenterItems]),
        f.notifCenterItems.sort((e, t) => u.default.compare(t.id, e.id)));
}
function g(e, t) {
    f.notifCenterItems = f.notifCenterItems.map((n) => (e.includes(n.id) ? { ...n, acked: t } : n)).filter(h);
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
            null != e && (f.notifCenterLocalItems = [...f.notifCenterLocalItems, (0, E.Qi)(e, l, o)]);
        }
    }
    (i !== A.eA$.FRIEND ||
        null == t.user ||
        a ||
        (f.notifCenterLocalItems = f.notifCenterLocalItems.map((e) =>
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
            (f.notifCenterLocalItems = f.notifCenterLocalItems.filter(
                (e) =>
                    !S(e, _.Uo.INCOMING_FRIEND_REQUESTS, n) &&
                    !S(e, _.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) &&
                    !S(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) &&
                    !S(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n),
            )));
}
function O(e) {
    (0, s.AZ)(e) &&
        (f.notifCenterItems = f.notifCenterItems.map((t) =>
            t.type === _.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? { ...t, disable_action: !0 }
                : t,
        ));
}
class R extends i.Ay.PersistedStore {
    static displayName = "NotificationCenterItemsStore";
    static persistKey = "NotificationCenterItemsStore_v2";
    initialize(e) {
        if ((this.waitFor(c.default, d.A, a.A), null != e)) {
            let t = e.notifCenterItems.map(function (e) {
                return { ...e, message: null != e.message ? new o.Ay(e.message) : void 0 };
            });
            t.length > 0 &&
                (f = { ...f, initialized: !0, isDataStale: !0, notifCenterItems: [], staleNotifCenterItems: t });
        }
    }
    getState() {
        function e(e) {
            return { ...e, message: null != e.message ? e.message.toJS() : void 0 };
        }
        return {
            ...f,
            notifCenterItems: f.notifCenterItems.map(e),
            staleNotifCenterItems: f.staleNotifCenterItems.map(e),
        };
    }
    get loading() {
        return f.loading;
    }
    get initialized() {
        return f.initialized;
    }
    get items() {
        return f.isDataStale ? f.staleNotifCenterItems : f.notifCenterItems;
    }
    get hasMore() {
        return f.paginationHasMore;
    }
    get cursor() {
        return f.paginationCursor;
    }
    get errored() {
        return f.errored;
    }
    get active() {
        return f.notifCenterActive;
    }
    get localItems() {
        return f.notifCenterLocalItems;
    }
    get tabFocused() {
        return f.notifCenterTabFocused;
    }
}
let L = new R(r.h, {
    CONNECTION_OPEN: function (e) {
        I();
        let t = [],
            n = new Set();
        (e.relationships.forEach((e) => {
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
                    O(e);
                });
            }),
            (f.notifCenterLocalItems = t));
    },
    LOGOUT: () => I(),
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
        O(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: T,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!f.notifCenterIds.has(t)) return !1;
        (f.notifCenterIds.delete(t), (f.notifCenterItems = f.notifCenterItems.filter((e) => e.id !== t)));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: T,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        f.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        ((f.loading = !1), (f.initialized = !0), (f.errored = !0));
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: i } = e;
        f.loading &&
            ((f.loading = !1),
            (f.initialized = !0),
            (f.errored = !1),
            (f.isDataStale = !1),
            (null != i && f.notifCenterIds.has(i)) ||
                ((f.paginationHasMore = t.length > 0 && n), (f.paginationCursor = t.length > 0 ? i : void 0)),
            (f.notifCenterItems = [...f.notifCenterItems, ...t.map(m).filter((e) => !f.notifCenterIds.has(e.id))]),
            f.notifCenterItems.sort((e, t) => u.default.compare(t.id, e.id)),
            t.forEach((e) => f.notifCenterIds.add(e.id)));
    },
    RESET_NOTIFICATION_CENTER: () => p(),
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        f.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        f.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: C,
    RELATIONSHIP_UPDATE: C,
    RELATIONSHIP_REMOVE: function (e) {
        f.notifCenterLocalItems = f.notifCenterLocalItems.filter(
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
            null != r && null != e && (f.notifCenterLocalItems = [...f.notifCenterLocalItems, (0, E.KS)(e, r, a)]);
        } else {
            if (i !== A.eA$.FRIEND) return !1;
            f.notifCenterLocalItems = f.notifCenterLocalItems.map((e) =>
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
        f.notifCenterLocalItems = f.notifCenterLocalItems.filter(
            (e) =>
                !N(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) &&
                !N(e, _.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n),
        );
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        f.notifCenterItems = f.notifCenterItems
            .map((e) => (e.item_enum === t ? { ...e, completed: !0, acked: !0 } : e))
            .filter(h);
    },
    SET_RECENT_MENTIONS_FILTER: () => p(),
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, E._u)(t);
            void 0 === f.notifCenterLocalItems.find((t) => t.local_id === e.local_id) &&
                (f.notifCenterLocalItems = [...f.notifCenterLocalItems.filter((t) => t.type !== e.type), e]);
        }
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null == t) return;
        let n = new Set(t);
        f.notifCenterLocalItems = f.notifCenterLocalItems.filter(
            (e) => null == e.applicationId || !n.has(e.applicationId),
        );
    },
});
n.d(t, {}, { A: L });
