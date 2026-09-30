n.d(t, { o: () => h });
var l = n(730852),
    i = n(235393),
    s = n(376943),
    r = n(741231),
    a = n(734057),
    o = n(696451),
    u = n(71393),
    c = n(449054);
let d = (0, n(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var m = n(652215);
async function h(e, t, n) {
    if (null == t) return;
    if (
        (i.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }),
        null != e && !o.Ay.isCurrentUserGuest(e))
    ) {
        let l = u.A.getGuild(e);
        if (l?.joinedAt == null)
            try {
                await c.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let h = a.A.getChannel(t);
    if (null != h && null == n && h.isGuildVocal() && (0, s.nc)(h)) {
        let { navigateOnly: e } = d.getConfig({ location: "channel_mention" });
        if (!e) return void l.default.selectVoiceChannel(h.id);
    }
    (0, r.A)(m.BVt.CHANNEL(e, t, n));
}
