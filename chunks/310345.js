n.d(t, {
    dl: () => s,
    hV: () => a,
});
var r = n(954571),
    i = n(814758),
    l = n(652215);

function s(e, t) {
    let n = !1,
        i = {
            guild_id: e.id,
            automatic: !1,
        };
    (null == t || e.discoverySplash !== t.discoverySplash) &&
        ((i.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded"), (n = !0)),
        (null == t || e.features.has(l.GuildFeatures.DISCOVERABLE) !== t.features.has(l.GuildFeatures.DISCOVERABLE)) &&
            ((i.is_discoverable = e.features.has(l.GuildFeatures.DISCOVERABLE)), (n = !0)),
        (null == t || e.rulesChannelId !== t.rulesChannelId) && ((i.rules_channel_id = e.rulesChannelId), (n = !0)),
        n && r.default.track(l.HAw.GUILD_SETTINGS_DISCOVERY_UPDATED, i);
}

function a(e) {
    var t, n;
    return null != (t = null == (n = i.Dz[e]) ? void 0 : n.map((e) => e())) ? t : [];
}
