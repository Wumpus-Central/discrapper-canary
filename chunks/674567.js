a.d(t, { V: () => d, s: () => o });
var s,
    i = a(17928),
    n = a(757036),
    r = a(287809),
    l = a(31502),
    c = a(788868),
    o =
        (((s = {})[(s.NONE = 0)] = "NONE"),
        (s[(s.NON_NITRO = 1)] = "NON_NITRO"),
        (s[(s.NITRO = 2)] = "NITRO"),
        (s[(s.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
        s);
function d() {
    let e = (0, l.l)("userSettings.connections"),
        t = (0, n.L)(c.PremiumTypes.TIER_2),
        a = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.isPremiumWithFractionalPremiumOnly() === !0);
    return e ? (t ? (a ? 3 : 2) : 1) : 0;
}
