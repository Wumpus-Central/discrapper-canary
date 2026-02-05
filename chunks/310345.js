"use strict";
n.d(t, { dl: () => r, hV: () => a });
var i = n(954571),
    s = n(814758),
    l = n(652215);
function r(e, t) {
    let n = !1,
        s = { guild_id: e.id, automatic: !1 };
    (null == t || e.discoverySplash !== t.discoverySplash) &&
        ((s.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded"), (n = !0)),
        (null == t || e.features.has(l.GuildFeatures.DISCOVERABLE) !== t.features.has(l.GuildFeatures.DISCOVERABLE)) &&
            ((s.is_discoverable = e.features.has(l.GuildFeatures.DISCOVERABLE)), (n = !0)),
        (null == t || e.rulesChannelId !== t.rulesChannelId) && ((s.rules_channel_id = e.rulesChannelId), (n = !0)),
        n && i.default.track(l.HAw.GUILD_SETTINGS_DISCOVERY_UPDATED, s);
}
function a(e) {
    return s.Dz[e]?.map((e) => e()) ?? [];
}
