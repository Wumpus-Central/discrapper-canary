var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(922611),
    d = r(23750),
    f = r(709054),
    _ = r(594174),
    h = r(981631);
function p(e, n, r) {
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
let m = {},
    g = {},
    E = {},
    v = new Set(),
    I = new Set(),
    T = new Set(),
    b = 0,
    y = 0,
    S = 0,
    A = 0,
    N = 0,
    C = 0;
function R() {
    A = Object.values(m).length;
    let { [h.OGo.PENDING_INCOMING]: e = 0, [h.OGo.PENDING_OUTGOING]: n = 0, [h.OGo.FRIEND]: r = 0 } = o().countBy(Object.values(m), (e) => e);
    (y = n), (S = r), (N = v.size), (C = T.size), (b = Math.max(e - N - C, 0));
}
function O(e) {
    (m = {}),
        (g = {}),
        (E = {}),
        (I = new Set()),
        (v = new Set()),
        (T = new Set()),
        e.relationships.forEach((e) => {
            (m[e.id] = e.type), null != e.nickname && (g[e.id] = e.nickname), null != e.since && (E[e.id] = e.since), e.is_spam_request && v.add(e.id), (0, c.JX)({ location: 'relationship_store' }) && e.user_ignored && (I.add(e.id), e.type === h.OGo.PENDING_INCOMING && T.add(e.id));
        }),
        R();
}
function D(e) {
    (m = { ...e.relationships }), R();
}
function L(e) {
    let n = m[e.relationship.id];
    (m = {
        ...m,
        [e.relationship.id]: e.relationship.type
    }),
        null != e.relationship.nickname &&
            (g = {
                ...g,
                [e.relationship.id]: e.relationship.nickname
            }),
        null != e.relationship.since &&
            (E = {
                ...E,
                [e.relationship.id]: e.relationship.since
            }),
        e.relationship.isSpamRequest ? v.add(e.relationship.id) : v.delete(e.relationship.id),
        (0, c.JX)({ location: 'RelationshipStore::handleRelationshipAdd' }) && e.relationship.userIgnored ? (I.add(e.relationship.id), e.relationship.type === h.OGo.PENDING_INCOMING ? T.add(e.relationship.id) : e.relationship.type === h.OGo.FRIEND && T.delete(e.relationship.id)) : (I.delete(e.relationship.id), T.delete(e.relationship.id)),
        R(),
        e.relationship.type === h.OGo.FRIEND &&
            n === h.OGo.PENDING_OUTGOING &&
            u.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function x(e) {
    (m = { ...m }), delete m[e.relationship.id], null != g[e.relationship.id] && ((g = { ...g }), delete g[e.relationship.id]), null != E[e.relationship.id] && ((E = { ...E }), delete E[e.relationship.id]), !e.relationship.userIgnored && (I.delete(e.relationship.id), T.delete(e.relationship.id)), v.delete(e.relationship.id), R();
}
function w(e) {
    let { relationship: n } = e;
    (m = {
        ...m,
        [n.id]: n.type
    }),
        null == n.since ? delete E[n.id] : (E[n.id] = n.since),
        null == n.nickname ? delete g[n.id] : (g[n.id] = n.nickname),
        n.isSpamRequest ? v.add(n.id) : v.delete(n.id),
        (0, c.JX)({ location: 'RelationshipStore::handleRelationshipUpdate' }) && n.userIgnored ? (I.add(n.id), n.type === h.OGo.PENDING_INCOMING && T.add(n.id)) : (I.delete(n.id), T.delete(n.id)),
        R();
}
function P(e) {
    (m = { ...m }),
        f.default.keys(m).forEach((e) => {
            m[e] === h.OGo.PENDING_INCOMING && (delete m[e], v.delete(e), T.delete(e));
        }),
        R();
}
class M extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(_.default);
    }
    isFriend(e) {
        return null != e && m[e] === h.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && m[e] === h.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var n, r, i, a;
        if (null != e.author && m[e.author.id] === h.OGo.BLOCKED) return !0;
        if (e instanceof d.ZP) {
            if (this.isBlocked(null === (a = e.interactionMetadata) || void 0 === a ? void 0 : null === (i = a.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isBlocked(null === (r = e.interaction_metadata) || void 0 === r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return !!(0, c.JX)({ location: 'relationship-store' }) && null != e && m[e] !== h.OGo.BLOCKED && I.has(e);
    }
    isIgnoredForMessage(e) {
        var n, r, i, a;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof d.ZP) {
            if (this.isIgnored(null === (a = e.interactionMetadata) || void 0 === a ? void 0 : null === (i = a.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isIgnored(null === (r = e.interaction_metadata) || void 0 === r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return m[e] === h.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return b;
    }
    getSpamCount() {
        return N;
    }
    getPendingIgnoredCount() {
        return (0, c.JX)({ location: 'RelationshipStore::getPendingIgnoredCount' }) ? C : 0;
    }
    getOutgoingCount() {
        return y;
    }
    getFriendCount() {
        return S;
    }
    getRelationshipCount() {
        return A;
    }
    getRelationships() {
        return m;
    }
    isSpam(e) {
        return v.has(e);
    }
    getRelationshipType(e) {
        let n = m[e];
        return null != n ? n : h.OGo.NONE;
    }
    getNickname(e) {
        return g[e];
    }
    getSince(e) {
        return E[e];
    }
    getSinces() {
        return E;
    }
    getFriendIDs() {
        return f.default.keys(m).filter((e) => m[e] === h.OGo.FRIEND);
    }
    getBlockedIDs() {
        return f.default.keys(m).filter((e) => m[e] === h.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return f.default.keys(m).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return f.default.keys(m).filter((e) => this.isBlockedOrIgnored(e));
    }
}
p(M, 'displayName', 'RelationshipStore'),
    (n.Z = new M(u.Z, {
        CONNECTION_OPEN: O,
        OVERLAY_INITIALIZE: D,
        RELATIONSHIP_ADD: L,
        RELATIONSHIP_REMOVE: x,
        RELATIONSHIP_UPDATE: w,
        RELATIONSHIP_PENDING_INCOMING_REMOVED: P
    }));
