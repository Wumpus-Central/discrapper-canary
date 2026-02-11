"use strict";
n.d(t, { Ay: () => eo, ZD: () => p, hb: () => A }), n(321073);
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
    h = n(652215);
let p = 5,
    g = 7,
    E = 864e5,
    A = 6048e5,
    I = 12096e5,
    T = 1,
    y = 5,
    S = 0.7,
    v = 0.5;
function C() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let b = C(),
    N = [],
    R = new Set(),
    O = new Set(),
    D = {},
    L = null,
    w = null;
function x() {
    return w ?? Date.now();
}
function P(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - g);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + g), n > i && n < a;
}
function M(e) {
    return !P(e, e.getFullYear()) && P(e, new Date().getFullYear());
}
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(N.length / 2);
        N.slice(0, e).forEach((e) => {
            R.add(e);
        }),
            N.forEach((e) => {
                O.add(e);
            });
    } else
        for (let e of N) {
            let t = c.A.getUserAffinity(e);
            null != t && t.dmProbability > S && R.add(e), null != t && t.dmProbability > v && O.add(e);
        }
}
function U() {
    if (null != L) return void ea(L);
    if ((V(), !d.A.hasConsented(h.YAq.PERSONALIZATION))) return;
    let { enabled: e } = f.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.A.getFriendIDs()) {
            let t = _.A.getSince(e),
                n = c.A.getUserAffinity(e);
            if (_.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                M(n) && (N.push(e), (D[e] = { friendsSince: n }));
            }
        }
        N.sort((e, t) => c.A.compareByDmProbability(e, t)), k();
    }
}
function G(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function F() {
    return Array.from(O).some((e) => !b.lastShownFriendsListGiftIntents.includes(e));
}
function V() {
    (N.length = 0), R.clear(), O.clear(), (D = {});
}
function B() {
    V();
}
function j() {
    (b = C()), V();
}
function H() {
    b.lastShownFriendsListGiftIntents = Array.from(N);
}
function Y(e) {
    let { recipientUserId: t } = e;
    z(t);
}
function W() {
    b.giftUnreadNotificationLastDismissedTimes.push(x());
}
function K() {
    let e = x();
    b.giftUnreadNotificationLastDismissedTimes = b.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * E,
    );
}
function $(e) {
    let { recipientUserId: t } = e;
    z(t);
}
function z(e) {
    null == b.messageGiftIntentLastShownMap[e] && (b.messageGiftIntentLastShownMap[e] = x());
}
function q() {
    let e = x();
    for (let t in b.messageGiftIntentLastShownMap)
        e - b.messageGiftIntentLastShownMap[t] > I && delete b.messageGiftIntentLastShownMap[t];
}
function X() {
    let e = x(),
        t = E * g * 2;
    for (let n in b.profilePopoutGiftIntentsDismissMap)
        e - b.profilePopoutGiftIntentsDismissMap[n] > t && delete b.profilePopoutGiftIntentsDismissMap[n];
}
function Z() {
    b.lastShownFriendsListGiftIntents = [];
}
function Q() {
    b.messageGiftIntentLastShownMap = {};
}
function J() {
    b.giftUnreadNotificationLastDismissedTimes = [];
}
function ee(e) {
    let { total: t } = e;
    if (null == t) {
        (L = null), U();
        return;
    }
    ea(t);
}
function et(e) {
    let { date: t } = e;
    w = t;
}
function en() {
    w = null;
}
function er(e) {
    let { recipientUserId: t } = e;
    b.profilePopoutGiftIntentsDismissMap[t] = x();
}
function ei() {
    b.profilePopoutGiftIntentsDismissMap = {};
}
function ea(e) {
    V();
    let { enabled: t } = f.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    L = e;
    let n = _.A.getFriendIDs().filter((e) => !_.A.isIgnored(e));
    i()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                N.push(e), (D[e] = { friendsSince: n });
            }
        }),
        N.sort((e, t) => c.A.compareByDmProbability(e, t)),
        k(!0);
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
        (b = C()),
            null != e &&
                ((b.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (b.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (b.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (b.giftUnreadNotificationLastDismissedTimes = Array.from(
                    e.giftUnreadNotificationLastDismissedTimes ?? [],
                )),
                (b.profilePopoutGiftIntentsDismissMap = { ...e.profilePopoutGiftIntentsDismissMap })),
            this.syncWith([_.A, c.A, d.A, u.A], U),
            q(),
            K(),
            X();
    }
    getState() {
        return b;
    }
    getFriendAnniversaries() {
        return N;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(R).find((e) => null == b.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        K();
        let e = b.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= y) return !0;
        let t = x();
        return e.filter((e) => t - e <= E).length >= T;
    }
    canShowFriendsTabBadge() {
        return F();
    }
    getFriendAnniversaryYears(e) {
        let t = D[e];
        return null == t ? 0 : G(t.friendsSince);
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == b.profilePopoutGiftIntentsDismissMap[e] && null != D[e];
    }
    isGiftIntentMessageInCooldown(e) {
        return null != b.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return L;
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
    getGiftUnreadNotificationLastDismissedTimes() {
        return b.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return b.messageGiftIntentLastShownMap;
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return b.profilePopoutGiftIntentsDismissMap;
    }
}
let eo = new es(l.h, {
    CONNECTION_OPEN: B,
    LOGOUT: j,
    MESSAGE_GIFT_INTENT_SHOWN: Y,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: H,
    GIFT_UNREAD_NOTIFICATION_DISMISS: W,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: $,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: er,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: Z,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Q,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: J,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: ee,
    DEV_TOOLS_SET_CURRENT_DATE: et,
    DEV_TOOLS_RESET_CURRENT_DATE: en,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: ei,
});
