n.d(t, { Z: () => B }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(922611),
    c = n(497060),
    u = n(23750),
    d = n(709054),
    f = n(594174),
    p = n(981631);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {},
    v = {},
    b = {},
    y = new Set(),
    O = new Set(),
    S = new Set(),
    I = new Set(),
    T = {},
    N = 0,
    A = 0,
    C = 0,
    R = 0,
    P = 0,
    w = 0;
function D() {
    R = Object.values(E).length;
    let { [p.OGo.PENDING_INCOMING]: e = 0, [p.OGo.PENDING_OUTGOING]: t = 0, [p.OGo.FRIEND]: n = 0 } = o().countBy(Object.values(E), (e) => e);
    (A = t), (C = n), (P = y.size), (w = I.size), (N = Math.max(e - P - w, 0));
}
function x(e) {
    (E = {}),
        (v = {}),
        (b = {}),
        (S = new Set()),
        (y = new Set()),
        (I = new Set()),
        (T = {}),
        (O = new Set()),
        e.relationships.forEach((e) => {
            (E[e.id] = e.type), null != e.nickname && (v[e.id] = e.nickname), null != e.since && (b[e.id] = e.since), e.is_spam_request && y.add(e.id), null != e.origin_application_id && (T[e.id] = e.origin_application_id), e.is_stranger_request && O.add(e.id), (0, l.JX)({ location: 'relationship_store' }) && e.user_ignored && (S.add(e.id), e.type === p.OGo.PENDING_INCOMING && I.add(e.id));
        }),
        D();
}
function L(e) {
    (E = h({}, e.relationships)), D();
}
function M(e) {
    let t = E[e.relationship.id];
    (E = g(h({}, E), { [e.relationship.id]: e.relationship.type })),
        null != e.relationship.nickname && (v = g(h({}, v), { [e.relationship.id]: e.relationship.nickname })),
        null != e.relationship.since && (b = g(h({}, b), { [e.relationship.id]: e.relationship.since })),
        null != e.relationship.originApplicationId && (T = g(h({}, T), { [e.relationship.id]: e.relationship.originApplicationId })),
        e.relationship.isSpamRequest ? y.add(e.relationship.id) : y.delete(e.relationship.id),
        e.relationship.isStrangerRequest ? O.add(e.relationship.id) : O.delete(e.relationship.id),
        (0, l.JX)({ location: 'RelationshipStore::handleRelationshipAdd' }) && e.relationship.userIgnored ? (S.add(e.relationship.id), e.relationship.type === p.OGo.PENDING_INCOMING ? I.add(e.relationship.id) : e.relationship.type === p.OGo.FRIEND && I.delete(e.relationship.id)) : (S.delete(e.relationship.id), I.delete(e.relationship.id)),
        D(),
        e.relationship.type === p.OGo.FRIEND &&
            t === p.OGo.PENDING_OUTGOING &&
            s.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function k(e) {
    (E = h({}, E)), delete E[e.relationship.id], null != v[e.relationship.id] && ((v = h({}, v)), delete v[e.relationship.id]), null != b[e.relationship.id] && ((b = h({}, b)), delete b[e.relationship.id]), null != T[e.relationship.id] && ((T = h({}, T)), delete T[e.relationship.id]), e.relationship.userIgnored || (S.delete(e.relationship.id), I.delete(e.relationship.id)), y.delete(e.relationship.id), O.delete(e.relationship.id), D();
}
function j(e) {
    let { relationship: t } = e;
    (E = g(h({}, E), { [t.id]: t.type })), null == t.since ? delete b[t.id] : (b[t.id] = t.since), null == t.nickname ? delete v[t.id] : (v[t.id] = t.nickname), t.isSpamRequest ? y.add(t.id) : y.delete(t.id), t.isStrangerRequest ? O.add(t.id) : O.delete(t.id), null == t.originApplicationId ? delete T[t.id] : (T[t.id] = t.originApplicationId), (0, l.JX)({ location: 'RelationshipStore::handleRelationshipUpdate' }) && t.userIgnored ? (S.add(t.id), t.type === p.OGo.PENDING_INCOMING && I.add(t.id)) : (S.delete(t.id), I.delete(t.id)), D();
}
function U(e) {
    (E = h({}, E)),
        d.default.keys(E).forEach((e) => {
            E[e] === p.OGo.PENDING_INCOMING && (delete E[e], y.delete(e), I.delete(e), O.delete(e));
        }),
        D();
}
class G extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    isFriend(e) {
        return null != e && E[e] === p.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && E[e] === p.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && E[e.author.id] === p.OGo.BLOCKED) return !0;
        if (e instanceof u.ZP) {
            if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return !!(0, l.JX)({ location: 'relationship-store' }) && null != e && E[e] !== p.OGo.BLOCKED && S.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof u.ZP) {
            if (this.isIgnored(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return E[e] === p.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return N;
    }
    getSpamCount() {
        return P;
    }
    getPendingIgnoredCount() {
        return (0, l.JX)({ location: 'RelationshipStore::getPendingIgnoredCount' }) ? w : 0;
    }
    getOutgoingCount() {
        return A;
    }
    getFriendCount() {
        return C;
    }
    getRelationshipCount() {
        return R;
    }
    getRelationships() {
        return E;
    }
    isSpam(e) {
        return y.has(e);
    }
    getRelationshipType(e) {
        let t = E[e];
        return null != t ? t : p.OGo.NONE;
    }
    getNickname(e) {
        return v[e];
    }
    getSince(e) {
        return b[e];
    }
    getSinces() {
        return b;
    }
    getFriendIDs() {
        return d.default.keys(E).filter((e) => E[e] === p.OGo.FRIEND);
    }
    getBlockedIDs() {
        return d.default.keys(E).filter((e) => E[e] === p.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return d.default.keys(E).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return d.default.keys(E).filter((e) => this.isBlockedOrIgnored(e));
    }
    getOriginApplicationId(e) {
        return T[e];
    }
    isStrangerRequest(e) {
        return !!(E[e] === p.OGo.PENDING_INCOMING && (0, c.pB)('RelationshipStore')) && O.has(e);
    }
}
_(G, 'displayName', 'RelationshipStore');
let B = new G(s.Z, {
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: L,
    RELATIONSHIP_ADD: M,
    RELATIONSHIP_REMOVE: k,
    RELATIONSHIP_UPDATE: j,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: U
});
