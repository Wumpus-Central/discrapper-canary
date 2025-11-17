n.d(t, { Z: () => O }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(749210),
    s = n(906732),
    l = n(305325),
    c = n(281956),
    u = n(542256),
    d = n(922482),
    f = n(592125),
    _ = n(271383),
    p = n(430824),
    h = n(594174),
    m = n(897285),
    g = n(924301),
    E = n(482241),
    b = n(11868),
    y = n(981631);
function O(e) {
    let { code: t } = e,
        [n, O, v] = t.split("-"),
        { analyticsLocations: I } = (0, s.ZP)(),
        {
            guildScheduledEvent: T,
            guild: S,
            channel: A,
            isMember: C,
        } = (0, a.cj)([g.ZP, p.Z, f.Z, _.ZP, h.default], () => {
            var e, t;
            let r = null != (t = g.ZP.getGuildScheduledEvent(O)) ? t : void 0,
                i = p.Z.getGuild(n),
                a = f.Z.getChannel(null == r ? void 0 : r.channel_id);
            return {
                guildScheduledEvent: r,
                guild: i,
                channel: a,
                isMember: _.ZP.isMember(n, null == (e = h.default.getCurrentUser()) ? void 0 : e.id),
            };
        }, [n, O]),
        N = () => {
            if (
                (0, u.o)({
                    guild: S,
                    isMember: C,
                    analyticsLocations: I,
                }) === u.e.PROCEED
            ) {
                if ((0, c.n)(n)) return void (0, l.hk)(n);
                o.Z.joinGuild(n, { source: y.vtS.GUILD_EVENT_EMBED }).catch(() => {});
            }
        };
    function R() {
        if ((0, c.n)(n)) return void (0, l.hk)(n);
        (null == A ? void 0 : A.isGuildStageVoice())
            ? (0, d.Cq)(A)
            : (null == A ? void 0 : A.isGuildVoice()) && E.Z.joinVoiceEvent(A.guild_id, A.id);
    }
    return (
        i.useEffect(() => {
            (null == T ? void 0 : T.id) == null && E.Z.fetchGuildEvent(n, O),
                m.Z.getGuildEventUserCounts(n, O, null != v ? [v] : []),
                m.Z.getGuildEventsForCurrentUser(n);
        }, [O, n, null == T ? void 0 : T.id, v]),
        (0, r.jsx)(b.ZP, {
            guild: S,
            channel: A,
            guildScheduledEvent: T,
            isMember: C,
            onAcceptInstantInvite: N,
            onTransitionToInviteChannel: R,
            recurrenceId: v,
        })
    );
}
