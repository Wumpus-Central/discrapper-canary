n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(686956),
    s = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(665066),
    u = n(323443),
    m = n(734057),
    _ = n(696451),
    h = n(71393),
    p = n(287809),
    g = n(285059),
    A = n(698441),
    f = n(496092),
    x = n(427080),
    E = n(652215);
function C(e) {
    let { code: t } = e,
        [n, C, I] = t.split("-"),
        { analyticsLocations: T } = (0, s.Ay)(),
        {
            guildScheduledEvent: v,
            guild: N,
            channel: S,
            isMember: b,
        } = (0, a.cf)([A.Ay, h.A, m.A, _.Ay, p.default], () => {
            let e = A.Ay.getGuildScheduledEvent(C) ?? void 0,
                t = h.A.getGuild(n),
                i = m.A.getChannel(e?.channel_id);
            return {
                guildScheduledEvent: e,
                guild: t,
                channel: i,
                isMember: _.Ay.isMember(n, p.default.getCurrentUser()?.id),
            };
        }, [n, C]);
    return (
        l.useEffect(() => {
            v?.id == null && f.A.fetchGuildEvent(n, C),
                g.A.getGuildEventUserCounts(n, C, null != I ? [I] : []),
                g.A.getGuildEventsForCurrentUser(n);
        }, [C, n, v?.id, I]),
        (0, i.jsx)(x.Ay, {
            guild: N,
            channel: S,
            guildScheduledEvent: v,
            isMember: b,
            onAcceptInstantInvite: () => {
                if ((0, c.g)({ guild: N, isMember: b, analyticsLocations: T }) === c.W.PROCEED) {
                    if ((0, d.V)(n)) return void (0, o.Ze)(n);
                    r.A.joinGuild(n, { source: E.Q4z.GUILD_EVENT_EMBED }).catch(() => {});
                }
            },
            onTransitionToInviteChannel: function () {
                (0, d.V)(n)
                    ? (0, o.Ze)(n)
                    : S?.isGuildStageVoice()
                      ? (0, u.av)(S)
                      : S?.isGuildVoice() && f.A.joinVoiceEvent(S.guild_id, S.id);
            },
            recurrenceId: I,
        })
    );
}
