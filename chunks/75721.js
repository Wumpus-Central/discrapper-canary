var l = n(855986),
    t = n(499466),
    e = n(71393),
    d = n(576705),
    a = n(652215);
function c(u) {
    let i = (0, l.bG)([e.A], () => e.A.getGuild(u?.guild_id)),
        n = (0, t.m0)({ guildId: u?.guild_id, location: "VoiceChannelApp" });
    return (
        null != u && u.type === a.rbe.GUILD_VOICE && n && i?.features.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) !== !0
    );
}
n.d(
    i,
    {},
    {
        WA: function (u) {
            return c(u) ? (u?.application_id ?? null) : null;
        },
        _f: function (u) {
            let i = c(u),
                n = (0, l.bG)([d.A], () => null != u && d.A.can(a.xBc.MANAGE_CHANNELS, u));
            return i && n;
        },
    },
);
