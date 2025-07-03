(n.d(t, { Z: () => Z }), n(388685));
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(902704),
    o = n(812206),
    s = n(594190),
    c = n(601964),
    u = n(199902),
    d = n(592125),
    p = n(271383),
    h = n(430824),
    f = n(131951),
    g = n(19780),
    m = n(594174),
    b = n(979651),
    _ = n(996106),
    O = n(914946),
    E = n(238679),
    y = n(452426),
    I = n(295424),
    v = n(222263),
    C = n(863141),
    S = n(186901),
    N = n(981631);
let T = (e) => (0, y.Z)(e).required().keys({ channel_id: e.string().required() });
function P(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: r
        } = e,
        i = d.Z.getChannel(n);
    if (null == i || !(0, O.zM)(i, r.application.id, r.authorization.scopes)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (i.isNSFW() && (null == (t = m.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) !== !0) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(i.id));
}
let j = (e) => (0, y.Z)(e).keys({ channel_id: e.string().allow(null) });
function A(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == d.Z.getChannel(t)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let Z = {
    [N.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, y.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == h.Z.getGuild(t)) throw new _.Z({ errorCode: N.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    a = h.Z.getGuild(t);
                if (null == a) return;
                let o = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null != (n = (0, c.EB)(a, 128)) ? n : null
                    },
                    online: 0
                };
                return (i().isEqual(r, o) || l(o), o);
            };
        }
    },
    [N.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, y.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = d.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(b.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(o, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, O.aE)(a, l.id, e))),
                    o
                );
            };
        }
    },
    [N.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, y.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = d.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(b.Z.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, o, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, O.aE)(a, l.id, e))),
                    o
                );
            };
        }
    },
    [N.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, y.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = d.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(b.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, O.aE)(a, l.id, e));
                return (
                    i()
                        .differenceWith(o, n, i().isEqual)
                        .forEach((e) => r(e)),
                    o
                );
            };
        }
    },
    [N.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, O.zy)(g.Z.getState()),
                    hostname: g.Z.getHostname(),
                    pings: g.Z.getPings(),
                    average_ping: g.Z.getAveragePing(),
                    last_ping: g.Z.getLastPing()
                };
            return (i().isEqual(r, t) || n(r), r);
        }
    },
    [N.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: T,
        handler: P
    },
    [N.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: T,
        handler: P
    },
    [N.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: T,
        handler: P
    },
    [N.zMe.SPEAKING_START]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, S.lH]
        },
        validation: j,
        handler: A
    },
    [N.zMe.SPEAKING_STOP]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, S.lH]
        },
        validation: j,
        handler: A
    },
    [N.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [N.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [N.zMe.GAME_JOIN]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, S.lH]
        },
        handler() {}
    },
    [N.zMe.GAME_SPECTATE]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, S.lH]
        },
        handler() {}
    },
    [N.zMe.ACTIVITY_JOIN]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, S.wE, S.lH]
        },
        handler() {}
    },
    [N.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, S.lH]
        },
        handler() {}
    },
    [N.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, S.wE, S.lH]
        },
        handler() {}
    },
    [N.zMe.ACTIVITY_INVITE]: {
        scope: {
            [S.Gp.ANY]: [l.x.RPC, S.lH]
        },
        handler() {}
    },
    [N.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [N.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [N.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: E.gQ,
    [N.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [S.Gp.ANY]: [S.wE] },
        handler() {}
    },
    [N.zMe.ORIENTATION_UPDATE]: {
        scope: { [S.Gp.ANY]: [S.wE] },
        handler() {}
    },
    [N.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {}
    },
    [N.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [S.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [N.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [N.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [S.Gp.ANY]: [S.lH, l.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: m.default.getCurrentUser() };
            return (null == r.currentUser || (null != t && (0, a.Z)(r, t)) || n((0, C.Z)(r.currentUser)), r);
        }
    },
    [N.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [S.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: p.ZP.getSelfMember(t) };
                return (null == i.currentGuildMember || (null != n && (0, a.Z)(i, n)) || r((0, v.Z)(i.currentGuildMember)), i);
            };
        }
    },
    [N.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [S.Gp.ANY]: [S.lH, S.wE]
        },
        handler() {}
    },
    [N.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [S.Gp.ANY]: [S.lH, S.wE]
        },
        handler() {}
    },
    [N.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [S.Gp.ALL]: [S.lH, l.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = u.Z.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? s.ZP.getGameForPID(l.pid) : null,
                c = (null == a ? void 0 : a.id) != null ? o.Z.getApplication(a.id) : null,
                d = null != c ? (0, I.Z)(c) : null,
                p = null == l ? void 0 : l.sourceName,
                h = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application: null != d ? { name: p } : null
                };
            return (i().isEqual(h, n) || r(h), h);
        }
    },
    [N.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [S.Gp.ALL]: [S.lH, l.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: f.Z.isVideoEnabled() };
            return (i().isEqual(r, t) || n(r), r);
        }
    }
};
