n.d(t, { Z: () => y }), n(47120);
var i = n(392711),
    l = n.n(i),
    r = n(243814),
    a = n(902704),
    s = n(812206),
    o = n(594190),
    c = n(199902),
    d = n(592125),
    u = n(271383),
    h = n(430824),
    m = n(131951),
    p = n(19780),
    g = n(594174),
    _ = n(979651),
    f = n(996106),
    E = n(914946),
    I = n(238679),
    C = n(452426),
    N = n(295424),
    v = n(222263),
    T = n(863141),
    S = n(186901),
    A = n(981631);
let Z = (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() });
function b(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: i
        } = e,
        l = d.Z.getChannel(n);
    if (null == l || !(0, E.zM)(l, i.application.id, i.authorization.scopes)) throw new f.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (l.isNSFW() && (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new f.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(l.id));
}
let x = (e) => (0, C.Z)(e).keys({ channel_id: e.string().allow(null) });
function L(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == d.Z.getChannel(t)) throw new f.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let y = {
    [A.zMe.GUILD_STATUS]: {
        scope: r.x.RPC,
        validation: (e) => (0, C.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == h.Z.getGuild(t)) throw new f.Z({ errorCode: A.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: i, dispatch: r } = e,
                    a = h.Z.getGuild(t);
                if (null == a) return;
                let s = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null !== (n = a.getIconURL(128)) && void 0 !== n ? n : null
                    },
                    online: 0
                };
                return l().isEqual(i, s) || r(s), s;
            };
        }
    },
    [A.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new f.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = d.Z.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    s = Object.values(_.Z.getVoiceStatesForChannel(r.id));
                return (
                    n &&
                        l()
                            .differenceBy(s, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, E.aE)(a, r.id, e))),
                    s
                );
            };
        }
    },
    [A.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new f.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = d.Z.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    s = Object.values(_.Z.getVoiceStatesForChannel(r.id));
                return (
                    l()
                        .differenceBy(n, s, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, E.aE)(a, r.id, e))),
                    s
                );
            };
        }
    },
    [A.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new f.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = d.Z.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    s = Object.values(_.Z.getVoiceStatesForChannel(r.id)).map((e) => (0, E.aE)(a, r.id, e));
                return (
                    l()
                        .differenceWith(s, n, l().isEqual)
                        .forEach((e) => i(e)),
                    s
                );
            };
        }
    },
    [A.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, E.zy)(p.Z.getState()),
                    hostname: p.Z.getHostname(),
                    pings: p.Z.getPings(),
                    average_ping: p.Z.getAveragePing(),
                    last_ping: p.Z.getLastPing()
                };
            return l().isEqual(i, t) || n(i), i;
        }
    },
    [A.zMe.MESSAGE_CREATE]: {
        scope: r.x.RPC,
        validation: Z,
        handler: b
    },
    [A.zMe.MESSAGE_UPDATE]: {
        scope: r.x.RPC,
        validation: Z,
        handler: b
    },
    [A.zMe.MESSAGE_DELETE]: {
        scope: r.x.RPC,
        validation: Z,
        handler: b
    },
    [A.zMe.SPEAKING_START]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ, S.lH]
        },
        validation: x,
        handler: L
    },
    [A.zMe.SPEAKING_STOP]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ, S.lH]
        },
        validation: x,
        handler: L
    },
    [A.zMe.GUILD_CREATE]: {
        scope: r.x.RPC,
        handler() {}
    },
    [A.zMe.CHANNEL_CREATE]: {
        scope: r.x.RPC,
        handler() {}
    },
    [A.zMe.GAME_JOIN]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.lH]
        },
        handler() {}
    },
    [A.zMe.GAME_SPECTATE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_JOIN]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.wE, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.wE, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_INVITE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.wE, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [S.Gp.ANY]: [r.x.RPC, S.wE, S.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: I.gQ,
    [A.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [S.Gp.ANY]: [S.wE] },
        handler() {}
    },
    [A.zMe.ORIENTATION_UPDATE]: {
        scope: { [S.Gp.ANY]: [S.wE] },
        handler() {}
    },
    [A.zMe.VOICE_CHANNEL_SELECT]: {
        scope: r.x.RPC,
        handler() {}
    },
    [A.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [S.Gp.ALL]: [r.x.RPC, r.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [A.zMe.RELATIONSHIP_UPDATE]: {
        scope: r.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [A.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [S.Gp.ANY]: [S.lH, r.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: g.default.getCurrentUser() };
            return null == i.currentUser || (null != t && (0, a.Z)(i, t)) || n((0, T.Z)(i.currentUser)), i;
        }
    },
    [A.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [S.Gp.ALL]: [r.x.IDENTIFY, r.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    l = { currentGuildMember: u.ZP.getSelfMember(t) };
                return null == l.currentGuildMember || (null != n && (0, a.Z)(l, n)) || i((0, v.Z)(l.currentGuildMember)), l;
            };
        }
    },
    [A.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [S.Gp.ANY]: [S.lH, S.wE]
        },
        handler() {}
    },
    [A.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [S.Gp.ANY]: [S.lH, S.wE]
        },
        handler() {}
    },
    [A.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [S.Gp.ALL]: [S.lH, r.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t, n;
            let { prevState: i, dispatch: r } = e,
                a = c.Z.getStreamerActiveStreamMetadata(),
                d = (null == a ? void 0 : a.pid) != null ? o.ZP.getGameForPID(a.pid) : null,
                u = (null == d ? void 0 : d.id) != null ? s.Z.getApplication(d.id) : null,
                h = null != u ? (0, N.Z)(u) : null,
                m = null == a ? void 0 : a.sourceName,
                p = {
                    active: null != a,
                    pid: null !== (t = null == a ? void 0 : a.pid) && void 0 !== t ? t : null,
                    application: (n = null != h) ? { name: m } : null
                };
            return l().isEqual(p, i) || r(p), p;
        }
    },
    [A.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [S.Gp.ALL]: [S.lH, r.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: m.Z.isVideoEnabled() };
            return l().isEqual(i, t) || n(i), i;
        }
    }
};
