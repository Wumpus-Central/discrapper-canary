n.d(t, { Z: () => A }), n(47120);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    o = n(902704),
    a = n(812206),
    s = n(594190),
    c = n(199902),
    u = n(592125),
    d = n(271383),
    p = n(430824),
    h = n(131951),
    g = n(19780),
    f = n(594174),
    m = n(979651),
    b = n(996106),
    _ = n(914946),
    E = n(238679),
    O = n(452426),
    N = n(295424),
    v = n(222263),
    y = n(863141),
    I = n(186901),
    C = n(981631);
let S = (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() });
function T(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: r
        } = e,
        i = u.Z.getChannel(n);
    if (null == i || !(0, _.zM)(i, r.application.id, r.authorization.scopes)) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (i.isNSFW() && (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(i.id));
}
let P = (e) => (0, O.Z)(e).keys({ channel_id: e.string().allow(null) });
function j(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == u.Z.getChannel(t)) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let A = {
    [C.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, O.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == p.Z.getGuild(t)) throw new b.Z({ errorCode: C.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    o = p.Z.getGuild(t);
                if (null == o) return;
                let a = {
                    guild: {
                        id: o.id,
                        name: o.name,
                        icon_url: null !== (n = o.getIconURL(128)) && void 0 !== n ? n : null
                    },
                    online: 0
                };
                return i().isEqual(r, a) || l(a), a;
            };
        }
    },
    [C.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == u.Z.getChannel(t)) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = u.Z.getChannel(t);
                if (null == l) return;
                let o = l.getGuildId(),
                    a = Object.values(m.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(a, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, _.aE)(o, l.id, e))),
                    a
                );
            };
        }
    },
    [C.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == u.Z.getChannel(t)) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = u.Z.getChannel(t);
                if (null == l) return;
                let o = l.getGuildId(),
                    a = Object.values(m.Z.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, a, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, _.aE)(o, l.id, e))),
                    a
                );
            };
        }
    },
    [C.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == u.Z.getChannel(t)) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = u.Z.getChannel(t);
                if (null == l) return;
                let o = l.getGuildId(),
                    a = Object.values(m.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, _.aE)(o, l.id, e));
                return (
                    i()
                        .differenceWith(a, n, i().isEqual)
                        .forEach((e) => r(e)),
                    a
                );
            };
        }
    },
    [C.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, _.zy)(g.Z.getState()),
                    hostname: g.Z.getHostname(),
                    pings: g.Z.getPings(),
                    average_ping: g.Z.getAveragePing(),
                    last_ping: g.Z.getLastPing()
                };
            return i().isEqual(r, t) || n(r), r;
        }
    },
    [C.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: S,
        handler: T
    },
    [C.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: S,
        handler: T
    },
    [C.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: S,
        handler: T
    },
    [C.zMe.SPEAKING_START]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, I.lH]
        },
        validation: P,
        handler: j
    },
    [C.zMe.SPEAKING_STOP]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, I.lH]
        },
        validation: P,
        handler: j
    },
    [C.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [C.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [C.zMe.GAME_JOIN]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.lH]
        },
        handler() {}
    },
    [C.zMe.GAME_SPECTATE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_JOIN]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.wE, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.wE, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_INVITE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.wE, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [I.Gp.ANY]: [l.x.RPC, I.wE, I.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: E.gQ,
    [C.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [I.Gp.ANY]: [I.wE] },
        handler() {}
    },
    [C.zMe.ORIENTATION_UPDATE]: {
        scope: { [I.Gp.ANY]: [I.wE] },
        handler() {}
    },
    [C.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {}
    },
    [C.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [I.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [C.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [C.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [I.Gp.ANY]: [I.lH, l.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: f.default.getCurrentUser() };
            return null == r.currentUser || (null != t && (0, o.Z)(r, t)) || n((0, y.Z)(r.currentUser)), r;
        }
    },
    [C.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [I.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: d.ZP.getSelfMember(t) };
                return null == i.currentGuildMember || (null != n && (0, o.Z)(i, n)) || r((0, v.Z)(i.currentGuildMember)), i;
            };
        }
    },
    [C.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [I.Gp.ANY]: [I.lH, I.wE]
        },
        handler() {}
    },
    [C.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [I.Gp.ANY]: [I.lH, I.wE]
        },
        handler() {}
    },
    [C.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [I.Gp.ALL]: [I.lH, l.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t, n;
            let { prevState: r, dispatch: l } = e,
                o = c.Z.getStreamerActiveStreamMetadata(),
                u = (null == o ? void 0 : o.pid) != null ? s.ZP.getGameForPID(o.pid) : null,
                d = (null == u ? void 0 : u.id) != null ? a.Z.getApplication(u.id) : null,
                p = null != d ? (0, N.Z)(d) : null,
                h = null == o ? void 0 : o.sourceName,
                g = {
                    active: null != o,
                    pid: null !== (t = null == o ? void 0 : o.pid) && void 0 !== t ? t : null,
                    application: (n = null != p) ? { name: h } : null
                };
            return i().isEqual(g, r) || l(g), g;
        }
    },
    [C.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [I.Gp.ALL]: [I.lH, l.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: h.Z.isVideoEnabled() };
            return i().isEqual(r, t) || n(r), r;
        }
    }
};
