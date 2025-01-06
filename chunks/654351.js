i.d(n, {
    P5: function () {
        return g;
    },
    TJ: function () {
        return c;
    },
    UA: function () {
        return d;
    },
    d5: function () {
        return r;
    }
}),
    i(47120),
    i(192379),
    i(442837),
    i(430824);
var e,
    r,
    l,
    s,
    u = i(626135);
i(209054), i(118215);
var o = i(929834),
    a = i(981631);
function c(t, n) {
    let i = t.hasFeature(a.oNc.VERIFIED),
        e = t.hasFeature(a.oNc.DISCOVERABLE),
        r = t.hasFeature(a.oNc.ENABLED_DISCOVERABLE_BEFORE);
    if (i) return 'settings';
    if (!e && !r) return 'intro';
    if (null == n) return 'settings';
    let l = n.sufficientWithoutGracePeriod && null != n.gracePeriodEndDate && n.gracePeriodEndDate > new Date();
    return n.sufficient || l || !e ? (n.sufficient || l ? 'settings' : 'intro') : 'disqualified';
}
function d(t, n) {
    let i = !1,
        e = {
            guild_id: t.id,
            automatic: !1
        };
    (null == n || t.discoverySplash !== n.discoverySplash) && ((e.discovery_splash_edit_type = null == t.discoverySplash ? 'removed' : 'uploaded'), (i = !0)), (null == n || t.features.has(a.oNc.DISCOVERABLE) !== n.features.has(a.oNc.DISCOVERABLE)) && ((e.is_discoverable = t.features.has(a.oNc.DISCOVERABLE)), (i = !0)), (null == n || t.rulesChannelId !== n.rulesChannelId) && ((e.rules_channel_id = t.rulesChannelId), (i = !0)), i && u.default.track(a.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, e);
}
function g(t) {
    var n, i;
    return null !== (i = null === (n = o.U2[t]) || void 0 === n ? void 0 : n.map((t) => t())) && void 0 !== i ? i : [];
}
((l = e || (e = {})).UPLOADED = 'uploaded'), (l.REMOVED = 'removed'), ((s = r || (r = {})).INTRO = 'intro'), (s.DISQUALIFIED = 'disqualified'), (s.SETTINGS = 'settings');
