n.d(t, { dl: () => r, hV: () => a });
var i = n(954571),
    l = n(814758),
    s = n(652215);
function r(e, t) {
    let n = !1,
        l = { guild_id: e.id, automatic: !1 };
    (null == t || e.discoverySplash !== t.discoverySplash) &&
        ((l.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded"), (n = !0)),
        (null == t || e.features.has(s.GuildFeatures.DISCOVERABLE) !== t.features.has(s.GuildFeatures.DISCOVERABLE)) &&
            ((l.is_discoverable = e.features.has(s.GuildFeatures.DISCOVERABLE)), (n = !0)),
        (null == t || e.rulesChannelId !== t.rulesChannelId) && ((l.rules_channel_id = e.rulesChannelId), (n = !0)),
        n && i.default.track(s.HAw.GUILD_SETTINGS_DISCOVERY_UPDATED, l);
}
function a(e) {
    return l.Dz[e]?.map((e) => e()) ?? [];
}
