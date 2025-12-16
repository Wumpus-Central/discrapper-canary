n.d(t, {
    ZP: () => ec,
    n3: () => O,
    nN: () => E,
}),
    n(388685),
    n(539854),
    n(642613);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(353926),
    d = n(752048),
    f = n(480294),
    p = n(699516),
    _ = n(522558),
    m = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let E = 5,
    b = 7,
    y = 86400000,
    O = 604800000,
    v = 1209600000,
    S = 1,
    I = 5,
    T = 0.7,
    C = 0.5;
function A() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let N = A(),
    P = [],
    R = new Set(),
    w = new Set(),
    D = {},
    x = null,
    L = null;
function j() {
    return null != L ? L : Date.now();
}
function M(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - b);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + b), n > i && n < a;
}
function k(e) {
    return !M(e, e.getFullYear()) && M(e, new Date().getFullYear());
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(P.length / 2);
        P.slice(0, e).forEach((e) => {
            R.add(e);
        }),
            P.forEach((e) => {
                w.add(e);
            });
    } else
        for (let e of P) {
            let t = d.Z.getUserAffinity(e);
            null != t && t.dmProbability > T && R.add(e), null != t && t.dmProbability > C && w.add(e);
        }
}
function G() {
    if (null != x) return void es(x);
    if ((B(), !f.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = _.w.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of p.Z.getFriendIDs()) {
            let t = p.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (p.Z.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                k(n) && (P.push(e), (D[e] = { friendsSince: n }));
            }
        }
        P.sort((e, t) => d.Z.compareByDmProbability(e, t)), U();
    }
}
function Z(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function F() {
    return Array.from(w).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
}
function B() {
    (P.length = 0), R.clear(), w.clear(), (D = {});
}
function V() {
    B();
}
function H() {
    (N = A()), B();
}
function Y() {
    N.lastShownFriendsListGiftIntents = Array.from(P);
}
function W(e) {
    let { recipientUserId: t } = e;
    Q(t);
}
function K() {
    N.giftUnreadNotificationLastDismissedTimes.push(j());
}
function z() {
    let e = j();
    N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * y,
    );
}
function q(e) {
    let { recipientUserId: t } = e;
    Q(t);
}
function Q(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = j());
}
function X() {
    let e = j();
    for (let t in N.messageGiftIntentLastShownMap)
        e - N.messageGiftIntentLastShownMap[t] > v && delete N.messageGiftIntentLastShownMap[t];
}
function J() {
    let e = j(),
        t = y * b * 2;
    for (let n in N.profilePopoutGiftIntentsDismissMap)
        e - N.profilePopoutGiftIntentsDismissMap[n] > t && delete N.profilePopoutGiftIntentsDismissMap[n];
}
function $() {
    N.lastShownFriendsListGiftIntents = [];
}
function ee() {
    N.messageGiftIntentLastShownMap = {};
}
function et() {
    N.giftUnreadNotificationLastDismissedTimes = [];
}
function en(e) {
    let { total: t } = e;
    if (null == t) {
        (x = null), G();
        return;
    }
    es(t);
}
function er(e) {
    let { date: t } = e;
    L = t;
}
function ei() {
    L = null;
}
function ea(e) {
    let { recipientUserId: t } = e;
    N.profilePopoutGiftIntentsDismissMap[t] = j();
}
function eo() {
    N.profilePopoutGiftIntentsDismissMap = {};
}
function es(e) {
    B();
    let { enabled: t } = _.w.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    x = e;
    let n = p.Z.getFriendIDs().filter((e) => !p.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = p.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                P.push(e), (D[e] = { friendsSince: n });
            }
        }),
        P.sort((e, t) => d.Z.compareByDmProbability(e, t)),
        U(!0);
}
class el extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if (((N = A()), null != e)) {
            var t;
            (N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (N.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap)),
                (N.giftUnreadNotificationLastDismissedTimes = Array.from(
                    null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [],
                )),
                (N.profilePopoutGiftIntentsDismissMap = g({}, e.profilePopoutGiftIntentsDismissMap));
        }
        this.syncWith([p.Z, d.Z, f.Z, u.Z], G), X(), z(), J();
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return P;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(R).find((e) => null == N.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        z();
        let e = N.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= I) return !0;
        let t = j();
        return e.filter((e) => t - e <= y).length >= S;
    }
    canShowFriendsTabBadge() {
        return F();
    }
    getFriendAnniversaryYears(e) {
        let t = D[e];
        return null == t ? 0 : Z(t.friendsSince);
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == N.profilePopoutGiftIntentsDismissMap[e] && this.getFriendAnniversaryYears(e) > 0;
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return x;
    }
    getDevToolCurrentDate() {
        return L;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(R);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(w);
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return N.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return N.messageGiftIntentLastShownMap;
    }
}
h(el, "displayName", "PremiumGiftingIntentStore"),
    h(el, "persistKey", "PremiumGiftingIntentStore"),
    h(el, "migrations", [
        (e) => {
            var t, n;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null != (t = e.friendsTabBadgeLastDismissedTime) ? t : null,
                      lastShownFriendsListGiftIntents: null != (n = e.lastShownFriendsListGiftIntents) ? n : [],
                      messageGiftIntentLastShownMap: {},
                  };
        },
        (e) => {
            var t, n;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null,
                      lastShownFriendsListGiftIntents: null != (t = e.lastShownFriendsListGiftIntents) ? t : [],
                      messageGiftIntentLastShownMap: null != (n = e.messageGiftIntentLastShownMap) ? n : {},
                      giftUnreadNotificationLastDismissedTimes: [],
                  };
        },
        (e) => {
            var t, n, r;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null,
                      lastShownFriendsListGiftIntents: null != (t = e.lastShownFriendsListGiftIntents) ? t : [],
                      messageGiftIntentLastShownMap: null != (n = e.messageGiftIntentLastShownMap) ? n : {},
                      giftUnreadNotificationLastDismissedTimes:
                          null != (r = e.giftUnreadNotificationLastDismissedTimes) ? r : [],
                      profilePopoutGiftIntentsDismissMap: {},
                  };
        },
    ]);
let ec = new el(c.Z, {
    CONNECTION_OPEN: V,
    LOGOUT: H,
    MESSAGE_GIFT_INTENT_SHOWN: W,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: Y,
    GIFT_UNREAD_NOTIFICATION_DISMISS: K,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: q,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: ea,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: $,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: ee,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: et,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: en,
    DEV_TOOLS_SET_CURRENT_DATE: er,
    DEV_TOOLS_RESET_CURRENT_DATE: ei,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: eo,
});
