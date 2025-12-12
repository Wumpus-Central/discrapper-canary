n.d(t, {
    ZP: () => er,
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
    T = 0.7;
function C() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
    };
}
let A = C(),
    N = [],
    P = new Set(),
    R = {},
    w = null,
    D = null;
function x() {
    return null != D ? D : Date.now();
}
function L(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - b);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + b), n > i && n < a;
}
function j(e) {
    return !L(e, e.getFullYear()) && L(e, new Date().getFullYear());
}
function M() {
    if (null != w) return void et(w);
    if ((G(), !f.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = _.w.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (!e) return;
    for (let e of p.Z.getFriendIDs()) {
        let t = p.Z.getSince(e),
            n = d.Z.getUserAffinity(e);
        if (p.Z.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
            let n = new Date(t);
            j(n) && (N.push(e), (R[e] = { friendsSince: n }));
        }
    }
    N.sort((e, t) => d.Z.compareByDmProbability(e, t));
    let t = 0;
    for (let e of N)
        null != d.Z.getUserAffinity(e) && d.Z.getUserAffinity(e).dmProbability > T && t < E && (P.add(e), t++);
}
function k(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function U() {
    return Array.from(P).some((e) => null == A.messageGiftIntentLastShownMap[e]);
}
function G() {
    (N.length = 0), P.clear(), (R = {});
}
function Z() {
    G();
}
function F() {
    (A = C()), G();
}
function B() {
    A.lastShownFriendsListGiftIntents = Array.from(P);
}
function V(e) {
    let { recipientUserId: t } = e;
    K(t);
}
function H() {
    A.giftUnreadNotificationLastDismissedTimes.push(x());
}
function Y() {
    let e = x();
    A.giftUnreadNotificationLastDismissedTimes = A.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * y,
    );
}
function W(e) {
    let { recipientUserId: t } = e;
    K(t);
}
function K(e) {
    null == A.messageGiftIntentLastShownMap[e] && (A.messageGiftIntentLastShownMap[e] = x());
}
function z() {
    let e = x();
    for (let t in A.messageGiftIntentLastShownMap)
        e - A.messageGiftIntentLastShownMap[t] > v && delete A.messageGiftIntentLastShownMap[t];
}
function q() {
    A.lastShownFriendsListGiftIntents = [];
}
function Q() {
    A.messageGiftIntentLastShownMap = {};
}
function X() {
    A.giftUnreadNotificationLastDismissedTimes = [];
}
function J(e) {
    let { total: t } = e;
    if (null == t) {
        (w = null), M();
        return;
    }
    et(t);
}
function $(e) {
    let { date: t } = e;
    D = t;
}
function ee() {
    D = null;
}
function et(e) {
    G();
    let { enabled: t } = _.w.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    w = e;
    let n = p.Z.getFriendIDs().filter((e) => !p.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = p.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                N.push(e), (R[e] = { friendsSince: n });
            }
        });
    let r = 0;
    for (let e of N) if (null == A.messageGiftIntentLastShownMap[e] && (P.add(e), ++r >= E)) break;
}
class en extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if (((A = C()), null != e)) {
            var t;
            (A.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (A.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (A.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap)),
                (A.giftUnreadNotificationLastDismissedTimes = Array.from(
                    null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [],
                ));
        }
        this.syncWith([p.Z, d.Z, f.Z, u.Z], M), z(), Y();
    }
    getState() {
        return A;
    }
    getFriendAnniversaries() {
        return N;
    }
    isFreshTopAffinityFriendAnniversary(e) {
        let { userId: t } = e;
        return P.has(t) && null == A.messageGiftIntentLastShownMap[t];
    }
    canShowGiftNotification() {
        Y();
        let e = A.giftUnreadNotificationLastDismissedTimes;
        if (!U()) return !1;
        if (0 === e.length) return !0;
        if (e.length >= I) return !1;
        let t = x();
        return !(e.filter((e) => t - e <= y).length >= S);
    }
    canShowFriendsTabBadge() {
        return U();
    }
    getFriendAnniversaryYears(e) {
        let t = R[e];
        return null == t ? 0 : k(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != A.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return w;
    }
    getDevToolCurrentDate() {
        return D;
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return A.giftUnreadNotificationLastDismissedTimes;
    }
    getMessageGiftIntentLastShownMap() {
        return A.messageGiftIntentLastShownMap;
    }
}
h(en, "displayName", "PremiumGiftingIntentStore"),
    h(en, "persistKey", "PremiumGiftingIntentStore"),
    h(en, "migrations", [
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
let er = new en(c.Z, {
    CONNECTION_OPEN: Z,
    LOGOUT: F,
    MESSAGE_GIFT_INTENT_SHOWN: V,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: B,
    GIFT_UNREAD_NOTIFICATION_DISMISS: H,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: W,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: q,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Q,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: X,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: J,
    DEV_TOOLS_SET_CURRENT_DATE: $,
    DEV_TOOLS_RESET_CURRENT_DATE: ee,
});
