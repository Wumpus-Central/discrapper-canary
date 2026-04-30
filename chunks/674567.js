"use strict";
n.d(t, { V: () => u, s: () => l });
var i,
    r = n(531260),
    s = n(757036),
    a = n(31502),
    o = n(788868),
    l =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.NON_NITRO = 1)] = "NON_NITRO"),
        (i[(i.NITRO = 2)] = "NITRO"),
        (i[(i.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
        i);
function u() {
    let e = (0, a.l)("userSettings.connections"),
        t = (0, s.L)(o.PremiumTypes.TIER_2),
        { fractionalState: n } = (0, r.A)();
    return e ? (t ? (n === o.xc.FP_ONLY ? 3 : 2) : 1) : 0;
}
