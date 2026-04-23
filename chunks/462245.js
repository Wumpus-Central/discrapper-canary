n.d(t, { A: () => T });
var i = n(735438),
    r = n.n(i),
    a = n(179771),
    l = n(846293),
    s = n(956793),
    o = n(976860),
    d = n(95701),
    u = n(734057),
    c = n(71393),
    A = n(576705),
    h = n(309010),
    _ = n(977997),
    E = n(147036),
    p = n(636401),
    m = n(90924),
    g = n(629471),
    I = n(569475),
    C = n(613057),
    f = n(652215);
let T = {
    [f.e$_.GET_CHANNEL]: {
        scope: { [C.sm.ANY]: [a.F.RPC, a.F.GUILDS, a.F.GUILDS_CHANNELS_READ] },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n,
                } = e,
                i = u.A.getChannel(t);
            if (null == i) throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(a.F.RPC) && !e.includes(a.F.DM_CHANNELS_READ))
                    throw new p.A({ errorCode: f.Lw6.INVALID_PERMISSIONS }, "Invalid scope");
            }
            return (0, m.SN)(i, (0, m.B_)(i, n.application.id, n.authorization.scopes));
        },
    },
    [f.e$_.GET_CHANNELS]: {
        scope: a.F.RPC,
        handler(e) {
            let {
                    args: { guild_id: t },
                } = e,
                n = r().values(u.A.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = c.A.getGuild(t);
                if (null == e) throw new p.A({ errorCode: f.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => A.A.can(f.xBc.VIEW_CHANNEL, e))
                    .map((e) => {
                        let { id: t, name: n, type: i } = e;
                        return { id: t, name: n, type: i };
                    }),
            };
        },
    },
    [f.e$_.GET_CHANNEL_PERMISSIONS]: {
        scope: { [C.sm.ANY]: [a.F.GUILDS_MEMBERS_READ, a.F.GUILDS_CHANNELS_READ] },
        handler(e) {
            let t = (0, I.A)();
            if (null == t) throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, "Invalid channel");
            return { permissions: A.A.computePermissions(t) };
        },
    },
    [f.e$_.SELECT_VOICE_CHANNEL]: {
        scope: a.F.RPC,
        validation: (e) =>
            (0, g.A)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60),
                    force: e.boolean(),
                    navigate: e.boolean(),
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: i, timeout: r = 0, force: a = !1, navigate: l = !1 },
            } = e;
            if (!i) return s.default.selectVoiceChannel(null), null;
            let g = h.A.getVoiceChannelId();
            if (null != g && g !== i && !1 === a)
                throw new p.A(
                    { errorCode: f.Lw6.SELECT_VOICE_FORCE_REQUIRED },
                    "User is already joined to a voice channel.",
                );
            return t
                .storeWait(n, () => u.A.getChannel(i), r)
                .catch(() => {
                    throw new p.A(
                        { errorCode: f.Lw6.SELECT_CHANNEL_TIMED_OUT },
                        "Request to select voice channel timed out.",
                    );
                })
                .then((e) => {
                    if (null == e) throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                    if (!(0, d.gV)(e.type))
                        throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, "Channel is not a voice channel");
                    return Promise.all([
                        Promise.resolve(e),
                        (0, m.SN)(e, (0, m.B_)(e, n.application.id, n.authorization.scopes)),
                    ]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, E.Pd)(t, _.A, c.A))
                            throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, "Channel is full");
                        if (!A.A.can(f.xBc.CONNECT, t))
                            throw new p.A(
                                { errorCode: f.Lw6.INVALID_PERMISSIONS },
                                "Connect permission required to join channel",
                            );
                    }
                    return s.default.selectVoiceChannel(t.id), l && (0, o.bG)(f.BVt.CHANNEL(t.guild_id, t.id)), n;
                });
        },
    },
    [f.e$_.GET_SELECTED_VOICE_CHANNEL]: {
        scope: { [C.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
        handler(e) {
            let { socket: t } = e,
                n = h.A.getVoiceChannelId(),
                i = null != n ? u.A.getChannel(n) : null;
            return null != i ? (0, m.SN)(i, (0, m.B_)(i, t.application.id, t.authorization.scopes)) : null;
        },
    },
    [f.e$_.SELECT_TEXT_CHANNEL]: {
        scope: a.F.RPC,
        validation: (e) =>
            (0, g.A)(e)
                .required()
                .keys({ channel_id: e.string().allow(null), timeout: e.number().min(0).max(60) }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: i, timeout: r = 0 },
            } = e;
            return i
                ? t
                      .storeWait(n, () => u.A.getChannel(i), r)
                      .catch(() => {
                          throw new p.A(
                              { errorCode: f.Lw6.SELECT_CHANNEL_TIMED_OUT },
                              "Request to select text channel timed out.",
                          );
                      })
                      .then((e) => {
                          if (null == e)
                              throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                          if (!(0, d.pQ)(e.type))
                              throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, "Channel is not a text channel");
                          return Promise.all([
                              Promise.resolve(e),
                              (0, m.SN)(e, (0, m.B_)(e, n.application.id, n.authorization.scopes)),
                          ]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !A.A.can(f.xBc.VIEW_CHANNEL, t))
                              throw new p.A({ errorCode: f.Lw6.INVALID_CHANNEL }, "No permission to see channel");
                          return (
                              n.guild_id
                                  ? (0, o.bG)(f.BVt.CHANNEL(n.guild_id, t.id))
                                  : s.default.selectPrivateChannel(t.id),
                              n
                          );
                      })
                : ((0, o.pX)(f.BVt.ME), null);
        },
    },
    [f.e$_.CREATE_CHANNEL_INVITE]: {
        scope: a.F.RPC,
        handler(e) {
            let {
                args: { channel_id: t, ...n },
            } = e;
            return l.Ay.createInvite(t, n, "RPC").catch(() => {
                throw new p.A(
                    { errorCode: f.Lw6.INVALID_PERMISSIONS },
                    `Unable to generate an invite for ${t}. Does this user have permissions?`,
                );
            });
        },
    },
};
