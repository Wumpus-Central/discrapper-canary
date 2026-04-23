n.d(t, { Ay: () => y, ZD: () => A, hb: () => T }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(989349),
    s = n.n(a),
    _ = n(17928),
    l = n(228366),
    o = n(736056),
    E = n(427358),
    d = n(153488),
    c = n(994500),
    u = n(70730),
    I = n(652215);
let A = 5,
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
let N = S(),
    O = [],
    R = new Set(),
    f = new Set(),
    C = {},
    p = null,
    m = null;
function L() {
    return m ?? Date.now();
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(O.length / 2);
        O.slice(0, e).forEach((e) => {
            R.add(e);
        }),
            O.forEach((e) => {
                f.add(e);
            });
    } else
        for (let e of O) {
            let t = E.A.getUserAffinity(e);
            null != t && t.dmProbability > 0.7 && R.add(e), null != t && t.dmProbability > 0.5 && f.add(e);
        }
}
function h() {
    if (null != p) return void P(p);
    if ((g(), !d.A.hasConsented(I.YAq.PERSONALIZATION))) return;
    let { enabled: e } = u.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of c.A.getFriendIDs()) {
            let t = c.A.getSince(e),
                n = E.A.getUserAffinity(e);
            if (c.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                (function (e) {
                    let t = s()(),
                        n = s()(e);
                    for (let e of [-1, 0, 1]) {
                        let i = n.clone().year(t.year() + e);
                        if (!i.isSame(n, "day") && 7 >= Math.abs(t.diff(i, "days"))) return !0;
                    }
                    return !1;
                })(n) && (O.push(e), (C[e] = { friendsSince: n }));
            }
        }
        O.sort((e, t) => E.A.compareByDmProbability(e, t)), D();
    }
}
function g() {
    (O.length = 0), R.clear(), f.clear(), (C = {});
}
function b() {
    let e = L();
    N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 6048e5,
    );
}
function U(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = L());
}
function P(e) {
    g();
    let { enabled: t } = u.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    p = e;
    let n = c.A.getFriendIDs().filter((e) => !c.A.isIgnored(e));
    r()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = c.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                O.push(e), (C[e] = { friendsSince: n });
            }
        }),
        O.sort((e, t) => E.A.compareByDmProbability(e, t)),
        D(!0);
}
class M extends _.Ay.PersistedStore {
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
        (N = S()),
            null != e &&
                ((N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (N.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (N.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (N.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([c.A, E.A, d.A, o.A], h);
        let t = L();
        for (let e in N.messageGiftIntentLastShownMap)
            t - N.messageGiftIntentLastShownMap[e] > 12096e5 && delete N.messageGiftIntentLastShownMap[e];
        b();
        let n = L();
        for (let e in N.profilePopoutGiftIntentsDismissMap)
            n - N.profilePopoutGiftIntentsDismissMap[e] > 12096e5 && delete N.profilePopoutGiftIntentsDismissMap[e];
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return O;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(R).find((e) => null == N.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        b();
        let e = N.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= 5) return !0;
        let t = L();
        return e.filter((e) => t - e <= 864e5).length >= 1;
    }
    canShowFriendsTabBadge() {
        return Array.from(f).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = C[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round(s()().diff(t, "years", !0)));
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == N.profilePopoutGiftIntentsDismissMap[e] && null != C[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return p;
    }
    getDevToolCurrentDate() {
        return m;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(R);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(f);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return N.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return N.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return N.profilePopoutGiftIntentsDismissMap;
    }
}
let y = new M(l.h, {
    CONNECTION_OPEN: function () {
        g();
    },
    LOGOUT: function () {
        (N = S()), g();
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        U(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        N.lastShownFriendsListGiftIntents = Array.from(O);
    },
    GIFT_UNREAD_NOTIFICATION_DISMISS: function () {
        N.giftUnreadNotificationLastDismissedTimes.push(L());
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        U(t);
    },
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: function (e) {
        let { recipientUserId: t } = e;
        N.profilePopoutGiftIntentsDismissMap[t] = L();
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        N.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        N.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: function () {
        N.giftUnreadNotificationLastDismissedTimes = [];
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            (p = null), h();
            return;
        }
        P(t);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        m = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        m = null;
    },
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: function () {
        N.profilePopoutGiftIntentsDismissMap = {};
    },
});
