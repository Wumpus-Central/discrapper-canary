n.d(t, {
    ZP: () => $,
    n3: () => O,
    zj: () => E,
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
    _ = n(699516),
    p = n(522558),
    h = n(981631);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = 5,
    b = 7,
    y = 86400000,
    O = 604800000,
    v = 1209600000,
    I = 1,
    T = 5,
    S = 0.7;
function A() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
    };
}
let C = A(),
    N = [],
    R = new Set(),
    P = {},
    D = null;
function w(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - b);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + b), n > i && n < a;
}
function L(e) {
    return !w(e, e.getFullYear()) && w(e, new Date().getFullYear());
}
function x() {
    if (null != D) return void Q(D);
    if ((j(), !f.Z.hasConsented(h.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.w.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (!e) return;
    for (let e of _.Z.getFriendIDs()) {
        let t = _.Z.getSince(e),
            n = d.Z.getUserAffinity(e);
        if (_.Z.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
            let n = new Date(t);
            L(n) && (N.push(e), (P[e] = { friendsSince: n }));
        }
    }
    N.sort((e, t) => {
        let n = d.Z.getUserAffinity(e),
            r = d.Z.getUserAffinity(t),
            i = null != n ? n.communicationProbability : 0;
        return (null != r ? r.communicationProbability : 0) - i;
    });
    let t = 0;
    for (let e of N)
        null != d.Z.getUserAffinity(e) && d.Z.getUserAffinity(e).dmProbability > S && t < E && (R.add(e), t++);
}
function M(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function k() {
    return Array.from(R).some((e) => null == C.messageGiftIntentLastShownMap[e]);
}
function j() {
    (N.length = 0), R.clear(), (P = {});
}
function U() {
    j();
}
function G() {
    (C = A()), j();
}
function B() {
    C.lastShownFriendsListGiftIntents = Array.from(R);
}
function Z(e) {
    let { recipientUserId: t } = e;
    W(t);
}
function F() {
    C.giftUnreadNotificationLastDismissedTimes.push(Date.now());
}
function V() {
    C.giftUnreadNotificationLastDismissedTimes = C.giftUnreadNotificationLastDismissedTimes.filter(
        (e) => Date.now() - e <= 7 * y,
    );
}
function H(e) {
    let { recipientUserId: t } = e;
    W(t);
}
function W(e) {
    null == C.messageGiftIntentLastShownMap[e] && (C.messageGiftIntentLastShownMap[e] = Date.now());
}
function Y() {
    for (let e in C.messageGiftIntentLastShownMap) {
        let t = C.messageGiftIntentLastShownMap[e];
        Date.now() - t > v && delete C.messageGiftIntentLastShownMap[e];
    }
}
function K() {
    C.lastShownFriendsListGiftIntents = [];
}
function z() {
    C.messageGiftIntentLastShownMap = {};
}
function q() {
    C.giftUnreadNotificationLastDismissedTimes = [];
}
function X(e) {
    let { total: t } = e;
    if (null == t) {
        (D = null), x();
        return;
    }
    Q(t);
}
function Q(e) {
    j();
    let { enabled: t } = p.w.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    D = e;
    let n = _.Z.getFriendIDs().filter((e) => !_.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                N.push(e), (P[e] = { friendsSince: n });
            }
        });
    let r = 0;
    for (let e of n) if (null == C.messageGiftIntentLastShownMap[e] && (R.add(e), ++r >= E)) break;
}
class J extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if (((C = A()), null != e)) {
            var t;
            (C.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (C.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (C.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap)),
                (C.giftUnreadNotificationLastDismissedTimes = Array.from(
                    null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [],
                ));
        }
        this.syncWith([_.Z, d.Z, f.Z, u.Z], x), Y(), V();
    }
    getState() {
        return C;
    }
    getFriendAnniversaries() {
        return N;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = p.w.getConfig({ location: "PremiumGiftingIntentStore isTopAffinityFriendAnniversary" });
        return !!n && R.has(t) && null == C.messageGiftIntentLastShownMap[t];
    }
    canShowGiftUnreadNotification() {
        V();
        let e = C.giftUnreadNotificationLastDismissedTimes;
        return !!k() && (0 === e.length || (!(e.length >= T) && !(e.filter((e) => Date.now() - e <= y).length >= I)));
    }
    canShowFriendsTabBadge() {
        return k();
    }
    getFriendAnniversaryYears(e) {
        let t = P[e];
        return null == t ? 0 : M(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != C.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return D;
    }
}
m(J, "displayName", "PremiumGiftingIntentStore"),
    m(J, "persistKey", "PremiumGiftingIntentStore"),
    m(J, "migrations", [
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
    ]);
let $ = new J(c.Z, {
    CONNECTION_OPEN: U,
    LOGOUT: G,
    MESSAGE_GIFT_INTENT_SHOWN: Z,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: B,
    GIFT_UNREAD_NOTIFICATION_DISMISS: F,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: H,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: K,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: z,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: q,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: X,
});
