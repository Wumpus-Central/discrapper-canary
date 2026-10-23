n.d(t, { A: () => l });
var i = n(371169),
    r = n(734057),
    a = n(576705),
    s = n(652215);
async function l(e) {
    let { preferredChannelId: t, fallback: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = null != t ? r.A.getChannel(t) : null;
    if (null != l && l.type === s.rbe.GUILD_APP && l.application_id === e && a.A.can(s.xBc.VIEW_CHANNEL, l))
        return { guildId: l.guild_id, channelId: l.id };
    let o = null != t && null == l;
    if (!o && !n) return null;
    let d = await (0, i.l5)(e),
        c = (o ? d.find((e) => e.channel_id === t) : void 0) ?? (n ? d[0] : void 0);
    return null != c ? { guildId: c.guild_id, channelId: c.channel_id } : null;
}
