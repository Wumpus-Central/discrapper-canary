n.d(t, { Z: () => A }), n(388685);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(902704),
    o = n(812206),
    s = n(594190),
    c = n(199902),
    u = n(592125),
    d = n(271383),
    p = n(430824),
    h = n(131951),
    f = n(19780),
    g = n(594174),
    m = n(979651),
    b = n(996106),
    _ = n(914946),
    E = n(238679),
    O = n(452426),
    y = n(295424),
    I = n(222263),
    v = n(863141),
    C = n(186901),
    S = n(981631);
let N = (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() });
function T(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: r
        } = e,
        i = u.Z.getChannel(n);
    if (null == i || !(0, _.zM)(i, r.application.id, r.authorization.scopes)) throw new b.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (i.isNSFW() && (null == (t = g.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) !== !0) throw new b.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(i.id));
}
let P = (e) => (0, O.Z)(e).keys({ channel_id: e.string().allow(null) });
function j(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == u.Z.getChannel(t)) throw new b.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let A = {
    [S.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, O.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == p.Z.getGuild(t)) throw new b.Z({ errorCode: S.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    a = p.Z.getGuild(t);
                if (null == a) return;
                let o = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null != (n = a.getIconURL(128)) ? n : null
                    },
                    online: 0
                };
                return i().isEqual(r, o) || l(o), o;
            };
        }
    },
    [S.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == u.Z.getChannel(t)) throw new b.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = u.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(m.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(o, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, _.aE)(a, l.id, e))),
                    o
                );
            };
        }
    },
    [S.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == u.Z.getChannel(t)) throw new b.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = u.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(m.Z.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, o, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, _.aE)(a, l.id, e))),
                    o
                );
            };
        }
    },
    [S.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, O.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == u.Z.getChannel(t)) throw new b.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = u.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(m.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, _.aE)(a, l.id, e));
                return (
                    i()
                        .differenceWith(o, n, i().isEqual)
                        .forEach((e) => r(e)),
                    o
                );
            };
        }
    },
    [S.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, _.zy)(f.Z.getState()),
                    hostname: f.Z.getHostname(),
                    pings: f.Z.getPings(),
                    average_ping: f.Z.getAveragePing(),
                    last_ping: f.Z.getLastPing()
                };
            return i().isEqual(r, t) || n(r), r;
        }
    },
    [S.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: N,
        handler: T
    },
    [S.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: N,
        handler: T
    },
    [S.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: N,
        handler: T
    },
    [S.zMe.SPEAKING_START]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, C.lH]
        },
        validation: P,
        handler: j
    },
    [S.zMe.SPEAKING_STOP]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, C.lH]
        },
        validation: P,
        handler: j
    },
    [S.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [S.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [S.zMe.GAME_JOIN]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.lH]
        },
        handler() {}
    },
    [S.zMe.GAME_SPECTATE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_JOIN]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_INVITE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
        },
        handler() {}
    },
    [S.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: E.gQ,
    [S.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [C.Gp.ANY]: [C.wE] },
        handler() {}
    },
    [S.zMe.ORIENTATION_UPDATE]: {
        scope: { [C.Gp.ANY]: [C.wE] },
        handler() {}
    },
    [S.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {}
    },
    [S.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [C.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [S.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [S.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [C.Gp.ANY]: [C.lH, l.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: g.default.getCurrentUser() };
            return null == r.currentUser || (null != t && (0, a.Z)(r, t)) || n((0, v.Z)(r.currentUser)), r;
        }
    },
    [S.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [C.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: d.ZP.getSelfMember(t) };
                return null == i.currentGuildMember || (null != n && (0, a.Z)(i, n)) || r((0, I.Z)(i.currentGuildMember)), i;
            };
        }
    },
    [S.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [C.Gp.ANY]: [C.lH, C.wE]
        },
        handler() {}
    },
    [S.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [C.Gp.ANY]: [C.lH, C.wE]
        },
        handler() {}
    },
    [S.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [C.Gp.ALL]: [C.lH, l.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = c.Z.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? s.ZP.getGameForPID(l.pid) : null,
                u = (null == a ? void 0 : a.id) != null ? o.Z.getApplication(a.id) : null,
                d = null != u ? (0, y.Z)(u) : null,
                p = null == l ? void 0 : l.sourceName,
                h = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application: null != d ? { name: p } : null
                };
            return i().isEqual(h, n) || r(h), h;
        }
    },
    [S.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [C.Gp.ALL]: [C.lH, l.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: h.Z.isVideoEnabled() };
            return i().isEqual(r, t) || n(r), r;
        }
    }
};
