n.d(t, { Ay: () => v, ZD: () => I, hb: () => T }), n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(989349),
    s = n.n(r),
    l = n(17928),
    o = n(228366),
    d = n(736056),
    c = n(427358),
    _ = n(153488),
    E = n(994500),
    u = n(70730),
    A = n(652215);
let I = 5,
    T = 6048e5;
function h() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let S = h(),
    N = [],
    f = new Set(),
    p = new Set(),
    m = {},
    O = null,
    C = null;
function R() {
    return C ?? Date.now();
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(N.length / 2);
        N.slice(0, e).forEach((e) => {
            f.add(e);
        }),
            N.forEach((e) => {
                p.add(e);
            });
    } else
        for (let e of N) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > 0.7 && f.add(e), null != t && t.dmProbability > 0.5 && p.add(e);
        }
}
function L() {
    if (null != O) return void P(O);
    if ((D(), !_.A.hasConsented(A.YAq.PERSONALIZATION))) return;
    let { enabled: e } = u.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of E.A.getFriendIDs()) {
            let t = E.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (E.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                (function (e) {
                    let t = s()(),
                        n = s()(e);
                    for (let e of [-1, 0, 1]) {
                        let i = n.clone().year(t.year() + e);
                        if (!i.isSame(n, "day") && 7 >= Math.abs(t.diff(i, "days"))) return !0;
                    }
                    return !1;
                })(n) && (N.push(e), (m[e] = { friendsSince: n }));
            }
        }
        N.sort((e, t) => c.A.compareByDmProbability(e, t)), g();
    }
}
function D() {
    (N.length = 0), f.clear(), p.clear(), (m = {});
}
function b() {
    let e = R();
    S.giftUnreadNotificationLastDismissedTimes = S.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 6048e5,
    );
}
function M(e) {
    null == S.messageGiftIntentLastShownMap[e] && (S.messageGiftIntentLastShownMap[e] = R());
}
function P(e) {
    D();
    let { enabled: t } = u.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    O = e;
    let n = E.A.getFriendIDs().filter((e) => !E.A.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = E.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                N.push(e), (m[e] = { friendsSince: n });
            }
        }),
        N.sort((e, t) => c.A.compareByDmProbability(e, t)),
        g(!0);
}
class U extends l.Ay.PersistedStore {
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
        (S = h()),
            null != e &&
                ((S.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (S.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (S.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (S.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (S.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([E.A, c.A, _.A, d.A], L);
        let t = R();
        for (let e in S.messageGiftIntentLastShownMap)
            t - S.messageGiftIntentLastShownMap[e] > 12096e5 && delete S.messageGiftIntentLastShownMap[e];
        b();
        let n = R();
        for (let e in S.profilePopoutGiftIntentsDismissMap)
            n - S.profilePopoutGiftIntentsDismissMap[e] > 12096e5 && delete S.profilePopoutGiftIntentsDismissMap[e];
    }
    getState() {
        return S;
    }
    getFriendAnniversaries() {
        return N;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(f).find((e) => null == S.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        b();
        let e = S.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= 5) return !0;
        let t = R();
        return e.filter((e) => t - e <= 864e5).length >= 1;
    }
    canShowFriendsTabBadge() {
        return Array.from(p).some((e) => !S.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = m[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round(s()().diff(t, "years", !0)));
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == S.profilePopoutGiftIntentsDismissMap[e] && null != m[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != S.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return O;
    }
    getDevToolCurrentDate() {
        return C;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(f);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(p);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return S.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return S.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return S.profilePopoutGiftIntentsDismissMap;
    }
}
let v = new U(o.h, {
    CONNECTION_OPEN: function () {
        D();
    },
    LOGOUT: function () {
        (S = h()), D();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        M(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        S.lastShownFriendsListGiftIntents = Array.from(N);
    },
    GIFT_UNREAD_NOTIFICATION_DISMISS: function () {
        S.giftUnreadNotificationLastDismissedTimes.push(R());
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        M(t);
    },
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: function (e) {
        let { recipientUserId: t } = e;
        S.profilePopoutGiftIntentsDismissMap[t] = R();
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        S.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        S.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: function () {
        S.giftUnreadNotificationLastDismissedTimes = [];
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (O = null), L();
            return;
        }
        P(t);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        C = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        C = null;
    },
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: function () {
        S.profilePopoutGiftIntentsDismissMap = {};
    },
});
