"use strict";
n.d(t, { A: () => T }), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(544743),
    l = n(95701),
    d = n(495544);
let _ = {},
    u = new o.Ay(),
    c = new Set();
function E(e) {
    _ = r()(_)
        .reject((t) => t.guildId === e)
        .keyBy("threadId")
        .value();
}
function h(e) {
    e.threads?.forEach(m);
}
function m(e) {
    l.A_.has(e.type) &&
        null != e.member &&
        ((_[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp),
        }),
        f(e.id));
}
function f(e) {
    let t = _[e];
    u.clearTimer(e),
        !0 === t.muted
            ? ((c = new Set(c)).add(e),
              u.setTimer(e, t.muteConfig, () => {
                  (_[e].muted = !1), (c = new Set(c)).delete(e), I.emitChange();
              }) && ((_[e].muted = !1), (c = new Set(c)).delete(e)))
            : (c = new Set(c)).delete(e);
}
function g(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (_[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp),
            }),
                f(e.id);
        });
}
function p(e) {
    let { guildId: t, data: n } = e;
    null != t &&
        n.forEach((e) => {
            let { members: n } = e;
            n.forEach((e) => {
                (_[e.id] = {
                    threadId: e.id,
                    guildId: t,
                    flags: e.flags,
                    muted: e.muted,
                    muteConfig: e.muteConfig,
                    joinTimestamp: new Date(e.joinTimestamp),
                }),
                    f(e.id);
            });
        });
}
class A extends s.Ay.Store {
    initialize() {
        this.waitFor(d.default);
    }
    static displayName = "JoinedThreadsStore";
    hasJoined(e) {
        return e in _;
    }
    joinTimestamp(e) {
        return _[e]?.joinTimestamp;
    }
    flags(e) {
        return _[e]?.flags;
    }
    getInitialOverlayState() {
        return Object.values(_);
    }
    getMuteConfig(e) {
        return _[e]?.muteConfig;
    }
    getMutedThreads() {
        return c;
    }
    isMuted(e) {
        return c.has(e);
    }
}
let I = new A(a.h, {
        CONNECTION_OPEN: function (e) {
            u.reset(),
                (c = new Set()),
                (_ = {}),
                e.guilds.forEach((e) => {
                    h(e);
                });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { joinedThreads: t } = e;
            _ = r()(t)
                .map((e) => ({ ...e, joinTimestamp: new Date(e.joinTimestamp) }))
                .keyBy("threadId")
                .value();
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            E(t.id), h(t);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            E(t.id);
        },
        THREAD_CREATE: function (e) {
            let { channel: t } = e;
            m(t);
        },
        THREAD_LIST_SYNC: g,
        SEARCH_MESSAGES_SUCCESS: p,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: p,
        LOAD_THREADS_SUCCESS: g,
        LOAD_ARCHIVED_THREADS_SUCCESS: g,
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            if (!(t.id in _)) return !1;
            (_ = { ..._ }), delete _[t.id];
        },
        THREAD_MEMBER_UPDATE: function (e) {
            if (d.default.getId() !== e.userId) return !1;
            (_[e.id] = {
                threadId: e.id,
                guildId: e.guildId,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp),
            }),
                f(e.id);
        },
        THREAD_MEMBER_LOCAL_UPDATE: function (e) {
            let { id: t, userId: n, guildId: i, isJoining: r } = e;
            if (d.default.getId() !== n || null === i) return !1;
            r
                ? (_[t] = {
                      threadId: t,
                      guildId: i,
                      flags: 0,
                      muted: !0,
                      muteConfig: { end_time: void 0 },
                      joinTimestamp: new Date(),
                  })
                : delete _[t];
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let t = !1;
            return (
                e.removedMemberIds?.includes(d.default.getId()) &&
                    e.id in _ &&
                    ((_ = { ..._ }), delete _[e.id], (t = !0)),
                e.addedMembers?.forEach((n) => {
                    n.userId === d.default.getId() &&
                        (((_ = { ..._ })[e.id] = {
                            threadId: e.id,
                            guildId: e.guildId,
                            flags: n.flags,
                            muted: n.muted,
                            muteConfig: n.muteConfig,
                            joinTimestamp: new Date(n.joinTimestamp),
                        }),
                        f(e.id),
                        (t = !0));
                }),
                t
            );
        },
    }),
    T = I;
