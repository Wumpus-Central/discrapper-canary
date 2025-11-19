n.d(t, {
    Z: () => J,
    n: () => O,
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
    T = 5;
function S() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
    };
}
let A = S(),
    C = [],
    N = new Set(),
    R = {},
    P = null;
function D(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - b);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + b), n > i && n < a;
}
function w(e) {
    return !D(e, e.getFullYear()) && D(e, new Date().getFullYear());
}
function L() {
    if (null != P) return void X(P);
    if ((j(), !f.Z.hasConsented(h.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.w.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.Z.getFriendIDs()) {
            let t = _.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (!_.Z.isIgnored(e) && null != n && n.communicationProbability > 0 && null != t) {
                let n = new Date(t);
                w(n) && (C.push(e), (R[e] = { friendsSince: n }));
            }
        }
        C.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.communicationProbability : 0;
            return (null != r ? r.communicationProbability : 0) - i;
        }),
            (N = new Set(C.slice(0, E)));
    }
}
function x(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function M() {
    return Array.from(N).some((e) => !A.lastShownFriendsListGiftIntents.includes(e));
}
function j() {
    (C.length = 0), N.clear(), (R = {});
}
function k() {
    j();
}
function U() {
    (A = S()), j();
}
function G() {
    A.lastShownFriendsListGiftIntents = Array.from(N);
}
function B(e) {
    let { recipientUserId: t } = e;
    H(t);
}
function Z() {
    A.giftUnreadNotificationLastDismissedTimes.push(Date.now());
}
function F() {
    A.giftUnreadNotificationLastDismissedTimes = A.giftUnreadNotificationLastDismissedTimes.filter(
        (e) => Date.now() - e <= 7 * y,
    );
}
function V(e) {
    let { recipientUserId: t } = e;
    H(t);
}
function H(e) {
    null == A.messageGiftIntentLastShownMap[e] && (A.messageGiftIntentLastShownMap[e] = Date.now());
}
function Y() {
    for (let e in A.messageGiftIntentLastShownMap) {
        let t = A.messageGiftIntentLastShownMap[e];
        Date.now() - t > v && delete A.messageGiftIntentLastShownMap[e];
    }
}
function W() {
    A.lastShownFriendsListGiftIntents = [];
}
function K() {
    A.messageGiftIntentLastShownMap = {};
}
function z() {
    A.giftUnreadNotificationLastDismissedTimes = [];
}
function q(e) {
    let { total: t } = e;
    if (null == t) {
        (P = null), L();
        return;
    }
    X(t);
}
function X(e) {
    j();
    let { enabled: t } = p.w.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    P = e;
    let n = _.Z.getFriendIDs().filter((e) => !_.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                C.push(e), (R[e] = { friendsSince: n });
            }
        }),
        (N = new Set(C.slice(0, E)));
}
class Q extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if (((A = S()), null != e)) {
            var t;
            (A.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (A.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (A.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap)),
                (A.giftUnreadNotificationLastDismissedTimes = Array.from(
                    null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [],
                ));
        }
        this.syncWith([_.Z, d.Z, f.Z, u.Z], L), Y(), F();
    }
    getState() {
        return A;
    }
    getFriendAnniversaries() {
        return C;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = p.w.getConfig({ location: "PremiumGiftingIntentStore isTopAffinityFriendAnniversary" });
        return !!n && N.has(t);
    }
    canShowGiftUnreadNotification() {
        F();
        let e = A.giftUnreadNotificationLastDismissedTimes;
        return !!M() && (0 === e.length || (!(e.length >= T) && !(e.filter((e) => Date.now() - e <= y).length >= I)));
    }
    canShowFriendsTabBadge() {
        return M();
    }
    getFriendAnniversaryYears(e) {
        let t = R[e];
        return null == t ? 0 : x(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != A.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return P;
    }
}
m(Q, "displayName", "PremiumGiftingIntentStore"),
    m(Q, "persistKey", "PremiumGiftingIntentStore"),
    m(Q, "migrations", [
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
let J = new Q(c.Z, {
    CONNECTION_OPEN: k,
    LOGOUT: U,
    MESSAGE_GIFT_INTENT_SHOWN: B,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: G,
    GIFT_UNREAD_NOTIFICATION_DISMISS: Z,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: V,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: W,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: K,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: z,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: q,
});
