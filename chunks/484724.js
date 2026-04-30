n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(66834),
    a = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(665066),
    u = n(790535),
    m = n(734057),
    h = n(696451),
    g = n(71393),
    p = n(287809),
    A = n(285059),
    x = n(698441),
    f = n(496092),
    E = n(427080),
    I = n(652215);
function C(e) {
    let { code: t } = e,
        [n, C, v] = t.split("-"),
        { analyticsLocations: _ } = (0, a.Ay)(),
        {
            guildScheduledEvent: j,
            guild: N,
            channel: y,
            isMember: T,
        } = (0, s.cf)([x.Ay, g.A, m.A, h.Ay, p.default], () => {
            let e = x.Ay.getGuildScheduledEvent(C) ?? void 0,
                t = g.A.getGuild(n),
                i = m.A.getChannel(e?.channel_id);
            return {
                guildScheduledEvent: e,
                guild: t,
                channel: i,
                isMember: h.Ay.isMember(n, p.default.getCurrentUser()?.id),
            };
        }, [n, C]);
    return (
        l.useEffect(() => {
            j?.id == null && f.A.fetchGuildEvent(n, C),
                A.A.getGuildEventUserCounts(n, C, null != v ? [v] : []),
                A.A.getGuildEventsForCurrentUser(n);
        }, [C, n, j?.id, v]),
        (0, i.jsx)(E.Ay, {
            guild: N,
            channel: y,
            guildScheduledEvent: j,
            isMember: T,
            onAcceptInstantInvite: () => {
                if ((0, c.g)({ guild: N, isMember: T, analyticsLocations: _ }) === c.W.PROCEED) {
                    if ((0, d.V)(n)) return void (0, o.Ze)(n);
                    r.A.joinGuild(n, { source: I.Q4z.GUILD_EVENT_EMBED }).catch(() => {});
                }
            },
            onTransitionToInviteChannel: function () {
                (0, d.V)(n)
                    ? (0, o.Ze)(n)
                    : y?.isGuildStageVoice()
                      ? (0, u.av)(y)
                      : y?.isGuildVoice() && f.A.joinVoiceEvent(y.guild_id, y.id);
            },
            recurrenceId: v,
        })
    );
}
