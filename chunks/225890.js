n.d(t, { Z: () => O }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(749210),
    s = n(906732),
    l = n(305325),
    c = n(281956),
    u = n(697037),
    d = n(922482),
    f = n(592125),
    p = n(271383),
    _ = n(430824),
    m = n(594174),
    h = n(897285),
    g = n(924301),
    E = n(482241),
    b = n(11868),
    y = n(981631);
function O(e) {
    let { code: t } = e,
        [n, O, v] = t.split("-"),
        { analyticsLocations: S } = (0, s.ZP)(),
        {
            guildScheduledEvent: I,
            guild: T,
            channel: A,
            isMember: C,
        } = (0, a.cj)([g.ZP, _.Z, f.Z, p.ZP, m.default], () => {
            var e, t;
            let r = null != (t = g.ZP.getGuildScheduledEvent(O)) ? t : void 0,
                i = _.Z.getGuild(n),
                a = f.Z.getChannel(null == r ? void 0 : r.channel_id);
            return {
                guildScheduledEvent: r,
                guild: i,
                channel: a,
                isMember: p.ZP.isMember(n, null == (e = m.default.getCurrentUser()) ? void 0 : e.id),
            };
        }, [n, O]),
        N = () => {
            if (
                (0, u.o)({
                    guild: T,
                    isMember: C,
                    analyticsLocations: S,
                }) === u.e.PROCEED
            ) {
                if ((0, c.n)(n)) return void (0, l.hk)(n);
                o.Z.joinGuild(n, { source: y.vtS.GUILD_EVENT_EMBED }).catch(() => {});
            }
        };
    function P() {
        if ((0, c.n)(n)) return void (0, l.hk)(n);
        (null == A ? void 0 : A.isGuildStageVoice())
            ? (0, d.Cq)(A)
            : (null == A ? void 0 : A.isGuildVoice()) && E.Z.joinVoiceEvent(A.guild_id, A.id);
    }
    return (
        i.useEffect(() => {
            (null == I ? void 0 : I.id) == null && E.Z.fetchGuildEvent(n, O),
                h.Z.getGuildEventUserCounts(n, O, null != v ? [v] : []),
                h.Z.getGuildEventsForCurrentUser(n);
        }, [O, n, null == I ? void 0 : I.id, v]),
        (0, r.jsx)(b.ZP, {
            guild: T,
            channel: A,
            guildScheduledEvent: I,
            isMember: C,
            onAcceptInstantInvite: N,
            onTransitionToInviteChannel: P,
            recurrenceId: v,
        })
    );
}
