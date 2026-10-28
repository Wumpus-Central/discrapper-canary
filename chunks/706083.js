(t.d(n, { o: () => g }), t(323874), t(14289), t(35956));
var l = t(730852),
    a = t(235393),
    i = t(376943),
    r = t(741231),
    s = t(734057),
    o = t(696451),
    c = t(71393),
    u = t(449054),
    d = t(935208);
let m = (0, t(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var h = t(652215),
    p = t(575279);
async function g(e, n, t, g) {
    if (null == n) return;
    if (
        (a.A.trackDiscordLinkClicked({ guildId: e, channelId: n, messageId: t }),
        null != e && !o.Ay.isCurrentUserGuest(e))
    ) {
        let l = c.A.getGuild(e);
        if (l?.joinedAt == null)
            try {
                await u.Z2(e, {}, { channelId: n, messageId: t });
                return;
            } catch {}
    }
    let f = s.A.getChannel(n);
    if (null != f && null == t && f.isGuildVocal() && (0, i.nc)(f)) {
        let { navigateOnly: e } = m.getConfig({ location: "channel_mention" });
        if (!e) return void l.default.selectVoiceChannel(f.id);
    }
    let x = new URLSearchParams();
    (null != g && d.default.isProbablyAValidSnowflake(g) && x.append(p.Nl, g),
        (0, r.A)(h.BVt.CHANNEL(e, n, t), { search: x.toString() }));
}
