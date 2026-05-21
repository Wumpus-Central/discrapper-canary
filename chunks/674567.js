N.d(t, { V: () => T, s: () => R });
var i,
    r = N(17928),
    s = N(757036),
    u = N(287809),
    O = N(31502),
    n = N(788868),
    R =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.NON_NITRO = 1)] = "NON_NITRO"),
        (i[(i.NITRO = 2)] = "NITRO"),
        (i[(i.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
        i);
function T() {
    let e = (0, O.l)("userSettings.connections"),
        t = (0, s.L)(n.PremiumTypes.TIER_2),
        N = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.isPremiumWithFractionalPremiumOnly() === !0);
    return e ? (t ? (N ? 3 : 2) : 1) : 0;
}
