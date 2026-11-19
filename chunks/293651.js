var i = n(855986),
    r = n(652896),
    l = n(734057),
    s = n(71393);
function a(e, t) {
    return !(null == e || e.isGuildStageVoice()) && (t?.features.has("AV_INFRA_REARCH") ?? !1);
}
n.d(
    t,
    {},
    {
        B: function (e) {
            let { guildId: t, channelId: n } = (0, r.Iy)(e);
            return (0, i.bG)([l.A, s.A], () => a(l.A.getChannel(n), null == t ? void 0 : s.A.getGuild(t)), [n, t]);
        },
        E: function (e) {
            let { guildId: t, channelId: n } = (0, r.Iy)(e);
            return null != t && a(l.A.getChannel(n), s.A.getGuild(t));
        },
    },
);
