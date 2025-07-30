(n.d(t, { Z: () => b }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
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
    _ = n(482241),
    g = n(11868),
    h = n(231338);
function b(e) {
    let { code: t } = e,
        [n, b, E] = t.split('-'),
        {
            guildScheduledEvent: C,
            guild: O,
            channel: y,
            isMember: v
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
            ((null == C ? void 0 : C.id) == null && _.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != E ? [E] : []), m.Z.getGuildEventsForCurrentUser(n));
        }, [b, n, null == C ? void 0 : C.id, E]),
        (0, r.jsx)(g.ZP, {
            guild: O,
            channel: y,
            guildScheduledEvent: C,
            isMember: v,
            onAcceptInstantInvite: h.dG,
            onTransitionToInviteChannel: function () {
                if ((0, o.n)(n)) return void (0, a.hk)(n);
                (null == y ? void 0 : y.isGuildStageVoice()) ? (0, s.Cq)(y) : (null == y ? void 0 : y.isGuildVoice()) && _.Z.joinVoiceEvent(y.guild_id, y.id);
            },
            recurrenceId: E
        })
    );
}
