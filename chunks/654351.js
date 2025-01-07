i.d(n, {
    P5: function () {
        return d;
    },
    TJ: function () {
        return c;
    },
    UA: function () {
        return g;
    },
    d5: function () {
        return s;
    }
});
var e,
    r,
    l,
    s,
    u = i(626135),
    o = i(929834),
    a = i(981631);
function c(t, n) {
    let i = t.hasFeature(a.oNc.VERIFIED),
        e = t.hasFeature(a.oNc.DISCOVERABLE),
        r = t.hasFeature(a.oNc.ENABLED_DISCOVERABLE_BEFORE);
    if (i) return 'settings';
    if (!e && !r) return n.sufficient ? 'intro' : 'intro_ineligible';
    let l = n.sufficientWithoutGracePeriod && null != n.gracePeriodEndDate && n.gracePeriodEndDate > new Date();
    return n.sufficient || l || !e ? (n.sufficient || l ? 'settings' : 'intro_ineligible') : 'disqualified';
}
function g(t, n) {
    let i = !1,
        e = {
            guild_id: t.id,
            automatic: !1
        };
    (null == n || t.discoverySplash !== n.discoverySplash) && ((e.discovery_splash_edit_type = null == t.discoverySplash ? 'removed' : 'uploaded'), (i = !0)), (null == n || t.features.has(a.oNc.DISCOVERABLE) !== n.features.has(a.oNc.DISCOVERABLE)) && ((e.is_discoverable = t.features.has(a.oNc.DISCOVERABLE)), (i = !0)), (null == n || t.rulesChannelId !== n.rulesChannelId) && ((e.rules_channel_id = t.rulesChannelId), (i = !0)), i && u.default.track(a.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, e);
}
function d(t) {
    var n, i;
    return null !== (i = null === (n = o.U2[t]) || void 0 === n ? void 0 : n.map((t) => t())) && void 0 !== i ? i : [];
}
((e = l || (l = {})).UPLOADED = 'uploaded'), (e.REMOVED = 'removed'), ((r = s || (s = {})).INTRO = 'intro'), (r.INTRO_INELIGIBLE = 'intro_ineligible'), (r.DISQUALIFIED = 'disqualified'), (r.SETTINGS = 'settings');
