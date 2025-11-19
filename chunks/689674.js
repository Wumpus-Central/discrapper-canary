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
    let { message: f, channel: _, enabled: p = !0 } = e,
        h = (0, o.e7)([s.Z], () => {
            var e;
            let t = s.Z.getGuild(_.guild_id);
            return null != (e = null == t ? void 0 : t.features.has(u.GuildFeatures.COMMUNITY)) && e;
        }, [_.guild_id]),
        m =
            (null == (t = f.messageReference) ? void 0 : t.guild_id) != null &&
            null != f.webhookId &&
            f.hasFlag(u.iLy.IS_CROSSPOST) &&
            null != _.guild_id,
        g = _.type === a.d.GUILD_ANNOUNCEMENT && h,
        E = !f.hasFlag(u.iLy.EPHEMERAL) && (m || g),
        b = m && null != f.messageReference ? f.messageReference.message_id : f.id,
        y = m && null != f.messageReference ? f.messageReference.channel_id : _.id,
        O =
            m && (null == (n = f.messageReference) ? void 0 : n.guild_id) != null
                ? f.messageReference.guild_id
                : _.guild_id,
        v = r.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          type: c.k.ANNOUNCEMENT,
                          messageId: b,
                          channelId: _.id,
                          guildId: _.guild_id,
                          sourceChannelId: y,
                          sourceGuildId: O,
                      })
                    : c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT);
            },
            [b, _.id, _.guild_id, y, O],
        ),
        I = l.Z.useExperiment(
            { location: "836a4b_1" },
            {
                disable: !E || !p,
                autoTrackExposure: !0,
            },
        ).enabled,
        T = (0, i.O)(v, d, I);
    return (
        r.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT);
            },
            [b],
        ),
        T
    );
}
