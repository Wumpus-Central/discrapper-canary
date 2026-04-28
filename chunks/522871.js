l.d(s, { A: () => c });
var n = l(64700),
    i = l(172218),
    a = l(478437),
    d = l(17928),
    u = l(71393),
    t = l(732071),
    r = l(652215);
function c(e) {
    let { message: s, channel: l, enabled: c = !0 } = e,
        g = (0, d.bG)([u.A], () => {
            let e = u.A.getGuild(l.guild_id);
            return e?.features.has(r.GuildFeatures.COMMUNITY) ?? !1;
        }, [l.guild_id]),
        o =
            s.messageReference?.guild_id != null &&
            null != s.webhookId &&
            s.hasFlag(r.pr7.IS_CROSSPOST) &&
            null != l.guild_id,
        A = l.type === a.r.GUILD_ANNOUNCEMENT && g,
        h = !s.hasFlag(r.pr7.EPHEMERAL) && (o || A),
        p = o && null != s.messageReference ? s.messageReference.message_id : s.id,
        f = o && null != s.messageReference ? s.messageReference.channel_id : l.id,
        M = o && s.messageReference?.guild_id != null ? s.messageReference.guild_id : l.guild_id,
        N = n.useCallback(
            (e) => {
                e
                    ? t.A.handleMessageBecameVisible({
                          type: t.K.ANNOUNCEMENT,
                          messageId: p,
                          channelId: l.id,
                          guildId: l.guild_id,
                          sourceChannelId: f,
                          sourceGuildId: M,
                      })
                    : t.A.handleMessageLostVisibility(p, t.K.ANNOUNCEMENT);
            },
            [p, l.id, l.guild_id, f, M],
        ),
        m = (0, i.K)(N, 0, h && c);
    return (
        n.useEffect(
            () => () => {
                t.A.handleMessageLostVisibility(p, t.K.ANNOUNCEMENT);
            },
            [p],
        ),
        m
    );
}
