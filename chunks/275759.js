"use strict";
n.d(t, { Ay: () => ea, ZD: () => h, hb: () => g }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(989349),
    a = n.n(s),
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
    E = 864e5,
    g = 6048e5,
    A = 12096e5,
    I = 1,
    T = 5,
    S = 0.7,
    y = 0.5;
function v() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let N = v(),
    C = [],
    b = new Set(),
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
    let s = new Date(r.getTime());
    return s.setDate(r.getDate() + m), n > i && n < s;
}
function M(e) {
    return !x(e, e.getFullYear()) && x(e, new Date().getFullYear());
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(C.length / 2);
        C.slice(0, e).forEach((e) => {
            b.add(e);
        }),
            C.forEach((e) => {
                R.add(e);
            });
    } else
        for (let e of C) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > S && b.add(e), null != t && t.dmProbability > y && R.add(e);
        }
}
function k() {
    if (null != D) return void ei(D);
    if ((F(), !d.A.hasConsented(p.YAq.PERSONALIZATION))) return;
    let { enabled: e } = f.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                M(n) && (C.push(e), (O[e] = { friendsSince: n }));
            }
        }
        C.sort((e, t) => c.A.compareByDmProbability(e, t)), P();
    }
}
function U(e) {
    return Math.round(a()().diff(e, "years", !0));
}
function G() {
    return Array.from(R).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
}
function F() {
    (C.length = 0), b.clear(), R.clear(), (O = {});
}
function V() {
    F();
}
function B() {
    (N = v()), F();
}
function H() {
    N.lastShownFriendsListGiftIntents = Array.from(C);
}
function j(e) {
    let { recipientUserId: t } = e;
    z(t);
}
function Y() {
    N.giftUnreadNotificationLastDismissedTimes.push(w());
}
function W() {
    let e = w();
    N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * E,
    );
}
function K(e) {
    let { recipientUserId: t } = e;
    z(t);
}
function z(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = w());
}
function $() {
    let e = w();
    for (let t in N.messageGiftIntentLastShownMap)
        e - N.messageGiftIntentLastShownMap[t] > A && delete N.messageGiftIntentLastShownMap[t];
}
function q() {
    let e = w(),
        t = E * m * 2;
    for (let n in N.profilePopoutGiftIntentsDismissMap)
        e - N.profilePopoutGiftIntentsDismissMap[n] > t && delete N.profilePopoutGiftIntentsDismissMap[n];
}
function Z() {
    N.lastShownFriendsListGiftIntents = [];
}
function X() {
    N.messageGiftIntentLastShownMap = {};
}
function Q() {
    N.giftUnreadNotificationLastDismissedTimes = [];
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
    N.profilePopoutGiftIntentsDismissMap[t] = w();
}
function er() {
    N.profilePopoutGiftIntentsDismissMap = {};
}
function ei(e) {
    F();
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
                C.push(e), (O[e] = { friendsSince: n });
            }
        }),
        C.sort((e, t) => c.A.compareByDmProbability(e, t)),
        P(!0);
}
class es extends o.Ay.PersistedStore {
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
        (N = v()),
            null != e &&
                ((N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (N.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (N.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (N.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([_.A, c.A, d.A, u.A], k),
            $(),
            W(),
            q();
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return C;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(b).find((e) => null == N.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        W();
        let e = N.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= T) return !0;
        let t = w();
        return e.filter((e) => t - e <= E).length >= I;
    }
    canShowFriendsTabBadge() {
        return G();
    }
    getFriendAnniversaryYears(e) {
        let t = O[e];
        return null == t ? 0 : U(t.friendsSince);
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == N.profilePopoutGiftIntentsDismissMap[e] && null != O[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return D;
    }
    getDevToolCurrentDate() {
        return L;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(b);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(R);
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
let ea = new es(l.h, {
    CONNECTION_OPEN: V,
    LOGOUT: B,
    MESSAGE_GIFT_INTENT_SHOWN: j,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: H,
    GIFT_UNREAD_NOTIFICATION_DISMISS: Y,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: K,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: en,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: Z,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: X,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: Q,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: J,
    DEV_TOOLS_SET_CURRENT_DATE: ee,
    DEV_TOOLS_RESET_CURRENT_DATE: et,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: er,
});
