"use strict";
n.d(t, { A: () => o });
var i = n(258585),
    r = n(473145),
    a = n(158045),
    s = n(202541),
    l = n(753070);
function o(e, t, n, o, d, c) {
    if (e === l.jQ.PRESET_AUTO) return (0, i.eO)({ location: "canStreamWithSettings" }).allowAutoQuality;
    for (let i of l.ZV)
        if (
            (null == i.preset || e === i.preset) &&
            t === i.resolution &&
            n === i.fps &&
            (function (e, t, n) {
                if (null == e || (null == e.quality && null == e.guildPremiumTier)) return !0;
                let i = !1;
                if (null != e.quality)
                    switch (e.quality) {
                        case s.uP.HIGH_STREAMING_QUALITY:
                            i = i || a.Ay.canStreamQuality(a.Ay.StreamQuality.HIGH, t);
                            break;
                        case s.uP.MID_STREAMING_QUALITY:
                            i = i || a.Ay.canStreamQuality(a.Ay.StreamQuality.MID, t);
                            break;
                        default:
                            e.quality;
                    }
                return null != e.guildPremiumTier && (i = i || (0, r.yS)(n, e.guildPremiumTier)), i;
            })(i, o, d)
        )
            return !0;
    return !1;
}
