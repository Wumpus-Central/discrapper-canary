n.d(t, { WA: () => c, _f: () => d });
var i = n(17928),
    l = n(793480),
    a = n(71393),
    s = n(576705),
    r = n(652215);
function o(e) {
    let t = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        n = (0, l.f)({ guildId: e?.guild_id, location: "VoiceChannelApp" });
    return (
        null != e && e.type === r.rbe.GUILD_VOICE && n && t?.features.has(r.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) !== !0
    );
}
function c(e) {
    return o(e) ? (e?.application_id ?? null) : null;
}
function d(e) {
    let t = o(e),
        n = (0, i.bG)([s.A], () => null != e && s.A.can(r.xBc.MANAGE_CHANNELS, e));
    return t && n;
}
