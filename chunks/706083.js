(t.d(n, { o: () => f }), t(323874), t(14289), t(35956));
var l = t(730852),
    a = t(448741),
    i = t(235393),
    r = t(376943),
    s = t(741231),
    o = t(734057),
    c = t(696451),
    u = t(71393),
    d = t(449054),
    m = t(935208);
let h = (0, t(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var p = t(652215),
    g = t(575279);
async function f(e, n, t, f) {
    if (null == n) return;
    if (
        (i.A.trackDiscordLinkClicked({ guildId: e, channelId: n, messageId: t }),
        null != e && !c.Ay.isCurrentUserGuest(e))
    ) {
        let l = u.A.getGuild(e);
        if (l?.joinedAt == null)
            try {
                await d.Z2(e, {}, { channelId: n, messageId: t });
                return;
            } catch (e) {
                if (e instanceof a.w) return;
            }
    }
    let x = o.A.getChannel(n);
    if (null != x && null == t && x.isGuildVocal() && (0, r.nc)(x)) {
        let { navigateOnly: e } = h.getConfig({ location: "channel_mention" });
        if (!e) return void l.default.selectVoiceChannel(x.id);
    }
    let j = new URLSearchParams();
    (null != f && m.default.isProbablyAValidSnowflake(f) && j.append(g.Nl, f),
        (0, s.A)(p.BVt.CHANNEL(e, n, t), { search: j.toString() }));
}
