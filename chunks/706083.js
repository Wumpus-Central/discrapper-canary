"use strict";
n.d(t, { o: () => E });
var i = n(956793),
    r = n(235393),
    s = n(376943),
    a = n(22007),
    o = n(734057),
    l = n(696451),
    d = n(71393),
    _ = n(449054);
let u = (0, n(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
});
var c = n(652215);
async function E(e, t, n) {
    if (null == t) return;
    if (
        (r.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }),
        null != e && !l.Ay.isCurrentUserGuest(e))
    ) {
        let i = d.A.getGuild(e);
        if (i?.joinedAt == null)
            try {
                await _.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let E = o.A.getChannel(t);
    if (null != E && null == n && E.isGuildVocal() && (0, s.nc)(E)) {
        let { navigateOnly: e } = u.getConfig({ location: "channel_mention" });
        if (!e) return void i.default.selectVoiceChannel(E.id);
    }
    (0, a.A)(c.BVt.CHANNEL(e, t, n));
}
