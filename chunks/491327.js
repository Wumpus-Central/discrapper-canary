n.d(t, { Z: () => v }), n(47120);
var i = n(392711),
    l = n.n(i),
    r = n(243814),
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
    _ = n(996106),
    f = n(914946),
    E = n(452426),
    I = n(561205),
    C = n(186901),
    N = n(981631);
let v = {
    [N.Etm.GET_CHANNEL]: {
        scope: {
            [C.Gp.ANY]: [r.x.RPC, r.x.GUILDS, r.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n
                } = e,
                i = d.Z.getChannel(t);
            if (null == i) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(r.x.RPC) && !e.includes(r.x.DM_CHANNELS_READ)) throw new _.Z({ errorCode: N.lTL.INVALID_PERMISSIONS }, 'Invalid scope');
            }
            return (0, f.T5)(i, (0, f.zM)(i, n.application.id, n.authorization.scopes));
        }
    },
    [N.Etm.GET_CHANNELS]: {
        scope: r.x.RPC,
        handler(e) {
            let {
                    args: { guild_id: t }
                } = e,
                n = l().values(d.Z.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = u.Z.getGuild(t);
                if (null == e) throw new _.Z({ errorCode: N.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => h.Z.can(N.Plq.VIEW_CHANNEL, e))
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
    [N.Etm.GET_CHANNEL_PERMISSIONS]: {
        scope: {
            [C.Gp.ANY]: [r.x.GUILDS_MEMBERS_READ, r.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let t = (0, I.Z)();
            if (null == t) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel');
            return { permissions: h.Z.computePermissions(t) };
        }
    },
    [N.Etm.SELECT_VOICE_CHANNEL]: {
        scope: r.x.RPC,
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
                args: { channel_id: i, timeout: l = 0, force: r = !1, navigate: a = !1 }
            } = e;
            if (!i) return s.default.selectVoiceChannel(null), null;
            let E = m.Z.getVoiceChannelId();
            if (null != E && E !== i && !1 === r) throw new _.Z({ errorCode: N.lTL.SELECT_VOICE_FORCE_REQUIRED }, 'User is already joined to a voice channel.');
            return t
                .storeWait(n, () => d.Z.getChannel(i), l)
                .catch(() => {
                    throw new _.Z({ errorCode: N.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select voice channel timed out.');
                })
                .then((e) => {
                    if (null == e) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                    if (!(0, c.vd)(e.type)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Channel is not a voice channel');
                    return Promise.all([Promise.resolve(e), (0, f.T5)(e, (0, f.zM)(e, n.application.id, n.authorization.scopes))]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, g.rY)(t, p.Z, u.Z)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Channel is full');
                        if (!h.Z.can(N.Plq.CONNECT, t)) throw new _.Z({ errorCode: N.lTL.INVALID_PERMISSIONS }, 'Connect permission required to join channel');
                    }
                    return s.default.selectVoiceChannel(t.id), a && (0, o.dL)(N.Z5c.CHANNEL(t.guild_id, t.id)), n;
                });
        }
    },
    [N.Etm.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [C.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
        },
        handler(e) {
            let { socket: t } = e,
                n = m.Z.getVoiceChannelId(),
                i = null != n ? d.Z.getChannel(n) : null;
            return null != i ? (0, f.T5)(i, (0, f.zM)(i, t.application.id, t.authorization.scopes)) : null;
        }
    },
    [N.Etm.SELECT_TEXT_CHANNEL]: {
        scope: r.x.RPC,
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
                args: { channel_id: i, timeout: l = 0 }
            } = e;
            return i
                ? t
                      .storeWait(n, () => d.Z.getChannel(i), l)
                      .catch(() => {
                          throw new _.Z({ errorCode: N.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select text channel timed out.');
                      })
                      .then((e) => {
                          if (null == e) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                          if (!(0, c.Qm)(e.type)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Channel is not a text channel');
                          return Promise.all([Promise.resolve(e), (0, f.T5)(e, (0, f.zM)(e, n.application.id, n.authorization.scopes))]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !h.Z.can(N.Plq.VIEW_CHANNEL, t)) throw new _.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'No permission to see channel');
                          return n.guild_id ? (0, o.dL)(N.Z5c.CHANNEL(n.guild_id, t.id)) : s.default.selectPrivateChannel(t.id), n;
                      })
                : ((0, o.uL)(N.Z5c.ME), null);
        }
    },
    [N.Etm.CREATE_CHANNEL_INVITE]: {
        scope: r.x.RPC,
        handler(e) {
            let {
                args: { channel_id: t, ...n }
            } = e;
            return a.Z.createInvite(t, n, 'RPC').catch(() => {
                throw new _.Z({ errorCode: N.lTL.INVALID_PERMISSIONS }, 'Unable to generate an invite for '.concat(t, '. Does this user have permissions?'));
            });
        }
    }
};
