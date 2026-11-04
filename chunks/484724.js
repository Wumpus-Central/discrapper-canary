var i = n(477900),
    l = n(582128),
    s = n(855986),
    r = n(778858),
    a = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(963055),
    u = n(9588),
    m = n(129095),
    h = n(734057),
    g = n(696451),
    p = n(71393),
    A = n(287809),
    x = n(285059),
    f = n(698441),
    I = n(496092),
    E = n(955817),
    v = n(444092),
    C = n(427080),
    _ = n(652215);
let j = /^\d+$/;
n.d(
    t,
    {},
    {
        A: function (e) {
            let { code: t } = e,
                [n, N, y] = t.split("-"),
                b = j.test(n) && j.test(N) && (null == y || j.test(y)),
                { analyticsLocations: T } = (0, a.Ay)(),
                {
                    guildScheduledEvent: S,
                    guild: k,
                    channel: R,
                    isMember: L,
                } = (0, s.cf)(
                    [f.Ay, p.A, h.A, g.Ay, A.default],
                    () => {
                        let e = f.Ay.getGuildScheduledEvent(N) ?? void 0,
                            t = p.A.getGuild(n),
                            i = h.A.getChannel(e?.channel_id);
                        return {
                            guildScheduledEvent: e,
                            guild: t,
                            channel: i,
                            isMember: g.Ay.isMember(n, A.default.getCurrentUser()?.id),
                        };
                    },
                    [n, N],
                );
            return (l.useEffect(() => {
                if (b) {
                    if (S?.id == null) {
                        let e,
                            t = !1;
                        return (
                            !(function i() {
                                I.default.fetchGuildEvent(n, N, { priority: "background" }).catch((l) => {
                                    t || (0, v.aI)(l) || (e = l instanceof E.wH ? (0, E.VB)(i) : (0, v.lX)(n, N, i));
                                });
                            })(),
                            () => {
                                ((t = !0), e?.());
                            }
                        );
                    }
                    (x.A.getGuildEventUserCountsForEmbed(n, N, null != y ? [y] : []),
                        x.A.getGuildEventsForCurrentUser(n));
                }
            }, [N, n, S?.id, b, y]),
            b)
                ? (0, i.jsx)(C.Ay, {
                      guild: k,
                      channel: R,
                      guildScheduledEvent: S,
                      isMember: L,
                      onAcceptInstantInvite: function () {
                          function e() {
                              (0, d.V)(n)
                                  ? (0, o.Ze)(n)
                                  : r.A.joinGuild(n, { source: _.Q4z.GUILD_EVENT_EMBED }).catch((e) => {
                                        e.body?.code === _.t02.UNKNOWN_GUILD &&
                                            (0, u.showInaccessibleLinkModal)({ kind: "channel" });
                                    });
                          }
                          (0, c.g0)({ guildId: n, guild: k, isMember: L, analyticsLocations: T, onGateConfirm: e }) ===
                              c.Wx.PROCEED && e();
                      },
                      onTransitionToInviteChannel: function () {
                          (0, d.V)(n)
                              ? (0, o.Ze)(n)
                              : R?.isGuildStageVoice()
                                ? (0, m.av)(R)
                                : R?.isGuildVoice() && I.default.joinVoiceEvent(R.guild_id, R.id);
                      },
                      recurrenceId: y,
                  })
                : null;
        },
    },
);
