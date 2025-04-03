n.d(t, {
    P5: () => d,
    TJ: () => o,
    UA: () => c,
    d5: () => l
});
var r,
    i = n(626135),
    s = n(929834),
    a = n(981631),
    l = (((r = {}).INTRO = 'intro'), (r.DISQUALIFIED = 'disqualified'), (r.SETTINGS = 'settings'), r);
function o(e, t) {
    let n = e.hasFeature(a.oNc.VERIFIED),
        r = e.hasFeature(a.oNc.DISCOVERABLE),
        i = e.hasFeature(a.oNc.ENABLED_DISCOVERABLE_BEFORE);
    if (n) return 'settings';
    if (!r && !i) return 'intro';
    let s = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date();
    return t.sufficient || s || !r ? (t.sufficient || s ? 'settings' : 'intro') : 'disqualified';
}
function c(e, t) {
    let n = !1,
        r = {
            guild_id: e.id,
            automatic: !1
        };
    (null == t || e.discoverySplash !== t.discoverySplash) && ((r.discovery_splash_edit_type = null == e.discoverySplash ? 'removed' : 'uploaded'), (n = !0)), (null == t || e.features.has(a.oNc.DISCOVERABLE) !== t.features.has(a.oNc.DISCOVERABLE)) && ((r.is_discoverable = e.features.has(a.oNc.DISCOVERABLE)), (n = !0)), (null == t || e.rulesChannelId !== t.rulesChannelId) && ((r.rules_channel_id = e.rulesChannelId), (n = !0)), n && i.default.track(a.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, r);
}
function d(e) {
    var t, n;
    return null != (n = null == (t = s.U2[e]) ? void 0 : t.map((e) => e())) ? n : [];
}
