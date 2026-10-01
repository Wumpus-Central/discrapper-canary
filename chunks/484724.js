n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(66834),
    a = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(236917),
    u = n(9588),
    m = n(790535),
    h = n(734057),
    g = n(696451),
    p = n(71393),
    A = n(287809),
    x = n(285059),
    f = n(698441),
    I = n(496092),
    E = n(427080),
    v = n(652215);
let C = /^\d+$/;
function _(e) {
    let { code: t } = e,
        [n, _, j] = t.split("-"),
        N = C.test(n) && C.test(_) && (null == j || C.test(j)),
        { analyticsLocations: y } = (0, a.Ay)(),
        {
            guildScheduledEvent: T,
            guild: S,
            channel: b,
            isMember: k,
        } = (0, s.cf)(
            [f.Ay, p.A, h.A, g.Ay, A.default],
            () => {
                let e = f.Ay.getGuildScheduledEvent(_) ?? void 0,
                    t = p.A.getGuild(n),
                    i = h.A.getChannel(e?.channel_id);
                return {
                    guildScheduledEvent: e,
                    guild: t,
                    channel: i,
                    isMember: g.Ay.isMember(n, A.default.getCurrentUser()?.id),
                };
            },
            [n, _],
        );
    return (l.useEffect(() => {
        N &&
            (T?.id == null && I.default.fetchGuildEvent(n, _),
            x.A.getGuildEventUserCounts(n, _, null != j ? [j] : []),
            x.A.getGuildEventsForCurrentUser(n));
    }, [_, n, T?.id, N, j]),
    N)
        ? (0, i.jsx)(E.Ay, {
              guild: S,
              channel: b,
              guildScheduledEvent: T,
              isMember: k,
              onAcceptInstantInvite: function () {
                  function e() {
                      (0, d.V)(n)
                          ? (0, o.Ze)(n)
                          : r.A.joinGuild(n, { source: v.Q4z.GUILD_EVENT_EMBED }).catch((e) => {
                                e.body?.code === v.t02.UNKNOWN_GUILD &&
                                    (0, u.showInaccessibleLinkModal)({ kind: "channel" });
                            });
                  }
                  (0, c.g0)({ guildId: n, guild: S, isMember: k, analyticsLocations: y, onGateConfirm: e }) ===
                      c.Wx.PROCEED && e();
              },
              onTransitionToInviteChannel: function () {
                  (0, d.V)(n)
                      ? (0, o.Ze)(n)
                      : b?.isGuildStageVoice()
                        ? (0, m.av)(b)
                        : b?.isGuildVoice() && I.default.joinVoiceEvent(b.guild_id, b.id);
              },
              recurrenceId: j,
          })
        : null;
}
