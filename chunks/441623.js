n.d(t, { Z: () => Q }), n(47120), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(353926),
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
let v = 5,
    y = 15,
    I = 7,
    T = 604800000,
    b = 1209600000;
function S() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let A = S(),
    N = [],
    C = new Set(),
    R = {},
    O = null;
function D(e, t) {
    let n = new Date(),
        i = new Date(e.getTime());
    i.setFullYear(t);
    let r = new Date(i.getTime());
    r.setDate(i.getDate() - I);
    let a = new Date(i.getTime());
    return a.setDate(i.getDate() + I), n > r && n < a;
}
function L(e) {
    return !D(e, e.getFullYear()) && D(e, new Date().getFullYear());
}
function x() {
    if (null != O) {
        z(O);
        return;
    }
    if ((M(), !f.Z.hasConsented(g.pjP.PERSONALIZATION))) return;
    let { enabled: e } = m.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (e || t) {
        for (let e of p.default.keys(_.Z.getRelationships())) {
            if (N.length >= y) break;
            let t = _.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (_.Z.getRelationshipType(e) === g.OGo.FRIEND && !_.Z.isIgnored(e) && null != n && n.affinity > 0 && null != t) {
                let n = new Date(t);
                L(n) && (N.push(e), (R[e] = { friendsSince: n }));
            }
        }
        N.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                i = d.Z.getUserAffinity(t),
                r = null != n ? n.affinity : 0;
            return (null != i ? i.affinity : 0) - r;
        }),
            (C = new Set(N.slice(0, v)));
    }
}
function w(e) {
    return Math.round(o()().diff(e, 'years', !0));
}
function P() {
    return Array.from(C).some((e) => !A.lastShownFriendsListGiftIntents.includes(e));
}
function M() {
    (N.length = 0), C.clear(), (R = {});
}
function k() {
    M();
}
function U() {
    (A = S()), M();
}
function G() {
    A.lastShownFriendsListGiftIntents = Array.from(C);
}
function B(e) {
    let { recipientUserId: t } = e;
    V(t);
}
function Z() {
    A.friendsTabBadgeLastDismissedTime = Date.now();
}
function F(e) {
    let { recipientUserId: t } = e;
    V(t);
}
function V(e) {
    null == A.messageGiftIntentLastShownMap[e] && (A.messageGiftIntentLastShownMap[e] = Date.now());
}
function j() {
    for (let e in A.messageGiftIntentLastShownMap) {
        let t = A.messageGiftIntentLastShownMap[e];
        Date.now() - t > b && delete A.messageGiftIntentLastShownMap[e];
    }
}
function H() {
    A.lastShownFriendsListGiftIntents = [];
}
function Y() {
    A.messageGiftIntentLastShownMap = {};
}
function W() {
    A.friendsTabBadgeLastDismissedTime = null;
}
function K(e) {
    let { total: t } = e;
    if (null == t) {
        (O = null), x();
        return;
    }
    z(t);
}
function z(e) {
    M();
    let { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    O = e;
    let n = _.Z.getFriendIDs().filter((e) => !_.Z.isIgnored(e));
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                N.push(e), (R[e] = { friendsSince: n });
            }
        }),
        (C = new Set(N.slice(0, v)));
}
class q extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        (A = S()), null != e && ((A.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (A.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (A.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })), this.syncWith([_.Z, d.Z, f.Z, c.Z], x), j();
    }
    getState() {
        return A;
    }
    getFriendAnniversaries() {
        return N;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && C.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = A.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= T) && P();
    }
    getFriendAnniversaryYears(e) {
        let t = R[e];
        return null == t ? 0 : w(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != A.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return O;
    }
}
E(q, 'displayName', 'PremiumGiftingIntentStore'),
    E(q, 'persistKey', 'PremiumGiftingIntentStore'),
    E(q, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null !== (t = e.friendsTabBadgeLastDismissedTime) && void 0 !== t ? t : null,
                      lastShownFriendsListGiftIntents: null !== (n = e.lastShownFriendsListGiftIntents) && void 0 !== n ? n : [],
                      messageGiftIntentLastShownMap: {}
                  };
        }
    ]);
let Q = new q(u.Z, {
    CONNECTION_OPEN: k,
    LOGOUT: U,
    MESSAGE_GIFT_INTENT_SHOWN: B,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: G,
    FRIENDS_TAB_BADGE_DISMISS: Z,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: F,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: H,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Y,
    DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: W,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: K
});
