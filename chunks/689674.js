n.d(t, { Z: () => u });
var r = n(192379),
    i = n(106351),
    a = n(442837),
    o = n(434650),
    l = n(430824),
    s = n(63205),
    c = n(529726),
    d = n(981631);
function u(e) {
    var t, n;
    let { message: u, channel: p, enabled: m = !0 } = e,
        f = (0, a.e7)(
            [l.Z],
            () => {
                var e;
                let t = l.Z.getGuild(p.guild_id);
                return null !== (e = null == t ? void 0 : t.hasFeature(d.oNc.COMMUNITY)) && void 0 !== e && e;
            },
            [p.guild_id]
        ),
        h = (null === (t = u.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != u.webhookId && u.hasFlag(d.iLy.IS_CROSSPOST) && null != p.guild_id,
        g = p.type === i.d.GUILD_ANNOUNCEMENT && f,
        _ = !u.hasFlag(d.iLy.EPHEMERAL) && (h || g),
        b = h && null != u.messageReference ? u.messageReference.message_id : u.id,
        v = h && null != u.messageReference ? u.messageReference.channel_id : p.id,
        y = h && (null === (n = u.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? u.messageReference.guild_id : p.guild_id,
        x = r.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          messageId: b,
                          channelId: p.id,
                          guildId: p.guild_id,
                          sourceChannelId: v,
                          sourceGuildId: y
                      })
                    : c.Z.handleMessageLostVisibility(b);
            },
            [b, p.id, p.guild_id, v, y]
        ),
        O = s.Z.useExperiment(
            { location: '836a4b_1' },
            {
                disable: !_ || !m,
                autoTrackExposure: !0
            }
        ).enabled,
        E = (0, o.O)(x, 0, O);
    return (
        r.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(b);
            },
            [b]
        ),
        E
    );
}
