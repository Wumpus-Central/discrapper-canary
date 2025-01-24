n(47120);
var i = n(392711),
    r = n.n(i),
    l = n(243814),
    a = n(447543),
    s = n(287734),
    o = n(703656),
    c = n(131704),
    d = n(592125),
    u = n(430824),
    h = n(496675),
    m = n(944486),
    p = n(979651),
    g = n(934415),
    f = n(996106),
    _ = n(914946),
    E = n(452426),
    I = n(561205),
    C = n(186901),
    v = n(981631);
t.Z = {
    [v.Etm.GET_CHANNEL]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.GUILDS, l.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n
                } = e,
                i = d.Z.getChannel(t);
            if (null == i) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(l.x.RPC) && !e.includes(l.x.DM_CHANNELS_READ)) throw new f.Z({ errorCode: v.lTL.INVALID_PERMISSIONS }, 'Invalid scope');
            }
            return (0, _.T5)(i, (0, _.zM)(i, n.application.id, n.authorization.scopes));
        }
    },
    [v.Etm.GET_CHANNELS]: {
        scope: l.x.RPC,
        handler(e) {
            let {
                    args: { guild_id: t }
                } = e,
                n = r().values(d.Z.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = u.Z.getGuild(t);
                if (null == e) throw new f.Z({ errorCode: v.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => h.Z.can(v.Plq.VIEW_CHANNEL, e))
                    .map((e) => {
                        let { id: t, name: n, type: i } = e;
                        return {
                            id: t,
                            name: n,
                            type: i
                        };
                    })
            };
        }
    },
    [v.Etm.GET_CHANNEL_PERMISSIONS]: {
        scope: {
            [C.Gp.ANY]: [l.x.GUILDS_MEMBERS_READ, l.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let t = (0, I.Z)();
            if (null == t) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel');
            return { permissions: h.Z.computePermissions(t) };
        }
    },
    [v.Etm.SELECT_VOICE_CHANNEL]: {
        scope: l.x.RPC,
        validation: (e) =>
            (0, E.Z)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60),
                    force: e.boolean(),
                    navigate: e.boolean()
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: i, timeout: r = 0, force: l = !1, navigate: a = !1 }
            } = e;
            if (!i) return s.default.selectVoiceChannel(null), null;
            let E = m.Z.getVoiceChannelId();
            if (null != E && E !== i && !1 === l) throw new f.Z({ errorCode: v.lTL.SELECT_VOICE_FORCE_REQUIRED }, 'User is already joined to a voice channel.');
            return t
                .storeWait(n, () => d.Z.getChannel(i), r)
                .catch(() => {
                    throw new f.Z({ errorCode: v.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select voice channel timed out.');
                })
                .then((e) => {
                    if (null == e) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                    if (!(0, c.vd)(e.type)) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Channel is not a voice channel');
                    return Promise.all([Promise.resolve(e), (0, _.T5)(e, (0, _.zM)(e, n.application.id, n.authorization.scopes))]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, g.rY)(t, p.Z, u.Z)) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Channel is full');
                        if (!h.Z.can(v.Plq.CONNECT, t)) throw new f.Z({ errorCode: v.lTL.INVALID_PERMISSIONS }, 'Connect permission required to join channel');
                    }
                    return s.default.selectVoiceChannel(t.id), a && (0, o.dL)(v.Z5c.CHANNEL(t.guild_id, t.id)), n;
                });
        }
    },
    [v.Etm.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler(e) {
            let { socket: t } = e,
                n = m.Z.getVoiceChannelId(),
                i = null != n ? d.Z.getChannel(n) : null;
            return null != i ? (0, _.T5)(i, (0, _.zM)(i, t.application.id, t.authorization.scopes)) : null;
        }
    },
    [v.Etm.SELECT_TEXT_CHANNEL]: {
        scope: l.x.RPC,
        validation: (e) =>
            (0, E.Z)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60)
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: i, timeout: r = 0 }
            } = e;
            return i
                ? t
                      .storeWait(n, () => d.Z.getChannel(i), r)
                      .catch(() => {
                          throw new f.Z({ errorCode: v.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select text channel timed out.');
                      })
                      .then((e) => {
                          if (null == e) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                          if (!(0, c.Qm)(e.type)) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Channel is not a text channel');
                          return Promise.all([Promise.resolve(e), (0, _.T5)(e, (0, _.zM)(e, n.application.id, n.authorization.scopes))]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !h.Z.can(v.Plq.VIEW_CHANNEL, t)) throw new f.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'No permission to see channel');
                          return n.guild_id ? (0, o.dL)(v.Z5c.CHANNEL(n.guild_id, t.id)) : s.default.selectPrivateChannel(t.id), n;
                      })
                : ((0, o.uL)(v.Z5c.ME), null);
        }
    },
    [v.Etm.CREATE_CHANNEL_INVITE]: {
        scope: l.x.RPC,
        handler(e) {
            let {
                args: { channel_id: t, ...n }
            } = e;
            return a.Z.createInvite(t, n, 'RPC').catch(() => {
                throw new f.Z({ errorCode: v.lTL.INVALID_PERMISSIONS }, 'Unable to generate an invite for '.concat(t, '. Does this user have permissions?'));
            });
        }
    }
};
