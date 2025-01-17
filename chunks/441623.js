var i,
    a = r(47120);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(913527),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    _ = r(353926),
    h = r(814443),
    p = r(480294),
    m = r(699516),
    g = r(709054),
    E = r(522558),
    v = r(581025),
    I = r(981631);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = 5,
    y = 15,
    S = 7,
    A = 604800000,
    N = 1209600000;
function C() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let R = C(),
    O = [],
    D = new Set(),
    L = {},
    x = null;
function w(e, n) {
    let r = new Date(),
        i = new Date(e.getTime());
    i.setFullYear(n);
    let a = new Date(i.getTime());
    a.setDate(i.getDate() - S);
    let s = new Date(i.getTime());
    return s.setDate(i.getDate() + S), r > a && r < s;
}
function P(e) {
    return !w(e, e.getFullYear()) && w(e, new Date().getFullYear());
}
function M() {
    if (null != x) {
        X(x);
        return;
    }
    if ((B(), !p.Z.hasConsented(I.pjP.PERSONALIZATION))) return;
    let { enabled: e } = v.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: n } = E.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!!(e || n)) {
        for (let e of g.default.keys(m.Z.getRelationships())) {
            if (O.length >= y) break;
            let n = m.Z.getSince(e),
                r = h.Z.getUserAffinity(e);
            if (m.Z.getRelationshipType(e) === I.OGo.FRIEND && !m.Z.isIgnored(e) && null != r && r.affinity > 0 && null != n) {
                let r = new Date(n);
                P(r) && (O.push(e), (L[e] = { friendsSince: r }));
            }
        }
        O.sort((e, n) => {
            let r = h.Z.getUserAffinity(e),
                i = h.Z.getUserAffinity(n),
                a = null != r ? r.affinity : 0;
            return (null != i ? i.affinity : 0) - a;
        }),
            (D = new Set(O.slice(0, b)));
    }
}
function k(e) {
    return Math.round(c()().diff(e, 'years', !0));
}
function U() {
    return Array.from(D).some((e) => !R.lastShownFriendsListGiftIntents.includes(e));
}
function B() {
    (O.length = 0), D.clear(), (L = {});
}
function G() {
    B();
}
function Z() {
    (R = C()), B();
}
function F() {
    R.lastShownFriendsListGiftIntents = Array.from(D);
}
function V(e) {
    let { recipientUserId: n } = e;
    Y(n);
}
function j() {
    R.friendsTabBadgeLastDismissedTime = Date.now();
}
function H(e) {
    let { recipientUserId: n } = e;
    Y(n);
}
function Y(e) {
    null == R.messageGiftIntentLastShownMap[e] && (R.messageGiftIntentLastShownMap[e] = Date.now());
}
function W() {
    for (let e in R.messageGiftIntentLastShownMap) {
        let n = R.messageGiftIntentLastShownMap[e];
        Date.now() - n > N && delete R.messageGiftIntentLastShownMap[e];
    }
}
function K() {
    R.lastShownFriendsListGiftIntents = [];
}
function z() {
    R.messageGiftIntentLastShownMap = {};
}
function q() {
    R.friendsTabBadgeLastDismissedTime = null;
}
function Q(e) {
    let { total: n } = e;
    if (null == n) {
        (x = null), M();
        return;
    }
    X(n);
}
function X(e) {
    B();
    let { enabled: n } = E.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!n) return;
    x = e;
    let r = m.Z.getFriendIDs().filter((e) => !m.Z.isIgnored(e));
    l()
        .sampleSize(r, e)
        .forEach((e) => {
            let n = m.Z.getSince(e);
            if (null != n) {
                let r = new Date(n);
                O.push(e), (L[e] = { friendsSince: r });
            }
        }),
        (D = new Set(O.slice(0, b)));
}
class J extends (i = d.ZP.PersistedStore) {
    initialize(e) {
        (R = C()), null != e && ((R.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (R.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (R.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })), this.syncWith([m.Z, h.Z, p.Z, _.Z], M), W();
    }
    getState() {
        return R;
    }
    getFriendAnniversaries() {
        return O;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: n } = e,
            { enabled: r } = E.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!r && D.has(n);
    }
    canShowFriendsTabBadge() {
        var e;
        let n = null !== (e = R.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - n <= A) && U();
    }
    getFriendAnniversaryYears(e) {
        let n = L[e];
        return null == n ? 0 : k(n.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != R.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return x;
    }
}
T(J, 'displayName', 'PremiumGiftingIntentStore'),
    T(J, 'persistKey', 'PremiumGiftingIntentStore'),
    T(J, 'migrations', [
        (e) => {
            var n, r;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null !== (n = e.friendsTabBadgeLastDismissedTime) && void 0 !== n ? n : null,
                      lastShownFriendsListGiftIntents: null !== (r = e.lastShownFriendsListGiftIntents) && void 0 !== r ? r : [],
                      messageGiftIntentLastShownMap: {}
                  };
        }
    ]),
    (n.Z = new J(f.Z, {
        CONNECTION_OPEN: G,
        LOGOUT: Z,
        MESSAGE_GIFT_INTENT_SHOWN: V,
        FRIENDS_LIST_GIFT_INTENTS_SHOWN: F,
        FRIENDS_TAB_BADGE_DISMISS: j,
        GIFT_INTENT_FLOW_PURCHASED_GIFT: H,
        DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: K,
        DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: z,
        DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: q,
        DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: Q
    }));
