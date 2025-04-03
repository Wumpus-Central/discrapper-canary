n.d(t, { Z: () => A }), n(47120);
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
    N = n(295424),
    y = n(222263),
    I = n(863141),
    v = n(186901),
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
    if (i.isNSFW() && (null == (t = g.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) !== !0) throw new b.Z({ errorCode: C.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(i.id));
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
    [C.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
    [C.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
    [C.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
    [C.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, _.zy)(f.ZP.getState()),
                    hostname: f.ZP.getHostname(),
                    pings: f.ZP.getPings(),
                    average_ping: f.ZP.getAveragePing(),
                    last_ping: f.ZP.getLastPing()
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
            [v.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, v.lH]
        },
        validation: P,
        handler: j
    },
    [C.zMe.SPEAKING_STOP]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, v.lH]
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
            [v.Gp.ANY]: [l.x.RPC, v.lH]
        },
        handler() {}
    },
    [C.zMe.GAME_SPECTATE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_JOIN]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.wE, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.wE, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_INVITE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.wE, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [v.Gp.ANY]: [l.x.RPC, v.wE, v.lH]
        },
        handler() {}
    },
    [C.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: E.gQ,
    [C.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [v.Gp.ANY]: [v.wE] },
        handler() {}
    },
    [C.zMe.ORIENTATION_UPDATE]: {
        scope: { [v.Gp.ANY]: [v.wE] },
        handler() {}
    },
    [C.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {}
    },
    [C.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [v.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [C.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [C.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [v.Gp.ANY]: [v.lH, l.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: g.default.getCurrentUser() };
            return null == r.currentUser || (null != t && (0, a.Z)(r, t)) || n((0, I.Z)(r.currentUser)), r;
        }
    },
    [C.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [v.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: d.ZP.getSelfMember(t) };
                return null == i.currentGuildMember || (null != n && (0, a.Z)(i, n)) || r((0, y.Z)(i.currentGuildMember)), i;
            };
        }
    },
    [C.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [v.Gp.ANY]: [v.lH, v.wE]
        },
        handler() {}
    },
    [C.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [v.Gp.ANY]: [v.lH, v.wE]
        },
        handler() {}
    },
    [C.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [v.Gp.ALL]: [v.lH, l.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = c.Z.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? s.ZP.getGameForPID(l.pid) : null,
                u = (null == a ? void 0 : a.id) != null ? o.Z.getApplication(a.id) : null,
                d = null != u ? (0, N.Z)(u) : null,
                p = null == l ? void 0 : l.sourceName,
                h = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application: null != d ? { name: p } : null
                };
            return i().isEqual(h, n) || r(h), h;
        }
    },
    [C.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [v.Gp.ALL]: [v.lH, l.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: h.Z.isVideoEnabled() };
            return i().isEqual(r, t) || n(r), r;
        }
    }
};
