var i = n(855986),
    r = n(652896),
    a = n(734057),
    s = n(71393);
function l(e, t) {
    return !(null == e || e.isGuildStageVoice()) && (t?.features.has("AV_INFRA_REARCH") ?? !1);
}
n.d(
    t,
    {},
    {
        BC: function (e) {
            let { guildId: t, channelId: n } = (0, r.Iy)(e);
            return (0, i.bG)([a.A, s.A], () => l(a.A.getChannel(n), null == t ? void 0 : s.A.getGuild(t)), [n, t]);
        },
        EG: function (e) {
            let { guildId: t, channelId: n } = (0, r.Iy)(e);
            return null != t && l(a.A.getChannel(n), s.A.getGuild(t));
        },
        HB: l,
    },
);
