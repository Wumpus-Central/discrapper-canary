n.d(t, { Z: () => x }), n(47120), n(789020);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(798140),
    u = n(131704),
    c = n(314897);
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
let f = {},
    _ = new l.ZP(),
    p = new Set();
function h(e) {
    f = a()(f)
        .reject((t) => t.guildId === e)
        .keyBy('threadId')
        .value();
}
function m(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(g);
}
function g(e) {
    u.AW.has(e.type) &&
        null != e.member &&
        ((f[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }),
        E(e.id));
}
function E(e) {
    let t = f[e];
    _.clearTimer(e),
        !0 === t.muted
            ? ((p = new Set(p)).add(e),
              _.setTimer(e, t.muteConfig, () => {
                  (f[e].muted = !1), (p = new Set(p)).delete(e), D.emitChange();
              }) && ((f[e].muted = !1), (p = new Set(p)).delete(e)))
            : (p = new Set(p)).delete(e);
}
function v(e) {
    _.reset(),
        (p = new Set()),
        (f = {}),
        e.guilds.forEach((e) => {
            m(e);
        });
}
function y(e) {
    let { joinedThreads: t } = e;
    f = a()(t)
        .map((e) => ({
            ...e,
            joinTimestamp: new Date(e.joinTimestamp)
        }))
        .keyBy('threadId')
        .value();
}
function I(e) {
    let { guild: t } = e;
    h(t.id), m(t);
}
function T(e) {
    let { guild: t } = e;
    h(t.id);
}
function b(e) {
    let { channel: t } = e;
    g(t);
}
function S(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (f[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                E(e.id);
        });
}
function A(e) {
    let { channel: t } = e;
    if (!(t.id in f)) return !1;
    (f = { ...f }), delete f[t.id];
}
function N(e) {
    if (c.default.getId() !== e.userId) return !1;
    (f[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp)
    }),
        E(e.id);
}
function C(e) {
    let { id: t, userId: n, guildId: i, isJoining: r } = e;
    if (c.default.getId() !== n || null === i) return !1;
    r
        ? (f[t] = {
              threadId: t,
              guildId: i,
              flags: 0,
              muted: !0,
              muteConfig: { end_time: void 0 },
              joinTimestamp: new Date()
          })
        : delete f[t];
}
function R(e) {
    var t, n;
    let i = !1;
    return (
        (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(c.default.getId())) && e.id in f && ((f = { ...f }), delete f[e.id], (i = !0)),
        null === (n = e.addedMembers) ||
            void 0 === n ||
            n.forEach((t) => {
                t.userId === c.default.getId() &&
                    (((f = { ...f })[e.id] = {
                        threadId: e.id,
                        guildId: e.guildId,
                        flags: t.flags,
                        muted: t.muted,
                        muteConfig: t.muteConfig,
                        joinTimestamp: new Date(t.joinTimestamp)
                    }),
                    E(e.id),
                    (i = !0));
            }),
        i
    );
}
class O extends (i = s.ZP.Store) {
    hasJoined(e) {
        return e in f;
    }
    joinTimestamp(e) {
        var t;
        return null === (t = f[e]) || void 0 === t ? void 0 : t.joinTimestamp;
    }
    flags(e) {
        var t;
        return null === (t = f[e]) || void 0 === t ? void 0 : t.flags;
    }
    getInitialOverlayState() {
        return Object.values(f);
    }
    getMuteConfig(e) {
        var t;
        return null === (t = f[e]) || void 0 === t ? void 0 : t.muteConfig;
    }
    getMutedThreads() {
        return p;
    }
    isMuted(e) {
        return p.has(e);
    }
}
d(O, 'displayName', 'JoinedThreadsStore');
let D = new O(o.Z, {
        CONNECTION_OPEN: v,
        OVERLAY_INITIALIZE: y,
        GUILD_CREATE: I,
        GUILD_DELETE: T,
        THREAD_CREATE: b,
        THREAD_LIST_SYNC: S,
        SEARCH_FINISH: S,
        MOD_VIEW_SEARCH_FINISH: S,
        LOAD_THREADS_SUCCESS: S,
        LOAD_ARCHIVED_THREADS_SUCCESS: S,
        THREAD_DELETE: A,
        THREAD_MEMBER_UPDATE: N,
        THREAD_MEMBER_LOCAL_UPDATE: C,
        THREAD_MEMBERS_UPDATE: R
    }),
    x = D;
