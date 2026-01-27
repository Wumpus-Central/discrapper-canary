n.d(t, {
    A: () => d,
});
var r = n(64700),
    i = n(172218),
    l = n(478437),
    a = n(311907),
    s = n(71393),
    o = n(483649),
    c = n(732071),
    u = n(652215);

function d(e) {
    var t, n;
    let { message: d, channel: p, enabled: m = !0 } = e,
        f = (0, a.bG)([s.A], () => {
            var e;
            let t = s.A.getGuild(p.guild_id);
            return null != (e = null == t ? void 0 : t.features.has(u.GuildFeatures.COMMUNITY)) && e;
        }, [p.guild_id]),
        g =
            (null == (t = d.messageReference) ? void 0 : t.guild_id) != null &&
            null != d.webhookId &&
            d.hasFlag(u.pr7.IS_CROSSPOST) &&
            null != p.guild_id,
        h = p.type === l.r.GUILD_ANNOUNCEMENT && f,
        _ = !d.hasFlag(u.pr7.EPHEMERAL) && (g || h),
        b = g && null != d.messageReference ? d.messageReference.message_id : d.id,
        A = g && null != d.messageReference ? d.messageReference.channel_id : p.id,
        y =
            g && (null == (n = d.messageReference) ? void 0 : n.guild_id) != null
                ? d.messageReference.guild_id
                : p.guild_id,
        v = r.useCallback(
            (e) => {
                e
                    ? c.A.handleMessageBecameVisible({
                          type: c.K.ANNOUNCEMENT,
                          messageId: b,
                          channelId: p.id,
                          guildId: p.guild_id,
                          sourceChannelId: A,
                          sourceGuildId: y,
                      })
                    : c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT);
            },
            [b, p.id, p.guild_id, A, y],
        ),
        x = o.A.useExperiment(
            {
                location: "836a4b_1",
            },
            {
                disable: !_ || !m,
                autoTrackExposure: !0,
            },
        ).enabled,
        O = (0, i.K)(v, 0, x);
    return (
        r.useEffect(
            () => () => {
                c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT);
            },
            [b],
        ),
        O
    );
}
