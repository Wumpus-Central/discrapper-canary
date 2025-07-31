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
    g = n(482241),
    _ = n(11868),
    h = n(231338);
function b(e) {
    let { code: t } = e,
        [n, b, E] = t.split('-'),
        {
            guildScheduledEvent: C,
            guild: v,
            channel: O,
            isMember: x
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
            ((null == C ? void 0 : C.id) == null && g.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != E ? [E] : []), m.Z.getGuildEventsForCurrentUser(n));
        }, [b, n, null == C ? void 0 : C.id, E]),
        (0, r.jsx)(_.ZP, {
            guild: v,
            channel: O,
            guildScheduledEvent: C,
            isMember: x,
            onAcceptInstantInvite: h.dG,
            onTransitionToInviteChannel: function () {
                if ((0, o.n)(n)) return void (0, a.hk)(n);
                (null == O ? void 0 : O.isGuildStageVoice()) ? (0, s.Cq)(O) : (null == O ? void 0 : O.isGuildVoice()) && g.Z.joinVoiceEvent(O.guild_id, O.id);
            },
            recurrenceId: E
        })
    );
}
