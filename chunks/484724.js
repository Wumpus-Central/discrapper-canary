n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(66834),
    r = n(688810),
    o = n(202384),
    c = n(51758),
    d = n(665066),
    u = n(9588),
    m = n(790535),
    h = n(734057),
    g = n(696451),
    p = n(71393),
    A = n(287809),
    x = n(285059),
    f = n(698441),
    E = n(496092),
    I = n(427080),
    C = n(652215);
let _ = /^\d+$/;
function v(e) {
    let { code: t } = e,
        [n, v, N] = t.split("-"),
        j = _.test(n) && _.test(v) && (null == N || _.test(N)),
        { analyticsLocations: T } = (0, r.Ay)(),
        {
            guildScheduledEvent: S,
            guild: y,
            channel: b,
            isMember: R,
        } = (0, s.cf)([f.Ay, p.A, h.A, g.Ay, A.default], () => {
            let e = f.Ay.getGuildScheduledEvent(v) ?? void 0,
                t = p.A.getGuild(n),
                i = h.A.getChannel(e?.channel_id);
            return {
                guildScheduledEvent: e,
                guild: t,
                channel: i,
                isMember: g.Ay.isMember(n, A.default.getCurrentUser()?.id),
            };
        }, [n, v]);
    return (l.useEffect(() => {
        j &&
            (S?.id == null && E.default.fetchGuildEvent(n, v),
            x.A.getGuildEventUserCounts(n, v, null != N ? [N] : []),
            x.A.getGuildEventsForCurrentUser(n));
    }, [v, n, S?.id, j, N]),
    j)
        ? (0, i.jsx)(I.Ay, {
              guild: y,
              channel: b,
              guildScheduledEvent: S,
              isMember: R,
              onAcceptInstantInvite: function () {
                  function e() {
                      (0, c.V)(n)
                          ? (0, o.Ze)(n)
                          : a.A.joinGuild(n, { source: C.Q4z.GUILD_EVENT_EMBED }).catch((e) => {
                                e.body?.code === C.t02.UNKNOWN_GUILD &&
                                    (0, u.showInaccessibleLinkModal)({ kind: "channel" });
                            });
                  }
                  (0, d.g)({ guildId: n, guild: y, isMember: R, analyticsLocations: T, onGateConfirm: e }) ===
                      d.W.PROCEED && e();
              },
              onTransitionToInviteChannel: function () {
                  (0, c.V)(n)
                      ? (0, o.Ze)(n)
                      : b?.isGuildStageVoice()
                        ? (0, m.av)(b)
                        : b?.isGuildVoice() && E.default.joinVoiceEvent(b.guild_id, b.id);
              },
              recurrenceId: N,
          })
        : null;
}
