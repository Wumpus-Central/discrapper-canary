r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(267642),
    a = r(74538),
    o = r(474936);
function s(e, n, r, s) {
    if (null == e || (null == e.quality && null == e.guildPremiumTier) || (null == s ? void 0 : s.isHDStreamSplashed)) return !0;
    let l = !1;
    return null != e.quality && (e.quality === o.ys.HIGH_STREAMING_QUALITY ? (l = l || a.ZP.canStreamQuality(a.ZP.StreamQuality.HIGH, n)) : e.quality === o.ys.MID_STREAMING_QUALITY && (l = l || a.ZP.canStreamQuality(a.ZP.StreamQuality.MID, n))), null != e.guildPremiumTier && (l = l || (0, i.tb)(r, e.guildPremiumTier)), l;
}
