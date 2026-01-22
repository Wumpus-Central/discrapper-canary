n.d(t, {
    A: () => f,
});
var r = n(64700),
    i = n(172218),
    a = n(478437),
    s = n(311907),
    o = n(71393),
    l = n(483649),
    c = n(732071),
    u = n(652215);
let d = 0;

function f(e) {
    var t, n;
    let { message: f, channel: p, enabled: _ = !0 } = e,
        h = (0, s.bG)([o.A], () => {
            var e;
            let t = o.A.getGuild(p.guild_id);
            return null != (e = null == t ? void 0 : t.features.has(u.GuildFeatures.COMMUNITY)) && e;
        }, [p.guild_id]),
        m =
            (null == (t = f.messageReference) ? void 0 : t.guild_id) != null &&
            null != f.webhookId &&
            f.hasFlag(u.pr7.IS_CROSSPOST) &&
            null != p.guild_id,
        g = p.type === a.r.GUILD_ANNOUNCEMENT && h,
        E = !f.hasFlag(u.pr7.EPHEMERAL) && (m || g),
        b = m && null != f.messageReference ? f.messageReference.message_id : f.id,
        y = m && null != f.messageReference ? f.messageReference.channel_id : p.id,
        O =
            m && (null == (n = f.messageReference) ? void 0 : n.guild_id) != null
                ? f.messageReference.guild_id
                : p.guild_id,
        A = r.useCallback(
            (e) => {
                e
                    ? c.A.handleMessageBecameVisible({
                          type: c.K.ANNOUNCEMENT,
                          messageId: b,
                          channelId: p.id,
                          guildId: p.guild_id,
                          sourceChannelId: y,
                          sourceGuildId: O,
                      })
                    : c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT);
            },
            [b, p.id, p.guild_id, y, O],
        ),
        v = l.A.useExperiment(
            {
                location: "836a4b_1",
            },
            {
                disable: !E || !_,
                autoTrackExposure: !0,
            },
        ).enabled,
        S = (0, i.K)(A, d, v);
    return (
        r.useEffect(
            () => () => {
                c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT);
            },
            [b],
        ),
        S
    );
}
