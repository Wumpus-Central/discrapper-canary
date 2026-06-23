"use strict";
n.d(t, { V: () => c, s: () => u });
var i,
    r = n(17928),
    s = n(531260),
    a = n(721157),
    o = n(166403),
    l = n(31502),
    u =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.NO_ACCESS = 1)] = "NO_ACCESS"),
        (i[(i.HAS_ACCESS = 2)] = "HAS_ACCESS"),
        i);
function c() {
    let e = (0, l.l)("userSettings.connections"),
        t = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        { fractionalState: n } = (0, s.A)();
    return e ? ((0, a.ij)(t, n) ? 2 : 1) : 0;
}
