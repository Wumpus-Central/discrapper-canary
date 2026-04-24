"use strict";
n.d(t, { A: () => _ });
var s = n(64700),
    a = n(172218),
    r = n(478437),
    i = n(17928),
    l = n(71393),
    o = n(732071),
    c = n(652215);
function _(e) {
    let { message: t, channel: n, enabled: _ = !0 } = e,
        d = (0, i.bG)([l.A], () => {
            let e = l.A.getGuild(n.guild_id);
            return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1;
        }, [n.guild_id]),
        u =
            t.messageReference?.guild_id != null &&
            null != t.webhookId &&
            t.hasFlag(c.pr7.IS_CROSSPOST) &&
            null != n.guild_id,
        m = n.type === r.r.GUILD_ANNOUNCEMENT && d,
        g = !t.hasFlag(c.pr7.EPHEMERAL) && (u || m),
        f = u && null != t.messageReference ? t.messageReference.message_id : t.id,
        p = u && null != t.messageReference ? t.messageReference.channel_id : n.id,
        x = u && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id,
        h = s.useCallback(
            (e) => {
                e
                    ? o.A.handleMessageBecameVisible({
                          type: o.K.ANNOUNCEMENT,
                          messageId: f,
                          channelId: n.id,
                          guildId: n.guild_id,
                          sourceChannelId: p,
                          sourceGuildId: x,
                      })
                    : o.A.handleMessageLostVisibility(f, o.K.ANNOUNCEMENT);
            },
            [f, n.id, n.guild_id, p, x],
        ),
        b = (0, a.K)(h, 0, g && _);
    return (
        s.useEffect(
            () => () => {
                o.A.handleMessageLostVisibility(f, o.K.ANNOUNCEMENT);
            },
            [f],
        ),
        b
    );
}
