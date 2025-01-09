n.d(t, {
    P5: function () {
        return m;
    },
    TJ: function () {
        return d;
    },
    UA: function () {
        return u;
    },
    d5: function () {
        return s;
    }
});
var i,
    r,
    l,
    s,
    a = n(626135),
    o = n(929834),
    c = n(981631);
function d(e, t) {
    let n = e.hasFeature(c.oNc.VERIFIED),
        i = e.hasFeature(c.oNc.DISCOVERABLE),
        r = e.hasFeature(c.oNc.ENABLED_DISCOVERABLE_BEFORE);
    if (n) return 'settings';
    if (!i && !r) return 'intro';
    let l = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date();
    return t.sufficient || l || !i ? (t.sufficient || l ? 'settings' : 'intro') : 'disqualified';
}
function u(e, t) {
    let n = !1,
        i = {
            guild_id: e.id,
            automatic: !1
        };
    (null == t || e.discoverySplash !== t.discoverySplash) && ((i.discovery_splash_edit_type = null == e.discoverySplash ? 'removed' : 'uploaded'), (n = !0)), (null == t || e.features.has(c.oNc.DISCOVERABLE) !== t.features.has(c.oNc.DISCOVERABLE)) && ((i.is_discoverable = e.features.has(c.oNc.DISCOVERABLE)), (n = !0)), (null == t || e.rulesChannelId !== t.rulesChannelId) && ((i.rules_channel_id = e.rulesChannelId), (n = !0)), n && a.default.track(c.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, i);
}
function m(e) {
    var t, n;
    return null !== (n = null === (t = o.U2[e]) || void 0 === t ? void 0 : t.map((e) => e())) && void 0 !== n ? n : [];
}
((i = l || (l = {})).UPLOADED = 'uploaded'), (i.REMOVED = 'removed'), ((r = s || (s = {})).INTRO = 'intro'), (r.DISQUALIFIED = 'disqualified'), (r.SETTINGS = 'settings');
