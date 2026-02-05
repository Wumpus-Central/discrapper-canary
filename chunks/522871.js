n.d(t, { A: () => u });
var i = n(64700),
    l = n(172218),
    a = n(478437),
    r = n(311907),
    s = n(71393),
    o = n(483649),
    d = n(732071),
    c = n(652215);
function u(e) {
    let { message: t, channel: n, enabled: u = !0 } = e,
        m = (0, r.bG)([s.A], () => {
            let e = s.A.getGuild(n.guild_id);
            return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1;
        }, [n.guild_id]),
        _ =
            t.messageReference?.guild_id != null &&
            null != t.webhookId &&
            t.hasFlag(c.pr7.IS_CROSSPOST) &&
            null != n.guild_id,
        h = n.type === a.r.GUILD_ANNOUNCEMENT && m,
        p = !t.hasFlag(c.pr7.EPHEMERAL) && (_ || h),
        g = _ && null != t.messageReference ? t.messageReference.message_id : t.id,
        A = _ && null != t.messageReference ? t.messageReference.channel_id : n.id,
        f = _ && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id,
        x = i.useCallback(
            (e) => {
                e
                    ? d.A.handleMessageBecameVisible({
                          type: d.K.ANNOUNCEMENT,
                          messageId: g,
                          channelId: n.id,
                          guildId: n.guild_id,
                          sourceChannelId: A,
                          sourceGuildId: f,
                      })
                    : d.A.handleMessageLostVisibility(g, d.K.ANNOUNCEMENT);
            },
            [g, n.id, n.guild_id, A, f],
        ),
        E = o.A.useExperiment({ location: "836a4b_1" }, { disable: !p || !u, autoTrackExposure: !0 }).enabled,
        C = (0, l.K)(x, 0, E);
    return (
        i.useEffect(
            () => () => {
                d.A.handleMessageLostVisibility(g, d.K.ANNOUNCEMENT);
            },
            [g],
        ),
        C
    );
}
