n.d(t, { Z: () => M }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(922611),
    u = n(23750),
    c = n(709054),
    d = n(594174),
    f = n(981631);
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
let p = {},
    h = {},
    m = {},
    g = new Set(),
    E = new Set(),
    v = new Set(),
    y = {},
    I = 0,
    T = 0,
    b = 0,
    S = 0,
    A = 0,
    N = 0;
function C() {
    S = Object.values(p).length;
    let { [f.OGo.PENDING_INCOMING]: e = 0, [f.OGo.PENDING_OUTGOING]: t = 0, [f.OGo.FRIEND]: n = 0 } = a().countBy(Object.values(p), (e) => e);
    (T = t), (b = n), (A = g.size), (N = v.size), (I = Math.max(e - A - N, 0));
}
function R(e) {
    (p = {}),
        (h = {}),
        (m = {}),
        (E = new Set()),
        (g = new Set()),
        (v = new Set()),
        (y = {}),
        e.relationships.forEach((e) => {
            (p[e.id] = e.type), null != e.nickname && (h[e.id] = e.nickname), null != e.since && (m[e.id] = e.since), e.is_spam_request && g.add(e.id), null != e.origin_application_id && (y[e.id] = e.origin_application_id), (0, l.JX)({ location: 'relationship_store' }) && e.user_ignored && (E.add(e.id), e.type === f.OGo.PENDING_INCOMING && v.add(e.id));
        }),
        C();
}
function O(e) {
    (p = { ...e.relationships }), C();
}
function D(e) {
    let t = p[e.relationship.id];
    (p = {
        ...p,
        [e.relationship.id]: e.relationship.type
    }),
        null != e.relationship.nickname &&
            (h = {
                ...h,
                [e.relationship.id]: e.relationship.nickname
            }),
        null != e.relationship.since &&
            (m = {
                ...m,
                [e.relationship.id]: e.relationship.since
            }),
        null != e.relationship.originApplicationId &&
            (y = {
                ...y,
                [e.relationship.id]: e.relationship.originApplicationId
            }),
        e.relationship.isSpamRequest ? g.add(e.relationship.id) : g.delete(e.relationship.id),
        (0, l.JX)({ location: 'RelationshipStore::handleRelationshipAdd' }) && e.relationship.userIgnored ? (E.add(e.relationship.id), e.relationship.type === f.OGo.PENDING_INCOMING ? v.add(e.relationship.id) : e.relationship.type === f.OGo.FRIEND && v.delete(e.relationship.id)) : (E.delete(e.relationship.id), v.delete(e.relationship.id)),
        C(),
        e.relationship.type === f.OGo.FRIEND &&
            t === f.OGo.PENDING_OUTGOING &&
            o.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function x(e) {
    (p = { ...p }), delete p[e.relationship.id], null != h[e.relationship.id] && ((h = { ...h }), delete h[e.relationship.id]), null != m[e.relationship.id] && ((m = { ...m }), delete m[e.relationship.id]), null != y[e.relationship.id] && ((y = { ...y }), delete y[e.relationship.id]), e.relationship.userIgnored || (E.delete(e.relationship.id), v.delete(e.relationship.id)), g.delete(e.relationship.id), C();
}
function L(e) {
    let { relationship: t } = e;
    (p = {
        ...p,
        [t.id]: t.type
    }),
        null == t.since ? delete m[t.id] : (m[t.id] = t.since),
        null == t.nickname ? delete h[t.id] : (h[t.id] = t.nickname),
        t.isSpamRequest ? g.add(t.id) : g.delete(t.id),
        null == t.originApplicationId ? delete y[t.id] : (y[t.id] = t.originApplicationId),
        (0, l.JX)({ location: 'RelationshipStore::handleRelationshipUpdate' }) && t.userIgnored ? (E.add(t.id), t.type === f.OGo.PENDING_INCOMING && v.add(t.id)) : (E.delete(t.id), v.delete(t.id)),
        C();
}
function P(e) {
    (p = { ...p }),
        c.default.keys(p).forEach((e) => {
            p[e] === f.OGo.PENDING_INCOMING && (delete p[e], g.delete(e), v.delete(e));
        }),
        C();
}
class w extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    isFriend(e) {
        return null != e && p[e] === f.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && p[e] === f.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, i, r;
        if (null != e.author && p[e.author.id] === f.OGo.BLOCKED) return !0;
        if (e instanceof u.ZP) {
            if (this.isBlocked(null === (r = e.interactionMetadata) || void 0 === r ? void 0 : null === (i = r.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return !!(0, l.JX)({ location: 'relationship-store' }) && null != e && p[e] !== f.OGo.BLOCKED && E.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, i, r;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof u.ZP) {
            if (this.isIgnored(null === (r = e.interactionMetadata) || void 0 === r ? void 0 : null === (i = r.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isIgnored(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return p[e] === f.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return I;
    }
    getSpamCount() {
        return A;
    }
    getPendingIgnoredCount() {
        return (0, l.JX)({ location: 'RelationshipStore::getPendingIgnoredCount' }) ? N : 0;
    }
    getOutgoingCount() {
        return T;
    }
    getFriendCount() {
        return b;
    }
    getRelationshipCount() {
        return S;
    }
    getRelationships() {
        return p;
    }
    isSpam(e) {
        return g.has(e);
    }
    getRelationshipType(e) {
        let t = p[e];
        return null != t ? t : f.OGo.NONE;
    }
    getNickname(e) {
        return h[e];
    }
    getSince(e) {
        return m[e];
    }
    getSinces() {
        return m;
    }
    getFriendIDs() {
        return c.default.keys(p).filter((e) => p[e] === f.OGo.FRIEND);
    }
    getBlockedIDs() {
        return c.default.keys(p).filter((e) => p[e] === f.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return c.default.keys(p).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return c.default.keys(p).filter((e) => this.isBlockedOrIgnored(e));
    }
    getOriginApplicationId(e) {
        return y[e];
    }
}
_(w, 'displayName', 'RelationshipStore');
let M = new w(o.Z, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: O,
    RELATIONSHIP_ADD: D,
    RELATIONSHIP_REMOVE: x,
    RELATIONSHIP_UPDATE: L,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: P
});
