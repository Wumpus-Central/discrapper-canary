n.d(t, { Ay: () => F, ZD: () => g, hb: () => S }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(736056),
    o = n(710195),
    d = n(427358),
    c = n(885386),
    u = n(617617),
    _ = n(153488),
    E = n(994500);
function A(e) {
    return { enabled: !0 };
}
var h = n(689739),
    I = n(620750),
    f = n(194537),
    p = n(721441);
function T(e, t, n) {
    let i = {};
    for (let r in e) {
        let a = e[r];
        t - a <= n && (i[r] = a);
    }
    return i;
}
var m = n(652215);
let g = 5,
    S = 6048e5;
function N() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        lastKnownGiftIntentDismissedAtMs: 0,
    };
}
let C = N(),
    O = [],
    R = new Set(),
    L = new Set(),
    y = {},
    D = null,
    v = null,
    b = null;
function M() {
    return b ?? Date.now();
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { highestAffinity: t, highAffinity: n } = (function (e, t, n) {
            let i = new Set(),
                r = new Set();
            if (n) {
                let t = Math.ceil(e.length / 2);
                e.slice(0, t).forEach((e) => {
                    i.add(e);
                }),
                    e.forEach((e) => {
                        r.add(e);
                    });
            } else
                for (let n of e) {
                    let e = t(n);
                    null != e && e > 0.7 && i.add(n), null != e && e > 0.5 && r.add(n);
                }
            return { highestAffinity: i, highAffinity: r };
        })(O, (e) => d.A.getUserAffinity(e)?.dmProbability, e);
    (R = t), (L = n);
}
function U() {
    if (null != D) return void x(D);
    if ((w(), !_.A.hasConsented(m.YAq.PERSONALIZATION) || !c.oz.getSetting())) return;
    for (let e of E.A.getFriendIDs()) {
        let t = E.A.getSince(e),
            n = d.A.getUserAffinity(e);
        if (E.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
            let n = new Date(t);
            (function (e) {
                let t = new Date(),
                    n = t.getFullYear();
                for (let i of [-1, 0, 1]) {
                    let r = (0, h.default)(e, n + i);
                    if (!(0, I.default)(r, e) && 7 >= Math.abs((0, f.A)(t, r))) return !0;
                }
                return !1;
            })(n) && (O.push(e), (y[e] = { friendsSince: n }));
        }
    }
    if (0 === O.length) return;
    let { enabled: e } = A({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    e ? (O.sort((e, t) => d.A.compareByDmProbability(e, t)), P()) : w();
}
function w() {
    (O.length = 0), (R = new Set()), (L = new Set()), (y = {});
}
function G(e) {
    null == C.messageGiftIntentLastShownMap[e] && (C.messageGiftIntentLastShownMap[e] = M());
}
function x(e) {
    w();
    let { enabled: t } = A({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t || !c.oz.getSetting()) return;
    D = e;
    let n = E.A.getFriendIDs().filter((e) => !E.A.isIgnored(e)),
        i = new Set(n),
        a = null != v && v.length === e && v.every((e) => i.has(e)) ? v : r().sampleSize(n, e);
    (v = a),
        a.forEach((e) => {
            let t = E.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                O.push(e), (y[e] = { friendsSince: n });
            }
        }),
        O.sort((e, t) => d.A.compareByDmProbability(e, t)),
        P(!0);
}
class k extends a.Ay.PersistedStore {
    static displayName = "PremiumGiftingIntentStore";
    static persistKey = "PremiumGiftingIntentStore";
    static migrations = [
        (e) =>
            null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: e.friendsTabBadgeLastDismissedTime ?? null,
                      lastShownFriendsListGiftIntents: e.lastShownFriendsListGiftIntents ?? [],
                      messageGiftIntentLastShownMap: {},
                  },
        (e) =>
            null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null,
                      lastShownFriendsListGiftIntents: e.lastShownFriendsListGiftIntents ?? [],
                      messageGiftIntentLastShownMap: e.messageGiftIntentLastShownMap ?? {},
                      giftUnreadNotificationLastDismissedTimes: [],
                  },
        (e) =>
            null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null,
                      lastShownFriendsListGiftIntents: e.lastShownFriendsListGiftIntents ?? [],
                      messageGiftIntentLastShownMap: e.messageGiftIntentLastShownMap ?? {},
                      giftUnreadNotificationLastDismissedTimes: e.giftUnreadNotificationLastDismissedTimes ?? [],
                      profilePopoutGiftIntentsDismissMap: {},
                  },
        (e) => (null == e ? e : { ...e, lastKnownGiftIntentDismissedAtMs: e.lastKnownGiftIntentDismissedAtMs ?? 0 }),
        (e) => (null == e || delete e.profilePopoutGiftIntentsDismissMap, e),
        (e) => {
            if (null == e) return e;
            let t = { ...e };
            return delete t.giftUnreadNotificationLastDismissedTimes, t;
        },
    ];
    initialize(e) {
        (C = N()),
            null != e &&
                ((C.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (C.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (C.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (C.lastKnownGiftIntentDismissedAtMs = e.lastKnownGiftIntentDismissedAtMs ?? 0)),
            this.syncWith([E.A, d.A, _.A, l.A, o.A, u.A], U),
            (C.messageGiftIntentLastShownMap = T(C.messageGiftIntentLastShownMap, M(), 12096e5));
    }
    getState() {
        return C;
    }
    getFriendAnniversaries() {
        return O;
    }
    canShowFriendsTabBadge() {
        return Array.from(L).some((e) => !C.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = y[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round((0, p.A)(new Date(), t) / 12));
    }
    isGiftIntentMessageInCooldown(e) {
        return null != C.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return D;
    }
    getDevToolCurrentDate() {
        return b;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(R);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(L);
    }
    getMessageGiftIntentLastShownMap() {
        return C.messageGiftIntentLastShownMap;
    }
    getLastKnownGiftIntentDismissedAtMs() {
        return C.lastKnownGiftIntentDismissedAtMs;
    }
}
let F = new k(s.h, {
    CONNECTION_OPEN: function () {
        w();
    },
    LOGOUT: function () {
        (C = N()), w();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        G(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        C.lastShownFriendsListGiftIntents = Array.from(O);
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        G(t);
    },
    GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function (e) {
        let { dismissals: t, settingsTimestampMs: n } = e,
            i = { ...C.messageGiftIntentLastShownMap };
        for (let { targetId: e, dismissedAtMs: n } of t) {
            let t = i[e];
            i[e] = null == t ? n : Math.max(t, n);
        }
        (C.messageGiftIntentLastShownMap = T(i, M(), 1296e6)), (C.lastKnownGiftIntentDismissedAtMs = n);
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        C.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        C.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (D = null), (v = null), U();
            return;
        }
        x(t);
    },
    DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function () {
        return null != D && ((v = null), x(D), !0);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        b = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        b = null;
    },
});
