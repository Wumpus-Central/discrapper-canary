n.d(t, { Z: () => B }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(23750),
    c = n(709054),
    u = n(594174),
    d = n(981631);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 300000,
    g = {},
    E = {},
    b = {},
    y = new Set(),
    v = new Set(),
    O = new Set(),
    I = {},
    S = {},
    T = 0,
    N = 0,
    A = 0,
    C = 0,
    R = 0,
    P = 0;
function w() {
    C = Object.values(g).length;
    let { [d.OGo.PENDING_INCOMING]: e = 0, [d.OGo.PENDING_OUTGOING]: t = 0, [d.OGo.FRIEND]: n = 0 } = o().countBy(Object.values(g), (e) => e);
    (N = t), (A = n), (R = y.size), (P = O.size), (T = Math.max(e - R - P, 0));
}
function D(e) {
    (g = {}),
        (E = {}),
        (b = {}),
        (v = new Set()),
        (y = new Set()),
        (O = new Set()),
        (I = {}),
        (S = {}),
        e.relationships.forEach((e) => {
            (g[e.id] = e.type), null != e.nickname && (E[e.id] = e.nickname), null != e.since && (b[e.id] = e.since), e.is_spam_request && y.add(e.id), null != e.origin_application_id && (I[e.id] = e.origin_application_id), e.user_ignored && (v.add(e.id), e.type === d.OGo.PENDING_INCOMING && O.add(e.id));
        }),
        w();
}
function L(e) {
    (g = _({}, e.relationships)), w();
}
function x(e) {
    let t = g[e.relationship.id];
    (g = h(_({}, g), { [e.relationship.id]: e.relationship.type })),
        null != e.relationship.nickname && (E = h(_({}, E), { [e.relationship.id]: e.relationship.nickname })),
        null != e.relationship.since && (b = h(_({}, b), { [e.relationship.id]: e.relationship.since })),
        null != e.relationship.originApplicationId && (I = h(_({}, I), { [e.relationship.id]: e.relationship.originApplicationId })),
        e.relationship.isSpamRequest ? y.add(e.relationship.id) : y.delete(e.relationship.id),
        e.relationship.userIgnored ? (v.add(e.relationship.id), e.relationship.type === d.OGo.PENDING_INCOMING ? O.add(e.relationship.id) : e.relationship.type === d.OGo.FRIEND && O.delete(e.relationship.id)) : (v.delete(e.relationship.id), O.delete(e.relationship.id)),
        w(),
        e.relationship.type === d.OGo.FRIEND &&
            t === d.OGo.PENDING_OUTGOING &&
            s.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function M(e) {
    (g = _({}, g)), delete g[e.relationship.id], null != E[e.relationship.id] && ((E = _({}, E)), delete E[e.relationship.id]), null != b[e.relationship.id] && ((b = _({}, b)), delete b[e.relationship.id]), null != I[e.relationship.id] && ((I = _({}, I)), delete I[e.relationship.id]), e.relationship.userIgnored || (v.delete(e.relationship.id), O.delete(e.relationship.id)), y.delete(e.relationship.id), w();
}
function k(e) {
    let { relationship: t } = e;
    (g = h(_({}, g), { [t.id]: t.type })), null == t.since ? delete b[t.id] : (b[t.id] = t.since), null == t.nickname ? delete E[t.id] : (E[t.id] = t.nickname), t.isSpamRequest ? y.add(t.id) : y.delete(t.id), null != S[t.id] && delete S[t.id], null == t.originApplicationId ? delete I[t.id] : (I[t.id] = t.originApplicationId), t.userIgnored ? (v.add(t.id), t.type === d.OGo.PENDING_INCOMING && O.add(t.id)) : (v.delete(t.id), O.delete(t.id)), w();
}
function j(e) {
    (g = _({}, g)),
        c.default.keys(g).forEach((e) => {
            g[e] === d.OGo.PENDING_INCOMING && (delete g[e], y.delete(e), O.delete(e), delete S[e]);
        }),
        w();
}
function U(e) {
    S[e.userId] = {
        expiry: Date.now() + m,
        isStranger: e.isStranger
    };
}
class G extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    isFriend(e) {
        return null != e && g[e] === d.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && g[e] === d.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && g[e.author.id] === d.OGo.BLOCKED) return !0;
        if (e instanceof l.ZP) {
            if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && g[e] !== d.OGo.BLOCKED && v.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof l.ZP) {
            if (this.isIgnored(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return g[e] === d.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
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
        return y.has(e);
    }
    getRelationshipType(e) {
        let t = g[e];
        return null != t ? t : d.OGo.NONE;
    }
    getNickname(e) {
        return E[e];
    }
    getSince(e) {
        return b[e];
    }
    getSinces() {
        return b;
    }
    getFriendIDs() {
        return c.default.keys(g).filter((e) => g[e] === d.OGo.FRIEND);
    }
    getBlockedIDs() {
        return c.default.keys(g).filter((e) => g[e] === d.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return c.default.keys(g).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return c.default.keys(g).filter((e) => this.isBlockedOrIgnored(e));
    }
    getOriginApplicationId(e) {
        return I[e];
    }
    isStranger(e) {
        if (null != S[e]) return S[e].expiry < Date.now() ? void delete S[e] : S[e].isStranger;
    }
}
f(G, 'displayName', 'RelationshipStore');
let B = new G(s.Z, {
    CONNECTION_OPEN: D,
    OVERLAY_INITIALIZE: L,
    RELATIONSHIP_ADD: x,
    RELATIONSHIP_REMOVE: M,
    RELATIONSHIP_UPDATE: k,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: j,
    UPDATE_STRANGER_STATUS: U
});
