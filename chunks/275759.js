"use strict";
n.d(t, { Ay: () => M, ZD: () => h, hb: () => p }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(989349),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(49463),
    d = n(21119),
    c = n(153488),
    _ = n(994500),
    f = n(70730),
    E = n(652215);
let h = 5,
    p = 6048e5;
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
    y = null,
    N = null;
function O() {
    return N ?? Date.now();
}
function R() {
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
            let t = d.A.getUserAffinity(e);
            null != t && t.dmProbability > 0.7 && I.add(e), null != t && t.dmProbability > 0.5 && T.add(e);
        }
}
function v() {
    if (null != y) return void L(y);
    if ((C(), !c.A.hasConsented(E.YAq.PERSONALIZATION))) return;
    let { enabled: e } = f.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = d.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                (function (e) {
                    let t = a()(),
                        n = a()(e);
                    for (let e of [-1, 0, 1]) {
                        let r = n.clone().year(t.year() + e);
                        if (!r.isSame(n, "day") && 7 >= Math.abs(t.diff(r, "days"))) return !0;
                    }
                    return !1;
                })(n) && (A.push(e), (S[e] = { friendsSince: n }));
            }
        }
        A.sort((e, t) => d.A.compareByDmProbability(e, t)), R();
    }
}
function C() {
    (A.length = 0), I.clear(), T.clear(), (S = {});
}
function b() {
    let e = O();
    g.giftUnreadNotificationLastDismissedTimes = g.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 6048e5,
    );
}
function D(e) {
    null == g.messageGiftIntentLastShownMap[e] && (g.messageGiftIntentLastShownMap[e] = O());
}
function L(e) {
    C();
    let { enabled: t } = f.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    y = e;
    let n = _.A.getFriendIDs().filter((e) => !_.A.isIgnored(e));
    i()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                A.push(e), (S[e] = { friendsSince: n });
            }
        }),
        A.sort((e, t) => d.A.compareByDmProbability(e, t)),
        R(!0);
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
            this.syncWith([_.A, d.A, c.A, u.A], v);
        let t = O();
        for (let e in g.messageGiftIntentLastShownMap)
            t - g.messageGiftIntentLastShownMap[e] > 12096e5 && delete g.messageGiftIntentLastShownMap[e];
        b();
        let n = O();
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
        let t = O();
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
        return y;
    }
    getDevToolCurrentDate() {
        return N;
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
        C();
    },
    LOGOUT: function () {
        (g = m()), C();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        D(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        g.lastShownFriendsListGiftIntents = Array.from(A);
    },
    GIFT_UNREAD_NOTIFICATION_DISMISS: function () {
        g.giftUnreadNotificationLastDismissedTimes.push(O());
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        D(t);
    },
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: function (e) {
        let { recipientUserId: t } = e;
        g.profilePopoutGiftIntentsDismissMap[t] = O();
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
            (y = null), v();
            return;
        }
        L(t);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        N = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        N = null;
    },
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: function () {
        g.profilePopoutGiftIntentsDismissMap = {};
    },
});
