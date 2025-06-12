n.d(t, { Z: () => X }), n(388685), n(539854), n(642613);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(353926),
    d = n(752048),
    _ = n(480294),
    f = n(699516),
    p = n(709054),
    h = n(522558),
    m = n(981631);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = 5,
    y = 15,
    O = 7,
    v = 604800000,
    I = 1209600000;
function T() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let S = T(),
    A = [],
    N = new Set(),
    C = {},
    R = null;
function P(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - O);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + O), n > i && n < a;
}
function w(e) {
    return !P(e, e.getFullYear()) && P(e, new Date().getFullYear());
}
function D() {
    if (null != R) return void z(R);
    if ((M(), !_.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (e) {
        for (let e of p.default.keys(f.Z.getRelationships())) {
            if (A.length >= y) break;
            let t = f.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (f.Z.getRelationshipType(e) === m.OGo.FRIEND && !f.Z.isIgnored(e) && null != n && n.communicationProbability > 0 && null != t) {
                let n = new Date(t);
                w(n) && (A.push(e), (C[e] = { friendsSince: n }));
            }
        }
        A.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.communicationProbability : 0;
            return (null != r ? r.communicationProbability : 0) - i;
        }),
            (N = new Set(A.slice(0, b)));
    }
}
function L(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
function x() {
    return Array.from(N).some((e) => !S.lastShownFriendsListGiftIntents.includes(e));
}
function M() {
    (A.length = 0), N.clear(), (C = {});
}
function k() {
    M();
}
function j() {
    (S = T()), M();
}
function U() {
    S.lastShownFriendsListGiftIntents = Array.from(N);
}
function G(e) {
    let { recipientUserId: t } = e;
    F(t);
}
function B() {
    S.friendsTabBadgeLastDismissedTime = Date.now();
}
function V(e) {
    let { recipientUserId: t } = e;
    F(t);
}
function F(e) {
    null == S.messageGiftIntentLastShownMap[e] && (S.messageGiftIntentLastShownMap[e] = Date.now());
}
function Z() {
    for (let e in S.messageGiftIntentLastShownMap) {
        let t = S.messageGiftIntentLastShownMap[e];
        Date.now() - t > I && delete S.messageGiftIntentLastShownMap[e];
    }
}
function H() {
    S.lastShownFriendsListGiftIntents = [];
}
function Y() {
    S.messageGiftIntentLastShownMap = {};
}
function W() {
    S.friendsTabBadgeLastDismissedTime = null;
}
function K(e) {
    let { total: t } = e;
    if (null == t) {
        (R = null), D();
        return;
    }
    z(t);
}
function z(e) {
    M();
    let { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    R = e;
    let n = f.Z.getFriendIDs().filter((e) => !f.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = f.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                A.push(e), (C[e] = { friendsSince: n });
            }
        }),
        (N = new Set(A.slice(0, b)));
}
class q extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (S = T()), null != e && ((S.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (S.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (S.messageGiftIntentLastShownMap = E({}, e.messageGiftIntentLastShownMap))), this.syncWith([f.Z, d.Z, _.Z, u.Z], D), Z();
    }
    getState() {
        return S;
    }
    getFriendAnniversaries() {
        return A;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && N.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null != (e = S.friendsTabBadgeLastDismissedTime) ? e : 0;
        return !(Date.now() - t <= v) && x();
    }
    getFriendAnniversaryYears(e) {
        let t = C[e];
        return null == t ? 0 : L(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != S.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return R;
    }
}
g(q, 'displayName', 'PremiumGiftingIntentStore'),
    g(q, 'persistKey', 'PremiumGiftingIntentStore'),
    g(q, 'migrations', [
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
let X = new q(c.Z, {
    CONNECTION_OPEN: k,
    LOGOUT: j,
    MESSAGE_GIFT_INTENT_SHOWN: G,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: U,
    FRIENDS_TAB_BADGE_DISMISS: B,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: V,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: H,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Y,
    DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: W,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: K
});
