n.d(t, { Z: () => s });
var i = n(267642),
    r = n(74538),
    a = n(474936);
function s(e, t, n, s) {
    if (null == e || (null == e.quality && null == e.guildPremiumTier) || (null == s ? void 0 : s.isHDStreamSplashed)) return !0;
    let o = !1;
    return null != e.quality && (e.quality === a.ys.HIGH_STREAMING_QUALITY ? (o = o || r.ZP.canStreamQuality(r.ZP.StreamQuality.HIGH, t)) : e.quality === a.ys.MID_STREAMING_QUALITY && (o = o || r.ZP.canStreamQuality(r.ZP.StreamQuality.MID, t))), null != e.guildPremiumTier && (o = o || (0, i.tb)(n, e.guildPremiumTier)), o;
}
