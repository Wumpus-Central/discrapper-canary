n.d(t, {
    P5: () => a,
    UA: () => s
});
var r = n(626135),
    i = n(929834),
    l = n(981631);
function s(e, t) {
    let n = !1,
        i = {
            guild_id: e.id,
            automatic: !1
        };
    (null == t || e.discoverySplash !== t.discoverySplash) && ((i.discovery_splash_edit_type = null == e.discoverySplash ? 'removed' : 'uploaded'), (n = !0)), (null == t || e.features.has(l.oNc.DISCOVERABLE) !== t.features.has(l.oNc.DISCOVERABLE)) && ((i.is_discoverable = e.features.has(l.oNc.DISCOVERABLE)), (n = !0)), (null == t || e.rulesChannelId !== t.rulesChannelId) && ((i.rules_channel_id = e.rulesChannelId), (n = !0)), n && r.default.track(l.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, i);
}
function a(e) {
    var t, n;
    return null != (n = null == (t = i.U2[e]) ? void 0 : t.map((e) => e())) ? n : [];
}
