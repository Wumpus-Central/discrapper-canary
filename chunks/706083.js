t.d(n, { o: () => h });
var l = t(730852),
    r = t(235393),
    a = t(376943),
    i = t(741231),
    o = t(734057),
    s = t(696451),
    c = t(71393),
    u = t(449054);
let d = (0, t(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var m = t(652215);
async function h(e, n, t) {
    if (null == n) return;
    if (
        (r.A.trackDiscordLinkClicked({ guildId: e, channelId: n, messageId: t }),
        null != e && !s.Ay.isCurrentUserGuest(e))
    ) {
        let l = c.A.getGuild(e);
        if (l?.joinedAt == null)
            try {
                await u.Z2(e, {}, { channelId: n, messageId: t });
                return;
            } catch {}
    }
    let h = o.A.getChannel(n);
    if (null != h && null == t && h.isGuildVocal() && (0, a.nc)(h)) {
        let { navigateOnly: e } = d.getConfig({ location: "channel_mention" });
        if (!e) return void l.default.selectVoiceChannel(h.id);
    }
    (0, i.A)(m.BVt.CHANNEL(e, n, t));
}
