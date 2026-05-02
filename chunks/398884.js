"use strict";
n.d(t, { Sn: () => o }), n(17928), n(450510);
var i = n(71393),
    r = n(287809),
    s = n(927578),
    a = n(652215);
function o() {
    let e = i.A.getGuildCount() >= a.qlD,
        t = s.Ay.canUseIncreasedGuildCap(r.default.getCurrentUser());
    return e && !t;
}
