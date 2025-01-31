n.d(t, { Z: () => u });
var i = n(192379),
    l = n(106351),
    a = n(442837),
    r = n(434650),
    s = n(430824),
    o = n(63205),
    c = n(529726),
    d = n(981631);
function u(e) {
    var t, n;
    let { message: u, channel: m, enabled: h = !0 } = e,
        _ = (0, a.e7)(
            [s.Z],
            () => {
                var e;
                let t = s.Z.getGuild(m.guild_id);
                return null !== (e = null == t ? void 0 : t.hasFeature(d.oNc.COMMUNITY)) && void 0 !== e && e;
            },
            [m.guild_id]
        ),
        p = (null === (t = u.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != u.webhookId && u.hasFlag(d.iLy.IS_CROSSPOST) && null != m.guild_id,
        g = m.type === l.d.GUILD_ANNOUNCEMENT && _,
        f = !u.hasFlag(d.iLy.EPHEMERAL) && (p || g),
        x = p && null != u.messageReference ? u.messageReference.message_id : u.id,
        E = p && null != u.messageReference ? u.messageReference.channel_id : m.id,
        C = p && (null === (n = u.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? u.messageReference.guild_id : m.guild_id,
        v = i.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          messageId: x,
                          channelId: m.id,
                          guildId: m.guild_id,
                          sourceChannelId: E,
                          sourceGuildId: C
                      })
                    : c.Z.handleMessageLostVisibility(x);
            },
            [x, m.id, m.guild_id, E, C]
        ),
        I = o.Z.useExperiment(
            { location: '836a4b_1' },
            {
                disable: !f || !h,
                autoTrackExposure: !0
            }
        ).enabled,
        N = (0, r.O)(v, 0, I);
    return (
        i.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(x);
            },
            [x]
        ),
        N
    );
}
