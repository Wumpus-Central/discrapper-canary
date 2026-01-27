n.d(t, {
    A: () => v,
}),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(686956),
    s = n(688810),
    o = n(202384),
    c = n(51758),
    u = n(665066),
    d = n(323443),
    p = n(734057),
    m = n(696451),
    f = n(71393),
    g = n(287809),
    h = n(285059),
    _ = n(698441),
    b = n(496092),
    A = n(427080),
    y = n(652215);

function v(e) {
    let { code: t } = e,
        [n, v, x] = t.split("-"),
        { analyticsLocations: O } = (0, s.Ay)(),
        {
            guildScheduledEvent: E,
            guild: j,
            channel: C,
            isMember: I,
        } = (0, l.cf)([_.Ay, f.A, p.A, m.Ay, g.default], () => {
            var e, t;
            let r = null != (e = _.Ay.getGuildScheduledEvent(v)) ? e : void 0,
                i = f.A.getGuild(n),
                l = p.A.getChannel(null == r ? void 0 : r.channel_id);
            return {
                guildScheduledEvent: r,
                guild: i,
                channel: l,
                isMember: m.Ay.isMember(n, null == (t = g.default.getCurrentUser()) ? void 0 : t.id),
            };
        }, [n, v]);
    return (
        i.useEffect(() => {
            (null == E ? void 0 : E.id) == null && b.A.fetchGuildEvent(n, v),
                h.A.getGuildEventUserCounts(n, v, null != x ? [x] : []),
                h.A.getGuildEventsForCurrentUser(n);
        }, [v, n, null == E ? void 0 : E.id, x]),
        (0, r.jsx)(A.Ay, {
            guild: j,
            channel: C,
            guildScheduledEvent: E,
            isMember: I,
            onAcceptInstantInvite: () => {
                if (
                    (0, u.g)({
                        guild: j,
                        isMember: I,
                        analyticsLocations: O,
                    }) === u.W.PROCEED
                ) {
                    if ((0, c.V)(n)) return void (0, o.Ze)(n);
                    a.A.joinGuild(n, {
                        source: y.Q4z.GUILD_EVENT_EMBED,
                    }).catch(() => {});
                }
            },
            onTransitionToInviteChannel: function () {
                (0, c.V)(n)
                    ? (0, o.Ze)(n)
                    : (null == C ? void 0 : C.isGuildStageVoice())
                      ? (0, d.av)(C)
                      : (null == C ? void 0 : C.isGuildVoice()) && b.A.joinVoiceEvent(C.guild_id, C.id);
            },
            recurrenceId: x,
        })
    );
}
