"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(172218),
    s = n(478437),
    l = n(311907),
    a = n(71393),
    c = n(732071),
    o = n(652215);
function u(e) {
    let { message: t, channel: n, enabled: u = !0 } = e,
        d = (0, l.bG)([a.A], () => {
            let e = a.A.getGuild(n.guild_id);
            return e?.features.has(o.GuildFeatures.COMMUNITY) ?? !1;
        }, [n.guild_id]),
        _ =
            t.messageReference?.guild_id != null &&
            null != t.webhookId &&
            t.hasFlag(o.pr7.IS_CROSSPOST) &&
            null != n.guild_id,
        E = n.type === s.r.GUILD_ANNOUNCEMENT && d,
        A = !t.hasFlag(o.pr7.EPHEMERAL) && (_ || E),
        m = _ && null != t.messageReference ? t.messageReference.message_id : t.id,
        I = _ && null != t.messageReference ? t.messageReference.channel_id : n.id,
        T = _ && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id,
        g = i.useCallback(
            (e) => {
                e
                    ? c.A.handleMessageBecameVisible({
                          type: c.K.ANNOUNCEMENT,
                          messageId: m,
                          channelId: n.id,
                          guildId: n.guild_id,
                          sourceChannelId: I,
                          sourceGuildId: T,
                      })
                    : c.A.handleMessageLostVisibility(m, c.K.ANNOUNCEMENT);
            },
            [m, n.id, n.guild_id, I, T],
        ),
        N = (0, r.K)(g, 0, A && u);
    return (
        i.useEffect(
            () => () => {
                c.A.handleMessageLostVisibility(m, c.K.ANNOUNCEMENT);
            },
            [m],
        ),
        N
    );
}
