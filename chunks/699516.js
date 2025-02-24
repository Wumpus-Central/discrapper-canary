n.d(t, { Z: () => G }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(497060),
    c = n(23750),
    u = n(709054),
    d = n(594174),
    f = n(981631);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {},
    E = {},
    v = {},
    b = new Set(),
    y = new Set(),
    O = new Set(),
    S = new Set(),
    I = {},
    T = 0,
    N = 0,
    A = 0,
    C = 0,
    R = 0,
    P = 0;
function w() {
    C = Object.values(g).length;
    let { [f.OGo.PENDING_INCOMING]: e = 0, [f.OGo.PENDING_OUTGOING]: t = 0, [f.OGo.FRIEND]: n = 0 } = o().countBy(Object.values(g), (e) => e);
    (N = t), (A = n), (R = b.size), (P = S.size), (T = Math.max(e - R - P, 0));
}
function D(e) {
    (g = {}),
        (E = {}),
        (v = {}),
        (O = new Set()),
        (b = new Set()),
        (S = new Set()),
        (I = {}),
        (y = new Set()),
        e.relationships.forEach((e) => {
            (g[e.id] = e.type), null != e.nickname && (E[e.id] = e.nickname), null != e.since && (v[e.id] = e.since), e.is_spam_request && b.add(e.id), null != e.origin_application_id && (I[e.id] = e.origin_application_id), e.is_stranger_request && y.add(e.id), e.user_ignored && (O.add(e.id), e.type === f.OGo.PENDING_INCOMING && S.add(e.id));
        }),
        w();
}
function x(e) {
    (g = _({}, e.relationships)), w();
}
function L(e) {
    let t = g[e.relationship.id];
    (g = m(_({}, g), { [e.relationship.id]: e.relationship.type })),
        null != e.relationship.nickname && (E = m(_({}, E), { [e.relationship.id]: e.relationship.nickname })),
        null != e.relationship.since && (v = m(_({}, v), { [e.relationship.id]: e.relationship.since })),
        null != e.relationship.originApplicationId && (I = m(_({}, I), { [e.relationship.id]: e.relationship.originApplicationId })),
        e.relationship.isSpamRequest ? b.add(e.relationship.id) : b.delete(e.relationship.id),
        e.relationship.isStrangerRequest ? y.add(e.relationship.id) : y.delete(e.relationship.id),
        e.relationship.userIgnored ? (O.add(e.relationship.id), e.relationship.type === f.OGo.PENDING_INCOMING ? S.add(e.relationship.id) : e.relationship.type === f.OGo.FRIEND && S.delete(e.relationship.id)) : (O.delete(e.relationship.id), S.delete(e.relationship.id)),
        w(),
        e.relationship.type === f.OGo.FRIEND &&
            t === f.OGo.PENDING_OUTGOING &&
            s.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function M(e) {
    (g = _({}, g)), delete g[e.relationship.id], null != E[e.relationship.id] && ((E = _({}, E)), delete E[e.relationship.id]), null != v[e.relationship.id] && ((v = _({}, v)), delete v[e.relationship.id]), null != I[e.relationship.id] && ((I = _({}, I)), delete I[e.relationship.id]), e.relationship.userIgnored || (O.delete(e.relationship.id), S.delete(e.relationship.id)), b.delete(e.relationship.id), y.delete(e.relationship.id), w();
}
function k(e) {
    let { relationship: t } = e;
    (g = m(_({}, g), { [t.id]: t.type })), null == t.since ? delete v[t.id] : (v[t.id] = t.since), null == t.nickname ? delete E[t.id] : (E[t.id] = t.nickname), t.isSpamRequest ? b.add(t.id) : b.delete(t.id), t.isStrangerRequest ? y.add(t.id) : y.delete(t.id), null == t.originApplicationId ? delete I[t.id] : (I[t.id] = t.originApplicationId), t.userIgnored ? (O.add(t.id), t.type === f.OGo.PENDING_INCOMING && S.add(t.id)) : (O.delete(t.id), S.delete(t.id)), w();
}
function j(e) {
    (g = _({}, g)),
        u.default.keys(g).forEach((e) => {
            g[e] === f.OGo.PENDING_INCOMING && (delete g[e], b.delete(e), S.delete(e), y.delete(e));
        }),
        w();
}
class U extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    isFriend(e) {
        return null != e && g[e] === f.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && g[e] === f.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && g[e.author.id] === f.OGo.BLOCKED) return !0;
        if (e instanceof c.ZP) {
            if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && g[e] !== f.OGo.BLOCKED && O.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof c.ZP) {
            if (this.isIgnored(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return g[e] === f.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return T;
    }
    getSpamCount() {
        return R;
    }
    getPendingIgnoredCount() {
        return P;
    }
    getOutgoingCount() {
        return N;
    }
    getFriendCount() {
        return A;
    }
    getRelationshipCount() {
        return C;
    }
    getRelationships() {
        return g;
    }
    isSpam(e) {
        return b.has(e);
    }
    getRelationshipType(e) {
        let t = g[e];
        return null != t ? t : f.OGo.NONE;
    }
    getNickname(e) {
        return E[e];
    }
    getSince(e) {
        return v[e];
    }
    getSinces() {
        return v;
    }
    getFriendIDs() {
        return u.default.keys(g).filter((e) => g[e] === f.OGo.FRIEND);
    }
    getBlockedIDs() {
        return u.default.keys(g).filter((e) => g[e] === f.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return u.default.keys(g).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return u.default.keys(g).filter((e) => this.isBlockedOrIgnored(e));
    }
    getOriginApplicationId(e) {
        return I[e];
    }
    isStrangerRequest(e) {
        return !!(g[e] === f.OGo.PENDING_INCOMING && (0, l.pB)('RelationshipStore')) && y.has(e);
    }
}
p(U, 'displayName', 'RelationshipStore');
let G = new U(s.Z, {
    CONNECTION_OPEN: D,
    OVERLAY_INITIALIZE: x,
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_REMOVE: M,
    RELATIONSHIP_UPDATE: k,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: j
});
