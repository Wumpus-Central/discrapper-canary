n.d(t, {
    P5: () => s,
    UA: () => a,
});
var r = n(626135),
    i = n(929834),
    l = n(981631);
function a(e, t) {
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
        n && r.default.track(l.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, i);
}
function s(e) {
    var t, n;
    return null != (n = null == (t = i.U2[e]) ? void 0 : t.map((e) => e())) ? n : [];
}
