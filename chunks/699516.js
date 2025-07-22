(n.d(t, { Z: () => B }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(23750),
    s = n(594174),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 300000,
    p = new Map(),
    h = {},
    m = {},
    g = new Set(),
    E = new Set(),
    b = new Set(),
    y = {},
    O = 0,
    v = {},
    I = 0,
    T = 0,
    S = 0,
    A = {
        friends: void 0,
        blocked: void 0,
        ignored: void 0,
        blockedOrIgnored: void 0
    };
function N() {
    ((A.friends = void 0), (A.blocked = void 0), (A.ignored = void 0), (A.blockedOrIgnored = void 0));
}
let C = new Map();
function R(e, t) {
    let n = p.get(e);
    if (n === t) return;
    if (null != n) {
        var r;
        null == (r = C.get(n)) || r.delete(e);
    }
    p.set(e, t);
    let i = C.get(t);
    (null != i ? i.add(e) : C.set(t, new Set([e])), N());
}
function P(e) {
    var t;
    let n = p.get(e);
    null != n && (p.delete(e), null == (t = C.get(n)) || t.delete(e), N());
}
function w() {
    var e, t;
    ((T = g.size), (S = b.size), (I = Math.max((null != (t = null == (e = C.get(l.OGo.PENDING_INCOMING)) ? void 0 : e.size) ? t : 0) - T - S, 0)), O++);
}
function D(e) {
    (p.clear(),
        C.clear(),
        (h = {}),
        (m = {}),
        E.clear(),
        g.clear(),
        b.clear(),
        N(),
        (y = {}),
        (v = {}),
        e.relationships.forEach((e) => {
            (R(e.id, e.type), null != e.nickname && (h[e.id] = e.nickname), null != e.since && (m[e.id] = e.since), e.is_spam_request && g.add(e.id), null != e.origin_application_id && (y[e.id] = e.origin_application_id), e.user_ignored && (E.add(e.id), e.type === l.OGo.PENDING_INCOMING && b.add(e.id)));
        }),
        w());
}
function L(e) {
    for (let [t, n] of (p.clear(), C.clear(), e.relationships)) R(t, n);
    w();
}
function x(e) {
    let t = p.get(e.relationship.id);
    (R(e.relationship.id, e.relationship.type),
        null != e.relationship.nickname && (h = _(u({}, h), { [e.relationship.id]: e.relationship.nickname })),
        null != e.relationship.since && (m = _(u({}, m), { [e.relationship.id]: e.relationship.since })),
        null != e.relationship.originApplicationId && (y = _(u({}, y), { [e.relationship.id]: e.relationship.originApplicationId })),
        e.relationship.isSpamRequest ? g.add(e.relationship.id) : g.delete(e.relationship.id),
        e.relationship.userIgnored ? (E.add(e.relationship.id), e.relationship.type === l.OGo.PENDING_INCOMING ? b.add(e.relationship.id) : e.relationship.type === l.OGo.FRIEND && b.delete(e.relationship.id)) : (E.delete(e.relationship.id), b.delete(e.relationship.id)),
        w(),
        e.relationship.type === l.OGo.FRIEND &&
            t === l.OGo.PENDING_OUTGOING &&
            a.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            }));
}
function M(e) {
    (P(e.relationship.id), null != h[e.relationship.id] && ((h = u({}, h)), delete h[e.relationship.id]), null != m[e.relationship.id] && ((m = u({}, m)), delete m[e.relationship.id]), null != y[e.relationship.id] && ((y = u({}, y)), delete y[e.relationship.id]), e.relationship.userIgnored || E.delete(e.relationship.id), b.delete(e.relationship.id), g.delete(e.relationship.id), w());
}
function k(e) {
    let { relationship: t } = e;
    (R(t.id, t.type), null == t.since ? delete m[t.id] : (m[t.id] = t.since), null == t.nickname ? delete h[t.id] : (h[t.id] = t.nickname), t.isSpamRequest ? g.add(t.id) : g.delete(t.id), null != v[t.id] && delete v[t.id], null == t.originApplicationId ? delete y[t.id] : (y[t.id] = t.originApplicationId), t.userIgnored ? (E.add(t.id), t.type === l.OGo.PENDING_INCOMING && b.add(t.id)) : (E.delete(t.id), b.delete(t.id)), w());
}
function j(e) {
    for (let e of p.keys()) p.get(e) === l.OGo.PENDING_INCOMING && (P(e), g.delete(e), b.delete(e), delete v[e]);
    w();
}
function U(e) {
    v[e.userId] = {
        expiry: Date.now() + f,
        isStranger: e.isStranger
    };
}
class G extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default);
    }
    isFriend(e) {
        return null != e && p.get(e) === l.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && p.get(e) === l.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && p.get(e.author.id) === l.OGo.BLOCKED) return !0;
        if (e instanceof o.ZP) {
            if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && p.get(e) !== l.OGo.BLOCKED && E.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof o.ZP) {
            if (this.isIgnored(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return p.get(e) === l.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return I;
    }
    getSpamCount() {
        return T;
    }
    getPendingIgnoredCount() {
        return S;
    }
    getOutgoingCount() {
        var e, t;
        return null != (t = null == (e = C.get(l.OGo.PENDING_OUTGOING)) ? void 0 : e.size) ? t : 0;
    }
    getFriendCount() {
        var e, t;
        return null != (t = null == (e = C.get(l.OGo.FRIEND)) ? void 0 : e.size) ? t : 0;
    }
    getRelationshipCount() {
        return p.size;
    }
    getMutableRelationships() {
        return p;
    }
    getVersion() {
        return O;
    }
    isSpam(e) {
        return g.has(e);
    }
    getRelationshipType(e) {
        let t = p.get(e);
        return null != t ? t : l.OGo.NONE;
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
        if (null == A.friends) {
            var e;
            A.friends = Array.from(null != (e = C.get(l.OGo.FRIEND)) ? e : []);
        }
        return A.friends;
    }
    getBlockedIDs() {
        if (null == A.blocked) {
            var e;
            A.blocked = Array.from(null != (e = C.get(l.OGo.BLOCKED)) ? e : []);
        }
        return A.blocked;
    }
    getIgnoredIDs() {
        return (null == A.ignored && (A.ignored = Array.from(E.values()).filter((e) => this.isIgnored(e))), A.ignored);
    }
    getBlockedOrIgnoredIDs() {
        if (null == A.blockedOrIgnored) {
            let e = new Set(E),
                t = C.get(l.OGo.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            A.blockedOrIgnored = Array.from(e.values());
        }
        return A.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return y[e];
    }
    isStranger(e) {
        if (null != v[e]) return v[e].expiry < Date.now() ? void delete v[e] : v[e].isStranger;
    }
}
c(G, 'displayName', 'RelationshipStore');
let B = new G(a.Z, {
    CONNECTION_OPEN: D,
    OVERLAY_INITIALIZE: L,
    RELATIONSHIP_ADD: x,
    RELATIONSHIP_REMOVE: M,
    RELATIONSHIP_UPDATE: k,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: j,
    UPDATE_STRANGER_STATUS: U
});
