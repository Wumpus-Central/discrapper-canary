n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    l = n(179771),
    a = n(846293),
    s = n(956793),
    o = n(976860),
    c = n(95701),
    u = n(734057),
    d = n(71393),
    p = n(576705),
    f = n(309010),
    h = n(977997),
    A = n(147036),
    g = n(636401),
    m = n(90924),
    b = n(629471),
    _ = n(569475),
    E = n(613057),
    O = n(652215);
let y = {
    [O.e$_.GET_CHANNEL]: {
        scope: {
            [E.sm.ANY]: [l.F.RPC, l.F.GUILDS, l.F.GUILDS_CHANNELS_READ],
        },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n,
                } = e,
                r = u.A.getChannel(t);
            if (null == r)
                throw new g.A(
                    {
                        errorCode: O.Lw6.INVALID_CHANNEL,
                    },
                    "Invalid channel id: ".concat(t),
                );
            if (r.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(l.F.RPC) && !e.includes(l.F.DM_CHANNELS_READ))
                    throw new g.A(
                        {
                            errorCode: O.Lw6.INVALID_PERMISSIONS,
                        },
                        "Invalid scope",
                    );
            }
            return (0, m.SN)(r, (0, m.B_)(r, n.application.id, n.authorization.scopes));
        },
    },
    [O.e$_.GET_CHANNELS]: {
        scope: l.F.RPC,
        handler(e) {
            let {
                    args: { guild_id: t },
                } = e,
                n = i().values(u.A.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = d.A.getGuild(t);
                if (null == e)
                    throw new g.A(
                        {
                            errorCode: O.Lw6.INVALID_GUILD,
                        },
                        "Invalid guild id: ".concat(t),
                    );
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => p.A.can(O.xBc.VIEW_CHANNEL, e))
                    .map((e) => {
                        let { id: t, name: n, type: r } = e;
                        return {
                            id: t,
                            name: n,
                            type: r,
                        };
                    }),
            };
        },
    },
    [O.e$_.GET_CHANNEL_PERMISSIONS]: {
        scope: {
            [E.sm.ANY]: [l.F.GUILDS_MEMBERS_READ, l.F.GUILDS_CHANNELS_READ],
        },
        handler(e) {
            let t = (0, _.A)();
            if (null == t)
                throw new g.A(
                    {
                        errorCode: O.Lw6.INVALID_CHANNEL,
                    },
                    "Invalid channel",
                );
            return {
                permissions: p.A.computePermissions(t),
            };
        },
    },
    [O.e$_.SELECT_VOICE_CHANNEL]: {
        scope: l.F.RPC,
        validation: (e) =>
            (0, b.A)(e)
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
                args: { channel_id: r, timeout: i = 0, force: l = !1, navigate: a = !1 },
            } = e;
            if (!r) return s.default.selectVoiceChannel(null), null;
            let b = f.A.getVoiceChannelId();
            if (null != b && b !== r && !1 === l)
                throw new g.A(
                    {
                        errorCode: O.Lw6.SELECT_VOICE_FORCE_REQUIRED,
                    },
                    "User is already joined to a voice channel.",
                );
            return t
                .storeWait(n, () => u.A.getChannel(r), i)
                .catch(() => {
                    throw new g.A(
                        {
                            errorCode: O.Lw6.SELECT_CHANNEL_TIMED_OUT,
                        },
                        "Request to select voice channel timed out.",
                    );
                })
                .then((e) => {
                    if (null == e)
                        throw new g.A(
                            {
                                errorCode: O.Lw6.INVALID_CHANNEL,
                            },
                            "Invalid channel id: ".concat(r),
                        );
                    if (!(0, c.gV)(e.type))
                        throw new g.A(
                            {
                                errorCode: O.Lw6.INVALID_CHANNEL,
                            },
                            "Channel is not a voice channel",
                        );
                    return Promise.all([
                        Promise.resolve(e),
                        (0, m.SN)(e, (0, m.B_)(e, n.application.id, n.authorization.scopes)),
                    ]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, A.Pd)(t, h.A, d.A))
                            throw new g.A(
                                {
                                    errorCode: O.Lw6.INVALID_CHANNEL,
                                },
                                "Channel is full",
                            );
                        if (!p.A.can(O.xBc.CONNECT, t))
                            throw new g.A(
                                {
                                    errorCode: O.Lw6.INVALID_PERMISSIONS,
                                },
                                "Connect permission required to join channel",
                            );
                    }
                    return s.default.selectVoiceChannel(t.id), a && (0, o.bG)(O.BVt.CHANNEL(t.guild_id, t.id)), n;
                });
        },
    },
    [O.e$_.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [E.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ],
        },
        handler(e) {
            let { socket: t } = e,
                n = f.A.getVoiceChannelId(),
                r = null != n ? u.A.getChannel(n) : null;
            return null != r ? (0, m.SN)(r, (0, m.B_)(r, t.application.id, t.authorization.scopes)) : null;
        },
    },
    [O.e$_.SELECT_TEXT_CHANNEL]: {
        scope: l.F.RPC,
        validation: (e) =>
            (0, b.A)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60),
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: r, timeout: i = 0 },
            } = e;
            return r
                ? t
                      .storeWait(n, () => u.A.getChannel(r), i)
                      .catch(() => {
                          throw new g.A(
                              {
                                  errorCode: O.Lw6.SELECT_CHANNEL_TIMED_OUT,
                              },
                              "Request to select text channel timed out.",
                          );
                      })
                      .then((e) => {
                          if (null == e)
                              throw new g.A(
                                  {
                                      errorCode: O.Lw6.INVALID_CHANNEL,
                                  },
                                  "Invalid channel id: ".concat(r),
                              );
                          if (!(0, c.pQ)(e.type))
                              throw new g.A(
                                  {
                                      errorCode: O.Lw6.INVALID_CHANNEL,
                                  },
                                  "Channel is not a text channel",
                              );
                          return Promise.all([
                              Promise.resolve(e),
                              (0, m.SN)(e, (0, m.B_)(e, n.application.id, n.authorization.scopes)),
                          ]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !p.A.can(O.xBc.VIEW_CHANNEL, t))
                              throw new g.A(
                                  {
                                      errorCode: O.Lw6.INVALID_CHANNEL,
                                  },
                                  "No permission to see channel",
                              );
                          return (
                              n.guild_id
                                  ? (0, o.bG)(O.BVt.CHANNEL(n.guild_id, t.id))
                                  : s.default.selectPrivateChannel(t.id),
                              n
                          );
                      })
                : ((0, o.pX)(O.BVt.ME), null);
        },
    },
    [O.e$_.CREATE_CHANNEL_INVITE]: {
        scope: l.F.RPC,
        handler(e) {
            let { args: t } = e,
                { channel_id: n } = t,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i,
                        l = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                        return l;
                    }
                    if (
                        ((l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.getOwnPropertyNames(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                            return i;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                    )
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                    return l;
                })(t, ["channel_id"]);
            return a.Ay.createInvite(n, r, "RPC").catch(() => {
                throw new g.A(
                    {
                        errorCode: O.Lw6.INVALID_PERMISSIONS,
                    },
                    "Unable to generate an invite for ".concat(n, ". Does this user have permissions?"),
                );
            });
        },
    },
};
