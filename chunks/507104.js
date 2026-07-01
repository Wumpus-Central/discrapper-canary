"use strict";
n.d(t, { Ay: () => V, ZD: () => S, hb: () => y }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(736056),
    l = n(710195),
    u = n(427358),
    c = n(885386),
    d = n(617617),
    _ = n(153488),
    h = n(994500),
    f = n(70730);
function p(e) {
    let { enabled: t } = f.u.getConfig(e);
    return { enabled: t };
}
var E = n(689739),
    m = n(620750),
    g = n(194537),
    A = n(721441);
function I(e, t, n) {
    let i = {};
    for (let r in e) {
        let s = e[r];
        t - s <= n && (i[r] = s);
    }
    return i;
}
var T = n(652215);
let S = 5,
    y = 6048e5;
function C() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        lastKnownGiftIntentDismissedAtMs: 0,
    };
}
let N = C(),
    v = [],
    R = new Set(),
    O = new Set(),
    b = {},
    D = null,
    L = null,
    w = null;
function M() {
    return w ?? Date.now();
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
        })(v, (e) => u.A.getUserAffinity(e)?.dmProbability, e);
    (R = t), (O = n);
}
function x() {
    if (null != D) return void G(D);
    if ((k(), !_.A.hasConsented(T.YAq.PERSONALIZATION) || !c.oz.getSetting())) return;
    for (let e of h.A.getFriendIDs()) {
        let t = h.A.getSince(e),
            n = u.A.getUserAffinity(e);
        if (h.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
            let n = new Date(t);
            (function (e) {
                let t = new Date(),
                    n = t.getFullYear();
                for (let i of [-1, 0, 1]) {
                    let r = (0, E.default)(e, n + i);
                    if (!(0, m.default)(r, e) && 7 >= Math.abs((0, g.A)(t, r))) return !0;
                }
                return !1;
            })(n) && (v.push(e), (b[e] = { friendsSince: n }));
        }
    }
    if (0 === v.length) return;
    let { enabled: e } = p({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    e ? (v.sort((e, t) => u.A.compareByDmProbability(e, t)), P()) : k();
}
function k() {
    (v.length = 0), (R = new Set()), (O = new Set()), (b = {});
}
function U(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = M());
}
function G(e) {
    k();
    let { enabled: t } = p({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t || !c.oz.getSetting()) return;
    D = e;
    let n = h.A.getFriendIDs().filter((e) => !h.A.isIgnored(e)),
        i = new Set(n),
        s = null != L && L.length === e && L.every((e) => i.has(e)) ? L : r().sampleSize(n, e);
    (L = s),
        s.forEach((e) => {
            let t = h.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                v.push(e), (b[e] = { friendsSince: n });
            }
        }),
        v.sort((e, t) => u.A.compareByDmProbability(e, t)),
        P(!0);
}
class F extends s.Ay.PersistedStore {
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
        (N = C()),
            null != e &&
                ((N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (N.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (N.lastKnownGiftIntentDismissedAtMs = e.lastKnownGiftIntentDismissedAtMs ?? 0)),
            this.syncWith([h.A, u.A, _.A, o.A, l.A, d.A], x),
            (N.messageGiftIntentLastShownMap = I(N.messageGiftIntentLastShownMap, M(), 12096e5));
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return v;
    }
    canShowFriendsTabBadge() {
        return Array.from(O).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = b[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round((0, A.A)(new Date(), t) / 12));
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return D;
    }
    getDevToolCurrentDate() {
        return w;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(R);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(O);
    }
    getMessageGiftIntentLastShownMap() {
        return N.messageGiftIntentLastShownMap;
    }
    getLastKnownGiftIntentDismissedAtMs() {
        return N.lastKnownGiftIntentDismissedAtMs;
    }
}
let V = new F(a.h, {
    CONNECTION_OPEN: function () {
        k();
    },
    LOGOUT: function () {
        (N = C()), k();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        U(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        N.lastShownFriendsListGiftIntents = Array.from(v);
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        U(t);
    },
    GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function (e) {
        let { dismissals: t, settingsTimestampMs: n } = e,
            i = { ...N.messageGiftIntentLastShownMap };
        for (let { targetId: e, dismissedAtMs: n } of t) {
            let t = i[e];
            i[e] = null == t ? n : Math.max(t, n);
        }
        (N.messageGiftIntentLastShownMap = I(i, M(), 1296e6)), (N.lastKnownGiftIntentDismissedAtMs = n);
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        N.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        N.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (D = null), (L = null), x();
            return;
        }
        G(t);
    },
    DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function () {
        return null != D && ((L = null), G(D), !0);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        w = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        w = null;
    },
});
