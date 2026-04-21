"use strict";
n.d(t, { Ay: () => es, ZD: () => h, hb: () => g }), n(321073);
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
    R = new Set(),
    O = new Set(),
    b = {},
    D = null,
    L = null;
function w() {
    return L ?? Date.now();
}
function M(e) {
    let t = a()(),
        n = a()(e);
    for (let e of [-1, 0, 1]) {
        let r = n.clone().year(t.year() + e);
        if (!r.isSame(n, "day") && Math.abs(t.diff(r, "days")) <= m) return !0;
    }
    return !1;
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(C.length / 2);
        C.slice(0, e).forEach((e) => {
            R.add(e);
        }),
            C.forEach((e) => {
                O.add(e);
            });
    } else
        for (let e of C) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > S && R.add(e), null != t && t.dmProbability > y && O.add(e);
        }
}
function x() {
    if (null != D) return void er(D);
    if ((G(), !d.A.hasConsented(p.YAq.PERSONALIZATION))) return;
    let { enabled: e } = f.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                M(n) && (C.push(e), (b[e] = { friendsSince: n }));
            }
        }
        C.sort((e, t) => c.A.compareByDmProbability(e, t)), P();
    }
}
function k(e) {
    return Math.round(a()().diff(e, "years", !0));
}
function U() {
    return Array.from(O).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
}
function G() {
    (C.length = 0), R.clear(), O.clear(), (b = {});
}
function F() {
    G();
}
function V() {
    (N = v()), G();
}
function B() {
    N.lastShownFriendsListGiftIntents = Array.from(C);
}
function H(e) {
    let { recipientUserId: t } = e;
    K(t);
}
function j() {
    N.giftUnreadNotificationLastDismissedTimes.push(w());
}
function Y() {
    let e = w();
    N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * E,
    );
}
function W(e) {
    let { recipientUserId: t } = e;
    K(t);
}
function K(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = w());
}
function $() {
    let e = w();
    for (let t in N.messageGiftIntentLastShownMap)
        e - N.messageGiftIntentLastShownMap[t] > A && delete N.messageGiftIntentLastShownMap[t];
}
function z() {
    let e = w(),
        t = E * m * 2;
    for (let n in N.profilePopoutGiftIntentsDismissMap)
        e - N.profilePopoutGiftIntentsDismissMap[n] > t && delete N.profilePopoutGiftIntentsDismissMap[n];
}
function q() {
    N.lastShownFriendsListGiftIntents = [];
}
function Z() {
    N.messageGiftIntentLastShownMap = {};
}
function X() {
    N.giftUnreadNotificationLastDismissedTimes = [];
}
function Q(e) {
    let { total: t } = e;
    if (null == t) {
        (D = null), x();
        return;
    }
    er(t);
}
function J(e) {
    let { date: t } = e;
    L = t;
}
function ee() {
    L = null;
}
function et(e) {
    let { recipientUserId: t } = e;
    N.profilePopoutGiftIntentsDismissMap[t] = w();
}
function en() {
    N.profilePopoutGiftIntentsDismissMap = {};
}
function er(e) {
    G();
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
                C.push(e), (b[e] = { friendsSince: n });
            }
        }),
        C.sort((e, t) => c.A.compareByDmProbability(e, t)),
        P(!0);
}
class ei extends o.Ay.PersistedStore {
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
            this.syncWith([_.A, c.A, d.A, u.A], x),
            $(),
            Y(),
            z();
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return C;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(R).find((e) => null == N.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        Y();
        let e = N.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= T) return !0;
        let t = w();
        return e.filter((e) => t - e <= E).length >= I;
    }
    canShowFriendsTabBadge() {
        return U();
    }
    getFriendAnniversaryYears(e) {
        let t = b[e];
        return null == t ? 0 : k(t.friendsSince);
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == N.profilePopoutGiftIntentsDismissMap[e] && null != b[e];
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
        return Array.from(R);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(O);
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
let es = new ei(l.h, {
    CONNECTION_OPEN: F,
    LOGOUT: V,
    MESSAGE_GIFT_INTENT_SHOWN: H,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: B,
    GIFT_UNREAD_NOTIFICATION_DISMISS: j,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: W,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: et,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: q,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Z,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: X,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: Q,
    DEV_TOOLS_SET_CURRENT_DATE: J,
    DEV_TOOLS_RESET_CURRENT_DATE: ee,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: en,
});
