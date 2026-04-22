"use strict";
n.d(t, { A: () => T }), n(938796);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(544743),
    l = n(95701),
    u = n(961350);
let d = {},
    c = new o.Ay(),
    _ = new Set();
function f(e) {
    d = i()(d)
        .reject((t) => t.guildId === e)
        .keyBy("threadId")
        .value();
}
function E(e) {
    e.threads?.forEach(h);
}
function h(e) {
    l.A_.has(e.type) &&
        null != e.member &&
        ((d[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp),
        }),
        p(e.id));
}
function p(e) {
    let t = d[e];
    c.clearTimer(e),
        !0 === t.muted
            ? ((_ = new Set(_)).add(e),
              c.setTimer(e, t.muteConfig, () => {
                  (d[e].muted = !1), (_ = new Set(_)).delete(e), I.emitChange();
              }) && ((d[e].muted = !1), (_ = new Set(_)).delete(e)))
            : (_ = new Set(_)).delete(e);
}
function m(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (d[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp),
            }),
                p(e.id);
        });
}
function g(e) {
    let { guildId: t, data: n } = e;
    null != t &&
        n.forEach((e) => {
            let { members: n } = e;
            n.forEach((e) => {
                (d[e.id] = {
                    threadId: e.id,
                    guildId: t,
                    flags: e.flags,
                    muted: e.muted,
                    muteConfig: e.muteConfig,
                    joinTimestamp: new Date(e.joinTimestamp),
                }),
                    p(e.id);
            });
        });
}
class A extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default);
    }
    static displayName = "JoinedThreadsStore";
    hasJoined(e) {
        return e in d;
    }
    joinTimestamp(e) {
        return d[e]?.joinTimestamp;
    }
    flags(e) {
        return d[e]?.flags;
    }
    getInitialOverlayState() {
        return Object.values(d);
    }
    getMuteConfig(e) {
        return d[e]?.muteConfig;
    }
    getMutedThreads() {
        return _;
    }
    isMuted(e) {
        return _.has(e);
    }
}
let I = new A(a.h, {
        CONNECTION_OPEN: function (e) {
            c.reset(),
                (_ = new Set()),
                (d = {}),
                e.guilds.forEach((e) => {
                    E(e);
                });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { joinedThreads: t } = e;
            d = i()(t)
                .map((e) => ({ ...e, joinTimestamp: new Date(e.joinTimestamp) }))
                .keyBy("threadId")
                .value();
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            f(t.id), E(t);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            f(t.id);
        },
        THREAD_CREATE: function (e) {
            let { channel: t } = e;
            h(t);
        },
        THREAD_LIST_SYNC: m,
        SEARCH_MESSAGES_SUCCESS: g,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: g,
        LOAD_THREADS_SUCCESS: m,
        LOAD_ARCHIVED_THREADS_SUCCESS: m,
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            if (!(t.id in d)) return !1;
            (d = { ...d }), delete d[t.id];
        },
        THREAD_MEMBER_UPDATE: function (e) {
            if (u.default.getId() !== e.userId) return !1;
            (d[e.id] = {
                threadId: e.id,
                guildId: e.guildId,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp),
            }),
                p(e.id);
        },
        THREAD_MEMBER_LOCAL_UPDATE: function (e) {
            let { id: t, userId: n, guildId: r, isJoining: i } = e;
            if (u.default.getId() !== n || null === r) return !1;
            i
                ? (d[t] = {
                      threadId: t,
                      guildId: r,
                      flags: 0,
                      muted: !0,
                      muteConfig: { end_time: void 0 },
                      joinTimestamp: new Date(),
                  })
                : delete d[t];
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let t = !1;
            return (
                e.removedMemberIds?.includes(u.default.getId()) &&
                    e.id in d &&
                    ((d = { ...d }), delete d[e.id], (t = !0)),
                e.addedMembers?.forEach((n) => {
                    n.userId === u.default.getId() &&
                        (((d = { ...d })[e.id] = {
                            threadId: e.id,
                            guildId: e.guildId,
                            flags: n.flags,
                            muted: n.muted,
                            muteConfig: n.muteConfig,
                            joinTimestamp: new Date(n.joinTimestamp),
                        }),
                        p(e.id),
                        (t = !0));
                }),
                t
            );
        },
    }),
    T = I;
