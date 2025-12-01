n.d(t, { Z: () => f });
var r = n(473749),
    i = n(907331),
    a = n(106351),
    o = n(442837),
    s = n(430824),
    l = n(63205),
    c = n(765383),
    u = n(981631);
let d = 0;
function f(e) {
    var t, n;
    let { message: f, channel: p, enabled: _ = !0 } = e,
        m = (0, o.e7)([s.Z], () => {
            var e;
            let t = s.Z.getGuild(p.guild_id);
            return null != (e = null == t ? void 0 : t.features.has(u.GuildFeatures.COMMUNITY)) && e;
        }, [p.guild_id]),
        h =
            (null == (t = f.messageReference) ? void 0 : t.guild_id) != null &&
            null != f.webhookId &&
            f.hasFlag(u.iLy.IS_CROSSPOST) &&
            null != p.guild_id,
        g = p.type === a.d.GUILD_ANNOUNCEMENT && m,
        E = !f.hasFlag(u.iLy.EPHEMERAL) && (h || g),
        b = h && null != f.messageReference ? f.messageReference.message_id : f.id,
        y = h && null != f.messageReference ? f.messageReference.channel_id : p.id,
        O =
            h && (null == (n = f.messageReference) ? void 0 : n.guild_id) != null
                ? f.messageReference.guild_id
                : p.guild_id,
        v = r.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          type: c.k.ANNOUNCEMENT,
                          messageId: b,
                          channelId: p.id,
                          guildId: p.guild_id,
                          sourceChannelId: y,
                          sourceGuildId: O,
                      })
                    : c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT);
            },
            [b, p.id, p.guild_id, y, O],
        ),
        S = l.Z.useExperiment(
            { location: "836a4b_1" },
            {
                disable: !E || !_,
                autoTrackExposure: !0,
            },
        ).enabled,
        I = (0, i.O)(v, d, S);
    return (
        r.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT);
            },
            [b],
        ),
        I
    );
}
