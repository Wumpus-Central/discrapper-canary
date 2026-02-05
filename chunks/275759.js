"use strict";
n.d(t, { Ay: () => es, ZD: () => h, hb: () => E }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(49463),
    c = n(21119),
    d = n(153488),
    _ = n(994500),
    f = n(70730),
    p = n(652215);
let h = 5,
    m = 7,
    g = 864e5,
    E = 6048e5,
    A = 12096e5,
    I = 1,
    T = 5,
    y = 0.7,
    S = 0.5;
function v() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let C = v(),
    b = [],
    N = new Set(),
    R = new Set(),
    O = {},
    D = null,
    L = null;
function w() {
    return L ?? Date.now();
}
function x(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - m);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + m), n > i && n < a;
}
function P(e) {
    return !x(e, e.getFullYear()) && x(e, new Date().getFullYear());
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(b.length / 2);
        b.slice(0, e).forEach((e) => {
            N.add(e);
        }),
            b.forEach((e) => {
                R.add(e);
            });
    } else
        for (let e of b) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > y && N.add(e), null != t && t.dmProbability > S && R.add(e);
        }
}
function k() {
    if (null != D) return void ei(D);
    if ((V(), !d.A.hasConsented(p.YAq.PERSONALIZATION))) return;
    let { enabled: e } = f.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                P(n) && (b.push(e), (O[e] = { friendsSince: n }));
            }
        }
        b.sort((e, t) => c.A.compareByDmProbability(e, t)), M();
    }
}
function U(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function G() {
    return Array.from(R).some((e) => !C.lastShownFriendsListGiftIntents.includes(e));
}
function V() {
    (b.length = 0), N.clear(), R.clear(), (O = {});
}
function F() {
    V();
}
function B() {
    (C = v()), V();
}
function j() {
    C.lastShownFriendsListGiftIntents = Array.from(b);
}
function H(e) {
    let { recipientUserId: t } = e;
    z(t);
}
function Y() {
    C.giftUnreadNotificationLastDismissedTimes.push(w());
}
function W() {
    let e = w();
    C.giftUnreadNotificationLastDismissedTimes = C.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * g,
    );
}
function K(e) {
    let { recipientUserId: t } = e;
    z(t);
}
function z(e) {
    null == C.messageGiftIntentLastShownMap[e] && (C.messageGiftIntentLastShownMap[e] = w());
}
function $() {
    let e = w();
    for (let t in C.messageGiftIntentLastShownMap)
        e - C.messageGiftIntentLastShownMap[t] > A && delete C.messageGiftIntentLastShownMap[t];
}
function q() {
    let e = w(),
        t = g * m * 2;
    for (let n in C.profilePopoutGiftIntentsDismissMap)
        e - C.profilePopoutGiftIntentsDismissMap[n] > t && delete C.profilePopoutGiftIntentsDismissMap[n];
}
function Z() {
    C.lastShownFriendsListGiftIntents = [];
}
function Q() {
    C.messageGiftIntentLastShownMap = {};
}
function X() {
    C.giftUnreadNotificationLastDismissedTimes = [];
}
function J(e) {
    let { total: t } = e;
    if (null == t) {
        (D = null), k();
        return;
    }
    ei(t);
}
function ee(e) {
    let { date: t } = e;
    L = t;
}
function et() {
    L = null;
}
function en(e) {
    let { recipientUserId: t } = e;
    C.profilePopoutGiftIntentsDismissMap[t] = w();
}
function er() {
    C.profilePopoutGiftIntentsDismissMap = {};
}
function ei(e) {
    V();
    let { enabled: t } = f.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    D = e;
    let n = _.A.getFriendIDs().filter((e) => !_.A.isIgnored(e));
    i()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                b.push(e), (O[e] = { friendsSince: n });
            }
        }),
        b.sort((e, t) => c.A.compareByDmProbability(e, t)),
        M(!0);
}
class ea extends o.Ay.PersistedStore {
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
        (C = v()),
            null != e &&
                ((C.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (C.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (C.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (C.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (C.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([_.A, c.A, d.A, u.A], k),
            $(),
            W(),
            q();
    }
    getState() {
        return C;
    }
    getFriendAnniversaries() {
        return b;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(N).find((e) => null == C.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        W();
        let e = C.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= T) return !0;
        let t = w();
        return e.filter((e) => t - e <= g).length >= I;
    }
    canShowFriendsTabBadge() {
        return G();
    }
    getFriendAnniversaryYears(e) {
        let t = O[e];
        return null == t ? 0 : U(t.friendsSince);
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == C.profilePopoutGiftIntentsDismissMap[e] && null != O[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != C.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return D;
    }
    getDevToolCurrentDate() {
        return L;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(N);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(R);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return C.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return C.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return C.profilePopoutGiftIntentsDismissMap;
    }
}
let es = new ea(l.h, {
    CONNECTION_OPEN: F,
    LOGOUT: B,
    MESSAGE_GIFT_INTENT_SHOWN: H,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: j,
    GIFT_UNREAD_NOTIFICATION_DISMISS: Y,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: K,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: en,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: Z,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Q,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: X,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: J,
    DEV_TOOLS_SET_CURRENT_DATE: ee,
    DEV_TOOLS_RESET_CURRENT_DATE: et,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: er,
});
