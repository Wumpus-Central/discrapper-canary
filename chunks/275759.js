"use strict";
n.d(t, { Ay: () => k, ZD: () => m, hb: () => g }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(736056),
    c = n(427358),
    d = n(885386),
    _ = n(617617),
    h = n(153488),
    f = n(994500),
    p = n(70730),
    E = n(652215);
let m = 5,
    g = 6048e5;
function A() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let I = A(),
    T = [],
    S = new Set(),
    y = new Set(),
    N = {},
    v = null,
    C = null,
    R = null;
function O() {
    return R ?? Date.now();
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(T.length / 2);
        T.slice(0, e).forEach((e) => {
            S.add(e);
        }),
            T.forEach((e) => {
                y.add(e);
            });
    } else
        for (let e of T) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > 0.7 && S.add(e), null != t && t.dmProbability > 0.5 && y.add(e);
        }
}
function D() {
    if (null != v) return void P(v);
    if ((L(), !h.A.hasConsented(E.YAq.PERSONALIZATION))) return;
    let { enabled: e } = p.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e && d.oz.getSetting()) {
        for (let e of f.A.getFriendIDs()) {
            let t = f.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (f.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                (function (e) {
                    let t = a()(),
                        n = a()(e);
                    for (let e of [-1, 0, 1]) {
                        let i = n.clone().year(t.year() + e);
                        if (!i.isSame(n, "day") && 7 >= Math.abs(t.diff(i, "days"))) return !0;
                    }
                    return !1;
                })(n) && (T.push(e), (N[e] = { friendsSince: n }));
            }
        }
        T.sort((e, t) => c.A.compareByDmProbability(e, t)), b();
    }
}
function L() {
    (T.length = 0), S.clear(), y.clear(), (N = {});
}
function w() {
    let e = O();
    I.giftUnreadNotificationLastDismissedTimes = I.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 6048e5,
    );
}
function M(e) {
    null == I.messageGiftIntentLastShownMap[e] && (I.messageGiftIntentLastShownMap[e] = O());
}
function P(e) {
    L();
    let { enabled: t } = p.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t || !d.oz.getSetting()) return;
    v = e;
    let n = f.A.getFriendIDs().filter((e) => !f.A.isIgnored(e)),
        i = new Set(n),
        s = null != C && C.length === e && C.every((e) => i.has(e)) ? C : r().sampleSize(n, e);
    (C = s),
        s.forEach((e) => {
            let t = f.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                T.push(e), (N[e] = { friendsSince: n });
            }
        }),
        T.sort((e, t) => c.A.compareByDmProbability(e, t)),
        b(!0);
}
class x extends o.Ay.PersistedStore {
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
        (I = A()),
            null != e &&
                ((I.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (I.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (I.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (I.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (I.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([f.A, c.A, h.A, u.A, _.A], D);
        let t = O();
        for (let e in I.messageGiftIntentLastShownMap)
            t - I.messageGiftIntentLastShownMap[e] > 12096e5 && delete I.messageGiftIntentLastShownMap[e];
        w();
        let n = O();
        for (let e in I.profilePopoutGiftIntentsDismissMap)
            n - I.profilePopoutGiftIntentsDismissMap[e] > 12096e5 && delete I.profilePopoutGiftIntentsDismissMap[e];
    }
    getState() {
        return I;
    }
    getFriendAnniversaries() {
        return T;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(S).find((e) => null == I.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        w();
        let e = I.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= 5) return !0;
        let t = O();
        return e.filter((e) => t - e <= 864e5).length >= 1;
    }
    canShowFriendsTabBadge() {
        return Array.from(y).some((e) => !I.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = N[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round(a()().diff(t, "years", !0)));
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == I.profilePopoutGiftIntentsDismissMap[e] && null != N[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != I.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return v;
    }
    getDevToolCurrentDate() {
        return R;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(S);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(y);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return I.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return I.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return I.profilePopoutGiftIntentsDismissMap;
    }
}
let k = new x(l.h, {
    CONNECTION_OPEN: function () {
        L();
    },
    LOGOUT: function () {
        (I = A()), L();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        M(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        I.lastShownFriendsListGiftIntents = Array.from(T);
    },
    GIFT_UNREAD_NOTIFICATION_DISMISS: function () {
        I.giftUnreadNotificationLastDismissedTimes.push(O());
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        M(t);
    },
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: function (e) {
        let { recipientUserId: t } = e;
        I.profilePopoutGiftIntentsDismissMap[t] = O();
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        I.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        I.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: function () {
        I.giftUnreadNotificationLastDismissedTimes = [];
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (v = null), (C = null), D();
            return;
        }
        P(t);
    },
    DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function () {
        return null != v && ((C = null), P(v), !0);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        R = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        R = null;
    },
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: function () {
        I.profilePopoutGiftIntentsDismissMap = {};
    },
});
