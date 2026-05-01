n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(686956),
    r = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(665066),
    u = n(790535),
    m = n(734057),
    h = n(696451),
    g = n(71393),
    A = n(287809),
    p = n(285059),
    x = n(698441),
    f = n(496092),
    C = n(427080),
    E = n(652215);
function v(e) {
    let { code: t } = e,
        [n, v, I] = t.split("-"),
        { analyticsLocations: _ } = (0, r.Ay)(),
        {
            guildScheduledEvent: j,
            guild: N,
            channel: T,
            isMember: y,
        } = (0, s.cf)([x.Ay, g.A, m.A, h.Ay, A.default], () => {
            let e = x.Ay.getGuildScheduledEvent(v) ?? void 0,
                t = g.A.getGuild(n),
                i = m.A.getChannel(e?.channel_id);
            return {
                guildScheduledEvent: e,
                guild: t,
                channel: i,
                isMember: h.Ay.isMember(n, A.default.getCurrentUser()?.id),
            };
        }, [n, v]);
    return (
        l.useEffect(() => {
            j?.id == null && f.A.fetchGuildEvent(n, v),
                p.A.getGuildEventUserCounts(n, v, null != I ? [I] : []),
                p.A.getGuildEventsForCurrentUser(n);
        }, [v, n, j?.id, I]),
        (0, i.jsx)(C.Ay, {
            guild: N,
            channel: T,
            guildScheduledEvent: j,
            isMember: y,
            onAcceptInstantInvite: () => {
                if ((0, c.g)({ guild: N, isMember: y, analyticsLocations: _ }) === c.W.PROCEED) {
                    if ((0, d.V)(n)) return void (0, o.Ze)(n);
                    a.A.joinGuild(n, { source: E.Q4z.GUILD_EVENT_EMBED }).catch(() => {});
                }
            },
            onTransitionToInviteChannel: function () {
                (0, d.V)(n)
                    ? (0, o.Ze)(n)
                    : T?.isGuildStageVoice()
                      ? (0, u.av)(T)
                      : T?.isGuildVoice() && f.A.joinVoiceEvent(T.guild_id, T.id);
            },
            recurrenceId: I,
        })
    );
}
