n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(66834),
    r = n(688810),
    o = n(202384),
    c = n(51758),
    d = n(665066),
    u = n(9588),
    m = n(790535),
    h = n(734057),
    g = n(696451),
    p = n(71393),
    A = n(287809),
    x = n(285059),
    f = n(698441),
    E = n(496092),
    C = n(427080),
    _ = n(652215);
function I(e) {
    let { code: t } = e,
        [n, I, v] = t.split("-"),
        { analyticsLocations: N } = (0, r.Ay)(),
        {
            guildScheduledEvent: j,
            guild: T,
            channel: S,
            isMember: y,
        } = (0, s.cf)([f.Ay, p.A, h.A, g.Ay, A.default], () => {
            let e = f.Ay.getGuildScheduledEvent(I) ?? void 0,
                t = p.A.getGuild(n),
                i = h.A.getChannel(e?.channel_id);
            return {
                guildScheduledEvent: e,
                guild: t,
                channel: i,
                isMember: g.Ay.isMember(n, A.default.getCurrentUser()?.id),
            };
        }, [n, I]);
    return (
        l.useEffect(() => {
            j?.id == null && E.default.fetchGuildEvent(n, I),
                x.A.getGuildEventUserCounts(n, I, null != v ? [v] : []),
                x.A.getGuildEventsForCurrentUser(n);
        }, [I, n, j?.id, v]),
        (0, i.jsx)(C.Ay, {
            guild: T,
            channel: S,
            guildScheduledEvent: j,
            isMember: y,
            onAcceptInstantInvite: function () {
                if ((0, d.g)({ guild: T, isMember: y, analyticsLocations: N }) === d.W.PROCEED) {
                    if ((0, c.V)(n)) return void (0, o.Ze)(n);
                    a.A.joinGuild(n, { source: _.Q4z.GUILD_EVENT_EMBED }).catch((e) => {
                        e.body?.code === _.t02.UNKNOWN_GUILD && (0, u.showInaccessibleLinkModal)({ kind: "channel" });
                    });
                }
            },
            onTransitionToInviteChannel: function () {
                (0, c.V)(n)
                    ? (0, o.Ze)(n)
                    : S?.isGuildStageVoice()
                      ? (0, m.av)(S)
                      : S?.isGuildVoice() && E.default.joinVoiceEvent(S.guild_id, S.id);
            },
            recurrenceId: v,
        })
    );
}
