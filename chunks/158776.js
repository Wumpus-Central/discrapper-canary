var i,
    a = r(47120);
var o = r(653041);
var s = r(348327),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    p = r(122810),
    h = r(106301),
    _ = r(709054),
    m = r(314897),
    g = r(594174),
    E = r(981631);
function v(e, n, r) {
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
let y = Object.freeze([]),
    b = {},
    I = {},
    T = {},
    S = {},
    A = {};
function C(e, n) {
    let r = b[e];
    return null != r ? r[n] : null;
}
let N = (e) => {
    switch (e.type) {
        case E.IIU.CUSTOM_STATUS:
            return 4;
        case E.IIU.COMPETING:
            return 3;
        case E.IIU.STREAMING:
            return 2;
        case E.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function R(e, n) {
    return N(n) - N(e);
}
let O = (e) => ((0, p.Z)(e) ? 1 : 0);
function D(e, n) {
    return O(n) - O(e);
}
function x(e, n) {
    var r, i;
    return (null !== (r = n.created_at) && void 0 !== r ? r : 0) - (null !== (i = e.created_at) && void 0 !== i ? i : 0);
}
function L(e, n) {
    return R(e, n) || D(e, n) || x(e, n);
}
function w(e) {
    if ((delete I[e], delete T[e], delete S[e], null == b[e])) return;
    let [n] = c().sortBy(b[e], (e) => -e.timestamp);
    n.status !== E.Skl.OFFLINE ? ((I[e] = n.status), (T[e] = n.activities), null != n.clientStatus && (S[e] = n.clientStatus)) : c().every(b[e], (e) => e.status === E.Skl.OFFLINE) && delete b[e];
}
function P(e) {
    let n = b[e];
    if (null == n) return;
    let r = c().maxBy(Object.values(n), (e) => e.timestamp);
    r.status !== E.Skl.OFFLINE && ((I[e] = r.status), (T[e] = r.activities), null != r.clientStatus && (S[e] = r.clientStatus));
}
function M(e) {
    let { guildId: n, userId: r, status: i, clientStatus: a, activities: o } = e;
    if (r === m.default.getId()) return !1;
    let s = b[r];
    if (null == s) {
        if (i === E.Skl.OFFLINE) return !1;
        s = b[r] = {};
    }
    if (i === E.Skl.OFFLINE)
        s[n] = {
            status: i,
            clientStatus: a,
            activities: y,
            timestamp: Date.now()
        };
    else {
        let e = o.length > 1 ? [...o].sort(L) : o,
            r = s[n];
        (o = null != r && l()(r.activities, e) ? r.activities : e),
            (s[n] = {
                status: i,
                clientStatus: a,
                activities: o,
                timestamp: Date.now()
            });
    }
    return delete A[r], w(r), !0;
}
function k(e) {
    let { guildId: n, userId: r, status: i, clientStatus: a, activities: o, timestamp: s } = e;
    if (r === m.default.getId()) return;
    let l = b[r];
    if (null == l) {
        if (i === E.Skl.OFFLINE) return;
        l = b[r] = {};
    }
    if (i === E.Skl.OFFLINE)
        l[n] = {
            status: i,
            clientStatus: a,
            activities: y,
            timestamp: Date.now()
        };
    else {
        let e = o.length > 1 ? [...o].sort(L) : o;
        l[n] = {
            status: i,
            clientStatus: a,
            activities: e,
            timestamp: s
        };
    }
}
function U(e, n) {
    if (n === m.default.getId()) return !1;
    let r = b[n];
    if (null == r || null == r[e]) return !1;
    delete r[e], 0 === Object.keys(r).length && delete b[n], w(n);
}
function B(e) {
    for (let n of _.default.keys(b)) U(e, n);
}
function G() {
    return !0;
}
function Z(e) {
    let { guilds: n, presences: r } = e,
        i = m.default.getId();
    (b = {}), (A = {}), (I = { [i]: I[i] }), (T = { [i]: T[i] }), (S = { [i]: {} });
    let a = new Set(),
        o = Date.now();
    n.forEach((e) => {
        e.presences.forEach((n) => {
            let { user: r, status: i, clientStatus: s, activities: l } = n;
            k({
                guildId: e.id,
                userId: r.id,
                status: i,
                clientStatus: s,
                activities: l,
                timestamp: o
            }),
                a.add(r.id);
        });
    }),
        r.forEach((e) => {
            let { user: n, status: r, clientStatus: i, activities: s } = e;
            null != n &&
                (k({
                    guildId: E.ME,
                    userId: n.id,
                    status: r,
                    clientStatus: i,
                    activities: s,
                    timestamp: o
                }),
                a.add(n.id));
        }),
        a.delete(i),
        a.forEach(P);
}
function F(e) {
    let { presences: n } = e;
    (b = n.presencesForGuilds), (I = n.statuses), (T = n.activities), (A = n.activityMetadata);
}
function V(e) {
    let { presences: n } = e;
    B(E.ME),
        n.forEach((e) => {
            let { user: n, status: r, clientStatus: i, activities: a } = e;
            null != n &&
                M({
                    guildId: E.ME,
                    userId: n.id,
                    status: r,
                    clientStatus: i,
                    activities: a
                });
        });
}
function j(e) {
    let { guild: n } = e;
    n.presences.forEach((e) => {
        let { user: r, status: i, clientStatus: a, activities: o } = e;
        M({
            guildId: n.id,
            userId: r.id,
            status: i,
            clientStatus: a,
            activities: o
        });
    });
}
function H(e) {
    let { guild: n } = e;
    B(n.id);
}
function Y(e) {
    let { guildId: n, user: r } = e;
    return U(n, r.id);
}
function W(e) {
    let { updates: n } = e;
    return n
        .map((e) => {
            let { guildId: n, user: r, status: i, clientStatus: a, activities: o } = e;
            return M({
                guildId: null != n ? n : E.ME,
                userId: r.id,
                status: i,
                clientStatus: a,
                activities: o
            });
        })
        .some((e) => e);
}
function K(e) {
    let { guildId: n, members: r } = e;
    r.forEach((e) => {
        null != e.presence &&
            M({
                guildId: n,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities
            });
    });
}
function z(e) {
    let { guildId: n, addedMembers: r } = e;
    null == r ||
        r.forEach((e) => {
            null != e.presence &&
                M({
                    guildId: n,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                });
        });
}
function q(e) {
    let n = m.default.getId();
    if (I[n] === e.status && T[n] === e.activities) return !1;
    (I[n] = e.status), (T[n] = e.activities), delete A[n];
}
function Q(e) {
    let { userId: n, metadata: r } = e;
    return (A[n] = r), !1;
}
class X extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(m.default, h.Z);
    }
    setCurrentUserOnConnectionOpen(e, n) {
        (I[m.default.getId()] = e), (T[m.default.getId()] = n);
    }
    getStatus(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Skl.OFFLINE,
            o = g.default.getUser(e);
        if ((null != o && o.hasFlag(E.xW$.BOT_HTTP_INTERACTIONS) && (a = E.Skl.UNKNOWN), null == o ? void 0 : o.isClyde())) return E.Skl.ONLINE;
        if (null == i) return null !== (n = I[e]) && void 0 !== n ? n : a;
        let s = C(e, i);
        return null !== (r = null == s ? void 0 : s.status) && void 0 !== r ? r : a;
    }
    getActivities(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == n) {
            var r;
            return null !== (r = T[e]) && void 0 !== r ? r : y;
        }
        let i = C(e, n);
        return null == i || null == i.activities ? y : i.activities;
    }
    getPrimaryActivity(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, n).filter((e) => e.type !== E.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let n = [];
        for (let r of _.default.keys(T))
            for (let i of T[r])
                i.application_id === e &&
                    n.push({
                        userId: r,
                        activity: i
                    });
        return n;
    }
    getApplicationActivity(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === n, r);
    }
    findActivity(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.getActivities(e, r).find(n);
    }
    getActivityMetadata(e) {
        return A[e];
    }
    getUserIds() {
        return _.default.keys(T);
    }
    isMobileOnline(e) {
        let n = S[e];
        return null != n && n[E.X5t.MOBILE] === E.Skl.ONLINE && n[E.X5t.DESKTOP] !== E.Skl.ONLINE;
    }
    getClientStatus(e) {
        return S[e];
    }
    getState() {
        return {
            presencesForGuilds: b,
            statuses: I,
            activities: T,
            activityMetadata: A,
            clientStatuses: S
        };
    }
}
v(X, 'displayName', 'PresenceStore'),
    (n.Z = new X(f.Z, {
        CONNECTION_OPEN: G,
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        OVERLAY_INITIALIZE: F,
        GUILD_CREATE: j,
        GUILD_DELETE: H,
        GUILD_MEMBER_REMOVE: Y,
        PRESENCE_UPDATES: W,
        PRESENCES_REPLACE: V,
        ACTIVITY_METADATA_UPDATE: Q,
        THREAD_MEMBER_LIST_UPDATE: K,
        THREAD_MEMBERS_UPDATE: z,
        SELF_PRESENCE_STORE_UPDATE: q
    }));
