"use strict";
n.d(t, { V: () => c, s: () => u });
var i,
    r = n(17928),
    s = n(757036),
    a = n(287809),
    o = n(31502),
    l = n(788868),
    u =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.NON_NITRO = 1)] = "NON_NITRO"),
        (i[(i.NITRO = 2)] = "NITRO"),
        (i[(i.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
        i);
function c() {
    let e = (0, o.l)("userSettings.connections"),
        t = (0, s.L)(l.PremiumTypes.TIER_2),
        n = (0, r.bG)([a.default], () => a.default.getCurrentUser()?.isPremiumWithFractionalPremiumOnly() === !0);
    return e ? (t ? (n ? 3 : 2) : 1) : 0;
}
