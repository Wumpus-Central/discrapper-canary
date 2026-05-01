i.d(t, { V: () => d, s: () => c });
var s,
    a = i(531260),
    n = i(757036),
    r = i(31502),
    l = i(788868),
    c =
        (((s = {})[(s.NONE = 0)] = "NONE"),
        (s[(s.NON_NITRO = 1)] = "NON_NITRO"),
        (s[(s.NITRO = 2)] = "NITRO"),
        (s[(s.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
        s);
function d() {
    let e = (0, r.l)("userSettings.connections"),
        t = (0, n.L)(l.PremiumTypes.TIER_2),
        { fractionalState: i } = (0, a.A)();
    return e ? (t ? (i === l.xc.FP_ONLY ? 3 : 2) : 1) : 0;
}
