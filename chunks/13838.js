n.d(t, { Z: () => w }), n(388685), n(997841);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(149765),
    s = n(902704),
    o = n(622822),
    c = n(812206),
    u = n(594190),
    d = n(601964),
    p = n(199902),
    f = n(592125),
    m = n(271383),
    h = n(430824),
    g = n(131951),
    _ = n(19780),
    b = n(594174),
    E = n(979651),
    O = n(996106),
    I = n(914946),
    y = n(238679),
    v = n(452426),
    C = n(295424),
    S = n(222263),
    T = n(863141),
    N = n(186901),
    j = n(981631);
let P = (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() });
function x(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        r = f.Z.getChannel(t);
    if (null == r || !(0, I.zM)(r, n.application.id, n.authorization.scopes))
        throw new O.Z({ errorCode: j.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
    if ((0, o.ft)(r)) throw new O.Z({ errorCode: j.lTL.INVALID_CHANNEL }, "Invalid nsfw channel id: ".concat(r.id));
}
let A = (e) => (0, v.Z)(e).keys({ channel_id: e.string().allow(null) });
function Z(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == f.Z.getChannel(t))
        throw new O.Z({ errorCode: j.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
}
let w = {
    [j.zMe.GUILD_STATUS]: {
        scope: l.x.RPC,
        validation: (e) => (0, v.Z)(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == h.Z.getGuild(t))
                throw new O.Z({ errorCode: j.lTL.INVALID_GUILD }, "Invalid guild id: ".concat(t));
            return (e) => {
                var n;
                let { prevState: r, dispatch: l } = e,
                    a = h.Z.getGuild(t);
                if (null == a) return;
                let s = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: null != (n = (0, d.EB)(a, 128)) ? n : null,
                    },
                    online: 0,
                };
                return i().isEqual(r, s) || l(s), s;
            };
        },
    },
    [j.zMe.VOICE_STATE_CREATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        validation: (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.Z.getChannel(t))
                throw new O.Z({ errorCode: j.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(E.Z.getVoiceStatesForChannel(l.id));
                return (
                    n &&
                        i()
                            .differenceBy(s, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => r((0, I.aE)(a, l.id, e))),
                    s
                );
            };
        },
    },
    [j.zMe.VOICE_STATE_DELETE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        validation: (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.Z.getChannel(t))
                throw new O.Z({ errorCode: j.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(E.Z.getVoiceStatesForChannel(l.id));
                return (
                    i()
                        .differenceBy(n, s, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => r((0, I.aE)(a, l.id, e))),
                    s
                );
            };
        },
    },
    [j.zMe.VOICE_STATE_UPDATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        validation: (e) => (0, v.Z)(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == f.Z.getChannel(t))
                throw new O.Z({ errorCode: j.lTL.INVALID_CHANNEL }, "Invalid channel id: ".concat(t));
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    l = f.Z.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(E.Z.getVoiceStatesForChannel(l.id)).map((e) => (0, I.aE)(a, l.id, e));
                return (
                    i()
                        .differenceWith(s, n, i().isEqual)
                        .forEach((e) => r(e)),
                    s
                );
            };
        },
    },
    [j.zMe.VOICE_CONNECTION_STATUS]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = {
                    state: (0, I.zy)(_.Z.getState()),
                    hostname: _.Z.getHostname(),
                    pings: _.Z.getPings(),
                    average_ping: _.Z.getAveragePing(),
                    last_ping: _.Z.getLastPing(),
                };
            return i().isEqual(r, t) || n(r), r;
        },
    },
    [j.zMe.MESSAGE_CREATE]: {
        scope: l.x.RPC,
        validation: P,
        handler: x,
    },
    [j.zMe.MESSAGE_UPDATE]: {
        scope: l.x.RPC,
        validation: P,
        handler: x,
    },
    [j.zMe.MESSAGE_DELETE]: {
        scope: l.x.RPC,
        validation: P,
        handler: x,
    },
    [j.zMe.SPEAKING_START]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, N.lH],
        },
        validation: A,
        handler: Z,
    },
    [j.zMe.SPEAKING_STOP]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, N.lH],
        },
        validation: A,
        handler: Z,
    },
    [j.zMe.GUILD_CREATE]: {
        scope: l.x.RPC,
        handler() {},
    },
    [j.zMe.CHANNEL_CREATE]: {
        scope: l.x.RPC,
        handler() {},
    },
    [j.zMe.GAME_JOIN]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH],
        },
        handler() {},
    },
    [j.zMe.GAME_SPECTATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH],
        },
        handler() {},
    },
    [j.zMe.ACTIVITY_JOIN]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.wE, N.lH],
        },
        handler() {},
    },
    [j.zMe.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH],
        },
        handler() {},
    },
    [j.zMe.ACTIVITY_SPECTATE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.wE, N.lH],
        },
        handler() {},
    },
    [j.zMe.ACTIVITY_INVITE]: {
        scope: {
            [N.Gp.ANY]: [l.x.RPC, N.lH],
        },
        handler() {},
    },
    [j.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [j.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {},
    },
    [j.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: y.gQ,
    [j.zMe.THERMAL_STATE_UPDATE]: {
        scope: { [N.Gp.ANY]: [N.wE] },
        handler() {},
    },
    [j.zMe.ORIENTATION_UPDATE]: {
        scope: { [N.Gp.ANY]: [N.wE] },
        handler() {},
    },
    [j.zMe.VOICE_CHANNEL_SELECT]: {
        scope: l.x.RPC,
        handler() {},
    },
    [j.zMe.NOTIFICATION_CREATE]: {
        scope: {
            [N.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ],
        },
        handler() {},
    },
    [j.zMe.RELATIONSHIP_UPDATE]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler(e) {
            var t;
            let { socket: n } = e;
            if (a.e$(a.vB(null != (t = n.application.flags) ? t : 0), a.vB(j.udG.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new O.Z({ errorCode: j.lTL.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [j.zMe.CURRENT_USER_UPDATE]: {
        scope: {
            [N.Gp.ANY]: [N.lH, l.x.IDENTIFY],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { currentUser: b.default.getCurrentUser() };
            return null == r.currentUser || (null != t && (0, s.Z)(r, t)) || n((0, T.Z)(r.currentUser)), r;
        },
    },
    [j.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [N.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ],
        },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: r } = e,
                    i = { currentGuildMember: m.ZP.getSelfMember(t) };
                return (
                    null == i.currentGuildMember || (null != n && (0, s.Z)(i, n)) || r((0, S.Z)(i.currentGuildMember)),
                    i
                );
            };
        },
    },
    [j.zMe.ENTITLEMENT_CREATE]: {
        scope: {
            [N.Gp.ANY]: [N.lH, N.wE],
        },
        handler() {},
    },
    [j.zMe.ENTITLEMENT_DELETE]: {
        scope: {
            [N.Gp.ANY]: [N.lH, N.wE],
        },
        handler() {},
    },
    [j.zMe.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [N.Gp.ALL]: [N.lH, l.x.RPC_SCREENSHARE_READ],
        },
        handler: () => (e) => {
            var t;
            let { prevState: n, dispatch: r } = e,
                l = p.Z.getStreamerActiveStreamMetadata(),
                a = (null == l ? void 0 : l.pid) != null ? u.ZP.getGameForPID(l.pid) : null,
                s = (null == a ? void 0 : a.id) != null ? c.Z.getApplication(a.id) : null,
                o = null != s ? (0, C.Z)(s) : null,
                d = null == l ? void 0 : l.sourceName,
                f = {
                    active: null != l,
                    pid: null != (t = null == l ? void 0 : l.pid) ? t : null,
                    application: null != o ? { name: d } : null,
                };
            return i().isEqual(f, n) || r(f), f;
        },
    },
    [j.zMe.VIDEO_STATE_UPDATE]: {
        scope: {
            [N.Gp.ALL]: [N.lH, l.x.RPC_VIDEO_READ],
        },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                r = { active: g.Z.isVideoEnabled() };
            return i().isEqual(r, t) || n(r), r;
        },
    },
    [j.zMe.AUTHORIZE_REQUEST]: {
        scope: void 0,
        handler() {},
    },
};
