var i,
    a = r(47120);
var o = r(789020);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(570140),
    d = r(798140),
    f = r(131704),
    p = r(314897);
function h(e, n, r) {
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
let _ = {},
    m = new d.ZP(),
    g = new Set();
function E(e) {
    _ = l()(_)
        .reject((n) => n.guildId === e)
        .keyBy('threadId')
        .value();
}
function v(e) {
    var n;
    null === (n = e.threads) || void 0 === n || n.forEach(y);
}
function y(e) {
    f.AW.has(e.type) &&
        null != e.member &&
        ((_[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }),
        b(e.id));
}
function b(e) {
    let n = _[e];
    m.clearTimer(e),
        !0 === n.muted
            ? ((g = new Set(g)).add(e),
              m.setTimer(e, n.muteConfig, () => {
                  (_[e].muted = !1), (g = new Set(g)).delete(e), w.emitChange();
              }) && ((_[e].muted = !1), (g = new Set(g)).delete(e)))
            : (g = new Set(g)).delete(e);
}
function I(e) {
    m.reset(),
        (g = new Set()),
        (_ = {}),
        e.guilds.forEach((e) => {
            v(e);
        });
}
function T(e) {
    let { joinedThreads: n } = e;
    _ = l()(n)
        .map((e) => ({
            ...e,
            joinTimestamp: new Date(e.joinTimestamp)
        }))
        .keyBy('threadId')
        .value();
}
function S(e) {
    let { guild: n } = e;
    E(n.id), v(n);
}
function A(e) {
    let { guild: n } = e;
    E(n.id);
}
function C(e) {
    let { channel: n } = e;
    y(n);
}
function N(e) {
    let { guildId: n, members: r } = e;
    null != n &&
        null != r &&
        r.forEach((e) => {
            (_[e.id] = {
                threadId: e.id,
                guildId: n,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                b(e.id);
        });
}
function R(e) {
    let { channel: n } = e;
    if (!(n.id in _)) return !1;
    (_ = { ..._ }), delete _[n.id];
}
function O(e) {
    if (p.default.getId() !== e.userId) return !1;
    (_[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp)
    }),
        b(e.id);
}
function D(e) {
    let { id: n, userId: r, guildId: i, isJoining: a } = e;
    if (p.default.getId() !== r || null === i) return !1;
    a
        ? (_[n] = {
              threadId: n,
              guildId: i,
              flags: 0,
              muted: !0,
              muteConfig: { end_time: void 0 },
              joinTimestamp: new Date()
          })
        : delete _[n];
}
function x(e) {
    var n, r;
    let i = !1;
    return (
        (null === (n = e.removedMemberIds) || void 0 === n ? void 0 : n.includes(p.default.getId())) && e.id in _ && ((_ = { ..._ }), delete _[e.id], (i = !0)),
        null === (r = e.addedMembers) ||
            void 0 === r ||
            r.forEach((n) => {
                n.userId === p.default.getId() &&
                    (((_ = { ..._ })[e.id] = {
                        threadId: e.id,
                        guildId: e.guildId,
                        flags: n.flags,
                        muted: n.muted,
                        muteConfig: n.muteConfig,
                        joinTimestamp: new Date(n.joinTimestamp)
                    }),
                    b(e.id),
                    (i = !0));
            }),
        i
    );
}
class L extends (i = u.ZP.Store) {
    hasJoined(e) {
        return e in _;
    }
    joinTimestamp(e) {
        var n;
        return null === (n = _[e]) || void 0 === n ? void 0 : n.joinTimestamp;
    }
    flags(e) {
        var n;
        return null === (n = _[e]) || void 0 === n ? void 0 : n.flags;
    }
    getInitialOverlayState() {
        return Object.values(_);
    }
    getMuteConfig(e) {
        var n;
        return null === (n = _[e]) || void 0 === n ? void 0 : n.muteConfig;
    }
    getMutedThreads() {
        return g;
    }
    isMuted(e) {
        return g.has(e);
    }
}
h(L, 'displayName', 'JoinedThreadsStore');
let w = new L(c.Z, {
    CONNECTION_OPEN: I,
    OVERLAY_INITIALIZE: T,
    GUILD_CREATE: S,
    GUILD_DELETE: A,
    THREAD_CREATE: C,
    THREAD_LIST_SYNC: N,
    SEARCH_FINISH: N,
    MOD_VIEW_SEARCH_FINISH: N,
    LOAD_THREADS_SUCCESS: N,
    LOAD_ARCHIVED_THREADS_SUCCESS: N,
    THREAD_DELETE: R,
    THREAD_MEMBER_UPDATE: O,
    THREAD_MEMBER_LOCAL_UPDATE: D,
    THREAD_MEMBERS_UPDATE: x
});
n.Z = w;
