n.d(t, { Z: () => U }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(922611),
    u = n(497060),
    c = n(23750),
    d = n(709054),
    f = n(594174),
    _ = n(981631);
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
let h = {},
    m = {},
    g = {},
    E = new Set(),
    v = new Set(),
    y = new Set(),
    I = new Set(),
    T = {},
    b = 0,
    S = 0,
    A = 0,
    N = 0,
    C = 0,
    R = 0;
function O() {
    N = Object.values(h).length;
    let { [_.OGo.PENDING_INCOMING]: e = 0, [_.OGo.PENDING_OUTGOING]: t = 0, [_.OGo.FRIEND]: n = 0 } = a().countBy(Object.values(h), (e) => e);
    (S = t), (A = n), (C = E.size), (R = I.size), (b = Math.max(e - C - R, 0));
}
function D(e) {
    (h = {}),
        (m = {}),
        (g = {}),
        (y = new Set()),
        (E = new Set()),
        (I = new Set()),
        (T = {}),
        (v = new Set()),
        e.relationships.forEach((e) => {
            (h[e.id] = e.type), null != e.nickname && (m[e.id] = e.nickname), null != e.since && (g[e.id] = e.since), e.is_spam_request && E.add(e.id), null != e.origin_application_id && (T[e.id] = e.origin_application_id), e.is_stranger_request && v.add(e.id), (0, l.JX)({ location: 'relationship_store' }) && e.user_ignored && (y.add(e.id), e.type === _.OGo.PENDING_INCOMING && I.add(e.id));
        }),
        O();
}
function L(e) {
    (h = { ...e.relationships }), O();
}
function x(e) {
    let t = h[e.relationship.id];
    (h = {
        ...h,
        [e.relationship.id]: e.relationship.type
    }),
        null != e.relationship.nickname &&
            (m = {
                ...m,
                [e.relationship.id]: e.relationship.nickname
            }),
        null != e.relationship.since &&
            (g = {
                ...g,
                [e.relationship.id]: e.relationship.since
            }),
        null != e.relationship.originApplicationId &&
            (T = {
                ...T,
                [e.relationship.id]: e.relationship.originApplicationId
            }),
        e.relationship.isSpamRequest ? E.add(e.relationship.id) : E.delete(e.relationship.id),
        e.relationship.isStrangerRequest ? v.add(e.relationship.id) : v.delete(e.relationship.id),
        (0, l.JX)({ location: 'RelationshipStore::handleRelationshipAdd' }) && e.relationship.userIgnored ? (y.add(e.relationship.id), e.relationship.type === _.OGo.PENDING_INCOMING ? I.add(e.relationship.id) : e.relationship.type === _.OGo.FRIEND && I.delete(e.relationship.id)) : (y.delete(e.relationship.id), I.delete(e.relationship.id)),
        O(),
        e.relationship.type === _.OGo.FRIEND &&
            t === _.OGo.PENDING_OUTGOING &&
            o.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function w(e) {
    (h = { ...h }), delete h[e.relationship.id], null != m[e.relationship.id] && ((m = { ...m }), delete m[e.relationship.id]), null != g[e.relationship.id] && ((g = { ...g }), delete g[e.relationship.id]), null != T[e.relationship.id] && ((T = { ...T }), delete T[e.relationship.id]), e.relationship.userIgnored || (y.delete(e.relationship.id), I.delete(e.relationship.id)), E.delete(e.relationship.id), v.delete(e.relationship.id), O();
}
function P(e) {
    let { relationship: t } = e;
    (h = {
        ...h,
        [t.id]: t.type
    }),
        null == t.since ? delete g[t.id] : (g[t.id] = t.since),
        null == t.nickname ? delete m[t.id] : (m[t.id] = t.nickname),
        t.isSpamRequest ? E.add(t.id) : E.delete(t.id),
        t.isStrangerRequest ? v.add(t.id) : v.delete(t.id),
        null == t.originApplicationId ? delete T[t.id] : (T[t.id] = t.originApplicationId),
        (0, l.JX)({ location: 'RelationshipStore::handleRelationshipUpdate' }) && t.userIgnored ? (y.add(t.id), t.type === _.OGo.PENDING_INCOMING && I.add(t.id)) : (y.delete(t.id), I.delete(t.id)),
        O();
}
function M(e) {
    (h = { ...h }),
        d.default.keys(h).forEach((e) => {
            h[e] === _.OGo.PENDING_INCOMING && (delete h[e], E.delete(e), I.delete(e), v.delete(e));
        }),
        O();
}
class k extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    isFriend(e) {
        return null != e && h[e] === _.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && h[e] === _.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, i, r;
        if (null != e.author && h[e.author.id] === _.OGo.BLOCKED) return !0;
        if (e instanceof c.ZP) {
            if (this.isBlocked(null === (r = e.interactionMetadata) || void 0 === r ? void 0 : null === (i = r.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return !!(0, l.JX)({ location: 'relationship-store' }) && null != e && h[e] !== _.OGo.BLOCKED && y.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, i, r;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof c.ZP) {
            if (this.isIgnored(null === (r = e.interactionMetadata) || void 0 === r ? void 0 : null === (i = r.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isIgnored(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return h[e] === _.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return b;
    }
    getSpamCount() {
        return C;
    }
    getPendingIgnoredCount() {
        return (0, l.JX)({ location: 'RelationshipStore::getPendingIgnoredCount' }) ? R : 0;
    }
    getOutgoingCount() {
        return S;
    }
    getFriendCount() {
        return A;
    }
    getRelationshipCount() {
        return N;
    }
    getRelationships() {
        return h;
    }
    isSpam(e) {
        return E.has(e);
    }
    getRelationshipType(e) {
        let t = h[e];
        return null != t ? t : _.OGo.NONE;
    }
    getNickname(e) {
        return m[e];
    }
    getSince(e) {
        return g[e];
    }
    getSinces() {
        return g;
    }
    getFriendIDs() {
        return d.default.keys(h).filter((e) => h[e] === _.OGo.FRIEND);
    }
    getBlockedIDs() {
        return d.default.keys(h).filter((e) => h[e] === _.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return d.default.keys(h).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return d.default.keys(h).filter((e) => this.isBlockedOrIgnored(e));
    }
    getOriginApplicationId(e) {
        return T[e];
    }
    isStrangerRequest(e) {
        return !!(h[e] === _.OGo.PENDING_INCOMING && (0, u.pB)('RelationshipStore')) && v.has(e);
    }
}
p(k, 'displayName', 'RelationshipStore');
let U = new k(o.Z, {
    CONNECTION_OPEN: D,
    OVERLAY_INITIALIZE: L,
    RELATIONSHIP_ADD: x,
    RELATIONSHIP_REMOVE: w,
    RELATIONSHIP_UPDATE: P,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: M
});
