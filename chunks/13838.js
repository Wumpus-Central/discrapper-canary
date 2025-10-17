n.d(t, { Z: () => w }), n(388685), n(997841);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(149765),
    o = n(902704),
    s = n(622822),
    c = n(812206),
    u = n(594190),
    d = n(601964),
    p = n(199902),
    f = n(592125),
    h = n(271383),
    g = n(430824),
    m = n(131951),
    b = n(19780),
    _ = n(594174),
    E = n(979651),
    O = n(996106),
    v = n(914946),
    y = n(238679),
    I = n(452426),
    C = n(295424),
    S = n(222263),
    N = n(863141),
    T = n(186901),
    P = n(981631);
let j = (e) => (0, I.Z)(e).required().keys({ channel_id: e.string().required() });
function x(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        r = f.Z.getChannel(t);
    if (null == r || !(0, v.zM)(r, n.application.id, n.authorization.scopes))
        throw new O.Z({ errorCode: P.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
    if ((0, s.ft)(r)) throw new O.Z({ errorCode: P.lTL.INVALID_CHANNEL }, "Invalid nsfw channel id: ".concat(r.id));
}
let A = (e) => (0, I.Z)(e).keys({ channel_id: e.string().allow(null) });
function Z(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == f.Z.getChannel(t))
        throw new O.Z({ errorCode: P.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
}
let w = {
    [P.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, I.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == g.Z.getGuild(t))
                throw new O.Z({ errorCode: P.lTL.INVALID_GUILD }, "Invalid guild id: ".concat(t));
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    a = g.Z.getGuild(t);
                if (null == a) return;
                let o = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null != (n = (0, d.EB)(a, 128)) ? n : null,
                    },
                    online: 0,
                };
                return i().isEqual(r, o) || l(o), o;
            };
        },
    },
    [P.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        validation: (e) => (0, I.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.Z.getChannel(t))
                throw new O.Z({ errorCode: P.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(E.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(o, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, v.aE)(a, l.id, e))),
                    o
                );
            };
        },
    },
    [P.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        validation: (e) => (0, I.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.Z.getChannel(t))
                throw new O.Z({ errorCode: P.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(E.Z.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, o, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, v.aE)(a, l.id, e))),
                    o
                );
            };
        },
    },
    [P.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        validation: (e) => (0, I.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.Z.getChannel(t))
                throw new O.Z({ errorCode: P.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    o = Object.values(E.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, v.aE)(a, l.id, e));
                return (
                    i()
                        .differenceWith(o, n, i().isEqual)
                        .forEach((e) => r(e)),
                    o
                );
            };
        },
    },
    [P.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, v.zy)(b.Z.getState()),
                    hostname: b.Z.getHostname(),
                    pings: b.Z.getPings(),
                    average_ping: b.Z.getAveragePing(),
                    last_ping: b.Z.getLastPing(),
                };
            return i().isEqual(r, t) || n(r), r;
        },
    },
    [P.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: j,
        handler: x,
    },
    [P.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: j,
        handler: x,
    },
    [P.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: j,
        handler: x,
    },
    [P.zMe.SPEAKING_START]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, T.lH],
        },
        validation: A,
        handler: Z,
    },
    [P.zMe.SPEAKING_STOP]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, T.lH],
        },
        validation: A,
        handler: Z,
    },
    [P.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {},
    },
    [P.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {},
    },
    [P.zMe.GAME_JOIN]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH],
        },
        handler() {},
    },
    [P.zMe.GAME_SPECTATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH],
        },
        handler() {},
    },
    [P.zMe.ACTIVITY_JOIN]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.wE, T.lH],
        },
        handler() {},
    },
    [P.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH],
        },
        handler() {},
    },
    [P.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.wE, T.lH],
        },
        handler() {},
    },
    [P.zMe.ACTIVITY_INVITE]: {
        scope: {
            [T.Gp.ANY]: [l.x.RPC, T.lH],
        },
        handler() {},
    },
    [P.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [P.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [P.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: y.gQ,
    [P.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [T.Gp.ANY]: [T.wE] },
        handler() {},
    },
    [P.zMe.ORIENTATION_UPDATE]: {
        scope: { [T.Gp.ANY]: [T.wE] },
        handler() {},
    },
    [P.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {},
    },
    [P.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [T.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ],
        },
        handler() {},
    },
    [P.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler(e) {
            var t;
            let { socket: n } = e;
            if (a.e$(a.vB(null != (t = n.application.flags) ? t : 0), a.vB(P.udG.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new O.Z({ errorCode: P.lTL.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [P.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, l.x.IDENTIFY],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: _.default.getCurrentUser() };
            return null == r.currentUser || (null != t && (0, o.Z)(r, t)) || n((0, N.Z)(r.currentUser)), r;
        },
    },
    [P.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ],
        },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: h.ZP.getSelfMember(t) };
                return (
                    null == i.currentGuildMember || (null != n && (0, o.Z)(i, n)) || r((0, S.Z)(i.currentGuildMember)),
                    i
                );
            };
        },
    },
    [P.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, T.wE],
        },
        handler() {},
    },
    [P.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [T.Gp.ANY]: [T.lH, T.wE],
        },
        handler() {},
    },
    [P.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [T.lH, l.x.RPC_SCREENSHARE_READ],
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = p.Z.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? u.ZP.getGameForPID(l.pid) : null,
                o = (null == a ? void 0 : a.id) != null ? c.Z.getApplication(a.id) : null,
                s = null != o ? (0, C.Z)(o) : null,
                d = null == l ? void 0 : l.sourceName,
                f = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application: null != s ? { name: d } : null,
                };
            return i().isEqual(f, n) || r(f), f;
        },
    },
    [P.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [T.Gp.ALL]: [T.lH, l.x.RPC_VIDEO_READ],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: m.Z.isVideoEnabled() };
            return i().isEqual(r, t) || n(r), r;
        },
    },
    [P.zMe.AUTHORIZE_REQUEST]: {
        scope: void 0,
        handler() {},
    },
};
