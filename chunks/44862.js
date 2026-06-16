"use strict";
n.d(t, { Ay: () => F, ZD: () => I, hb: () => T }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(736056),
    l = n(427358),
    u = n(885386),
    c = n(617617),
    d = n(153488),
    _ = n(994500),
    h = n(70730),
    f = n(689739),
    p = n(620750),
    E = n(194537),
    m = n(721441);
function g(e, t, n) {
    let i = {};
    for (let r in e) {
        let s = e[r];
        t - s <= n && (i[r] = s);
    }
    return i;
}
var A = n(652215);
let I = 5,
    T = 6048e5;
function S() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let y = S(),
    C = [],
    N = new Set(),
    v = new Set(),
    R = {},
    O = null,
    b = null,
    D = null;
function L() {
    return D ?? Date.now();
}
function w() {
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
        })(C, (e) => l.A.getUserAffinity(e)?.dmProbability, e);
    (N = t), (v = n);
}
function M() {
    if (null != O) return void U(O);
    if ((P(), !d.A.hasConsented(A.YAq.PERSONALIZATION))) return;
    let { enabled: e } = h.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e && u.oz.getSetting()) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = l.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                (function (e) {
                    let t = new Date(),
                        n = t.getFullYear();
                    for (let i of [-1, 0, 1]) {
                        let r = (0, f.default)(e, n + i);
                        if (!(0, p.default)(r, e) && 7 >= Math.abs((0, E.A)(t, r))) return !0;
                    }
                    return !1;
                })(n) && (C.push(e), (R[e] = { friendsSince: n }));
            }
        }
        C.sort((e, t) => l.A.compareByDmProbability(e, t)), w();
    }
}
function P() {
    (C.length = 0), (N = new Set()), (v = new Set()), (R = {});
}
function x() {
    let e = L();
    y.giftUnreadNotificationLastDismissedTimes = y.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 6048e5,
    );
}
function k(e) {
    null == y.messageGiftIntentLastShownMap[e] && (y.messageGiftIntentLastShownMap[e] = L());
}
function U(e) {
    P();
    let { enabled: t } = h.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t || !u.oz.getSetting()) return;
    O = e;
    let n = _.A.getFriendIDs().filter((e) => !_.A.isIgnored(e)),
        i = new Set(n),
        s = null != b && b.length === e && b.every((e) => i.has(e)) ? b : r().sampleSize(n, e);
    (b = s),
        s.forEach((e) => {
            let t = _.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                C.push(e), (R[e] = { friendsSince: n });
            }
        }),
        C.sort((e, t) => l.A.compareByDmProbability(e, t)),
        w(!0);
}
class G extends s.Ay.PersistedStore {
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
    ];
    initialize(e) {
        (y = S()),
            null != e &&
                ((y.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (y.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (y.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (y.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (y.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([_.A, l.A, d.A, o.A, c.A], M),
            (y.messageGiftIntentLastShownMap = g(y.messageGiftIntentLastShownMap, L(), 12096e5)),
            x(),
            (y.profilePopoutGiftIntentsDismissMap = g(y.profilePopoutGiftIntentsDismissMap, L(), 12096e5));
    }
    getState() {
        return y;
    }
    getFriendAnniversaries() {
        return C;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(N).find((e) => null == y.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        x();
        let e = y.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= 5) return !0;
        let t = L();
        return e.filter((e) => t - e <= 864e5).length >= 1;
    }
    canShowFriendsTabBadge() {
        return Array.from(v).some((e) => !y.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = R[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round((0, m.A)(new Date(), t) / 12));
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == y.profilePopoutGiftIntentsDismissMap[e] && null != R[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != y.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return O;
    }
    getDevToolCurrentDate() {
        return D;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(N);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(v);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return y.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return y.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return y.profilePopoutGiftIntentsDismissMap;
    }
}
let F = new G(a.h, {
    CONNECTION_OPEN: function () {
        P();
    },
    LOGOUT: function () {
        (y = S()), P();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        k(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        y.lastShownFriendsListGiftIntents = Array.from(C);
    },
    GIFT_UNREAD_NOTIFICATION_DISMISS: function () {
        y.giftUnreadNotificationLastDismissedTimes.push(L());
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        k(t);
    },
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: function (e) {
        let { recipientUserId: t } = e;
        y.profilePopoutGiftIntentsDismissMap[t] = L();
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        y.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        y.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: function () {
        y.giftUnreadNotificationLastDismissedTimes = [];
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (O = null), (b = null), M();
            return;
        }
        U(t);
    },
    DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function () {
        return null != O && ((b = null), U(O), !0);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        D = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        D = null;
    },
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: function () {
        y.profilePopoutGiftIntentsDismissMap = {};
    },
});
