"use strict";
i.d(t, { B: () => c });
var r = i(9588),
    s = i(976860),
    n = i(650048),
    l = i(808728),
    a = i(309010),
    o = i(652215);
function c(e, t) {
    (0, r.K)({ kind: "channel" }),
        a.A.getChannelId(e) === t
            ? (0, s.bG)(o.BVt.CHANNEL(e, l.Ay.getDefaultChannel(e)?.id))
            : (0, s.bG)(n.A.defaultRoute);
}
