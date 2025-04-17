n.d(t, { Z: () => b }), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(305325),
    o = n(281956),
    s = n(922482),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    p = n(594174),
    m = n(897285),
    f = n(924301),
    h = n(482241),
    g = n(11868),
    _ = n(231338);
function b(e) {
    let { code: t } = e,
        [n, b, x] = t.split('-'),
        {
            guildScheduledEvent: y,
            guild: E,
            channel: v,
            isMember: N
        } = (0, l.cj)(
            [f.ZP, d.Z, c.Z, u.ZP, p.default],
            () => {
                var e, t;
                let r = null != (t = f.ZP.getGuildScheduledEvent(b)) ? t : void 0,
                    i = d.Z.getGuild(n),
                    l = c.Z.getChannel(null == r ? void 0 : r.channel_id);
                return {
                    guildScheduledEvent: r,
                    guild: i,
                    channel: l,
                    isMember: u.ZP.isMember(n, null == (e = p.default.getCurrentUser()) ? void 0 : e.id)
                };
            },
            [n, b]
        );
    return (
        i.useEffect(() => {
            (null == y ? void 0 : y.id) == null && h.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != x ? [x] : []), m.Z.getGuildEventsForCurrentUser(n);
        }, [b, n, null == y ? void 0 : y.id, x]),
        (0, r.jsx)(g.ZP, {
            guild: E,
            channel: v,
            guildScheduledEvent: y,
            isMember: N,
            onAcceptInstantInvite: _.dG,
            onTransitionToInviteChannel: function () {
                if ((0, o.n)(n)) return void (0, a.hk)(n);
                (null == v ? void 0 : v.isGuildStageVoice()) ? (0, s.Cq)(v) : (null == v ? void 0 : v.isGuildVoice()) && h.Z.joinVoiceEvent(v.guild_id, v.id);
            },
            recurrenceId: x
        })
    );
}
