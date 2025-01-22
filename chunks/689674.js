n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    r = n(106351),
    l = n(442837),
    a = n(434650),
    o = n(430824),
    s = n(63205),
    c = n(529726),
    u = n(981631);
function d(e) {
    var t, n;
    let { message: d, channel: m, enabled: h = !0 } = e,
        f = (0, l.e7)(
            [o.Z],
            () => {
                var e;
                let t = o.Z.getGuild(m.guild_id);
                return null !== (e = null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY)) && void 0 !== e && e;
            },
            [m.guild_id]
        ),
        p = (null === (t = d.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != m.guild_id,
        _ = m.type === r.d.GUILD_ANNOUNCEMENT && f,
        g = !d.hasFlag(u.iLy.EPHEMERAL) && (p || _),
        E = p && null != d.messageReference ? d.messageReference.message_id : d.id,
        C = p && null != d.messageReference ? d.messageReference.channel_id : m.id,
        I = p && (null === (n = d.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? d.messageReference.guild_id : m.guild_id,
        x = i.useCallback(
            (e) => {
                e
                    ? c.Z.handleMessageBecameVisible({
                          messageId: E,
                          channelId: m.id,
                          guildId: m.guild_id,
                          sourceChannelId: C,
                          sourceGuildId: I
                      })
                    : c.Z.handleMessageLostVisibility(E);
            },
            [E, m.id, m.guild_id, C, I]
        ),
        N = s.Z.useExperiment(
            { location: '836a4b_1' },
            {
                disable: !g || !h,
                autoTrackExposure: !0
            }
        ).enabled,
        v = (0, a.O)(x, 0, N);
    return (
        i.useEffect(
            () => () => {
                c.Z.handleMessageLostVisibility(E);
            },
            [E]
        ),
        v
    );
}
