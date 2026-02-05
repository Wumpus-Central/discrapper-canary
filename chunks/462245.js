n.d(t, { A: () => N });
var i = n(735438),
    r = n.n(i),
    a = n(179771),
    l = n(846293),
    s = n(956793),
    o = n(976860),
    d = n(95701),
    c = n(734057),
    u = n(71393),
    A = n(576705),
    h = n(309010),
    _ = n(977997),
    m = n(147036),
    p = n(636401),
    g = n(90924),
    E = n(629471),
    f = n(569475),
    I = n(613057),
    C = n(652215);
let N = {
    [C.e$_.GET_CHANNEL]: {
        scope: { [I.sm.ANY]: [a.F.RPC, a.F.GUILDS, a.F.GUILDS_CHANNELS_READ] },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n,
                } = e,
                i = c.A.getChannel(t);
            if (null == i) throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(a.F.RPC) && !e.includes(a.F.DM_CHANNELS_READ))
                    throw new p.A({ errorCode: C.Lw6.INVALID_PERMISSIONS }, "Invalid scope");
            }
            return (0, g.SN)(i, (0, g.B_)(i, n.application.id, n.authorization.scopes));
        },
    },
    [C.e$_.GET_CHANNELS]: {
        scope: a.F.RPC,
        handler(e) {
            let {
                    args: { guild_id: t },
                } = e,
                n = r().values(c.A.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = u.A.getGuild(t);
                if (null == e) throw new p.A({ errorCode: C.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => A.A.can(C.xBc.VIEW_CHANNEL, e))
                    .map((e) => {
                        let { id: t, name: n, type: i } = e;
                        return { id: t, name: n, type: i };
                    }),
            };
        },
    },
    [C.e$_.GET_CHANNEL_PERMISSIONS]: {
        scope: { [I.sm.ANY]: [a.F.GUILDS_MEMBERS_READ, a.F.GUILDS_CHANNELS_READ] },
        handler(e) {
            let t = (0, f.A)();
            if (null == t) throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, "Invalid channel");
            return { permissions: A.A.computePermissions(t) };
        },
    },
    [C.e$_.SELECT_VOICE_CHANNEL]: {
        scope: a.F.RPC,
        validation: (e) =>
            (0, E.A)(e)
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
            let E = h.A.getVoiceChannelId();
            if (null != E && E !== i && !1 === a)
                throw new p.A(
                    { errorCode: C.Lw6.SELECT_VOICE_FORCE_REQUIRED },
                    "User is already joined to a voice channel.",
                );
            return t
                .storeWait(n, () => c.A.getChannel(i), r)
                .catch(() => {
                    throw new p.A(
                        { errorCode: C.Lw6.SELECT_CHANNEL_TIMED_OUT },
                        "Request to select voice channel timed out.",
                    );
                })
                .then((e) => {
                    if (null == e) throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                    if (!(0, d.gV)(e.type))
                        throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, "Channel is not a voice channel");
                    return Promise.all([
                        Promise.resolve(e),
                        (0, g.SN)(e, (0, g.B_)(e, n.application.id, n.authorization.scopes)),
                    ]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, m.Pd)(t, _.A, u.A))
                            throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, "Channel is full");
                        if (!A.A.can(C.xBc.CONNECT, t))
                            throw new p.A(
                                { errorCode: C.Lw6.INVALID_PERMISSIONS },
                                "Connect permission required to join channel",
                            );
                    }
                    return s.default.selectVoiceChannel(t.id), l && (0, o.bG)(C.BVt.CHANNEL(t.guild_id, t.id)), n;
                });
        },
    },
    [C.e$_.GET_SELECTED_VOICE_CHANNEL]: {
        scope: { [I.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
        handler(e) {
            let { socket: t } = e,
                n = h.A.getVoiceChannelId(),
                i = null != n ? c.A.getChannel(n) : null;
            return null != i ? (0, g.SN)(i, (0, g.B_)(i, t.application.id, t.authorization.scopes)) : null;
        },
    },
    [C.e$_.SELECT_TEXT_CHANNEL]: {
        scope: a.F.RPC,
        validation: (e) =>
            (0, E.A)(e)
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
                      .storeWait(n, () => c.A.getChannel(i), r)
                      .catch(() => {
                          throw new p.A(
                              { errorCode: C.Lw6.SELECT_CHANNEL_TIMED_OUT },
                              "Request to select text channel timed out.",
                          );
                      })
                      .then((e) => {
                          if (null == e)
                              throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                          if (!(0, d.pQ)(e.type))
                              throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, "Channel is not a text channel");
                          return Promise.all([
                              Promise.resolve(e),
                              (0, g.SN)(e, (0, g.B_)(e, n.application.id, n.authorization.scopes)),
                          ]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !A.A.can(C.xBc.VIEW_CHANNEL, t))
                              throw new p.A({ errorCode: C.Lw6.INVALID_CHANNEL }, "No permission to see channel");
                          return (
                              n.guild_id
                                  ? (0, o.bG)(C.BVt.CHANNEL(n.guild_id, t.id))
                                  : s.default.selectPrivateChannel(t.id),
                              n
                          );
                      })
                : ((0, o.pX)(C.BVt.ME), null);
        },
    },
    [C.e$_.CREATE_CHANNEL_INVITE]: {
        scope: a.F.RPC,
        handler(e) {
            let {
                args: { channel_id: t, ...n },
            } = e;
            return l.Ay.createInvite(t, n, "RPC").catch(() => {
                throw new p.A(
                    { errorCode: C.Lw6.INVALID_PERMISSIONS },
                    `Unable to generate an invite for ${t}. Does this user have permissions?`,
                );
            });
        },
    },
};
