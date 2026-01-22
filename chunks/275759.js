n.d(t, {
    Ay: () => ec,
    ZD: () => E,
    hb: () => O,
}),
    n(896048),
    n(321073),
    n(638769);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(49463),
    d = n(21119),
    f = n(153488),
    p = n(994500),
    _ = n(70730),
    h = n(652215);
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
    A = 1209600000,
    v = 1,
    S = 5,
    I = 0.7,
    T = 0.5;
function C() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {},
    };
}
let N = C(),
    R = [],
    w = new Set(),
    P = new Set(),
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
        let e = Math.ceil(R.length / 2);
        R.slice(0, e).forEach((e) => {
            w.add(e);
        }),
            R.forEach((e) => {
                P.add(e);
            });
    } else
        for (let e of R) {
            let t = d.A.getUserAffinity(e);
            null != t && t.dmProbability > I && w.add(e), null != t && t.dmProbability > T && P.add(e);
        }
}
function G() {
    if (null != x) return void eo(x);
    if ((B(), !f.A.hasConsented(h.YAq.PERSONALIZATION))) return;
    let { enabled: e } = _.u.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of p.A.getFriendIDs()) {
            let t = p.A.getSince(e),
                n = d.A.getUserAffinity(e);
            if (p.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                k(n) && (R.push(e), (D[e] = { friendsSince: n }));
            }
        }
        R.sort((e, t) => d.A.compareByDmProbability(e, t)), U();
    }
}
function V(e) {
    return Math.round(o()().diff(e, "years", !0));
}
function F() {
    return Array.from(P).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
}
function B() {
    (R.length = 0), w.clear(), P.clear(), (D = {});
}
function H() {
    B();
}
function Y() {
    (N = C()), B();
}
function W() {
    N.lastShownFriendsListGiftIntents = Array.from(R);
}
function K(e) {
    let { recipientUserId: t } = e;
    Z(t);
}
function z() {
    N.giftUnreadNotificationLastDismissedTimes.push(j());
}
function q() {
    let e = j();
    N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(
        (t) => e - t <= 7 * y,
    );
}
function X(e) {
    let { recipientUserId: t } = e;
    Z(t);
}
function Z(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = j());
}
function Q() {
    let e = j();
    for (let t in N.messageGiftIntentLastShownMap)
        e - N.messageGiftIntentLastShownMap[t] > A && delete N.messageGiftIntentLastShownMap[t];
}
function $() {
    let e = j(),
        t = y * b * 2;
    for (let n in N.profilePopoutGiftIntentsDismissMap)
        e - N.profilePopoutGiftIntentsDismissMap[n] > t && delete N.profilePopoutGiftIntentsDismissMap[n];
}
function J() {
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
    eo(t);
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
function es() {
    N.profilePopoutGiftIntentsDismissMap = {};
}
function eo(e) {
    B();
    let { enabled: t } = _.u.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    x = e;
    let n = p.A.getFriendIDs().filter((e) => !p.A.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = p.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                R.push(e), (D[e] = { friendsSince: n });
            }
        }),
        R.sort((e, t) => d.A.compareByDmProbability(e, t)),
        U(!0);
}
class el extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        if (((N = C()), null != e)) {
            var t;
            (N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (N.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap)),
                (N.giftUnreadNotificationLastDismissedTimes = Array.from(
                    null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [],
                )),
                (N.profilePopoutGiftIntentsDismissMap = g({}, e.profilePopoutGiftIntentsDismissMap));
        }
        this.syncWith([p.A, d.A, f.A, u.A], G), Q(), q(), $();
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return R;
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive())
            return Array.from(w).find((e) => null == N.messageGiftIntentLastShownMap[e]);
    }
    isNotificationCooldownActive() {
        q();
        let e = N.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= S) return !0;
        let t = j();
        return e.filter((e) => t - e <= y).length >= v;
    }
    canShowFriendsTabBadge() {
        return F();
    }
    getFriendAnniversaryYears(e) {
        let t = D[e];
        return null == t ? 0 : V(t.friendsSince);
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == N.profilePopoutGiftIntentsDismissMap[e] && null != D[e];
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
        return Array.from(w);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(P);
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
m(el, "displayName", "PremiumGiftingIntentStore"),
    m(el, "persistKey", "PremiumGiftingIntentStore"),
    m(el, "migrations", [
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
let ec = new el(c.h, {
    CONNECTION_OPEN: H,
    LOGOUT: Y,
    MESSAGE_GIFT_INTENT_SHOWN: K,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: W,
    GIFT_UNREAD_NOTIFICATION_DISMISS: z,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: X,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: ea,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: J,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: ee,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: et,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: en,
    DEV_TOOLS_SET_CURRENT_DATE: er,
    DEV_TOOLS_RESET_CURRENT_DATE: ei,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: es,
});
