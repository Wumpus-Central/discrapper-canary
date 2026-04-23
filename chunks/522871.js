"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(172218),
    l = n(478437),
    s = n(311907),
    a = n(71393),
    o = n(732071),
    c = n(652215);
function u(e) {
    let { message: t, channel: n, enabled: u = !0 } = e,
        d = (0, s.bG)([a.A], () => {
            let e = a.A.getGuild(n.guild_id);
            return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1;
        }, [n.guild_id]),
        _ =
            t.messageReference?.guild_id != null &&
            null != t.webhookId &&
            t.hasFlag(c.pr7.IS_CROSSPOST) &&
            null != n.guild_id,
        E = n.type === l.r.GUILD_ANNOUNCEMENT && d,
        A = !t.hasFlag(c.pr7.EPHEMERAL) && (_ || E),
        m = _ && null != t.messageReference ? t.messageReference.message_id : t.id,
        I = _ && null != t.messageReference ? t.messageReference.channel_id : n.id,
        T = _ && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id,
        N = i.useCallback(
            (e) => {
                e
                    ? o.A.handleMessageBecameVisible({
                          type: o.K.ANNOUNCEMENT,
                          messageId: m,
                          channelId: n.id,
                          guildId: n.guild_id,
                          sourceChannelId: I,
                          sourceGuildId: T,
                      })
                    : o.A.handleMessageLostVisibility(m, o.K.ANNOUNCEMENT);
            },
            [m, n.id, n.guild_id, I, T],
        ),
        g = (0, r.K)(N, 0, A && u);
    return (
        i.useEffect(
            () => () => {
                o.A.handleMessageLostVisibility(m, o.K.ANNOUNCEMENT);
            },
            [m],
        ),
        g
    );
}
