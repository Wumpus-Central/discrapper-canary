n(47120);
var i = n(392711),
    r = n.n(i),
    l = n(243814),
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
    f = n(979651),
    _ = n(996106),
    E = n(914946),
    I = n(238679),
    C = n(452426),
    N = n(295424),
    v = n(277272),
    S = n(863141),
    T = n(186901),
    A = n(981631);
let b = (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() });
function Z(e) {
    var t;
    let {
            args: { channel_id: n },
            socket: i
        } = e,
        r = d.Z.getChannel(n);
    if (null == r || !(0, E.zM)(r, i.application.id, i.authorization.scopes)) throw new _.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
    if (r.isNSFW() && (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new _.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(r.id));
}
let x = (e) => (0, C.Z)(e).keys({ channel_id: e.string().allow(null) });
function L(e) {
    let {
        args: { channel_id: t }
    } = e;
    if (null != t && null == d.Z.getChannel(t)) throw new _.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let P = {
    [A.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, C.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            if (null == h.Z.getGuild(t)) throw new _.Z({ errorCode: A.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
            return (e) => {
                var n;
                let { prevState: i, dispatch: l } = e,
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
                return !r().isEqual(i, s) && l(s), s;
            };
        }
    },
    [A.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    l = d.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(f.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        r()
                            .differenceBy(s, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, E.aE)(a, l.id, e))),
                    s
                );
            };
        }
    },
    [A.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    l = d.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(f.Z.getVoiceStatesForChannel(l.id));
                return (
                    r()
                        .differenceBy(n, s, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, E.aE)(a, l.id, e))),
                    s
                );
            };
        }
    },
    [A.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        validation: (e) => (0, C.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t }
            } = e;
            if (null == d.Z.getChannel(t)) throw new _.Z({ errorCode: A.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    l = d.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(f.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, E.aE)(a, l.id, e));
                return (
                    r()
                        .differenceWith(s, n, r().isEqual)
                        .forEach((e) => i(e)),
                    s
                );
            };
        }
    },
    [A.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
            return !r().isEqual(i, t) && n(i), i;
        }
    },
    [A.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: b,
        handler: Z
    },
    [A.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: b,
        handler: Z
    },
    [A.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: b,
        handler: Z
    },
    [A.zMe.SPEAKING_START]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, T.lH]
        },
        validation: x,
        handler: L
    },
    [A.zMe.SPEAKING_STOP]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, T.lH]
        },
        validation: x,
        handler: L
    },
    [A.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [A.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {}
    },
    [A.zMe.GAME_JOIN]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH]
        },
        handler() {}
    },
    [A.zMe.GAME_SPECTATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_JOIN]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_INVITE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.wE, T.lH]
        },
        handler() {}
    },
    [A.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: I.gQ,
    [A.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [T.Gp.ANY]: [T.wE] },
        handler() {}
    },
    [A.zMe.ORIENTATION_UPDATE]: {
        scope: { [T.Gp.ANY]: [T.wE] },
        handler() {}
    },
    [A.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {}
    },
    [A.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [T.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [A.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {}
    },
    [A.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, l.x.IDENTIFY]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: g.default.getCurrentUser() };
            return null != i.currentUser && (null == t || !(0, a.Z)(i, t)) && n((0, S.Z)(i.currentUser)), i;
        }
    },
    [A.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: { guild_id: t }
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: u.ZP.getSelfMember(t) };
                return null != r.currentGuildMember && (null == n || !(0, a.Z)(r, n)) && i((0, v.Z)(r.currentGuildMember)), r;
            };
        }
    },
    [A.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, T.wE]
        },
        handler() {}
    },
    [A.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, T.wE]
        },
        handler() {}
    },
    [A.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [T.lH, l.x.RPC_SCREENSHARE_READ]
        },
        handler: () => (e) => {
            var t, n;
            let { prevState: i, dispatch: l } = e,
                a = c.Z.getStreamerActiveStreamMetadata(),
                d = (null == a ? void 0 : a.pid) != null ? o.ZP.getGameForPID(a.pid) : null,
                u = (null == d ? void 0 : d.id) != null ? s.Z.getApplication(d.id) : null,
                h = null != u ? (0, N.Z)(u) : null,
                m = null == a ? void 0 : a.sourceName,
                p = {
                    active: null != a,
                    pid: null !== (t = null == a ? void 0 : a.pid) && void 0 !== t ? t : null,
                    application: ((n = null != h), n) ? { name: m } : null
                };
            return !r().isEqual(p, i) && l(p), p;
        }
    },
    [A.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [T.lH, l.x.RPC_VIDEO_READ]
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: m.Z.isVideoEnabled() };
            return !r().isEqual(i, t) && n(i), i;
        }
    }
};
t.Z = P;
