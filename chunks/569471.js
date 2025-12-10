n.d(t, { Z: () => j }), n(388685), n(997841);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(798140),
    c = n(131704),
    u = n(314897);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function _(e, t) {
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
let m = {},
    h = new l.ZP(),
    g = new Set();
function E(e) {
    m = a()(m)
        .reject((t) => t.guildId === e)
        .keyBy("threadId")
        .value();
}
function b(e) {
    var t;
    null == (t = e.threads) || t.forEach(y);
}
function y(e) {
    c.AW.has(e.type) &&
        null != e.member &&
        ((m[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp),
        }),
        O(e.id));
}
function O(e) {
    let t = m[e];
    h.clearTimer(e),
        !0 === t.muted
            ? ((g = new Set(g)).add(e),
              h.setTimer(e, t.muteConfig, () => {
                  (m[e].muted = !1), (g = new Set(g)).delete(e), L.emitChange();
              }) && ((m[e].muted = !1), (g = new Set(g)).delete(e)))
            : (g = new Set(g)).delete(e);
}
function v(e) {
    h.reset(),
        (g = new Set()),
        (m = {}),
        e.guilds.forEach((e) => {
            b(e);
        });
}
function S(e) {
    let { joinedThreads: t } = e;
    m = a()(t)
        .map((e) => _(f({}, e), { joinTimestamp: new Date(e.joinTimestamp) }))
        .keyBy("threadId")
        .value();
}
function I(e) {
    let { guild: t } = e;
    E(t.id), b(t);
}
function T(e) {
    let { guild: t } = e;
    E(t.id);
}
function C(e) {
    let { channel: t } = e;
    y(t);
}
function A(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (m[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp),
            }),
                O(e.id);
        });
}
function N(e) {
    let { guildId: t, data: n } = e;
    null != t &&
        n.forEach((e) => {
            let { members: n } = e;
            n.forEach((e) => {
                (m[e.id] = {
                    threadId: e.id,
                    guildId: t,
                    flags: e.flags,
                    muted: e.muted,
                    muteConfig: e.muteConfig,
                    joinTimestamp: new Date(e.joinTimestamp),
                }),
                    O(e.id);
            });
        });
}
function P(e) {
    let { channel: t } = e;
    if (!(t.id in m)) return !1;
    (m = f({}, m)), delete m[t.id];
}
function R(e) {
    if (u.default.getId() !== e.userId) return !1;
    (m[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp),
    }),
        O(e.id);
}
function D(e) {
    let { id: t, userId: n, guildId: r, isJoining: i } = e;
    if (u.default.getId() !== n || null === r) return !1;
    i
        ? (m[t] = {
              threadId: t,
              guildId: r,
              flags: 0,
              muted: !0,
              muteConfig: { end_time: void 0 },
              joinTimestamp: new Date(),
          })
        : delete m[t];
}
function w(e) {
    var t, n;
    let r = !1;
    return (
        (null == (t = e.removedMemberIds) ? void 0 : t.includes(u.default.getId())) &&
            e.id in m &&
            ((m = f({}, m)), delete m[e.id], (r = !0)),
        null == (n = e.addedMembers) ||
            n.forEach((t) => {
                t.userId === u.default.getId() &&
                    (((m = f({}, m))[e.id] = {
                        threadId: e.id,
                        guildId: e.guildId,
                        flags: t.flags,
                        muted: t.muted,
                        muteConfig: t.muteConfig,
                        joinTimestamp: new Date(t.joinTimestamp),
                    }),
                    O(e.id),
                    (r = !0));
            }),
        r
    );
}
class x extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    hasJoined(e) {
        return e in m;
    }
    joinTimestamp(e) {
        var t;
        return null == (t = m[e]) ? void 0 : t.joinTimestamp;
    }
    flags(e) {
        var t;
        return null == (t = m[e]) ? void 0 : t.flags;
    }
    getInitialOverlayState() {
        return Object.values(m);
    }
    getMuteConfig(e) {
        var t;
        return null == (t = m[e]) ? void 0 : t.muteConfig;
    }
    getMutedThreads() {
        return g;
    }
    isMuted(e) {
        return g.has(e);
    }
}
d(x, "displayName", "JoinedThreadsStore");
let L = new x(s.Z, {
        CONNECTION_OPEN: v,
        OVERLAY_INITIALIZE: S,
        GUILD_CREATE: I,
        GUILD_DELETE: T,
        THREAD_CREATE: C,
        THREAD_LIST_SYNC: A,
        SEARCH_MESSAGES_SUCCESS: N,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
        LOAD_THREADS_SUCCESS: A,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        THREAD_DELETE: P,
        THREAD_MEMBER_UPDATE: R,
        THREAD_MEMBER_LOCAL_UPDATE: D,
        THREAD_MEMBERS_UPDATE: w,
    }),
    j = L;
