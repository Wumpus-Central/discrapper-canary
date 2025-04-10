n.d(t, {
    P5: () => l,
    UA: () => a
});
var r = n(626135),
    i = n(929834),
    s = n(981631);
function a(e, t) {
    let n = !1,
        i = {
            guild_id: e.id,
            automatic: !1
        };
    (null == t || e.discoverySplash !== t.discoverySplash) && ((i.discovery_splash_edit_type = null == e.discoverySplash ? 'removed' : 'uploaded'), (n = !0)), (null == t || e.features.has(s.oNc.DISCOVERABLE) !== t.features.has(s.oNc.DISCOVERABLE)) && ((i.is_discoverable = e.features.has(s.oNc.DISCOVERABLE)), (n = !0)), (null == t || e.rulesChannelId !== t.rulesChannelId) && ((i.rules_channel_id = e.rulesChannelId), (n = !0)), n && r.default.track(s.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, i);
}
function l(e) {
    var t, n;
    return null != (n = null == (t = i.U2[e]) ? void 0 : t.map((e) => e())) ? n : [];
}
