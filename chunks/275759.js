"use strict";
n.d(t, { Ay: () => M, ZD: () => p, hb: () => E }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(736056),
    c = n(427358),
    d = n(153488),
    _ = n(994500),
    f = n(70730),
    h = n(652215);
let p = 5,
    E = 6048e5;
function m() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let g = m(),
    A = [],
    I = new Set(),
    T = new Set(),
    S = {},
    N = null,
    y = null;
function C() {
    return y ?? Date.now();
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(A.length / 2);
        A.slice(0, e).forEach((e) => {
            I.add(e);
        }),
            A.forEach((e) => {
                T.add(e);
            });
    } else
        for (let e of A) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > 0.7 && I.add(e), null != t && t.dmProbability > 0.5 && T.add(e);
        }
}
function O() {
    if (null != N) return void L(N);
    if ((R(), !d.A.hasConsented(h.YAq.PERSONALIZATION))) return;
    let { enabled: e } = f.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                (function (e) {
                    let t = a()(),
                        n = a()(e);
                    for (let e of [-1, 0, 1]) {
                        let i = n.clone().year(t.year() + e);
                        if (!i.isSame(n, "day") && 7 >= Math.abs(t.diff(i, "days"))) return !0;
                    }
                    return !1;
                })(n) && (A.push(e), (S[e] = { friendsSince: n }));
            }
        }
        A.sort((e, t) => c.A.compareByDmProbability(e, t)), v();
    }
}
function R() {
    (A.length = 0), I.clear(), T.clear(), (S = {});
}
function b() {
    let e = C();
    g.giftUnreadNotificationLastDismissedTimes = g.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 6048e5,
    );
}
function D(e) {
    null == g.messageGiftIntentLastShownMap[e] && (g.messageGiftIntentLastShownMap[e] = C());
}
function L(e) {
    R();
    let { enabled: t } = f.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    N = e;
    let n = _.A.getFriendIDs().filter((e) => !_.A.isIgnored(e));
    r()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                A.push(e), (S[e] = { friendsSince: n });
            }
        }),
        A.sort((e, t) => c.A.compareByDmProbability(e, t)),
        v(!0);
}
class w extends o.Ay.PersistedStore {
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
        (g = m()),
            null != e &&
                ((g.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (g.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (g.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (g.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (g.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([_.A, c.A, d.A, u.A], O);
        let t = C();
        for (let e in g.messageGiftIntentLastShownMap)
            t - g.messageGiftIntentLastShownMap[e] > 12096e5 && delete g.messageGiftIntentLastShownMap[e];
        b();
        let n = C();
        for (let e in g.profilePopoutGiftIntentsDismissMap)
            n - g.profilePopoutGiftIntentsDismissMap[e] > 12096e5 && delete g.profilePopoutGiftIntentsDismissMap[e];
    }
    getState() {
        return g;
    }
    getFriendAnniversaries() {
        return A;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(I).find((e) => null == g.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        b();
        let e = g.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= 5) return !0;
        let t = C();
        return e.filter((e) => t - e <= 864e5).length >= 1;
    }
    canShowFriendsTabBadge() {
        return Array.from(T).some((e) => !g.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = S[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round(a()().diff(t, "years", !0)));
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == g.profilePopoutGiftIntentsDismissMap[e] && null != S[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != g.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return N;
    }
    getDevToolCurrentDate() {
        return y;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(I);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(T);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return g.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return g.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return g.profilePopoutGiftIntentsDismissMap;
    }
}
let M = new w(l.h, {
    CONNECTION_OPEN: function () {
        R();
    },
    LOGOUT: function () {
        (g = m()), R();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        D(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        g.lastShownFriendsListGiftIntents = Array.from(A);
    },
    GIFT_UNREAD_NOTIFICATION_DISMISS: function () {
        g.giftUnreadNotificationLastDismissedTimes.push(C());
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        D(t);
    },
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: function (e) {
        let { recipientUserId: t } = e;
        g.profilePopoutGiftIntentsDismissMap[t] = C();
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        g.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        g.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: function () {
        g.giftUnreadNotificationLastDismissedTimes = [];
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (N = null), O();
            return;
        }
        L(t);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        y = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        y = null;
    },
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: function () {
        g.profilePopoutGiftIntentsDismissMap = {};
    },
});
