n.d(t, { Z: () => b }), n(47120), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(305325),
    l = n(281956),
    s = n(922482),
    c = n(592125),
    d = n(271383),
    u = n(430824),
    p = n(594174),
    m = n(897285),
    f = n(924301),
    h = n(482241),
    g = n(11868),
    _ = n(231338);
function b(e) {
    let { code: t } = e,
        [n, b, v] = t.split('-'),
        {
            guildScheduledEvent: y,
            guild: x,
            channel: O,
            isMember: E
        } = (0, a.cj)(
            [f.ZP, u.Z, c.Z, d.ZP, p.default],
            () => {
                var e, t;
                let r = null !== (t = f.ZP.getGuildScheduledEvent(b)) && void 0 !== t ? t : void 0,
                    i = u.Z.getGuild(n),
                    a = c.Z.getChannel(null == r ? void 0 : r.channel_id);
                return {
                    guildScheduledEvent: r,
                    guild: i,
                    channel: a,
                    isMember: d.ZP.isMember(n, null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, b]
        );
    return (
        i.useEffect(() => {
            (null == y ? void 0 : y.id) == null && h.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != v ? [v] : []), m.Z.getGuildEventsForCurrentUser(n);
        }, [b, n, null == y ? void 0 : y.id, v]),
        (0, r.jsx)(g.ZP, {
            guild: x,
            channel: O,
            guildScheduledEvent: y,
            isMember: E,
            onAcceptInstantInvite: _.dG,
            onTransitionToInviteChannel: function () {
                if ((0, l.n)(n)) {
                    (0, o.hk)(n);
                    return;
                }
                (null == O ? void 0 : O.isGuildStageVoice()) ? (0, s.Cq)(O) : (null == O ? void 0 : O.isGuildVoice()) && h.Z.joinVoiceEvent(O.guild_id, O.id);
            },
            recurrenceId: v
        })
    );
}
