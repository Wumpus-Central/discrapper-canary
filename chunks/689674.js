n.d(t, { Z: () => d });
var r = n(192379),
    i = n(106351),
    a = n(442837),
    l = n(434650),
    o = n(430824),
    s = n(63205),
    c = n(529726),
    u = n(981631);
function d(e) {
    var t, n;
    let { message: d, channel: p, enabled: m = !0 } = e,
        f = (0, a.e7)(
            [o.Z],
            () => {
                var e;
                let t = o.Z.getGuild(p.guild_id);
                return null != (e = null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY)) && e;
            },
            [p.guild_id]
        ),
        h = (null == (t = d.messageReference) ? void 0 : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != p.guild_id,
        g = p.type === i.d.GUILD_ANNOUNCEMENT && f,
        _ = !d.hasFlag(u.iLy.EPHEMERAL) && (h || g),
        b = h && null != d.messageReference ? d.messageReference.message_id : d.id,
        x = h && null != d.messageReference ? d.messageReference.channel_id : p.id,
        y = h && (null == (n = d.messageReference) ? void 0 : n.guild_id) != null ? d.messageReference.guild_id : p.guild_id,
        E = r.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          messageId: b,
                          channelId: p.id,
                          guildId: p.guild_id,
                          sourceChannelId: x,
                          sourceGuildId: y
                      })
                    : c.Z.handleMessageLostVisibility(b);
            },
            [b, p.id, p.guild_id, x, y]
        ),
        v = s.Z.useExperiment(
            { location: '836a4b_1' },
            {
                disable: !_ || !m,
                autoTrackExposure: !0
            }
        ).enabled,
        O = (0, l.O)(E, 0, v);
    return (
        r.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(b);
            },
            [b]
        ),
        O
    );
}
