(n.d(t, { Z: () => E }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(305325),
    s = n(281956),
    l = n(922482),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    f = n(594174),
    _ = n(897285),
    p = n(924301),
    h = n(482241),
    m = n(11868),
    g = n(231338);
function E(e) {
    let { code: t } = e,
        [n, E, b] = t.split('-'),
        {
            guildScheduledEvent: y,
            guild: O,
            channel: v,
            isMember: I
        } = (0, o.cj)(
            [p.ZP, d.Z, c.Z, u.ZP, f.default],
            () => {
                var e, t;
                let r = null != (t = p.ZP.getGuildScheduledEvent(E)) ? t : void 0,
                    i = d.Z.getGuild(n),
                    o = c.Z.getChannel(null == r ? void 0 : r.channel_id);
                return {
                    guildScheduledEvent: r,
                    guild: i,
                    channel: o,
                    isMember: u.ZP.isMember(n, null == (e = f.default.getCurrentUser()) ? void 0 : e.id)
                };
            },
            [n, E]
        );
    function T() {
        if ((0, s.n)(n)) return void (0, a.hk)(n);
        (null == v ? void 0 : v.isGuildStageVoice()) ? (0, l.Cq)(v) : (null == v ? void 0 : v.isGuildVoice()) && h.Z.joinVoiceEvent(v.guild_id, v.id);
    }
    return (
        i.useEffect(() => {
            ((null == y ? void 0 : y.id) == null && h.Z.fetchGuildEvent(n, E), _.Z.getGuildEventUserCounts(n, E, null != b ? [b] : []), _.Z.getGuildEventsForCurrentUser(n));
        }, [E, n, null == y ? void 0 : y.id, b]),
        (0, r.jsx)(m.ZP, {
            guild: O,
            channel: v,
            guildScheduledEvent: y,
            isMember: I,
            onAcceptInstantInvite: g.dG,
            onTransitionToInviteChannel: T,
            recurrenceId: b
        })
    );
}
