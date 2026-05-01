"use strict";
n.d(t, { o: () => f });
var i = n(730852),
    r = n(235393),
    s = n(376943),
    a = n(741231),
    o = n(734057),
    l = n(696451),
    u = n(71393),
    c = n(449054);
let d = (0, n(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var _ = n(652215);
async function f(e, t, n) {
    if (null == t) return;
    if (
        (r.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }),
        null != e && !l.Ay.isCurrentUserGuest(e))
    ) {
        let i = u.A.getGuild(e);
        if (i?.joinedAt == null)
            try {
                await c.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let f = o.A.getChannel(t);
    if (null != f && null == n && f.isGuildVocal() && (0, s.nc)(f)) {
        let { navigateOnly: e } = d.getConfig({ location: "channel_mention" });
        if (!e) return void i.default.selectVoiceChannel(f.id);
    }
    (0, a.A)(_.BVt.CHANNEL(e, t, n));
}
