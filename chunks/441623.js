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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        friendsTabBadgeLastDismissedTime: null
    };
}
let T = I(),
    S = [],
    A = new Set(),
    N = {},
    C = null;
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
    if (null != C) return void K(C);
    if ((x(), !f.Z.hasConsented(h.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (e) {
        for (let e of _.Z.getFriendIDs()) {
            if (S.length >= b) break;
            let t = _.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (!_.Z.isIgnored(e) && null != n && n.communicationProbability > 0 && null != t) {
                let n = new Date(t);
                P(n) && (S.push(e), (N[e] = { friendsSince: n }));
            }
        }
        S.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.communicationProbability : 0;
            return (null != r ? r.communicationProbability : 0) - i;
        }),
            (A = new Set(S.slice(0, E)));
    }
}
function D(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
function L() {
    return Array.from(A).some((e) => !T.lastShownFriendsListGiftIntents.includes(e));
}
function x() {
    (S.length = 0), A.clear(), (N = {});
}
function k() {
    x();
}
function M() {
    (T = I()), x();
}
function j() {
    T.lastShownFriendsListGiftIntents = Array.from(A);
}
function U(e) {
    let { recipientUserId: t } = e;
    V(t);
}
function G() {
    T.friendsTabBadgeLastDismissedTime = Date.now();
}
function B(e) {
    let { recipientUserId: t } = e;
    V(t);
}
function V(e) {
    null == T.messageGiftIntentLastShownMap[e] && (T.messageGiftIntentLastShownMap[e] = Date.now());
}
function F() {
    for (let e in T.messageGiftIntentLastShownMap) {
        let t = T.messageGiftIntentLastShownMap[e];
        Date.now() - t > v && delete T.messageGiftIntentLastShownMap[e];
    }
}
function Z() {
    T.lastShownFriendsListGiftIntents = [];
}
function H() {
    T.messageGiftIntentLastShownMap = {};
}
function Y() {
    T.friendsTabBadgeLastDismissedTime = null;
}
function W(e) {
    let { total: t } = e;
    if (null == t) {
        (C = null), w();
        return;
    }
    K(t);
}
function K(e) {
    x();
    let { enabled: t } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    C = e;
    let n = _.Z.getFriendIDs().filter((e) => !_.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                S.push(e), (N[e] = { friendsSince: n });
            }
        }),
        (A = new Set(S.slice(0, E)));
}
class z extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (T = I()), null != e && ((T.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (T.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (T.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap))), this.syncWith([_.Z, d.Z, f.Z, u.Z], w), F();
    }
    getState() {
        return T;
    }
    getFriendAnniversaries() {
        return S;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && A.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null != (e = T.friendsTabBadgeLastDismissedTime) ? e : 0;
        return !(Date.now() - t <= O) && L();
    }
    getFriendAnniversaryYears(e) {
        let t = N[e];
        return null == t ? 0 : D(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != T.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return C;
    }
}
m(z, 'displayName', 'PremiumGiftingIntentStore'),
    m(z, 'persistKey', 'PremiumGiftingIntentStore'),
    m(z, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null != (t = e.friendsTabBadgeLastDismissedTime) ? t : null,
                      lastShownFriendsListGiftIntents: null != (n = e.lastShownFriendsListGiftIntents) ? n : [],
                      messageGiftIntentLastShownMap: {}
                  };
        }
    ]);
let q = new z(c.Z, {
    CONNECTION_OPEN: k,
    LOGOUT: M,
    MESSAGE_GIFT_INTENT_SHOWN: U,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: j,
    FRIENDS_TAB_BADGE_DISMISS: G,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: B,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: Z,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: H,
    DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: Y,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: W
});
