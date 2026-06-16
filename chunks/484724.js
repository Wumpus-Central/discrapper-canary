n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(66834),
    a = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(665066),
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
function v(e) {
    let { code: t } = e,
        [n, v, _] = t.split("-"),
        { analyticsLocations: j } = (0, a.Ay)(),
        {
            guildScheduledEvent: N,
            guild: T,
            channel: y,
            isMember: S,
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
    return (
        l.useEffect(() => {
            N?.id == null && E.default.fetchGuildEvent(n, v),
                x.A.getGuildEventUserCounts(n, v, null != _ ? [_] : []),
                x.A.getGuildEventsForCurrentUser(n);
        }, [v, n, N?.id, _]),
        (0, i.jsx)(I.Ay, {
            guild: T,
            channel: y,
            guildScheduledEvent: N,
            isMember: S,
            onAcceptInstantInvite: () => {
                if ((0, c.g)({ guild: T, isMember: S, analyticsLocations: j }) === c.W.PROCEED) {
                    if ((0, d.V)(n)) return void (0, o.Ze)(n);
                    r.A.joinGuild(n, { source: C.Q4z.GUILD_EVENT_EMBED }).catch((e) => {
                        e.body?.code === C.t02.UNKNOWN_GUILD && (0, u.showInaccessibleLinkModal)({ kind: "channel" });
                    });
                }
            },
            onTransitionToInviteChannel: function () {
                (0, d.V)(n)
                    ? (0, o.Ze)(n)
                    : y?.isGuildStageVoice()
                      ? (0, m.av)(y)
                      : y?.isGuildVoice() && E.default.joinVoiceEvent(y.guild_id, y.id);
            },
            recurrenceId: _,
        })
    );
}
