"use strict";
n.d(t, { A: () => l });
var i = n(258585),
    r = n(473145),
    s = n(927578),
    a = n(788868),
    o = n(753070);
function l(e, t, n, l, d, _) {
    if (e === o.jQ.PRESET_AUTO) return (0, i.eO)({ location: "canStreamWithSettings" }).allowAutoQuality;
    for (let i of o.ZV)
        if (
            (null == i.preset || e === i.preset) &&
            t === i.resolution &&
            n === i.fps &&
            (function (e, t, n) {
                if (null == e || (null == e.quality && null == e.guildPremiumTier)) return !0;
                let i = !1;
                return (
                    null != e.quality &&
                        (e.quality === a.uP.HIGH_STREAMING_QUALITY
                            ? (i = i || s.Ay.canStreamQuality(s.Ay.StreamQuality.HIGH, t))
                            : e.quality === a.uP.MID_STREAMING_QUALITY &&
                              (i = i || s.Ay.canStreamQuality(s.Ay.StreamQuality.MID, t))),
                    null != e.guildPremiumTier && (i = i || (0, r.yS)(n, e.guildPremiumTier)),
                    i
                );
            })(i, l, d)
        )
            return !0;
    return !1;
}
