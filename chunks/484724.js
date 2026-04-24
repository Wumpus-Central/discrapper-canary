n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(686956),
    s = n(688810),
    o = n(202384),
    c = n(51758),
    d = n(665066),
    u = n(790535),
    _ = n(734057),
    m = n(696451),
    h = n(71393),
    p = n(287809),
    g = n(285059),
    f = n(698441),
    x = n(496092),
    A = n(427080),
    C = n(652215);
function v(e) {
    let { code: t } = e,
        [n, v, I] = t.split("-"),
        { analyticsLocations: E } = (0, s.Ay)(),
        {
            guildScheduledEvent: b,
            guild: y,
            channel: T,
            isMember: j,
        } = (0, a.cf)([f.Ay, h.A, _.A, m.Ay, p.default], () => {
            let e = f.Ay.getGuildScheduledEvent(v) ?? void 0,
                t = h.A.getGuild(n),
                i = _.A.getChannel(e?.channel_id);
            return {
                guildScheduledEvent: e,
                guild: t,
                channel: i,
                isMember: m.Ay.isMember(n, p.default.getCurrentUser()?.id),
            };
        }, [n, v]);
    return (
        l.useEffect(() => {
            b?.id == null && x.A.fetchGuildEvent(n, v),
                g.A.getGuildEventUserCounts(n, v, null != I ? [I] : []),
                g.A.getGuildEventsForCurrentUser(n);
        }, [v, n, b?.id, I]),
        (0, i.jsx)(A.Ay, {
            guild: y,
            channel: T,
            guildScheduledEvent: b,
            isMember: j,
            onAcceptInstantInvite: () => {
                if ((0, d.g)({ guild: y, isMember: j, analyticsLocations: E }) === d.W.PROCEED) {
                    if ((0, c.V)(n)) return void (0, o.Ze)(n);
                    r.A.joinGuild(n, { source: C.Q4z.GUILD_EVENT_EMBED }).catch(() => {});
                }
            },
            onTransitionToInviteChannel: function () {
                (0, c.V)(n)
                    ? (0, o.Ze)(n)
                    : T?.isGuildStageVoice()
                      ? (0, u.av)(T)
                      : T?.isGuildVoice() && x.A.joinVoiceEvent(T.guild_id, T.id);
            },
            recurrenceId: I,
        })
    );
}
