(n.d(t, { Z: () => Z }), n(388685));
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(902704),
    o = n(622822),
    s = n(812206),
    c = n(594190),
    u = n(601964),
    d = n(199902),
    p = n(592125),
    h = n(271383),
    f = n(430824),
    g = n(131951),
    m = n(19780),
    b = n(594174),
    _ = n(979651),
    O = n(996106),
    E = n(914946),
    y = n(238679),
    v = n(452426),
    I = n(295424),
    C = n(222263),
    S = n(863141),
    N = n(186901),
    T = n(981631);
let P = (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() });
function j(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: r
        } = e,
        i = p.Z.getChannel(n);
    if (null == i || !(0, E.zM)(i, r.application.id, r.authorization.scopes)) throw new O.Z({ errorCode: T.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if ((0, o.aC)(i) && (null == (t = b.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) !== !0) throw new O.Z({ errorCode: T.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(i.id));
}
let A = (e) => (0, v.Z)(e).keys({ channel_id: e.string().allow(null) });
function x(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == p.Z.getChannel(t)) throw new O.Z({ errorCode: T.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let Z = {
    [T.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, v.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == f.Z.getGuild(t)) throw new O.Z({ errorCode: T.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    a = f.Z.getGuild(t);
                if (null == a) return;
                let o = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null != (n = (0, u.EB)(a, 128)) ? n : null
                    },
                    online: 0
                };
                return (i().isEqual(r, o) || l(o), o);
            };
        }
    },
    [T.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == p.Z.getChannel(t)) throw new O.Z({ errorCode: T.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = p.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(_.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(o, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, E.aE)(a, l.id, e))),
                    o
                );
            };
        }
    },
    [T.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == p.Z.getChannel(t)) throw new O.Z({ errorCode: T.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = p.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(_.Z.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, o, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, E.aE)(a, l.id, e))),
                    o
                );
            };
        }
    },
    [T.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == p.Z.getChannel(t)) throw new O.Z({ errorCode: T.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = p.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(_.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, E.aE)(a, l.id, e));
                return (
                    i()
                        .differenceWith(o, n, i().isEqual)
                        .forEach((e) => r(e)),
                    o
                );
            };
        }
    },
    [T.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, E.zy)(m.Z.getState()),
                    hostname: m.Z.getHostname(),
                    pings: m.Z.getPings(),
                    average_ping: m.Z.getAveragePing(),
                    last_ping: m.Z.getLastPing()
                };
            return (i().isEqual(r, t) || n(r), r);
        }
    },
    [T.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: P,
        handler: j
    },
    [T.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: P,
        handler: j
    },
    [T.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: P,
        handler: j
    },
    [T.zMe.SPEAKING_START]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, N.lH]
        },
        validation: A,
        handler: x
    },
    [T.zMe.SPEAKING_STOP]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, N.lH]
        },
        validation: A,
        handler: x
    },
    [T.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [T.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [T.zMe.GAME_JOIN]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH]
        },
        handler() {}
    },
    [T.zMe.GAME_SPECTATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH]
        },
        handler() {}
    },
    [T.zMe.ACTIVITY_JOIN]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.wE, N.lH]
        },
        handler() {}
    },
    [T.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH]
        },
        handler() {}
    },
    [T.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.wE, N.lH]
        },
        handler() {}
    },
    [T.zMe.ACTIVITY_INVITE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH]
        },
        handler() {}
    },
    [T.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [T.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [T.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: y.gQ,
    [T.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [N.Gp.ANY]: [N.wE] },
        handler() {}
    },
    [T.zMe.ORIENTATION_UPDATE]: {
        scope: { [N.Gp.ANY]: [N.wE] },
        handler() {}
    },
    [T.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {}
    },
    [T.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [N.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [T.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [T.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [N.Gp.ANY]: [N.lH, l.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: b.default.getCurrentUser() };
            return (null == r.currentUser || (null != t && (0, a.Z)(r, t)) || n((0, S.Z)(r.currentUser)), r);
        }
    },
    [T.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [N.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: h.ZP.getSelfMember(t) };
                return (null == i.currentGuildMember || (null != n && (0, a.Z)(i, n)) || r((0, C.Z)(i.currentGuildMember)), i);
            };
        }
    },
    [T.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [N.Gp.ANY]: [N.lH, N.wE]
        },
        handler() {}
    },
    [T.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [N.Gp.ANY]: [N.lH, N.wE]
        },
        handler() {}
    },
    [T.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [N.Gp.ALL]: [N.lH, l.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = d.Z.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? c.ZP.getGameForPID(l.pid) : null,
                o = (null == a ? void 0 : a.id) != null ? s.Z.getApplication(a.id) : null,
                u = null != o ? (0, I.Z)(o) : null,
                p = null == l ? void 0 : l.sourceName,
                h = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application: null != u ? { name: p } : null
                };
            return (i().isEqual(h, n) || r(h), h);
        }
    },
    [T.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [N.Gp.ALL]: [N.lH, l.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: g.Z.isVideoEnabled() };
            return (i().isEqual(r, t) || n(r), r);
        }
    }
};
