n.d(t, { Z: () => x }), n(47120), n(789020);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
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
let h = {},
    m = new l.ZP(),
    g = new Set();
function E(e) {
    h = o()(h)
        .reject((t) => t.guildId === e)
        .keyBy('threadId')
        .value();
}
function b(e) {
    var t;
    null == (t = e.threads) || t.forEach(y);
}
function y(e) {
    c.AW.has(e.type) &&
        null != e.member &&
        ((h[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }),
        v(e.id));
}
function v(e) {
    let t = h[e];
    m.clearTimer(e),
        !0 === t.muted
            ? ((g = new Set(g)).add(e),
              m.setTimer(e, t.muteConfig, () => {
                  (h[e].muted = !1), (g = new Set(g)).delete(e), L.emitChange();
              }) && ((h[e].muted = !1), (g = new Set(g)).delete(e)))
            : (g = new Set(g)).delete(e);
}
function O(e) {
    m.reset(),
        (g = new Set()),
        (h = {}),
        e.guilds.forEach((e) => {
            b(e);
        });
}
function I(e) {
    let { joinedThreads: t } = e;
    h = o()(t)
        .map((e) => p(f({}, e), { joinTimestamp: new Date(e.joinTimestamp) }))
        .keyBy('threadId')
        .value();
}
function S(e) {
    let { guild: t } = e;
    E(t.id), b(t);
}
function T(e) {
    let { guild: t } = e;
    E(t.id);
}
function N(e) {
    let { channel: t } = e;
    y(t);
}
function A(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (h[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                v(e.id);
        });
}
function C(e) {
    let { channel: t } = e;
    if (!(t.id in h)) return !1;
    (h = f({}, h)), delete h[t.id];
}
function R(e) {
    if (u.default.getId() !== e.userId) return !1;
    (h[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp)
    }),
        v(e.id);
}
function P(e) {
    let { id: t, userId: n, guildId: r, isJoining: i } = e;
    if (u.default.getId() !== n || null === r) return !1;
    i
        ? (h[t] = {
              threadId: t,
              guildId: r,
              flags: 0,
              muted: !0,
              muteConfig: { end_time: void 0 },
              joinTimestamp: new Date()
          })
        : delete h[t];
}
function w(e) {
    var t, n;
    let r = !1;
    return (
        (null == (t = e.removedMemberIds) ? void 0 : t.includes(u.default.getId())) && e.id in h && ((h = f({}, h)), delete h[e.id], (r = !0)),
        null == (n = e.addedMembers) ||
            n.forEach((t) => {
                t.userId === u.default.getId() &&
                    (((h = f({}, h))[e.id] = {
                        threadId: e.id,
                        guildId: e.guildId,
                        flags: t.flags,
                        muted: t.muted,
                        muteConfig: t.muteConfig,
                        joinTimestamp: new Date(t.joinTimestamp)
                    }),
                    v(e.id),
                    (r = !0));
            }),
        r
    );
}
class D extends (r = a.ZP.Store) {
    hasJoined(e) {
        return e in h;
    }
    joinTimestamp(e) {
        var t;
        return null == (t = h[e]) ? void 0 : t.joinTimestamp;
    }
    flags(e) {
        var t;
        return null == (t = h[e]) ? void 0 : t.flags;
    }
    getInitialOverlayState() {
        return Object.values(h);
    }
    getMuteConfig(e) {
        var t;
        return null == (t = h[e]) ? void 0 : t.muteConfig;
    }
    getMutedThreads() {
        return g;
    }
    isMuted(e) {
        return g.has(e);
    }
}
d(D, 'displayName', 'JoinedThreadsStore');
let L = new D(s.Z, {
        CONNECTION_OPEN: O,
        OVERLAY_INITIALIZE: I,
        GUILD_CREATE: S,
        GUILD_DELETE: T,
        THREAD_CREATE: N,
        THREAD_LIST_SYNC: A,
        SEARCH_FINISH: A,
        MOD_VIEW_SEARCH_FINISH: A,
        LOAD_THREADS_SUCCESS: A,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        THREAD_DELETE: C,
        THREAD_MEMBER_UPDATE: R,
        THREAD_MEMBER_LOCAL_UPDATE: P,
        THREAD_MEMBERS_UPDATE: w
    }),
    x = L;
