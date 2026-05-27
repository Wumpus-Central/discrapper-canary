n.d(t, { V: () => d, s: () => o });
var i,
    l = n(17928),
    r = n(757036),
    s = n(287809),
    a = n(31502),
    c = n(788868),
    o =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.NON_NITRO = 1)] = "NON_NITRO"),
        (i[(i.NITRO = 2)] = "NITRO"),
        (i[(i.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
        i);
function d() {
    let e = (0, a.l)("userSettings.connections"),
        t = (0, r.L)(c.PremiumTypes.TIER_2),
        n = (0, l.bG)([s.default], () => s.default.getCurrentUser()?.isPremiumWithFractionalPremiumOnly() === !0);
    return e ? (t ? (n ? 3 : 2) : 1) : 0;
}
