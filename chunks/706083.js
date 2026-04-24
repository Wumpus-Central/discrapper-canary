"use strict";
n.d(t, { o: () => m });
var l = n(956793),
    i = n(235393),
    s = n(376943),
    a = n(22007),
    r = n(734057),
    o = n(696451),
    c = n(71393),
    u = n(449054);
let d = (0, n(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var h = n(652215);
async function m(e, t, n) {
    if (null == t) return;
    if (
        (i.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }),
        null != e && !o.Ay.isCurrentUserGuest(e))
    ) {
        let l = c.A.getGuild(e);
        if (l?.joinedAt == null)
            try {
                await u.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let m = r.A.getChannel(t);
    if (null != m && null == n && m.isGuildVocal() && (0, s.nc)(m)) {
        let { navigateOnly: e } = d.getConfig({ location: "channel_mention" });
        if (!e) return void l.default.selectVoiceChannel(m.id);
    }
    (0, a.A)(h.BVt.CHANNEL(e, t, n));
}
