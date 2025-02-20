n.d(t, { Z: () => a });
var r = n(267642),
    i = n(74538),
    o = n(474936);
function a(e, t, n, a) {
    if (null == e || (null == e.quality && null == e.guildPremiumTier) || (null == a ? void 0 : a.isHDStreamSplashed)) return !0;
    let s = !1;
    return null != e.quality && (e.quality === o.ys.HIGH_STREAMING_QUALITY ? (s = s || i.ZP.canStreamQuality(i.ZP.StreamQuality.HIGH, t)) : e.quality === o.ys.MID_STREAMING_QUALITY && (s = s || i.ZP.canStreamQuality(i.ZP.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, r.tb)(n, e.guildPremiumTier)), s;
}
