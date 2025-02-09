n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(305325),
    s = n(281956),
    o = n(922482),
    c = n(592125),
    d = n(271383),
    u = n(430824),
    m = n(594174),
    _ = n(897285),
    h = n(924301),
    p = n(482241),
    g = n(11868),
    f = n(231338);
function x(e) {
    let { code: t } = e,
        [n, x, C] = t.split('-'),
        {
            guildScheduledEvent: v,
            guild: E,
            channel: I,
            isMember: N
        } = (0, a.cj)(
            [h.ZP, u.Z, c.Z, d.ZP, m.default],
            () => {
                var e, t;
                let i = null !== (t = h.ZP.getGuildScheduledEvent(x)) && void 0 !== t ? t : void 0,
                    l = u.Z.getGuild(n),
                    a = c.Z.getChannel(null == i ? void 0 : i.channel_id);
                return {
                    guildScheduledEvent: i,
                    guild: l,
                    channel: a,
                    isMember: d.ZP.isMember(n, null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, x]
        );
    return (
        l.useEffect(() => {
            (null == v ? void 0 : v.id) == null && p.Z.fetchGuildEvent(n, x), _.Z.getGuildEventUserCounts(n, x, null != C ? [C] : []), _.Z.getGuildEventsForCurrentUser(n);
        }, [x, n, null == v ? void 0 : v.id, C]),
        (0, i.jsx)(g.ZP, {
            guild: E,
            channel: I,
            guildScheduledEvent: v,
            isMember: N,
            onAcceptInstantInvite: f.dG,
            onTransitionToInviteChannel: function () {
                if ((0, s.n)(n)) {
                    (0, r.hk)(n);
                    return;
                }
                (null == I ? void 0 : I.isGuildStageVoice()) ? (0, o.Cq)(I) : (null == I ? void 0 : I.isGuildVoice()) && p.Z.joinVoiceEvent(I.guild_id, I.id);
            },
            recurrenceId: C
        })
    );
}
