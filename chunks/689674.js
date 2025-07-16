n.d(t, { Z: () => d });
var r = n(73800),
    i = n(106351),
    l = n(442837),
    a = n(434650),
    o = n(430824),
    s = n(63205),
    c = n(529726),
    u = n(981631);
function d(e) {
    var t, n;
    let { message: d, channel: p, enabled: m = !0 } = e,
        f = (0, l.e7)(
            [o.Z],
            () => {
                var e;
                let t = o.Z.getGuild(p.guild_id);
                return null != (e = null == t ? void 0 : t.features.has(u.oNc.COMMUNITY)) && e;
            },
            [p.guild_id]
        ),
        _ = (null == (t = d.messageReference) ? void 0 : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != p.guild_id,
        h = p.type === i.d.GUILD_ANNOUNCEMENT && f,
        g = !d.hasFlag(u.iLy.EPHEMERAL) && (_ || h),
        b = _ && null != d.messageReference ? d.messageReference.message_id : d.id,
        E = _ && null != d.messageReference ? d.messageReference.channel_id : p.id,
        y = _ && (null == (n = d.messageReference) ? void 0 : n.guild_id) != null ? d.messageReference.guild_id : p.guild_id,
        C = r.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          messageId: b,
                          channelId: p.id,
                          guildId: p.guild_id,
                          sourceChannelId: E,
                          sourceGuildId: y
                      })
                    : c.Z.handleMessageLostVisibility(b);
            },
            [b, p.id, p.guild_id, E, y]
        ),
        x = s.Z.useExperiment(
            { location: '836a4b_1' },
            {
                disable: !g || !m,
                autoTrackExposure: !0
            }
        ).enabled,
        v = (0, a.O)(C, 0, x);
    return (
        r.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(b);
            },
            [b]
        ),
        v
    );
}
