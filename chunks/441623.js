n.d(t, { Z: () => X }), n(47120), n(653041), n(230036);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(913527),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(353926),
    d = n(814443),
    f = n(480294),
    _ = n(699516),
    p = n(709054),
    h = n(522558),
    m = n(581025),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = 5,
    v = 15,
    O = 7,
    I = 604800000,
    S = 1209600000;
function T() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let N = T(),
    A = [],
    C = new Set(),
    R = {},
    P = null;
function w(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - O);
    let o = new Date(r.getTime());
    return o.setDate(r.getDate() + O), n > i && n < o;
}
function D(e) {
    return !w(e, e.getFullYear()) && w(e, new Date().getFullYear());
}
function L() {
    if (null != P) return void q(P);
    if ((k(), !f.Z.hasConsented(g.pjP.PERSONALIZATION))) return;
    let { enabled: e } = m.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (e || t) {
        for (let e of p.default.keys(_.Z.getRelationships())) {
            if (A.length >= v) break;
            let t = _.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (_.Z.getRelationshipType(e) === g.OGo.FRIEND && !_.Z.isIgnored(e) && null != n && n.affinity > 0 && null != t) {
                let n = new Date(t);
                D(n) && (A.push(e), (R[e] = { friendsSince: n }));
            }
        }
        A.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
            (C = new Set(A.slice(0, y)));
    }
}
function x(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
function M() {
    return Array.from(C).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
}
function k() {
    (A.length = 0), C.clear(), (R = {});
}
function j() {
    k();
}
function U() {
    (N = T()), k();
}
function G() {
    N.lastShownFriendsListGiftIntents = Array.from(C);
}
function B(e) {
    let { recipientUserId: t } = e;
    Z(t);
}
function F() {
    N.friendsTabBadgeLastDismissedTime = Date.now();
}
function V(e) {
    let { recipientUserId: t } = e;
    Z(t);
}
function Z(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = Date.now());
}
function H() {
    for (let e in N.messageGiftIntentLastShownMap) {
        let t = N.messageGiftIntentLastShownMap[e];
        Date.now() - t > S && delete N.messageGiftIntentLastShownMap[e];
    }
}
function W() {
    N.lastShownFriendsListGiftIntents = [];
}
function Y() {
    N.messageGiftIntentLastShownMap = {};
}
function K() {
    N.friendsTabBadgeLastDismissedTime = null;
}
function z(e) {
    let { total: t } = e;
    if (null == t) {
        (P = null), L();
        return;
    }
    q(t);
}
function q(e) {
    k();
    let { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    P = e;
    let n = _.Z.getFriendIDs().filter((e) => !_.Z.isIgnored(e));
    o()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                A.push(e), (R[e] = { friendsSince: n });
            }
        }),
        (C = new Set(A.slice(0, y)));
}
class Q extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (N = T()), null != e && ((N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (N.messageGiftIntentLastShownMap = b({}, e.messageGiftIntentLastShownMap))), this.syncWith([_.Z, d.Z, f.Z, u.Z], L), H();
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return A;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && C.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null != (e = N.friendsTabBadgeLastDismissedTime) ? e : 0;
        return !(Date.now() - t <= I) && M();
    }
    getFriendAnniversaryYears(e) {
        let t = R[e];
        return null == t ? 0 : x(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return P;
    }
}
E(Q, 'displayName', 'PremiumGiftingIntentStore'),
    E(Q, 'persistKey', 'PremiumGiftingIntentStore'),
    E(Q, 'migrations', [
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
let X = new Q(c.Z, {
    CONNECTION_OPEN: j,
    LOGOUT: U,
    MESSAGE_GIFT_INTENT_SHOWN: B,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: G,
    FRIENDS_TAB_BADGE_DISMISS: F,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: V,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: W,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Y,
    DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: K,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: z
});
