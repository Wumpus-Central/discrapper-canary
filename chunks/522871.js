n.d(t, { A: () => d });
var i = n(64700),
    a = n(172218),
    l = n(478437),
    r = n(311907),
    s = n(71393),
    o = n(732071),
    c = n(652215);
function d(e) {
    let { message: t, channel: n, enabled: d = !0 } = e,
        u = (0, r.bG)([s.A], () => {
            let e = s.A.getGuild(n.guild_id);
            return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1;
        }, [n.guild_id]),
        _ =
            t.messageReference?.guild_id != null &&
            null != t.webhookId &&
            t.hasFlag(c.pr7.IS_CROSSPOST) &&
            null != n.guild_id,
        m = n.type === l.r.GUILD_ANNOUNCEMENT && u,
        A = !t.hasFlag(c.pr7.EPHEMERAL) && (_ || m),
        E = _ && null != t.messageReference ? t.messageReference.message_id : t.id,
        I = _ && null != t.messageReference ? t.messageReference.channel_id : n.id,
        T = _ && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id,
        f = i.useCallback(
            (e) => {
                e
                    ? o.A.handleMessageBecameVisible({
                          type: o.K.ANNOUNCEMENT,
                          messageId: E,
                          channelId: n.id,
                          guildId: n.guild_id,
                          sourceChannelId: I,
                          sourceGuildId: T,
                      })
                    : o.A.handleMessageLostVisibility(E, o.K.ANNOUNCEMENT);
            },
            [E, n.id, n.guild_id, I, T],
        ),
        N = (0, a.K)(f, 0, A && d);
    return (
        i.useEffect(
            () => () => {
                o.A.handleMessageLostVisibility(E, o.K.ANNOUNCEMENT);
            },
            [E],
        ),
        N
    );
}
