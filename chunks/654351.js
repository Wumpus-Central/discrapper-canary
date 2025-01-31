n.d(t, {
    P5: () => d,
    TJ: () => o,
    UA: () => c,
    d5: () => a
});
var i,
    r = n(626135),
    l = n(929834),
    s = n(981631),
    a = (((i = {}).INTRO = 'intro'), (i.DISQUALIFIED = 'disqualified'), (i.SETTINGS = 'settings'), i);
function o(e, t) {
    let n = e.hasFeature(s.oNc.VERIFIED),
        i = e.hasFeature(s.oNc.DISCOVERABLE),
        r = e.hasFeature(s.oNc.ENABLED_DISCOVERABLE_BEFORE);
    if (n) return 'settings';
    if (!i && !r) return 'intro';
    let l = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date();
    return t.sufficient || l || !i ? (t.sufficient || l ? 'settings' : 'intro') : 'disqualified';
}
function c(e, t) {
    let n = !1,
        i = {
            guild_id: e.id,
            automatic: !1
        };
    (null == t || e.discoverySplash !== t.discoverySplash) && ((i.discovery_splash_edit_type = null == e.discoverySplash ? 'removed' : 'uploaded'), (n = !0)), (null == t || e.features.has(s.oNc.DISCOVERABLE) !== t.features.has(s.oNc.DISCOVERABLE)) && ((i.is_discoverable = e.features.has(s.oNc.DISCOVERABLE)), (n = !0)), (null == t || e.rulesChannelId !== t.rulesChannelId) && ((i.rules_channel_id = e.rulesChannelId), (n = !0)), n && r.default.track(s.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, i);
}
function d(e) {
    var t, n;
    return null !== (n = null === (t = l.U2[e]) || void 0 === t ? void 0 : t.map((e) => e())) && void 0 !== n ? n : [];
}
