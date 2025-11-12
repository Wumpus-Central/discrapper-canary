n.d(t, { Z: () => q }), n(388685), n(539854), n(642613);
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
    b = 15,
    y = 7,
    O = 604800000,
    v = 1209600000;
function I() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
    };
}
let S = I(),
    T = [],
    A = new Set(),
    C = {},
    N = null;
function R(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - y);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + y), n > i && n < a;
}
function P(e) {
    return !R(e, e.getFullYear()) && R(e, new Date().getFullYear());
}
function w() {
    if (null != N) return void K(N);
    if ((L(), !f.Z.hasConsented(h.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.w.getConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    if (e) {
        for (let e of _.Z.getFriendIDs()) {
            if (T.length >= b) break;
            let t = _.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (!_.Z.isIgnored(e) && null != n && n.communicationProbability > 0 && null != t) {
                let n = new Date(t);
                P(n) && (T.push(e), (C[e] = { friendsSince: n }));
            }
        }
        T.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.communicationProbability : 0;
            return (null != r ? r.communicationProbability : 0) - i;
        }),
            (A = new Set(T.slice(0, E)));
    }
}
function D(e) {
    return Math.round(s()().diff(e, "years", !0));
}
function x() {
    return Array.from(A).some((e) => !S.lastShownFriendsListGiftIntents.includes(e));
}
function L() {
    (T.length = 0), A.clear(), (C = {});
}
function M() {
    L();
}
function j() {
    (S = I()), L();
}
function k() {
    S.lastShownFriendsListGiftIntents = Array.from(A);
}
function U(e) {
    let { recipientUserId: t } = e;
    Z(t);
}
function G() {
    S.friendsTabBadgeLastDismissedTime = Date.now();
}
function B(e) {
    let { recipientUserId: t } = e;
    Z(t);
}
function Z(e) {
    null == S.messageGiftIntentLastShownMap[e] && (S.messageGiftIntentLastShownMap[e] = Date.now());
}
function F() {
    for (let e in S.messageGiftIntentLastShownMap) {
        let t = S.messageGiftIntentLastShownMap[e];
        Date.now() - t > v && delete S.messageGiftIntentLastShownMap[e];
    }
}
function V() {
    S.lastShownFriendsListGiftIntents = [];
}
function H() {
    S.messageGiftIntentLastShownMap = {};
}
function Y() {
    S.friendsTabBadgeLastDismissedTime = null;
}
function W(e) {
    let { total: t } = e;
    if (null == t) {
        (N = null), w();
        return;
    }
    K(t);
}
function K(e) {
    L();
    let { enabled: t } = p.w.getConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t) return;
    N = e;
    let n = _.Z.getFriendIDs().filter((e) => !_.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                T.push(e), (C[e] = { friendsSince: n });
            }
        }),
        (A = new Set(T.slice(0, E)));
}
class z extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (S = I()),
            null != e &&
                ((S.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (S.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (S.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap))),
            this.syncWith([_.Z, d.Z, f.Z, u.Z], w),
            F();
    }
    getState() {
        return S;
    }
    getFriendAnniversaries() {
        return T;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = p.w.getConfig({ location: "PremiumGiftingIntentStore isTopAffinityFriendAnniversary" });
        return !!n && A.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null != (e = S.friendsTabBadgeLastDismissedTime) ? e : 0;
        return !(Date.now() - t <= O) && x();
    }
    getFriendAnniversaryYears(e) {
        let t = C[e];
        return null == t ? 0 : D(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != S.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return N;
    }
}
m(z, "displayName", "PremiumGiftingIntentStore"),
    m(z, "persistKey", "PremiumGiftingIntentStore"),
    m(z, "migrations", [
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
    ]);
let q = new z(c.Z, {
    CONNECTION_OPEN: M,
    LOGOUT: j,
    MESSAGE_GIFT_INTENT_SHOWN: U,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: k,
    FRIENDS_TAB_BADGE_DISMISS: G,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: B,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: V,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: H,
    DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: Y,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: W,
});
