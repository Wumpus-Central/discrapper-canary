n.d(t, { Z: () => Z }), n(388685);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
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
let p = 300000,
    _ = new Map(),
    m = {},
    h = {},
    g = new Set(),
    E = new Set(),
    b = new Set(),
    y = {},
    O = 0,
    v = {},
    S = 0,
    I = 0,
    T = 0,
    C = {
        friends: void 0,
        blocked: void 0,
        ignored: void 0,
        blockedOrIgnored: void 0,
    };
function A() {
    (C.friends = void 0), (C.blocked = void 0), (C.ignored = void 0), (C.blockedOrIgnored = void 0);
}
let N = new Map();
function P(e, t) {
    let n = _.get(e);
    if (n === t) return;
    if (null != n) {
        var r;
        null == (r = N.get(n)) || r.delete(e);
    }
    _.set(e, t);
    let i = N.get(t);
    null != i ? i.add(e) : N.set(t, new Set([e])), A();
}
function R(e) {
    var t;
    let n = _.get(e);
    null != n && (_.delete(e), null == (t = N.get(n)) || t.delete(e), A());
}
function D() {
    var e, t;
    (I = g.size),
        (T = b.size),
        (S = Math.max(
            (null != (t = null == (e = N.get(l.OGo.PENDING_INCOMING)) ? void 0 : e.size) ? t : 0) - I - T,
            0,
        )),
        O++;
}
function w(e) {
    _.clear(),
        N.clear(),
        (m = {}),
        (h = {}),
        E.clear(),
        g.clear(),
        b.clear(),
        A(),
        (y = {}),
        (v = {}),
        e.relationships.forEach((e) => {
            P(e.id, e.type),
                null != e.nickname && (m[e.id] = e.nickname),
                null != e.since && (h[e.id] = e.since),
                e.is_spam_request && g.add(e.id),
                null != e.origin_application_id && (y[e.id] = e.origin_application_id),
                e.user_ignored && (E.add(e.id), e.type === l.OGo.PENDING_INCOMING && b.add(e.id));
        }),
        D();
}
function x(e) {
    for (let [t, n] of (_.clear(), N.clear(), e.relationships)) P(t, n);
    D();
}
function L(e) {
    let t = _.get(e.relationship.id);
    P(e.relationship.id, e.relationship.type),
        null != e.relationship.nickname && (m = f(u({}, m), { [e.relationship.id]: e.relationship.nickname })),
        null != e.relationship.since && (h = f(u({}, h), { [e.relationship.id]: e.relationship.since })),
        null != e.relationship.originApplicationId &&
            (y = f(u({}, y), { [e.relationship.id]: e.relationship.originApplicationId })),
        e.relationship.isSpamRequest ? g.add(e.relationship.id) : g.delete(e.relationship.id),
        e.relationship.userIgnored
            ? (E.add(e.relationship.id),
              e.relationship.type === l.OGo.PENDING_INCOMING
                  ? b.add(e.relationship.id)
                  : e.relationship.type === l.OGo.FRIEND && b.delete(e.relationship.id))
            : (E.delete(e.relationship.id), b.delete(e.relationship.id)),
        D(),
        e.relationship.type === l.OGo.FRIEND &&
            t === l.OGo.PENDING_OUTGOING &&
            a.Z.dispatch({
                type: "FRIEND_REQUEST_ACCEPTED",
                user: e.relationship.user,
            });
}
function j(e) {
    R(e.relationship.id),
        null != m[e.relationship.id] && ((m = u({}, m)), delete m[e.relationship.id]),
        null != h[e.relationship.id] && ((h = u({}, h)), delete h[e.relationship.id]),
        null != y[e.relationship.id] && ((y = u({}, y)), delete y[e.relationship.id]),
        e.relationship.userIgnored || E.delete(e.relationship.id),
        b.delete(e.relationship.id),
        g.delete(e.relationship.id),
        D();
}
function M(e) {
    let { relationship: t } = e;
    P(t.id, t.type),
        null == t.since ? delete h[t.id] : (h[t.id] = t.since),
        null == t.nickname ? delete m[t.id] : (m[t.id] = t.nickname),
        t.isSpamRequest ? g.add(t.id) : g.delete(t.id),
        null != v[t.id] && delete v[t.id],
        null == t.originApplicationId ? delete y[t.id] : (y[t.id] = t.originApplicationId),
        t.userIgnored
            ? (E.add(t.id), t.type === l.OGo.PENDING_INCOMING && b.add(t.id))
            : (E.delete(t.id), b.delete(t.id)),
        D();
}
function k(e) {
    for (let e of _.keys()) _.get(e) === l.OGo.PENDING_INCOMING && (R(e), g.delete(e), b.delete(e), delete v[e]);
    D();
}
function U(e) {
    v[e.userId] = {
        expiry: Date.now() + p,
        isStranger: e.isStranger,
    };
}
class G extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default);
    }
    isFriend(e) {
        return null != e && _.get(e) === l.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && _.get(e) === l.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && _.get(e.author.id) === l.OGo.BLOCKED) return !0;
        if (e instanceof o.ZP) {
            if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id))
            return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && _.get(e) !== l.OGo.BLOCKED && E.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof o.ZP) {
            if (this.isIgnored(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id))
            return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return _.get(e) === l.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return S;
    }
    getSpamCount() {
        return I;
    }
    getPendingIgnoredCount() {
        return T;
    }
    getOutgoingCount() {
        var e, t;
        return null != (t = null == (e = N.get(l.OGo.PENDING_OUTGOING)) ? void 0 : e.size) ? t : 0;
    }
    getFriendCount() {
        var e, t;
        return null != (t = null == (e = N.get(l.OGo.FRIEND)) ? void 0 : e.size) ? t : 0;
    }
    getRelationshipCount() {
        return _.size;
    }
    getMutableRelationships() {
        return _;
    }
    getVersion() {
        return O;
    }
    isSpam(e) {
        return g.has(e);
    }
    getRelationshipType(e) {
        let t = _.get(e);
        return null != t ? t : l.OGo.NONE;
    }
    getNickname(e) {
        return m[e];
    }
    getSince(e) {
        return h[e];
    }
    getSinces() {
        return h;
    }
    getFriendIDs() {
        if (null == C.friends) {
            var e;
            C.friends = Array.from(null != (e = N.get(l.OGo.FRIEND)) ? e : []);
        }
        return C.friends;
    }
    getBlockedIDs() {
        if (null == C.blocked) {
            var e;
            C.blocked = Array.from(null != (e = N.get(l.OGo.BLOCKED)) ? e : []);
        }
        return C.blocked;
    }
    getIgnoredIDs() {
        return null == C.ignored && (C.ignored = Array.from(E.values()).filter((e) => this.isIgnored(e))), C.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == C.blockedOrIgnored) {
            let e = new Set(E),
                t = N.get(l.OGo.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            C.blockedOrIgnored = Array.from(e.values());
        }
        return C.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return y[e];
    }
    isStranger(e) {
        if (null != v[e]) return v[e].expiry < Date.now() ? void delete v[e] : v[e].isStranger;
    }
}
c(G, "displayName", "RelationshipStore");
let Z = new G(a.Z, {
    CONNECTION_OPEN: w,
    OVERLAY_INITIALIZE: x,
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_REMOVE: j,
    RELATIONSHIP_UPDATE: M,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: k,
    UPDATE_STRANGER_STATUS: U,
});
