n.d(t, { Z: () => y }), n(47120);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(447543),
    o = n(287734),
    s = n(703656),
    c = n(131704),
    u = n(592125),
    d = n(430824),
    p = n(496675),
    h = n(944486),
    f = n(979651),
    g = n(934415),
    m = n(996106),
    b = n(914946),
    _ = n(452426),
    E = n(561205),
    O = n(186901),
    N = n(981631);
let y = {
    [N.Etm.GET_CHANNEL]: {
        scope: {
            [O.Gp.ANY]: [l.x.RPC, l.x.GUILDS, l.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n
                } = e,
                r = u.Z.getChannel(t);
            if (null == r) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            if (r.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(l.x.RPC) && !e.includes(l.x.DM_CHANNELS_READ)) throw new m.Z({ errorCode: N.lTL.INVALID_PERMISSIONS }, 'Invalid scope');
            }
            return (0, b.T5)(r, (0, b.zM)(r, n.application.id, n.authorization.scopes));
        }
    },
    [N.Etm.GET_CHANNELS]: {
        scope: l.x.RPC,
        handler(e) {
            let {
                    args: { guild_id: t }
                } = e,
                n = i().values(u.Z.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = d.Z.getGuild(t);
                if (null == e) throw new m.Z({ errorCode: N.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => p.Z.can(N.Plq.VIEW_CHANNEL, e))
                    .map((e) => {
                        let { id: t, name: n, type: r } = e;
                        return {
                            id: t,
                            name: n,
                            type: r
                        };
                    })
            };
        }
    },
    [N.Etm.GET_CHANNEL_PERMISSIONS]: {
        scope: {
            [O.Gp.ANY]: [l.x.GUILDS_MEMBERS_READ, l.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let t = (0, E.Z)();
            if (null == t) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel');
            return { permissions: p.Z.computePermissions(t) };
        }
    },
    [N.Etm.SELECT_VOICE_CHANNEL]: {
        scope: l.x.RPC,
        validation: (e) =>
            (0, _.Z)(e)
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
                args: { channel_id: r, timeout: i = 0, force: l = !1, navigate: a = !1 }
            } = e;
            if (!r) return o.default.selectVoiceChannel(null), null;
            let _ = h.Z.getVoiceChannelId();
            if (null != _ && _ !== r && !1 === l) throw new m.Z({ errorCode: N.lTL.SELECT_VOICE_FORCE_REQUIRED }, 'User is already joined to a voice channel.');
            return t
                .storeWait(n, () => u.Z.getChannel(r), i)
                .catch(() => {
                    throw new m.Z({ errorCode: N.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select voice channel timed out.');
                })
                .then((e) => {
                    if (null == e) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(r));
                    if (!(0, c.vd)(e.type)) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Channel is not a voice channel');
                    return Promise.all([Promise.resolve(e), (0, b.T5)(e, (0, b.zM)(e, n.application.id, n.authorization.scopes))]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, g.rY)(t, f.Z, d.Z)) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Channel is full');
                        if (!p.Z.can(N.Plq.CONNECT, t)) throw new m.Z({ errorCode: N.lTL.INVALID_PERMISSIONS }, 'Connect permission required to join channel');
                    }
                    return o.default.selectVoiceChannel(t.id), a && (0, s.dL)(N.Z5c.CHANNEL(t.guild_id, t.id)), n;
                });
        }
    },
    [N.Etm.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [O.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
        },
        handler(e) {
            let { socket: t } = e,
                n = h.Z.getVoiceChannelId(),
                r = null != n ? u.Z.getChannel(n) : null;
            return null != r ? (0, b.T5)(r, (0, b.zM)(r, t.application.id, t.authorization.scopes)) : null;
        }
    },
    [N.Etm.SELECT_TEXT_CHANNEL]: {
        scope: l.x.RPC,
        validation: (e) =>
            (0, _.Z)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60)
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: r, timeout: i = 0 }
            } = e;
            return r
                ? t
                      .storeWait(n, () => u.Z.getChannel(r), i)
                      .catch(() => {
                          throw new m.Z({ errorCode: N.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select text channel timed out.');
                      })
                      .then((e) => {
                          if (null == e) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(r));
                          if (!(0, c.Qm)(e.type)) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'Channel is not a text channel');
                          return Promise.all([Promise.resolve(e), (0, b.T5)(e, (0, b.zM)(e, n.application.id, n.authorization.scopes))]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !p.Z.can(N.Plq.VIEW_CHANNEL, t)) throw new m.Z({ errorCode: N.lTL.INVALID_CHANNEL }, 'No permission to see channel');
                          return n.guild_id ? (0, s.dL)(N.Z5c.CHANNEL(n.guild_id, t.id)) : o.default.selectPrivateChannel(t.id), n;
                      })
                : ((0, s.uL)(N.Z5c.ME), null);
        }
    },
    [N.Etm.CREATE_CHANNEL_INVITE]: {
        scope: l.x.RPC,
        handler(e) {
            var {
                    args: { channel_id: t }
                } = e,
                n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e.args, ['channel_id']);
            return a.ZP.createInvite(t, n, 'RPC').catch(() => {
                throw new m.Z({ errorCode: N.lTL.INVALID_PERMISSIONS }, 'Unable to generate an invite for '.concat(t, '. Does this user have permissions?'));
            });
        }
    }
};
