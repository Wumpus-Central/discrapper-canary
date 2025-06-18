n.d(t, { Z: () => G }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(23750),
    c = n(594174),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 300000,
    m = new Map(),
    g = {},
    E = {},
    b = new Set(),
    y = new Set(),
    O = new Set(),
    v = {},
    I = 0,
    T = {},
    S = 0,
    A = 0,
    N = 0,
    C = 0,
    R = 0;
function P() {
    let { [u.OGo.PENDING_INCOMING]: e = 0, [u.OGo.PENDING_OUTGOING]: t = 0, [u.OGo.FRIEND]: n = 0 } = a().countBy(Array.from(m.values()));
    (A = t), (N = n), (C = b.size), (R = O.size), (S = Math.max(e - C - R, 0)), I++;
}
function w(e) {
    m.clear(),
        (g = {}),
        (E = {}),
        (y = new Set()),
        (b = new Set()),
        (O = new Set()),
        (v = {}),
        (T = {}),
        e.relationships.forEach((e) => {
            m.set(e.id, e.type), null != e.nickname && (g[e.id] = e.nickname), null != e.since && (E[e.id] = e.since), e.is_spam_request && b.add(e.id), null != e.origin_application_id && (v[e.id] = e.origin_application_id), e.user_ignored && (y.add(e.id), e.type === u.OGo.PENDING_INCOMING && O.add(e.id));
        }),
        P();
}
function D(e) {
    (m = new Map(e.relationships)), P();
}
function L(e) {
    let t = m.get(e.relationship.id);
    m.set(e.relationship.id, e.relationship.type),
        null != e.relationship.nickname && (g = p(f({}, g), { [e.relationship.id]: e.relationship.nickname })),
        null != e.relationship.since && (E = p(f({}, E), { [e.relationship.id]: e.relationship.since })),
        null != e.relationship.originApplicationId && (v = p(f({}, v), { [e.relationship.id]: e.relationship.originApplicationId })),
        e.relationship.isSpamRequest ? b.add(e.relationship.id) : b.delete(e.relationship.id),
        e.relationship.userIgnored ? (y.add(e.relationship.id), e.relationship.type === u.OGo.PENDING_INCOMING ? O.add(e.relationship.id) : e.relationship.type === u.OGo.FRIEND && O.delete(e.relationship.id)) : (y.delete(e.relationship.id), O.delete(e.relationship.id)),
        P(),
        e.relationship.type === u.OGo.FRIEND &&
            t === u.OGo.PENDING_OUTGOING &&
            s.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function x(e) {
    m.delete(e.relationship.id), null != g[e.relationship.id] && ((g = f({}, g)), delete g[e.relationship.id]), null != E[e.relationship.id] && ((E = f({}, E)), delete E[e.relationship.id]), null != v[e.relationship.id] && ((v = f({}, v)), delete v[e.relationship.id]), e.relationship.userIgnored || (y.delete(e.relationship.id), O.delete(e.relationship.id)), b.delete(e.relationship.id), P();
}
function k(e) {
    let { relationship: t } = e;
    m.set(t.id, t.type), null == t.since ? delete E[t.id] : (E[t.id] = t.since), null == t.nickname ? delete g[t.id] : (g[t.id] = t.nickname), t.isSpamRequest ? b.add(t.id) : b.delete(t.id), null != T[t.id] && delete T[t.id], null == t.originApplicationId ? delete v[t.id] : (v[t.id] = t.originApplicationId), t.userIgnored ? (y.add(t.id), t.type === u.OGo.PENDING_INCOMING && O.add(t.id)) : (y.delete(t.id), O.delete(t.id)), P();
}
function M(e) {
    for (let e of m.keys()) m.get(e) === u.OGo.PENDING_INCOMING && (m.delete(e), b.delete(e), O.delete(e), delete T[e]);
    P();
}
function j(e) {
    T[e.userId] = {
        expiry: Date.now() + h,
        isStranger: e.isStranger
    };
}
class U extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    isFriend(e) {
        return null != e && m.get(e) === u.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && m.get(e) === u.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && m.get(e.author.id) === u.OGo.BLOCKED) return !0;
        if (e instanceof l.ZP) {
            if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && m.get(e) !== u.OGo.BLOCKED && y.has(e);
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
        return m.get(e) === u.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return S;
    }
    getSpamCount() {
        return C;
    }
    getPendingIgnoredCount() {
        return R;
    }
    getOutgoingCount() {
        return A;
    }
    getFriendCount() {
        return N;
    }
    getRelationshipCount() {
        return m.size;
    }
    getMutableRelationships() {
        return m;
    }
    getVersion() {
        return I;
    }
    isSpam(e) {
        return b.has(e);
    }
    getRelationshipType(e) {
        let t = m.get(e);
        return null != t ? t : u.OGo.NONE;
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
        return Array.from(m.entries())
            .filter((e) => {
                let [t, n] = e;
                return n === u.OGo.FRIEND;
            })
            .map((e) => {
                let [t] = e;
                return t;
            });
    }
    getBlockedIDs() {
        return Array.from(m.entries())
            .filter((e) => {
                let [t, n] = e;
                return n === u.OGo.BLOCKED;
            })
            .map((e) => {
                let [t] = e;
                return t;
            });
    }
    getIgnoredIDs() {
        return Array.from(m.entries())
            .filter((e) => {
                let [t] = e;
                return this.isIgnored(t);
            })
            .map((e) => {
                let [t] = e;
                return t;
            });
    }
    getBlockedOrIgnoredIDs() {
        return Array.from(m.entries())
            .filter((e) => {
                let [t] = e;
                return this.isBlockedOrIgnored(t);
            })
            .map((e) => {
                let [t] = e;
                return t;
            });
    }
    getOriginApplicationId(e) {
        return v[e];
    }
    isStranger(e) {
        if (null != T[e]) return T[e].expiry < Date.now() ? void delete T[e] : T[e].isStranger;
    }
}
d(U, 'displayName', 'RelationshipStore');
let G = new U(s.Z, {
    CONNECTION_OPEN: w,
    OVERLAY_INITIALIZE: D,
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_REMOVE: x,
    RELATIONSHIP_UPDATE: k,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: M,
    UPDATE_STRANGER_STATUS: j
});
